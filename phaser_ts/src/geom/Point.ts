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

    /**
     * Clone the given Point.
     */
    public clone(source: Point) {
        return new Point(source.x, source.y);
    }

    /**
     * Copies the values of `source` Point to the `dest` Point.
     */
    public copyFrom(source: Point, dest: Point) {
        return dest.setTo(source.x, source.y);
    }

    /**
     * checks to see if the 2 provided points are referring to the same place on 2D page.
     */
    public equals(point: Point, other: Point): boolean {
        return (point.x === other.x && point.y === other.y);
    }
}
