<script>
  import User from "./views/user.svelte";
  let name = $state("world");

  // let welcome = $derived(`Good ${name}`);
  let welcome = $derived.by(() => `Good ${name}`);

  $effect(() => {
    $inspect.trace();
    let timer = setInterval(() => {
      console.log(name);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });
</script>

<h1>Hello {name},Svelte!</h1>
<h2>{welcome}</h2>
<button onclick={() => (name = "hboot")}>change</button>

{#if name == "hboot"}
  <User bind:name disabled={name != ""} />
{/if}

{#each [1, 2, 3, 4] as item}
  <p>{item}</p>
{:else}
  <p>no data</p>
{/each}

{#each { length: 5 }, name}
  <p>{name}</p>
{/each}

{#await import("./User.svelte")}
  <span>loading...</span>
{:then { default: User }}
  <User />
{:catch error}
  <span>error</span>
{/await}

{#snippet list(item)}
  <p>{item.name}</p>
{/snippet}

{#each UserList as item}
  {@render list(item)}
{/each}
{#each NoticeList as item}
  {@render list(item)}
{/each}

<div>
  {#snippet avatar(url)}
    <img src={url} alt="avatar" />
  {/snippet}

  <User {avatar} />
</div>

<!-- 这个是错的，它访问不到div元素中创建的片段 -->
<!-- {@render avatar(userInfo.avatUrl)} -->

<style>
  h1 {
    color: chocolate;
  }
</style>
