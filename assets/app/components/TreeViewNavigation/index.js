import SortableTree, {removeNodeAtPath} from 'react-sortable-tree';
import FileExplorerTheme from 'react-sortable-tree-theme-minimal';
import { Icon } from "antd"
import { connect } from 'react-redux';
import { setTreeData, setObjectEdit, setFieldEdit } from '../../pages/navigation/_all/actions';
import { field } from '../../pages/navigation/_all/reducer';
class TreeViewNavigation extends React.Component {

  constructor(props) {
    super(props)
  }

  handleDragTreeNode = treeData => {
    console.log(treeData, "drag tree")

    this.props.dispatch(setTreeData(treeData))
  }

  handleClickEditNode = (nodeInfo) => {
    console.log(nodeInfo, "nodeInfo")
    this.props.dispatch(setObjectEdit(nodeInfo))
    this.props.dispatch(setFieldEdit(nodeInfo.node.type))
  }

  handleRemoveNode = (nodeInfo) => {
    let newTree = removeNodeAtPath({
      treeData: this.props.treeData,
      path: nodeInfo.path,
      getNodeKey: ({ treeIndex }) => treeIndex
    })
    console.log(newTree)
    this.props.dispatch(setTreeData(newTree))
  }

  renderType = type => {
    switch (type) {
      case field.POSTS: return "Bài viết"
      case field.CATEGORY: return "Danh mục"
      default: return ""
    }
  }

  render() {
    const { treeData } = this.props
    return (
      <div className="tree-view">
        {
          treeData.length > 0 ?
            <SortableTree
              isVirtualized={false}
              slideRegionSize={50}
              maxDepth={4}
              rowHeight={50}
              treeData={treeData}
              generateNodeProps={nodeInfo => ({
                buttons: [
                  <div className="button-tree is-flex">
                    <span style={{ marginRight: 10 }}>
                      {this.renderType(nodeInfo.node.type)}
                    </span>
                    <button style={{ verticalAlign: 'middle' }} onClick={() => this.handleClickEditNode(nodeInfo)}>
                      Sửa
                    </button>
                    <div className="button-tree--delete is-flex" onClick={() => this.handleRemoveNode(nodeInfo)}>
                      <Icon type="delete" theme="outlined" />
                    </div>
                  </div>
                ],
              })}
              canDrag={true}
              onChange={this.handleDragTreeNode}
              theme={FileExplorerTheme}
            />
            :
            <div className="tree-view--none">
              Không có item nào trong navigation
            </div>
        }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    treeData: state.navigation.editNavigation.treeData
  }
}

export default connect(mapStateToProps)(TreeViewNavigation)