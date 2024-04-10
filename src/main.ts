import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import AmplifyVue from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import config from "./amplifyconfiguration.json";

Amplify.configure(config);

Amplify.configure(awsconfig);

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(AmplifyVue);

app.mount("#app");
