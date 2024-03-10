<script lang="ts">
  import { db } from "$lib/db.svelte";
  import List from "$lib/components/List.svelte";

  const deleteList = (id: string) => {
    db.deleteList(id);
  };

  let string = $state("")
</script>

<h1>SAW TODO</h1>
<div class="container">
  <input type="text" bind:value={string} class="text-input" placeholder="Inserisci lista..." on:keydown={(event: KeyboardEvent) => {
    if(event.key == "Enter") {
      db.addList(string)
      string = ""
    }
  }}/>
  {#each db.lists as list (list.id)}
    <List {list} {deleteList} />
  {/each}
</div>
