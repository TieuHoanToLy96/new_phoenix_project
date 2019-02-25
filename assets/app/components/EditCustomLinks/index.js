import { Input, Button, Modal } from "antd"
import { connect } from "react-redux"
import { changeNodeAtPath } from "react-sortable-tree"

import { field } from '../../pages/navigation/_all/reducer';
import { setInputField, setTreeData, setFieldEdit } from '../../pages/navigation/_all/actions'

class EditCustomLinks extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChangeInputField = (field) => e => {
    let value = e.target ? e.target.value || "" : e
    this.props.dispatch(setInputField(field, value))
  }

  handleSave = () => {
    console.log(this.props.nodeInfo)
    let newTree = changeNodeAtPath({
      treeData: this.props.treeData,
      path: this.props.nodeInfo.path,
      newNode: this.props.nodeInfo.node,
      getNodeKey: ({ treeIndex }) => treeIndex
    })
    this.props.dispatch(setTreeData(newTree))
    this.props.dispatch(setFieldEdit(field.NULL))
  }

  handleCancel = () => {
    this.props.dispatch(setFieldEdit(field.NULL))
  }

  renderContentEdit = () => {
    if (!this.props.nodeInfo.node) return <div></div>;
    const { url, title, titleAttribute, description, type, image } = this.props.nodeInfo.node

    switch (type) {
      case field.PAGES:
        return (
          <div style={{ paddingTop: 10 }}>
            <div className="form-section">
              <label>URL</label>
              <Input value={url} onChange={this.handleChangeInputField("url")} className="input-default" />
            </div>
            <div className="form-section">
              <label>Navigation Label</label>
              <Input value={title} onChange={this.handleChangeInputField("title")} />
            </div>
            <div className="form-section">
              <label>Description</label>
              <Input.TextArea value={description} onChange={this.handleChangeInputField("description")} rows={4} />
            </div>
            <div className="form-section" style={{ textAlign: "right", marginTop: 30 }}>
              <Button style={{ width: 80, height: 36 }} onClick={this.handleCancel} className="ui-content--add-button is-flat-button is-button-danger is-clickable">
                Thoát
            </Button>
              <Button style={{ marginLeft: 10, width: 80, height: 36 }} className="ui-content--add-button is-flat-button is-button-primary is-clickable" onClick={this.handleSave}>
                Lưu
            </Button>
            </div>
          </div>
        )
      case field.CUSTOM_LINKS:
        return (<div style={{ paddingTop: 10 }}>
          <div className="form-section">
            <label>URL</label>
            <Input value={url} onChange={this.handleChangeInputField("url")} className="input-default" />
          </div>
          <div className="form-section">
            <label>Navigation Label</label>
            <Input value={title} onChange={this.handleChangeInputField("title")} />
          </div>
          <div className="form-section">
            <label>Title Attribute</label>
            <Input value={titleAttribute} onChange={this.handleChangeInputField("titleAttribute")} />
          </div>
          <div className="form-section">
            <label>Description</label>
            <Input.TextArea value={description} onChange={this.handleChangeInputField("description")} rows={4} />
          </div>
          <div className="form-section" style={{ textAlign: "right", marginTop: 30 }}>
            <Button style={{ width: 80, height: 36 }} onClick={this.handleCancel} className="ui-content--add-button is-flat-button is-button-danger is-clickable">
              Thoát
            </Button>
            <Button style={{ marginLeft: 10, width: 80, height: 36 }} className="ui-content--add-button is-flat-button is-button-primary is-clickable" onClick={this.handleSave}>
              Lưu
            </Button>
          </div>
        </div>)
      case field.POSTS:
        return (<div style={{ paddingTop: 10 }}>
          <div className="form-section">
            <label>Navigation Label</label>
            <Input value={title} onChange={this.handleChangeInputField("title")} />
          </div>
          <div className="form-section">
            <label>Title Attribute</label>
            <Input value={titleAttribute} onChange={this.handleChangeInputField("titleAttribute")} />
          </div>
          <div className="form-section">
            <label>Description</label>
            <Input.TextArea value={description} onChange={this.handleChangeInputField("description")} rows={4} />
          </div>
          <div className="form-section" style={{ textAlign: "right", marginTop: 30 }}>
            <Button style={{ width: 80, height: 36 }} onClick={this.handleCancel} className="ui-content--add-button is-flat-button is-button-danger is-clickable">
              Thoát
            </Button>
            <Button style={{ marginLeft: 10, width: 80, height: 36 }} className="ui-content--add-button is-flat-button is-button-primary is-clickable" onClick={this.handleSave}>
              Lưu
            </Button>
          </div>

        </div>)
      case field.CATEGORIES:
        return (<div style={{ paddingTop: 10 }}>
          <div className="form-section">
            <label>URL</label>
            <Input value={url} onChange={this.handleChangeInputField("url")} className="input-default" />
          </div>
          <div className="form-section">
            <label>Navigation Label</label>
            <Input value={title} onChange={this.handleChangeInputField("title")} />
          </div>
          <div className="form-section">
            <label>Image url</label>
            <Input value={image} onChange={this.handleChangeInputField("image")} />
          </div>

          <div className="form-section" style={{ textAlign: "right", marginTop: 30 }}>
            <Button style={{ width: 80, height: 36 }} onClick={this.handleCancel} className="ui-content--add-button is-flat-button is-button-danger is-clickable">
              Thoát
            </Button>
            <Button style={{ marginLeft: 10, width: 80, height: 36 }} className="ui-content--add-button is-flat-button is-button-primary is-clickable" onClick={this.handleSave}>
              Lưu
            </Button>
          </div>
        </div>)
      default: return <div></div>
    }
  }

  handleCloseModal = () => {
    this.props.dispatch(setFieldEdit(field.NULL))
  }

  render() {
    return (
      <Modal
        visible={true}
        footer={null}
        onCancel={this.handleCloseModal}
      >
        {this.renderContentEdit()}
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    nodeInfo: state.navigation.nodeInfo,
    treeData: state.navigation.treeData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditCustomLinks)
