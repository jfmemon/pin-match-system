// for creating random pin within 4 digits
function generatePin() {
    const randomPin = Math.round(Math.random()*10000);
    return randomPin;
}

// for getting 4 digit all time
function getPin() {
    const pin = generatePin();
    const getPinString = pin + '';
    if(getPinString.length == 4) {
        return pin;
    }else{
        return getPin();
    }
}

document.getElementById('generate-pin-button').addEventListener('click', function() {
    const displayPin = document.getElementById('display-pin');
    displayPin.value = getPin();
})


document.getElementById('calculator').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number == 'C'){
            typedNumberField.value = '';
        }else if(number === '<'){
            const previousNumbers = previousTypedNumber.split("");   // convert into an array
            previousNumbers.pop();
            const remainingNumbers = previousNumbers.join("");   // convert into a string
            typedNumberField.value = remainingNumbers;
        }
    }else{
        const newTypedNumber = previousTypedNumber + number; //at start point previousTypedNumber = '' & number = clicked digit
        typedNumberField.value = newTypedNumber;
    }
});


document.getElementById('verify-button').addEventListener('click', function() {
    const generatedPin = document.getElementById('display-pin');
    const typedPin = document.getElementById('typed-numbers');
    const matchedPin = document.getElementById('matched-pin');
    const wrongPin = document.getElementById('wrong-pin');
    if(generatedPin.value == typedPin.value) {
        // console.log('They are same.');
        matchedPin.style.display = 'block';
        wrongPin.style.display = 'none';
        
    }else{
        wrongPin.style.display = 'block';
        matchedPin.style.display = 'none';

    }
})