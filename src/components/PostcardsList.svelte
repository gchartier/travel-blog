<script lang="ts">
	import Postcard from './Postcard.svelte';
	import type { Postcard as PostcardType } from '$lib/types';

	export let postcards: PostcardType[];
</script>

<h2>Where am I now?</h2>
<ol>
	{#each postcards as postcard, i (postcard.id)}
		<Postcard {postcard} />
	{/each}
</ol>

<style>
	ol {
		list-style: none;
		padding: 0;
	}
</style>
