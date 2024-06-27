const funcionarios = [
    {
        Nome: 'Rafael', Salario: 4800, },
    {
        Nome: 'Luis', Salario: 5200,
    },
    {
        Nome: 'WGustavo', Salario: 3900,
    },
    {
        Nome: 'Pedro', Salario: 4500,
    },
    {
        Nome: 'Ailton', Salario: 5000,
    },
  ];
  
  funcionarios.forEach((funcionario) => console.log(funcionario));
  
  const funcionariosComAumento = funcionarios.map((funcionario) => {
    return {
        Nome: funcionario.Nome,
        Salario: funcionario.Salario * 1.05 // Aumento de 5%
    };
  });
  
  console.log(funcionariosComAumento);
  
  let filtroSalario = funcionariosComAumento.filter((filtro) => {
    return filtro <= 5000;
  });
  
  console.log(filtroSalario);
  