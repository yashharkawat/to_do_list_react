import {useState} from 'react';
const AddTodo=(props)=>{
    const [filter,setFilter]=useState({});
    const [item,setItem]=useState('');
    const [id,setId]=useState(0);
    const changeHandler=(e)=>{
      setItem(e.target.value);
    }
    const clickHandler=()=>{
      props.add(item,id);
      setId(+id+1);
      setItem('');
      setFilter({});
      props.filterHandler(filter);
    }
  
    return (
      <div>
        <input type='text' onChange={changeHandler} value={item}/>
        <br />
        <button onClick={clickHandler}>Add todo</button>
        </div>
    );
  }
export default AddTodo;  