<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData
  
  const list = data.list
</script>

{#if list}
  <h1>{list.label}</h1>
{/if}