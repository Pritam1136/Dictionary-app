const input = document.querySelector(".input");
const container = document.querySelector(".container");
const button = document.querySelector(".button");

function dictionary() {
  //   console.log(input.value);
  const answer = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`;
  fetch(answer)
    .then((res) => res.json())
    .then((result) => {
      // console.log(result);
      container.innerText = result[0].meanings[0].definitions[0].definition;
    })
    .catch((container.innerText = `Please wait`));
}

button.addEventListener("click", dictionary);
