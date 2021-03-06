import { Menu, Icon, Button } from "antd"
import {history} from "store"
const SubMenu = Menu.SubMenu
class MainLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  handleClickMenu = (e) => {
    history.push(e.key)
  }
  render() {
    const { collapsed } = this.state
    return (
      <div className="body">
        <div className="header">
          <div className="header-wrapper">
            <div className="header-logo" style={{width: collapsed ? 80 : 240}}>
              <div className="header-logo__img" style={{width: collapsed ? 0 : 50}}>
                <img src="http://bachkhoahanoi.hcit.vn/wp-content/uploads/2016/12/HUST-logo-513x342.png" />
              </div>
              <div className="header-logo__name" style={{display: collapsed ? "none" : "block"}}>
                Hust DCE
              </div>
              <Button onClick={this.toggleCollapsed} style={{width: collapsed ? 80 : 50}}>
                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
              </Button>
            </div>
            <div className="header-search">
              <div className="header-search--wrapper">
                <div className="header-search__input">
                  <input ></input>
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
            <div className="header-account">
              <div className="header-account--wrapper">
                <div className="header-account__img">
                  <div className="circle-avatar">
                    <img src="https://i2.wp.com/cdn.shopify.com/s/assets/no-gravatar-new-04e7c2331218ac202e79e31be502fd5631bc96cb0206580dbcb0720ebbbd7c73_128x128.png?ssl=1" />
                  </div>
                </div>
                <div className="header-account--area">
                  <div className="header-account__name">
                    TieuHoan
                </div>
                  <div className="header-account__store">beotron</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side">
          <div className="side-left"  style={{width: collapsed ? 80 : 240}} >
            <div className="side-left--wrapper">
              <Menu
                className="menu-dashboard"
                defaultSelectedKeys={['1', '2']}
                defaultOpenKeys={['sub1', 'sub2']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
                onClick={this.handleClickMenu}
              >
               
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Quản lý</span></span>}>
                  <Menu.Item key="/admin/blog/list">Danh sách bài viết</Menu.Item>
                  <Menu.Item key="/admin/category/list">Danh mục</Menu.Item>
                  <Menu.Item key="/admin/navigation/list">Thanh điều hướng</Menu.Item>
                  {/* <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu> */}
                </SubMenu>
              </Menu>
            </div>
          </div>
          <div className="side-right">
            <div className="side-right-wrapper">{this.props.children}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default MainLayout