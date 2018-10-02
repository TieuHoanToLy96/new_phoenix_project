import React, { Component } from "react"
import { connect } from "react-redux"
import { Button } from "antd"

import { fetchBlogList } from "actions"
class BlogList extends Component {

  componentDidMount(){
    this.props.fetchBlogList()
  }

  render() {
    return (
      <div className="wrapper">
        <div className="ui-title">
        list from on_linux
        ahihi linux 1
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    blogList: state.blog.blogList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBlogList: (page, entries) => dispatch(fetchBlogList(page, entries))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogList)