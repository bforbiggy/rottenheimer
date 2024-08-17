<script>
	import { goto } from "$app/navigation";
	import Mystery from "$lib/mystery.png";
</script>

<div class="flex flex-col items-center min-h-screen p-16">
	<p class="text-7xl font-[Indie Flower]">Welcome to stickler!</p>
	<button on:click={() => goto("/test")}>
		<img src={Mystery} alt="Mysterious figure" />
	</button>
</div>
