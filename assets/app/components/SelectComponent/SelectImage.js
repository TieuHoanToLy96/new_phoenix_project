import { Upload, Button, Modal, Icon } from "antd";

class SelectImage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: []
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.image != this.props.image){
      let image = nextProps.image ? [{
        uid: '-1',
        status: 'done',
        url: nextProps.image,
     
      }] : []
      this.setState({
        fileList: image
      })
    }
  }

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ file, fileList }) => {
    if (file.percent == 100 || file.status == "done") {
      this.props.handleChangeInputField("image_binary", file.thumbUrl)
    }
    this.setState({ fileList })
  }
  handleCancel = () => { this.setState({ previewVisible: false }) }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="form-section">
        <h1>Ảnh nổi bật</h1>
        <div className="clearfix is-flex is-row is-relative" >
          <Upload
            action="//jsonplaceholder.typicode.com/posts/"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          <div className="is-flex is-center is-absolute is-right is-full-height ">
            <div className="default-button default-button--save">
              Chọn
            </div>
          </div>
          <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>
      </div >
    )
  }
}

export default SelectImage