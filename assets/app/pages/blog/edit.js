import React, { Component } from "react"
import TitleAndContent from '../../components/TitleAndContent/index'
import { Row, Col, Icon } from "antd"
import {history} from "store"
class BlogEdit extends Component {
  render() {
    return (
      <div className="wrapper-content">
        <Row>
          <Col span={24}>
            <div className="ui-title-bar">
              <div className="ui-title-bar--wrapper">
                <div className="ui-title-bar__navigation"
                  onClick={() => history.push("/admin/blog/list")}
                >
                  <Icon type="left" theme="outlined" />
                  <div>Blog posts</div>
                </div>
                <div className="ui-title-bar__main">
                  <div className="ui-title-bar__title">
                    <h1>Blog post</h1>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <TitleAndContent
              data={{ value: "ahihi" }}
            />
          </Col>
        </Row>

      </div>
    )
  }
}
export default BlogEdit