import { Select } from 'antd'
import update from "immutability-helper"
class SelectCategory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: this.props.data.category,
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
    const { category, author } = this.state
    return (
      <div className="form-section">
        <h1>Category</h1>
        <Select
          showSearch
          placeholder="Select a category"
          optionFilterProp="children"
          onChange={this.handleChange("category_id")}
          value={category || this.props.data.category}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          {this.props.data.categories.map(el => <Select.Option value={el.id}>{el.name}</Select.Option> )}
          {/* <Select.Option value="Mon 1">Mon 1</Select.Option> */}
          {/* <Select.Option value="Mon 2">Mon 2</Select.Option> */}
          
        </Select>
        <h1>Author</h1>
         <Select
          showSearch
          placeholder="Select a author"
          optionFilterProp="children"
          onChange={this.handleChange("author")}
          value={author || this.props.data.author}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
       
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="ma">Ma</Select.Option>
          
        </Select>
      </div>
    )
  }
}

export default SelectCategory