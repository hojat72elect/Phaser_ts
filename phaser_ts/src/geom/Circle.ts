/**
 * A Circle object.
 *
 * This is a geometry object, containing numerical values and related methods to inspect and modify them.
 * It is not a Game Object, in that you cannot add it to the display list, and it has no texture.
 * To render a Circle you should look at the capabilities of the Graphics class.
 */
export class Circle {

    // The x position of the center of the circle.
    public x: number;

    // The y position of the center of the circle.
    public y: number;

    // The internal radius of the circle.
    private _radius: number;

    // The internal diameter of the circle.
    private _diameter: number;

    /**
     * @param x The x position of the center of the circle.
     * @param y The y position of the center of the circle.
     * @param radius The internal radius of the circle.
     */
    constructor(x: number = 0, y: number = 0, radius: number = 0) {
        this.x = x;
        this.y = y;
        this._radius = radius;
        this._diameter = 2 * radius;
    }

    /**
     * Check to see if this circle contains the given (x, y) coordinates.
     * @returns true if the coordinates are within the circle, otherwise false.
     */
    public contains(x: number, y: number) {
        if (this._radius > 0 && x >= this.getLeft() && x <= this.getRight() && y >= this.getTop() && y <= this.getBottom()) {
            return (((x - this.x) ** 2) + ((y - this.y) ** 2)) <= (this._radius ** 2);
        } else {
            return false;
        }
    }

    /**
     * Update the x, y, radius, and diameter of this circle.
     */
    public setTo(x: number = 0, y: number = 0, radius: number = 0) {
        this.x = x;
        this.y = y;
        this._radius = radius;
        this._diameter = radius * 2;

        return this;
    }

    /**
     * The radius of this circle will be zero.
     * maybe after running this function, we could consider this circle as a {@link Point} on 2D screen?
     */
    public setEmpty() {
        this._radius = 0;
        this._diameter = 0;

        return this;
    }

    /**
     * Change the position of this circle.
     */
    public setPosition(x: number = 0, y?: number) {
        if (y === undefined) y = x;

        this.x = x;
        this.y = y;

        return this;
    }

    public isEmpty() {
        return (this._radius <= 0);
    }

    public getRadius() {
        return this._radius;
    }

    public setRadius(value: number) {
        this._radius = value;
        this._diameter = 2 * value;
    }

    public getDiameter() {
        return this._diameter;
    }

    public setDiameter(value: number) {
        this._diameter = value;
        this._radius = value / 2;
    }

    /**
     * @returns the x of the leftmost point of the circle.
     */
    public getLeft() {
        return this.x - this._radius;
    }

    /**
     * We just move our circle in such a way that its leftmost point's x will be the provided value.
     */
    public setLeft(value: number) {
        this.x = value + this._radius;
    }

    /**
     * @returns the x of the rightmost point of the circle.
     */
    public getRight() {
        return this.x + this._radius;
    }

    /**
     * We just move our circle in such a way that its rightmost point's x will be the provided value.
     */
    public setRight(value: number) {
        this.x = value - this._radius;
    }

    /**
     * @returns the y of the topmost point of the circle.
     */
    public getTop() {
        return this.y - this._radius;
    }

    /**
     * We just move our circle in such a way that its topmost point's y will be the provided value.
     */
    public setTop(value: number) {
        this.y = value + this._radius
    }

    /**
     * @returns the y of the downmost point of the circle.
     */
    public getBottom() {
        return this.y + this._radius;
    }

    /**
     * We just move our circle in such a way that its downmost point's y will be the provided value.
     */
    public setBottom(value: number) {
        this.y = value - this._radius;
    }
}
