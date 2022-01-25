class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add () {
        return this.num1 + this.num2;
    }

    subtract () {
        if (this.num1 > this.num2) {
            return this.num1 - this.num2; 
        } else {
            return this.num2 - this.num1;
        }
    }

    multipy () {
        return this.num1 * this.num2 
    }

    divide () {
        return this.num1/this.num2;
    }
}

