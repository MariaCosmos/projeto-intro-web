const louva = {
  grupo:"Louva-a-deus",
  nome:"Louva-a-deus-Chinês",
  mesesVida: 12,
  carnivoro: true,
  paises: [" China ", " Taiwan "],
  link:"https://pt.wikipedia.org/wiki/Louva-a-deus-chin%C3%AAs"
}

const marimbondo = {
  grupo:"Marimbondo",
  nome:"cabatatu",
  mesesVida: 2,
  carnivoro: false,
  paises:[" Alemanha ", " Japão ", " Paraguai "],
  link:"https://pt.wikipedia.org/wiki/Synoeca_cyanea"
}


const formiga = {
  grupo:"Formiga",
  nome:"Formiga-de-fogo",
  mesesVida: 24,
  carnivoro: false,
  paises:[" Brasil ", " Argentina ", " Paraguai "],
  link:"https://pt.wikipedia.org/wiki/Formiga-de-fogo"
}

const formiga2 = {
  grupo:"formiga",
  nome:"Formiga-cabo-verde",
  mesesVida: 24,
  carnivoro: false,
  paises:[" Brasil ", " China ", " Paraguai "],
  link:"https://pt.wikipedia.org/wiki/Formiga-cabo-verde"
} 

const besouro = {
  grupo:"Besouro",
  nome:"Besouro-hércules",
  mesesVida:5,
  carnivoro:false,
  paises:[" Brasil ", " Guatemala ", " Honduras "],
  link:"https://pt.wikipedia.org/wiki/Besouro-h%C3%A9rcules"
}

const besouro2 = {
  grupo:"Besouro",
  nome:"Cerambicídeo-gigante",
  mesesVida: 10,
  carnivoro: false,
  paises:[" Brasil ", " Canadá ", " Angola "],
  link:"https://pt.wikipedia.org/wiki/Titanus_giganteus"
}

const insetos = []

insetos.push(louva, formiga, besouro, formiga2, besouro2, marimbondo)

function objetoStrig (array,string){
  const objetoreturn = {}
  for(i in array){
    if(i,array[i] === string){
      objetoreturn.push(string)
    }else{ console.log("Nenhum item encontrado")}
  }
  return objetoreturn
}
console.log(objetoStrig(louva, formiga[0]))

//Adicionando as informações dos objetos ao HTML utilizando DOM

const container = document.querySelector(".container")
console.log(container)

function renderizarCards(array) {
  let listagem = [""]
  for(i in array){
    listagem += 
    `<article class="louva">
       <ul id="louva">
         <li>Grupo: ${array[i].grupo}</li>
         <li>Nome: <a href="${array[i].link}" target="_blank">${array[i].nome}</a></li>
         <li>Tempo de vida estimado: ${array[i].mesesVida}</li>
         <li>Carnivoro? ${array[i].carnivoro}</li>
         <li>Países: ${array[i].paises}</li>
       </ul>
     </article>`
  }
  return container.innerHTML=listagem
}
console.log(renderizarCards(insetos))

const pesquisa = document.querySelector(".pesquisa")
console.log(pesquisa.value)


function pesquisando(){
  const array = []
  for(i in insetos){
    if(pesquisa.value.toUpperCase() === insetos[i].grupo.toUpperCase()){
      array.push(insetos[i])
    }else if(pesquisa.value.toUpperCase() === ""){
      renderizarCards(insetos)
    }
  }
  return renderizarCards(array)
}