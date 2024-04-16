import { createApp } from "vue";
import App from "./App.vue";
import "primevue/resources/themes/aura-light-green/theme.css";

import Card from "primevue/card";

createApp(App).component("pv-card", Card).mount("#app");
