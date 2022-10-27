const cep = document.getElementById('cep')
const url = (cep) => `https://viacep.com.br/ws/${cep}/json/`
const opcao = {
  method: 'GET',
  mode: 'cors',
  cache: 'default'
}

const showData = (resultado) => {

  //  MANEIRA DE COMPLETAR CAMPO USANDO ARRAYS.
  // Object.entries(resultado).forEach(([id, valor]) => {
  //   if(document.querySelector(`#${id}`)){
  //     document.querySelector(`#${id}`).value = valor
  //   }    
  // });
  
  for (const campo in resultado){
    if(document.querySelector("#"+campo)){
      document.querySelector("#"+ campo).value = resultado[campo]
    }
  }
}

cep.addEventListener("blur", (event) => {
  const cepResult = cep.value.replace("-","")

  const response = fetch(url(cepResult), opcao)
    .then(response => response.json())
    .then(data => showData(data))
    .catch(error => {
      console.log(error.message)
    })
})


cep.addEventListener("keypress", function(event){
  const cepResult = cep.value.replace("-","")
  if (event.key === "Enter"){
    event.preventDefault();

    const response = fetch(url(cepResult), opcao)
      .then(response => response.json())
      .then(data => showData(data))
      .catch(error => {
        console.log(error.message)
      })
  }
})


function ativaDesativaMenu(){
  document.querySelector('.menu').classList.toggle('active')
  document.querySelector('.nav-2').classList.toggle('ativo')
}

function mostrarAcessibilidade(){
  document.querySelector('.acess-nav').classList.toggle('ativo')
}