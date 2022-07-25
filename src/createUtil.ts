import type { CSSProperties } from "@stitches/core";
import type * as Stitches from '@stitches/react';

export const createUtil =
  <T = Stitches.PropertyValue<'alignItems'>>(properties: Array<keyof CSSProperties>, selector?: string) =>
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
