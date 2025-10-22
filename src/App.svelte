<script>
	// @ts-nocheck

	import Counter from './components/Counter.svelte';
	import CRUD from './components/CRUD.svelte';
	import FlightBooker from './components/FlightBooker.svelte';
	import Sidebar from './components/Sidebar.svelte';
	import TempratureConverter from './components/TempratureConverter.svelte';
	import Timer from './components/Timer.svelte';
	import CircleDrawer from './components/CircleDrawer.svelte';

	const compArray = [
		{ name: 'Counter', value: Counter },
		{ name: 'Temprature Converter', value: TempratureConverter },
		{ name: 'Flight Booker', value: FlightBooker },
		{ name: 'Timer', value: Timer },
		{ name: 'CRUD', value: CRUD },
		{ name: 'CircleDrawer', value: CircleDrawer }
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
