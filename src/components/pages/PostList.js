import React, { Component } from "react";
import postsData from '../data/data';
import PostItem  from '../atoms/PostItem';
import ReactPaginate from 'react-paginate';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      perPage: 4,
      currentPage: 0
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  receivedData() {
    const slice = postsData.slice(this.state.offset, this.state.offset + this.state.perPage);
    const postData = slice.map( post => <PostItem post={post} key={post.id}/> );
    this.setState({
      pageCount: Math.ceil(postsData.length / this.state.perPage),
      postData
    })
  }

  handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
        currentPage: selectedPage,
        offset: offset
      }, () => {
        this.receivedData()
      });
  };

  componentDidMount() {
    this.receivedData()
  }

  render() {
    return (
      <React.Fragment>
        <div className="row tm-row">
          {this.state.postData}
        </div>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}/>
      </React.Fragment>
    )
  }
}
