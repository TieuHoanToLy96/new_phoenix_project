import { Select } from 'antd'
import update from "immutability-helper"
class SelectCategory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryId: this.props.data.categoryId,
      author: this.props.data.author
    }
  }

  
  handleChange = field =>  value => {
    this.setState(update(this.state, {
      [field]: {$set: value}
    }))
    console.log(value)
    this.props.handleChangeInputField(field, value)
  }

  render() {
    const { categoryId, author } = this.state
    console.log("category idddd", categoryId, this.props.categoryId)
    return (
      <div className="form-section">
        <h1>Danh mục</h1>
        <Select
          showSearch
          placeholder="Chọn một danh mục"
          optionFilterProp="children"
          onChange={this.handleChange("category_id")}
          value={categoryId || this.props.categoryId}
          // value={1}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          {this.props.data.categories.map((el, index) => <Select.Option key={index} value={el.id}>{el.name}</Select.Option> )}
          {/* <Select.Option value="Mon 1">Mon 1</Select.Option> */}
          {/* <Select.Option value="Mon 2">Mon 2</Select.Option> */}
          
        </Select>
        <h1>Tác giả</h1>
         <Select
          showSearch
          placeholder="Chọn một Tác giả"
          optionFilterProp="children"
          onChange={this.handleChange("author")}
          value={author || this.props.data.author}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
        <Select.Option value="ThuanPV">ThuanPV</Select.Option>
       
          <Select.Option value="TieuHoan">TieuHoan</Select.Option>
          <Select.Option value="ToLy">ToLy</Select.Option>
          
        </Select>
      </div>
    )
  }
}

export default SelectCategory