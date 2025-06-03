/**
 * 共享用户信息
 */
export const userStore = $state({
  name: "hboot",
});

import { writable, readable, derived, readonly } from "svelte/store";

export const userName = writable("Store hboot", (set) => {
  console.log("Only run once");
  setTimeout(() => {
    set("Store Admin");
  }, 4 * 1000);
});

// 订阅变化
userName.subscribe((val) => {
  console.log("The store userName changed:", val);
});

export const userAge = readable(18);

export const welcomeUser = derived(
  [userName, userAge],
  ([name, age], set) => {
    set(`Welcome ${name}. You are ${age} years old.`);
    // return `Welcome ${name}`;
  },
  "Welcome User"
);

export const userNameReadonly = readonly(userName);
