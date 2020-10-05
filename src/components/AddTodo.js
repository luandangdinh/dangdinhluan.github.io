import React, { Component } from "react";
export default class AddTodo extends Component {

state = {
  Id: "",
  Title: "",
  Status: "",
  isEditTitle: false,
  isEditStatus: false
};

handleIdChange = (event) => {
  this.setState({
      Id: event.target.value
  });
};

handleTitleChange = (event) => {
  this.setState({
      Title: event.target.value,
      isEditTitle: true
  });
};

handleStatusChange = (event) => {
  this.setState({
      Status: event.target.value,
      isEditStatus: true
  });
};

handleToDoSubmit = (event) => {
  event.preventDefault();
  if(this.props.todo) {
    const { Title, Status } = this.state;

    this.props.onEdit({
      Id: this.props.todo.Id,
      Title: Title ? Title : this.props.todo.Title,
      Status: Status ? Status : this.props.todo.Status
    });
  } else {
    this.props.onAdd({
      Id: this.state.Id,
      Title: this.state.Title,
      Status: this.state.Status
    });
  }

  this.setState({
      Id: "",
      Title: "",
      Status: "",
      isEditTitle: false,
      isEditStatus: false
  });
};

  render() {
    let { Id, Title, Status, isEditTitle, isEditStatus } = this.state
    if(this.props.todo) {
      Id = this.props.todo.Id;
      Title = isEditTitle ? this.state.Title : this.props.todo.Title;
      Status = isEditStatus ? this.state.Status : this.props.todo.Status;
    }

    return (
      <div>
        <h3>
            {this.props.todo ? "Edit todo" : "Add todo"}
        </h3>
        <form onSubmit={this.handleToDoSubmit}>
          <div className="form-group" >
              <input value={Id}
                onChange={this.handleIdChange}
                className="form-control"
                placeholder="Enter Id"
                disabled={this.props.todo ? "disabled" : ""} />
          </div>
          <div className="form-group" >
              <input value={Title}
                onChange={this.handleTitleChange}
                className="form-control"
                placeholder="Enter Title"/>
          </div>
          <div className="form-group">
              <select onChange={this.handleStatusChange}
                className="form-control"
                value={Status}>
                  <option value="" >Status</option>
                  <option value="Done" >Done</option>
                  <option value="Pending" >Pending</option>
              </select>
          </div>
          <button type="submit" className="form-control btn btn-primary" >{this.props.todo ? "Edit todo" : "Add todo"}</button>
        </form>
      </div>
    );
  }
}
