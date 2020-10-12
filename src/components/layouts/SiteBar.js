import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default class SiteBar extends Component {
  state = { curentSiteBar: "home" }

  handleClickSiteBar = (className) => {
    this.setState({
      curentSiteBar: className
    });
  }

  render() {
    const { curentSiteBar } = this.state;

    return (
      <header className="tm-header" id="tm-header">
        <div className="tm-header-wrapper">
          <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
              <FontAwesomeIcon icon="bars"/>
          </button>
          <div className="tm-site-header">
              <h1 className="text-center">LuanBkap Blog</h1>
          </div>
          <nav className="tm-nav" id="tm-nav">
            <ul>
              <li className={`tm-nav-item ${curentSiteBar === "home" ? 'active' : ''}`} onClick={() => this.handleClickSiteBar("home")}>
                <Link to="/" className="tm-nav-link">
                  Blog Home
                </Link>
              </li>
              <li className="tm-nav-item">
                <a href="/profile/profile.html" className="tm-nav-link">
                  Profile
                </a>
              </li>
              <li className={`tm-nav-item ${curentSiteBar === "contact" ? 'active' : ''}`} onClick={() => this.handleClickSiteBar("contact")}>
                <Link to="/contact" className="tm-nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="tm-mb-65">
            <a rel="nofollow" href="https://fb.com/templatemo" className="tm-social-link">
                <FontAwesomeIcon icon={["fab", "facebook"]}/>
            </a>
            <a href="https://twitter.com" className="tm-social-link">
                <FontAwesomeIcon icon={["fab", "twitter"]}/>
            </a>
            <a href="https://instagram.com" className="tm-social-link">
                <FontAwesomeIcon icon={["fab", "instagram"]}/>
            </a>
            <a href="https://linkedin.com" className="tm-social-link">
                <FontAwesomeIcon icon={["fab", "linkedin"]}/>
            </a>
          </div>
          <p className="tm-mb-80 pr-5 text-white">
            LuanBkap Blog là nơi chia sẻ kiến thức IT. Website được sử dụng hoàn toàn bằng reactjs và html
          </p>
        </div>
      </header>
    )
  }
}
