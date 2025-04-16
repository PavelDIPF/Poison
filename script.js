let balance = 0;

function updateBalance() {
    document.getElementById('balance').textContent = balance;
}

function addMoney() {
    balance += 1000;
    updateBalance();
    alert("Баланс пополнен на 1000 ¥! 🤑");
}

function buyItem(price) {
    if (balance >= price) {
        balance -= price;
        updateBalance();
        alert("Покупка совершена! Но это фейк 😂");
    } else {
        alert("Не хватает денег! Нажми 'Пополнить баланс'!");
    }
}

updateBalance(); // Инициализация
