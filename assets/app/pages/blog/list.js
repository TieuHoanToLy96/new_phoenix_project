import React, { Component } from "react"
import { Icon, Table, Pagination } from "antd"
import { fetchBlogList } from "pages/blog/_all/actions"
import { connect } from "react-redux"
import axios from 'axios'
class BlogList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      loadding: false
    }
  }
  componentDidMount() {
    const { page } = this.state
    this.setState({ loadding: true })
    this.props.fetchBlogList(10, page).then(() => {
      this.setState({ loadding: false })
    }
    )
  }
  render() {
    const { loadding } = this.state
    const { blogList } = this.props
    return (
      <div className="wrapper">
        <div className="ui-title">
          {loadding ?
            <Icon style={{color: "black"}} type="loadding" />
            :
            <div>Loaded</div>
          }
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
    fetchBlogList: (entries, page) => dispatch(fetchBlogList(entries, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList)