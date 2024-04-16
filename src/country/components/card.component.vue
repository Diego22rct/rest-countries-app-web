<template>
	<pv-card style="width: 25rem; overflow: hidden">
		<template #title>{{ countryData.name.common }}</template>
		<template #header>
			<Avatar
				:image="countryData.flags.png"
				class="mr-2"
				size="large"
				shape="circle" />
		</template>
		<template #content>
			<p><strong>Capital:</strong> {{ countryData.capital }}</p>
			<p><strong>Region:</strong> {{ countryData.region }}</p>
			<p><strong>Subregion:</strong> {{ countryData.subregion }}</p>
			<p><strong>Population:</strong> {{ countryData.population }}</p>
			<p><strong>Area:</strong> {{ countryData.area }} km²</p>
			<p>
				<strong>Borders:</strong>
				<p v-for="border in countryData.borders" :key="border">
					{{ border }}
				</p>
			</p>
		</template>
	</pv-card>
</template>
<script>
import Avatar from "primevue/avatar";
import { CountryEntity } from "../model/country.entity";

export default {
	name: "country-card",
	props: {
		countryData: CountryEntity,
	},
	components: {
		Avatar,
	},

	created() {
		console.log("country dentro de card", this.country);
	},
};
</script>
