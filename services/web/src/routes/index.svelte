

<script lang="ts">
</script>

<main>
	<header>
		<div id="home-heading">
			<h1>Monsterpedia</h1>
		</div>
		<div id="home-bio">
			<h2>All Information that you want to know for Monster Arena</h2> 
		</div>
	</header>
	<section>
		<a href="/wiki"> 
			<div id="wiki-button">
				<div id="wiki-button-content">
					Wiki
				</div>
			</div>
		</a>
	</section>
</main>

<style>
  main {
		font-family: 'Itim', cursive;
		text-align: center;
		/* display: inline-block; */
		/* vertical-align: middle; */
	}

	a {
		text-decoration: none;
		color: black;
	}

	#home-heading {
		font-size: 30px;
	}

	#home-bio {
		font-size: 25px;
	}

	#wiki-button {
		border: 2px solid black;
		width: 10%;
		padding: 5px;
		border-radius: 10px;
		margin: 10px auto;
		background-color: orange;
		box-shadow: 1px 1px 1px 1px black;
		cursor: pointer;
	}

	#wiki-button:active {
		transform: scale(0.98); 
	}

	#wiki-button-content {
		font-size: 30px;
	}
</style>