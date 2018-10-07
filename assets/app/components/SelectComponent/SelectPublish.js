import { Radio } from "antd"

class SelectPublish extends React.Component {
  constructor(props){
    super(props)
    this.state={
      value: false
    }
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  
  render() {
    return (
      
          <div className="form-section">
          <h1>Visibility</h1>
            <Radio.Group onChange={this.onChange} value={this.state.value}>
              <Radio value={true}>Visible</Radio>
              <Radio value={false}>Hidden</Radio>
            </Radio.Group>
          </div>

    )
  }
}

export default SelectPublish