
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
  var newRank = document.getElementById("rank").value;
  var newName = document.getElementById("name1").value;
  var newDesc = document.getElementById("description").value;
  var newImage = document.getElementById("url").value;

  var forInputList = document.createElement("li");

  var rankInput = document.createElement("div");
  rankInput.innerText = newRank;

  var nameInput = document.createElement("div");
  nameInput.innerText = newName;

  var descInput = document.createElement("div");
  descInput.innerText = newDesc;

  var imageInput = document.createElement("div");
  imageInput.innerText = newImage;

  forInputList.appendChild(rankInput);
  forInputList.appendChild(nameInput);
  forInputList.appendChild(descInput);
  forInputList.appendChild(imageInput);

  var boxList = document.getElementById("infoList");
  boxList.appendChild(forInputList)

}



// // EVENT LISTENER
// var addButton = document.getElementById("addButton");
// addButton.addEventListener("click", greet);
