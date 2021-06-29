<script>
  import {Router, Route} from "svelte-navigator";
  import Home from "../pages/Home.svelte";
  import Login from "../pages/Login.svelte";
  import Dashboard from "../pages/Dashboard.svelte"
</script>


<!--Here goes all the routing stuff -->
<Router>
  <Route path="/" component={Home}/>
  <Route path="/dashboard" component={Dashboard}/>
  <Route path="login" component={Login}/>
</Router>


