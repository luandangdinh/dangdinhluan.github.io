import React, { Component } from "react";
import AddTodo from "./AddTodo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TodoList extends Component {

state = {
   todos: [
     { Id: '1', Title: 'Push your code to github', Status: 'Done' },
     { Id: '2', Title: 'Email to your manager', Status: 'Pending' }
   ],
   curentTodo: {ID: '', Title: '', Status: ''},
   isEdit: false,
   time: new Date().toLocaleString()
};

componentDidMount() {
  this.intervalID = setInterval(
    () => this.tick(),
    1000
  );
}
componentWillUnmount() {
  clearInterval(this.intervalID);
}
tick() {
  this.setState({
    time: new Date().toLocaleString()
  });
}

deleteToDo = (todo) => {
  const filteredItems = this.state.todos.filter(x => x.Id !== todo.Id);
  this.setState({
       todos: filteredItems
  });
};

handleEditTodo = (x) => {
  this.setState(state => ({
    todos: state.todos.map(todo => {
      if (todo.Id === x.Id) {
        return x
      } else {
        return todo;
      }
    }),
    isEdit: false
  }));
}

editToDo = (x) => {
  this.setState({curentTodo: x, isEdit: true})
  this.renderForm(x);
};

addToDo = (todo) => {
  this.setState({
    todos: [...this.state.todos, todo]
  });
};

renderForm() {
  const { isEdit, curentTodo } = this.state;
  if(isEdit)
    return (<AddTodo todo={curentTodo} onEdit={this.handleEditTodo}/>)

  return (<AddTodo onAdd={this.addToDo}/>)
}

  render() {
    return (
      <div className="container">
        {this.state.time}
        <div className="row">
          <div className="col-md-6">
            <h1>TodoList</h1>
            <table className="table table-hover table-bordered">
               <thead>
                 <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Action</th>
                 </tr>
               </thead>
               <tbody>
                   {this.state.todos.map(x => {
                     return (
                          <tr key={x.Id}>
                          <td>{x.Id}</td>
                          <td>{x.Title}</td>
                          <td style={{ color: x.Status === "Done" ? "green" : "red" }}>{x.Status}</td>
                          <td>
                            <button className="mr-3 btn btn-primary" onClick={() => this.editToDo(x)}>
                              <span><FontAwesomeIcon icon="edit"/></span>
                            </button>
                            <button className="btn btn-danger" onClick={() => this.deleteToDo(x)}>
                              <span><FontAwesomeIcon icon="trash"/></span>
                            </button>
                          </td>
                          </tr>
                      );
                   })}
                </tbody>
            </table>
          </div>
          <div className="col-md-6">
            {this.renderForm()}
          </div>
        </div>
      </div>
    );
  }
}
