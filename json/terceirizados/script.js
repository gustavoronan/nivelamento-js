const dados = [
    {
      nome: "Maria Silva",
      valorHora: 80.0,
      horasTrabalhadas: 20,
      terceirizado: true,
    },
    {
      nome: "João Rocha",
      valorHora: 60.0,
      horasTrabalhadas: 25,
      terceirizado: false,
    },
    {
      nome: "Tiago James",
      valorHora: 80.0,
      horasTrabalhadas: 10,
      terceirizado: true,
    },
    {
      nome: "Ana Carla",
      valorHora: 70.0,
      horasTrabalhadas: 40,
      terceirizado: true,
    },
    {
      nome: "Pedro Paulo",
      valorHora: 50.0,
      horasTrabalhadas: 25,
      terceirizado: false,
    },
  ];
  
  //---------------------------------------------------------------------------
  // FUNCAO funcionariosTerceirizados
  // Parâmetros:
  //   list: lista de funcionarios
  // Efeito: retorna uma lista contendo somente os funcionários terceirizados
  //---------------------------------------------------------------------------
  
  function funcionariosTerceirizados(list) {
    const result = [] //criando uma lista vazia

    for (let i = 0; i< list.length; i++){ //percorrendo todos os funcionarios da lista 
        if (list[i].terceirizado) //verificando se a propriedade terceirizado é true
        result.push(list[i])//se sim, adiciona a lista result
    }

    return result //retorna a lista de result preenchida com funcionarios terceirizados
  }
  
  //---------------------------------------------------------------------------
  // FUNCAO custoTotal
  // Parâmetros:
  //   list: lista de funcionarios
  // Efeito: retorna um número representando o custo total dos funcionários
  //---------------------------------------------------------------------------
  
  function custoTotal(list) {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
      const subTotal = list[i].valorHora * list[i].horasTrabalhadas; //calculando o subtotal de cada funcionario
      total = total + subTotal; //adicionando o subtotal ao total
    }
    return total; //retornando o valor final
  }
  
  //---------------------------------------------------------------------------
  // SCRIPT PRINCIPAL
  //---------------------------------------------------------------------------
  
  const terceirizados = funcionariosTerceirizados(dados); //retorno dos funcionarios terceirizados
  
  const custoTerceirizados = custoTotal(terceirizados); //custo total apenas dos funcionarios terceirizados
  
  console.log(
    "Custo total dos funcionarios terceirizados: R$ " + custoTerceirizados
  );