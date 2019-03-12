import { ObjDiffValidatorFn, ObjLogDiffArg } from "../types/ObjDiffTypes";
import { printVal } from "../utils";

type TypesMatch = (x: any) => (y: any) => boolean;
const typesMatch: TypesMatch = x => y => typeof x === typeof y;

type TypeMsg = (x: ObjLogDiffArg) => string;
const typeMsg: TypeMsg = ([l, v]) => `${l} (${printVal(v)}) is ${typeof v}`;

type TypesMsg = (x: ObjLogDiffArg) => (y: ObjLogDiffArg) => string;
const typesMsg: TypesMsg = x => y => `Type of ${typeMsg(x)} while type of ${typeMsg(y)}`;

export const validateTypesMatch: ObjDiffValidatorFn = ([l1 , v1], [l2 , v2]) => typesMatch(v1)(v2)
                                                                                    ? [true, []]
                                                                                    : [false, [typesMsg([l1, v1])([l2, v2])]];
