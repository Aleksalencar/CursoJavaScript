// Booleans

var flag = true;
if (flag === true){
    console.log("flag é verdadeira");    
}else{
    console.log("flag é falsa"); 
}

flag = false;
if (flag){
    console.log("flag é verdadeira");    
}else{
    console.log("flag é falsa");    
}


// comparaçoes
console.log("10 > 1 " + 10 > 1);
console.log(10 < 1);
console.log(10 >= 10);
console.log(10 == 10);
console.log(flag === false);
console.log(10 != 10);

// Operadores logicos
var num = 10;
flag = true;
if(num == 10 && flag === true){ // and 
    console.log("top");

}

if(num != 10 || flag === true){ // or
    console.log("top 2");

}

flag = false;
if (!flag){ // not
    console.log("top 3");
}

// Ternários
console.log(true ? 1 : 2);

console.log(false ? 'verdadeiro' : 'falso');

flag = true;
console.log(flag ? 'verdadeiro' : 'falso');

// Conversão automatico (WTF)
console.log(5 * null); // 0
console.log("5" - 3); // 2
console.log("5" + 1); // 51
console.log("dois" * "três"); // NaN
