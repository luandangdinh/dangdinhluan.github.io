import React, { Component } from "react";
import data from '../data/data';

export default class PostDetail extends Component {
  render() {
    const post = data.find(x => x.id === this.props.match.params.id);

    return (
      <div className="row tm-row">
        <div className="col-12">
          <img src={post.image} alt="" width="954" height="535" controls className="tm-mb-40"/>
        </div>
        <div className="col-lg-12 tm-post-col">
          <div className="tm-post-full">
            <div className="mb-4">
              <h2 className="pt-2 tm-color-primary tm-post-title">{post.name}</h2>
              <div dangerouslySetInnerHTML={{__html: post.content}} />
              <span className="d-block text-right tm-color-primary">Created by LuanBkap Blog</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
