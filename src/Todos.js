import React from 'react'

const Todos =({todos,deleteTodo})=>{

    const todoList=todos.length?(
        todos.map(todo =>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={()=>{deleteTodo(todo)}}>{todo.id} - {todo.icerik}</span>
                </div>
            )
        })
    ):(
        <p className="center">Yapılacaklar listesi boş</p>
    )

    return(
        <div className="collection">
            {todoList}
        </div>
    )
}
export default Todos;