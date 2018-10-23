import SortableTree from 'react-sortable-tree';
import FileExplorerTheme from 'react-sortable-tree-theme-minimal';
import {Icon} from "antd"
import { connect } from 'react-redux';
import { setTreeData } from '../../pages/navigation/_all/actions';
import { field } from '../../pages/navigation/_all/reducer';
class TreeViewNavigation extends React.Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   treeData: [{ title: 'src/', children: [{ title: 'index.js' }] }],
    // }

  }

  handleDragTreeNode = treeData => {
    console.log(treeData, "drag tree")

    this.props.dispatch(setTreeData(treeData))
  }

  handleClickEditNode = (nodeInfo) => {
    console.log(nodeInfo, "nodeInfo")
  }

  handleRemoveNode = (nodeInfo) => {

  }

  renderType = type => {
    switch(type){
      case field.POSTS: return "Blog" 
      case field.CATEGORY: return "Category"
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
  return{
    treeData: state.navigation.treeData
  }
}

export default connect(mapStateToProps)(TreeViewNavigation)