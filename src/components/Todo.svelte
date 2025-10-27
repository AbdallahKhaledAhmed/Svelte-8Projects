<script lang="ts">
	import type { Todo } from '../types';
	import { propState } from '../utils/propState.svelte';
	import TodoForm from './TodoForm.svelte';
	import TodoItem from './TodoItem.svelte';

	let todos = propState<Todo[]>([]);
	let filter = propState('All');
</script>

<div class="self-start w-[60%] flex flex-col gap-5 mt-5">
	<h1 class="text-3xl font-bold">Tasks App</h1>
	<TodoForm {todos} {filter} />
	<div class="flex flex-col">
		<TodoItem {todos} {filter} />
	</div>
</div>
