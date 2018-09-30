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
      <div>
        BlogList
        <Button type="primary">ahihi</Button>
        <i className="fas fa-search"></i>
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
    fetchBlogList: () => dispatch(fetchBlogList())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogList)