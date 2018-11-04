import { Radio } from "antd"

class SelectPublish extends React.Component {
  constructor(props){
    super(props)
    this.state={
      value: this.props.data
    }
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    })
    this.props.handleChangeInputField("is_published", e.target.value)
  }
  
  render() {
    return (
          <div className="form-section">
          <h1>Hiển thị</h1>
            <Radio.Group onChange={this.onChange} value={this.state.value || this.props.data}>
              <Radio value={true}>Hiện</Radio>
              <Radio value={false}>Ẩn</Radio>
            </Radio.Group>
          </div>

    )
  }
}

export default SelectPublish