<script>
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Farshid(Farsheed) Ashouri's personal thoughts and opinions</p>
	<p>Well, same as always, old word, this is under construction guys :)</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
