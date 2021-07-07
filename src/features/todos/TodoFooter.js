import { useDispatch, useSelector } from "react-redux"
import { todosState } from "./todosSlices"



export default function TodoFooter() {
    const todos = useSelector(todosState)
    const completed = todos.filter((todo) => todo.isCompleted === true).length
    const dispatch = useDispatch()
    return (
        <div className="footerMain">
            <span className="footerSpan">{completed} / {todos.length}Completed</span>
            <button onClick={() => {
                dispatch({
                    type:"Clear Completed",
                })
            }}>Clear Completed</button>
        </div>
    )
}