//继承
class People {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    sum() {
        console.log(this.x + this.y);
    }
}

class Son extends People {
    constructor(x, y) {
        super(x, y);
    }

}

new Son(1, 2).sum()