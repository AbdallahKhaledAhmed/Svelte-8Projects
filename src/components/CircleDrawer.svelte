<script lang="ts">
	let board = $state<HTMLDivElement | null>(null);
	let x = $state<number | null>(null);
	let y = $state<number | null>(null);
	let r = $state<number | null>(50);
	let circle = $derived<any>({ x: x, y: y, r: r, hidden: true });
	let circles = $state<(typeof circle)[]>([]);
	$inspect(circles);
	function handleClick(e: MouseEvent) {
		x = e.offsetX;
		y = e.offsetY;
		circles.push(circle);
	}
</script>

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

{#snippet displayCircle(circle: { r: number; x: number; y: number; hidden: boolean })}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="border border-white rounded-full absolute -translate-1/2"
		style="width: {circle.r}px;height: {circle.r}px; left: {circle.x}px; top: {circle.y}px;"
		onclick={(e) => {
			e.stopPropagation();
			circle.hidden = !circle.hidden;
		}}
	>
		<div>
			<input
				type="range"
				bind:value={circle.r}
				class="absolute -bottom-5 -left-15 {circle.hidden ? 'hidden' : null}"
			/>
		</div>
	</div>
{/snippet}
