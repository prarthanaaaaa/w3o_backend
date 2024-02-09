function suggestTransportation(weather) {
    let suggestion = '';

    if (weather === 'sunny') {
        suggestion = 'It\'s sunny. Consider using a bicycle or walking.';
    } else if (weather === 'rainy') {
        suggestion = 'It\'s rainy. Consider taking a car or using public transportation.';
    } else if (weather === 'windy') {
        suggestion = 'It\'s windy. Consider using public transportation or driving cautiously.';
    } else if (weather === 'snowy') {
        suggestion = 'It\'s snowy. Consider using a car or opting for public transportation if available.';
    } else {
        suggestion = 'Wrong input. Please enter a valid weather condition (sunny, rainy, windy, or snowy).';
    }

    return suggestion;
}

function main() {
    let weather = prompt('Enter the current weather condition (sunny, rainy, windy, snowy):');
    let recommendation = suggestTransportation(weather.toLowerCase()); // Convert input to lowercase for case-insensitivity
    console.log(recommendation);
}

main();
