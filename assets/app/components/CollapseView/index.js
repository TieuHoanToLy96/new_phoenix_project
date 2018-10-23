import Collapse, { Panel } from "rc-collapse"
import('rc-collapse/assets/index.css')
import { Table, Button } from "antd"
import connect from "react-redux/lib/connect/connect";
import { fetchBlogList } from "pages/blog/_all/actions";
import { addNodeToTreeData } from "pages/navigation/_all/actions";
import { field } from "pages/navigation/_all/reducer"
import { fetchCategoryList } from "../../pages/category/_all/actions";

class CollapseView extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedCate: [],
      selectedRowKeysCate: [],
      selectedRowsCate: [],

      selectedBlog: [],
      selectedRowKeysBlog: [],
      selectedRowsBlog: [],
    }
  }

  componentDidMount() {
    if (!this.props.blog.isLoaded) {
      this.props.dispatch(fetchBlogList(30, 1))
    }

    if(!this.props.category.isLoaded){
      this.props.dispatch(fetchCategoryList(1,30))
    }

  }

  selectRowBlog = (selectedRowKeys, selectedRows) => {
    if (selectedRows.length != 0) {
      this.setState({ selectedRowKeysBlog: selectedRowKeys, selectedRowsBlog: selectedRows })
    } else {
      this.setState({ selectedRowKeysBlog: selectedRowKeys, selectedRowsBlog: selectedRows })
    }
  }
  selectRowCategory = (selectedRowKeys, selectedRows) => {
    if (selectedRows.length != 0) {
      this.setState({ selectedRowKeysCate: selectedRowKeys, selectedRowsCate: selectedRows })
    } else {
      this.setState({ selectedRowKeysCate: selectedRowKeys, selectedRowsCate: selectedRows })
    }
  }

  handleAddBlogs = () => {
    if (this.state.selectedRowKeysBlog.length) {
      let tree = [...this.state.selectedRowsBlog]
      let select = [...this.state.selectedBlog]

      tree.forEach(el => {
        let data = {
          title: el.name,
          type: field.POSTS,
          url: `/blog/${el.slug}`,
          image: el.image
        }
        select.push(data)
      })

      this.props.dispatch(addNodeToTreeData(select))
      this.setState({
        selectedRowKeysBlog: [], selectedBlog: [], selectedRowsBlog: []
      })
    }
  }

  handleAddCategories = () => {
    if (this.state.selectedRowKeysCate.length) {
      let tree = [...this.state.selectedRowsCate]
      let select = [...this.state.selectedCate]

      tree.forEach(el => {
        let data = {
          title: el.name,
          type: field.CATEGORY,
          url:`/categories/${el.slug}`,
          image: el.image
        }
        select.push(data)
      })

      this.props.dispatch(addNodeToTreeData(select))
      this.setState({
        selectedRowKeysCate: [], selectedCate: [], selectedRowsCate: []
      })
    }
  }

  render() {
    const {categoryList} = this.props.category
    const { blogList } = this.props
    const { selectedRowKeysBlog, selectedRowKeysCate, selectedRowsBlog, selectedRowsCate } = this.state
    const rowSelectionBlog = {
      selectedRowKeys: selectedRowKeysBlog,
      selectedRows: selectedRowsBlog,
      onChange: (selectedRowKeys, selectedRows) => {
        this.selectRowBlog(selectedRowKeys, selectedRows)
      },
    };
    const rowSelectionCate = {
      selectedRowKeys: selectedRowKeysCate,
      selectedRows: selectedRowsCate,
      onChange: (selectedRowKeys, selectedRows) => {
        this.selectRowCategory(selectedRowKeys, selectedRows)
      },
    };

    return (
      <div className="ui-card">
        <Collapse >
          <Panel header="Bài viết">
            <Table
              rowSelection={rowSelectionBlog}
              showHeader={false}
              pagination={false}
              dataSource={blogList.filter(el => el.is_published == true )}
              size="small"
              rowKey={record => record.id}
            >
              <Table.Column
                key="name"
                dataIndex="name"
              />
            </Table>

            <Button onClick={this.handleAddBlogs} style={{ marginTop: 20 }}> Thêm</Button>
          </Panel>
          <Panel header="Categories">
            <Table
              rowSelection={rowSelectionCate}
              showHeader={false}
              pagination={false}
              dataSource={categoryList.filter(el => el.is_published == true)}
              size="small"
              rowKey={record => record.id}
            >
              <Table.Column
                key="name"
                dataIndex="name"
              />
            </Table>

            <Button onClick={this.handleAddCategories} style={{ marginTop: 20 }}> Thêm</Button>
          </Panel>

        </Collapse>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    blogList: state.blog.blogList,
    blog: state.blog, 
    category: state.category
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(CollapseView)