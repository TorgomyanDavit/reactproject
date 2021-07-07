import { useDispatch, useSelector } from "react-redux"
import { todosState } from "./todosSlices"


export default function TodoList() {
    const todos = useSelector(todosState)
    const dispatch = useDispatch()
    return (
        <div className="TodoList">
            {
                todos.map(todo => {
                    return <div key={todo.id} >
                        <label className="TodoLabel">
                            <input  className="listinput" type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                                dispatch({
                                    type:"onChecked",
                                    payload:{
                                        ...todo,
                                        isCompleted:e.target.checked
                                    }
                                })
                            }}/>
                            <span className="listSpan">{todo.text}</span>
                            <button className="listButton" onClick={() => {
                                dispatch({
                                    type:"onDelete",
                                    payload:{
                                        todo:todo
                                    }
                                })
                            }}>X</button>
                        </label>
                    </div>
                })
            }
        </div>
    )
}