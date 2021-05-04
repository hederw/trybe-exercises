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
  
  //EX1
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

  //EX2
  function button(param){
    let botaoCont = document.querySelector(".buttons-container" );//seleciona a classe da div
    let botao = document.createElement('button');// cria o botão

    botao.innerHTML = param;
    botao.id = 'btn-feriado';
    botaoCont.appendChild(botao);//cria o botao como filha da div que foi selecionada
  };

  button('Feriado');

  //EX3

  function eventoBotao(){
    let botaoFeriado = document.querySelector('#btn-feriado');
    let todosFeriados = document.querySelectorAll('.holiday');

    botaoFeriado.addEventListener('click', function(){

      for (let index = 0; index < todosFeriados.length; index += 1){
        if(todosFeriados[index].style.backgroundColor === 'white'){
          todosFeriados[index].style.backgroundColor = 'rgb(238,238,238)';
        }else{
          todosFeriados[index].style.backgroundColor = 'white';

        }
      }
    })
  };
  eventoBotao();

  //EX4

  function buttonSexta(param){
    let botaoCont = document.querySelector(".buttons-container" );//seleciona a classe da div
    let botao = document.createElement('button');// cria o botão

    botao.innerHTML = param;
    botao.id = 'btn-friday';
    botaoCont.appendChild(botao);
  };
  buttonSexta('Sexta-feira');

  //EX5

  function eventoBotaoSexta(){
    let botaoFeriado = document.querySelector('#btn-friday');
    let todosFeriados = document.querySelectorAll('.friday');
    let dezFridays = [ 4, 11, 18, 25 ];

    botaoFeriado.addEventListener('click', function(){

      for (let index = 0; index < todosFeriados.length; index += 1){
        if(todosFeriados[index].innerHTML!== 'SEXTOU'){
          
          todosFeriados[index].innerHTML = 'SEXTOU';
        }else{
          
          todosFeriados[index].innerHTML = dezFridays[index];


        }
      }
    })
  };
  eventoBotaoSexta();

  //EX6

  function dayMouseOver() {
    let days = document.querySelector('#days');//seleciona a id
    //cria um evento para a id selecionada
    //com o mouse encima aumenta a fonte
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  };
  
  function dayMouseOut() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
  
  dayMouseOver();
  dayMouseOut();

  //EX7
  function newTaskSpan(task) {

    let tasksContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');
  
    taskName.innerHTML = task;
    tasksContainer.appendChild(taskName);
  };
  
  newTaskSpan('Projeto:');

  //EX8
  function newTaskDiv(color) {

    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');
  
    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask);
  };
  
  newTaskDiv('green');

  //EX9
  function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
  
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };
  
  setTaskClass();

  //EX10
  function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();