<script>
	let count = $state(0);
</script>

<div class="flex gap-2 justify-center items-center">
	<input type="text" placeholder="Count" class="input w-50" bind:value={count} readonly />
	<button class="btn" onclick={() => count++}>+</button>
</div>
