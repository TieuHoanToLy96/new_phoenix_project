import React, { Component } from "react"
import { history } from "store"
import { getPathnameWithoutSlash } from "../../utils/tools"
import { renderRoutes } from "react-router-config"
class CategoryIndex extends Component {

  componentWillMount() {
    if (getPathnameWithoutSlash(window.location.pathname) === "/admin/category")
      history.replace("/admin/category/list")
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="ui-title">
          {renderRoutes(this.props.route.routes)}
        </div>
      </div>
    )
  }
}

export default CategoryIndex