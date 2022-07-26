import type * as Stitches from "@stitches/react";

import { createUtil } from "./createUtil";

type Margin = Stitches.PropertyValue<"margin">;
type Padding = Stitches.PropertyValue<"padding">;

export const m = createUtil<Margin>([
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft"
]);
export const mt = createUtil<Margin>(["marginTop"]);
export const mb = createUtil<Margin>(["marginBottom"]);
export const mr = createUtil<Margin>(["marginRight"]);
export const ml = createUtil<Margin>(["marginLeft"]);
export const mx = createUtil<Margin>(["marginRight", "marginLeft"]);
export const my = createUtil<Margin>(["marginTop", "marginBottom"]);

export const p = createUtil<Padding>([
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft"
]);
export const pt = createUtil<Padding>(["paddingTop"]);
export const pb = createUtil<Padding>(["paddingBottom"]);
export const pr = createUtil<Padding>(["paddingRight"]);
export const pl = createUtil<Padding>(["paddingLeft"]);
export const px = createUtil<Padding>(["paddingRight", "paddingLeft"]);
export const py = createUtil<Padding>(["paddingTop", "paddingBottom"]);

export const spaceX = createUtil<Margin>(
  ["marginLeft"],
  "& > :not([hidden])~:not([hidden])"
);
export const spaceY = createUtil<Margin>(
  ["marginTop"],
  "& > :not([hidden])~:not([hidden])"
);
