import { createUtil } from "./createUtil";

export const borderTopRadius = createUtil([
  "borderTopLeftRadius",
  "borderTopRightRadius",
]);
export const borderBottomRadius = createUtil([
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
]);
export const borderLeftRadius = createUtil([
  "borderBottomLeftRadius",
  "borderTopLeftRadius",
]);
export const borderRightRadius = createUtil([
  "borderBottomRightRadius",
  "borderTopRightRadius",
]);
