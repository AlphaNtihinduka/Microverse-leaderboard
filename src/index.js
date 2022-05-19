import './index.css';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QAONJ05W80sFwCly3Cb9/scores/';
const submitBtn = document.querySelector('.submit-btn');

const sendData = async (user, score) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            body: JSON.stringify({
                user,
                score
            })
      
        })
        const dataCall = await response.json();
        console.log(dataCall)
        return dataCall
        // .then((response) => response.json())
        // .then((data) => console.log(data))
}

// const getData = async (user, score) => {
//     const response = await fetch(url, {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//         body: JSON.stringify({
//             user,
//             score
//         })
//     })
//     const dataCall = await response.json();
//     console.log(dataCall)
//     return dataCall
//     // .then((response) => response.json())
//     // .then((data) => console.log(data))
// }

const display = (players) => {
    console.log("players",players);
    players.sort((a, b) => b.score - a.score);
    let output = '';
    players.forEach(player =>{
        output += `
        <li class="name-score">
        <span class="name">${player.user}:</span> 
        <span class="score">${player.score}</span>
        </li>
        `
    })
    document.querySelector(".scores-display").innerHTML = output;
}


const displayScores = async () => {
    await fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json)
        console.log("result",result)
        display(json.result)
      });
  };
displayScores()

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const nameInput = document.getElementById('name').value;
    const scoreInput = document.getElementById('score').value;
    sendData(nameInput, scoreInput);
})
