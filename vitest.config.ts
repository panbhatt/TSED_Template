// vitest.config.ts
import swc from "unplugin-swc";
import {defineConfig} from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    root: "./"
  },
  plugins: [
    // This is required to build the test files with SWC
    swc.vite({
      sourceMaps: "inline",

      jsc: {
        target: "es2022",
        externalHelpers: true,
        keepClassNames: true,
        parser: {
          syntax: "typescript",
          tsx: true,
          decorators: true,
          dynamicImport: true,
          importMeta: true,
          preserveAllComments: true
        },
        transform: {
          useDefineForClassFields: false,
          legacyDecorator: true,
          decoratorMetadata: true
        }
      },
      module: {
        type: "es6",
        strictMode: true,
        lazy: false,
        noInterop: false
      },
      isModule: true
    })
  ]
});