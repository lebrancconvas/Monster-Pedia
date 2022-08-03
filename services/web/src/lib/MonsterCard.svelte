<script lang="ts">
	export let name: string;
</script>

<main>
	<div id="monster-card">
		<h1>{name}</h1>
	</div>
</main>

<style>
	#monster-card {
		border: 2px solid black;
		padding: 10px;
		border-radius: 10px;
		box-shadow: 1px 1px 1px 1px black;
		background-color: orange;
		width: 30%;
		margin: 0 auto;
		cursor: pointer;
	}

	#monster-card:active {
		transform: scale(0.98);
	}

	h1 {
		text-align: center;
	}
</style>