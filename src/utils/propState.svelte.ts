// propState.svelte.ts

// NOTE: No import needed for $state in .svelte.ts files.

/**
 * Creates and initializes a new reactive state, and returns it
 * wrapped in an object with a 'value' getter and setter.
 * @param {T} initialValue - The starting value for the state.
 */
export function propState<T>(initialValue: T) {
	// 1. Create the reactive state internally using the $state rune.
	let state = $state(initialValue);

	// 2. Return the getter/setter object with full TypeScript type safety.
	return {
		get v(): T {
			return state;
		},
		set v(v: T) {
			state = v;
		}
	};
}
