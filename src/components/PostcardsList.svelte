<!-- <script lang="ts">
	import { getPostcards } from '../routes/+page';
	import Postcard from '../components/Postcard.svelte';
	import type { Postcard as PostcardType } from '../types';
	import { useQuery } from '@sveltestack/svelte-query';

	// const queryResult = useQuery<PostcardType[]>('postcards', getPostcards);
	export let data;
</script>

<h2>Where am I now?</h2>
<ol>
	{#await getPostcards}
		<p>...waiting</p>
	{:then postcards}
		{#each data as postcard, i}
			<Postcard />
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</ol>

<style>
	ol {
		list-style: none;
		padding: 0;
	}
</style> -->
