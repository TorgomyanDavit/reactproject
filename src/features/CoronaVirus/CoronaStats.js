import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {CoronaApiHook } from "./CoronaApiHook"
import {stateCorona} from "./CoronaStatesSlices"



export default function CoronaStats() {
    /**Data Name Country  */
    const Data = CoronaApiHook()
    
    const [value,setValue] = useState("")
    const [showCoronaState,setShow] = useState(true)
    const [showCountryData,setCountryData] = useState(true)
    const [showTodayData,setTodayData] = useState(true)
    const [showLatestData,setLatestData] = useState(true)

    const country = useSelector(stateCorona)
    const { name , code , population ,today ,latest_data } = country
    const dispatch = useDispatch()


    return (
        <div >
            <button className="ShowCoronaApi" onClick={() =>  setShow(!showCoronaState) }>{showCoronaState ? "show Corona Virus Data" : "close Corona Virus Data" }</button>
            <div className={showCoronaState ?  "closeMain"  : "CoronaMain" }>
            <form className="CoronaLabel" onSubmit={(e) => {
                e.preventDefault()
        
                setTimeout(() => {
                    if(Data.filter(country => country.name.toLowerCase() === value.toLowerCase()).length !== 0  && 
                       Data.filter(country => country.name.length === value.length).length !== 0) {
                        dispatch({
                            type:"searchApi",
                            payload:{
                                Data:Data,
                                value:value
                            }   
                        })
                    }
                },1000)
            }}>
                <input className="CoronaInput" 
                       placeholder="Search Country" 
                       type="text" 
                       value={value}
                       onChange={(e) => {
                        setValue(e.target.value)
                }}
            />
                <button>Search</button>
                    <select className="select"  value={value} onChange={(e) => {
                        
                        setValue(e.target.value)
                        dispatch({
                            type:"searchApi",
                            payload:{
                                Data:Data,
                                value:e.target.value
                            }   
                        })
                    }}>
                        {
                            Data.map(country => <option key={Math.random()} >{country.name}</option>)
                        }
                    </select>
            </form>
            
            

            <button className="buttoninter"  onClick={() => setCountryData(!showCountryData)}>Country Statistic</button>
            <div className={showCountryData ? "" : "closeCountryData"  }> 
                <p>Country: {name}</p>
                <p>Country code: {code}</p>
                <p>Population: {population}</p>
            </div>
           
            <button className="buttoninter"  onClick={() => setTodayData(!showTodayData)}>today Statistic</button>
            <div className={showTodayData ?  "closeTodayStats": ""}>
                <p>deaths: {today.deaths}</p>
                <p>confirmed: {today.confirmed}</p>
            </div>
        

            <button className="buttoninter" onClick={() => setLatestData(!showLatestData)}>Corona Statistics latest data</button>

            <div className={showLatestData ? "showLatestData" : ""}>
                <p>confirmed: {latest_data.confirmed}</p>
                <p>critical: {latest_data.critical}</p>
                <p>deaths: {latest_data.deaths}</p>
                <p>recovered: {latest_data.recovered}</p>
            </div>
         
          
            </div>
        </div>
    )
}