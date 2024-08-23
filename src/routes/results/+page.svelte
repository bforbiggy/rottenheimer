<script>
	import { page } from "$app/stores";

	let searchParams = $page.url.searchParams;
	let personality = searchParams.get("personality");
</script>

<div class="flex flex-col items-center min-h-screen p-16">
	<p class="text-3xl">Personality Type</p>
	<p class="text-2xl">{personality}</p>
</div>
