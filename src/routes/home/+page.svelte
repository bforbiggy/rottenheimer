<script>
	import { goto } from "$app/navigation";
	import Mystery from "$lib/mystery.png";
</script>

<div class="flex flex-col items-center min-h-screen p-16">
	<p class="text-7xl">Domain Expansion: Brainrot Quiz</p>
	<p class="text-2xl opacity-30">(Click the riddler.)</p>
	<button
		class="p-2 rounded-lg hover:bg-gray-100"
		on:click={() => goto("/test")}
	>
		<img src={Mystery} alt="Mysterious figure" />
	</button>
</div>
