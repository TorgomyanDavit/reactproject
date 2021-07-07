
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TheEnd from "./TheEnd"
import { ticTacToeState,changeXO,render} from "./TicTAcToeSlices"
import { WinnerState } from "./TicTAcToeSlices"





function TicTacToe({index}) {
    console.log("TicTacToe")
    const state = useSelector(ticTacToeState)
    const dispatch = useDispatch()
    const [player,setplayer] = useState("X")
    const [gameAnd,setGameAnd] = useState(true)
    const [None,setNone] = useState(true)
    const [X,setX] = useState(0)
    const [O,setO] = useState(0)



    
    setTimeout(() => {
        render(state,WinnerState,player,index,gameAnd,setGameAnd,dispatch,setNone,None,X,setX,O,setO)
    },100)
      
    return (
        <div className="TicTacToeMAin">
            <TheEnd player={player} gameAnd={gameAnd} setGameAnd={setGameAnd} None={None} setNone={setNone} />
            {
                state.map(tictac => {
                    return <button onClick={() => {
                        if(tictac.isCompleted !== true){
                            dispatch(changeXO(player,tictac))
                            setTimeout(() => {
                                if(player === "X") {
                                    setplayer("O")
                                } else {
                                    setplayer("X")
                                }
                            },100)
                        }
                    }} className="block" key={tictac.id}> {tictac.text} </button>
                })
            }
            <p className="Score">Score:  X:{X}   O:{O} <span>Player:{player}</span></p>
        </div>
    )
}

export default TicTacToe