<template>
		<header class="bg-primary rounded-top p-3">
            <h3 class="d-inline-block text-white">Currency Converter {{title}}</h3>
            <ul class="d-inline-block float-right">
                <li class="list-inline-item align-text-bottom" v-for="flag in flags"><i :class="flag"></i></li>
            </ul>
        </header>
</template>
<script>
	export default {
		data(){
			return {
				flags : ["flag flag--RO","flag flag--FR","flag flag--ES", "flag flag--DE", "flag flag--EN"]
			}
		}
	}
</script>
<style scoped>
/* atribultul scope se pune doar daca vrei ca stylul de aici sa se aplice doar acestei coponente*/

</style>
