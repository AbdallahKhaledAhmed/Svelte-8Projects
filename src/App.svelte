<script>
	import HelloWorld from './components/HelloWorld.svelte';
	import Sidebar from './components/Sidebar.svelte';
	const compArray = [{ name: 'HelloWorld', value: HelloWorld }];
</script>

<Sidebar comps={compArray} />
