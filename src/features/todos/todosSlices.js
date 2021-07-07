export const initialStateTodos = [
    {id:Math.random(),text:"learn JS",isCompleted:false},
    {id:Math.random(),text:"learn Node",isCompleted:false},
    {id:Math.random(),text:"learn Css",isCompleted:false}
]

export function todosState(state) {
    return state.todos
}

function todosReducer(state=[],action) {
    if(action.type === "Add") {
        return [
            ...state,
            {id:Math.random(),text:action.payload.text,isCompleted:false}
        ]
    } else if(action.type === "Clear Completed") {
        return state.filter(todo => todo.isCompleted === false)
    }else if(action.type === "onChecked") {
        return state.map((todo) =>  {
            if(todo.id === action.payload.id) {
                return action.payload
            }
            return todo
        })
    } else if(action.type === "onDelete") {
        return state.filter(todo => todo.id !== action.payload.todo.id)
    }


    return state
}
export default todosReducer