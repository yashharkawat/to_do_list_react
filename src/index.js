import ReactDOM from 'react-dom';
import {useState} from 'react';

function App(){
  const [item,setItem]=useState('');
  const [todos,setTodos]=useState([]);
  const [id,setId]=useState(0);
  const [searchText,setSearchText]=useState('');
  // const [edit,setEdit]=useState(false);
  // const [editValue,setEditValue]=useState('');

  const changeHandler=(e)=>{
    setItem(e.target.value);
  }
  const clickHandler=()=>{
    setTodos([...todos,{text:item,id:id,edit:false,editValue:'',complete:'incomplete'}]);
    setId(+id+1);
    setItem('');
  }

  const deleteHandler=(e)=>{
    const id=e.target.parentNode.id;
    const new_todos=todos.filter(todo=>{
      return todo.id!=id;
    })
    //console.log(new_todos);
    setTodos(new_todos);
  }
  const editHandler=(e)=>{
    //console.log('yes');
    //console.log(e.target.parentNode.id);

    const id=e.target.parentNode.id;
    
    const new_todos=[...todos];
    new_todos.forEach(todo=>{
      if(todo.id==id){
        todo.edit=true;
      }
    })
    //console.log(new_todos);
    setTodos(new_todos);
  }
  const saveButtonHandler=(e)=>{
    const id=e.target.parentNode.parentNode.id;
    const new_todos=[...todos];
    new_todos.forEach(todo=>{
      if(todo.id==id){
        todo.edit=false;
        todo.text=todo.editValue;
      }
    })
    setTodos(new_todos);
    //console.log(editValue);
  }
  const editTextHandler=(e)=>{
    const id=e.target.parentNode.parentNode.id;
   // console.log(id);
    const new_todos=[...todos];
    new_todos.forEach(todo=>{
      if(todo.id==id){
        todo.editValue=e.target.value;
      }
    })
    setTodos(new_todos);
  }
  const searchHandler=(e)=>{
    setSearchText(e.target.value);
  }
  const todoSearch=(text)=>{
    const regex=new RegExp(searchText);
    return regex.test(text);
  }
  const completeHandler=(e)=>{
    const id=e.target.parentNode.id;
    //console.log(id);
    const new_todos=[... todos];
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
    setTodos(new_todos);
  }


  return(
    <>
      <div>
      <input type='text' onChange={changeHandler} value={item}/>
      <br />
      <button onClick={clickHandler}>Add todo</button>
      </div>

      <input type='Text' placeholder='Search todo' value={searchText} onChange={searchHandler}/>
      <ul>
        {todos.map((todo)=>{
          if(!todoSearch(todo.text)) return ''; 
          return (<div key={todo.id} id={todo.id} >
            {!todo.edit&& <li onClick={editHandler}>{todo.text}</li>}
            {todo.edit &&(
      <div>
        <input type='text' value={todo.editValue} onChange={editTextHandler}/>
        <button onClick={saveButtonHandler}>Save</button>
      </div>
    )}
            <button onClick={deleteHandler}>Delete</button>
            <button onClick={completeHandler}>{todo.complete}</button>
            </div>);
        })}
      </ul>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
