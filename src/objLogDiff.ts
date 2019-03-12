import { ObjDiffValidatorFn, ObjEntries, ObjLogDiffArg } from "./types/ObjDiffTypes";
import { Message, Validated } from "./types/ValidatorTypes";
import { isObject } from "./utils";
import { validate } from "./validate";
import { validateKeysEqual } from "./validator/validateKeysEqual";
import { validateStrictEqual } from "./validator/validateStrictEqual";
import { validateTypesMatch } from "./validator/validateTypesMatch";
import { validateValuesEqual } from "./validator/validateValuesEqual";

export const objLogDiff = ([l1, v1]: ObjLogDiffArg) => ([l2, v2]: ObjLogDiffArg): Validated => {
    const validated = validate([
        validateTypesMatch,
    ].concat(isObject(v1) && isObject(v2) ? [
        validateKeysEqual,
        validateValuesEqual
    ] : [validateStrictEqual]))([l1, v1], [l2, v2]);

    return validated;
};
