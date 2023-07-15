<script>
	import '@fontsource/comic-neue';
	import PostcardsList from '../components/PostcardsList.svelte';
</script>

<main class="spaceBackground">
	<a href="mailto:gabriel@chartier.link"
		><img src="/email.gif" class="emailMe" alt="A rotating e-mail gif" /></a
	>
	<header>
		<img
			src="/airstream-earth.gif"
			alt="A spinning globe with an airstream trailer in the middle of it."
		/>
		<h1 class="pageTitle">Gabriel's Travel Blog</h1>
		<img
			src="/airstream-earth.gif"
			alt="A spinning globe with an airstream trailer in the middle of it."
		/>
	</header>

	<section class="interestsList">
		<div class="interest">
			<img
				src="/winkeye.gif"
				class="watchingImage"
				alt="A pencil-drawn eye with short lashes blinking with a white background"
			/>
			<h2 class="subHeading">Watching ⤵</h2>
			<ul>
				<li>
					<a href="https://youtu.be/3QtklTXbKUQ?t=553" target="_blank"
						>Imogen Heap Tiny Desk Concert</a
					>
				</li>
			</ul>
		</div>

		<div class="interest">
			<img src="/GBook.gif" alt="A purple-bound book with pages flipping one after the other" />
			<h2 class="subHeading">Reading ⤵</h2>
			<ul>
				<li>
					<p style="margin: 0;">
						<a href="https://www.gutenberg.org/files/16269/16269-8.txt" target="_blank"
							>Thought Forms: A Record of Clairvoyant Investigation</a
						>
					</p>
				</li>
				<li>
					<a href="https://www.goodreads.com/book/show/50492566-ux-magic" target="_blank"
						>UX Magic</a
					>
				</li>
			</ul>
		</div>
	</section>

	<img
		class="gif-divider"
		src="/tropical-night.gif"
		alt="A gif of An Orca emerging from the water in a tropical moonlit scenery with constellations overhead, palm trees and mountains to the sides, and shimmering moving water at the base. It's mostly blue and purple. The frame of the gif is blue and it has a texture and what looks like a pixelated glitter."
	/>

	<footer>
		<img
			src="/construction-spinner.gif"
			class="constructionSpinner"
			alt="A spinning construction sign"
		/>
		<img
			src="/under-construction.gif"
			class="constructionBanner"
			alt="A flashing yellow and black banner that says 'Under Construction'"
		/>
		<img
			src="/construction-spinner.gif"
			class="constructionSpinner"
			alt="A spinning construction sign"
		/>
	</footer>
</main>

<style>
	main {
		color: white;
		position: relative;
	}

	.emailMe {
		position: absolute;
		top: 15px;
		right: 15px;
		width: 2rem;
	}

	.spaceBackground {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 100%;
		height: 100%;
		margin: 0;

		font-family: 'Comic Neue', cursive;
		background-color: #e5e9bf;
		background-image: url('/spacemov.gif');
		border: 8px solid gold;
		border-style: ridge;
	}

	.pageTitle {
		font-size: 2.2rem;
	}

	main header {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	main header img {
		width: 12rem;
		padding: 2rem;
	}

	main h1 {
		padding: 0 20px;
	}

	.gif-divider {
		width: 25rem;
		padding: 6rem 0 2rem 0;
	}

	.interestsList {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}

	.interest {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.interest h2 {
		margin-bottom: 0;
		padding-left: 1rem;
	}

	.interest img {
		width: 3rem;
	}

	.watchingImage {
		width: 4.5rem;
		border: peachpuff 8px inset;
	}

	footer {
		display: flex;
		align-items: center;
		padding-bottom: 2rem;
	}

	.constructionSpinner {
		width: 4rem;
	}

	.constructionBanner {
		width: 400px;
		height: 30px;
	}
</style>
