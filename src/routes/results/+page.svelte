<script>
	import { page } from "$app/stores";
	import Personalities from "$lib/Personalities.js";

	let searchParams = $page.url.searchParams;
	let personality = searchParams.get("personality");
	let representation = Personalities[personality];
</script>

<div class="flex flex-col max-w-[100vw] items-center min-h-screen p-4 lg:p-16">
	<p class="text-5xl font-bold">
		{representation?.name || personality || "The Undefined"}
	</p>
	<p class="text-xl opacity-60">
		{representation?.description || "Trying to break the system are we?	"}
	</p>
	<img
		class="size-[600px] max-w-full h-auto"
		src={representation.image}
		alt=""
	/>
</div>
