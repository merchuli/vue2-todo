<template>
	<div class="container">
		<header>
			<slot name="header" />
		</header>
		<main>
			<slot />
		</main>
		<footer>
			<slot name="footer" />
		</footer>
	</div>
</template>

<script>
const component = {};
export default component;
</script>

<style scoped>

</style>
