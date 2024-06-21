<script setup>
import { editions } from "../data/challenges";
import Title from "../components/Title.vue";
const route = useRoute();
const slug = route.params.slug;
const data = editions?.find((item) => item?.slug === slug);
</script>

<template>
	<div>
		<Title>{{ data.name }}</Title>
		<ul class="list">
			<li
				@click="updateChallengeById(item.id)"
				class="card-item"
				v-for="item in data.list"
				:key="item.id"
			>
				<h3 class="card-title">{{ item.name }}</h3>
				<p>{{ item.description }}</p>
				<p>📍 {{ item.location }}</p>

				<!-- <img
					v-if="item.isCompleted"
					class="img-check roll-out"
					src="../assets/check-mark.png)"
					alt="challenge complete"
				/> -->
			</li>
		</ul>
		<a target="_blank" v-bind:href="data.mapLinkGoogle">
			<img class="map" :src="data.mapImagePath" alt="link to location" />
			<p>Click here to visit on Google maps</p>
		</a>
	</div>
</template>
