<script lang="ts">
  import type { TodoData } from "$lib/db.svelte";

  let { todo, deleteTodo } = $props<{todo: TodoData, deleteTodo: Function}>();

  const toggleState = (todo: TodoData) => {
    if(todo.state === "done") {
      todo.state = "tbd";
    } else {
      todo.state = "done";
    }
  };
</script>

<li>
  <div class="item">
    <div>
      <input type="checkbox" checked={todo.state == "done"} onchange={() => (toggleState(todo))} />
      <span class:completed={todo.state == "done"}>{todo.label}</span>
      <button onclick={() => deleteTodo(todo.id)}>&times;</button>
    </div>
  </div>
</li>