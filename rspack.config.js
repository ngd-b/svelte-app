import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const prod = process.env.NODE_ENV === "production";

export default defineConfig({
  entry: {
    index: "./src/main.js",
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      title: "Svelte App",
      template: "./public/index.html",
    }),
  ],
  resolve: {
    // alias: {
    //   svelte: path.dirname(require.resolve("svelte/package.json")),
    // },
    extensions: [".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  module: {
    rules: [
      {
        test: /\.svelte/,
        // loader: "./loaders/svelte-loader.cjs",
        use: [
          {
            loader: "svelte-loader",
            options: {
              // compilerOptions: {
              //   dev: true,
              // },
            },
          },
        ],
      },
    ],
  },
});
