const Priority=(props)=>{

    const priorityHandler=(e)=>{
        const id=e.target.parentNode.id;
        console.log(id);
        const new_todos=[...props.array];
        new_todos.forEach(todo=>{
          if(todo.id==id){
            todo.priority=e.target.value;
          }
        })
        //console.log(new_todos);
        props.changeTodo(new_todos);
    }

    return (
        <>
            <button htmlFor="option">Select Priority:</button>
            <select id="option" name="option" onChange={priorityHandler} value={props.todo.priority}>
                <option value="none" >None</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </>
    );
}
export default Priority;