import React, { Component } from "react";
import PostList from "./components/pages/PostList.js";
import PostDetail from "./components/pages/PostDetail.js";
import SiteBar from "./components/layouts/SiteBar";
import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faSkype } from "@fortawesome/free-brands-svg-icons";
import { HashRouter, Route } from "react-router-dom";
library.add(faTrash, faEdit, faPlus, faBars, faTimes, faFacebook, faTwitter, faInstagram, faLinkedin, faSkype);

export default class App extends Component {
  state = {
    isClickDetail: false,
    currentId: null
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <SiteBar/>
          <div className="container-fluid">
            <main className="tm-main">
              <Route exact path="/" component={PostList} />
              <Route path="/posts" component={PostList}>
                <Route path="/posts/:id" component={PostDetail} />
              </Route>
            </main>
          </div>
        </HashRouter>
      </div>
    );
  }
}
