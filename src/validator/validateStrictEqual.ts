import { ObjDiffValidatorFn, ObjLogDiffArg } from "../types/ObjDiffTypes";
import { printVal } from "../utils";

type StrictEqualMsg = (x: ObjLogDiffArg) => (y: ObjLogDiffArg) => string;
const strictEqualMsg: StrictEqualMsg = ([l1, v1]) => ([l2, v2]) => `${l1} (${printVal(v1)}) does not strictly equal ${l2} (${printVal(v2)})`;

export const validateStrictEqual: ObjDiffValidatorFn = ([l1 , v1], [l2 , v2]) => v1 === v2
                                                                                    ? [true, []]
                                                                                    : [false, [strictEqualMsg([l1, v1])([l2, v2])]];
