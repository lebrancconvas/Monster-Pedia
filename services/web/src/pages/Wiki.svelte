<script lang="ts">
	import MonsterCard from '../components/MonsterCard.svelte';
	import type { Monster } from '../../utils/interface/monster.interface';
	import { onMount } from 'svelte';

	let monsters: any = [];
	const getMonster = async() => {
		const response = await fetch('http://localhost:3209/monsters');
		monsters = await response.json();
		return monsters;
	};

	onMount(getMonster);
</script>

<main>
	<header>
		<div id="wiki-heading">
			<h1>Monster Wiki</h1>
		</div>
	</header>
	<section id="wiki-monster-section">
		{#each monsters as monster}
		<div id="wiki-monster-card">
			<MonsterCard name={monster.name} /> 
		</div>
		{/each}
	</section>
</main>

<style>
	#wiki-heading {
		text-align: center;
		margin-top: 20px;
		font-size: 35px;
	}

	#wiki-monster-section {
		display: grid;
		grid-template-columns: 50% 50%; 
	}

	#wiki-monster-card {
		margin: 10px 0;
	}
</style>