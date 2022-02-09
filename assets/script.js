// First, tell us your name
let yourName = 'Clayton Burns' // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let totalcnt = 0 // Cookie Total

// selecting the quantity elements in the individual item table
let gbquant = document.querySelector('#qty-gb') // Gingerbread
let ccquant = document.querySelector('#qty-cc') // Chocolate Chip
let sugarquant = document.querySelector('#qty-sugar') // Sugar

// selecting the total quantity element
let totalquant = document.querySelector('#qty-total')

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the gingerbread +- elements
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
// selecting the chocolate chip +- elements
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
// selecting the sugar +- elements
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb++
    gbquant.textContent = gb
    totalcnt = totalcnt + 1
    totalquant.textContent = totalcnt
})

// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function() {
    if (gb > 0){
        gb--
        gbquant.textContent = gb
        totalcnt = totalcnt - 1
        totalquant.textContent = totalcnt
    }
})

// Event listener for clicks on the "+" button for Chocolate Chip cookies
ccPlusBtn.addEventListener('click', function() {
    cc++
    ccquant.textContent = cc
    totalcnt = totalcnt + 1
    totalquant.textContent = totalcnt
})

// Event listener for clicks on the "-" button for Chocolate Chip cookies
ccMinusBtn.addEventListener('click', function() {
    if (cc > 0) {
        cc--
        ccquant.textContent = cc
        totalcnt = totalcnt - 1
        totalquant.textContent = totalcnt
    }
})

// Event listener for clicks on the "+" button for Sugar cookies
sugarPlusBtn.addEventListener('click', function() {
    sugar++
    sugarquant.textContent = sugar
    totalcnt = totalcnt + 1
    totalquant.textContent = totalcnt
})

// Event listener for clicks on the "-" button for Sugar cookies
sugarMinusBtn.addEventListener('click', function() {
    if (sugar > 0) {
        sugar--
        sugarquant.textContent = sugar
        totalcnt = totalcnt - 1
        totalquant.textContent = totalcnt
    }
})


