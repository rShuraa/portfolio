import { Component } from "react";
import logo from "../images/logo.svg";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    return (
      <>
        <nav>
          <a href="#">
            <img src={logo} />
          </a>

          <div>
            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <li>
                <a href="#" className="active">
                  // inicio
                </a>
              </li>
              <li>
                <a href="#">// tecnologías</a>
              </li>
              <li>
                <a href="#">// proyectos</a>
              </li>
              <li>
                <a href="#">// experiencia</a>
              </li>
              <li>
                <a href="#">// contacto</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
