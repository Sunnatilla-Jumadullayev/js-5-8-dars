const wrapper = document.querySelector(".wrapper");
const apiLink = "https://jsonplaceholder.typicode.com/users";

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
    <h3>${item.name},${item.username}</h3>
    <p class="email ">email: ${item.email}</p>
    <p class="address">adrdress:${item.address.city} city, ${item.address.street} srt,${item.address.suite}</p>
    <p>tell: ${item.address.zipcode}</p>
    `;
    wrapper.appendChild(div);
    console.log(item.address.street);
  });
}
