function checkSpeed(speed) {
    if (speed < 70) {
        console.log('Ok');
    } else {
        const points = Math.floor((speed - 70) / 5);
        if (points > 12) {
            console.log('License suspended');
        } else {
            console.log(`Points: ${points}`);
        }
    }
}

// Example usage:
const speed = parseInt(prompt("Enter the car's speed: "), 10);
checkSpeed(speed);
