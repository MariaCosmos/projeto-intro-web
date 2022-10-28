const louva = {
  nome:"Louva-a-deus",
  mesesVida: 12,
  carnivoro: true,
  habitat: ["Angola", "Brasil", "Taiwan"]
}

const formiga = {
  nome:"Formiga-de-fogo",
  mesesVida: 24,
  carnivoro: false,
  habitat:["Brasil", "Argentina", "Paraguai"]
}

const besouro = {
  nome:"Besouro-hércules",
  mesesVida:5,
  carnivoro:false,
  habitat:["Brasil", "Guatemala", "Honduras"]
}

const insetos = []

insetos.push(louva, formiga, besouro)

let mediaVida = Number((louva.mesesVida+formiga.mesesVida+besouro.mesesVida)/3)

console.log("a média do tempo de vida dos 3 incetos é:", mediaVida)

const todosCarnivoros = louva.carnivoro && formiga.carnivoro && besouro.carnivoro

console.log("Todos os incetos são carnivoros:", todosCarnivoros)

for(i in louva){
  console.log(`${i}: ${louva[i]}`)
}
 for(j in formiga){
  console.log(`${j}: ${formiga[j]}`)
}

 for(m in besouro){
  console.log(`${m}: ${besouro[m]}`)
 }

const incetos = []

if(louva.carnivoro){
  incetos.push(louva)
}else{
  //alert(`item ${louva.nome} não adicionado`)
}
if(formiga.carnivoro){
  incetos.push(formiga)
}else{
  //alert(`item ${formiga.nome} não adicionado`)
}
if(besouro.carnivoro){
  incetos.push(besouro)
}else{
  //alert(`item ${besouro.nome} não adicionado`)
}

function relatorio (objeto){
  const string = [];
  for(n in objeto){
    string.push(`${i}: ${objeto[i]}`)
  }
  return string
}

console.log(relatorio(louva))
console.log(relatorio(formiga))
console.log(relatorio(besouro))

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

const container = document.getElementsByClassName("container")
console.log(container)

function renderizar(array) {
  let listagem = []
  for(i in array){
    listagem += 
    `<article class="louva">
       <ul id="louva">
         <li id="nomeLouva">Nome:<a href="https://pt.wikipedia.org/wiki/Louva-a-deus">${array[i].nome}</a></li>
         <li>Tempo de vida estimado: ${array[i].mesesVida}</li>
         <li>Carnivoro? ${array[i].carnivoro}</li>
         <li>Habitat: ${array[i].habitat}</li>
       </ul>
     </article>`
  }
  return listagem
}

console.log(renderizar(insetos))

const texto = "<p>blablabla</p>"
container.innerHTML += texto

