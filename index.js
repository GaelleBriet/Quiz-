let btn = document.querySelector(".btn");
let reset = document.querySelector(".reset");
//tous les inputs :
let inputList = document.querySelectorAll(".radio-btn");
//les inputs par question :
let resp1 = document.querySelectorAll('input[name="ques1"]');
let resp2 = document.querySelectorAll("input[name='ques2']");

// ******************************************************************************* //

// fonction pour afficher le bouton quand toutes les questions sont validées
function afficheBtn() {
  let isChecked = 0;
  for (i = 0; i < inputList.length; i++)
    //if( inputList[i].type == "radio")
    if (inputList[i].checked) isChecked++;
  if (isChecked == 2) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

// Bouton reset
reset.addEventListener("click", (e) => {
  reload();
});

// fonction au click sur le bouton, on remonte en haut de page et affiche les réponses
btn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  isTrue();
});

// ******************************************************************************* //
// fonction qui affiche les bonnes réponses et vérifie si l'utilisateur à eu juste

function isTrue() {
  let count = 0;
  let inputValue = "";

  for (let i = 0; i < resp1.length; i++) {
    if (resp1[i].checked) {
      inputValue = resp1[i].value;
    }
  }
  if (inputValue == 01) {
    document.getElementById("label1").classList.add("correctAnswer");
    document.getElementById("label1").innerHTML += "<p class='vrai'>- Vrai</p>";
    document.getElementById("choix1").classList.add("correctSpan");
    count++;
  } else if (inputValue == 02) {
    document.getElementById("label2").classList.add("wrongAnswer");
    document.getElementById("label2").innerHTML += "<p class='faux'>- Faux</p>";
    document.getElementById("choix2").classList.add("wrongSpan");
    document.getElementById("label1").classList.add("correctAnswer");
    document.getElementById("choix1").classList.add("correctSpan");
  } else if (inputValue == 03) {
    document.getElementById("label3").classList.add("wrongAnswer");
    document.getElementById("label3").innerHTML += "<p class='faux'>- Faux</p>";
    document.getElementById("choix3").classList.add("wrongSpan");
    document.getElementById("label1").classList.add("correctAnswer");
    document.getElementById("choix1").classList.add("correctSpan");
  } else if (inputValue == 04) {
    document.getElementById("label4").classList.add("wrongAnswer");
    document.getElementById("label4").innerHTML += "<p class='faux'>- Faux</p>";
    document.getElementById("choix4").classList.add("wrongSpan");
    document.getElementById("label1").classList.add("correctAnswer");
    document.getElementById("choix1").classList.add("correctSpan");
  }
  let div = document.createElement("div");
  document.querySelector(".question-container").appendChild(div);
  div.classList.add("explication");
  div.textContent =
    "CSS est l'abréviation de Cascading Style Sheets (Feuilles de Style en Cascade).";

  for (let i = 0; i < resp2.length; i++) {
    if (resp2[i].checked) {
      inputValue = resp2[i].value;
    }
  }
  if (inputValue == 06) {
    document.getElementById("label6").classList.add("correctAnswer");
    document.getElementById("label6").innerHTML += "<p class='vrai'>- Vrai</p>";
    document.getElementById("choix6").classList.add("correctSpan");
    count++;
  } else if (inputValue == 05) {
    document.getElementById("label5").classList.add("wrongAnswer");
    document.getElementById("label5").innerHTML += "<p class='faux'>- Faux</p>";
    document.getElementById("choix5").classList.add("wrongSpan");
    document.getElementById("label6").classList.add("correctAnswer");
    document.getElementById("choix6").classList.add("correctSpan");
  } else if (inputValue == 07) {
    document.getElementById("label7").classList.add("wrongAnswer");
    document.getElementById("label7").innerHTML += "<p class='faux'>- Faux</p>";
    document.getElementById("choix7").classList.add("wrongSpan");
    document.getElementById("label6").classList.add("correctAnswer");
    document.getElementById("choix6").classList.add("correctSpan");
  } else if (inputValue == 08) {
    document.getElementById("label8").classList.add("wrongAnswer");
    document.getElementById("label8").innerHTML += "<p class='faux'>- Faux</p>";
    document.getElementById("choix8").classList.add("wrongSpan");
    document.getElementById("label6").classList.add("correctAnswer");
    document.getElementById("choix6").classList.add("correctSpan");
  }
  let div2 = document.createElement("div");
  document.querySelector(".question-container2").appendChild(div2);
  div2.classList.add("explication");
  div2.textContent =
    "Le CSS est un langage simple qui sert à styler (polices, couleurs, positions, dimensions ...) les documents internet.";

  let score = document.createElement("p");
  document.getElementById("formulaire").appendChild(score);
  score.classList.add("score");
  score.textContent += "Score : " + count + " / 2";
}

// ************************************************************************** //
// recharger et recommencer le quiz
function reload() {
  window.location.reload();
}
