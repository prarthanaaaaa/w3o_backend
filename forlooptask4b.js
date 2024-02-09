function main() {
    let items = ['Laptop', 'Printer', 'Mouse', 'Keyboard', 'Monitor'];
    let stock = [50, 30, 100, 80, 20];
    checkStock(items, stock);
}

function checkStock(items, stock) {
    console.log('Inventory Check - Stock Levels');
    for (let i = 0; i < items.length; i++) {
        let itemName = items[i];
        let currentStock = stock[i];

        console.log('Item: ', itemName);
        console.log('Stock Level: ', currentStock);
        console.log('----------------------');
    }
}

main();
