const subhanallahDisplay = document.getElementById('Subhan-Allah-display');
const subhanallahIncrement = document.getElementById('Subhan-Allah-increments');
const subhanallahDecrement = document.getElementById('Subhan-Allah-decrement');

const alhamdulillihDisplay = document.getElementById('Alhamdulillah-display');
const alhamdulillihIncrement = document.getElementById('Alhamdulillah-increments');
const alhamdulilliDecrement = document.getElementById('Alhamdulillah-decrement');

const allahuAkbarDisplay = document.getElementById('Allahu-Akbar-display');
const allahuAkbarIncrement = document.getElementById('Allahu-Akbar-increments');
const allahuAkbarDecrement = document.getElementById('Allahu-Akbar-decrement');

const resetBtn = document.getElementById('reset-btn');

subhanAllahInishialValue = 0
alhamdulillahInishialValue = 0
allahuAkbarInishialValue = 0

// Subahnallah section 
subhanallahIncrement.addEventListener('click', function () {
    if (subhanAllahInishialValue === 33) {
        alert('SubhanAllah 33 is done if You want to more Subhanallah tasbih click ok button')
    }
    else if (subhanAllahInishialValue === 100) {
        return alert('SubhalAllah is complete so you move others Alhamdullish')
    }
    subhanAllahInishialValue += 1;
    subhanallahDisplay.innerText = subhanAllahInishialValue
})
subhanallahDecrement.addEventListener('click', function () {
    if (subhanAllahInishialValue === 0) {
        return alert('You cannot added nagetive value ')
    }
    subhanAllahInishialValue -= 1;
    subhanallahDisplay.innerText = subhanAllahInishialValue
})

// Alhamdulillah section 

alhamdulillihIncrement.addEventListener('click', function () {
    if (alhamdulillahInishialValue === 33) {
        alert('Alhamdullih 33 is done if You want to more Alhamdulillah tasbih click ok button')
    }
    else if (alhamdulillahInishialValue === 100) {
        return alert('Alhamdullaih is complete so you move to AllahuAkbar')
    }
    alhamdulillahInishialValue += 1;
    alhamdulillihDisplay.innerText = alhamdulillahInishialValue
})
alhamdulilliDecrement.addEventListener('click', function () {
    if (alhamdulillahInishialValue === 0) {
        return alert('You cannot added nagetive value ')
    }
    alhamdulillahInishialValue -= 1;
    alhamdulillihDisplay.innerText = alhamdulillahInishialValue
})

// allahuakbar section 

allahuAkbarIncrement.addEventListener('click', function () {
    if (allahuAkbarInishialValue === 33) {
        alert('AllahuAkbar 33 is done if You want to more read AllahuAkbar tasbih click ok button')
    }
    else if (allahuAkbarInishialValue === 100) {
        return alert('AllahuAkbar is complete so You can again read all tasbih press to reset button')
    }
    allahuAkbarInishialValue += 1;
    allahuAkbarDisplay.innerText = allahuAkbarInishialValue
})
allahuAkbarDecrement.addEventListener('click', function () {
    if (allahuAkbarInishialValue === 0) {
        return alert('You cannot added nagetive value ')
    }
    allahuAkbarInishialValue -= 1;
    allahuAkbarDisplay.innerText = alhamdulillahInishialValue
})

// reset button 

resetBtn.addEventListener('click', function () {
    subhanallahDisplay.innerText = 0;
    alhamdulillihDisplay.innerText = 0;
    allahuAkbarDisplay.innerText = 0;
    subhanAllahInishialValue = 0
    alhamdulillahInishialValue = 0
    allahuAkbarInishialValue = 0

})
