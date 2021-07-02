<script>
  import { formatDistance} from 'date-fns'
  import { useNavigate } from "svelte-navigator"
  export let id, title, seniority, active, created_at, company;

  const navigate = useNavigate();
  const changeExp = (exp) => {
    return {
      noexp: 'No Experience',
      internship: 'Internship',
      junior: 'Junior',
      'semi-senior': 'Semi Senior',
      'senior': 'Senior'
    }[exp]
  }
  const capitalize =(string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

</script>

<div class="w-full border-b hover:bg-gray-100 p-5 cursor-pointer" on:click|once="{() => navigate(id.toString())}">
  <div class="flex items-center justify-between">
    <div class="flex">
      <div class="w-16 mr-5">
        <img src={company.logo_url} alt={title} >
      </div>
      <div class="flex flex-col">
        <span class="bold">{capitalize(title)}</span>
        <span>{company.name} - {changeExp(seniority)}</span>
      </div>
    </div>
    {formatDistance(new Date(created_at), new Date(), { addSuffix: true })}
  </div>
  <div>

  </div>
</div>