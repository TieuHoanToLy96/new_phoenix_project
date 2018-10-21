import BlogIndex from "pages/blog/index"
import CategoryIndex from "pages/category/index"
import MainLayout from "./layouts/main_layout"
import MainLayoutGuest from "./layouts/main_layout_guest"
import HocLayout from "./hocs/HocLayout"
import HocLayoutGuest from "./hocs/HocLayoutGuest"

import App from "components/App"
import BlogEdit from "pages/blog/edit"
import CategoryEdit from "pages/category/edit"
import BlogList from "pages/blog/list"
import CategoryList from "pages/category/list"

import BlogPost from "./guest/blog/blog_post"
import HomeGuest from "./guest/home";
import CategoryGuest from "./guest/category/index"
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
      }, 
      {
        path: "/admin/category",
        component: CategoryIndex, 
        routes: [
          {
            path: "/admin/category/list",
            component: CategoryList
          },
          {
            path: "/admin/category/edit",
            component: CategoryEdit
          },
          {
            path: "/admin/category/new",
            component: CategoryEdit
          }
        ]
      }
    ]
  }, 
  {
    path: "/", 
    component: HocLayoutGuest(App, MainLayoutGuest),
    routes: [
      {
        path: "/home",
        component: HomeGuest
      },
      {
        path: "/categories/:slug",
        component: CategoryGuest
      }, 
      {
        path: "/blog/:slug",
        component: BlogPost
      }
    ]
  }
]
export default routes