/**
 * An Ellipse object.
 *
 * This is a geometry object, containing numerical values and related methods to inspect and modify them.
 * It is not a Game Object, in that you cannot add it to the display list, and it has no texture.
 * To render an Ellipse you should look at the capabilities of the Graphics class.
 *
 * @param x - The x position of the center of the ellipse. Default 0.
 * @param y - The y position of the center of the ellipse. Default 0.
 * @param width - The width of the ellipse. Default 0.
 * @param height - The height of the ellipse. Default 0.
 */
export class Ellipse {

    public x: number;
    public y: number;
    public width: number;
    public height: number;


    constructor(x: number = 0, y: number = 0, width: number = 0, height: number = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    /**
     * Check to see if the Ellipse contains the given x / y coordinates.
     */
    public contains(x: number, y: number): boolean {
        if (this.width <= 0 || this.height <= 0) return false;

        // Calculate the formula for checking if a point is inside an ellipse
        let normX = (x - this.x) / this.width;
        let normY = (y - this.y) / this.height;

        normX = normX ** 2;
        normY = normY ** 2;

        return (normX + normY) < 0.25;
    }

    /**
     * Sets the x, y, width and height of this ellipse.
     */
    public setTo(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        return this;
    }

    /**
     * Sets this Ellipse to be empty with a width and height of zero.
     */
    public setEmpty() {
        this.width = 0;
        this.height = 0;

        return this;
    }

    /**
     * Sets the position of this Ellipse.
     */
    public setPosition(x: number, y: number) {
        this.x = x;
        this.y = y;

        return this;
    }

    /**
     * Sets the size of this Ellipse.
     */
    public setSize(width: number, height: number = width) {
        this.width = width;
        this.height = height;

        return this;
    }

    /**
     * Checks to see if this Ellipse is empty (has a width or height equal to zero).
     */
    public isEmpty() {
        return (this.width <= 0) || (this.height <= 0);
    }


}
