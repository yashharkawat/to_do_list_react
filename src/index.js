import ReactDOM from 'react-dom';
import {useState} from 'react';
import AddTodo from './AddTodo';
import DisplayTodo from './DisplayTodo';

const Filter=(props)=>{

  const [addFilter,setAddFilter]=useState(false);
  const [priority,setPriority]=useState('none');
  const [startDueDate,setStartDueDate]=useState();
  const [endDueDate,setEndDueDate]=useState();

  const filterHandler=()=>{
    setAddFilter(true);
    
  }
  const applyFilterHandler=()=>{
    setAddFilter(false);
    props.applyFilter(startDueDate,endDueDate,priority);
    
  }
  const priorityHandler=(e)=>{
    setPriority(e.target.value);
  }
  const startDueDateHandler=(e)=>{
    setStartDueDate(e.target.value);
  }
  const endDueDateHandler=(e)=>{
    setEndDueDate(e.target.value);
  }

  return (
    <>
      <button onClick={filterHandler}>Add Filter</button>
      <br />
      {addFilter && (<>
        <label htmlFor='Start due date'>Start due date</label>
      <input type='date' onChange={startDueDateHandler}/>
      <label htmlFor='End due date'>End due date</label>
      <input type='date' onChange={endDueDateHandler}/>
      <br />
      <button htmlFor="option">Select Priority:</button>
      <select id="option" name="option" onChange={priorityHandler}>
          <option value="none" >None</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
      </select>
      <button onClick={applyFilterHandler}>Apply Filter</button>
      </>)}   
    </>
  );
}

function App(){
  const [todos,setTodos]=useState([]);
  const [searchText,setSearchText]=useState('');
  const [filter,setFilter]=useState({});


  const addHandler=(item,id)=>{
    setTodos([...todos,{text:item,id:id,edit:false,editValue:'',complete:'incomplete',priority:'none',dueDate:'add due date'}]);
  }
  const searchHandler=(e)=>{
    setSearchText(e.target.value);
  }
  const changeTodo=(new_todos)=>{
    setTodos(new_todos);
  }
  const applyFilter=(startDueDate,endDueDate,priority)=>{
    //const filter=;
    //console.log(filter);
    setFilter({
      startDueDate,endDueDate,priority
    });
  }

  return(
    <>
      <AddTodo add={addHandler} filterHandler={applyFilter}/>
      <input type='Text' placeholder='Search todo' value={searchText} onChange={searchHandler}/>
      <Filter applyFilter={applyFilter}/>
      
      <DisplayTodo array={todos} changeTodo={changeTodo} search={searchText} filter={filter}/>
    </>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
