<script>
	import { page } from "$app/stores";
	import Mystery from "$lib/assets/mystery.png";
	import Personalities from "$lib/Personalities.js";

	let personality = $page.url.searchParams.get("personality");
	let representation = Personalities[personality];
</script>

<div class="flex flex-col max-w-[100vw] items-center min-h-screen p-4 lg:p-16">
	<p class="py-4 text-5xl font-bold">
		{representation?.name || personality || "The Undefined"}
	</p>
	<img
		class="w-[500px] h-auto border-4 border-black p-1 rounded-md"
		src={representation?.image || Mystery}
		alt=""
	/>
	<div class="mt-2" />
	<p class="text-xl opacity-60">
		{representation?.blurb || '"This isn\'t right."'}
	</p>
</div>
