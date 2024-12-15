const objectTable = document.getElementById('objectTable');

let cars = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2000, color: 'Silver', price: 25000 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2020, color: 'Blue', price: 22000 },
    { id: 3, make: 'Ford', model: 'Mustang', year: 1990, color: 'Red', price: 40000 },
    { id: 4, make: 'Tesla', model: 'Model 3', year: 2023, color: 'Black', price: 45000 },
    { id: 5, make: 'BMW', model: '3 Series', year: 2022, color: 'White', price: 38000 },
];

displayObjects();

function addObject() {
    const objectMake = document.getElementById("objectMake").value;
    const objectModel = document.getElementById("objectModel").value;
    const objectYear = document.getElementById("objectYear").value;
    const objectColor = document.getElementById("objectColor").value;
    const objectPrice = document.getElementById("objectPrice").value;

    if (objectMake && objectModel && objectYear && objectColor && objectPrice) {
        let id = cars.length + 1;
        let newObject = { id: id, make: objectMake, model: objectModel, year: objectYear, color: objectColor, price: objectPrice };
        cars.push(newObject);
        displayObjects();
        clearInputs();
    }
}

function deleteObject(index) {
    cars.splice(index, 1);
    displayObjects();
}

function cancelEdit(index) {
    displayObjects();
}

function editObject(index) {
    const row = objectTable.rows[index];
    const makeCell = row.cells[1];
    const modelCell = row.cells[2];
    const yearCell = row.cells[3];
    const colorCell = row.cells[4];
    const priceCell = row.cells[5];
    const actionCell = row.cells[6];

    makeCell.innerHTML = `<input type="text" class="form-control" value="${cars[index].make}" onblur="saveEdit(${index}, 1)">`;
    modelCell.innerHTML = `<input type="text" class="form-control" value="${cars[index].model}" onblur="saveEdit(${index}, 2)">`;
    yearCell.innerHTML = `<input type="text" class="form-control" value="${cars[index].year}" onblur="saveEdit(${index}, 3)">`;
    colorCell.innerHTML = `<input type="text" class="form-control" value="${cars[index].color}" onblur="saveEdit(${index}, 4)">`;
    priceCell.innerHTML = `<input type="text" class="form-control" value="${cars[index].price}" onblur="saveEdit(${index}, 5)">`;
    actionCell.innerHTML = `<button onclick="cancelEdit(${index})">Cancel</button>`;
}

function saveEdit(index, fieldIndex) {
    const row = objectTable.rows[index];
    const inputElement = row.cells[fieldIndex].querySelector('input');
    const newValue = inputElement.value;

    if (newValue) {
        cars[index][fieldIndex === 1 ? 'make' : fieldIndex === 2 ? 'model' : fieldIndex === 3 ? 'year' : fieldIndex === 4 ? 'color' : 'price'] = newValue;
        displayObjects();
    } else {
        displayObjects();
    }
}

function displayObjects() {
    objectTable.innerHTML = '';
    cars.forEach((car, index) => {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = car.id;

        const makeCell = document.createElement('td');
        makeCell.textContent = car.make;

        const modelCell = document.createElement('td');
        modelCell.textContent = car.model;

        const yearCell = document.createElement('td');
        yearCell.textContent = car.year;

        const colorCell = document.createElement('td');
        colorCell.textContent = car.color;

        const priceCell = document.createElement('td');
        priceCell.textContent = "$" + car.price;

        const actionCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteObject(index);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editObject(index);

        row.appendChild(idCell);
        row.appendChild(makeCell);
        row.appendChild(modelCell);
        row.appendChild(yearCell);
        row.appendChild(colorCell);
        row.appendChild(priceCell);

        actionCell.appendChild(deleteButton);
        actionCell.appendChild(editButton);

        row.appendChild(actionCell);

        objectTable.appendChild(row);
    });

    document.getElementById('newId').innerText = cars.length + 1;
}

function clearInputs() {
    document.getElementById("objectMake").value = '';
    document.getElementById("objectModel").value = '';
    document.getElementById("objectYear").value = '';
    document.getElementById("objectColor").value = '';
    document.getElementById("objectPrice").value = '';
}
