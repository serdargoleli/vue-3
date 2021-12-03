import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import "@/assets/css/main.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.config.devtools = true;

app.mount("#app");
