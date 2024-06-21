<script setup>
defineProps(["subtitle"]);
</script>
<template>
	<h1 v-if="!subtitle" class="hero-title"><slot /></h1>
	<h2 v-else="subtitle" class="hero-subtitle"><slot /></h2>
</template>
