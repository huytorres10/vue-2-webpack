<template>
	<div id="app">
		<h1>Hello Vue with Webpack1!</h1>
		<hello-word />
	</div>
</template>

<script>
	import HelloWord from './HelloWord.vue';
	export default {
		components: { HelloWord },
		name: 'App',
		created() {},
	};
</script>
