var biblio = [
    {
      theme: "Literature",
      image: "./images/TahaHoussein/ElAyem.jfif",
      titre: "El Ayem",
      auteur: "Taha Houssein",
    },
    {
      theme: "Literature",
      image: "./images/TahaHoussein/ElwaedElhak.jfif",
      titre: "Elwaed Elhak",
      auteur: "Taha Houssein",
    },
    {
      theme: "Literature",
      image: "./images/TahaHoussein/Chaikhan.jfif",
      titre: "AL Aaamal Alkamila",
      auteur: "Taha Houssein",
    },
    {
      theme: "Literature",
      image: "./images/MahmoudMessadi/Essod.jfif",
      titre: "Essod",
      auteur: "Mahmoud Messadi",
    },
    {
      theme: "Literature",
      image: "./images/MahmoudMessadi/ALAaamalAlkamila.jfif",
      titre: "AL Aaamal Alkamila",
      auteur: "Mahmoud Messadi",
    },
    {
      theme: "Literature",
      image: "./images/MahmoudMessadi/HaddathaAbouhouraira.jfif",
      titre: "Haddatha Abouhouraira",
      auteur: "Mahmoud Messadi",
    },
    {
      theme: "Enfants",
      image: "./images/KamelKilani/Aboukharbouch.jfif",
      titre: "Aboukharbouch",
      auteur: "Kamel Kilani",
    },
    {
      theme: "Enfants",
      image: "./images/KamelKilani/Lechasseuretlelapin.jfif",
      titre: "Le chasseur et le lapin",
      auteur: "Kamel Kilani",
    },
    {
      theme: "Enfants",
      image: "./images/Bidaya/Larobeverte.jfif",
      titre: "La robe verte",
      auteur: "Bidaya",
    },
    {
      theme: "Enfants",
      image: "./images/Bidaya/BlancheNeige.jfif",
      titre: "Banche Neige",
      auteur: "Bidaya",
    },
  
    {
      theme: "Poesie",
      image: "./images/NizarKabani/AlaamalAcheryaAlkamila.jfif",
      titre: "Alaamal Acherya Alkamila",
      auteur: "Nizar Kabani",
    },
    {
      theme: "Poesie",
      image: "./images/AbouAlkacemAchabi/Adiwane.jfif",
      titre: "Adiwane",
      auteur: "Abou Alkacem Achabi",
    },
    {
      theme: "Poesie",
      image: "./images/AhmedChaouki/Achaoukiat.jfif",
      titre: "Achaoukiat",
      auteur: "Ahmed Chaouki",
    },
  ];
//   console.log(biblio[0].theme);
//   biblio.map((el)=>{
//   const card = `<ol class="ol-theme">
//   <ol class="ol-themes" type="I">
//     <li>
//       ${el.theme}
//       <ol class="ol-livre">
//           <li>
//             <a href="#">
//               <img src="${el.image}" />
//               <h4 class="titre">${el.titre}</h4>
//               <h4 class="auteur">${el.auteur}</h4>
//             </a>
//           </li>
//       </ol>
//   </li>
// </ol>`
// document.querySelector('.themes').innerHTML+= card ;
// })
  biblio.map((el)=>{
     // blog sera implementer dans le map function
  var olLivre = document.querySelector(".ol-livre")
  console.log(olLivre)
  const liCont = document.createElement("li")
  const aCont = document.createElement("a")
  liCont.appendChild(aCont)
  const imageCont = document.createElement("img")
  imageCont.src = el.image
  const h4UnCont = document.createElement("h4")
  h4UnCont.innerHTML=el.titre
  const h4DeuxCont = document.createElement("h4")
  h4DeuxCont.innerHTML=el.auteur
  aCont.appendChild(imageCont)
  aCont.appendChild(h4UnCont)
  aCont.appendChild(h4DeuxCont)
  olLivre.appendChild(liCont)
  //end blog

  }) 

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
