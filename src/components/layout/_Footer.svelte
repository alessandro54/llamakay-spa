<script>
  import { useLocation } from "svelte-navigator"
  const location = useLocation()
</script>

{#if $location.pathname !== '/login'}
  <footer>
    This is a footer
  </footer>
{/if}