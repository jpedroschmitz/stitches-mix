import { createStitches } from "@stitches/react";
import * as utils from "../dist";

const spacing = {
  0: `0px`,
  2: `0.5rem`,
  4: `1rem`,
  8: `2rem`
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    space: {
      ...spacing
    },
    sizes: {
      ...spacing
    },
    colors: {
      "space-cadet": `#130030`
    },
    radii: {
      base: `0.25rem`,
      md: `0.375rem`,
      lg: `0.5rem`
    }
  },
  utils
});
