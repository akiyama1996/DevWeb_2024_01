let matrix1=[
    [1,2,3],
    [4,5,6],
]
console.log('Antes');
console.log(matrix1);

//Alterando um valor do array
console.clear();
matrix1[0][2]= -10; 
console.log(`Depois:`);
console.log(matrix1);

console.clear();
let numArray= [1,2,3,4];
console.log(typeof numArray);

let numArray2 = numArray.toString();
console.log(typeof numArray2);

console.clear();
let teste1 = [0,1,2,3,4,5];
let teste2 = teste1.join(`***`);

console.log (teste2);
console.log (typeof teste2);

console.clear();
let array = [0,1,2,3,4];
console.log(array.length);

console.clear();
const frutas1 = [`Banana`,`Laraja`,`Maca`,`Manga`];
let x  = frutas1.pop();
console.log (frutas1);
console.log(x);
console.clear();
const frutas2=[`Banana`,`Laranja`,`Maçã`,`Manga`];
let y = frutas2.push(`kiwi`); 
console.log(frutas2);
console.log(y);

console.clear();
const frutas3 = [`Banana`,`Laranja`];
let z = frutas3.shift(); //z=Banana
console.log (frutas3);
console.log(z);

console.clear();
const frutas4 = [`Banana`,`Laranja`];
let w = frutas4.unshift(`Kiwi`); //w=3
console.log(frutas4);
console.log(w);

console.clear();
const frutas5 = [`Banana`,`Laranja`,`Maça`,`Manga`];
delete frutas5 [2];
console.log(frutas5);
