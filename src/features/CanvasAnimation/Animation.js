/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {dispatchAddRect ,updateRect, drawRect, dispatchAddCircle ,updateCircle, drawCircle ,dispatchAddIcon,icona} from "./animationSlice"


function Animation() {
    const [stop,setstop] = useState(false)
    const [ChangeToCircleToAdd,setChangeToCircleToAdd] = useState("changeAdd")
    
    const canvasRef = useRef(null)
    const dispatch = useDispatch()
    const state = useSelector((state) => {
        return state.CanvasAnimation
    })
    console.log(state)
    const {rectangle,circle,icon} = state


    function drawIcon(context) {
        const image = new Image()
        image.src="https://toppng.com/uploads/preview/soccer-ball-11547030791eh59fn2utb.png"
        context.drawImage(image,this.x,this.y,this.width,this.height)
    }


    
    function updateIcon(canvas) {
        this.x += this.Xdelta
        this.y += this.Ydelta
        if(this.x + this.width > canvas.width || this.x  <= 0){
            this.Xdelta *= -1
        }
    
        if(this.y + this.height >= canvas.height || this.y <= 0){
            this.Ydelta *= -1
        }
    }
    
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext("2d")
   
        let id;
        function render() {
            id = requestAnimationFrame(render)
            context.clearRect(0,0,context.canvas.width,context.canvas.height)
            if(ChangeToCircleToAdd === "changeAdd") {
                rectangle.forEach(val => {
                    drawRect.call(val,context) 
                    updateRect.call(val,canvas)
                })
            } else if(ChangeToCircleToAdd === "changeCircle") {
                circle.forEach(val => {
                    drawCircle.call(val,context)
                    updateCircle.call(val,canvas)
                })
            } else if(ChangeToCircleToAdd === "changeIcon") {
                icon.forEach(val => {
                    debugger
                    drawIcon.call(val,context)
                    updateIcon.call(val,canvas)
                })
            }
        }
    
        if(stop) {
           render() 
        }

        return () => {
            cancelAnimationFrame(id)
        }
    },[stop,ChangeToCircleToAdd])


    return (
        <div className="mainDivCanvas">
            <canvas ref={canvasRef} className="canvas" width="700" height="500" onClick={() => {
            if(ChangeToCircleToAdd === "changeAdd") {
                dispatch(dispatchAddRect())
            } else if(ChangeToCircleToAdd === "changeCircle") {
                dispatch(dispatchAddCircle())
            } else if(ChangeToCircleToAdd === "changeIcon") {
                dispatch(dispatchAddIcon())
            }
            }}></canvas>
            <button className="AddButton" onClick={() => setChangeToCircleToAdd("changeAdd")}>Add Rectangle</button>
            <button className="AddButton" onClick={() => setChangeToCircleToAdd("changeCircle")}>Add Circle</button>
            <button className="AddButton" onClick={() => setChangeToCircleToAdd("changeIcon")}>Add Icon</button>
            <button className="AddButton" onClick={() => setstop(!stop)}>{stop ? "Stop" : "play"}</button>
        </div>
    )
}
export default Animation