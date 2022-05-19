import './index.css';
import sendData from './modules/sendData.js';
import display from './modules/display.js';

const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QAONJ05W80sFwCly3Cb9/scores/';

const getData = async () => {
  const getResponse = await fetch(url);
  return getResponse.json();
};

const insertUser = async () => {
  const insertDom = await getData();
  display(insertDom.result);
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('name').value.trim();
  const scoreInput = document.getElementById('score').value.trim();
  if (nameInput !== '' && scoreInput !== '') {
    sendData([nameInput, scoreInput]);
    insertUser();
  }
  document.getElementById('form').reset();
});

refreshBtn.addEventListener('click', () => {
  insertUser();
});
