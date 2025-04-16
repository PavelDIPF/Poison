// Загружаем баланс из localStorage или устанавливаем 0
let balance = parseInt(localStorage.getItem('balance')) || 0;

// Обновляем отображение баланса
function updateBalance() {
    document.getElementById('balance').textContent = balance;
    localStorage.setItem('balance', balance); // Сохраняем в localStorage
}

// Пополнение баланса
function addMoney() {
    balance += 1000;
    updateBalance();
    alert("Баланс пополнен на 1000 ¥! 🤑");
}

// Покупка товара
function buyItem(price) {
    if (balance >= price) {
        balance -= price;
        updateBalance();
        alert("Покупка совершена! Но это фейк 😂");
    } else {
        alert("Не хватает денег! Нажми 'Пополнить баланс'.");
    }
}

// Инициализация при загрузке страницы
updateBalance();
