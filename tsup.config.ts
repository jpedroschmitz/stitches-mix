import { defineConfig } from "tsup";

export default defineConfig(options => ({
  entry: ["src/index.ts", "src/spacing.ts", "src/radii.ts"],
  splitting: true,
  minify: !options.watch,
  sourcemap: true,
  dts: true,
  clean: true,
  format: ["esm"]
}));
