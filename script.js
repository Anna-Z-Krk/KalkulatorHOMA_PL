const insulinValue = document.querySelector('#insulin');
const glucoseValue = document.querySelector('#glucose');
const insulinUnit = document.querySelector('#insulin-unit');
const glucoseUnit = document.querySelector('#glucose-unit');
const btnReset = document.querySelector('.reset');
const btnCount = document.querySelector('.count');
const error = document.querySelector('.error');
const result = document.querySelector('.result');
const homaResult = document.querySelector('.homa-result');
const homaIndicator = document.querySelector('.homa-indicator');
let homaIr = (((insulinValue.value * glucoseValue.value)) / 22.5).toFixed(2);
const calculate = () => {
    if (insulinValue.value === "" | glucoseValue === "") {
        error.style.display = 'block';
        result.style.display = 'none'
    }
    else if (insulinUnit.selectedIndex === '1' && glucoseUnit.selectedIndex === '1') {
        homaIr = (((insulinValue.value * (glucoseValue.value / 18.02))) / 22.5).toFixed(2);
        error.style.display = 'none';
        result.style.display = 'block'

        homaResult.innerHTML = `${homaIr}`;
    }
    else if (insulinUnit.selectedIndex == '1' && glucoseUnit.selectedIndex == '2') {
        homaIr = (((insulinValue.value * glucoseValue.value)) / 22.5).toFixed(2);
        result.style.display = 'block'
        error.style.display = 'none';
        homaResult.innerHTML = `${homaIr}`;
    }
    else if (insulinUnit.selectedIndex == '2' && glucoseUnit.selectedIndex == '1' ) {
        homaIr = ((((insulinValue.value * 1000) * (glucoseValue.value / 18.02))) / 22.5).toFixed(2);   
        result.style.display = 'block'
        error.style.display = 'none';
        homaResult.innerHTML = `${homaIr}`;
    }
    else if (insulinUnit.selectedIndex == '2' && glucoseUnit.selectedIndex == '2') {
        homaIr = ((((insulinValue.value * 1000) * glucoseValue.value)) / 22.5).toFixed(2);   
        result.style.display = 'block'
        error.style.display = 'none';
        homaResult.innerHTML = `${homaIr}`;
    }

    else if (insulinUnit.selectedIndex == '3' && glucoseUnit.selectedIndex == '1') {
        homaIr = (((insulinValue.value / 6.945) * (glucoseValue.value / 18.02)) / 22.5).toFixed(2);
        result.style.display = 'block'
        error.style.display = 'none';
        homaResult.innerHTML = `${homaIr}`;
    }
    else
    // else (insulinUnit.selectedIndex == '3' && glucoseUnit.selectedIndex == '2' ) {
        {homaIr = ((((insulinValue.value / 6.945) * glucoseValue.value)) / 22.5).toFixed(2);   
        result.style.display = 'block'
        error.style.display = 'none';
        homaResult.innerHTML = `${homaIr}`;
    }
    const homaIndicatorResult = () => {
        if (homaIr > 2) {
            homaIndicator.style.color = 'crimson'
            homaIndicator.innerHTML = `Twój wynik jest większy od 2. Może oznaczać insulinooporność.`;
        } else {
            homaIndicator.style.color = 'green'
            homaIndicator.innerHTML = `Twój wynik jest prawidłowy.`;
        }
}
    homaIndicatorResult()
}



const reset = () => {
    error.style.display = 'none';
    result.style.display = 'none';
    insulinValue.value = ''
    glucoseValue.value = ''
    glucoseUnit.selectedIndex = '1'
    insulinUnit.selectedIndex = '1'
    homaIndicator.innerHTML = ''
}
    btnCount.addEventListener('click', calculate);
    btnReset.addEventListener('click', reset);