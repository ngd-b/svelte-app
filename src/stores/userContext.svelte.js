import { setContext, getContext } from "svelte";

const userContextId = {};

export default {
  get() {
    console.log("get user context", getContext(userContextId));
    return getContext(userContextId) || {};
  },
  set(data = {}) {
    console.log("set user context", data);
    setContext(userContextId, data);

    console.log("get user context", getContext(userContextId));
  },
};
