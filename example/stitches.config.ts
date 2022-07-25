import { createStitches } from "@stitches/react";
import * as utils from "../dist";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      "space-cadet": `#130030`,
    },
  },
  utils,
});
