<script lang="ts">
	let name: string;
	let race: string;
	let desc: string;
	export {name, race, desc};
</script>

<main>
	<div id="monster-card">
		<div id="monster-name">
			{name}
		</div>
		<div id="monster-race">
			({race})
		</div>
		<div id="monster-desc">
			{desc}
		</div>
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
		margin: 0;
		vertical-align: middle;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		/* right: 50%; */
		/* cursor: pointer; */
	}

	/* #monster-card:active {
		transform: scale(0.98);
	} */

	#monster-name {
		/* text-align: center; */
		font-size: 50px;
	}

	#monster-race {
		font-size: 30px;
	}

	#monster-desc {
		font-size: 25px;
		margin: 20px 0;
	}
</style>