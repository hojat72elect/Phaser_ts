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

    /**
     * Set the x and y coordinates of the point to the given values.
     * @param x The x coordinate of this Point. Default 0.
     * @param y The y coordinate of this Point. Default x.
     */
    public setTo(x: number = 0, y: number = x) {
        this.x = x;
        this.y = y;

        return this;
    }

    /**
     * Makes a clone out of this Point. (the clone and this point will not have any relationships or references to each other)
     */
    public clone() {
        return new Point(this.x, this.y);
    }

    /**
     * Copies the values of `source` Point to the `dest` Point.
     */
    public static copyFrom(source: Point, dest: Point) {
        return dest.setTo(source.x, source.y);
    }

    /**
     * Checks to see if this point is referring to the same place on 2D page as another point.
     */
    public equals(other: Point): boolean {
        return (this.x === other.x && this.y === other.y);
    }

    /**
     * Apply `Math.floor()` function to all coordinates of this Point.
     */
    public floor() {
        return this.setTo(Math.floor(this.x), Math.floor(this.y));
    }

    /**
     * Applies the `Math.ceil()` function to all coordinate of this Point.
     */
    public ceil() {
        return this.setTo(Math.ceil(this.x), Math.ceil(this.y));
    }

    /**
     * Calculate the magnitude of this point, which is equivalent to the length of the line from the origin to this point.
     */
    public getMagnitude() {
        return Math.sqrt((this.x ** 2) + (this.y ** 2));
    }

    /**
     * Calculates the square of magnitude of this point.(Can be used for fast magnitude calculation of this point).
     */
    public getMagnitudeSq() {
        return (this.x ** 2) + (this.y ** 2);
    }

    /**
     * Returns the linear interpolation point between the 2 given points, based on `t`.
     *
     * @param pointA - The starting `Point` for the interpolation.
     * @param pointB - The target `Point` for the interpolation.
     * @param t - The amount to interpolate between the 2 points.
     * @param out - An optional object to store the result.
     *
     * @return {Point} The result of the interpolation.
     */
    public static interpolate(pointA: Point, pointB: Point, t: number = 0, out: Point = new Point()) {
        out.x = pointA.x + (pointB.x - pointA.x) * t;
        out.y = pointA.y + (pointB.y - pointA.y) * t;

        return out;
    }




}
