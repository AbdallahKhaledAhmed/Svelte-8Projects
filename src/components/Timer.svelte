<script>
	let durationValue = $state(1);
	let progressValue = $state(0);

	$effect(() => {
		let inter = setInterval(() => {
			if (progressValue >= 60 * durationValue) return;
			progressValue++;
		}, 10);
		return () => clearInterval(inter);
	});
</script>

<div class="flex flex-col gap-5">
	<progress value={progressValue} max={60 * durationValue}> </progress>
	<span>{(progressValue / 60).toFixed(1)}s passed</span>
	<input type="range" name="" id="" max="20" min="1" bind:value={durationValue} />
	<button class="btn" onclick={() => (progressValue = 0)}>Clear</button>
</div>
