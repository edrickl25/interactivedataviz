console.log('hello world');

const constlabel = document.getElementById("pet-label")
const inputlabel = document.getElementById("pet-input")
const buttonlabel = document.getElementById("pet-submit")

var moneyInitial = parseInt(inputlabel.value),
moneyCount = 0;

function petNameUpdate() {
    moneyInitial = parseInt(inputlabel.value) + 1
    console.log(moneyInitial)
    constlabel.innerText = "You have " + moneyInitial + " money"
    buttonlabel.innerText = "Produce more money!"
    document.getElementById("pet-input").value = moneyInitial
    //return moneyInitial = moneyInitial + 1
}