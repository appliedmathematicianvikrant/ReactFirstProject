import AppInput from "./container/AppInput";
import AppName from "./container/AppName";
import ToDoItems1 from "./container/ToDoItems1";
import ToDoItems2 from "./container/ToDoItems2";
import "./my.css";
function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <AppInput></AppInput>
      <ToDoItems1></ToDoItems1>
      <ToDoItems2></ToDoItems2>

      </center>
    
  );
}

export default App;
