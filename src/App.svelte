<script>
  import { fade } from "svelte/transition";
  import User from "./views/user.svelte";
  import Home from "./views/home.svelte";
  import { elasticInOut } from "svelte/easing";
  import { flip } from "svelte/animate";
  import { setContext, onMount, tick } from "svelte";
  import userContext from "./stores/userContext.svelte.js";

  let name = $state("world");
  let total = $state(10);
  let checked = $state(true);
  let names = $state([]);
  let files = $state();
  let buttonPrimary = $state(["primary"]);
  let userInfo = $state({
    name: "svelte",
  });

  onMount(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
    };
  });
  setContext("name", userInfo);
  userContext.set(userInfo);
  export const UserGlobal = userInfo;
  let divRef = null;
  // let welcome = $derived(`Good ${name}`);
  let welcome = $derived.by(() => `Good ${name}`);

  $effect(() => {
    console.log(divRef.getBoundingClientRect());
  });
  $effect.pre(() => {
    console.log("dom update");
    tick().then(() => {
      console.log("dom update done");
    });
  });
  $effect(() => {
    $inspect.trace();
    let timer = setInterval(() => {
      console.log(name);
      names.push(name);
      userInfo.name = "hboot";
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  const myFade = (node, params, options) => {
    // 自定义逻辑

    // 返回按照标准定义
    return {
      delay: params.delay || 0,
      duration: params.duration || 400,
      easing: params.easing || elasticInOut,
    };
  };

  const onerror = (error, reset) => {
    console.error("Error occurred:", error);
    // 可以在这里处理错误
    // 比如重置状态或显示错误信息
  };

  const handleResize = () => {
    console.log("Window resized");
    // 可以在这里处理窗口大小变化
  };
</script>

<svelte:window onresize={handleResize} />
<svelte:head>
  <title>Svelte App</title>
</svelte:head>
<h1>
  <style>
    h1 {
      color: blue;
    }
    p {
      color: green;
    }
  </style>
  Hello {name},Svelte!
</h1>
<h2 style="font-size:26px;" style:color|important="red">{welcome}</h2>
<button class:buttonPrimary onclick={() => (name = "hboot")}>change</button>
<!-- {#if total > 50}
  {#if name == "hboot"}
    <div
      transition:fade|global={{ duration: 500, delay: 200, easing: () => {} }}
    >
      <User bind:name disabled={name != ""} />
    </div>
  {/if}
{/if}
{#if name == "hboot"}
  <div in:myFade>
    <User />
  </div>
{/if} -->
{#each [1, 2, 3, 4] as item (item)}
  <p animate:flip>{item}</p>
{:else}
  <p>no data</p>
{/each}

{#each { length: 5 }, name}
  <p>{name}</p>
{/each}

<!-- {#await import("./User.svelte")}
  <span>loading...</span>
{:then { default: User }}
  <User />
{:catch error}
  <span>error</span>
{/await} -->

<!-- {#snippet list(item)}
  <p>{item.name}</p>
{/snippet}

{#each UserList as item}
  {@render list(item)}
{/each}
{#each NoticeList as item}
  {@render list(item)}
{/each} -->

<div bind:this={divRef}>
  {#snippet avatar(url)}
    <img src={url} alt="avatar" />
  {/snippet}

  <User {avatar} />
</div>

<User bind:name />
<User bind:name={() => name, (val) => (name = val)} />

{#await import("./views/home.svelte")}
  <p>load home component...</p>
{:then { default: Home }}
  <Home />
{/await}
<svelte:boundary {onerror}>
  <User bind:name />

  {#snippet failed(error, reset)}
    <button onclick={() => reset()}>Oops, Try again</button>
  {/snippet}
</svelte:boundary>

<!-- input -->
<input bind:value={name} defaultValue="hboot" />
<!-- input number-->
<input bind:value={total} type="number" defaultValue={100} min={0} max={200} />
<!-- input checkbox -->
<input bind:checked type="checkbox" defaultChecked={true} />
<!-- input select -->
<select bind:value={name}>
  <option value="hboot">hboot</option>
  <option value="admin" checked>admin</option>
  <option value="test">test</option>
</select>
<!-- input radio -->
<input bind:group={names} type="radio" value="hboot" />
<input bind:group={names} type="radio" value="admin" />
<!-- input files-->
<input bind:files multiple type="file" />

<!-- 这个是错的，它访问不到div元素中创建的片段 -->
<!-- {@render avatar(userInfo.avatUrl)} -->

<style>
  h1 {
    color: chocolate;
  }
</style>
