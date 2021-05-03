function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function diasMes() {
    let diasLista = document.querySelector('#days');
  
    for (let index = 0; index < dezDaysList.length; index += 1) {
      let dia = dezDaysList[index];
      let itensDias = document.createElement('li');//cria a lista
  
      if (dia === 24 | dia === 31) {
        itensDias.className = 'day holiday';//da um nome de classe pra lista
        itensDias.innerHTML = dia;//atribui o valor para o elemento da lista
        diasLista.appendChild(itensDias);// monta alista
      } else if (dia === 4 | dia === 11 | dia === 18) {
        itensDias.className = 'day friday';
        itensDias.innerHTML = dia;
        diasLista.appendChild(itensDias);
      } else if (dia === 25) {
        itensDias.className = 'day holiday friday';
        itensDias.innerHTML = dia;
        diasLista.appendChild(itensDias);
      } else {
        itensDias.innerHTML = dia;
        itensDias.className = 'day';
        diasLista.appendChild(itensDias);
      }
    };
  };
  diasMes();

  

  