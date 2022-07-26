import type * as Stitches from "@stitches/react";

import { createUtil } from "./createUtil";

type Radii = Stitches.PropertyValue<"borderRadius">;

export const borderTopRadius = createUtil<Radii>([
  "borderTopLeftRadius",
  "borderTopRightRadius"
]);
export const borderBottomRadius = createUtil<Radii>([
  "borderBottomLeftRadius",
  "borderBottomRightRadius"
]);
export const borderLeftRadius = createUtil<Radii>([
  "borderBottomLeftRadius",
  "borderTopLeftRadius"
]);
export const borderRightRadius = createUtil<Radii>([
  "borderBottomRightRadius",
  "borderTopRightRadius"
]);
