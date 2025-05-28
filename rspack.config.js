import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";

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
  module: {
    rules: [
      {
        test: /\.svelte$/,
        loader: "./loaders/svelte-loader.cjs",
      },
    ],
  },
});
