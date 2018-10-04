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
  render() {
    const froalaConfig = ["undo", "redo", "|", "fontSize", "fontFamily", "color", , "bold", "italic", "underline", "strikeThrough", "outdent", "indent", "clearFormatting", "insertLink", "fullscreen"]

    return (
      <div className="ui-card">
        <div className="ui-card__section">
          <div className="input-form">
            <label> Title</label>
            <Input />
          </div>
          <FroalaEditor
            config={{ toolbarButtons: froalaConfig, heightMax: 200, quickInsertButtons: [] }}
            tag="textarea"
            model={this.props.data.value}
            onModelChange={(value) => console.log(value)}
          />

        </div>
      </div>
    )
  }
}

export default TitleAndContent