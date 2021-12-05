import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import CompositionApi from "../views/detail/composition-api.vue";
import SetupRefReactive from "../views/detail/setup-ref-reactive.vue";
import LifeCycleHhooks from "../views/detail/lifecycle-hooks.vue";
import Teleport from "../views/detail/teleport.vue";
import Fragment from "../views/detail/fragment.vue";
import FiltersApi from "../views/detail/filters-api.vue";
import MountApi from "../views/detail/mount-api.vue";

import Post from "../views/post.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/detail/composition-api", name: "Composition Api", component: CompositionApi },
  { path: "/detail/setup-ref-reactive", name: "setup-ref-reactive", component: SetupRefReactive },
  { path: "/detail/lifecycle-hooks", name: "lifecycle-hooks", component: LifeCycleHhooks },
  { path: "/detail/teleport", name: "teleport", component: Teleport },
  { path: "/detail/fragment", name: "teleport", component: Fragment },
  { path: "/detail/filters-api", name: "filters-api", component: FiltersApi },
  { path: "/detail/mount-api", name: "mount-api", component: MountApi },

  { path: "/post", name: "post", component: Post },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
