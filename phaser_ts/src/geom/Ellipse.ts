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
}
