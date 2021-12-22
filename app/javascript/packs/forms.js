import {MDCTextField} from '@material/textfield';

const textFields = document.querySelectorAll('.mdc-text-field');
const mdTextFields = {};

for (let i = 0; i < textFields.length; i++){
    const input = textFields[i].querySelector('.mdc-text-field__input');
    const key = input.id;
    mdTextFields[key] = new MDCTextField(textFields[i]);
}

window['mdTextFields'] = mdTextFields;