import AppInput from "./container/AppInput";
import AppName from "./container/AppName";
import ToDoItems1 from "./container/ToDoItems1";
import ToDoItems2 from "./container/ToDoItems2";
import "./my.css";
function App() {
  return (

    <div className="container">
  <center className="todo-container">
      <AppName></AppName>
      <AppInput></AppInput>

      <div className='item-container'>
      <ToDoItems1></ToDoItems1>
      <ToDoItems2></ToDoItems2>
      </div>
     
      </center>
    </div>
  
    
  );
}

export default App;
