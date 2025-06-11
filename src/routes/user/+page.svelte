<script lang="ts">
    import Avatar from './avatar.svelte';

    const { data } = $props();
</script>
<h3>User! {data.title} </h3>
<a href="/">Home</a>
<Avatar />