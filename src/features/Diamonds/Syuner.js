


function Syuner({showDiamonds}) {

    function Scroll(num) {
        let str = ""
        for(let i=0;i<num;i++) {
            str+="_"  
        }
        return str
    }

    function syuner(Num){
        let str = ""
        for(let i=0;i<Num;i++) {
            str+="*" 
        }
        return str
    }

    function Num(num) {
        let str = ""
        let space = 14
        for(let i=1; i<= num;i++) {
            str+=syuner(i) + Scroll(space) + syuner(i) + "\n"
            space-=2
        }
        return str
    }

    return (
        <button className={showDiamonds ?  "syuner" : "closeDiamonds"} onClick={() => {
            alert(Num(7))
        }}>Click To Alert Syuner</button>
    )
}
export default Syuner