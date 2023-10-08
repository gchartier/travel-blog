<script lang="ts">
	import '@fontsource/libre-barcode-39-text';
	import type { Postcard } from '$lib/types';
	import { PUBLIC_POCKETBASE_FILE_URL } from '$env/static/public';

	export let postcard: Postcard;
	$: postcardImage = `${PUBLIC_POCKETBASE_FILE_URL}${postcard.collectionId}/${postcard.id}/${postcard.picture}`;
	$: postcardStamp = `${PUBLIC_POCKETBASE_FILE_URL}${postcard.collectionId}/${postcard.id}/${postcard.stamp}`;
</script>

<li class="postcard">
	<div class="postcard-inner">
		<div class="postcard-back">
			<header>
				<div class="postdate">{postcard.date}</div>
				<div class="stamp">
					<img src={postcardStamp} alt={postcard.stampAltText} />
					<span>2¢</span>
				</div>
			</header>
			<div class="content">
				<p class="message">
					{@html postcard.note}
				</p>
				<div class="divider" />
				<p class="postaddress">
					<span class="location">{postcard.place}</span>
					<span class="state">{postcard.location}</span>
				</p>
			</div>
		</div>
		<div class="postcard-front">
			<img style="width: 100%; height: 100%;" src={postcardImage} alt={postcard.pictureAltText} />
		</div>
	</div>
</li>

<style>
	.postcard {
		background-color: transparent;
		width: 500px;
		height: 320px;
		perspective: 1000px;
	}

	.postcard-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;
		box-shadow: 1px 2px 5px grey;
	}

	.postcard:hover .postcard-inner {
		transform: rotateY(180deg);
	}

	.postcard-front,
	.postcard-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden; /* Safari */
		backface-visibility: hidden;
	}

	.postcard-front {
		background-color: #fffaf0;
		color: black;
		background-size: 520px;
	}

	.postcard-back {
		display: flex;
		flex-direction: column;
		background-color: #fffaf0;
		color: black;
		transform: rotateY(180deg);
	}

	.postcard-back header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 10px;
	}

	.postcard-back .content {
		display: flex;
		height: 59%;
	}

	.postcard-back .postaddress {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 30%;
	}

	.postcard-back .divider {
		width: 5%;
		height: 100%;
		background-image: url('/postcard-dividers/globe-divider.gif');
		background-size: 25px;
		background-repeat: no-repeat;
	}

	.postcard-back .message {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 65%;
		height: 100%;
	}

	.location {
		font-style: italic;
		font-weight: bold;
	}

	.location,
	.state {
		padding-bottom: 0.2rem;
	}

	.stamp {
		display: flex;
		position: relative;
		width: 55px;
		height: 55px;
		border: 3px dashed black;
		color: white;
		background-size: 55px;
	}

	.stamp span {
		position: absolute;
		bottom: 0;
		left: 0;
		font-size: 0.7rem;
		margin: 0;
		font-weight: bold;
		padding: 0.1rem;
	}

	.postdate {
		font-family: 'Libre Barcode 39 Text', cursive;
		font-size: 2rem;
	}
</style>
