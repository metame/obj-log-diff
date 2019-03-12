import { objLogDiff } from "../objLogDiff";
import { ObjDiffValidatorFn, ObjEntries, ObjLogDiffArg } from "../types/ObjDiffTypes";
import { Validated } from "../types/ValidatorTypes";
import { entries, isObject } from "../utils";
import { mergeValidations } from "../validate";

type EntriesDiff = (x: ObjEntries) => (y: {[key: string]: any}) => [string, any, any][];
const entriesDiff: EntriesDiff = x => y => x.filter(([k, v]) => !!y[k] && v !== y[k])
                                            .map(([k, v]) => [k, v, y[k]] as [string, any, any]);

type ValMsg = (l1: string) => (l2: string) => (k: string) => (v1v: any) => (v2v: any) => string;
const valMsg: ValMsg = l1 => l2 => k => v1v => v2v => `${l1} has ${v1v} for key ${k} while ${l2} has ${v2v}`;

type ValsDiffBasic = (m: string) => Validated;
const valsDiffBasic: ValsDiffBasic = (m: string) => [false, [m]];

type ValidateValues = (x: ObjLogDiffArg, y: ObjLogDiffArg) => Validated[];
const validateValues: ValidateValues = ([l1, v1], [l2, v2]) => entriesDiff(entries(v1))(v2).map(([k, v1v, v2v]) =>
                                                                    isObject(v1v) ? objLogDiff([`${l1}.${k}`, v1v])([`${l2}.${k}`, v2v])
                                                                                  : valsDiffBasic(valMsg(l1)(l2)(k)(v1v)(v2v)));

export const validateValuesEqual: ObjDiffValidatorFn = (v1, v2) => mergeValidations(validateValues(v1, v2));
