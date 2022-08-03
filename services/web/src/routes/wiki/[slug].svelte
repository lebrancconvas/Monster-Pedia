<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	// import MonsterCard from '../../lib/MonsterCard.svelte';
	import MonsterCardDetail from '../../lib/MonsterCardDetail.svelte';

	let monsterData: any = [];

	const monsterName = $page.params.slug;
	let monsterRace = "";
	let monsterDesc = ""

	const getMonster = async() => {
		const response = await fetch('http://localhost:3209/monsters');
		monsterData = await response.json();
		// monsterData = monsterData.filter((monster: any) => monster.name === name);
		return monsterData;
	};

	onMount(getMonster);
</script>

<main>
	<!-- <MonsterCard name={$page.params.slug} /> -->
	<!-- {$page.params.slug} -->
	{#each monsterData as monster}
		{#if monster.name === monsterName}
			<MonsterCardDetail name={monster.name} race={monster.race} desc={monster.desc} />
		{/if}
	{/each}

</main>

<style>
	main {
		font-family: 'Itim', cursive;
	}
</style>