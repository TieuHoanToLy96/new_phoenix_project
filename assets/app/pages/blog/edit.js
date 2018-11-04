import React, { Component } from "react"
import TitleAndContent from 'components/TitleAndContent/index'
import ExcerptComponent from "components/Excerpt/index"
import SearchEngine from "components/Excerpt/SearchEngine"
import SelectPublish from "components/SelectComponent/SelectPublish"
import SelectImage from "components/SelectComponent/SelectImage"
import SelectCategory from "components/SelectComponent/SelectCategory"
import { createBlogPost, changeInputField, getEditBlog, setEditBlog, updateEditBlog } from "pages/blog/_all/actions"
import { fetchCategoryList } from "actions"
import { Row, Col, Icon, Divider } from "antd"
import { history } from "store"
import { connect } from "react-redux"

class BlogEdit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loadding: false
    }
  }
  componentDidMount() {
    const postId = this.props.history.location.state ?.id || null
    console.log(postId, "postID")
    if (postId) {
      this.props.fetchCategoryList(1, 20)
      this.props.getEditBlog(postId).then(() => {
      })
    }
  }

  componentWillUnmount() {
    this.props.setEditBlog({})
  }

  handleSaveBlog = () => {
    const postId = this.props.history.location.state ?.id || null
    if (postId) {
      this.props.updateEditBlog(this.props.editPost)
    } else {
      this.props.createBlogPost(this.props.editPost).then(() => {
        console.log("create finish")
      })
    }

  }

  handleChangeInputField = (field, value) => {
    this.props.changeInputField(field, value)
  }

  render() {
    const { editPost } = this.props
    return (
      <div className="wrapper-content mb-30">
        <Row>
          <Col span={24}>
            <div className="ui-title-bar">
              <div className="ui-title-bar--wrapper">
                <div className="ui-title-bar__navigation"
                  onClick={() => history.push("/admin/blog/list")}
                >
                  <Icon type="left" theme="outlined" />
                  <div>Danh sách bài viết</div>
                </div>
                <div className="ui-title-bar__main">
                  <div className="ui-title-bar__title">
                    <h1>Bài viết</h1>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mb-30">
          <Col span={16}>
            <Row className="mb-30">
              <Col span={24}>
                <div className="ui-card">
                  <div className="ui-card__section">
                    <TitleAndContent
                      data={{ name: editPost.name || "", content: editPost.content || "" }}
                      handleChangeInputField={this.handleChangeInputField}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mb-30">
              <Col span={24}>
                <div className="ui-card">
                  <div className="ui-card__section">
                    <ExcerptComponent
                      data={{ excerpt: editPost.excerpt || "" }}
                      handleChangeInputField={this.handleChangeInputField}
                    />
                  </div></div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="ui-card">
                  <div className="ui-card__section">
                    <SearchEngine
                      data={{
                        pageTitle: editPost.page_title || "",
                        metaDescription: editPost.meta_description || "",
                        slug: editPost.slug || ""
                      }}
                      handleChangeInputField={this.handleChangeInputField}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={7} offset={1}>
            <Row className="mb-30">
              <Col>
                <div className="ui-card">
                  <div className="ui-card__section">
                    <SelectPublish
                      data={editPost.is_published}
                      handleChangeInputField={this.handleChangeInputField}
                    />
                  </div></div>
              </Col>
            </Row>
            <Row className="mb-30">
              <Col>
                <div className="ui-card">
                  <div className="ui-card__section">
                    <SelectImage

                      handleChangeInputField={this.handleChangeInputField}
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row >
              <Col>
                <div className="ui-card">
                  <div className="ui-card__section">
                    <SelectCategory
                      categoryId={editPost.category_id}
                      data={{
                        categories: this.props.categories,
                        categorId: editPost.category_id || "",
                        author: editPost.author || ""
                      }}
                      handleChangeInputField={this.handleChangeInputField}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

        </Row>
        <Divider className="divider"></Divider>
        <div className="ui-page--actions is-full-width">
          <div className="ui-page--action__wrapper is-flex is-row is-flex-end">
            <div className="is-flex is-row">
              <a className="default-button mr-15" href="/admin/blog/list"> Cancle </a>
              <div onClick={this.handleSaveBlog} className="default-button default-button--save">
                Save
              </div>
            </div>
          </div>
        </div>


      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    blogList: state.blog.blogList,
    editPost: state.blog.editPost,
    categories: state.category.categoryList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBlogPost: params => dispatch(createBlogPost(params)),
    changeInputField: (field, value) => dispatch(changeInputField(field, value)),
    getEditBlog: id => dispatch(getEditBlog(id)),
    setEditBlog: post => dispatch(setEditBlog(post)),
    updateEditBlog: params => dispatch(updateEditBlog(params)),
    fetchCategoryList: (page, entries) => dispatch(fetchCategoryList(page, entries))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogEdit)