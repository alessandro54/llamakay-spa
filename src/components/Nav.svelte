<script>
  import { Link } from "svelte-navigator"
</script>

<header>
  <nav>
    <div>
      <Link to="/">Llamakay</Link>
    </div>
    <div>
      <Link to="/login">Login</Link>
    </div>
  </nav>
</header>

<style>
  nav {
      display: flex;
      justify-content: space-between;
  }
</style>