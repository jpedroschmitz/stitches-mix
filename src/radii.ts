import type { PropertyValue } from "@stitches/react";

import { createUtil } from "./createUtil";

type Radii = PropertyValue<"borderRadius">;

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
