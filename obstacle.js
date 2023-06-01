class Obstacle {
    constructor(x, h) {

        this.spacex = 10;
        this.endx = 1300;
        this.axis = [];
        this.h = [0];

    }

    array(){

        for (this.startx = 500; this.startx < this.endx; this.startx += this.spacex) {
            this.axis.push(this.startx);
        }

        for (let i = 1; i < this.axis.length/2; i++) {
            this.h.push(this.h[i-1]+random(-2,10));
        }
        for (let i = this.axis.length/2; i < this.axis.length; i++) {
            this.h.push(this.h[i-1]-random(-2,10));
        }

    }

    show() {

        for (let i = 0; i < this.axis.length; i++) {
            stroke(0);
            line(this.axis[i], height, this.axis[i], height - this.h[i]);
            this.axis[i] -= 1;
        }

    }
}