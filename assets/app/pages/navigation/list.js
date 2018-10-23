import { connect } from 'react-redux'
import { Row, Col, Table, Modal, Input } from "antd"
import {history} from "store"
import { createNavigation } from "actions"

class NavigationList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadding: false,
      showModal: false,
      name: ""
    }
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
    this.closeModal()
    history.push("/admin/navigation/new ")
  }

  handClickNavigation = () => {
    history.push("/admin/navigation/edit")
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
                    title="Status"
                    key="status"
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