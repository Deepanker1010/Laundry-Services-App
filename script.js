console.log('Hello from js');
const btns = document.querySelectorAll('.info');
const tbody = document.querySelector('.cart-table tbody');
const totalPrice = document.querySelector('.total-price');

let total = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', function () {
        const serviceName = this.getAttribute('name');
        const price = parseFloat(this.value);
        const existingRow = document.getElementById(`row-${this.id}`);
       
        if (existingRow) {
            total -= price;
            existingRow.remove();
            this.innerHTML = `
            Add Item <i class="fa-regular fa-circle-plus"></i>
            `;
            this.classList.remove('added');
            updateSerialNumbers();
        } else {
            total += price;
            const row = document.createElement('tr');
            row.id = `row-${this.id}`;
            row.innerHTML = `
            <td></td>
            <td>${serviceName}</td>
            <td>$${price.toFixed(2)}</td>
            `;
            tbody.appendChild(row);
            updateSerialNumbers();
            this.innerHTML = `
            Remove Item <i class="fa-solid fa-trash"></i>
            `;
            this.classList.add('added');
        }
        totalPrice.innerHTML = total;
    })
})

function updateSerialNumbers() {
    const row = tbody.querySelectorAll('tr');
    row.forEach((row, index) => {
        row.cells[0].innerHTML = index + 1;
    });
};

const form = document.querySelector('#booking-form');
const confirmMsg = document.getElementById('confimation-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(form.checkValidity()){
        form.reportValidity();
        return;
    }
    confirmMsg.classList.add('show');
})
