import axios from "axios";

const http = axios.create({
	baseURL: "https://restcountries.com/v3.1",
});

export default class CountryService {
	getCountryPeru() {
		return http.get("/name/peru");
	}
}
