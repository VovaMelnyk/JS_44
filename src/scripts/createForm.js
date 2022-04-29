import { body } from './refs.js';
import { createListItem } from './createList.js'
const form = document.createElement('form');
const input = document.createElement('input');
const submitBtn = document.createElement('button');

input.type = 'text';
submitBtn.type = 'submit';
submitBtn.textContent = 'Add note'

form.append(input);
form.append(submitBtn);

const submitHandler = (e) => {
    e.preventDefault();
    const inputValue = input.value;
    createListItem(inputValue)
    input.value = '';
}

form.addEventListener('submit', submitHandler)


export const createForm = () => {
    body.append(form);
}
