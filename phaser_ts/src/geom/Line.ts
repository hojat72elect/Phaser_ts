import {Point} from "./Point.ts";
import type {Vector2Like} from "../types/math/Vector2Like.ts";

/**
 * Defines a Line segment, a part of a line between two endpoints.
 */
export class Line {
    public x1: number;
    public y1: number;
    public x2: number;
    public y2: number;

    constructor(x1: number = 0, y1: number = 0, x2: number = 0, y2: number = 0) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    public length() {
        const dx = this.x1 - this.x2;
        const dy = this.y1 - this.y2;

        return Math.sqrt(dx ** 2 + dy ** 2);
    }

    /**
     * Calculate the angle of the line in radians.
     */
    public angle() {
        return Math.atan2(this.y2 - this.y1, this.x2 - this.x1);
    }

    /**
     * Centers this line on the given coordinates.
     */
    public centerOn(x: number, y: number) {
        const tx = x - ((this.x1 + this.x2) / 2);
        const ty = y - ((this.y1 + this.y2) / 2);

        this.x1 += tx;
        this.y1 += ty;
        this.x2 += tx;
        this.y2 += ty;

        return this;
    }

    /**
     * Make a clone out of the current line.
     * the resulting line wouldn't have any references to the current one, it will just be a deep copy.
     */
    public clone() {
        return new Line(this.x1, this.y1, this.x2, this.y2);
    }

    /**
     * Get a point on a line that's a given percentage along its length.
     */
    public getPoints(quantity: number, stepRate: number) {
        const output: Point[] = [];

        if (quantity <= 0) {
            // Then we calculate it based on the stepRate instead.
            quantity = this.length() / stepRate;
        }

        for (let i = 0; i < quantity; i++) {
            const position = i / quantity;
            const x = this.x1 + (this.x2 - this.x1) * position;
            const y = this.y1 + (this.y2 - this.y1) * position;

            output.push(new Point(x, y))
        }

        return output;
    }

    /**
     * Set new coordinates for the line endpoints.
     */
    public setTo(x1: number = 0, y1: number = 0, x2: number = 0, y2: number = 0) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;

        return this;
    }

    /**
     * Sets this Line to match the x/y coordinates of the two given Vector2Like objects.
     */
    setFromObjects(start: Vector2Like, end: Vector2Like) {
        this.x1 = start.x;
        this.y1 = start.y;
        this.x2 = end.x;
        this.y2 = end.y;

        return this;
    }

    /**
     * Get the left position of the Line.
     */
    public getLeft() {
        return Math.min(this.x1, this.x2);
    }

    /**
     * Set the left position of the Line.
     */
    public setLeft(value: number) {
        if (this.x1 <= this.x2) {
            this.x1 = value;
        } else {
            this.x2 = value;
        }
    }

    /**
     * Get the right position of the Line.
     */
    public getRight() {
        return Math.max(this.x1, this.x2);
    }

    /**
     * Set the right position of the Line.
     */
    public setRight(value: number) {
        if (this.x1 > this.x2) {
            this.x1 = value;
        } else {
            this.x2 = value;
        }
    }

    /**
     * Get the top position of the line.
     */
    public getTop() {
        return Math.min(this.y1, this.y2);
    }

    /**
     * Set the top position of the line.
     */
    public setTop(value: number) {
        if (this.y1 <= this.y2) {
            this.y1 = value;
        } else {
            this.y2 = value;
        }
    }

    /**
     * Get the bottom position of the line.
     */
    public getBottom() {
        return Math.max(this.y1, this.y2);
    }

    /**
     * Set the bottom position of the line.
     */
    public setBottom(value: number) {
        if (this.y1 > this.y2) {
            this.y1 = value;
        } else {
            this.y2 = value;
        }
    }

    /**
     * Extends the start and end points of a Line by the given amounts.
     * The amounts can be positive or negative. Positive points will increase
     * the length of the line, while negative ones will decrease it.
     *
     * If no `right` value is provided it will extend the length of the line equally
     * in both directions.
     *
     * Pass a value of zero to leave the start or end point unchanged.
     */
    public extend(left: number, right?: number) {
        if (!right) right = left;

        const length = this.length();

        if (length === 0) return this;

        const slopX = this.x2 - this.x1;
        const slopY = this.y2 - this.y1;

        if (left !== 0) {
            this.x1 = this.x1 - (slopX / length) * left;
            this.y1 = this.y1 - (slopY / length) * left;
        }

        if (right !== 0) {
            this.x2 = this.x2 + (slopX / length) * right;
            this.y2 = this.y2 + (slopY / length) * right;
        }

        return this;
    }
}
