
const Edit=(props)=>{
    
    const saveButtonHandler=(e)=>{
      const id=e.target.parentNode.parentNode.id;
      const new_todos=[...props.array];
      new_todos.forEach(todo=>{
        if(todo.id==id){
          todo.edit=false;
          todo.text=todo.editValue;
        }
      })
      props.changeTodo(new_todos);
      //console.log(editValue);
    }

    
  const editTextHandler=(e)=>{
      const id=e.target.parentNode.parentNode.id;
     // console.log(id);
      const new_todos=[...props.array];
      new_todos.forEach(todo=>{
        if(todo.id==id){
          todo.editValue=e.target.value;
        }
      })
      props.changeTodo(new_todos);
    }

  return (
      <div>
        <input type='text' value={props.todo.editValue} onChange={editTextHandler}/>
        <button onClick={saveButtonHandler}>Save</button>
      </div>
    );
}
export default Edit;