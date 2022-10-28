
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

let elemento = document.createElement('li')
let texto = document.createTextNode("berinjela")
elemento.appendChild(texto)
console.log(elemento)

let lista = document.getElementById("formiga")
console.log(lista)
lista.insertAdjacentElement("beforebegin", elemento)


//aqui tentei adcionar um texto qualquer ("Berinjela") na Li que criei (na variavel "elemento") o objetivo é fazer com que esse texto entre e depois de obter sucesso trabalhar com os objetos. 

//observe que no console.log da linha 88 é impresso a nossa Li já com o texto, o que indica que a lógica da linha 85 à 87 está certa. O problema é na linha 90, que ao dar console.log imprime "null", o que indica que não está conseguindo encontrar o elemento pelo Id.

