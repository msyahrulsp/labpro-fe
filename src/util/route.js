import { Home } from "../page/Home";
import { Login } from "../page/Login";
import { Register } from "../page/Register";
import { Request } from "../page/Request";
import { Transfer } from "../page/Transfer";

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
    component: Request,
  },
  {
    path: '/transfer',
    component: Transfer,
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