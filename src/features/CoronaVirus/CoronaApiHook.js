import { useEffect, useState } from "react";



export function CoronaApiHook() {
    const [Data,setData] = useState([])
    
    useEffect(() => {
        fetch("https://corona-api.com/countries")
        .then((streem) => streem.json())
        .then(function(result) {
            setData(result.data)
        })
    },[])
    return Data
}


// export function CoronaApiHookforCode(value) {
//     const [codeData,setcodeData] = useState("")

//     useEffect(() => {
//         if(value === 2){
//          fetch(`https://corona-api.com/countries/${value}`)
//          .then((streem) => streem.json())
//          .then((result) => setcodeData(result.data))
//         }
//     },[value])

//     return codeData
// }