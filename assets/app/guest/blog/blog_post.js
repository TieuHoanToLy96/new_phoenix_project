import { connect } from "react-redux"

import { getBlogBySlug } from "actions"
class BlogPost extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let slug = this.props.location.pathname.split("/")[2]
    this.props.getBlogBySlug(slug)
  }

  render() {
    const { blog } = this.props
    return (
      <div>
        {blog ?
          blog.content
          :
          <div></div>
        }
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    blog: state.blog.editPost
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBlogBySlug: slug => dispatch(getBlogBySlug(slug))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost)