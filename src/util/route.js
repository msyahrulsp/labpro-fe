import { Home } from "../page/Home";
import { Login } from "../page/Login";
import { Register } from "../page/Register";

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/request',
    component: Home,
  },
  {
    path: '/transfer',
    component: Home,
  },
  {
    path: '/history',
    component: Home,
  },
  {
    path: '/verifikasi',
    component: Home,
  },
  {
    path: '/verifikasi/akun',
    component: Home,
  },
  {
    path: '/verifikasi/transfer',
    component: Home,
  },
  {
    path: '/search',
    component: Home,
  },
]