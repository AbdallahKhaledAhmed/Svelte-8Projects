<script>
	// @ts-nocheck

	import Counter from './components/Counter.svelte';
	import FlightBooker from './components/FlightBooker.svelte';
	import Sidebar from './components/Sidebar.svelte';
	import TempratureConverter from './components/TempratureConverter.svelte';
	const compArray = [
		{ name: 'Counter', value: Counter },
		{ name: 'Temprature Converter', value: TempratureConverter },
		{ name: 'Flight Booker', value: FlightBooker }
	];
	let toShow = $state(0);
	function updateToShow(newVal) {
		toShow = newVal;
	}
</script>

<Sidebar bind:toShow {compArray} />
<div class="flex justify-center items-center w-full min-h-[100vh]">
	{@render compArray[toShow].value()}
</div>
