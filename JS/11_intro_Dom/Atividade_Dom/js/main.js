console.log(document);
console.clear();
console.log(document.title);
console.log(document.section);
console.log(document.article);


document.title = 'Atividade Dom'; 

let section = document.createElement('section');
document.body.appendChild(section);  
let titulo1 = document.createElement('H1');
titulo1.innerHTML = 'Máquina em uso!';
section.appendChild(titulo1);
let paragrafo1 = document.createElement('p');
paragrafo1.innerHTML = 'Computador DELL';
section.appendChild(paragrafo1);

console.clear();

let article = document.createElement('article');
document.body.appendChild(article);
let texto1 = document.createElement('H1');
article.innerHTML = 'Componentes';
article.appendChild(texto1);
let paragrafo123 = document.createElement('p');
paragrafo123.innerHTML = 'Mouse e Teclado DELL';
article.appendChild(paragrafo123);


  


