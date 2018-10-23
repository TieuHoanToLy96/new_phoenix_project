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
                      <div>Blog posts</div>
                    </div>
                    <div className="ui-title-bar__main">
                      <div className="ui-title-bar__title no-margin">
                        <h1>Blog post</h1>
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
                  <Input placeholder="Search blog" style={{ height: 40 }} />
                  <div onClick={this.handleAddBlog} className="default-button default-button--save">
                    Add blog
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
                    title="Name"
                    dataIndex="name"
                    key="name"
                  />
                  <Table.Column
                    title="Category"
                    dataIndex="category"
                    key="category"
                    render={(text, record) => (
                      <div>
                        {record.category ? record.category.name : ""}
                      </div>
                    )}
                  />
                  <Table.Column
                    title="Author"
                    dataIndex="author"
                    key="author"
                  />
                  <Table.Column
                    title="Status"
                    key="status"
                    render={(text, record) => (
                      <div>
                        {record.is_published ? <Tag color="green">Visible</Tag> : <Tag color="red">Hidden</Tag>}
                      </div>
                    )}
                  />
                  <Table.Column
                    title="Inserted at"
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