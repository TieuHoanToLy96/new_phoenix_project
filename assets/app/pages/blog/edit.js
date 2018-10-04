import React, { Component } from "react"
import TitleAndContent from '../../components/TitleAndContent/index'
class BlogEdit extends Component {
  render() {
    return (
      <div>
        <TitleAndContent
          data={{ value: "ahihi" }}
        />
      </div>
    )
  }
}
export default BlogEdit