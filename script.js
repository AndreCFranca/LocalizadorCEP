// CAPTURA DOS INPUTS E BUTTON DO HTML
const searchCep = document.querySelector('.searchCep')
const buttonSearch = document.querySelector('.buttonSearch')

const street = document.querySelector('.street')
const distric = document.querySelector('.distric')
const city = document.querySelector('.city')
const ufEstado = document.querySelector('.uf')
const number = document.querySelector('.number')
const complement = document.querySelector('.complement')

// INTREGRAÇÃO COM A API VIACEP
const searchApi = async (cepNumber) => {
  const response = await axios.get(
    `https://viacep.com.br/ws/${cepNumber}/json/`
  )
  const { bairro, uf, logradouro, localidade, complemento } = response.data

  street.value = logradouro
  distric.value = bairro
  city.value = localidade
  ufEstado.value = uf
  complement.value = complemento
}

// CRIAÇÃO DE EVENTO DE ENVIO PARA O BOTÃO
buttonSearch.addEventListener('submit', (event) => {
  event.preventDefault()
  searchApi(searchCep.value)
})
