
const joke = document.querySelector('.joke');
const btn = document.getElementById('btn');
const txt = document.querySelector('.txt');


btn.addEventListener('click',getRandom);
getRandom();
async function getRandom(){
  const jokeRes = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  });
  const resJson = await jokeRes.json();
  txt.innerHTML = resJson.joke;
}


