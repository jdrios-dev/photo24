<template>
	<div class="paragraph-container">
		<p class="paragraph">
			{{ text }}
		</p>
	</div>
</template>

<script setup>
defineProps(["text"]);
</script>
