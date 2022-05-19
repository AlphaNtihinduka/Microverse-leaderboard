
const display = (players) => {
  players.sort((a, b) => b.score - a.score);
  let output = '';
  players.forEach((player) => {
    output += `
        <li class="name-score">
        <span class="name">${player.user}:</span> 
        <span class="score">${player.score}</span>
        </li>
        `;
  });
  document.querySelector('.scores-display').innerHTML = output;
};

export default display;