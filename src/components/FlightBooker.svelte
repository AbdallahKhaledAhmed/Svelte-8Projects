<script lang="ts">
	const today = new Date().toISOString().split('T')[0];
	let flightType = $state('one-way');
	let flightDate = $state(null);
	let returnDate = $state(null);

	function handleSubmit(e: Event) {
		e.preventDefault();
		alert(`you have booked a ${flightType} flight on ${flightDate}`);
	}
</script>

<form class="w-40 flex flex-col gap-2" onsubmit={handleSubmit}>
	<select name="flight-type" class="select" bind:value={flightType}>
		<option value="one-way">One Way Flight</option>
		<option value="return">Return Flight</option>
	</select>
	<input
		type="date"
		name="flight-date"
		class="input"
		min={today}
		bind:value={flightDate}
		required
	/>
	<input
		type="date"
		name="return-date"
		class="input"
		min={flightDate || today}
		disabled={flightType !== 'return'}
		bind:value={returnDate}
		required
	/>
	<button class="btn">Book</button>
</form>
