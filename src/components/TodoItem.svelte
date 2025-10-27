<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Todo } from '../types';

	let { todos, filter } = $props();
	let todosToShow = $derived.by(() => {
		switch (filter.v) {
			case 'All':
				return todos.v;
			case 'Todo':
				return todos.v.filter((ele: Todo) => !ele.done);
			case 'Done':
				return todos.v.filter((ele: Todo) => ele.done);
		}
	});
</script>

<div class="flex flex-col gap-3">
	{#each todosToShow as todo}
		<div class="flex justify-between items-center bg-[#262d36] rounded p-4" transition:fade>
			<label class="flex gap-5 justify-center items-center">
				<input type="checkbox" bind:checked={todo.done} class="w-4 h-4 cursor-pointer" />
				<p class={todo.done ? 'line-through' : null}>{todo.name}</p>
			</label>
			<button
				class="btn btn-outline"
				onclick={() => {
					todos.v = todos.v.filter((ele: Todo) => ele.id !== todo.id);
				}}>Remove</button
			>
		</div>
	{/each}
</div>
