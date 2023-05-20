const searchForm = document.getElementById("search-form");
let searchTerm;
let user1 = document.querySelector(".user1");
let user2 = document.querySelector(".user2");
let winner = document.getElementById("winner");
let name_Result = document.getElementById("name_Result");
let result = document.getElementById("result");
var user_1;
var user_2;
var repo_1;
var repo_2;
let btn = document.querySelector(".btn");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  searchTerm = document.getElementById("search-bar").value;
  fetch(`https://api.github.com/users/${searchTerm}`)
    .then((res) => res.json())
    .then((data) => {
      user_1 = data.login;
      repo_1 = data.public_repos;
      user1.innerHTML = `
      <div class="container">
      <div class="row">
        <div class="info col-lg-3 col-md-6 col-sm-12">
          <img
            src=${data.avatar_url}
            class="profile-img-compare"
            alt="profile-img"
            srcset=""
          /> 
        </div>
        <div class="row">
         <ul class="clear_Dot">
          <li class="name">Name:${data.login}</li>
          <li class="num1">Repo Num:${data.public_repos}</li>
          <li>Type:${data.type}</li>
          <li class="win">Followers:${data.followers}</li>
          <li class="win">Following:${data.following}</li>

          <li class="win">Company:${data.company}</li>
          </ul>
        </div>
      `;
    });
});

const form = document.getElementById("form");
let value;
form.addEventListener("submit", function (events) {
  events.preventDefault();
  value = document.getElementById("search").value;
  fetch(`https://api.github.com/users/${value}`)
    .then((res) => res.json())
    .then((data) => {
      user_2 = data.login;
      repo_2 = data.public_repos;
      user2.innerHTML = `
          <div class="container">
        <div class="row">
          <div class="info col-lg-3 col-md-6 col-sm-12">
            <img
              src=${data.avatar_url}
              class="profile-img-compare"
              alt="profile-img"
              srcset=""
            />
            </div>;
            <ul class="clear_Dot">
            <li class="name">Name:${data.login}</li>
          <li class="num2">Repo Num:${data.public_repos}</li>
          <li>Type:${data.type}</li>
          <li class="win">Followers:${data.followers}</li>
          <li class="win">Following:${data.following}</li>
          <li class="win">Company:${data.company}</li>

          </ul>
      `;
    });
});
btn.addEventListener("click", function () {
  if (repo_1 > repo_2) {
    result.textContent = "Winner";
    name_Result.textContent = user_1;
  } else if (repo_1 < repo_2) {
    result.textContent = "Winner";
    name_Result.textContent = user_2;
  } else {
    result.textContent = "Both users have the same number of repositories.";
  }
  result.style.textAlign = "center";
  name_Result.style.textAlign = "center";

  winner.appendChild(result);
  winner.appendChild(name_Result);
  document.body.appendChild(winner);
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});
function dark_Mode(){
  let dark = document.body;
  dark.classList.toggle("dark-mode")
}