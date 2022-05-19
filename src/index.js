import './index.css';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QAONJ05W80sFwCly3Cb9/scores/';
const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh');

const sendData = async (data) => {
    console.log("data",data)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
              },
            body: JSON.stringify({
                user: data[0], 
                score: data[1]

            })
      
        })
        const dataCall = await response.json();
        console.log(dataCall)
        return dataCall
        // .then((response) => response.json())
        // .then((data) => console.log(data))
}



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

const getData = async () => {
    const getResponse = await fetch(url)
    return getResponse.json()
}

const insertUser = async () => {
    const insertDom = await getData();
    display(insertDom.result)
}


submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const nameInput = document.getElementById('name').value;
    const scoreInput = document.getElementById('score').value;
    if (nameInput !== "" && scoreInput !== "") {
         sendData([nameInput, scoreInput]);
        insertUser()
    }
})

refreshBtn.addEventListener("click", () => {
   insertUser()
})
