<script lang="ts">
	const today = new Date().toISOString().split('T')[0];
	let formElement = $state<HTMLFormElement>();
	let formData = $state<any>();
	let returnStatus = $derived(formData && formData['flight-type'] === 'return');
	let acceptable = $derived.by(() => {
		if (formData)
			return (!returnStatus && formData['flight-date']) ||
				(returnStatus && formData['flight-date'] && formData['return-date'])
				? true
				: false;
		else return null;
	});

	function handleFormChange(e: any) {
		formData = Object.fromEntries(new FormData(formElement));
		formData[e.target.name] = e.target.value;
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		alert(`you have booked a ${formData['flight-type']} flight on ${formData['flight-date']}`);
	}
</script>

<form
	bind:this={formElement}
	class="w-40 flex flex-col gap-2"
	onchange={handleFormChange}
	onsubmit={handleSubmit}
>
	<select name="flight-type" class="select">
		<option value="one-way">One Way Flight</option>
		<option value="return">Return Flight</option>
	</select>
	<input type="date" name="flight-date" class="input" min={today} />
	<input
		type="date"
		name="return-date"
		class="input"
		min={formData ? formData['flight-date'] : today}
		style:display={returnStatus ? null : 'none'}
	/>
	<button class="btn" disabled={!acceptable}>Book</button>
</form>
