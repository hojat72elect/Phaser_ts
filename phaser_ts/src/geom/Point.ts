/**
 * Defines a Point in 2D space, with an x and y component.
 */
export class Point {

    // The x coordinate of this Point.
    public x: number;

    // The y coordinate of this Point.
    public y: number;

    /**
     * @param x The x coordinate of this Point. Default 0.
     * @param y The y coordinate of this Point. Default to the x value.
     */
    constructor(x: number = 0, y: number = x) {
        this.x = x;
        this.y = y;
    }

    public setTo(x: number = 0, y: number = x) {
        this.x = x;
        this.y = y;

        return this;
    }
}
