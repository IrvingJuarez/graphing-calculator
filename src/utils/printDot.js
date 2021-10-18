import { ctx } from "./createGrid"
const radius = 5, startAngle = 0, endAngle = Math.PI * 2

class Coordinate {
    constructor(x, y){
        this.x = x;
        this.y = y;

        this.draw = this.draw.bind(this)
    }

    draw(c){
        ctx.beginPath()
        ctx.arc(this.x, this.y, radius, startAngle, endAngle)
        ctx.fill()

        c.coordinates = c.coordinates.push("12")
        console.log(c)
    }
}

const printDot = (x, y, component) => {
    let newCoor = new Coordinate(x, y, component)
    newCoor.draw(component)
}

export default printDot;