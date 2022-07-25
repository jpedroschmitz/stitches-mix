import type { CSSProperties } from "@stitches/core";

export const createUtil =
  <T>(properties: Array<keyof CSSProperties>, selector?: string) =>
  (value: T) => {
    const cssProperties = properties.reduce(
      (acc, property) => ({
        ...acc,
        [property]: value,
      }),
      {}
    );

    if (selector) {
      return {
        [selector]: cssProperties,
      };
    }

    return cssProperties;
  };
