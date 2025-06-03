<script>
  import About from "./about.svelte";
  import userContext from "../stores/userContext.svelte.js";
  import { userStore, userName } from "../stores/userStore.svelte.js";

  let { name = $bindable(), children } = $props();

  let userInfo = $state({
    name: "User",
  });
  userContext.set({ ...userInfo });

  $effect(() => {
    setTimeout(() => {
      userStore.name = "Admin";
      //
      //userName.set("Store Admin");
    }, 4 * 1000);
  });
  let content = `<div>
  <p>This is a paragraph</p>
  <h1>This is a heading</h1>
</div>`;
  let divAttch = (element) => {
    // DOM节点渲染后执行
    console.log("divAttch", element);
    $effect(() => {
      element.textContent = name;
    });

    return () => {
      // 卸载
    };
  };
</script>

<About />
<h3>Heloo User! receive {name}</h3>

<div>
  {@render children?.()}
</div>

<div {@attach divAttch}>{@html content}</div>

<style>
  .html-container :global {
    p {
      color: red;
    }
    h1 {
      font-weight: normal;
    }
  }
</style>
