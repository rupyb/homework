(function () {
    'use strict';

    function Vehicle(color) {
        this.color = color;
        this.speed = 0;
        this.go = function (mph = 0) {
            this.speed = mph;
            console.log(`now going at speed ${this.speed} mph`);
        };
        this.print = function () {
            console.log(`color: ${this.color}|| speed: ${this.speed}`);
        };
    }
    function Plane(color) {
        Vehicle.call(this, color);
        this.go = function (mph = 0) {
            this.speed = mph;
            console.log(`now flying at speed ${this.speed} mph`);
        };
    }
    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.constructor = Plane;

    const firstCar = new Vehicle('blue');
    firstCar.go(60);
    firstCar.print();

    const firstPlane = new Plane('red');
    firstPlane.go(160);
    firstPlane.print();

    class VehicleClass {
        constructor(color) {
            this.color = color;
            this.speed = 0;
        }

        go(mph = 0) {
            this.speed = mph;
            console.log(`now going at speed ${this.speed} mph`);
        }

        print() {
            console.log(`color: ${this.color}|| speed: ${this.speed}`);
        }
    }

    class PlaneClass extends VehicleClass {
        super(color) {
            this.color = color;
            this.speed = 0;
        }

        go(mph = 0) {
            this.speed = mph;
            console.log(`now flying at speed ${this.speed} mph`);
        }
    }

    const secondCar = new VehicleClass('blue');
    secondCar.go(45);
    secondCar.print();

    const secondPlane = new PlaneClass('red');
    secondPlane.go(250);
    secondPlane.print();
}());
