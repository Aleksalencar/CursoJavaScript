let res = sumOf(2, 2);
console.log("Some de 2 + 2 =", res);

let numArray = [73, 26, 91, 4, -1];
let greatNum = getGreaterNum(numArray);
console.log(numArray);
console.log("Maior valor é:", greatNum);

function sumOf(val1, val2) {
    return val1 + val2;
}

function getGreaterNum(numArray) {
    let greater = 0;
    numArray.forEach(num => {
        if (num > greater) {
            greater = num;
        }
    });
    return greater
}