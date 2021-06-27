<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Nav from "./components/Nav.svelte";
  import Login from "./pages/Login.svelte";
  import Footer from "./components/Footer.svelte";
</script>


<Router>
  <Nav/>
  <main>
    <Route path='login'>
      <Login/>
    </Route>
  </main>
  <Footer/>
</Router>