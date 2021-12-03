import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import CompositionApi from "../views/detail/composition-api.vue";
import SetupRefReactive from "../views/detail/setup-ref-reactive.vue";
import LifeCycleHhooks from "../views/detail/lifecycle-hooks.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail/composition-api",
    name: "Composition Api",
    component: CompositionApi,
  },
  {
    path: "/detail/setup-ref-reactive",
    name: "setup-ref-reactive",
    component: SetupRefReactive,
  },
  {
    path: "/detail/lifecycle-hooks",
    name: "lifecycle-hooks",
    component: LifeCycleHhooks,
  },

  //  {
  // path: "/about",
  // name: "About",
  //  route level code-splitting
  //  this generates a separate chunk (about.[hash].js) for this route
  //  which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
