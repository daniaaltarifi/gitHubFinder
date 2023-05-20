const searchForm = document.getElementById("search-form");
let searchTerm;
let info = document.querySelector(".info");
let repo = document.querySelector(".repo");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  searchTerm = document.getElementById("search-bar").value;
  fetch(`https://api.github.com/users/${searchTerm}`)
    .then((res) => res.json())
    .then((data) => {
      let picture = "";
      picture += `
        <div class="container">
      <div class="row">
        <div class="info col-lg-3 col-md-6 col-sm-12">
          <img
            src=${data.avatar_url}
            class="big-profile-img"
            alt="profile-img"
            srcset=""
           
          /> 
          <p class="name">${data.login}</p> 
         <button class="btn_Edit">Edit profile</button> 
        </div>`;
      info.innerHTML = `
        <div class="row">
          ${picture}
        </div>
      `;
      fetch(`https://api.github.com/users/${searchTerm}/repos`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          let repoHTML = "";
          for (let index = 0; index < 6; index++) {
            repoHTML += `
         
      <div class="col-lg-6">
      <div class="card mb-3 h-75">
        <div class="card-body">
          <div class="title_public">
            <a href=${data[index].html_url}class="title">${data[index].name}</a> <small class="public">Public</small>
          </div>
          <p class="card-text">${data[index].description}</p>
          <div class="color_with_p">
            <div class="color"></div>
            <p>${data[index].language}</p>
          </div>
        </div>
        </div>
        </div>
   `;
          }
          repo.innerHTML = `
      <div class="container">
        <p>Popular repositories</p>
        <div class="row">
          ${repoHTML}
        </div>
      </div>`;
      
        });
    });
});
function dark_Mode(){
  let dark = document.body;
  dark.classList.toggle("dark-mode")
  let card1=document.getElementById('black_Container')
  // card1.style.color="white";
card1.classList.toggle("dark-mode");
let black_Mode=document.querySelector('.black_Mode');
black_Mode.classList.toggle("dark-mode");
let black_Mode2=document.querySelector('.black_Mode2');
black_Mode2.classList.toggle("dark-mode");
let black_Mode3=document.querySelector('.black_Mode3');
black_Mode3.classList.toggle("dark-mode");
let black_Mode4=document.querySelector('.black_Mode4');
black_Mode4.classList.toggle("dark-mode");
let black_Mode5=document.querySelector('.black_Mode5');
black_Mode5.classList.toggle("dark-mode");
let black_Mode6=document.querySelector('.black_Mode6');
black_Mode6.classList.toggle("dark-mode");

// js.classList.toggle("dark-mode")
// let card2=document.querySelector('.black2');
// card2.style.color="white";
// card2.classList.toggle("dark-mode");
// let card3=document.querySelector('.black3')
// card3.style.color="white";
// card3.style.color="black"
// card3.classList.toggle("dark-mode");
// let c=document.getElementById('Black');

// c.classList.toggle("dark-mode");
}
