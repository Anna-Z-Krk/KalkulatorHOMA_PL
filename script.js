/* https://dietetyczny.guru/przelicznik-jednostek-glukozy/
insulina 
6,945µU/ml = pmol/l
1µIU/mL = 0,001mIU/mL
1mIU/L = 0,001mIU/mL
Glukoza
(mg/dl)x0,05551=(mmol/l)
(mmol/l)x18,02=(mg/dl)
HOMA: 
insulinemia na czczo (w mIU/l) × glikemia na czczo (w mmol/l) / 22,5
(insulina na czczo mU/ml x glikemia na czczo (mmol/l))/ 22,5
*/
const insulinValue = document.querySelector('#insulin');
const glucoseValue = document.querySelector('#glucose');
const insulinUnit = document.querySelector('#insulin-unit');
const glucoseUnit = document.querySelector('#glucose-unit');
const btnReset = document.querySelector('.reset');
const btnCount = document.querySelector('.count');
const error = document.querySelector('.error');
const resultPanel = document.querySelector('.result');
const homaResult = document.querySelector('.homa-result');
const homaIndicator = document.querySelector('.homa-indicator');
let HOMA;
const calculate = () => {
    
    if (insulinValue.value === '' || glucoseValue.value === '') {
        error.style.display = 'block'
        // homaResult.style.display = 'none';
    }
    if (insulinUnit.selectedIndex == '1' && glucoseUnit.selectedIndex == '1' ) {
        HOMA = (((insulinValue.value * (glucoseValue.value / 18.02))) / 22.5).toFixed(2);   
         
      
    }
    if (insulinUnit.selectedIndex == '1' && glucoseUnit.selectedIndex == '2') {
        HOMA = (((insulinValue.value * glucoseValue.value)) / 22.5).toFixed(2);   
        
    }
    if (insulinUnit.selectedIndex == '2' && glucoseUnit.selectedIndex == '1' ) {
        HOMA = ((((insulinValue.value * 1000) * (glucoseValue.value / 18.02))) / 22.5).toFixed(2);   
       
    }
    if (insulinUnit.selectedIndex == '2' && glucoseUnit.selectedIndex == '2') {
        HOMA = ((((insulinValue.value * 1000) * glucoseValue.value)) / 22.5).toFixed(2);   
        
    }

    if (insulinUnit.selectedIndex == '3' && glucoseUnit.selectedIndex == '1') {
        HOMA = (((insulinValue.value / 6.945) * (glucoseValue.value / 18.02)) / 22.5).toFixed(2);
        
    }
    if (insulinUnit.selectedIndex == '3' && glucoseUnit.selectedIndex == '2' ) {
        HOMA = ((((insulinValue.value / 6.945) * glucoseValue.value)) / 22.5).toFixed(2);   
        
    }

    else {
        resultPanel.style.display = 'block';
        homaResult.innerHTML = `${HOMA}`; 
        const homaIndicatorResult = () => {
            if (HOMA > 2) {
                homaIndicator.style.color = 'crimson'
                homaIndicator.innerHTML = `Twój wynik jest większy od 2. Może oznaczać insulinooporność.`;
            } else {
                homaIndicator.style.color = 'green'
                homaIndicator.innerHTML = `Twój wynik jest prawidłowy.`;
            }
        }
        homaIndicatorResult()
    }
   
    }


    



const reset = () => {
    error.style.display = 'none';
    resultPanel.style.display = 'none';
    insulinValue.value = ''
    glucoseValue.value = ''
    glucoseUnit.selectedIndex = '1'
    insulinUnit.selectedIndex = '1'
    homaIndicator.innerHTML = ''
}

    btnCount.addEventListener('click', calculate);
    btnReset.addEventListener('click', reset);