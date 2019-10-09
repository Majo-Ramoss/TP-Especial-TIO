
let tableData = [
    {"especie": "Cobaya", "logevidad": "5-8 años", "dificultad": "Intermedia"},
    {"especie": "Hamster", "logevidad": "1-3 años", "dificultad": "Baja"},
    {"especie": "Rata", "logevidad": "1-3 años", "dificultad": "Intermedia"}
];

let generateTable = () => {
    let table = document.querySelector('#speciesTable-js');
    table.innerHTML = ''
    let row = table.insertRow();
      let especie = row.insertCell();
      let longevidad = row.insertCell();
      let dificultad = row.insertCell();
      especie.innerHTML = "Especie";
      longevidad.innerHTML = "Longevidad";
      dificultad.innerHTML = "Dificultad";
      especie.className = "table-title";
      longevidad.className = "table-title";
      dificultad.className = "table-title";

    for (let i = 0; i < tableData.length; i++) {
      let row = table.insertRow();

      for (key in tableData[i]) {
        let cell = row.insertCell();
        let text = document.createTextNode(tableData[i][key]);
        cell.appendChild(text);
      }
    }
}

let addNewSpecie = () => {
    event.preventDefault();
    let form = document.querySelector('#addForm-js');
    let inputs = form.querySelectorAll('input');
    let animal = {
        "especie": inputs[0].value,
        "longevidad": inputs[1].value,
        "dificultad": inputs[2].value
    }
    tableData = [...tableData, animal]
    generateTable();
}

let addThreeTimes = () => {
    for (let i = 0; i < 3; i++) {
        addNewSpecie();
    }
    clearForm();
}

let clearForm = () => {
    let form = document.querySelector('#addForm-js');
    let inputs = form.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

let addBtn = document.getElementById('add-button');
addBtn.addEventListener('click', addNewSpecie);

let add3Btn = document.getElementById('add-3-button');
add3Btn.addEventListener('click', addThreeTimes);

let clearBtn = document.getElementById('clear-button');
clearBtn.addEventListener('click', clearForm);