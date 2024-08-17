<script>
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";

	if (browser) {
		goto("/home");
	}
</script>

<div class="flex items-center justify-center min-h-screen p-16">
	<p class="text-7xl font-[Indie Flower]">Redirecting...</p>
</div>
