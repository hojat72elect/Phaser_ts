import {Point} from "./Point.ts";

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
}
