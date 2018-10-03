import BlogIndex from "./pages/blog/index"
import MainLayout from "./layouts/main_layout"
import HocLayout from "./hocs/HocLayout"
import App from "./components/App"
import BlogEdit from "./pages/blog/edit"
import BlogList from "./pages/blog/list"

import Web from "./guest/index"

const routes = [
  {
    path: "/admin",
    component: App,
    routes: [
      {
        path: "/admin/blog",
        component: HocLayout(BlogIndex, MainLayout),
        routes: [
          {
            path: "/admin/blog/list",
            component: BlogList
          },
          {
            path: "/admin/blog/edit/:blog_id",
            component: BlogEdit
          },
          {
            path: "/admin/blog/new",
            component: BlogEdit
          }
        ]
      }
    ]
  }
]
export default routes