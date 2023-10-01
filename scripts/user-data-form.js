import {User} from './classes/User.js'

const userDataForm = document.forms.userdata;

const userName = userDataForm.elements.username;
const email = userDataForm.elements.email;
const phoneNumber = userDataForm.elements.phone;

const btnSubmit = userDataForm.elements.btn;

const spans = document.querySelectorAll('.form-inputs span');
const info = document.querySelector('.button p');

btnSubmit.onclick = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^(\+?38)?(\d{10})$/;

    let isUserInputCorrect = /^[A-Za-zА-Я-а-я\-']+$/.test(userName.value);
    let isEmailInputCorrect = emailPattern.test(email.value);
    let isPhoneInputCorrect = phonePattern.test(phoneNumber.value);
    
    if(isUserInputCorrect && isEmailInputCorrect && isPhoneInputCorrect) {
        let user = new User(userName.value, email.value, phoneNumber.value);
        setTimeout(() => {
            btnSubmit.style.display = "none";
            info.innerHTML = user.getAnswer();
            info.style.display = "block";
            clearAll();
        }, 2000);
    } else {
        if(!isUserInputCorrect) {
            spans[0].style.display = "block";
        }
        if(!isEmailInputCorrect) {
            spans[1].style.display = "block";
        }
        if(!isPhoneInputCorrect) {
            spans[2].style.display = "block";
        }
    }
}

function clearAll() {
    userName.disabled = true;
    phoneNumber.disabled = true;
    email.disabled = true;

    spans[0].style.display = "none";
    spans[1].style.display = "none";
    spans[2].style.display = "none";
}
