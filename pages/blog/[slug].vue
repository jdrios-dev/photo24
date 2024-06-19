<template>
	<Title :title="data.title"></Title>
	<Paragraph :text="data.description" />

	<span class="author">{{ data.author }} • {{ data.date }}</span>
	<div class="container">
		<figure v-for="item in data.images">
			<img :src="item" alt="A windmill" />
		</figure>
	</div>
</template>

<script setup>
import Title from "../components/Title.vue";
import dataBlog from "../../data/blogs";

const route = useRoute();
const slug = route.params.slug;

const data = dataBlog?.find((item) => item?.slug === slug);
</script>

<style>
.title-blog {
	color: red;
}
img {
	max-width: 100%;
	display: block;
	border-radius: 8px;
}

figure {
	margin: 0;
	display: grid;
	grid-template-rows: 1fr auto;
	margin-bottom: 10px;
	break-inside: avoid;
}

figure > img {
	grid-row: 1 / -1;
	grid-column: 1;
}

figure a {
	color: black;
	text-decoration: none;
}

figcaption {
	grid-row: 2;
	grid-column: 1;
	background-color: rgba(255, 255, 255, 0.5);
	padding: 0.2em 0.5em;
	justify-self: start;
}

.container {
	column-count: 3;
	column-gap: 10px;
}

.author {
	color: var(--colorGrey);
	opacity: 0.8;
	margin-bottom: 4rem;
	display: block;
}
</style>
