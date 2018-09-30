import BlogList from "./pages/blog/index"
import MainLayout from "./layouts/main_layout"
import HocLayout from "./hocs/HocLayout"
import App from "./components/App"
import BlogEdit from "./pages/blog/edit"

const routes = [
  {

    path: "/admin",
    component: HocLayout(App,MainLayout),
    routes: [
      {
        path: "/admin/blog",
        component: HocLayout(BlogList, MainLayout),
        routes: [
          {
            path: "/admin/blog/new",
            component: HocLayout(BlogEdit, MainLayout)
          }
        ]
      }
    ]
  }
]
export default routes