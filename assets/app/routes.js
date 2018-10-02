import BlogList from "./pages/blog/index"
import MainLayout from "./layouts/main_layout"
import HocLayout from "./hocs/HocLayout"
import App from "./components/App"
import BlogEdit from "./pages/blog/edit"

import Web from "./guest/index"

const routes = [
  // {
  //   path: "/admin",
  //   component: HocLayout(App,MainLayout),
  //   routes: [
  //     {
  //       path: "/admin/blog",
  //       component: HocLayout(BlogList, MainLayout),
  //       routes: [
  //         {
  //           path: "/admin/blog/new",
  //           component: HocLayout(BlogEdit, MainLayout)
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    path: "/admin",
    component: HocLayout(App, MainLayout)
  },
  {
    path: "/admin/blog",
    component: BlogList,
  },
  {
    path: "/admin/blog/new",
    component: HocLayout(BlogEdit, MainLayout)
  },
  {
    path: "/",
    component: Web
  }
]
export default routes