import { useState } from "react"
import Syuner from "./Syuner"


function Diamonds() {
    const [showDiamonds,setshowDiamonds] = useState(false)

    function Scroll(num) {
        let str = ""
        for(let i=0;i<num;i++) {
            str+="_"  
        }
        return str
    }

    function Num(num) {
        let str = ""
        for(let i=0;i<num;i++) {
            str+="*"  
        }
        return str
    }

    function diamonds(count) {
        let str = ""
        let bottomSpaces = count/2 -1
        for(let i = 1;i <= count; i+=2 ){
            str += Scroll(bottomSpaces) + Num(i) + "\n"
            bottomSpaces--
        }
        let TopSpapce = 1
        for(let x=count-2;x > 0;x-=2) {
            str += Scroll(TopSpapce) + Num(x) +"\n"
            TopSpapce++
        }
        return str
    }

    




    return (
        <div className="mainDiamonds">
            <button className="showButton" onClick={() => {
                setshowDiamonds(!showDiamonds)
            }}>{showDiamonds ? "closeDiamonds" : "Show Diamonds"}</button>
            
            <button className={showDiamonds ? "Diamonds" : "closeDiamonds"} onClick={() => {
               alert(diamonds(9))
               console.log(diamonds(9))
            }}>Click To Alert Diamonds</button>    
            <Syuner showDiamonds={showDiamonds}/>
        </div>
    )
}
export default Diamonds