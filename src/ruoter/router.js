import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import onepage from "../components/onepage.vue";
import { logicalPropertiesLinter } from "ant-design-vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: HelloWorld,
  },
  {
    path: "/home",
    name: "home",
    component: onepage,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory("login"),
});

export default router;
