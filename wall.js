class Wall {
    constructor(a, b, c, d) {
        this.a = a
        this.b = b
        this.c = c
        this.d = d
    }

    draw() {
        stroke(255)
        line(this.a, this.b, this.c, this.d)
    }
}