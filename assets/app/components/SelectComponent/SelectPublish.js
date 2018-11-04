import { Radio } from "antd"

class SelectPublish extends React.Component {
  constructor(props){
    super(props)
    this.state={
      value: this.props.value
    }
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    })
    this.props.handleChangeInputField(this.props.data.field, e.target.value)
  }
  
  render() {
    const {title, title1, title2} = this.props.data
    return (
          <div className="form-section">
          <h1>{title}</h1>
            <Radio.Group onChange={this.onChange} value={this.state.value || this.props.value}>
              <Radio value={true}>{title1}</Radio>
              <Radio value={false}>{title2}</Radio>
            </Radio.Group>
          </div>

    )
  }
}

export default SelectPublish