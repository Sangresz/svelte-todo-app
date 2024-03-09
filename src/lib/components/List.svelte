<script lang="ts">
  import EditIcon from "$lib/icons/EditIcon.svelte";
  import RightArrowIcon from "$lib/icons/RightArrowIcon.svelte";
  import DeleteIcon from "$lib/icons/DeleteIcon.svelte";

  import type { ListData } from "$lib/db.svelte";

  const { list } : {list: ListData} = $props<{list: ListData}>();
  
  const completedTodos = list.todos.filter((todo) => todo.state == 'done').length;
  const percentage = `${Math.round((completedTodos / list.todos.length) * 100) || 0}%`;
</script>

<div class="list">
  <div class="list-title">
    <span class="title">{list.label}</span>
    <div style="display: flex;">
      <button class="btn">
        <EditIcon />
      </button>
      <a class="btn" href={`/${list.id}`} style="display: block;">
        <RightArrowIcon />
      </a>
      <button class="btn">
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