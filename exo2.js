let classe = [
    {
      nom: "Sandra",
      age: 35,
      profession: "aucune",
      adresse: "Paris",
    },
    {
      nom: "Abdell",
      age: 36,
      profession: "étudiant",
      adresse: "Bordeaux",
    },
    {
      nom: "Nicolas",
      age: 52,
      profession: "web master",
      adresse: "Paris",
    },
    {
      nom: "Julien",
      age: 42,
      profession: "designer",
      adresse: "Bordeaux",
    },
    {
      nom: "Claudia",
      age: 28,
      profession: "responsable de communication",
      adresse: "Nantes",
    },
  ];
  
  // 1. Coder une fonction qui retourne la somme des étudiants composant cette classe
  function sommeStudent() {
    let nbEleves = 0;
    for (eleve in classe) {
      nbEleves++;
    }
    console.log(nbEleves);
    return nbEleves;
  }
  // sommeStudent()
  
  /* 2. Coder une fonction qui retourne toutes les professions dans un tableau
   output attendu [ 'aucune', 'web master', 'designer', 'responsable de communication' ]
   */
  function professions() {
    let professions = [];
    classe.map((eleve) => {
      professions.push(eleve.profession);
    });
    console.log(professions);
    return professions;
  }
  // professions()
  
  // 3. Coder une fonction qui retourne le nom de la personne la plus âgée
  function etudiantPlusAge(tableau) {
    let oldestStudent = tableau[0];
    for (let i = 0; i < tableau.length; i++) {
      if (tableau[i].age > oldestStudent.age) {
        oldestStudent = tableau[i];
      }
    }
    console.log(oldestStudent.nom);
    return oldestStudent.nom;
  }
  // etudiantPlusAge(classe)
  
  // 4. Coder une fonction qui permet de calculer l’âge moyen ?
  function ageMoyen() {
    let sum = 0;
    classe.map((eleve) => (sum += eleve.age));
    console.log(sum / classe.length);
    return sum / classe.length;
  }
  // ageMoyen()
  
  // 5. Quels sont le nom et l'adresse de l'étudiants vivant à Bordeaux (retourner un tableau d'objets avec nom et adresse de l'étudiant concerné) ?
  function vivantABordeaux() {
    let bordelais = classe.filter((eleve) => eleve.adresse === "Nantes");
    console.log(bordelais);
    return bordelais;
  }
  vivantABordeaux()
  