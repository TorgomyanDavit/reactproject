
export const initialStateticTacToe = [
    {id:0,text:" Tic TAc Toe",isCompleted:false},
    {id:1,text:" Tic TAc Toe",isCompleted:false},
    {id:2,text:" Tic TAc Toe",isCompleted:false},
    {id:3,text:" Tic TAc Toe",isCompleted:false},
    {id:4,text:" Tic TAc Toe",isCompleted:false},
    {id:5,text:" Tic TAc Toe",isCompleted:false},
    {id:6,text:" Tic TAc Toe",isCompleted:false},
    {id:7,text:" Tic TAc Toe",isCompleted:false},
    {id:8,text:" Tic TAc Toe",isCompleted:false}
]

export function ticTacToeState(state) {
    return state.TicTacToe
}

export function changeXO(player,tictac) {
    return {
        type:"ticTac",
        payload:{
            ...tictac,
            text:player,
            isCompleted:true
        }
    }
}

export const WinnerState = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
]

export function initState(){
    return {
        type:"startNow",
        payload:{
            initialStateticTacToe:initialStateticTacToe
        }
    }
}
export function render(state,WinnerState,player,index,gameAnd,setGameAnd,dispatch,setNone,None,X,setX,O,setO) {
    function Win(state,WinnerState,player) {
        return state.filter(val => {
            return val.text === player
        }).map(val => {
            return val.id
        }).filter(val => {
            let z = 0
            let i = 0
            while(z < WinnerState[index].length ){
                if(val === WinnerState[index][i]){
                    return   true 
                }
                z++
                i++
            }
            return false
        })
    }

    while(Win(state,WinnerState,player).length !== 3 && index < WinnerState.length - 1) {
        index++
        continue
    }

    if(Win(state,WinnerState,player).length === 3){
        if(player === "X") {
            setX(X+=1)
        } else {
            setO(O+=1)
        }
        setGameAnd(!gameAnd)
    }

    if(state.filter((val) => val.isCompleted === true).length === 9) {
        dispatch(initState())
        setGameAnd(!gameAnd)
        setNone(!None)
    }
}




export default function TicTacToeReducer(state=[],action) {

    if(action.type === "ticTac"){
        return state.map(tictactoe => {
            if(tictactoe.id === action.payload.id) {
                return action.payload
            }
            return tictactoe
        })
    } else if(action.type === "startNow") {
        return action.payload.initialStateticTacToe
    }
    return state
}
