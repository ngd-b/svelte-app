import { compile as SvelteCompile } from "svelte/compiler";
import fs from "node:fs";

// 读取.svelte文件内容
const source = fs.readFileSync("./src/App.svelte", "utf-8");

// 编译输出组件内容
const result = SvelteCompile(source, {
  name: "App",
});

// 写入文件 js
fs.writeFileSync("./dist/bundle.js", result.js.code);
// css
fs.writeFileSync("./dist/bundle.css", result.css.code);
