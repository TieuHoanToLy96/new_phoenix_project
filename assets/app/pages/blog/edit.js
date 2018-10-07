import React, { Component } from "react"
import TitleAndContent from 'components/TitleAndContent/index'
import ExcerptComponent from "components/Excerpt/index"
import SearchEngine from "components/Excerpt/SearchEngine"
import SelectPublish from "components/SelectComponent/SelectPublish"
import SelectImage from "components/SelectComponent/SelectImage"
import SelectCategory from "components/SelectComponent/SelectCategory"
import { createBlogPost, changeInputField } from "pages/blog/_all/actions"
import { Row, Col, Icon, Divider } from "antd"
import { history } from "store"
import { connect } from "react-redux"

class BlogEdit extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }
  handleSaveBlog = () => {
    this.props.createBlogPost(this.props.editPost).then(() => {
      console.log("create finish")
    })
  }

  handleChangeInputField = (field, value) => {
    this.props.changeInputField(field, value)
  }

  render() {
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
                  <div>Blog posts</div>
                </div>
                <div className="ui-title-bar__main">
                  <div className="ui-title-bar__title">
                    <h1>Blog post</h1>
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
                      data={{ value: "ahihi" }}
                      handleChangeInputField={this.handleChangeInputField}
                    />
                  </div></div>
              </Col>
            </Row>
            <Row className="mb-30">
              <Col span={24}>
                <div className="ui-card">
                  <div className="ui-card__section">
                    <ExcerptComponent
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
    editPost: state.blog.editPost
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBlogPost: params => dispatch(createBlogPost(params)),
    changeInputField: (field, value) => dispatch(changeInputField(field, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogEdit)