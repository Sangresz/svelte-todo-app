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

  const updateTodo = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      todo.label = text
      editable = false
    }
  }

  let editable = $state(false);
  let text = $state(todo.label);
</script>

<li>
  <div class="item">
    <div class:hidden={editable} on:dblclick={() => editable = !editable} role="textbox" tabindex={0}>
      <input type="checkbox" checked={todo.state == "done"} onchange={() => (toggleState(todo))} />
      <span class:completed={todo.state == "done"}>{todo.label}</span>
      <button onclick={() => deleteTodo(todo.id)}>&times;</button>
    </div>
    <input class="text-input" class:hidden={!editable} type="text" bind:value={text} onkeydown={updateTodo} />
  </div>
</li>