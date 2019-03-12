import { ObjEntries } from "./types/ObjDiffTypes";

export const entries = (x: object): ObjEntries => (Object as any).entries(x);
export const isObject = (o: any) => typeof o === "object";
export const printVal = (v: any) => [`${isObject(v) ? JSON.stringify(v) : v}`].map(s => s.length > 10 ? `${s.slice(0, 10)}...` : s)[0];
