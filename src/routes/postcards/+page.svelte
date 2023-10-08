<script>
	import '@fontsource/comic-neue';
	import PostcardsList from './components/PostcardsList.svelte';

	export let data;
</script>

<main class="flex flex-col items-center w-full h-full m-0 spaceBackground">
	<div class="flex justify-center items-center">
		<img
			class="w-48 p-8"
			src="/airstream-earth.gif"
			alt="A spinning globe with an airstream trailer in the middle of it."
		/>
		<h1 class="text-white text-4xl font-bold px-5">Gabriel's Travel Blog</h1>
		<img
			class="w-48 p-8"
			src="/airstream-earth.gif"
			alt="A spinning globe with an airstream trailer in the middle of it."
		/>
	</div>
	<section class="p-12 overflow-auto hide-scrollbar">
		<PostcardsList postcards={data.postcards} />
	</section>
</main>

<style>
	.spaceBackground {
		font-family: 'Comic Neue', cursive;
		background-color: #e5e9bf;
		background-image: url('/spacemov.gif');
		border: 8px solid gold;
		border-style: ridge;
	}
</style>
