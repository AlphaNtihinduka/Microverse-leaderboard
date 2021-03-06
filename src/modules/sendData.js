const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QAONJ05W80sFwCly3Cb9/scores/';

const sendData = async (data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: data[0],
      score: data[1],

    }),

  });
  const dataCall = await response.json();
  return dataCall;
};

export default sendData;