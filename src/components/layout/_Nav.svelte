<script>
  import { Link, useLocation } from "svelte-navigator"
  const location = useLocation()
</script>

{#if $location.pathname !== '/login'}
  <header>
    <nav class='flex justify-between'>
      <div>
        <Link to="/">Llamakay</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  </header>
{/if}