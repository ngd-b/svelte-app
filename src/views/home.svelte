<script>
  import userContext from "../stores/userContext.svelte.js";
  import { userStore } from "../stores/userStore.svelte.js";

  let user = userContext.get();
</script>

<h4>Home ! {userStore.name}</h4>
