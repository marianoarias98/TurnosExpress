import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import SoftUIDashboard from "./soft-ui-dashboard";
import { createPinia } from 'pinia'

createApp(App)
    .use(store)
    .use(router)
    .use(SoftUIDashboard)
    .use(createPinia())
    .mount('#app')