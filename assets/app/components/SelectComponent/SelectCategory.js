import { Select } from 'antd'

class SelectCategory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      valueCategory: "jack"
    }
  }

  handleChange = value => {

  }

  render() {
    const { valueCategory } = this.state
    return (
      <div className="form-section">
        <h1>Category</h1>
        <Select
          showSearch
          placeholder="Select a category"
          optionFilterProp="children"
          onChange={this.handleChange}
          value={valueCategory}
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