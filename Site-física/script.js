let EletrodomesticoInput = document.getElementById("Eletrodomestico");
var TempoInput = document.querySelector("#Tempo");
var potenciaInput = document.querySelector("#Potencia");
var TipoTempo = document.querySelector('#tipoHorario');

let energia = ((TempoInput.value * 30) / 60) * potenciaInput.value;

let tabelasContador = 0;

const calculaEnergia = [];

var valorTotal = 0;


function adicionar(valorTotal) {

  if (EletrodomesticoInput.value.length <= 0) {
    alert('Coloque um valor em "Eletrodomestico"')
  }

  else if (potenciaInput.value.length <= 0) {
    alert('Coloque um valor em "Potencia"')
  }

  else if (TempoInput.value.length <= 0) {
    alert('Coloque um valor em "Tempo"')
  }
  else {

    tabelasContador += 1;

    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    const row10 = document.createElement('tr');
    const criaTda = document.createElement('hr');
    row10.appendChild(criaTda);

    const row1 = document.createElement('tr');
    const criaTd = document.createElement('td');
    criaTd.textContent = "Eletrodosmetico: ";
    const criaTd_2 = document.createElement('td');
    criaTd_2.textContent = EletrodomesticoInput.value;
    row1.appendChild(criaTd);
    row1.appendChild(criaTd_2);


    const row2 = document.createElement('tr');
    const criaTd2 = document.createElement('td');
    criaTd2.textContent = "Potencia: ";
    const criaTd_3 = document.createElement('td');
    criaTd_3.textContent = potenciaInput.value;
    row2.appendChild(criaTd2);
    row2.appendChild(criaTd_3);


    const row3 = document.createElement('tr');
    const criaTd3 = document.createElement('td');
    criaTd3.textContent = "tempo: ";
    const criaTd_4 = document.createElement('td');
    criaTd_4.textContent = ((TempoInput.value * 30) / 60) + " Horas no mês";
    row3.appendChild(criaTd3);
    row3.appendChild(criaTd_4);

    energia = ((TempoInput.value * 30) / 60) * (potenciaInput.value / 1000);

    console.log(energia);

    const row4 = document.createElement('tr');
    const criaTd4 = document.createElement('td');
    criaTd4.textContent = "Calculo: ";
    const criaTd_5 = document.createElement('td');
    criaTd_5.textContent = energia + "Kwh";
    row4.appendChild(criaTd4);
    row4.appendChild(criaTd_5);



    const row5 = document.createElement('tr');
    const criaTd5 = document.createElement('td');
    criaTd5.textContent = "Preço fim do mês: ";
    const criaTd_6 = document.createElement('td');
    criaTd_6.textContent = "R$" + (energia * 0.70);
    row5.appendChild(criaTd5);
    row5.appendChild(criaTd_6);

    tbody.appendChild(row1)
    tbody.appendChild(row2)
    tbody.appendChild(row3)
    tbody.appendChild(row4)
    tbody.appendChild(row5)
    tbody.appendChild(row10)

    table.appendChild(tbody)
    document.body.appendChild(table)

    calculaEnergia.push(energia);

    var limpaLista = document.querySelectorAll("input");
    for (let i = 0; i < limpaLista.length; i++) {

      limpaLista[i].value = "";
    }
  }
}

function calculoValorTotal() {
  for (i = 0; i < calculaEnergia.length; i++) {
    valorTotal += energia;
  }
  return valorTotal;
}

function calcular() {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  const row10 = document.createElement('tr');
  const criaTda = document.createElement('hr');
  row10.appendChild(criaTda);

  const row6 = document.createElement('tr');
  const criaTd6 = document.createElement('td');
  criaTd6.textContent = "Preço Total Do Fim Do Mês: ";
  const criaTd_7 = document.createElement('td');
  criaTd_7.textContent = "R$" + (calculoValorTotal() * 0.70);
  row6.appendChild(criaTd6);
  row6.appendChild(criaTd_7);

  tbody.appendChild(row6)
  tbody.appendChild(row10)
  table.appendChild(tbody)
  document.body.appendChild(table)

}