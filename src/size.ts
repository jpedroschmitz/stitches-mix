import type * as Stitches from "@stitches/react";

import { createUtil } from "./createUtil";

type Size = Stitches.PropertyValue<"width">

export const w = createUtil<Size>([
  "width",
]);
export const h = createUtil<Size>([
  "height",
]);
export const minW = createUtil<Size>([
  "minWidth",
]);
export const minH = createUtil<Size>([
  "minHeight",
]);
export const size = createUtil<Size>([
  "width",
  "height"
]);
export const minSize = createUtil<Size>([
  "minWidth",
  "minHeight"
]);
