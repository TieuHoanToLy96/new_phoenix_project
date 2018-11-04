import { connect } from "react-redux"
import React, { Component } from "react"
import { fetchCategoryList, setEditCategory } from "pages/category/_all/actions"
import { Icon, Table, Pagination, Row, Col, Input, Tag } from "antd"
import { history } from "store"

class CategoryList extends Component {

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
    this.props.dispatch(fetchCategoryList(1, 10)).then(() => {
      this.setState({ loadding: false })
    })
  }

  handleAddCategory = () => {
    history.push("/admin/category/new")
  }

  handleChangePagination = (page, pageSize) => {
    this.setState({ page: page })
    this.props.dispatch(fetchCategoryList(page, 10)).then(() => {
      this.setState({ loadding: false })
    })
  }

  handleClickCategory = (record, index) => {
    history.push(`/admin/category/edit?id=${record.id}`, { id: record.id })
  }

  render() {
    const { loadding, page } = this.state
    const { categoryList, total_entries } = this.props
    return (
      <div className="wrapper-content mb-30">
        {loadding ?
          <Icon style={{ color: "black" }} type="loadding" />
          :
          <div>
            <Row>
              <Col span={24}>
                <div className="ui-title-bar">
                  <div className="ui-title-bar--wrapper">
                    <div className="ui-title-bar__navigation" >
                      <div>Danh mục</div>
                    </div>
                    <div className="ui-title-bar__main">
                      <div className="ui-title-bar__title no-margin">
                        <h1>Danh mục</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="ui-page--actions is-full-width">
              <div className="ui-page--action__wrapper ">
                <div className="is-flex is-row is-full-width is-full-height is-flex-end">
                  <Input placeholder="Tìm danh mục" style={{ height: 40 }} />
                  <div style={{width: 150}} onClick={this.handleAddCategory} className="default-button default-button--save">
                  Thêm danh mục
                </div>

                </div>
              </div>
            </div>

            <div className="ui-card mt-30">
              <div className="ui-card__section">
                <Table
                  className="mb-30"
                  pagination={false}
                  dataSource={categoryList}
                  rowKey={record => record.id}
                  onRow={(record, index) => {
                    return { onClick: () => { this.handleClickCategory(record, index) } }
                  }}
                >
                  <Table.Column
                    title="Tên danh mục"
                    dataIndex="name"
                    key="name"
                  />
                  <Table.Column
                    title="Hiển thị"
                    key="status"
                    render={(text, record) => (
                      <div>
                        {record.is_published ? <Tag color="green">Hiện</Tag> : <Tag color="red">Ẩn</Tag>}
                      </div>
                    )}
                  />
                  <Table.Column
                    title="Ngày thêm vào"
                    dataIndex="inserted_at"
                    key="inserted_at"
                  />

                </Table>

                <Pagination
                  className="text-center"
                  onChange={this.handleChangePagination}
                  current={page} total={total_entries} />
              </div>
            </div>

          </div>
        }
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    categoryList: state.category.categoryList,
    total_entries: state.category.total_entries
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)