import App from "./dist/bundle.js";
import { mount } from "svelte";

mount(App, {
  target: document.getElementById("app"),
});
