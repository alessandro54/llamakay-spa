<script>
  import Nav from "./_Nav.svelte";
  import Sidebar from "./_Sidebar.svelte"


</script>

<main class="w-screen h-screen">
  <Nav/>
  <section class="flex h-smbody lg:h-body">
    <Sidebar/>
    <slot/>
  </section>
</main>
