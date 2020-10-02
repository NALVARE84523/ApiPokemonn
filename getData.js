let lista = document.getElementById('lista-pokemon')

function consultarPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function (respoonse){
        respoonse.json()
        .then(function(pokemon){
            crearPokemon(pokemon)
        });
    });
}

function consultarPokemones(){
    let id = Math.round(Math.random() * 750);
    consultarPokemon(id);
}

function crearPokemon(pokemon){
    let item = lista.querySelector(`#pokemon`);
    let imagen = item.getElementsByTagName('img')[0];
    imagen.setAttribute('src', pokemon.sprites.front_default);
    let nombre = item.getElementsByTagName('p')[0];
    nombre.textContent = pokemon.name;
}

consultarPokemones();