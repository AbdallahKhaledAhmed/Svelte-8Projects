<script>
	let { updateToShow, compArray } = $props();
	let drawerOpen = $state(false);
</script>

<div class="drawer">
	<input id="my-drawer-1" type="checkbox" class="drawer-toggle" bind:checked={drawerOpen} />
	<div class="drawer-content">
		<!-- Page content here -->
		<label
			for="my-drawer-1"
			class="drawer-button text-2xl w-8 h-8 fixed bottom-5 left-5 rounded-full font-bold cursor-pointer flex justify-center items-center"
		>
			>
		</label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay"></label>
		<ol class="menu bg-base-200 min-h-full w-80 p-4">
			<!-- Sidebar content here -->
			<div class="flex items-center border-b-2 mb-6">
				<img src="/src/assets/256px-Svelte_Logo.svg.png" alt="Svelte Logo" class="w-15 m-5" />
				<h1 class="text-4xl font-bold">8GUIs</h1>
			</div>
			{#each compArray as comp, ind (ind)}
				<li class="my-1">
					<button
						class="font-semibold"
						onclick={() => {
							updateToShow(ind);
							drawerOpen = !drawerOpen;
						}}>{ind + 1}. {comp.name}</button
					>
				</li>
			{/each}
		</ol>
	</div>
</div>
