import { connect } from "react-redux"
import { getNavigation, getNavigations } from "../pages/navigation/_all/actions";

class MainLayoutGuest extends React.Component {
  componentDidMount() {
    this.props.dispatch(getNavigations())
  }
  openMobileMenu = () => {
    let mask = document.getElementById("gmask")
    let mobileMenu = document.getElementById("mobileMenu")
    let mobileMenuContent = document.getElementById("mobileMenuContent")
    mask.style.display = "block"
    mobileMenu.style.width = "300px"
    mobileMenuContent.style.display = "block"
  }

  closeMobileMenu = () => {
    let mask = document.getElementById("gmask")
    let mobileMenu = document.getElementById("mobileMenu")
    let mobileMenuContent = document.getElementById("mobileMenuContent")
    mask.style.display = "none"
    mobileMenu.style.width = "0"
    mobileMenuContent.style.display = "none"
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
                  <div>LEARN ARM THEME</div>
                </div>

              </div>
              <div className="g-primary-navigation is-flex-1 ml-100 mb-30">
                <nav>
                  <a className="toggle-mobile-menu" onClick={this.openMobileMenu}>
                    <span>Menu</span>
                  </a>

                  <ul>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home current-menu-item"><a>Home</a></li>
                    {navigations.length && navigations.filter(el => el.name == "header").map(el => el.settings)[0].map((el, index) => {
                      return (
                        <li key={index} className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home ">
                          <a href={`${el.url}`}>{el.title}</a>
                          {el.children && el.children.length > 0 &&
                            <ul className='sub-menu'>
                              {
                                el.children.map(elem => {
                                  return (
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href={elem.url}>{elem.title}</a></li>
                                  )
                                })
                              }
                            </ul>
                          }
                        </li>
                      )
                    })}

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
              <h1 className="g-entry-title">Home</h1>
              <div className="g-breadcrumb mb-100">
                <span className="first" >
                  <a>Home&nbsp;/&nbsp;</a></span><span className="last">
                  {/* <span className="bread-txt">Home</span> */}
                </span></div>

            </div>
          </div>

        </div>
        <div className="g-container is-padding-container">
          {this.props.children}
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

export default connect(mapStateToProps, mapDispatchToProps)(MainLayoutGuest)