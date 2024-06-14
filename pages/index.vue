<script setup>
import Title from "../components/Title.vue";
import ButtonLink from "../components/ButtonLink.vue";
</script>
<template>
	<div class="hero-container">
		<div class="squeare square1">
			<img class="hero-img" alt="sydney" src="../assets/hero1.jpg" />
		</div>
		<div class="squeare square3">
			<img class="hero-img" alt="sydney" src="../assets/hero3.jpg" />
		</div>

		<div class="squeare square2">
			<img class="hero-img" alt="sydney" src="../assets/hero2.jpg" />
		</div>
		<Title title="The Ultimate Photography Challenge"></Title>
		<p class="hero-description">
			Discover the art of manual photography through an exciting journey across
			the world's most vibrant cities. Whether you're capturing the bustling
			streets of Tokyo, the historic charm of Bogotá, or the scenic vistas of
			Sydney, our challenges will push your creative boundaries and hone your
			skills. Each location offers unique photo opportunities, demanding a mix
			of styles and techniques to complete the tasks. With only one chance per
			shot, can you rise to the challenge?
		</p>

		<ButtonLink text="Capture Your World!" slug="editions" />
	</div>
</template>
