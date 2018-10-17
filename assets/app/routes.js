import BlogIndex from "./pages/blog/index"
import MainLayout from "./layouts/main_layout"
import HocLayout from "./hocs/HocLayout"
import App from "./components/App"
import BlogEdit from "./pages/blog/edit"
import BlogList from "./pages/blog/list"
import Guest from "./guest/index"
import Web from "./guest/index"

const routes = [
  {
    path: "/admin",
    component: HocLayout(App, MainLayout),
    routes: [
      {
        path: "/admin/blog",
        component: BlogIndex, 
        routes: [
          {
            path: "/admin/blog/list",
            component: BlogList
          },
          {
            path: "/admin/blog/edit",
            component: BlogEdit
          },
          {
            path: "/admin/blog/new",
            component: BlogEdit
          }
        ]
      }
    ]
  }, 
  {
    path: "/", 
    component: Guest
  }
]
export default routes