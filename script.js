let numberofDice ;
function openInput() {
    numberofDice = parseInt(prompt('Gimme a number of Dice Guys'))
    if(isNaN(numberofDice) || numberofDice <= 0) {
        alert("Plaese only number and >1 please")
        return}
    document.getElementById("current-num-dice").innerHTML = `Current Number of Dice:     ` + '   '  + numberofDice
    console.log('end', numberofDice)
   
}



function rollDice() {

    let randomNumber = 1+ Math.floor(Math.random() * 6)
    console.log('randomNumber', randomNumber)
    let numbers = []
    console.log(numbers)
    let total = 0 
    document.getElementById("current-num-dice").innerHTML = `Current Number of Dice: ` + numberofDice
    for (var i = 0; i < numberofDice; i++) {
        let newNumber = 1+ Math.floor(Math.random() * 6)
                
        console.log('newNumber', newNumber)
        numbers.push(newNumber)
        total += newNumber
    }
    console.log('total', total)
    console.log('numbers', numbers)
    document.getElementById("output").innerHTML =  numbers
    document.getElementById("score").innerHTML =  total

}
