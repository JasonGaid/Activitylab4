const dataForm = document.getElementById('dataForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const countryInput = document.getElementById('country');
const dataDisplay = document.getElementById('dataDisplay');

let data = [];

dataForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const country  = countryInput.value;

    if (name && email) {
        const newData = { name, email, country };
        data.push(newData);
        displayData();
        nameInput.value = '';
        emailInput.value = '';
        countryInput.value = '';
    }
});

function displayData() {
    dataDisplay.innerHTML = '';
    data.forEach((item, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p><strong>Name:</strong> ${item.name}</p>
            <p><strong>Email:</strong> ${item.email}</p>
            <p><strong>Country:</strong> ${item.country}</p>
            <button onclick="editData(${index})">Edit</button>
            <button onclick="deleteData(${index})">Delete</button>
        `;
        dataDisplay.appendChild(div);
    });
}

function editData(index) {
    const newData = data[index];
    nameInput.value = newData.name;
    emailInput.value = newData.email;
    countryInput.value = newData.country;
    data.splice(index, 1);
    displayData();
    }

function deleteData(index) {
    data.splice(index, 1);
    displayData();
}

displayData();

