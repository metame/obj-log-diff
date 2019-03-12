import { ObjDiffValidatorFn, ObjLogDiffArg } from "../types/ObjDiffTypes";
import { Message, Validated } from "../types/ValidatorTypes";

const elsNotIn = <T> (x: T[]) => (y: T[]): T[] => x.filter((a) => y.indexOf(a) === -1);
const toKeyMessage = (pre: string) => (ks: string[]): Message[] => ks.length > 0 ? [`${pre} ${ks.join()}`] : [];
const keyMsg = (l1: string) => (l2: string) => `${l1} has key(s) that ${l2} does not: `;
const getKeysMessages = ([l1, v1]: ObjLogDiffArg) => ([l2, v2]: ObjLogDiffArg): Message[] => toKeyMessage(keyMsg(l1)(l2))
                                                                                                         (elsNotIn(Object.keys(v1))(Object.keys(v2)))
                                                                                            .concat(toKeyMessage(keyMsg(l1)(l2))
                                                                                                   (elsNotIn(Object.keys(v2))(Object.keys(v1))));

export const validateKeysEqual: ObjDiffValidatorFn = (v1, v2) => [getKeysMessages(v1)(v2)].map((ms) => [ms.length === 0, ms] as Validated)[0];
