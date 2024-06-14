<script setup>
import { editions } from "../data/challenges";
import Title from "../components/Title.vue";
const route = useRoute();
const slug = route.params.slug;
const data = editions?.find((item) => item?.slug === slug);

// export default {
// 	components: {},
// 	data() {
// 		return {
// 			challenges: [],
// 			edition: "sydney",
// 			editionData: sydneyChallenges,
// 		};
// 	},
// 	created() {
// 		this.readAllChallenges();
// 		if (this.challenges?.length === 0 || !this.challenges?.length) {
// 			this.saveAllChallenges();
// 			this.readAllChallenges();
// 		}
// 	},
// 	methods: {
// 		changeEdition(edition) {
// 			this.edition = edition;
// 			this.saveAllChallenges();
// 			this.readAllChallenges();
// 		},
// 		readAllChallenges() {
// 			const challenges = localStorage.getItem(this.edition);
// 			const parsed = JSON.parse(challenges);
// 			this.challenges = parsed;
// 			return parsed;
// 		},
// 		saveAllChallenges() {
// 			localStorage.setItem(
// 				this.edition,
// 				JSON.stringify(this.getChallengesByEdition(this.edition))
// 			);
// 		},
// 		updateChallengeById(id) {
// 			const allItems = this.challenges;
// 			const item = allItems?.find((item) => item.id === id);
// 			const itemIndex = allItems.findIndex((item) => item.id === id);
// 			allItems[itemIndex] = { ...item, isCompleted: !item.isCompleted };
// 			this.challenges = allItems;
// 			return localStorage.setItem(this.edition, JSON.stringify(allItems));
// 		},
// 		getChallengesByEdition(edition) {
// 			switch (edition) {
// 				case "sydney":
// 					this.editionData = sydneyChallenges;
// 					return sydneyChallenges.list;
// 				case "tokio":
// 					this.editionData = tokioChallenges;
// 					return tokioChallenges.list;

// 				case "bogota":
// 					this.editionData = bogotaChallenges;
// 					return bogotaChallenges.list;

// 				default:
// 					return sydneyChallenges.list;
// 			}
// 		},
// 		requireImage(link) {
// 			return require(`@/assets/${link}`);
// 		},
// 	},
// };
</script>

<template>
	<div>
		<Title :title="data.name"></Title>
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
