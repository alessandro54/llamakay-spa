<script>
    import Layout from "../components/layout/Layout.svelte";
    import {fetchJobs} from "../requests/jobs";
    import Job from "../components/Job.svelte";
    const promise = fetchJobs()
</script>
<Layout>
    <div class="flex flex-col lg:w-10/12 overflow-y-scroll">
        <div class="flex m-2">
            <h1 class="text-xl">Jobs for you</h1>
        </div>
        <div class="p-10">
            {#await promise}
                <p>Loading</p>
            {:then jobs}
                {#each jobs as job}
                    <Job {...job}/>
                {/each}
            {:catch error}
                <p>There was an error</p>
            {/await}
        </div>
    </div>
</Layout>