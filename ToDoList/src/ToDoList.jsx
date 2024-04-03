import React,{ useState } from "react";
function ToDoList(){
    const [task,settask]=useState([]);
    const [newtask,setnewtask]=useState([]);
    function handleinputchange(event){
       setnewtask(event.target.value);
    }
    function addtask(){

    }
    function deletetask(index){

    }
    function movetaskup(index){

    }
    function movetaskdown(index){

    }
    return(
        <>
        <div className="todolist">
            <h1>To-Do-List</h1>
            <div>
                <input type="text"
                placeholder="enter a Task"
                value={newtask}
                onChange={handleinputchange}
                />
                <button className="addbutton" 
                onClick={addtask}>Add</button>

            </div>
            <ol>
                {task.map((element,index)=>
                <li key={index}>
                    <span className="text">{element}</span>
                    <button className="deletebutton" 
                             onClick={()=>deletetask(index)}>
                                Delete❌
                    </button>
                    <button className="moveupbutton" 
                            onClick={()=>movetaskup(index)}>
                                Move Up⬆️
                    </button>
                    <button className="movedownbutton" 
                            onClick={()=>movetaskdown(index)}>
                                Move Down⬇️
                    </button>
                </li>
                
                )}
            </ol>

        </div>
        

        </>)
}
export default ToDoList;