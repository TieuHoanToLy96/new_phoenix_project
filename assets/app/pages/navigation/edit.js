import { connect } from "react-redux";
import { Col, Row, Button, Icon, Input } from "antd"

import CollapseView from "components/CollapseView/index"
import TreeViewNavigation from "components/TreeViewNavigation/index"
import EditCustomLinks from "components/EditCustomLinks/index"


import { saveNavigation, changeNameNavigation, getNavigation, updateNavigation } from "./_all/actions"
import { field } from '../../pages/navigation/_all/reducer';
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

  renderEdit = fieldEdit => {
    switch (fieldEdit) {
      case field.CUSTOM_LINKS: return <EditCustomLinks />
      case field.POSTS: return <EditCustomLinks />
      case field.CATEGORIES: return <EditCustomLinks />
      case field.PAGES: return <EditCustomLinks />
      default: return <div> </div>
    }
  }


  render() {
    const { name } = this.props.editNavigation
    const { fieldEdit } = this.props
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
                  <div>Danh sách điều hướng</div>
                </div>
                <div className="ui-title-bar__main">
                  <div className="ui-title-bar__title">
                    <h1>Điều hướng</h1>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Button onClick={this.handleSaveNavigation}>Lưu</Button>

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
            {this.renderEdit(fieldEdit)}
          </Col>
        </Row>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    editNavigation: state.navigation.editNavigation, 
    fieldEdit: state.navigation.fieldEdit,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationEdit)