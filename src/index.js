import './index.css';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QAONJ05W80sFwCly3Cb9/scores/'
console.log(url)
const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');
const submitBtn = document.querySelector('.submit-btn');

const sendData = async (userName, score) => {
        await fetch((url), {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            body: JSON.stringify({
                userName,
                score
            })
      
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const nameInput = document.querySelector('.name').value;
    const scoreInput = document.querySelector('.score').value;
    sendData(nameInput, scoreInput);
})
