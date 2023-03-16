// Code your solution in this file!

const locationOfHq = 42;

function distanceFromHqInBlocks(pickupLocation){
    let numOfBlocks = Math.abs(pickupLocation - locationOfHq);
    return numOfBlocks;
}


function distanceFromHqInFeet(pickupLocation){
    let distance = distanceFromHqInBlocks(pickupLocation) * 264;
    return distance;
}

function distanceTravelledInBlocks(start, destination){
    let numOfBlocks = Math.abs(destination - start);
    return numOfBlocks;
}

function distanceTravelledInFeet(start, destination){
    let distance = distanceTravelledInBlocks(start, destination) * 264;
    return distance;
}

function calculatesFarePrice(start, destination){
    let countFeet = distanceTravelledInFeet(start, destination);
    let price = 0;
    if( countFeet <= 400){
        price = 0;
    }else if(countFeet > 400 && countFeet <= 2000){
        price = (countFeet -400) * 0.02;
    }else if(countFeet > 2000 && countFeet <= 2500){
        price = 25;
    }else {
        return 'cannot travel that far';
    }
    return price
}

