<script>
  let { name = $bindable(), children } = $props();
</script>

<h3>Heloo User! receive {props.name}</h3>

<div>
  {@render children()}
</div>

<div>{@html content}</div>

<style>
  .html-container :global {
    p {
      color: red;
    }
  }
</style>
