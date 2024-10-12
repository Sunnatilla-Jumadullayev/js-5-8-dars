const wrapper = document.querySelector(".wrapper");
const apiLink = "https://jsonplaceholder.typicode.com/posts";

async function getData(api) {
  const response = await fetch(api);
  response
    .json()
    .then((res) => createElement(res))
    .catch((err) => console.log(`www`));
}
getData(apiLink);

function createElement(data) {
  data.forEach((item) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <h2>${item.title}</h2>
    <p>${item.body}</p>`;
    wrapper.appendChild(div);
  });
}
