function addNums(num1=1, num2=2){
    return num1 + num2;

}

//chamada a função addNums
let x = addNums(4,5);
console.log(x);

//chamada a função myFunc antes da declaração da função
let z = myFunc (4,5);
console.log(z);
function myFunc (num1, num2){
    return num1 * num2;
}

const hello =() => {
    return 'Óla Arrow Function!';
};

//Exemplo usando versão da addNums:

const addNums2= (num1=1,num2=1) => {
    return num1 = num2;
};
console.log(hello()); //executa a função e imprime a string no return

console.clear();
const addNums3 = (num1=1,num2=2) => {
    return num1 + num2;
};
let soma = addNums3 (5,10);
console.log(soma);