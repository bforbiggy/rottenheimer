<script>
	import questions from "$lib/Questions.js";
	import { goto } from "$app/navigation";
	import { resultsToPersonality } from "$lib/Util.js";

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

	// When done, go to result page
	$: index >= questions.length &&
		goto(`/results?personality=${resultsToPersonality(results)}`);
</script>

<div class="flex flex-col items-center min-h-screen p-2 lg:p-16">
	{#if index < questions.length}
		<p class="text-4xl text-center">
			Question {index + 1}/{questions.length}
		</p>
		<div class="my-4" />

		<p class="max-w-screen-md text-xl lg:text-3xl">
			{questions[index].question}
		</p>
		<div class="my-4" />

		<div class="flex flex-col gap-2">
			{#each questions[index].choices as choice}
				<button
					class="px-4 py-2 text-lg font-bold bg-gray-300 rounded lg:text-2xl hover:bg-gray-400"
					on:click={() => {
						results[choice.stat]++;
						index++;
					}}
				>
					{choice.choice}
				</button>
			{/each}
		</div>
	{:else}
		<p>Loading results...</p>
	{/if}
</div>
