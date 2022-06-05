// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides;
        this.count = sides.elngth;
    }

    get countsides(){
        return this.sides.length
    }

    get perimeter(){
        const sum = this.sides.reduce((partialSum,a) => partialSum +a,0);

        return sum;
    }
}

class Triangle extends Polygon{
    get isValid(){
        if(this.count !== 3) return;

        let side1 = this.side[0];
        let side2 = this.side[1];
        let side3 = this.side[2];

        return ((side1+side2>side3) && (side1+side3>side2) && (side2+side3>side1));

    }
}

class Square extends Polygon{
    get isValid(){


        if(this.count !== 4) return;

        let side1 = this.side[0];
        let side2 = this.side[1];
        let side3 = this.side[2];
        let side4 = this.side[3];

        return((side1 === side2) && (side1 === side3) && (side1 === side4));


    }

    get return(){
        return this.side[0]**2
    }
}

let triangle

// Test Line