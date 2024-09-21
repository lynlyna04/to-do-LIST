import { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";



function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [del, setDel]= useState(false)
  const [display, setDisplay] = useState(true);

  function addtask() {
    if(task ===''){
      alert("enter a value please !")
    }else{setTasks([...tasks, { text: task, completed: false }]);
    setTask('');  // Clear input field after adding task}
  }
  }

  const handletoggle = (index) => {
    const newarray = [...tasks];
    newarray[index].completed = !newarray[index].completed;  // Toggle task completion
    setTasks(newarray);
  }

  const handledisplay = () => {
    setDisplay(!display);  // Toggle display on or off
  }

  const handledel = (index) =>{
      const delt = confirm("Are you sure you want to delete this task?");
      if (delt) {
        const newtasks = [...tasks];  // Copy the tasks array
        newtasks.splice(index, 1);  // Remove the task at the specified index
        setTasks(newtasks);  // Update the tasks state
      }
  }

  const edittask = (index) =>{
    const newtasks= [...tasks]
    const newTaskText = prompt("Edit your task:", tasks[index].text);
    if (newTaskText !== null) {
      newtasks[index].text = newTaskText;
      setTasks(newtasks);
    }


  }

  return (
    <div className="App">
      <h1> <b>To Do List</b> </h1>
      <br></br>
      <Row className="align-items-center">
        <Col xs="auto">
        <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add task"
        />
        </Col>
        <Col xs="auto">
        <button onClick={addtask}>Add</button>
        </Col>
        <Col xs="auto">
        <button onClick={handledisplay}>{display ? 'Hide' : 'Show'} Tasks</button>  
        </Col>
      </Row>
      <br />
      <ul>
        {display && tasks.map((t, index) => (
          <li key={index}>
            <Row className="align-items-center">
            <Col className="d-flex  align-items-center"> 
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => handletoggle(index)}
            className="me-4" 
          />
          <span>{t.completed ? <del>{t.text}</del> : t.text}</span>
        </Col>
              <Col className="text-end">
              <button id="del" onClick={handledel}> X </button>
              <button id="del" onClick={()=> edittask(index)}> edit </button>
              </Col>
            </Row>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;