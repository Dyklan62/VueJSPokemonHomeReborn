import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Erreur404View from "../views/Erreur404View.vue";
import AboutView from "../views/AboutView.vue";
import "../script/token.js";

const routes = [
  //{ path: "/", component: Dashboard },
  /*{
    path: "/login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (isToken()) next("/");
      else next();
    },
  },*/
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  },
  { path: "/:pathMatch(.*)", component: Erreur404View },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
