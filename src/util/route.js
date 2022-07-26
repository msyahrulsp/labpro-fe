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
  }
]