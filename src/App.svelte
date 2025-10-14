<script>
	// @ts-nocheck

	import HelloWorld from './components/HelloWorld.svelte';
	import WelcomeWorld from './components/WelcomeWorld.svelte';
	import Sidebar from './components/Sidebar.svelte';
	const compArray = [
		{ name: 'HelloWorld', value: HelloWorld },
		{ name: 'WelcomeWorld', value: WelcomeWorld }
	];
	let toShow = $state(0);
	function updateToShow(newVal) {
		toShow = newVal;
	}
</script>

{$inspect(toShow)}
<Sidebar {updateToShow} {compArray} />
<div class="flex justify-center items-center w-full min-h-[100vh]">
	{@render compArray[toShow].value()}
</div>
