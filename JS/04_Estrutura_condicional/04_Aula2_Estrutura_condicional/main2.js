// Array é caracterizado pelo Colchete []

console.clear();
        const num = 'Ola';

        const g =11;

        if (num % 2 == 0 && !isNaN(num))
        console.log ('Número par');

        else 
         if (num % 2 !=0 && !isNaN(num))
        console.log ('Número ímpar');
        
        else 
        console.log ('Não é um número');

        console.clear();
        let resultado =3>4; 
        console.log('resultado');

        const num1 = new Array(30,-1,5,3,121);
        const num2 = [-2,40,16,111,33,164];

        console.log(num1);
        console.log(num2);

        //Acessando elementos diversos do array:
        console.log(`primeiro elemento de num1:${num1[0]}`);
        console.log(`primeiro elemento de num2:${num2[0]}`);

        console.log(`primeiro elemento de num1:${num1[2]}`);
        console.log(`primeiro elemento de num2:${num2[5]}`);

        console.clear();
        const matrix=[

                ['banana','maça','Pêra'],
        ['Laranja',true,1],
        [null,'Uva',-350]

        ];

        console.log(`Acessa a primeira linha:${matrix[0]}`);
        console.log(`acessa a primeira lina:${matrix[0][0]}`);