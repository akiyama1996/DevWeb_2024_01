//Estrutura Simples de IF
const a =10
if (a==10){
    console.log('a é 10');
}
const b ='10';
if(b==10){
    console.log('b é 10');
}
console.clear();
const c=10;
if(c===10)
console.log('c é 10');

const d ='10';
if (d===10){
    console.log('b é 10');
}
console.log('Estou fora do if que se compara string');

console.clear();
const e = '10';
if (e===10) console.log('e é o número 10');

else{
    console.log ('Resultado da condição: ${e===10}');
    console.log ('e não é numeral');
}
console.clear();
const f = 4;
const g1 = 11;

if (f>5 ||g1>10){
    console.log ('Condição é $ {f>5 || g1>10}');
    console.log ('f é maior que 5 ou g1 é maior que 10');}

    else {

    console.log ('f não é maior que 5 ou g1 é maior que 10');}



    if (f >5 && g1 > 10) console.log ('f é maior que 5 e g1 é maior que 10');

    else {
        console.log ('Condição é $ {f> 5 && g1> 10}');
        console.log ('f não é maior que 5 ou g1 é não maior que 10');}

        console.clear();
        const num = 'Ola';

        const g =11;

        if (num % 2 == 0 && !isNam(num))
        console.log ('Número par');

        else 
         if (num % 2 !=0 && !isNam(num))
        console.log ('Número ímpar');
        
        else 
        console.log ('Não é um número');

        console.clear();
        let resultado =3>4 
        console.log('resultado')
        
