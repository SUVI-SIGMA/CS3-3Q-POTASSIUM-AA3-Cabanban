function checkMessage() {
    let message = prompt("Enter a message: ");

    let hasFR = message.includes("FR") || message.includes("fr");
    let hasAI = message.includes("AI") || message.includes("ai");
    let hasMixedAI = message.includes("aI") || message.includes("Ai");

    if (hasFR && hasAI) {
        document.getElementById('result').innerHTML = `The message, "${message}" is legitimate!`;
    } 
    else if (hasMixedAI || hasAI) {
        document.getElementById('result').innerHTML = `The message, "${message}" is fake!`;
    } 
    else if (hasFR) {
        document.getElementById('result').innerHTML = `The message, "${message}" is legitimate!`;
    } 
    else if (hasAI) {
        document.getElementById('result').innerHTML = `The message, "${message}" is tampered with!`;
    } 
    else {
        document.getElementById('result').innerHTML = `The message, "${message}" is yet to be encoded with!`;
    }
}