import { Input } from "antd"
class SearchEngine extends React.Component {

  handleChangeInputField = (field) => e => {
    let value = e.target ? e.target.value : e
    this.props.handleChangeInputField(field, value)
  }

  render() {
    return (
      <div>
        <div className="form-section">
          <h1>Search engine listing preview</h1>
          <p className="mb-15"> Add a title and description to see how this article might appear in a search engine listing</p>
        </div>
        <div className="form-section">
          <label> Page title</label>
          <Input onChange={this.handleChangeInputField("page_title")}/>
        </div>
        <div className="form-section">
          <label> Meta description</label>
          <Input.TextArea onChange={this.handleChangeInputField("meta_description")} />
        </div>
        <div className="form-section">
          <label> Url and handle</label>
          <Input/>
        </div>
      </div>
    )
  }
}
export default SearchEngine