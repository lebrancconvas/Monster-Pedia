<script lang="ts">
	import Router from 'svelte-spa-router';
	import Home from './pages/Home.svelte';
	import Wiki from './pages/Wiki.svelte';

	const routes = {
		"/": Home,
		"/wiki": Wiki 
	}
</script>

<main>
	<Router {routes} />
</main>

<style>

</style>