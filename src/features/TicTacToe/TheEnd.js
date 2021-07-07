
import { useDispatch } from "react-redux"
import {initState} from "./TicTAcToeSlices"




function TheEnd({player,gameAnd,setGameAnd,None,setNone}) {
    
    const dispatch = useDispatch()

    return (
        <div className={gameAnd ?  "null" : "TheEnd" } >
            {None ? <p> Win player : {player === "X" ? "O" : "X"}</p> : <p>Game Finish ,And No Ona Didnot finish</p>}
            <button onClick={() => {
                setGameAnd(!gameAnd)
                dispatch(initState())
                setNone(true)
            }}>Start Now</button>
        </div>
    )
}
export default TheEnd