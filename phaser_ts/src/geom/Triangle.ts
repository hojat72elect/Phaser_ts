import type {Line} from "./Line.ts";

/**
 * A triangle is a plane created by connecting three points.
 */
export class Triangle {
    public x1!: number;
    public y1!: number;
    public x2!: number;
    public y2!: number;
    public x3!: number;
    public y3!: number;

    constructor(x1: number = 0, y1: number = 0, x2: number = 0, y2: number = 0, x3: number = 0, y3: number = 0) {
        this.setTo(x1, y1, x2, y2, x3, y3);
    }

    public setTo(x1: number = 0, y1: number = 0, x2: number = 0, y2: number = 0, x3: number = 0, y3: number = 0) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;

        return this;
    }

    /**
     * Returns a Line object that corresponds to `Line A` of this Triangle.
     * `Line A` is between points 1 and 2 of our triangle.
     */
    public getLineA(line: Line) {
        return line.setTo(this.x1, this.y1, this.x2, this.y2);
    }

    /**
     * Returns a Line object that corresponds to `Line B` of this Triangle.
     * `Line B` is between points 2 and 3 of our triangle.
     */
    public getLineB(line: Line) {
        return line.setTo(this.x2, this.y2, this.x3, this.y3);
    }

    /**
     * Returns a Line object that corresponds to `Line C` of this Triangle.
     * `Line C` is between points 3 and 1 of our triangle.
     */
    public getLineC(line: Line) {
        return line.setTo(this.x3, this.y3, this.x1, this.y1);
    }

    /**
     * Gets the left-most X coordinate of the triangle.
     */
    public getLeft() {
        return Math.min(this.x1, this.x2, this.x3);
    }

    /**
     * Sets the left-most X coordinate of the triangle.
     */
    public setLeft(value: number) {
        let difference = 0;
        if (this.x1 <= this.x2 && this.x1 <= this.x3) {
            difference = this.x1 - value;
        } else if (this.x2 <= this.x1 && this.x2 <= this.x3) {
            difference = this.x2 - value;
        } else {
            difference = this.x3 - value;
        }

        this.x1 -= difference;
        this.x2 -= difference;
        this.x3 -= difference;
    }

    /**
     * Gets the right-most X coordinate of the triangle.
     */
    public getRight() {
        return Math.max(this.x1, this.x2, this.x3);
    }

    /**
     * Sets the right-most X coordinate of the triangle.
     */
    public setRight(value: number) {
        let difference = 0;
        if (this.x1 >= this.x2 && this.x1 >= this.x3) {
            difference = this.x1 - value;
        } else if (this.x2 >= this.x1 && this.x2 >= this.x3) {
            difference = this.x2 - value;
        } else {
            difference = this.x3 - value;
        }

        this.x1 -= difference;
        this.x2 -= difference;
        this.x3 -= difference;
    }

    /**
     * Gets the top-most Y coordinate of the triangle.
     */
    public getTop() {
        return Math.min(this.y1, this.y2, this.y3);
    }

    /**
     * Sets the top-most Y coordinate of the triangle.
     */
    public setTop(value: number) {
        let difference = 0;
        if (this.y1 <= this.y2 && this.y1 <= this.y3) {
            difference = this.y1 - value;
        } else if (this.y2 <= this.y1 && this.y2 <= this.y3) {
            difference = this.y2 - value;
        } else {
            difference = this.y3 - value;
        }

        this.y1 -= difference;
        this.y2 -= difference;
        this.y3 -= difference;
    }

    /**
     * Gets the bottom-most Y coordinate of the triangle.
     */
    public getBottom() {
        return Math.max(this.y1, this.y2, this.y3);
    }

    /**
     * Sets the bottom-most Y coordinate of the triangle.
     */
    public setBottom(value: number) {
        let difference = 0;
        if (this.y1 >= this.y2 && this.y1 >= this.y3) {
            difference = this.y1 - value
        } else if (this.y2 >= this.y1 && this.y2 >= this.y3) {
            difference = this.y2 - value;
        } else {
            difference = this.y3 - value;
        }

        this.y1 -= difference;
        this.y2 -= difference;
        this.y3 -= difference;
    }

    /**
     * Returns the area of a Triangle.
     * The area value is always non-negative.
     */
    public area(){
        return Math.abs(((this.x3 - this.x1) * (this.y2 - this.y1) - (this.x2 - this.x1) * (this.y3 - this.y1)) / 2);
    }

    
}
