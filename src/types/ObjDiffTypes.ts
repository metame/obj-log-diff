import {Validated} from "./ValidatorTypes";

export type ObjLogDiffArg = [string, object];
export type ObjDiffValidatorFn = (x: ObjLogDiffArg, y: ObjLogDiffArg) => Validated;
export type ObjEntries = Array<[string, any]>;
