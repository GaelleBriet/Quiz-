let btn = document.querySelector(".btn");
let inputList = document.querySelectorAll(".radio-btn");

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

// fonction au click sur le bouton, on remonte en haut de page
btn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// ************************************************************************** //
// bonnes réponses
let rep1 = document.getElementById("res1-1");
let rep2 = document.getElementById("res2-2");
let label1 = document.getElementById("label1");
let lettre = document.getElementById("choix1");

// ajouter .correctAnswer ou .wrongAnswer suivant la réponse
// ajouter background color a label span suivant la réponse (rouge / vert)
if (rep1.checked) {
  label1.classList.add("correctAnswer");
  lettre.classList.add("correctSpan");
}

// ******************************************************************************* //
// chercher du côté de .value

// if (rep1.checked) {
//   label1.classList.add("correctAnswer");
//   lettre.classList.add("correctSpan");
// } else {
//   label1.classList.add("correctAnswer");
//   lettre.classList.add("correctSpan");
//   document
//     .querySelector("input[type='radio']:checked")
//     .classList.add("wrongAnswer");
// }

// quand bonne réponse : seulement vert
// quand réponse fausse : vert + rouge
// bonne réponse id"res1-1" par exemple
// mauvaise réponse : celle sélectionnée

// function isTrue() {
//   var valeur = "";
//   for (let i = 0; i < inputList.length; i++) {
//     if (inputList[i].checked) {
//       valeur = inputList[i].value;
//     }
//     if (inputList[4].checked) {
//       console.log("oui");
//     }
//   }
//   console.log(valeur + " a été sélectionné");
//   if (document.getElementById("res1-1").checked === true) {
//     console.log("vrai");
//   }
// }

// recuperer la valeur avec checked
// retourn true si coché, false sinon
// document.getElementById("res1-1").checked;

// pour traiter les données
// if (document.getElementById("res1-1").checked === true) {
//bla bla bla//
// }
