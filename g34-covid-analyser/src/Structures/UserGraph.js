class UserGraph {

    constructor(impX, impY) {
        this.x = impX;
        this.y = impY;
    }

    toString() {
        return `Block:
            X Axis: ${this.x}
            Y Axis: ${this.y}
        `
    }
}