<script>
	import questions from "$lib/Questions.js";
	import { setContext } from "svelte";

	let index = 0;
	let results = {
		E: 0,
		I: 0,
		S: 0,
		N: 0,
		T: 0,
		F: 0,
		J: 0,
		P: 0,
	};

	// When done, store results and go to result page
	$: index >= questions.length &&
		setContext("results", results) &&
		goto("/results");
</script>

<div class="flex flex-col items-center min-h-screen p-16">
	<p class="text-4xl font-[Indie Flower]">
		Question {index + 1}/{questions.length}
	</p>
	<div class="my-4" />

	<p class="text-3xl">
		{questions[index].question}
	</p>
	<div class="flex flex-col">
		{#each questions[index].choices as choice}
			<button
				class="px-4 py-2 text-2xl font-bold bg-gray-300 rounded hover:bg-gray-400"
				on:click={() => {
					results[choice.stat]++;
					index++;
				}}
			>
				{choice.choice}
			</button>
		{/each}
	</div>
</div>
