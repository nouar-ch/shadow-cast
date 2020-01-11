class Rays {
    constructor(x, y) {
        this.pos = createVector(x, y)
    }

    position(x, y) {
        this.pos.x = x
        this.pos.y = y
    }

    cast(wall, dir) {
        const x1 = wall.a
        const x2 = wall.c
        const y1 = wall.b
        const y2 = wall.d

        const x3 = this.pos.x
        const x4 = this.pos.x + dir.x
        const y3 = this.pos.y
        const y4 = this.pos.y + dir.y

        const den = (x1 - x2)*(y3 - y4) - (y1 - y2)*(x3 - x4)

        if(den == 0) return;
        //console.log('not parallel')    
        const t = ((x1 - x3)*(y3 - y4) - (y1 - y3)*(x3 - x4))/den
        const u = -1*((x1 - x2)*(y1 - y3) - (y1 - y2)*(x1 - x3))/den
        //console.log(t, u)
        if(t>= 0.0 && t <=1.0 && u>=0.0) {
            const pt = createVector()
            pt.x = x1 + t*(x2 - x1)
            pt.y = y1 + t*(y2 - y1)
            return pt
        }
        return;
    }

    draw(walls) {
        
        push()
        //translate(this.pos.x, this.pos.y)
        stroke(255, 100)
        strokeWeight(2)
        ellipse(0, 0, 4)
        for(let a=0; a<360; a++) {
            const dir = p5.Vector.fromAngle(radians(a))
            let pt = null
            let record = Infinity
            let closest = null
            for(let wall of walls) {
                pt = this.cast(wall, dir)
                if(pt) {
                    let d = p5.Vector.dist(this.pos, pt)
                    record = min(record, d)
                    if (d<=record) {
                        closest = pt
                    }
                }
            }
            if (closest) {
                line(this.pos.x, this.pos.y, closest.x, closest.y)
            }
        }
        pop()
    }
}