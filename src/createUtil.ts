import type { CSSProperties } from "@stitches/core";

export const createUtil =
  <T>(properties: Array<keyof CSSProperties>, conditional?: string) =>
  (value: T) => {
    const cssProperties = properties.reduce(
      (acc, property) => ({
        ...acc,
        [property]: value,
      }),
      {}
    );

    if (conditional) {
      return {
        [conditional]: cssProperties,
      };
    }

    return cssProperties;
  };
