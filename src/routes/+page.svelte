<script>
	import '@fontsource/comic-neue';
	import PostcardsList from '../components/PostcardsList.svelte';
</script>

<main>
	<span class="spaceBackground">
		<div>
			<img
				src="/airstream-earth.gif"
				alt="A spinning globe with an airstream trailer in the middle of it."
			/>
			<h1 class="pageTitle">Gabriel's Travel Blog</h1>
			<img
				src="/airstream-earth.gif"
				alt="A spinning globe with an airstream trailer in the middle of it."
			/>
		</div>
	</span>

	<PostcardsList />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		font-family: 'Comic Neue', cursive;
		background-color: #e5e9bf;
	}

	.spaceBackground {
		margin: 10px;
		background-image: url('/spacemov.gif');
		height: 100%;
		border: 8px solid gold;
		border-style: inset;
	}

	.pageTitle {
		color: white;
		font-size: 2.2rem;
	}

	main div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	main div img {
		width: 120px;
		padding: 20px;
	}

	main div h1 {
		padding: 0 20px;
	}
</style>
