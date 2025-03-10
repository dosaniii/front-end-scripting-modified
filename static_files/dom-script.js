//  var animesLabel = document.getElementById("animesLabel");
//  console.log(animesLabel);

//  var listItems = document.getElementsByTagName("li");
//  console.log(listItems);
//  console.log(listItems.length);
//  console.log(listItems[0]);
//  console.log(listItems["aot"]);

//  var container = document.getElementsByClassName("container");
//  console.log(containter);

// MODIFICATION DEMO
var animesLabel = document.getElementById("animesLabel");
animesLabel.innerText = "Favorite Animes";     // For 

var gamesLabel = document.getElementById("gamesLabel");
gamesLabel.innerText = "Favorite Games";

var jjk = document.getElementById("jjk");
jjk.innerHTML = <h3>${jjk.innerText}</h3>;


var games = document.getElementsByClassName("game");
for (var i = 0; i < games.length; i++) {
  games[i].style = "font-size: 30px";
}

//
var topImage = document.getElementById("main-art");
topImage.removeAttribute("width");

// REMOVEING ELEMENT FROM A LIST

// // FIRST WAY
// var animeList = document.getElementById("animeList");
// animeList.removeChild(animeList.children[3]);

// SECOND WAY
var frieren = document.getElementById("frieren");
frieren.parentNode.removeChild(frieren);

// ADD ELEMENT TO A PARENT NODE
var newAnime = document.createElement("li");
newAnime.id = "plasticMemories";
newAnime.innerText = "Plastic Memories";
newAnime.className = "anime";

var animeList = document.getElementById("animeList");
animeList.appendChild(newAnime);

// EVENTS
function greet() {
  var nameInput = document.getElementById("name");
  var name = nameInput.value;
  alert(`Hello ${name}!!!!`);
  alert("Hello po!");
  var addButton = document.getElementById("addButton");
  addButton.removeEventListener("click", greet);
  addButton.addEventListener("click", addElement);
}

function addElement() {
  var newAnime = document.createElement("li");
  newAnime.id = "futureDiary";
  newAnime.innerText = "Future Diary";
  newAnime.className = "anime";

  var animeList = document.getElementById("animeList");
  animeList.appendChild(newAnime);
}

// EVENT LISTENER
var addButton = document.getElementById("addButton");
addButton.addEventListener("click", greet);
