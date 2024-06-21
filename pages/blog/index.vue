<template>
	<Title>Blog</Title>
	<div class="blog-container">
		<div class="blog-card" v-for="item in dataBlog">
			<NuxtLink :to="`blog/${item.slug}`">
				<img class="blog-card-img" :src="item.images[0]" :alt="item.slug" />
				<div class="card-details">
					<h4>{{ item.title }}</h4>
					<p class="card-date">{{ item.date }}</p>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
import dataBlog from "../../data/blogs";
import Title from "../components/Title.vue";
</script>

<style>
.blog-card {
	width: 300px;
	border: 1px solid var(--colorGrey);
	border-radius: 16px;
	overflow: hidden;
}
.blog-card-img {
	width: 300px;
	height: 200px;
	object-fit: cover;
}
.card-details {
	padding: 0.5rem;
}
.card-date {
	font-size: 0.9rem;
}
.blog-container {
	padding: 0 5px;
}

@media only screen and (max-width: 480px) {
	.container {
		column-count: 1;
		padding: 0 5px;
	}

	.blog-card {
		min-width: 100%;
	}

	.blog-card-img {
		width: 100%;
	}
}
</style>
