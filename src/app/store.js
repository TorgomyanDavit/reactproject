import {combineReducers, createStore} from   "redux"
import todosReducer, {initialStateTodos} from "../features/todos/todosSlices"
import CoronaStatesReducers, {initialStateCoronaVirus} from "../features/CoronaVirus/CoronaStatesSlices"
import TicTacToeReducer, {initialStateticTacToe} from "../features/TicTacToe/TicTAcToeSlices"
import animationReducer, {initialStateAnimation} from "../features/CanvasAnimation/animationSlice"











console.log("createStore")

const store = createStore(combineReducers({
    todos:todosReducer,
    CoronaVirus:CoronaStatesReducers,
    TicTacToe:TicTacToeReducer,
    CanvasAnimation:animationReducer
}),{
    todos:initialStateTodos,
    CoronaVirus:initialStateCoronaVirus,
    TicTacToe:initialStateticTacToe,
    CanvasAnimation:initialStateAnimation
})
export default store
