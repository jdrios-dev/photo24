<template>
	<div>
		<NuxtLayout name="custom">
			<div class="header-container">
				<header class="header">
					<NuxtLink to="/"> Home </NuxtLink>

					<NuxtLink to="/sydney"> Sydney </NuxtLink>
					<NuxtLink to="/tokio"> Tokio </NuxtLink>
					<NuxtLink to="/bogota"> Bogota </NuxtLink>

					<NuxtLink to="/blog"> Blog </NuxtLink>
				</header>
			</div>
			<NuxtPage />
		</NuxtLayout>
		<footer class="footer">
			<NuxtLink to="https://www.linkedin.com/in/jdriosdev/" target="_blank">
				<p>By Daniel Rios - @jdrr_dev</p>
			</NuxtLink>
		</footer>
	</div>
</template>
