<script lang="ts">
	let name: string;
	let race: string;
	let desc: string;
	let life: number;
	let power: number;
	let resist: number;
	export {name, race, desc, life, power, resist};
</script>

<main>
	<div id="monster-card">
		<div id="monster-bio">
			<div id="monster-name">
				{name}
			</div>
			<div id="monster-race">
				({race})
			</div>
		</div>
		<div id="monster-stat">
			<div id="monster-life">
				<b>LP</b> <br> {life}
			</div>
			<div id="monster-power">
				<b>Power</b> <br> {power}
			</div>
			<div id="monster-resistant">
				<b>Resistant</b> <br> {resist}
			</div>
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

	/* #monster-heading-information {
		display: grid;
		grid-template-columns: 50% 50%; 
	} */

	#monster-stat {
		font-size: 25px;
		margin: 20px 0;
		display: flex;
	}

	#monster-life, #monster-power, #monster-resistant {
		margin: 0 10px;
	}

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