import React,{Component} from 'react'
import Todos from './Todos.js';
import AddForm from './addForm.js';

class App extends React.Component{

  state={
    todos:[
      {id:1, icerik:"Ekmek Al"},
      {id:2, icerik:"Kod Yaz"},
      {id:3, icerik:"Spora Git"}
    ]
  }

  handleDeleteTodo=(todoModel)=>{
    //Filter Yöntemi
    /* const todos = this.state.todos.filter(todo => {
      return todo.id !== todoModel.id
    }) */

    let todoListe = this.state.todos;
    const _id = todoListe.indexOf(todoModel);
    todoListe.splice(_id,1);

    this.setState({
      todos:todoListe
    })
  }

  handleAddedTodo =(todo)=>{
    todo.id = Math.random();

    let todoss=[...this.state.todos,todo];
    this.setState({
      todos:todoss
    })
  }

  render(){
    return(
      <div className="App container">
          <h1 className="center blue-text">Yapılacaklar</h1>
          <Todos todos={this.state.todos} deleteTodo={this.handleDeleteTodo}/>
          <AddForm addedTodo={this.handleAddedTodo}/>
      </div>
    )
  }
}

export default App;