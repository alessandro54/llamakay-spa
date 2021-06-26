<script>

const test = {
	id: 123,
	firstName: 'Alessandro'
}

</script>

<main>
	<nav>
		Soy un navbar
	</nav>
	<h1>Hello {test.firstName}!</h1>
	<footer>
		Soy un footer
	</footer>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #00ff0d;
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