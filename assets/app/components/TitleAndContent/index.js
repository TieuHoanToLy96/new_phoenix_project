import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import "froala-editor/css/froala_editor.pkgd.min.css"
import FroalaEditor from "react-froala-wysiwyg"
import 'font-awesome/css/font-awesome.css'
import FontPicker from 'font-picker-react';
import { Input } from "antd"

class TitleAndContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeFont: 'Roboto' };
  }

  handleChangeInputField = (field) => e => {
    let value = e.target ? e.target.value : e
    this.props.handleChangeInputField(field, value)
  }


  render() {
    const froalaConfig = ["undo", "redo", "|", "fontSize", "fontFamily", "color", , "bold", "italic", "underline", "strikeThrough", "outdent", "indent", "clearFormatting", "insertLink", "fullscreen"]
    const {content, name} = this.props.data
    return (
      <div>
        <div className="form-section">
          <label> Tiêu đề</label>
          <Input 
          value={name}
          onChange={this.handleChangeInputField("name")}/>
        </div>
        <div className="form-section no-margin">
          <label>Nội dung</label>
          <FroalaEditor
            config={{ toolbarButtons: froalaConfig, heightMax: 200, quickInsertButtons: [] }}
            tag="textarea"
            model={content}
            onModelChange={this.handleChangeInputField("content")}
          />
        </div>

      </div>

    )
  }
}

export default TitleAndContent