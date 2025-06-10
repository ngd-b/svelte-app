<script lang="ts">
    const { children } = $props();
</script>
<nav>
    <a href="/">主页</a>
    <a href="/user">用户</a>
    <a href="/about">关于</a>
</nav>

{@render children()}