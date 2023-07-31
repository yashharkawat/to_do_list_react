import {useState} from 'react';
import Edit from './Edit';
import Priority from './Priority';
import DueDate from './DueDate';

const DisplayTodo=(props)=>{

    const deleteHandler=(e)=>{
      const id=e.target.parentNode.id;
      const new_todos=props.array.filter(todo=>{
        return todo.id!=id;
      })
      //console.log(new_todos);
      props.changeTodo(new_todos);
    }

    const editHandler=(e)=>{
        //console.log('yes');
        //console.log(e.target.parentNode.id);
    
        const id=e.target.parentNode.id;
        
        const new_todos=[...props.array];
        new_todos.forEach(todo=>{
          if(todo.id==id){
            todo.edit=true;
          }
        })
        //console.log(new_todos);
        props.changeTodo(new_todos);
      }
  
    const todoSearch=(text)=>{
      const regex=new RegExp(props.search);
      return regex.test(text);
    }
  
    const completeHandler=(e)=>{
      const id=e.target.parentNode.id;
      //console.log(id);
      const new_todos=[...props.array];
      new_todos.forEach(todo=>{
        if(id==todo.id){
          if(todo.complete=='complete'){
            todo.complete='incomplete';
          }
          else{
            todo.complete='complete';
          }
        }
      })
      props.changeTodo(new_todos);
    }
    const filterSearch=(todo)=>{
        let bool=true;
        if(props.filter.priority===undefined||props.filter.startDueDate===undefined||props.filter.endDueDate===undefined) return bool;
        if(todo.priority!==props.filter.priority) {
            console.log(props.filter.priority,todo.priority);
            
            console.log('hiii');
            bool=false; 
        }
        const start=new Date(props.filter.startDueDate);
        const end=new Date(props.filter.endDueDate);
        const date=new Date(todo.DueDate);
        if(date<start||date>end) {
            console.log('hey');
            bool=false;
        }

        
        return bool;
    }

    return (
      <ul>
          {props.array.map((todo)=>{
            if(!todoSearch(todo.text)) return ''; 
            else if(!filterSearch(todo)) return '';
            return (<div key={todo.id} id={todo.id} >
              {!todo.edit&& <li onClick={editHandler}>{todo.text}</li>}
              {todo.edit && <Edit array={props.array} todo={todo} changeTodo={props.changeTodo}/>}
              <button onClick={deleteHandler}>Delete</button>
              <button onClick={completeHandler}>{todo.complete}</button>
              <Priority changeTodo={props.changeTodo} array={props.array} todo={todo}/>
              <DueDate todo={todo} array={props.array} changeTodo={props.changeTodo} />
                </div>);

          })}
        </ul>
    );
  }
export default DisplayTodo;  