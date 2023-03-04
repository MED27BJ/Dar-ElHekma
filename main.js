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
  // constituer une table qui contient les valeurs de la prop
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

// var arr=[
//   {titre:"elayem",
//   theme:"literature",
//   auteur:"taha houssein",
// },
// {titre:"elou3ed el hak",
//   theme:"literature",
//   auteur:"taha houssein",
// },
// {titre:"zaman elboes",
//   theme:"literature",
//   auteur:"taha houssein",
// },
// {titre:"trois",
//   theme:"literature",
//   auteur:"ali",
// },
// {titre:"quatre",
//   theme:"literature",
//   auteur:"ali",
// },
// {titre:"trois",
//   theme:"literature",
//   auteur:"saleh",
// },
// {titre:"quatre",
//   theme:"literature",
//   auteur:"saleh",
// },
// {titre:"trois",
//   theme:"art",
//   auteur:"ali",
// },
// {titre:"quatre",
//   theme:"art",
//   auteur:"ali",
// },
// {titre:"trois",
//   theme:"kart",
//   auteur:"ali",
// },
// {titre:"quatre",
//   theme:"sart",
//   auteur:"ali",
// },
// {titre:"cin",
//   theme:"sart",
//   auteur:"salem",
// },
// ];

// console.log(arr);
// arr.sort((a,b) => (a.auteur.localeCompare(b.auteur)&&a.theme.localeCompare(b.theme)));
// console.log(arr);

// let b=document.getElementById("moyen").selectedIndex;

// console.log(b);
// let sel1= document.createElement('select');
// sel1.id = 'list';
// console.log(arr[1].theme);
// console.log(sel1);
// console.log(arr.length);

// for(j=0;j<arr.length;j++){
//   let op=document.createElement('option');
//   let v=arr[j].theme;
//   op.innerHTML=v;
//   sel1.appendChild(op);
// };
// document.body.appendChild(sel1);
// var propriete1=Object.keys(arr[0])[0];
// var propriete2=Object.keys(arr[0])[1];
// var propriete3=Object.keys(arr[0])[2];
// console.log(propriete3);

// let ar2=[];
// for(k=0;k<arr.length;k++){
//   ar2.push(arr[k].theme);
// };
// let tab2 = [...new Set(ar2)];
// console.log(tab2);
// let ar3=[];
// for(k=0;k<arr.length;k++){
//   ar3.push(arr[k].auteur);
// };
// let tab3 = [...new Set(ar3)];
// console.log(tab3);

// let chemin=document.getElementById("trop");
// olth=document.createElement('ol');
// olth.id=propriete2;
// olth.innerHTML=propriete2;
// chemin.appendChild(olth);


// for (i=0;i<tab2.length;i++){
//   let x=tab2[i];
// let li1=document.createElement('li');
// li1.id=tab2[i];
// li1.innerHTML=tab2[i];
// olth.appendChild(li1);
// let olaut=document.createElement('ol');
// olaut.id=propriete3;
// olaut.innerHTML=propriete3;
// li1.appendChild(olaut);
// let ol_auteur=document.getElementById("auteur");
// };
// let ola_auteur=document.getElementsByName("auteur");
// console.log(ola_auteur);



