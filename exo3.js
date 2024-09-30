// Variables initiales. Les points de l'ordinateur et de l'utilisateur sont à 0.
let pointsOrdi = 0;
let pointsUtilisateur = 0;
let choix = ["ciseaux", "pierre", "feuille"];
// let choix = ["feuille"];

//Créer une fonction game qui prend deux paramètres (choix1 er choix2) et qui compare toutes les possibilités. Par exemple si choix1 ==="ciseaux" && choix2==="pierre", alors on retourne pierre. Coder toutes les possibilités.
function game(choix1, choix2) {
  if (choix1 === "ciseaux" && choix2 === "pierre") {
    return "pierre";
  } else if (choix1 === "ciseaux" && choix2 === "feuille") {
    return "ciseaux";
  } else if (choix1 === "ciseaux" && choix2 === "ciseaux") {
    return "égalité";
  } else if (choix1 === "pierre" && choix2 === "pierre") {
    return "égalité";
  } else if (choix1 === "pierre" && choix2 === "feuille") {
    return "feuille";
  } else if (choix1 === "pierre" && choix2 === "ciseaux") {
    return "pierre";
  } else if (choix1 === "feuille" && choix2 === "pierre") {
    return "feuille";
  } else if (choix1 === "feuille" && choix2 === "feuille") {
    return "égalité";
  } else if (choix1 === "feuille" && choix2 === "ciseaux") {
    return "ciseaux";
  }
}

// Boucler tant les points de l'ordinateur et les points de l'utilisateur sont inférieurs à 3
while (pointsOrdi < 3 && pointsUtilisateur < 3) {
  //Demander à l'utilisateur de choisir entre ciseaux, pierre, feuille et l'assigner dans une variable.
  let choix1 = prompt("Choisissez entre pierre, feuille et ciseaux");
  if (choix1 === "") break;
  console.log(choix1);

  //Choix de l'ordinateur de manière aléatoire
  let choix2 = choix[Math.floor(Math.random() * choix.length)];
  console.log(choix2);
  //Appel de la fonction et assignation dans une variable resultat
  let resultat = game(choix1, choix2);
  console.log(resultat);
  //Vérification du résultat selon 3 possibilité : égalité, le résultat est égal à choixUtilisateur ou le résultat est égal à choixOrdi
  resultat === choix1
    ? pointsUtilisateur++
    : resultat === choix2
    ? pointsOrdi++
    : null;
  console.log(`Points utilisateur: ${pointsUtilisateur}`);
  console.log(`Points ordinateur: ${pointsOrdi}`);
}

// Préciser si l'utilisateur a gagné ou perdu (l'ordi ou l'utilisateur a atteint 3 en premier)
while (pointsOrdi === 3) {
  console.log("L'ordinateur a gagné");
  break;
}

while (pointsUtilisateur === 3) {
  console.log("Vous avez gagné");
  break;
}
