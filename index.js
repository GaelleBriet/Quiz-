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

// bonnes réponses