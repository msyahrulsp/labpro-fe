import { History } from "../page/History";
import { Home } from "../page/Home";
import { Login } from "../page/Login";
import { Profile } from "../page/Profile";
import { Register } from "../page/Register";
import { Request } from "../page/Request";
import { Transfer } from "../page/Transfer";
import { Search } from "../page/Search";
import { Verifikasi } from "../page/Verifikasi";

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
    path: '/profile',
    component: Profile,
  },
  {
    path: '/history',
    component: History,
  },
  {
    path: '/verifikasi',
    component: Verifikasi,
  },
  {
    path: '/search',
    component: Search,
  },
]