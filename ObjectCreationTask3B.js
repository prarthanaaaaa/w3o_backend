function Vehicle(make, model, productionYear, totalDistance, paintColor, isBrandNew) {
    this.make = make;
    this.model = model;
    this.productionYear = productionYear;
    this.totalDistance = totalDistance;
    this.paintColor = paintColor;
    this.isBrandNew = isBrandNew;

    this.showDetails = function () {
        console.log(`Make: ${this.make}, Model: ${this.model},
           Year: ${this.productionYear}, Mileage: ${this.totalDistance} miles, 
           Color: ${this.paintColor}, isBrandNew: ${this.isBrandNew}`);
    }

    this.updateTotalDistance = function (newDistance) {
        if (typeof newDistance === 'number' && newDistance > 0) {
            this.totalDistance = newDistance;
            console.log(`Total distance updated to ${this.totalDistance} miles`);
        } else {
            console.log(`Invalid input for distance`);
        }
    };

    this.checkSpeed = function (currentSpeed) {
        if (typeof currentSpeed === 'number' && currentSpeed >= 0) {
            if (currentSpeed > 100)
                console.log(`Exceeding speed limit`);
            else
                console.log(`Within speed limit`);
        }
    };

    this.getUserInput = function (property) {
        return prompt(`Enter the ${property}:`);
    }
}

let vehicle1 = new Vehicle();

let make = vehicle1.getUserInput('make');
let model = vehicle1.getUserInput('model');
let productionYear = vehicle1.getUserInput('production year');
let totalDistance = vehicle1.getUserInput('total mileage');
let isBrandNew = vehicle1.getUserInput('isNew');
let paintColor = vehicle1.getUserInput('paint color');

vehicle1 = new Vehicle(make, model, productionYear, totalDistance, paintColor, isBrandNew);
vehicle1.showDetails();

let newDistance = parseInt(vehicle1.getUserInput('new total mileage'));
vehicle1.updateTotalDistance(newDistance);
vehicle1.showDetails();

let currentSpeed = parseInt(vehicle1.getUserInput('current speed'));
vehicle1.checkSpeed(currentSpeed);
