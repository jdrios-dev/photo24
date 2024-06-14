<script setup>
defineProps(["text", "slug"]);
</script>

<template>
	<NuxtLink :to="slug">
		<button class="button">{{ text }}</button>
	</NuxtLink>
</template>
