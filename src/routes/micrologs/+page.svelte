<script lang="ts">
	export let data;
</script>

<h1>Microlog</h1>
{#if data.micrologs.length > 0}
	{#each data.micrologs as microlog}
		<article>
			<h2>{microlog.title}</h2>
			<p>{microlog.text}</p>
		</article>
	{/each}
{:else}
	<p>There are no micrologs yet.</p>
{/if}
