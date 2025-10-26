<script lang="ts">
	type Circle = {
		x: number | null;
		y: number | null;
		r: number;
	};
	const initial = {
		x: null,
		y: null,
		r: 50
	};
	let board = $state<HTMLDivElement | null>(null);
	let current = $state<Circle>(initial);
	let circles = $state<Circle[]>([]);
	let history = $state<Circle[][]>([]);
	let editing = $state(false);
	function handleClick(e: MouseEvent) {
		current = initial;
		e.stopPropagation();
		if (editing) {
			editing = false;
		} else {
			current.x = e.offsetX;
			current.y = e.offsetY;
		}
		current = initial;
	}
	function undo() {}
	$effect(() => {
		if (editing === false) {
			circles.push(current);
			history.push([...circles]);
		}
	});
	$inspect(history);
</script>

<div class="flex flex-col gap-5">
	<div class="justify-center flex gap-10">
		<button class="bg-gray-700 rounded px-5 py-2 btn" onclick={undo}>Undo</button>
		<!-- <button class="bg-gray-700 rounded px-5 py-2 btn" onclick={}>Redo</button> -->
	</div>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="w-120 h-80 bg-base-200 border-2 border-base-300 relative"
		bind:this={board}
		onclick={handleClick}
	>
		{#each circles as circle}
			{@render displayCircle(circle)}
		{/each}
	</div>

	{#snippet displayCircle(circle: Circle)}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="border border-white rounded-full absolute -translate-1/2 {circle.x === current.x
				? 'bg-gray-700/50'
				: null}"
			style="width: {circle.r}px;height: {circle.r}px; left: {circle.x}px; top: {circle.y}px;"
			onclick={(e) => {
				e.stopPropagation();
				current = circle;
				editing = false;
			}}
			oncontextmenu={(e) => {
				e.stopPropagation();
				e.preventDefault();
				editing = true;
				current = circle;
			}}
		>
			<div
				class="absolute px-10 py-2 rounded -bottom-25 -left-25 {!editing || circle.x !== current.x
					? 'hidden'
					: null} bg-gray-700 flex flex-col gap-2 w-fit h-fit"
			>
				<div>Adjust diameter of circle at ({circle.x}, {circle.y})</div>
				<input type="range" bind:value={circle.r} class=" w-50" />
			</div>
		</div>
	{/snippet}
</div>
