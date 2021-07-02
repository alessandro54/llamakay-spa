<script>
  import Layout from "../components/layout/Layout.svelte";
  import { useParams } from "svelte-navigator";
  import {getJob} from "../requests/jobs";
  const params = useParams();
  const promise = getJob($params.id)

</script>
<Layout>
  {#await promise}
    <p>Loading</p>
  {:then job}
    <h1>{job.title}</h1>
    <div class="w-16 mr-5">
      <img src={job.company.logo_url} alt={job.title} >
    </div>
    <div>
      <p>{job.description}</p>
    </div>
  {:catch error}
    <p>There was an error</p>
  {/await}
</Layout>