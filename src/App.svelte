<script>
  let name = $state("world");

  // let welcome = $derived(`Good ${name}`);
  let welcome = $derived.by(() => `Good ${name}`);

  $effect(() => {
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

<style>
  h1 {
    color: chocolate;
  }
</style>
