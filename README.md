# Stitches Mix

Set of property utilities for Stitches with theme tokens support. Use the built-in utils, or easily build custom ones.

## Usage

To import all utils from the package:

```ts
import { createStyled } from "@stitches/react";
import * as utils from "stitches-mix";

export const { styled, css } = createStyled({
  utils
});
```

If you prefer, you can also import specific properties or groups. For more info, [click here](#import-specific-properties).

## Property overview

Do you have an idea for a new property? Please open an issue to suggest it.

### Spacing

Note: `spaceX` and `spaceY` are utilities for controlling the space between child elements. It's different from `mx` and `my`.

| Property | Group   | CSS Properties Reference                             |
| -------- | ------- | ---------------------------------------------------- |
| m        | Spacing | marginTop, marginRight, marginBottom, marginLeft     |
| mt       | Spacing | marginTop                                            |
| mb       | Spacing | marginBottom                                         |
| mr       | Spacing | marginRight                                          |
| ml       | Spacing | marginLeft                                           |
| mx       | Spacing | marginLeft, marginRight                              |
| my       | Spacing | marginTop, marginBottom                              |
| p        | Spacing | paddingTop, paddingRight, paddingBottom, paddingLeft |
| pt       | Spacing | paddingTop                                           |
| pb       | Spacing | paddingBottom                                        |
| pr       | Spacing | paddingRight                                         |
| pl       | Spacing | paddingLeft                                          |
| px       | Spacing | paddingLeft, paddingRight                            |
| py       | Spacing | paddingTop, paddingBottom                            |
| spaceX   | Spacing | marginRight, marginLeft                              |
| spaceY   | Spacing | marginTop, marginBottom                              |

### Radii

| Property           | Group | CSS Properties Reference                        |
| ------------------ | ----- | ----------------------------------------------- |
| borderTopRadius    | Radii | borderTopLeftRadius, borderTopRightRadius       |
| borderBottomRadius | Radii | borderBottomLeftRadius, borderBottomRightRadius |
| borderLeftRadius   | Radii | borderBottomLeftRadius, borderTopLeftRadius     |
| borderRightRadius  | Radii | borderBottomRightRadius, borderTopRightRadius   |

## Import specific properties

```ts
import { createStyled } from "@stitches/react";
import { mx, my } from "stitches-mix";

export const { styled, css } = createStyled({
  utils: {
    mx,
    my
  }
});
```

You can also import specific group utilities:

```ts
import { createStyled } from "@stitches/react";
import * as spacingUtils from "stitches-mix/spacing";

export const { styled, css } = createStyled({
  utils: {
    ...spacingUtils
  }
});
```

## Custom Utils

```ts
import type * as Stitches from "@stitches/react";
import { createStyled } from "@stitches/react";
import { createUtil } from "stitches-mix";

/**
 * We still haven't found a solution to infer the types based on the provided
 * properties, so you need to provide the types to the createUtil function.
 */

const size = createUtil<Stitches.PropertyValue<"width">>(["width", "height"]);

const borderTopRadius = createUtil<Stitches.PropertyValue<"borderRadius">>([
  "borderTopLeftRadius",
  "borderTopRightRadius"
]);

// You can more control over the utility by adding a selector
export const spaceX = createUtil<Stitches.PropertyValue<"margin">>(
  ["marginLeft"],
  "& > :not([hidden])~:not([hidden])"
);

export const { styled, css } = createStyled({
  utils: {
    size,
    borderTopRadius
  }
});
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.
