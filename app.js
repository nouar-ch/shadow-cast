let walls = [];
let rays;
let xoff = 0
let yoff = 10000
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function setup() {
    createCanvas(400, 400);
    walls.push(new Wall(0, 0, width, 0))
    walls.push(new Wall(0, 0, 0, height))
    walls.push(new Wall(width, height, width, 0))
    walls.push(new Wall(width, height, 0, height))
    for(let i=0; i<5; i++) {
        a = getRndInteger(0, width)
        b = getRndInteger(0, height)
        c = getRndInteger(0, width)
        d = getRndInteger(0, height)
        walls.push(new Wall(a, b, c, d))
    }
    rays = new Rays(100, 200);
}

function draw() {
    background(0);
    
    for(wall in walls) {
        walls[wall].draw()
    }

    rays.position(noise(xoff)*width, noise(yoff)*height)
    rays.draw(walls)

    xoff += 0.001
    yoff += 0.001
}