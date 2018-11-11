import React, { Component } from "react"
import { Icon, Table, Pagination, Row, Col, Input, Tag } from "antd"
import { fetchBlogList } from "actions"
import { connect } from "react-redux"
import { history } from "store"

class BlogList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1
    }
  }
  componentDidMount() {
    const { page } = this.state
    this.props.fetchBlogList(10, page)
  }

  handleAddBlog = () => {
    history.push("/admin/blog/new")
  }

  handleChangePagination = (page, pageSize) => {
    this.setState({ page: page })
    this.props.fetchBlogList(10, page)
  }

  handleClickBlog = (record, index) => {
    history.push(`/admin/blog/edit?id=${record.id}`, { id: record.id })
  }

  render() {
    const { page } = this.state
    const { blogList, total_entries, isLoaddingList } = this.props
    return (
      <div className="wrapper-content mb-30">
        {isLoaddingList ?
          <Icon style={{ color: "black" }} type="loadding" />
          :
          <div>
            <Row>
              <Col span={24}>
                <div className="ui-title-bar">
                  <div className="ui-title-bar--wrapper">
                    <div className="ui-title-bar__navigation"  >
                      <div>Bài viết</div>
                    </div>
                    <div className="ui-title-bar__main">
                      <div className="ui-title-bar__title no-margin">
                        <h1>Bài viết</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="ui-page--actions is-full-width">
              <div className="ui-page--action__wrapper ">
                {/* <Input.Search
                  placeholder="Search blog"
                  enterButton="Search"
                  size= "large"
                  onSearch={value => console.log(value)}
                /> */}
                <div className="is-flex is-row is-full-width is-full-height is-flex-end">
                  <Input placeholder="Tìm kiếm bài viết" style={{ height: 40 }} />
                  <div style={{width: 150}} onClick={this.handleAddBlog} className="default-button default-button--save">
                  Thêm bài viết
                </div>

                </div>
              </div>
            </div>

            <div className="ui-card mt-30">
              <div className="ui-card__section">
                <Table
                  className="mb-30"
                  pagination={false}
                  dataSource={blogList}
                  rowKey={record => record.id}
                  onRow={(record, index) => {
                    return { onClick: () => { this.handleClickBlog(record, index) } }
                  }}
                >
                  <Table.Column
                    title="Tên"
                    dataIndex="name"
                    key="name"
                  />
                  <Table.Column
                    title="Danh mục"
                    dataIndex="category"
                    key="category"
                    render={(text, record) => (
                      <div>
                        {record.category ? record.category.name : ""}
                      </div>
                    )}
                  />
                  <Table.Column
                    title="Tác giả"
                    dataIndex="author"
                    key="author"
                  />
                  <Table.Column
                    title="Trạng thái"
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
    blogList: state.blog.blogList,
    total_entries: state.blog.total_entries,
    isLoaddingList: state.blog.isLoaddingList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBlogList: (entries, page) => dispatch(fetchBlogList(entries, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList)