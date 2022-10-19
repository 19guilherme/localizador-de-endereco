const cep = document.getElementById('cep')

const showData = (resultado) => {
  for (const campo in resultado){
    if(document.querySelector("#"+campo)){
      document.querySelector("#"+ campo).value = resultado[campo]

    }
  }
}

cep.addEventListener("keypress", function(event){
  const cepResult = cep.value.replace("-","")
  if (event.key === "Enter"){
    event.preventDefault();

    const opcao = {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    }

    const response = fetch(`https://viacep.com.br/ws/${cep.value}/json/`, opcao)
    .then(response => {response.json()
      .then( data => showData(data));
    })
  }
})


function clicar(){
  const botao = document.querySelector('.menu').classList.toggle('active')
  let nav2 = document.querySelector('.nav-2').classList.toggle('ativo')
}

function mostrar(){
  console.log('clicado')
  let acessNav = document.querySelector('.acess-nav').classList.toggle('ativo')
  console.log(acessNav)
}