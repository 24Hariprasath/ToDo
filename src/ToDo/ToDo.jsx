import { useState} from "react";
import './ToDo.css'
import { Link } from "react-router-dom";

function ToDo(){

    const [task,setTask] = useState([]);
    const input = <input type="text" className="input" id="input" placeholder="Enter the task"/>
    const button = <button onClick={() => addTask()}>Add</button>

    function addTask(){
        let element = document.getElementById('input').value;

        if(element === ""){
            document.getElementById("error").innerHTML = "Please Enter Some Task";
            return;
        }
        document.getElementById("error").style.display = 'None';
        document.getElementById('input').value="";
        setTask(t => ([...t,element]));

    }

    function removeTask(index){
        setTask(task.filter((_,i) => i != index));
    }

    function moveUp(index){
        if (index == 0) return 0;

        const temp = [...task];
        [temp[index],temp[index-1]] = [temp[index-1],temp[index]];
        setTask(temp);
    }

     function moveDown(index){
        const lengthofTask = task.length - 1;
        if (index == lengthofTask) return 0;

        const temp = [...task];
        [temp[index],temp[index+1]] = [temp[index+1],temp[index]];
        setTask(temp);
    }
 
    return(<><div className="listBox"> 
        <p id="error" style={{color:'red'}}></p>
        {input}
        {button}
        </div>
        <div >
            <ul>
           {task.map((x,index)=>(<li key={index}>{x} <button onClick={() => removeTask(index)}>Remove</button> <p style={{display:'inline', cursor:'pointer'}} onClick={() => moveUp(index)}>👆</p> <p style={{display:'inline',cursor:'pointer'}} onClick={() => moveDown(index)}>👇</p></li>))} 
        </ul>
        </div>
        </>);
}

export default ToDo