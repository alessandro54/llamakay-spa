<script>
  import { onMount } from "svelte";
  import Layout from "../components/layout/Layout.svelte";
  import {getProfile} from "../requests/profile";

  const promise = getProfile('fe0e1751f0bcf14c7c1c4fb3336e8220');
</script>

<Layout>
  <div>
    <h1>My Profile</h1>
    <div>
      {#await promise}
        {:then { first_name, last_name, email, bio, experience, education }}
          <h1>{first_name} {last_name}</h1>
          <span>{email}</span>
          <div>
            <p>Personal Description: {bio}</p>
            <p>Professional Experience: {experience}</p>
            <p>Education: {education}</p>
          </div>
        {:catch error}
      {/await}
    </div>
  </div>
</Layout>