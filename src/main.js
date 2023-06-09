import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./style.css";

import About from "./views/About.vue";
import Admin from "./views/Admin.vue";
import Families from "./views/Families.vue";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/families", component: Families },
  { path: "/about", component: About },
  { path: "/login", component: Login },
  { path: "/admin", component: Admin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
