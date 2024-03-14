<script lang="ts">
  import EditIcon from "$lib/icons/EditIcon.svelte";
  import RightArrowIcon from "$lib/icons/RightArrowIcon.svelte";
  import DeleteIcon from "$lib/icons/DeleteIcon.svelte";
  import type { ListData } from "$lib/db.svelte";
  import { db } from "$lib/db.svelte";

  const { list } = $props<{
    list: ListData;
  }>();

  let disabled = $state(true);
  let text = $state(list.label);

  const handleDelete = () => {
    let confirm = window.confirm("Are you sure you want to delete this list?");
    if (confirm)
      db.deleteList(list.id);
  };

  const toggleEdit = () => {
    if(!disabled) {
      list.label = text;
    }
    disabled = !disabled;
  };

  const completedTodos = list.todos.filter(
    (todo) => todo.state == "done",
  ).length;
  const percentage = `${Math.round((completedTodos / list.todos.length) * 100) || 0}%`;
</script>

<div class="list">
  <div class="list-title">
    <input class="title" class:disabled bind:value={text} />
    <div style="display: flex;">
      <button class="btn" onclick={toggleEdit}>
        <EditIcon />
      </button>
      <a class="btn" href={`/${list.id}`} style="display: block;">
        <RightArrowIcon />
      </a>
      <button class="btn" onclick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  </div>
  <div class="bar">
    <span class="percentage" style={`width: ${percentage}`} data-value="90%">
      <span class="tooltip">{percentage}</span>
    </span>
  </div>
</div>

<style>
  .disabled {
    pointer-events: none;
    border: none;
  }
</style>
