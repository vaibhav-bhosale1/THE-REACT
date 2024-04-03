import React,{ useState } from "react";
function ToDoList(){
    const [task,settask]=useState([]);
    const [newtask,setnewtask]=useState([]);
    function handleinputchange(event){
       setnewtask(event.target.value);
    }
    function addtask(){
       if(newtask.trim()!==""){
        settask(t=>[...t,newtask])
        setnewtask("")
       }
    }
    function deletetask(index){
        const updatedtask=task.filter((_,i)=>i!==index);
        settask(updatedtask);
    }
    function movetaskup(index){
        if(index>0){
            const updatedtask=[...task];
            [updatedtask[index],updatedtask[index-1]]=
            [updatedtask[index-1],updatedtask[index]]
            settask(updatedtask);
        }
    }
    
    function movetaskdown(index){
        if(index<task.length-1){
            const updatedtask=[...task];
            [updatedtask[index],updatedtask[index+1]]=
            [updatedtask[index+1],updatedtask[index]]
            settask(updatedtask);}

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