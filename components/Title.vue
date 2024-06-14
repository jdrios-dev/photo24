<script setup>
defineProps(["title", "subtitle"]);
</script>
<template>
	<h1 v-if="!subtitle" class="hero-title">{{ title }}</h1>
	<h2 v-else="subtitle" class="hero-subtitle">{{ title }}</h2>
</template>
