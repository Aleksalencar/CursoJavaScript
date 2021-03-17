for (let index = 1; index <= 10; index++) {
    showTabuada(index);
}

function showTabuada(value) {
    for (let multiplier = 1; multiplier <= 10; multiplier++) {
        let result = value * multiplier;
        console.log(value, "*", multiplier,"=",result);
    }
    console.log("---------------------------------------------------------------------------------");
}