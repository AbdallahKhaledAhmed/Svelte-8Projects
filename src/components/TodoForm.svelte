<script lang="ts">
	import type { Todo } from '../types.ts';

	let { todos, filter } = $props();
	let task = $state('');
	let doneTodos = $derived(todos.v.filter((ele: Todo) => ele.done));

	function formSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (task !== '') todos.v.push({ id: todos.v.length, name: task, done: false });
		task = '';
	}
</script>

{#snippet filterButton(filterBy: string)}
	<button
		class="btn join-item {filter.v === filterBy ? 'bg-[#262d36]/50' : null}"
		onclick={() => {
			filter.v = filterBy;
		}}>{filterBy}</button
	>
{/snippet}

<form class="flex flex-col" onsubmit={formSubmit}>
	<label>
		<p>Task</p>
		<input type="text" class="input w-full" bind:value={task} />
	</label>
	<button class="btn self-end">Add</button>
</form>

{#if todos.v.length}
	<p>{doneTodos.length}/{todos.v.length} tasks completed</p>
	<div class="join self-end">
		{@render filterButton('All')}
		{@render filterButton('Todo')}
		{@render filterButton('Done')}
	</div>
{:else}
	<p>Add a task to get started!</p>
{/if}
