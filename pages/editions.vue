<template>
	<div>
		<Title title="Editions"></Title>

		<p class="edition-description">
			The challenges are organized by city, with more to be added over time. Are
			you ready to accept the challenge? Grab your camera and let's get started!
		</p>

		<lu class="editions-buttons">
			<li v-for="(item, index) in items">
				<ButtonLink :text="item.name" :slug="item.slug" />
			</li>
		</lu>
	</div>
</template>

<script setup>
import { editions } from "../data/challenges";
import Title from "../components/Title.vue";

const items = editions?.map((item) => ({ name: item.name, slug: item.slug }));
</script>
