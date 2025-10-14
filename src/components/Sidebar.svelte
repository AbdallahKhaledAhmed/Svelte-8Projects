<script>
	const { comps } = $props();
	const show = $state(0);
	const open = $state(false);
</script>

<div class="drawer">
	<input id="my-drawer-1" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Page content here -->
		<label
			for="my-drawer-1"
			class="btn drawer-button rounded-full font-bold text-xl absolute bottom-0"
			>{open ? '<' : '>'}</label
		>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay"></label>
		<ol class="menu bg-base-200 min-h-full w-80 p-4">
			<!-- Sidebar content here -->
			<div class="flex items-center border-b-2 mb-5">
				<img src="/src/assets/256px-Svelte_Logo.svg.png" alt="Svelte Logo" class="w-15 m-5" />
				<h1 class="text-4xl font-bold">8GUIs</h1>
			</div>
			{#each comps as comp, ind}
				<li><button>{ind + 1}. {comp.name}</button></li>
			{/each}
		</ol>
	</div>
</div>

{@render comps[show].value()}
