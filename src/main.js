import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* Plugins */
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

/* CSS */
import "@/assets/css/main.css";

/* Components */

import sources from "./components/sources.vue";

const app = createApp(App);
app.use(store);
app.use(router);
app.component("sources", sources);

app.mount("#app");
