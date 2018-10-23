import { connect } from "react-redux";
import { Col, Row, Button, Icon, Input } from "antd"
import CollapseView from "components/CollapseView/index"
import TreeViewNavigation from "components/TreeViewNavigation/index"
import { saveNavigation, changeNameNavigation, getNavigation, updateNavigation } from "./_all/actions"
import { history } from "store"

class NavigationEdit extends React.Component {

  handleSaveNavigation = () => {
    console.log(this.props.history.location)
    const { name, treeData } = this.props.editNavigation
    const navigationId = this.props.history.location.state ?.id || null

    let params = {
      name: name,
      settings: treeData
    }
    if(navigationId){
      this.props.dispatch(updateNavigation(params, navigationId))
    } else {
      this.props.dispatch(saveNavigation(params))
    }
   
  }

  handleChangeName = e => {
    let value = e.target ?.value || e
    this.props.dispatch(changeNameNavigation(value))
  }

  componentDidMount() {
    const navigationId = this.props.history.location.state ?.id || null
    if (navigationId) {
      this.props.dispatch(getNavigation(navigationId))
    }
  }

  render() {
    const { name } = this.props.editNavigation
    return (
      <div className="wrapper-content mb-30">
        <Row>
          <Col span={24}>
            <div className="ui-title-bar">
              <div className="ui-title-bar--wrapper">
                <div className="ui-title-bar__navigation"
                  onClick={() => history.push("/admin/navigation/list")}
                >
                  <Icon type="left" theme="outlined" />
                  <div>Navigation</div>
                </div>
                <div className="ui-title-bar__main">
                  <div className="ui-title-bar__title">
                    <h1>Edit navigation</h1>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Button onClick={this.handleSaveNavigation}>Save</Button>

        <Row type="flex" style={{ height: "100%" }}>
          <Col xs={{ span: 24 }} lg={{ span: 8 }} >
            <CollapseView />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 16 }} style={{ paddingLeft: 5, paddingRight: 5 }} value={300}>
            <div className="navigation">
              <div className="navigation--title">
                <div className="form-section">
                  <label>Tên navigation</label>
                  <Input value={name} onChange={this.handleChangeName} />
                </div>
              </div>
              <div className="navigation--tree">
                <div className="navigation--tree__title">
                  Danh sách item
                </div>
                <TreeViewNavigation />
              </div>
            </div>
          </Col>
          <Col lg={{ span: 8 }} >
            {/* {this.renderEdit(fieldEdit)} */}
          </Col>
        </Row>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    editNavigation: state.navigation.editNavigation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationEdit)