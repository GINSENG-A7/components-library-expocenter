import vue from "rollup-plugin-vue";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import ts from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: [
    // {
    // 	name: 'Components-library-expocenter',
    // 	exports: 'named',
    // },
    {
      format: "esm",
      file: "dist/library.mjs",
    },
    {
      format: "cjs",
      file: "dist/library.js",
    },
  ],
  plugins: [vue(), peerDepsExternal(), ts(), postcss()],
};
