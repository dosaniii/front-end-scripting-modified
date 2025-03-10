
// // MODIFICATION DEMO
// var animesLabel = document.getElementById("animesLabel");
// animesLabel.innerText = "Favorite Animes";     // For 

// var gamesLabel = document.getElementById("gamesLabel");
// gamesLabel.innerText = "Favorite Games";

// var jjk = document.getElementById("jjk");
// jjk.innerHTML = <h3>${jjk.innerText}</h3>;


// var games = document.getElementsByClassName("game");
// for (var i = 0; i < games.length; i++) {
//   games[i].style = "font-size: 30px";
// }

// //
// var topImage = document.getElementById("main-art");
// topImage.removeAttribute("width");

// // REMOVEING ELEMENT FROM A LIST

// // // FIRST WAY
// // var animeList = document.getElementById("animeList");
// // animeList.removeChild(animeList.children[3]);

// // SECOND WAY
// // var frieren = document.getElementById("frieren");
// // frieren.parentNode.removeChild(frieren);


// // EVENTS
// function greet() {
//   var nameInput = document.getElementById("name");
//   var name = nameInput.value;
//   alert(`Hello ${name}!!!!`);
//   alert("Hello po!");
//   var addButton = document.getElementById("addButton");
//   addButton.removeEventListener("click", greet);
//   addButton.addEventListener("click", addElement);
// }

// // ADD ELEMENT TO A PARENT NODE
// var newAnime = document.createElement("li");
// newAnime.id = "plasticMemories";
// newAnime.innerText = "Plastic Memories";
// newAnime.className = "anime";

// var animeList = document.getElementById("animeList");
// animeList.appendChild(newAnime);


function addInfo() {

  // returns the value based on user's input
  var rankInput = document.getElementById("rank").value;
  var nameInput = document.getElementById("name1").value;
  var descInput = document.getElementById("description").value;
  var imageInput = document.getElementById("url").value;

  // creates list and holds all the information
  var forInputList = document.createElement("li");

  // creates a rank element to hold rank input
  var rankElement = document.createElement("div");
  rankElement.innerText = rankInput;

  // creates a name element to hold name input
  var nameElement = document.createElement("div");
  nameElement.innerText = nameInput;

  // creates a description element to hold desc input
  var descElement = document.createElement("div");
  descElement.innerText = descInput;

  // creates a image element to hold image url
  var imageElement = document.createElement("div");
  imageElement.innerText = imageInput;

  // appends all the element in the input list
  forInputList.appendChild(rankElement);
  forInputList.appendChild(nameElement);
  forInputList.appendChild(descElement);
  forInputList.appendChild(imageElement);

  // append all the input list into infolist id
  var boxList = document.getElementById("infoList");
  boxList.appendChild(forInputList)

};