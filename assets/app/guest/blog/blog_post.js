import { connect } from "react-redux"
import { Markup } from "interweave"

import { getBlogBySlug } from "actions"
class BlogPost extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let slug = this.props.location.pathname.split("/")[2]
    this.props.getBlogBySlug(slug)
  }

  htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  renderPinnedRecentBlogs = (blogs) => {
    return blogs.map(blog =>
      <div key={blog.id} className="article-pin--item">
        <div className="is-flex is-row">
          <div className="article-pin__img">
            <img src={blog.image_binary || "https://demo.mythemeshop.com/school/files/2014/03/pexels-photo-51415-74x74.jpeg"} />
          </div>
          <div className="article-pin__title is-flex-1 ml-15">
            {blog.name}
          </div>
        </div>
        <div className="article-pin__date">
          {moment(blog.inserted_at).format("HH:mm DD-MM-YYYY")}
        </div>
      </div>
    )
  }
  

  render() {
    const { blog } = this.props
    return (
      <div>
        <h1>{blog.name}</h1>
        <div dangerouslySetInnerHTML={{__html: blog.content}}/>
        <div style={{width: "100%"}} className="fb-comments" data-href={`http://localhost:9900/blog/${blog.slug}`} data-numposts="5"></div>
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
