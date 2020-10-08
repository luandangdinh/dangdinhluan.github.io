import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PostItem extends Component {
  render() {
    const { post } = this.props;

    return (
      <div className="col-12 col-md-6 tm-post" key={post.id}>
          <hr className="tm-hr-primary"/>
          <Link to={`/posts/${post.id}`} className="effect-lily tm-post-link tm-pt-60">
              <div className="tm-post-link-inner">
                  <img src={post.image} alt="" className="img-fluid"/>
              </div>
              <h2 className="tm-pt-30 tm-color-primary tm-post-title">{post.name}</h2>
          </Link>
          <p className="tm-pt-30">
              {post.desc}
          </p>
      </div>
    )
  }
}
