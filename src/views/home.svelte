<script>
  import userContext from "../stores/userContext.svelte.js";
  import {
    userStore,
    userName,
    welcomeUser,
  } from "../stores/userStore.svelte.js";

  let user = userContext.get();
</script>

<h4>Home ! {userStore.name}</h4>

<h4>Home! {$userName}</h4>

<h4>{$welcomeUser}</h4>
