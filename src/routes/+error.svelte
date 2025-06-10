<script lang="ts">
    import {page} from '$app/state'
</script>

<h2 style:color="red">{page.status}</h2>
<p>{page.error?.message}</p>