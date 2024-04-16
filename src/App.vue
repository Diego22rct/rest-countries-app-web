<template>
	<div id="app">
		<country-card :countryData="country"></country-card>
	</div>
</template>

<script>
import cardComponent from "./country/components/card.component.vue";
import { CountryEntity } from "./country/model/country.entity";
import CountryService from "./country/service/country.service";

export default {
	name: "App",
	components: {
		"country-card": cardComponent,
	},
	data() {
		return {
			country: CountryEntity,
			countryService: new CountryService(),
		};
	},
	created() {
		this.countryService.getCountryPeru().then((response) => {
			if (response.data && response.data.length > 0) {
				// agregar al card solo elementos del modelo
				this.country = response.data[0];
			}
			console.log("country parseado", this.country);
		});
	},
};
</script>
