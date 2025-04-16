// Баланс и localStorage
let balance = parseInt(localStorage.getItem('balance')) || 512;

function updateBalance() {
    document.getElementById('balance').textContent = balance;
    document.getElementById('profile-balance').textContent = balance;
    localStorage.setItem('balance', balance);
}

// Покупка
function buyItem(price) {
    if (balance >= price) {
        balance -= price;
        updateBalance();
        alert('Покупка совершена!');
    } else {
        alert('Недостаточно средств!');
    }
}

// Пополнение
function addMoney() {
    balance += 1000;
    updateBalance();
    alert('Баланс пополнен на 1000 ¥');
}

// Переключение вкладок
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// Инициализация
updateBalance();
