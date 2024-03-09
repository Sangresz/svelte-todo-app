<script lang="ts">
  import LeftArrowIcon from "$lib/icons/LeftArrowIcon.svelte";
  import Todo from "$lib/components/Todo.svelte";
  
  import type { PageData } from "./$types";
  import type { TodoData } from "$lib/db.svelte";

  export let data: PageData;
  let list = data.list;

  const addTodo = (event: KeyboardEvent) => {
    if (list && event.key === "Enter") {
      const newTodo: TodoData = {
        id: window.crypto.randomUUID(),
        label: text,
        state: "tbd",
      }
      list.todos.push(newTodo);
      text = "";
    }
  };

  const deleteTodo = (id: string) => {
    let todos = list?.todos.filter((todo) => todo.id != id)
    if(list && todos) list.todos = todos
  }

  let text = "";
</script>

{#if list}
  <header>
    <h1>{list.label}</h1>
    <a href="/" class="btn">
      <LeftArrowIcon />
    </a>
  </header>
  <div class="container">
    <input type="text" bind:value={text}  class="text-input" placeholder="Inserisci todo..." onkeydown={addTodo}/>
    <section class="todos">
      <ul>
        {#each list.todos as todo (todo.id)}
          <Todo {todo} {deleteTodo} />
        {/each}
      </ul>
    </section>
  </div>
{/if}
