<template>
	<div class="container">
		<header>
			<slot name="header" />
		</header>
		<main>
			<slot />
			<p>Hello {{ user.name }},</p>
		</main>
		<footer>
			<!-- Won't working since the user is not binding to the slot
			<slot name="footer">
				{{ user.career }}
			</slot> -->
			<slot
				name="footer"
				:user="user"
			>
				<!-- Why not working ? -->
				<p>Hi {{ user.name }}, </p>
			</slot>
		</footer>
	</div>
</template>

<script>
const component = {
	data() {
		return {
			user: {
				name: 'Merchu',
				career: 'frontend engineer',
			},
		};
	},
};
export default component;
</script>

<style scoped>

</style>
