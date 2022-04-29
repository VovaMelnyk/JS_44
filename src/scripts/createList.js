import { body } from './refs.js';
import { storage } from './storageHelper.js';
const ul = document.createElement('ul');

export const createList = () => {
    body.append(ul);
    const listData = storage.getItem('list');

    if (listData) {
        listData.forEach(item => createListItem(item, true))
    }
}

export const createListItem = (text, isFirsRender = false) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.append(li);

    if (!isFirsRender) {
        if (!storage.getItem('list')) { // null
        const array = [];
        array.push(text)
        storage.addItem('list',array)
        return
    }

    const storageData = storage.getItem('list');
    storageData.push(text);
    storage.addItem('list', storageData)
    }

  
}

// 1) local storage is empty
// 2) local storage with array of strings