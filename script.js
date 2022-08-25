const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")
const convertBtn = document.getElementById("convert-btn")
// 1 meter = 3.281 feet
// 1 foot = 0.305 meters
const oneMeterToFeet = 3.281
const oneFootToMeters = 0.305
// 1 liter = 0.22 gallon
// 1 gallon = 3.785 liters
const oneLiterToGallon = 0.22
const oneGallonToLiters = 3.785
// 1 kilogram = 2.204 pound
// 1 pound = 0.454 kilogram
const oneKiloToPound = 2.205
const onePoundToKilo = 0.454


convertBtn.addEventListener("click", function(){
    let inputValue = document.getElementById("input-val").value; 
    //meters so many feet and vice versa
    let meterToFeet = (inputValue * oneMeterToFeet).toFixed(3)
    let FeetToMeter = (inputValue * oneFootToMeters).toFixed(3)
    lengthP.innerHTML = `${inputValue} meters = ${meterToFeet} feet | ${inputValue} feet = ${FeetToMeter} meters `; 
    
    //liters so many gallons and vice versa
    let literToGallons = (inputValue * oneLiterToGallon).toFixed(3)
    let  gallonsToLiter= (inputValue * oneGallonToLiters).toFixed(3)
    volumeP.innerHTML = `${inputValue} liters = ${literToGallons} gallons | ${inputValue} gallons = ${gallonsToLiter} liters `; 

    //kilo(s) so many pounds and vice versa
    let kilosToPounds = (inputValue * oneKiloToPound).toFixed(3)
    let poundsToKilos = (inputValue * onePoundToKilo).toFixed(3)
    massP.innerHTML = `${inputValue} kilograms = ${kilosToPounds} pounds | ${inputValue} pounds = ${poundsToKilos} kilograms `; 

    })



