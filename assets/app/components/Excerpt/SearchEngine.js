import { Input } from "antd"
class SearchEngine extends React.Component {

  handleChangeInputField = (field) => e => {
    let value = e.target ? e.target.value : e
    this.props.handleChangeInputField(field, value)
  }

  render() {
    const { metaDescription, pageTitle, slug } = this.props.data
    return (
      <div>
        <div className="form-section">
          <h1>Xem trước danh sách công cụ tìm kiếm</h1>
          <p className="mb-15">Thêm tiêu đề và mô tả để xem bài viết này có thể xuất hiện như thế nào trong danh sách công cụ tìm kiếm</p>
        </div>
        <div className="form-section">
          <label>Tiêu đề trang</label>
          <Input
            value={pageTitle}
            onChange={this.handleChangeInputField("page_title")} />
        </div>
        <div className="form-section">
          <label>Mô tả</label>
          <Input.TextArea
            value={metaDescription}
            onChange={this.handleChangeInputField("meta_description")} />
        </div>
        <div className="form-section">
          <label> Đường dẫn </label>
          <Input
            defaultValue={slug}
          />
        </div>
      </div>
    )
  }
}
export default SearchEngine