import axios from 'axios';


const form = document.querySelectorAll('form');

const formEvent = form.addEventListener('submit', event => {
    event.preventDefault();

    const phoneFormData = document.querySelectorall('#phoneForm').value;

    const text = { phoneFormData };
    createUser(text);
});

const createUser = (text) => {
    axios.post(`https://api.telegram.org/bot1867086315:AAHHaC4VbjyFddfclSxFhdKm46QVl-QQsXo/sendMessage?chat_id=-1001539637265&text=${text}`, text)
        .then(response => {
            const addedUser = response.data;
            console.log(`POST: user is added`, addedUser);
            // append to DOM
            appendToDOM([addedUser]);
        })
        .catch(error => console.error(error));
};