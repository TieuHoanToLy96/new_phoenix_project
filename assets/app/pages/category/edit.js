import React, { Component } from "react"
import { connect } from "react-redux"

import { Row, Col, Icon, Divider } from "antd"

import TitleAndContent from 'components/TitleAndContent/index'
import ExcerptComponent from "components/Excerpt/index"
import SearchEngine from "components/Excerpt/SearchEngine"
import SelectPublish from "components/SelectComponent/SelectPublish"
import SelectImage from "components/SelectComponent/SelectImage"

import { history } from "store"
import { fetchCategoryList, updateCategory, createCategory, setEditCategory, getEditCategory } from "actions"
import { changeInputField } from "pages/category/_all/actions"

class CategoryEdit extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const categoryId = this.props.history.location.state ?.id || null
    console.log("category id", categoryId)
    if (categoryId) {
      this.props.dispatch(getEditCategory(categoryId))
    }

  }

  componentWillUnmount() {
    this.props.dispatch(setEditCategory({}))
  }


  handleChangeInputField = (field, value) => {
    this.props.dispatch(changeInputField(field, value))
  }

  handleSaveCategory = () => {
    const categoryId = this.props.history.location.state ?.id || null
    if (categoryId) {
      this.props.dispatch(updateCategory(this.props.editCategory))
    } else {
      this.props.dispatch(createCategory(this.props.editCategory))
    }
  }

  render() {
    const { editCategory } = this.props
    return (
      <div className="wrapper-content mb-30">
        <Row>
          <Col span={24}>
            <div className="ui-title-bar">
              <div className="ui-title-bar--wrapper">
                <div className="ui-title-bar__navigation"
                  onClick={() => history.push("/admin/category/list")}
                >
                  <Icon type="left" theme="outlined" />
                  <div>Danh sách danh mục</div>
                </div>
                <div className="ui-title-bar__main">
                  <div className="ui-title-bar__title">
                    <h1>Danh mục</h1>
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
                      data={{ name: editCategory.name || "", content: editCategory.content || "" }}
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
                      data={{ excerpt: editCategory.excerpt || "" }}
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
                        pageTitle: editCategory.page_title || "",
                        metaDescription: editCategory.meta_description || "",
                        slug: editCategory.slug || ""
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
                      data={editCategory.is_published}
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

          </Col>

        </Row>
        <Divider className="divider"></Divider>
        <div className="ui-page--actions is-full-width">
          <div className="ui-page--action__wrapper is-flex is-row is-flex-end">
            <div className="is-flex is-row">
              <a className="default-button mr-15" href="/admin/category/list"> Thoát </a>
              <div onClick={this.handleSaveCategory} className="default-button default-button--save">
                Lưu
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    editCategory: state.category.editCategory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEdit)