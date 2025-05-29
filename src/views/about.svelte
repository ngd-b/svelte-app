<script>
  import { getContext } from "svelte";
  import userContext from "../stores/userContext.svelte.js";

  let user = userContext.get();

  let name = getContext("name");
</script>

<h4>About! {name.name}</h4>
<h5>{user.name}</h5>
