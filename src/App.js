import TodoList from './features/todos/TodoList';
import TodoForm from './features/todos/TodoForm';
import TodoFooter from './features/todos/TodoFooter';
import CoronaStats from "./features/CoronaVirus/CoronaStats"
import './App.css';
import "./features/todos/Todo.css"
import "./features/CoronaVirus/CoronaStates.css"
import { useState } from 'react';
import TicTacToe from './features/TicTacToe/TicTacToe.js';
import "./features/TicTacToe/TicTacToe.css"
import Diamonds from './features/Diamonds/Diamonds';
import "./features/Diamonds/diamonds.css";
import Animation from './features/CanvasAnimation/Animation';
import "./features/CanvasAnimation/Animation.css"



function App() {
  let [showTodo,setshowTodo] = useState(true)
  const [divMain,setdivMain] = useState(true)
  const [shoeCanvas,setShowCanvas] = useState(false)



  return (
  <div className="App">
    {/*  Programm Todo */}
    <button className="ButtonShowTodo" onClick={() =>{
      setshowTodo(!showTodo)
    }}>{showTodo ? "ShowTodo" : "CloseTodo"} </button>

    <div className={showTodo ? "TodoDisplayNone" :  "TodoMain"}>
      <TodoForm/>
      <TodoList/>
      <TodoFooter/>
    </div>

    {/* Programm  CoronaVirus Statistica  */}
    <CoronaStats/>

    {/* Tic Tac Toe programm */}
    <button className="button" onClick={() => {
      setdivMain(!divMain)
    }}>{divMain ?  "ShowTicTacToe" : "CloseTicTacToe" }</button>
    <div className={divMain ? "CloseTicTacMAin" : "" }>
    <TicTacToe index={0}/>
    </div>


    {/* Diamonds */}
    <Diamonds/>

    {/* canvas Animation */}
    <button className="ShowCloseAnimation" onClick={() => {
      setShowCanvas(!shoeCanvas)
    }}>{shoeCanvas ?  "CloseCanvas" : "Show Canvas"}</button>
    {shoeCanvas ? <Animation shoeCanvas={shoeCanvas}/> : null}
    


   </div>
  );
}
export default App;
