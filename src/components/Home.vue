<template>
	<div class="container my-3">
		<app-header></app-header>
		<app-converter></app-converter>
		<app-history></app-history>
	</div>	
</template>

<script>
	import Header from './Header.vue';
	import Converter from './Converter.vue';
	import History from './History.vue';
	
	export default {

		components: {
			'app-header' : Header,
			'app-converter' : Converter,
			'app-history' : History,
			
		}
	}
</script>