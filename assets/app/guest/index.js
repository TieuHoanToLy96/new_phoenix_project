import connect from "react-redux/lib/connect/connect";
import { getNavigation } from "../pages/navigation/_all/actions";

class Guest extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    this.props.dispatch(getNavigation())
  }

  render() {
    const { navigations } = this.props
    return (
      <div className="g-main-container">
        <div id="gmask" className="g-mask" onClick={this.closeMobileMenu}> </div>
        <div className="g-menu-mobile" id="mobileMenu">
          <div className="g-menu-mobile--wrapper" id="mobileMenuContent">
            <div className="g-menu-mobile--title">
              <a className="toggle-mobile-menu">
                <span>Menu</span>
              </a>
            </div>
            <div className="g-menu-mobile--content">
              <div className="g-menu-mobile--content__wrapper">
                <ul>
                  <li><a>He nhung</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="g-header-wrapper">
          <div className="g-container is-padding-container">
            <div className="g-header is-flex">
              <div className="g-header--logo">

                <h2 className="g-header--logo__text">
                  <a href="https://demo.mythemeshop.com/school">Hust</a>
                </h2>
                <div className="g-header--logo__des">
                  <div>HỌC ARM</div>
                </div>

              </div>
              <div className="g-primary-navigation is-flex-1 ml-100 mb-30">
                <nav>
                  <a className="toggle-mobile-menu" onClick={this.openMobileMenu}>
                    <span>Menu</span>
                  </a>

                  <ul>

                    <li id="menu-item-161" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home current-menu-item"><a>Trang chủ</a></li>
                    {navigations.filter(el => el.name == "header").map((el, index) => {
                      return (
                        <li key={index} id="menu-item-161" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home ">
                          <a href={`/admin/${el.url}`}>{el.name}</a>
                          
                          {/* <ul className='sub-menu'>
                            <li id="menu-item-185" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://demo.mythemeshop.com/school/page-example/">Page Example</a></li>
                            <li id="menu-item-185" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://demo.mythemeshop.com/school/page-example/">Page Example</a></li>
                          </ul> */}
                        </li>
                      )
                    })}
                    <li id="menu-item-161" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home ">
                      <a>BLog</a>
                      <ul className='sub-menu'>
                        <li id="menu-item-185" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://demo.mythemeshop.com/school/page-example/">Page Example</a></li>
                        <li id="menu-item-185" className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://demo.mythemeshop.com/school/page-example/">Page Example</a></li>
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
            <div className="g-container is-padding-container is-column" >
              <h1 className="g-entry-title">Trang chủ</h1>
              <div className="g-breadcrumb mb-100">
                <span className="first" >
                  <a>Home&nbsp;/&nbsp;</a></span><span className="last">
                  {/* <span className="bread-txt">Home</span> */}
                </span></div>

            </div>
          </div>

        </div>

        <div className="g-intro-container">
          <div className="g-container is-padding-container">
            <div className="g-highlight">
              <div className="g-highlight-item">
                <div className="g-top-line">
                  <span className="g-highlight-icon" style={{ color: " #2bd4f3" }}>
                    <i className="fa fa-lightbulb-o hg highlight-head-icon-color"></i>
                  </span>
                </div>
                <h3 className="g-highlight-title">Imagine</h3>
                <p className="g-highlight-desc">Lorem ipsum dolor sit met, consectetur adipiscing elit. Vivamus bibendum diam non ultrices condimentum.</p>
              </div>
              <div className="g-highlight-item">
                <div className="g-top-line">
                  <span className="g-highlight-icon" style={{ color: "#ea0d60" }}>
                    <i className="fa fa-puzzle-piece hg highlight-head-icon-color"></i>
                  </span>
                </div>
                <h3 className="g-highlight-title">Create</h3>
                <p className="g-highlight-desc">Lorem ipsum dolor sit met, consectetur adipiscing elit. Vivamus bibendum diam non ultrices condimentum.</p>
              </div>

              <div className="g-highlight-item">
                <div className="g-top-line">
                  <span className="g-highlight-icon" style={{ color: "#2bd4f3 " }}>
                    <i className="fa fa-graduation-cap hg highlight-head-icon-color"></i>
                  </span>
                </div>
                <h3 className="g-highlight-title">Learn</h3>
                <p className="g-highlight-desc">Lorem ipsum dolor sit met, consectetur adipiscing elit. Vivamus bibendum diam non ultrices condimentum.</p>
              </div>

              <div className="g-highlight-item">
                <div className="g-top-line">
                  <span className="g-highlight-icon" style={{ color: "#dd3333" }}>
                    <i className="fa fa-heart-o hg highlight-head-icon-color"></i>
                  </span>
                </div>
                <h3 className="g-highlight-title">Think</h3>
                <p className="g-highlight-desc">Lorem ipsum dolor sit met, consectetur adipiscing elit. Vivamus bibendum diam non ultrices condimentum.</p>
              </div>
              <div className="g-highlight-item">
                <div className="g-top-line">
                  <span className="g-highlight-icon" style={{ color: "#2bd4f3" }}>
                    <i className="fa fa-dropbox hg highlight-head-icon-color"></i>
                  </span>
                </div>
                <h3 className="g-highlight-title">Play</h3>
                <p className="g-highlight-desc">Lorem ipsum dolor sit met, consectetur adipiscing elit. Vivamus bibendum diam non ultrices condimentum.</p>
              </div>
              <div className="g-highlight-item">
                <div className="g-top-line">
                  <span className="g-highlight-icon" style={{ color: "#81d742" }}>
                    <i className="fa fa-dropbox hg highlight-head-icon-color"></i>
                  </span>
                </div>
                <h3 className="g-highlight-title">Teach</h3>
                <p className="g-highlight-desc">Lorem ipsum dolor sit met, consectetur adipiscing elit. Vivamus bibendum diam non ultrices condimentum.</p>
              </div>

              <div>

              </div>
            </div>
          </div>

        </div>
        <div className="g-noti">
          <div className="container is-padding-container">
            <div className="g-noti--wrapper">
              <div className="g-noti--item">

              </div>
            </div>
          </div>
        </div>

        <div className="g-footer">
          <div className="g-container is-padding-container">
            <div className="g-footer--wrapper">
              <div className="g-footer--item">
                <div className="g-footer--item__wrapper">
                  <h3 className="g-footer--item__title">About Us</h3>
                  <div className="mst-about-us">
                    <p>
                      <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies a leo pretium lacinia.</strong>
                      <br></br>
                      <br></br>
                      Etiam sit amet mauris blandit, sollicitudin risus nec, bibendum tellus. Vivamus sodales urna sem, vitae imperdiet velit cursus sit amet.
                      </p>
                    <div className="school-name"><strong>Burgess Elementary School</strong></div>
                    <address>201S June Street,
                        <br></br>
                      <br></br>
                      Los Angeles, CA 90004
                        United States</address>
                    <div className="school-phone"><i className="fa fa-phone"></i> +1 222 999 7379</div>
                    <div className="school-email"><a href="mailto:info@burgesselementary.com" target="_top"><i className="fa fa-envelope-o"></i> info@burgesselementary.com</a></div>
                  </div>
                </div>
              </div >
              <div className="g-footer--item">
                <div className="g-footer--item__wrapper">
                  <div className="widget widget_mts_openhours_widget">
                    <h3 className="g-footer--item__title">Open Hours</h3>
                    <ul className="open-hours">
                      <li className="open-hours-li">
                        <ul className="inner-ul">
                          <li className="inner-li">
                            <div className="open-hours-img">
                              <span><i className="fa fa-clock-o"></i></span>
                            </div>
                            <div className="open-p">
                              <div className="open-hours-title">
                                Mon - Tue								</div>
                              <div className="open-hours-time">
                                8:00 AM - 5:00 PM								</div>
                            </div>
                          </li>
                          <li className="inner-li">
                            <div className="open-hours-img"><span><i className="fa fa-bell"></i> </span></div>
                            <div className="break-p">
                              <div className="open-hours-title">Lunch Break</div>
                              <div className="break-time">1:00 PM - 2:00 PM</div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="open-hours-li">
                        <ul className="inner-ul">
                          <li className="inner-li">
                            <div className="open-hours-img">
                              <span><i className="fa fa-clock-o"></i></span>
                            </div>
                            <div className="open-p">
                              <div className="open-hours-title">
                                Wed - Fri								</div>
                              <div className="open-hours-time">
                                10:00 AM - 17:00 PM								</div>
                            </div>
                          </li>
                          <li className="inner-li">
                            <div className="open-hours-img"><span><i className="fa fa-bell"></i> </span></div>
                            <div className="break-p">
                              <div className="open-hours-title">Lunch Break</div>
                              <div className="break-time">12:00 AM - 13:00 PM</div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="open-hours-li">
                        <div className="closed">
                          <div className="open-hours-img">
                            <span><i className="fa fa-times-circle"></i></span>
                          </div>
                          <div className="open-p">
                            <div className="open-hours-title">
                              Sat - Sun							</div>
                            <div className="closed-msg">
                              Sorry, we're closed							</div>
                          </div>

                        </div></li>
                    </ul></div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Guest)