    // Variáveis para buscar os elementos da tela:
    const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
    const pokemonCard = document.querySelectorAll('.cartao-pokemon')

    listaSelecaoPokemons.forEach(pokemon => {
        
    pokemon.addEventListener('click', () => {
    //remover a class "aberto" - só do cartão que está aberto.
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')

    // Ao clicar em um pokemon da listagem pega-se o id dele. 
    const idPokemonSelecionado = pokemon.attributes.id.value

    const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
    cartaoPokemonParaAbrir.classList.add('aberto')

    // remover a class ativa do pokemon selecionado.
    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')

    //adicionar a classe ativo no item da lista selecionado.
    const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaListagem.classList.add('ativo')

        })
    });