const { compile: SvelteCompile } = require("svelte/compiler");

module.exports = function (source) {
  let result = SvelteCompile(source, {});
  return result.js.code;
};
