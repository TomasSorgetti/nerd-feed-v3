import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import FeedPage from "../pages/FeedPage.vue";
import LoginPage from "../pages/auth/LoginPage.vue";
import RegisterPage from "../pages/auth/RegisterPage.vue";
import NotFound from "../pages/error/NotFound.vue";
import ServerError from "../pages/error/ServerError.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/feed",
    component: FeedPage,
  },
  {
    path: "/auth/signin",
    component: LoginPage,
    meta: { guestOnly: true },
  },
  {
    path: "/auth/signup",
    component: RegisterPage,
    meta: { guestOnly: true },
  },

  {
    path: "/500",
    component: ServerError,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
