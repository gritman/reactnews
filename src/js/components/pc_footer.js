import React from 'react';
import { Row, Col } from 'antd';

export default class PCFooter extends React.Component {
  constructor() {
    super();
    this.state = {
      current: "top"
    };
  }

  render() {
    return(
      <footer>
      <div>
          <Row>
            <Col span={2}></Col>
            <Col span={20} class="footer">
              &copy;&nbsp;2017 ReactNews. All Rights Reserved.
            </Col>
            <Col span={2}></Col>
          </Row>
        </div>
      </footer>
    );
  };
}
