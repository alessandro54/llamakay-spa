<script>
  import { Link } from "svelte-navigator"
  import FaBriefcase from 'svelte-icons/fa/FaBriefcase.svelte'
  import FaBookOpen from 'svelte-icons/fa/FaBookOpen.svelte'
  import FaUser from 'svelte-icons/fa/FaUser.svelte'

  const buttons = [
    { uri: '/jobs', icon: FaBriefcase, description: 'Jobs for You' },
    { uri: '/applications', icon: FaBookOpen, description: 'Your Applications' },
    { uri: '/profile', icon: FaUser, description: 'Edit your profile'}
  ]
</script>

<div class="hidden lg:flex lg:flex-col lg:w-2/12 bg-gray-100 h-full py-5">
  {#each buttons as { uri, icon, description}}
    <Link to={uri} class="text-sm my-1 py-1 hover:bg-gray-300">
      <div class="w-full flex justify-start items-center px-5 py-2">
        <div class="icon mr-2"><svelte:component this="{icon}"/></div>
        <span>{description}</span>
      </div>
    </Link>
  {/each}
</div>

<style>
.icon {
    width: 15px;
    color: black;
}
</style>