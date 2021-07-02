<script>
  import {Router, Route} from "svelte-navigator";
  import Home from "../pages/Home.svelte";
  import Login from "../pages/Login.svelte";
  import Dashboard from "../pages/Dashboard.svelte"
  import Profile from "../pages/Profile.svelte"
  import JobDetails from "../pages/JobDetails.svelte"
</script>


<!--Here goes all the routing stuff -->
<Router>
  <Route path="/" component={Home}/>
  <Route path="jobs/*">
    <Route path="/" component={Dashboard}/>
    <Route path=":id" component={JobDetails}/>
  </Route>
  <Route path="login" component={Login}/>
  <Route path="profile" component={Profile}/>
</Router>


