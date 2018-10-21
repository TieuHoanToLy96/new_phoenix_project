import { connect } from "react-redux"
import { fetChCategoryList } from "pages/category/_all/actions"

class CategoryList extends React.Component {

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
    this.props.fetChCategoryList(10, page).then(() => {
      this.setState({ loadding: false })
    }
    )
  }

  handleAddBlog = () => {
    history.push("/admin/category/new")
  }

  handleChangePagination = (page, pageSize) => {
    this.setState({ page: page })
    this.props.fetChCategoryList(10, page).then(() => {
      this.setState({ loadding: false })
    }
    )
  }

  handleClickBlog = (record, index) => {
    history.push(`/admin/category/edit?id=${record.id}`, { id: record.id })
  }

  render() {
    const { loadding, page } = this.state
    const { blogList, total_entries } = this.props
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
                    <div className="ui-title-bar__navigation"
                      onClick={() => history.push("/admin/category/list")}
                    >
                      <Icon type="left" theme="outlined" />
                      <div>Categories</div>
                    </div>
                    <div className="ui-title-bar__main">
                      <div className="ui-title-bar__title no-margin">
                        <h1>Categories</h1>
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
                  <Input placeholder="Search category" style={{ height: 40 }} />
                  <div onClick={this.handleAddBlog} className="default-button default-button--save">
                    Add category
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
                  />
                  <Table.Column
                    title="Author"
                    dataIndex="author"
                    key="author"
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

const mapStateTpProps = state => {
  return {
    categoryList: state.category.categoryList,
    total_entries: state.category.total_entries
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetChCategoryList: (page, entries) => dispatch(fetChCategoryList(page, entries))
  }
}

export default connect(mapStateTpProps, mapDispatchToProps)(CategoryList)