import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./MyNavBar.css";

class MyNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos,
    });
  }

  render() {
    const NavLinks = () =>
      this.props.links.map((link, index) => (
        <a key={index} href={link.to}>
          {link.name}
        </a>
      ));

    return (
      <div>
        <Transition>
          <StyledNavbar className={this.state.show ? "active" : "hidden"}>
            <a className="brand" href={this.props.brand.to}>
              {this.props.brand.name}
            </a>
            <nav>
              <NavLinks />
            </nav>
          </StyledNavbar>
        </Transition>
      </div>
    );
  }
}

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  background: cornflowerblue;
  z-index: 1000;
  a {
    margin-right: 1rem;
    font-weight: normal;
    color: black;
    text-decoration: none;
  }
  .brand {
    font-style: italic;
    margin-left: 1rem;
    font-weight: bold;
    color: white;
    font-size: 1.25rem;
  }
`;

MyNavBar.propTypes = {
  brand: PropTypes.shape({
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
};

export default MyNavBar;
