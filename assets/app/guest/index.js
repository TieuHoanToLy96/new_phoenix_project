class Guest extends React.Component {
  render() {
    return (
      <div className="g-main-container">
        <div className="g-header-wrapper">
          <div className="g-container">
            <div className="g-header is-flex">
              <div className="g-header--logo">

                <h2 className="g-header--logo__text">
                  <a href="https://demo.mythemeshop.com/school">Hust</a>
                </h2>
                <div className="g-header--logo__des">
                  <div>LEARN ARM THEME</div>
                </div>

              </div>
              <div className="g-primary-navigation is-flex-1 ml-100 mb-30">
                <nav>
                  <ul>
                    <li id="menu-item-161" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home current-menu-item"><a>Home</a></li>
                    <li id="menu-item-161" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home "><a>He thong nhung</a></li>
                    <li id="menu-item-161" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home "><a>Arm Linux</a></li>
                    {/* <li id="menu-item-161" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home "><a>Xu ly anh OpenCV</a></li>
                    <li id="menu-item-161" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home "><a>Lap trinh Linux driver</a></li>
                    <li id="menu-item-161" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home "><a>Lap trinh mang</a></li>
                    <li id="menu-item-161" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home "><a>Thiet bi thuc hanh</a></li>
                    <li id="menu-item-161" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home "><a>Video</a></li>
                    <li id="menu-item-161" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home "><a>Bai tap tham khao</a></li>
                    <li id="menu-item-161" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home "><a>Lien he</a></li> */}

                    <li id="menu-item-161" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home ">
                      <a>BLog</a>
                      <ul className='sub-menu'>
                        <li id="menu-item-185" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://demo.mythemeshop.com/school/page-example/">Page Example</a></li>
                        <li id="menu-item-185" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://demo.mythemeshop.com/school/page-example/">Page Example</a></li>
                      </ul>
                    </li>

                  </ul>
                </nav>
              </div>
              <div className="g-header-social">
                <a href="#" className="g-header-twitter"><span className="fa fa-twitter"></span></a>
                <a href="#" className="g-header-facebook"><span className="fa fa-facebook"></span></a>
                <a href="#" className="g-header-google-plus"><span className="fa fa-google-plus"></span></a>
              </div>

            </div>

          </div>
          <div className="g-page-header">
            <div className="g-container is-column" >
              <h1 className="g-entry-title">Blog</h1>
              <div className="g-breadcrumb mb-100">
                <span className="first" >
                  <a>Home&nbsp;/&nbsp;</a></span><span className="last">
                  <span className="bread-txt">Blog</span>
                </span></div>

            </div>
          </div>

        </div>


      </div >
    )
  }
}
export default Guest