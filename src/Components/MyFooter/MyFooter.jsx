import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MyFooter.css";

class MyFooter extends Component {
  render() {
    return (
      <>
        <Container className="sliderFooter">
          <Row>
            <Col>
              <ul>
                <li>
                  <h5>
                    <a className="bottomFooterLinks" href="#/action-1">
                      The World Of React 1
                    </a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a className="bottomFooterLinks" href="#/action-2">
                      The World Of React 2
                    </a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a className="bottomFooterLinks" href="#/action-3">
                      The World Of React 3
                    </a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a className="bottomFooterLinks" href="#/action-4">
                      The World Of React 4
                    </a>
                  </h5>
                </li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>
                  <h5>
                    <a className="bottomFooterLinks" href="#/action-5">
                      The World Of React 5
                    </a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a className="bottomFooterLinks" href="#/action-6">
                      The World Of React 6
                    </a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a className="bottomFooterLinks" href="#/action-7">
                      The World Of React 7
                    </a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a className="bottomFooterLinks" href="#/action-8">
                      The World Of React 8
                    </a>
                  </h5>
                </li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>
                  <h5>
                    <a className="bottomFooterLinks" href="#/action-9">
                      The World Of React 9
                    </a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a className="bottomFooterLinks" href="#/action-10">
                      The World Of React 10
                    </a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a className="bottomFooterLinks" href="#/action-11">
                      The World Of React 11
                    </a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a className="bottomFooterLinks" href="#/action-12">
                      The World Of React 12
                    </a>
                  </h5>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default MyFooter;
