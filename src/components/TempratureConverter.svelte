<script lang="ts">
	let tempC = $state(0);
	let tempF = $derived.by(() => calculateF(tempC));

	function calculateF(celsius: number) {
		return (celsius * 9) / 5 + 32;
	}

	function calculateC(fahrenheit: number) {
		return ((fahrenheit - 32) * 5) / 9;
	}

	function updateC() {
		tempC = calculateC(tempF);
	}
</script>

<div>
	<label>
		<input type="number" class="input w-25" bind:value={tempC} />
		Celsius =
	</label>
	<label>
		<input type="number" class="input w-25" bind:value={tempF} onchange={updateC} />
		Fehrenheit
	</label>
</div>
