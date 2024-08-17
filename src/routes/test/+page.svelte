<script>
	import questions from "$lib/Questions.js";

	let index = 0;
	let stats = {
		E: 0,
		I: 0,
		S: 0,
		N: 0,
		T: 0,
		F: 0,
		J: 0,
		P: 0,
	};
</script>

<div class="flex flex-col items-center min-h-screen p-16">
	<p class="text-3xl font-[Indie Flower]">
		Question {index + 1}/{questions.length}
	</p>
	<p>
		{questions[index].question}
	</p>
	<div class="flex flex-col">
		{#each questions[index].choices as choice}
			<button
				class="inline-flex items-center px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
				on:click={() => {
					stats[choice.stat]++;
					index++;
				}}
			>
				{choice.choice}
			</button>
		{/each}
	</div>
</div>
