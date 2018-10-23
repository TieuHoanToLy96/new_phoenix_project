import { connect } from 'react-redux'
import { Row, Col, Table, Modal, Input, Button, Tag, Icon } from "antd"
import { history } from "store"
import { createNavigation } from "actions"
import { getNavigations, updateNavigation, setTreeData, setEditNavigation } from './_all/actions';

class NavigationList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadding: false,
      showModal: false,
      name: ""
    }
  }

  componentDidMount() {
    this.props.dispatch(getNavigations())
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }
  openModal = () => {
    this.setState({ showModal: true })
  }

  handleAddNavigation = () => {
    this.openModal()
  }

  handleChangeInputField = field => e => {
    let value = e.target ? e.target.value : e
    this.setState({ [field]: value })
  }

  handleCreateNavigation = () => {
    let navigation = {
      name: this.state.name,
      data: []
    }

    this.props.dispatch(createNavigation(navigation))
    history.push("/admin/navigation/new ")
    this.closeModal()
  }

  handClickNavigation = (record, index) => {
    let navigation = {
      name: record.name,
      treeData: record.settings
    }
    this.props.dispatch(setEditNavigation(navigation))
    history.push("/admin/navigation/edit", { id: record.id })
  }

  handleChangeCurrent = record  => e => {
    e.stopPropagation()
    this.props.dispatch(updateNavigation({ is_published: !record.is_published }, record.id, "update"))
  }

  handleRemoveNavigation = id => e => {
    e.stopPropagation()
    this.props.dispatch(updateNavigation({is_deleted: true}, id, "delete"))
  }

  render() {
    const { loadding, showModal } = this.state
    const { navigations } = this.props
    return (
      <div className="wrapper-content mb-30">

        {
          showModal &&
          <Modal
            visible={true}
            title="Add new navigation"
            onOk={this.handleCreateNavigation}
            okText="Create navigation"
            onCancel={this.closeModal}
          >
            <div className="is-flex is-padding-15" style={{ alignItems: "center" }}>
              <span className="is-margin-5" style={{ minWidth: 100 }}>Navigation name:</span>
              <Input
                onPressEnter={this.handleCreateNavigation}
                onChange={this.handleChangeInputField("name")}
                className="is-flat-input is-margin-5"
                placeholder="Enter a name" />
            </div>
          </Modal>
        }

        {loadding ?
          <Icon style={{ color: "black" }} type="loadding" />
          :
          <div>
            <Row>
              <Col span={24}>
                <div className="ui-title-bar">
                  <div className="ui-title-bar--wrapper">
                    <div className="ui-title-bar__navigation">
                      {/* <Icon type="left" theme="outlined" /> */}
                      <div>Navigation</div>
                    </div>
                    <div className="ui-title-bar__main">
                      <div className="ui-title-bar__title no-margin">
                        <h1>Navigation list</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="ui-page--actions is-full-width">
              <div className="ui-page--action__wrapper ">
                <div className="is-flex is-row is-full-width is-full-height is-flex-end">
                  <div onClick={this.handleAddNavigation} className="default-button default-button--save">
                    Add navigation
                </div>

                </div>
              </div>
            </div>

            <div className="ui-card mt-30">
              <div className="ui-card__section">
                <Table
                  className="mb-30"
                  pagination={false}
                  dataSource={navigations}
                  rowKey={record => record.id}
                  onRow={(record, index) => {
                    return { onClick: () => { this.handClickNavigation(record, index) } }
                  }}
                >
                  <Table.Column
                    title="Name"
                    dataIndex="name"
                    key="name"
                  />
                  <Table.Column
                    title="Change"
                    key="status"
                    render={(record) => (
                      <div>
                        {record.is_published ? <Tag color="green">Published</Tag> : <Tag color="red">Hidden</Tag>}
                      </div>
                    )}
                  />
                  <Table.Column
                    title="Action"
                    key="action"
                    render={(record) => (
                      <div className="button-tree is-flex">
                        <button style={{ verticalAlign: 'middle' }} onClick={this.handleChangeCurrent(record)}>
                          Change
                        </button>
                        <div className="button-tree--delete is-flex" onClick={this.handleRemoveNavigation(record.id)}>
                          <Icon type="delete" theme="outlined" />
                        </div>
                      </div>
                    )}
                  />
                </Table>
              </div>
            </div>

          </div>
        }
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    navigations: state.navigation.navigations
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavigationList)