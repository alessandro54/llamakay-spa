<script>
  import { Link, useLocation } from "svelte-navigator"
  import FaBars from 'svelte-icons/fa/FaBars.svelte'
  const location = useLocation()
</script>

{#if $location.pathname !== '/login'}
  <header>
    <nav class='px-5 w-full flex justify-between items-center h-smnav lg:h-nav border-b border-gray-200'>
      <div>
        <Link to="/">Llamakay</Link>
      </div>
      <div class="icon lg:hidden">
        <FaBars/>
      </div>
    </nav>
  </header>
{/if}

<style>
  .icon {
      width: 16px;
  }
</style>