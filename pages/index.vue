<script setup>
import Title from "../components/Title.vue";
import Paragraph from "../components/Paragraph.vue";
import ButtonLink from "../components/ButtonLink.vue";
</script>
<template>
	<div class="hero-container">
		<div class="square square1">
			<img class="hero-img" alt="sydney" src="../assets/hero1.jpg" />
		</div>
		<div class="square square3">
			<img class="hero-img" alt="sydney" src="../assets/hero3.jpg" />
		</div>

		<div class="square square2">
			<img class="hero-img" alt="sydney" src="../assets/hero2.jpg" />
		</div>
		<Title title="The Ultimate Photography Challenge"></Title>

		<Paragraph
			text="Discover the art of manual photography through an exciting journey across
			the world's most vibrant cities. Whether you're capturing the bustling
			streets of Tokyo, the historic charm of Bogotá, or the scenic vistas of
			Sydney, our challenges will push your creative boundaries and hone your
			skills. Each location offers unique photo opportunities, demanding a mix
			of styles and techniques to complete the tasks. With only one chance per
			shot, can you rise to the challenge?"
		/>

		<ButtonLink text="Capture Your World!" slug="editions" />
	</div>
	<div>
		<Title title="How does it work?" :subtitle="true"></Title>

		<Paragraph
			text="Photo24 organizes exciting photography challenges that explore various
			techniques in different cities. Each challenge comes with a map, viewable
			in Google Maps, showing all the locations. On our website, you can track
			your progress by marking completed challenges. Gather your friends, load
			your film (or memory card), and see how many challenges you can complete"
		/>
	</div>
</template>
