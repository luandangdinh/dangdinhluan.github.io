import React, { Component } from "react";
import postsData from '../data/data';

export default class PostDetail extends Component {
  render() {
    const post = postsData.find(x => x.id === parseInt(this.props.match.params.id));
    return (
      <div className="row tm-row">
        <div className="col-12">
          <img src={post.image} alt="" width="954" height="535" controls className="tm-mb-40"/>
        </div>
        <div className="col-lg-12 tm-post-col">
          <div className="tm-post-full">
            <div className="mb-4">
              <h1 className="pt-2 tm-color-primary tm-post-title">{post.name}</h1>
              <div className="post-content" dangerouslySetInnerHTML={{__html: post.content.join('\n')}} />
              <span className="d-block text-right tm-color-primary">Created by LuanBkap Blog</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
