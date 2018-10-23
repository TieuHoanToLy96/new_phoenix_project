import { Row, Col, Input, Tabs } from "antd"

class CategoryGuest extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pinPost: true
    }
  }

  handleChangeTab = (oldClass, newClass) => e => {
    this.setState({ pinPost: !this.state.pinPost })
    var i, tablinks;

    tablinks = document.getElementsByClassName(oldClass);
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = oldClass
    }
    e.currentTarget.className = newClass
  }

  render() {
    const { pinPost } = this.state
    return (
      <div className="mb-50 mt-30">
        <Row>
          <Col lg={14} md={24}>
            <div className="g-article--list">
              <div className="g-article--item mb-50">
                <div className="g-article--item__wrapper">
                  <div className="g-article--item__img">
                    <img src="https://demo.mythemeshop.com/school/files/2014/03/pexels-photo-51415-688x350.jpeg" />
                  </div>
                  <div className="g-article--item__content is-flex is-column">
                    <div className="article-info">
                      <span className="article-date"><span>March 26, 2014</span></span>
                      <span className="article-author"><i className="fa fa-user"></i> <span ><a >MyThemeShop</a></span></span>
                      <span className="article-categories">Categories:
                        <a>Apps</a>
                        <a>Gadgets</a></span>
                    </div>

                    <h2 className="article-title" ><a>After outcry, Microsoft changes course and won’t access user data in theft probes</a></h2>
                    <p className="article-description">
                      Eaque ipsa quae ab illo inventore veritatis et quasi. Eaque ipsa quae ab illo inventore veritatis et quasi. Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Et Harum Qidem Rerum Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis …
                    </p>

                    <div className="article-readmore">
                      <a>
                        Read More
                      </a>
                    </div>

                  </div>
                </div>
              </div>
              <div className="g-article--item mb-50">
                <div className="g-article--item__wrapper">
                  <div className="g-article--item__img">
                    <img src="https://demo.mythemeshop.com/school/files/2014/03/pexels-photo-51415-688x350.jpeg" />
                  </div>
                  <div className="g-article--item__content is-flex is-column">
                    <div className="article-info">
                      <span className="article-date"><span>March 26, 2014</span></span>
                      <span className="article-author"><i className="fa fa-user"></i> <span ><a >MyThemeShop</a></span></span>
                      <span className="article-categories">Categories:
                        <a>Apps</a>
                        <a>Gadgets</a></span>
                    </div>

                    <h2 className="article-title" ><a>After outcry, Microsoft changes course and won’t access user data in theft probes</a></h2>
                    <p className="article-description">
                      Eaque ipsa quae ab illo inventore veritatis et quasi. Eaque ipsa quae ab illo inventore veritatis et quasi. Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Et Harum Qidem Rerum Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis …
                    </p>

                    <div className="article-readmore">
                      <a>
                        Read More
                      </a>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </Col>
          <Col lg={{ span: 8, offset: 1 }} md={{ span: 24 }}>

            <div className="search mb-30">
              <Input.Search className="mb-30" />
              <div className="g-side-article">
                <div className="g-article--wrapper">
                  <div className="tab-name is-flex is-row">
                    <div className="tab-title is-select" onClick={this.handleChangeTab("tab-title", "tab-title is-select")}>
                      <a>Pin post</a>
                    </div>
                    <div className="tab-title" onClick={this.handleChangeTab("tab-title", "tab-title is-select")}>
                      <a> Recent post</a>
                    </div>


                  </div>
                  {
                    pinPost ?
                      <div className="article-pin--list">
                        <div className="article-pin--item">
                          <div className="is-flex is-row">
                            <div className="article-pin__img">
                              <img src="https://demo.mythemeshop.com/school/files/2014/03/pexels-photo-51415-74x74.jpeg" />
                            </div>
                            <div className="article-pin__title is-flex-1 ml-15">
                              After outcry, Microsoft changes course and won’t access user data in theft probes
                              </div>
                          </div>
                          <div className="article-pin__date">
                            March 26, 2014
                            </div>
                        </div>
                        <div className="article-pin--item">
                          <div className="is-flex is-row">
                            <div className="article-pin__img">
                              <img src="https://demo.mythemeshop.com/school/files/2014/03/pexels-photo-51415-74x74.jpeg" />
                            </div>
                            <div className="article-pin__title is-flex-1 ml-15">
                              After outcry, Microsoft changes course and won’t access user data in theft probes
                              </div>
                          </div>
                          <div className="article-pin__date">
                            March 26, 2014
                            </div>
                        </div>

                      </div>
                      :
                      <div className="article-pin--list">
                        <div className="article-pin--item">
                          <div className="is-flex is-row">
                            <div className="article-pin__img">
                              <img src="https://demo.mythemeshop.com/school/files/2014/03/pexels-photo-51415-74x74.jpeg" />
                            </div>
                            <div className="article-pin__title is-flex-1 ml-15">
                              After outcry, Microsoft changes course and won’t access user data in theft probes
                              </div>
                          </div>
                          <div className="article-pin__date">
                            March 26, 2014
                            </div>
                        </div>
                        <div className="article-pin--item">
                          <div className="is-flex is-row">
                            <div className="article-pin__img">
                              <img src="https://demo.mythemeshop.com/school/files/2014/03/pexels-photo-51415-74x74.jpeg" />
                            </div>
                            <div className="article-pin__title is-flex-1 ml-15">
                              AHihi After outcry, Microsoft changes course and won’t access user data in theft probes
                            </div>
                          </div>
                          <div className="article-pin__date">
                            March 26, 2014
                          </div>
                        </div>
                      </div>
                  }
                </div>
              </div>

            </div>
            <div className="mb-30">
              <div className="g-side-article">
                <div className="g-article--wrapper">
                  <div className="fb-page" data-href="https://www.facebook.com/B%E1%BB%99-m%C3%B4n-K%E1%BB%B9-thu%E1%BA%ADt-M%C3%A1y-t%C3%ADnh-720455918026760/?__tn__=kC-R&amp;eid=ARBcNNpc0s31UlABkSvN7CXeURKCs2JmxHhR8Msk6aTFbE9IT6w0oHpwvt8JW_rLblVJ8Nf_8Ncd3Ki0&amp;hc_ref=ARTSgYSr9Rh4RtabcqS9iC-hSHXwjmMPk-GBa_yR6lYnnfHLtu8j4WTHJcDolc1HExo&amp;fref=nf&amp;__xts__[0]=68.ARBQMpB99_CGe8LJBSpLGUK88UQb7Owi67R3RCUwCAV6l7JUP_9ZjEQOl1543SoyNc-3ztsVc2-50knle6YS4S4USmUGv4rJ6wrJ4hNC_h3S6HR-CC3S1OwqAL7sIh_XBo1--knv42aJYqQnSTz6tHK7JeE4fH8vBpvBV5veo0HKJWewZlU2Xd6OKiWxP3AIfscam1WZ6RdUdec" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/B%E1%BB%99-m%C3%B4n-K%E1%BB%B9-thu%E1%BA%ADt-M%C3%A1y-t%C3%ADnh-720455918026760/?__tn__=kC-R&amp;eid=ARBcNNpc0s31UlABkSvN7CXeURKCs2JmxHhR8Msk6aTFbE9IT6w0oHpwvt8JW_rLblVJ8Nf_8Ncd3Ki0&amp;hc_ref=ARTSgYSr9Rh4RtabcqS9iC-hSHXwjmMPk-GBa_yR6lYnnfHLtu8j4WTHJcDolc1HExo&amp;fref=nf&amp;__xts__[0]=68.ARBQMpB99_CGe8LJBSpLGUK88UQb7Owi67R3RCUwCAV6l7JUP_9ZjEQOl1543SoyNc-3ztsVc2-50knle6YS4S4USmUGv4rJ6wrJ4hNC_h3S6HR-CC3S1OwqAL7sIh_XBo1--knv42aJYqQnSTz6tHK7JeE4fH8vBpvBV5veo0HKJWewZlU2Xd6OKiWxP3AIfscam1WZ6RdUdec" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/B%E1%BB%99-m%C3%B4n-K%E1%BB%B9-thu%E1%BA%ADt-M%C3%A1y-t%C3%ADnh-720455918026760/?__tn__=kC-R&amp;eid=ARBcNNpc0s31UlABkSvN7CXeURKCs2JmxHhR8Msk6aTFbE9IT6w0oHpwvt8JW_rLblVJ8Nf_8Ncd3Ki0&amp;hc_ref=ARTSgYSr9Rh4RtabcqS9iC-hSHXwjmMPk-GBa_yR6lYnnfHLtu8j4WTHJcDolc1HExo&amp;fref=nf&amp;__xts__[0]=68.ARBQMpB99_CGe8LJBSpLGUK88UQb7Owi67R3RCUwCAV6l7JUP_9ZjEQOl1543SoyNc-3ztsVc2-50knle6YS4S4USmUGv4rJ6wrJ4hNC_h3S6HR-CC3S1OwqAL7sIh_XBo1--knv42aJYqQnSTz6tHK7JeE4fH8vBpvBV5veo0HKJWewZlU2Xd6OKiWxP3AIfscam1WZ6RdUdec">Bộ môn Kỹ thuật Máy tính</a></blockquote></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

      </div>
    )
  }
}

export default CategoryGuest