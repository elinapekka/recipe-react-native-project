import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('shoppinglist.db');

const updateShoppingList = (setShoppingList) => {
    db.transaction(tx => {
        tx.executeSql('SELECT * FROM shoppinglist;', [], (_, { rows }) => setShoppingList(rows._array)
        );
    }, null, null);
}

const saveShoppingListItem = ({ item, amount, checked, price }) => {
    if (item && item.trim() !== '') {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO shoppinglist (item, amount, checked, price) values (?, ?, ?, ?);',
                [item, amount, checked, parseFloat(price.replace(/,/g, '.'))]);
        }, null, null);
    } else {
        console.log('item was not present')
    }
}

const deleteShoppingListItem = (id) => {
    db.transaction(tx => {
        tx.executeSql('DELETE FROM shoppinglist WHERE id = ?',
            [parseInt(id)]);
    }, null, null
    );
}

const deleteAllShoppingListItems = () => {
    db.transaction(tx => {
        tx.executeSql('DELETE FROM shoppinglist');
    }, null, null
    )
}

const editShoppingListItem = ({ id, item, amount, checked, price }) => {
    const parsedPrice = typeof price === 'string' ? parseFloat(price.replace(/,/g, '.')) : price;

    if (item && item.trim() !== '') {
        db.transaction(
            tx => {
                tx.executeSql('UPDATE shoppinglist SET '
                    + 'item = ?, '
                    + 'amount = ?, '
                    + 'checked = ?, '
                    + 'price = ? '
                    + 'WHERE id = ?'
                    + ';',
                    [item, amount, checked, parsedPrice, parseInt(id)]);
            }, null, null
        )
    } else {
        console.log('didn\'t save cause item was not present')
    }
}

const createShoppingListDB = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS shoppinglist (' +
            'id INTEGER PRIMARY KEY NOT NULL, ' +
            'item TEXT NOT NULL, ' +
            'amount TEXT, ' +
            'checked BOOLEAN NOT NULL, ' +
            'price NUMERIC);'
        );
    }, null, null);
};

const dropShoppingListDB = () => {
    db.transaction(tx => {
        tx.executeSql('DROP TABLE IF EXISTS shoppinglist;')
    }, null, null)
}

export {
    createShoppingListDB,
    saveShoppingListItem,
    updateShoppingList,
    deleteShoppingListItem,
    deleteAllShoppingListItems,
    editShoppingListItem,
    dropShoppingListDB
};