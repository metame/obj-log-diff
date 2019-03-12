
type ObjLogDiffArg = [string, object];
type Message = string;
type Validated = [boolean, Message[]];
type ObjDiffValidatorFn = (x: ObjLogDiffArg, y: ObjLogDiffArg) => Validated;
type ObjEntries = Array<[string, any]>;

const entries = (x: object): ObjEntries => (Object as any).entries(x);
const printVal = (v: any) => [`${isObject(v) ? JSON.stringify(v) : v}`].map(s => s.length > 10 ? `${s.slice(0, 10)}...` : s)[0];
const isObject = (o: any) => typeof o === "object";

const mergeValidations = (vs: Validated[]): Validated => vs.reduce(([valid, msgs], [v, ms]) => [valid && v, msgs.concat(ms)], [true, []]);

const elsNotIn = <T> (x: T[]) => (y: T[]): T[] => x.filter((a) => y.indexOf(a) === -1);
const toKeyMessage = (pre: string) => (ks: string[]): Message[] => ks.length > 0 ? [`${pre} ${ks.join()}`] : [];
const keyMsg = (l1: string) => (l2: string) => `${l1} has key(s) that ${l2} does not: `;
const getKeysMessages = ([l1, v1]: ObjLogDiffArg) => ([l2, v2]: ObjLogDiffArg): Message[] => toKeyMessage(keyMsg(l1)(l2))
                                                                                                         (elsNotIn(Object.keys(v1))(Object.keys(v2)))
                                                                                            .concat(toKeyMessage(keyMsg(l1)(l2))
                                                                                                   (elsNotIn(Object.keys(v2))(Object.keys(v1))));

const validateKeysEqual: ObjDiffValidatorFn = (v1, v2) => [getKeysMessages(v1)(v2)].map((ms) => [ms.length === 0, ms] as Validated)[0];

type TypesMatch = (x: any) => (y: any) => boolean;
const typesMatch: TypesMatch = x => y => typeof x === typeof y;

type TypeMsg = (x: ObjLogDiffArg) => string;
const typeMsg: TypeMsg = ([l, v]) => `${l} (${printVal(v)}) is ${typeof v}`;

type TypesMsg = (x: ObjLogDiffArg) => (y: ObjLogDiffArg) => string;
const typesMsg: TypesMsg = x => y => `Type of ${typeMsg(x)} while type of ${typeMsg(y)}`;

const validateTypesMatch: ObjDiffValidatorFn = ([l1 , v1], [l2 , v2]) => typesMatch(v1)(v2)
                                                                            ? [true, []]
                                                                            : [false, [typesMsg([l1, v1])([l2, v2])]];

type StrictEqualMsg = (x: ObjLogDiffArg) => (y: ObjLogDiffArg) => string;
const strictEqualMsg: StrictEqualMsg = ([l1, v1]) => ([l2, v2]) => `${l1} (${printVal(v1)}) does not strictly equal ${l2} (${printVal(v2)})`;

const validateStrictEqual: ObjDiffValidatorFn = ([l1 , v1], [l2 , v2]) => v1 === v2 ? [true, []] : [false, [strictEqualMsg([l1, v1])([l2, v2])]];

type EntriesDiff = (x: ObjEntries) => (y: {[key: string]: any}) => [string, any, any][];
const entriesDiff: EntriesDiff = x => y => x.filter(([k, v]) => !!y[k] && v !== y[k])
                                            .map(([k, v]) => [k, v, y[k]] as [string, any, any]);

type ValMsg = (l1: string) => (l2: string) => (k: string) => (v1v: any) => (v2v: any) => string;
const valMsg: ValMsg = l1 => l2 => k => v1v => v2v => `${l1} has ${v1v} for key ${k} while ${l2} has ${v2v}`;

type ValsDiffBasic = (m: string) => Validated;
const valsDiffBasic: ValsDiffBasic = (m: string) => [false, [m]];

type ValidateValues = (x: ObjLogDiffArg, y: ObjLogDiffArg) => Validated[];
const validateValues: ValidateValues = ([l1, v1], [l2, v2]) => entriesDiff(entries(v1))(v2).map(([k, v1v, v2v]) =>
                                                                    isObject(v1v) ? objLogDiff([`${l1}:${k}`, v1v])([`${l2}:${k}`, v2v])
                                                                                  : valsDiffBasic(valMsg(l1)(l2)(k)(v1v)(v2v)));

const validateValuesEqual: ObjDiffValidatorFn = (v1, v2) => mergeValidations(validateValues(v1, v2));

type Validate = (fns: ObjDiffValidatorFn[]) => (x: ObjLogDiffArg, y: ObjLogDiffArg) => Validated;
const validate: Validate = fns => (x, y) => mergeValidations(fns.map(fn => fn(x, y)));

export const objLogDiff = ([l1, v1]: ObjLogDiffArg) => ([l2, v2]: ObjLogDiffArg): Validated => {
    const validated = validate([
        validateTypesMatch,
    ].concat(isObject(v1) && isObject(v2) ? [
        validateKeysEqual,
        validateValuesEqual
    ] : [validateStrictEqual]))([l1, v1], [l2, v2]);

    return validated;
};
