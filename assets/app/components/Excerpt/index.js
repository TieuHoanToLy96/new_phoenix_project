import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import "froala-editor/css/froala_editor.pkgd.min.css"
import FroalaEditor from "react-froala-wysiwyg"
import 'font-awesome/css/font-awesome.css'
class ExcerptComponent extends React.Component {

  handleChangeInputField = (field) => e => {
    let value = e.target ? e.target.value : e
    this.props.handleChangeInputField(field, value)
  }

  render() {
    const froalaConfig = ["undo", "redo", "|", "fontSize", "fontFamily", "color", , "bold", "italic", "underline", "strikeThrough", "outdent", "indent", "clearFormatting", "insertLink", "fullscreen"]
    const { excerpt } = this.props.data
    return (

      <div className="form-section no-margin">
        <h1>Đoạn trích</h1>
        <p className="mb-15">Thêm bản tóm tắt bài đăng để xuất hiện trên trang chủ hoặc blog của bạn.</p>
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