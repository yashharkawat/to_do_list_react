import { useState } from "react";
const DueDate=(props)=>{

    const [edit,setEdit]=useState(false);
   

    const dueDateHandler=(e)=>{
        setEdit(true);
    }

    const changeHandler=(e)=>{
        

        const id=e.target.parentNode.id;
        
        const new_todos=[...props.array];
        new_todos.forEach(todo=>{
          if(todo.id==id){
            todo.dueDate=e.target.value;
          }
        })
        //console.log(new_todos);
        props.changeTodo(new_todos);
        setEdit(false);
    }

    return (
        <>
            { <button onClick={dueDateHandler}>{props.todo.dueDate}</button>}
            {edit && <input type='date' onChange={changeHandler}/>}
        </>
    );
}

export default DueDate;