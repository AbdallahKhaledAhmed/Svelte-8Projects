<script lang="ts">
	let personData = $state({ name: '', surName: '' });
	let fullPeople = $state<(typeof personData)[]>([]);
	let filter = $state('');
	let selected = $state<any>(null);
	let people = $derived(
		fullPeople.filter(
			(person) =>
				low(person.name).startsWith(low(filter)) || low(person.surName).startsWith(low(filter))
		)
	);

	function low(string1: string) {
		return string1.toLowerCase();
	}
	function handleCreate() {
		fullPeople.push($state.snapshot(personData));
	}
	function handleSelect(ind: number) {
		selected = ind;
		personData = $state.snapshot(fullPeople[ind]);
	}
	function handleUpdate() {
		fullPeople[selected] = $state.snapshot(personData);
	}
	function handleDelete() {
		fullPeople = fullPeople.filter((_, ind) => ind !== selected);
	}
</script>

<div class="bg-[#1f2427] p-5 rounded flex flex-col gap-5">
	<div class="flex gap-20">
		<span>Filter Prefix:</span>
		<input
			type="text"
			bind:value={filter}
			class="bg-[#474f59] w-20 h-8 justify-center items-center rounded"
		/>
	</div>
	<div class="flex justify-center items-center gap-10">
		<select id="cars" name="cars" size="3" class="w-60 h-30 rounded bg-[#474f59]">
			{#each people as person, ind}
				<option value={ind} class="px-3" onclick={() => handleSelect(ind)}
					>{person.name} {person.surName}</option
				>
			{/each}
		</select>
		<div class="flex flex-col justify-center items-center gap-2">
			<div class="flex justify-between w-40">
				<span>Name:</span>
				<input
					type="text"
					bind:value={personData.name}
					class="bg-[#474f59] w-20 h-8 justify-center items-center rounded"
				/>
			</div>
			<div class="flex justify-between w-40">
				<span>Surname:</span>
				<input
					type="text"
					bind:value={personData.surName}
					class="bg-[#474f59] w-20 h-8 justify-center items-center rounded"
				/>
			</div>
		</div>
	</div>
	<div class="flex">
		<button class="btn" onclick={handleCreate}>Create</button>
		<button class="btn" onclick={handleUpdate}>Update</button>
		<button class="btn" onclick={handleDelete}>Delete</button>
	</div>
</div>
