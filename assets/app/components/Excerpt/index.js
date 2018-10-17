import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import "froala-editor/css/froala_editor.pkgd.min.css"
import FroalaEditor from "react-froala-wysiwyg"
import 'font-awesome/css/font-awesome.css'
class ExcerptComponent extends React.Component{

  handleChangeInputField = (field) => e => {
    let value = e.target ? e.target.value : e
    this.props.handleChangeInputField(field, value)
  }
  
  render(){
    const froalaConfig = ["undo", "redo", "|", "fontSize", "fontFamily", "color", , "bold", "italic", "underline", "strikeThrough", "outdent", "indent", "clearFormatting", "insertLink", "fullscreen"]
    const {excerpt} = this.props.data
    return(
     
        <div className="form-section no-margin">
            <h1>Excerpt</h1>
            <p className="mb-15">Add a summary of the post to appear on your home page or blog.</p>
            <FroalaEditor
              config={{ toolbarButtons: froalaConfig, heightMax: 200, quickInsertButtons: [] }}
              tag="textarea"
              model={excerpt}
              onModelChange={this.handleChangeInputField("excerpt")}
            />
          </div>
      
    )
  }
}

export default ExcerptComponent