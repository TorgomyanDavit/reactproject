/* eslint-disable no-new-object */
// Rectangle options

export const initialStateAnimation = {
    rectangle:[],
    circle:[],
    icon:[]
}
function Rectangle() {
    this.x = Math.ceil(Math.random() * 644)
    this.y = Math.ceil(Math.random() * 450)
    this.width = Math.ceil(Math.random() * 30) + 40
    this.height= Math.ceil(Math.random() * 1) + 40

    this.color = "rgb(" + Math.round(Math.random() * 255) +","+Math.round(Math.random() * 255)+"," + Math.round(Math.random() * 255) + ")"
    this.colorRect = "rgb(" + Math.round(Math.random() * 255) +","+Math.round(Math.random() * 255)+"," + Math.round(Math.random() * 255) + ")"

    this.Xdelta = Math.ceil(Math.random() * -10 ) + 5 
    this.Ydelta = Math.ceil(Math.random() * -10 ) + 5 
}

export function updateRect(canvas) {
    if(this.x >= canvas.width - this.width || this.x <= 0) {
        this.Xdelta *= - 1
    } 
    if(this.y <= 0 || this.y >= canvas.height - this.height){
        this.Ydelta *= -1
    }
    this.x += this.Xdelta
    this.y += this.Ydelta
}

export  function drawRect(context) {
    context.lineWidth = 15
    context.strokeStyle = this.colorRect
    context.strokeRect(this.x,this.y,this.width,this.height)


    context.fillStyle = this.color
    context.fillRect(this.x,this.y,this.width,this.height)
}

export  function dispatchAddRect() {
    return {
        type:"addRect",
        payload:{
            rect:new Rectangle()
        }
    }
}













// Circle options
function Circle() {
    this.radius = Math.ceil(Math.random() * 30) + 20
    this.x = Math.ceil(Math.random() * 600) + this.radius
    this.y = Math.ceil(Math.random() * 400) + this.radius
  
    this.color = "rgb(" + Math.round(Math.random() * 255) +","+Math.round(Math.random() * 255)+"," + Math.round(Math.random() * 255) + ")"
    this.Xdelta = Math.ceil(Math.random() * -10 ) + 5 
    this.Ydelta = Math.ceil(Math.random() * -10 ) + 5
}

export function updateCircle(canvas) {
    if(this.x + this.radius > canvas.width || this.x - this.radius <= 0){
        this.Xdelta *= -1
    }

    if(this.y + this.radius >= canvas.height || this.y - this.radius < 0){
        this.Ydelta *= -1
    }
    this.x += this.Xdelta
    this.y += this.Ydelta
}

export  function drawCircle(context) {
    context.beginPath()
    context.fillStyle = "rgba(" + Math.round(Math.random() * 255) +","+Math.round(Math.random() * 255)+"," + Math.round(Math.random() * 255) + "," + Math.random() * 1  + ")"
    context.arc(this.x,this.y,this.radius,0,2 * Math.PI)
    context.fill()
    context.lineWidth = 25;
    context.strokeStyle = this.color;
    context.stroke();
}

export function dispatchAddCircle() {
    return {
        type:"addCircle",
        payload:{
            circl:new Circle()
        }
    }
}





// Icon Option 

export function dispatchAddIcon() {
    return {
        type:"AddIcon",
        payload:{
            icon:new Object().prototype = new Rectangle()
        }
    }
}









function animationReducer(state={},action) {
    if(action.type === "addRect") {
        state.rectangle.push(action.payload.rect)
        return state
    } else if(action.type === "clearState") {
        return action.payload
    } else if(action.type === "addCircle") {
        state.circle.push(action.payload.circl)
        return state
    } else if(action.type === "AddIcon") {
        state.icon.push(action.payload.icon)
        return state
    }
    return state
}
export default animationReducer