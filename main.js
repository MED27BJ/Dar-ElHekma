var biblio = [
    {
      theme: "Literature",
      image: "./images/Taha Houssein/El Ayem.jfif",
      titre: "El Ayem",
      auteur: "Taha Houssein",
    },
    {
      theme: "Literature",
      image: "./images/Taha Houssein/Elwaed Elhak.jfif",
      titre: "Elwaed Elhak",
      auteur: "Taha Houssein",
    },
    {
      theme: "Literature",
      image: "./images/Taha Houssein/Chaikhan.jfif",
      titre: "AL Aaamal Alkamila",
      auteur: "Taha Houssein",
    },
    {
      theme: "Literature",
      image: "./images/Mahmoud Messadi/Essod.jfif",
      titre: "Essod",
      auteur: "Mahmoud Messadi",
    },
    {
      theme: "Literature",
      image: "./images/Mahmoud Messadi/AL Aaamal Alkamila.jfif",
      titre: "AL Aaamal Alkamila",
      auteur: "Mahmoud Messadi",
    },
    {
      theme: "Literature",
      image: "./images/Mahmoud Messadi/Haddatha Abouhouraira.jfif",
      titre: "Haddatha Abouhouraira",
      auteur: "Mahmoud Messadi",
    },
    {
      theme: "Enfants",
      image: "./images/Enfants/Aboukharbouch.jfif",
      titre: "Aboukharbouch",
      auteur: "Kamel Kilani",
    },
    {
      theme: "Enfants",
      image: "./images/Kamel Kilani/Le chasseur et le lapin.jfif",
      titre: "Le chasseur et le lapin",
      auteur: "Kamel Kilani",
    },
    {
      theme: "Enfants",
      image: "./images/Bidaya/La robe verte.jfif",
      titre: "La robe verte",
      auteur: "Bidaya",
    },
    {
      theme: "Enfants",
      image: "./images/Bidaya/Blanche Neige.jfif",
      titre: "Banche Neige",
      auteur: "Bidaya",
    },
  
    {
      theme: "Poesie",
      image: "./images/Nizar Kabani/Alaamal Acherya Alkamila.jfif",
      titre: "Alaamal Acherya Alkamila",
      auteur: "Nizar Kabani",
    },
    {
      theme: "Poesie",
      image: "./images/Abou Alkacem Achabi/Adiwane.jfif",
      titre: "Adiwane",
      auteur: "Abou Alkacem Achabi",
    },
    {
      theme: "Poesie",
      image: "./images/Ahmed Chaouki/Achaoukiat.jfif",
      titre: "Achaoukiat",
      auteur: "Ahmed Chaouki",
    },
  ];
  //AIDE A LA RECHERCHE PAR THEME ON PEUT LE FAIRE DANS UNE FONCTION ET PAR PROPRIETE
  // 1 constituer une table qui contient les valeurs de la propriété theme
  let ar1=[];
for(k=0;k<biblio.length;k++){
    ar1.push(biblio[k].theme);
};

// eliminer les occurrences du tableau ar1
let tab2 = [...new Set(ar1)];
console.log(tab2);
// créer un element select et inserer les valeurs dans les options
let parent_select=document.getElementById("i-select");
console.log(parent_select)

for(j=0;j<tab2.length;j++){
    let op2=document.createElement('option');
    let v=tab2[j];
    op2.value=v;
    op2.innerHTML=v;
    parent_select.appendChild(op2);
};


