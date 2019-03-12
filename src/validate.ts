import { ObjDiffValidatorFn, ObjLogDiffArg } from "./types/ObjDiffTypes";
import { Validated } from "./types/ValidatorTypes";

export const mergeValidations = (vs: Validated[]): Validated => vs.reduce(([valid, msgs], [v, ms]) => [valid && v, msgs.concat(ms)], [true, []]);

type Validate = (fns: ObjDiffValidatorFn[]) => (x: ObjLogDiffArg, y: ObjLogDiffArg) => Validated;
export const validate: Validate = fns => (x, y) => mergeValidations(fns.map(fn => fn(x, y)));
