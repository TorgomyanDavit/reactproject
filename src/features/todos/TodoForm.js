import { useState } from "react"
import { useDispatch } from "react-redux"



export default function TodoForm() {
    const [value,setValue] = useState("")
    const dispatch = useDispatch()
    return (
        <div className="formDiv">
            <span className="TodoProgramSpan">Programm todo</span>
            <form className="formMain" onSubmit={(e) => {
                e.preventDefault()
                if(value !== "") {
                    dispatch({
                        type:"Add",
                        payload:{
                            text:value
                        }
                    })
                    setValue("")
                }
            }}>
                <input className="inputForm" type="text"  value={value} onChange={(e) => {
                    setValue(e.target.value)
                }}/>
                <button className="inputButton">Add</button>
            </form> 
        </div>
    )
}