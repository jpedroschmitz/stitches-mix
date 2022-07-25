import { createUtil } from "./createUtil";

export const m = createUtil([
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
]);
export const mt = createUtil(["marginTop"]);
export const mb = createUtil(["marginBottom"]);
export const mr = createUtil(["marginRight"]);
export const ml = createUtil(["marginLeft"]);
export const mx = createUtil(["marginRight", "marginLeft"]);
export const my = createUtil(["marginTop", "marginBottom"]);

export const p = createUtil([
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
]);
export const pt = createUtil(["paddingTop"]);
export const pb = createUtil(["paddingBottom"]);
export const pr = createUtil(["paddingRight"]);
export const pl = createUtil(["paddingLeft"]);
export const px = createUtil(["paddingRight", "paddingLeft"]);
export const py = createUtil(["paddingTop", "paddingBottom"]);

export const spaceX = createUtil(
  ["marginLeft"],
  "& > :not([hidden])~:not([hidden])"
);
export const spaceY = createUtil(
  ["marginTop"],
  "& > :not([hidden])~:not([hidden])"
);
