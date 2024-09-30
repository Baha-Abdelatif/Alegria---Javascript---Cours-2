// 1. Créer un tableau age comprenant 5 éléments de type nombres entiers positifs
let age = [5,6,24,42,33]

// 2. Ecrire une fonction qui permet de calculer la somme totale des âges
function somme(arrayparam) {
  //return
  let sum = 0;
  arrayparam.map(num=>sum+=num);
  return sum;
}

// console.log(somme(age));


// 3. Ecrire une fonction qui permet de calculer la moyenne des âges
function moyenne(arrayparam) {
let totalAges = somme(arrayparam);
  let averageAges = totalAges/arrayparam.length;
  return averageAges;
}

// console.log(moyenne(age));



// 4. Créer un tableau prenom comprenant 5 éléments différents de type String
let prenom = ["Jane", "Jacky", "Jill", "Jude","Kim"];

// 5. Ecrire une fonction pour définir l'élément le plus petit du tableau 'prenom' (celui comportant le moins de lettres)
function trouverElementPlusPetit(arrayparam) {
  let nomPlusPetit = arrayparam[0];
  arrayparam.map(nom=>{
    if(nom.length < nomPlusPetit.length){
      nomPlusPetit = nom;
    }
  });
  return nomPlusPetit;
}

// console.log(trouverElementPlusPetit(prenom));



// 6. Fusionner les deux tableaux 'age' et 'prenom' en un nouveau tableau nommé 'students'

let students = age.concat(prenom);
// ou
let students2 = [...age,...prenom];

// console.log(students);
// console.log(students2);

// 7. Ecrire une fonction qui permet de sommer les nombres et les longueurs de chaque élément de type String dans le tableau 'students'
function sommeElements(arrayparam) {
  let sum = 0;
  arrayparam.map(element=>{
    if(typeof element === "number"){
      sum+=element;
    }else{
      sum+=element.length;
    }
  });

  return sum;
}

console.log(sommeElements(students));