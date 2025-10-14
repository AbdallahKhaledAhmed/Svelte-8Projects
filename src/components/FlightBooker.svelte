<script lang="ts">
	const today = new Date().toISOString().split('T')[0];
	let formData = $state<FormData>();

	let acceptable = $derived.by(() => {
		if (!formData) return false;
		const date1Value: string = (formData.get('flight-date') as string) || '';
		const date2Value: string = (formData.get('return-date') as string) || '';
		if (!date1Value || (!date2Value && !returnField)) return false;
		const date1 = new Date(date1Value);
		const date2 = new Date(date2Value);
		return date2 > date1 || (date1 && !returnField);
	});

	let returnField = $derived.by(() => {
		if (!formData) return false;
		const flightType = formData.get('flight-type');
		return flightType === 'return';
	});

	function handleForm(e: Event) {
		const form = e.currentTarget as HTMLFormElement;
		formData = new FormData(form);
	}
</script>

<form onchange={handleForm} class="w-40 flex flex-col gap-2">
	<select name="flight-type" class="select">
		<option value="one-way">One Way Flight</option>
		<option value="return">Return Flight</option>
	</select>
	<input type="date" name="flight-date" class="input" min={today} />
	<input
		type="date"
		name="return-date"
		class="input"
		min={today}
		style:display={returnField ? null : 'none'}
	/>
	<button class="btn" disabled={!acceptable}>Book</button>
</form>
{$inspect(formData)}
