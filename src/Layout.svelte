<script>
  import {Router} from "svelte-navigator";
  import Nav from "./components/Nav.svelte";
  import Footer from "./components/Footer.svelte";

</script>

<Router>
  <Nav/>
    <slot/>
  <Footer/>
</Router>