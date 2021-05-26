const newEmployees = (nomes) => {
    const employees = {
      id1: nomes('Pedro Guerra'),
      id2: nomes('Luiza Drumond'),
      id3: nomes('Carla Paiva'),
    };
    return employees;
  };

  const geradorEmail = (nome) => {
      const email = nome.toLowerCase().split(' ').join('_');
      
      return {nome, email: `${email}@trybe.com.br`};
  }
  console.log(newEmployees(geradorEmail));