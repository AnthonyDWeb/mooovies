import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import menu from "../assets/menu-bar.png";

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      activelink: "/",
      display: false
    }
  }
  componentDidMount() {
    this.getActiveLink()
  }

  getActiveLink = () => {
    const isWeekly = window.location.pathname.includes("weekly");
    const isRated = window.location.pathname.includes("rated");
    this.setState(prevState => {
      return {
        ...prevState,
        activelink: isWeekly ? "/weekly" : isRated ? "/rated" : "/"
      }
    })
  }

  updateDisplay = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        display: !prevState.display
      }
    })
  }

  render() {
    const links = [
      {
        label: "À venir",
        linkTo: "/"
      },
      {
        label: "Cette semaine",
        linkTo: "/weekly"
      },
      {
        label: "Les mieux notés",
        linkTo: "/rated"
      },
    ];
    return (
      <nav className="nav">
        <div className="nav-bar">
          <Link className="nav-logo-label" to={"https://github.com/AnthonyDWeb/mooovies"} target='blank'>
            <img className='logo' src={logo} alt='logo' />
            <h1 className="label">Mooovies</h1>
          </Link>
          <img className='menu' src={menu} alt='menu' onClick={() => this.updateDisplay()}/>
          <ul className={`nav-ul ${this.state.display && "show"}`}>
            {links.map(l => {
              const classLink = `nav-link ${this.state.activelink === l.linkTo ? "active" : "inactive"}`;

              return (
                <li className='nav-li' key={l.label}>
                  <Link className={classLink} to={l.linkTo}>{l.label}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;