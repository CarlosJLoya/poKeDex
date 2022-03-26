//console.log("Hola explorers");

//fetch peticion a un appi
//Peticion a un appi es asincrona recibe una promesa (esperar la respuesta).then
//Se le llama a manejar las peticiones asincronas stacks de programacion
let n = 0
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');
const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};

const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/charizard-pokemon.gif");
        }
        else {
            return res.json();
        }
        // console.log(res);

    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeNombre = data.name;
        const { stats, types } = data;

        console.log(pokeImg);
        pokeImage(pokeImg, pokeNombre);
        pokeEsta(types);
        pokeType(types);
        pokeStat(stats);
    })

}
const fetchPokemonUp = () => {

    n += 1;
    if (n > 57) {
        n = 0;
    }
    let lista = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle"
        , "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata",
        "Raticate", "Spearow", "Fearow", "Ekans",
        "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran",
        "Nidorino",
        "Nidoking", "Clefairy", "Clefable",
        "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras",
        "Parasect", "Venonat", "Venomoth", "Diglett",
        "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe"];

    let pokeInput = lista[n].toLowerCase();
    // const pokeName = document.getElementById("pokeName");
    //let pokeInput = pokeName.value.toLowerCase();
    console.log(pokeInput)
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/charizard-pokemon.gif");
        }
        else {
            return res.json();
        }
        // console.log(res);

    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeNombre = data.name;
        const { stats, types } = data;

        console.log(pokeImg);
        pokeImage(pokeImg, pokeNombre);
        pokeEsta(types);
        pokeType(types);
        pokeStat(stats);

    })

}

const fetchPokemonDown = () => {

    n -= 1;
    if (n < 0) {
        n = 57;
    }
    let lista = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle"
        , "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata",
        "Raticate", "Spearow", "Fearow", "Ekans",
        "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran",
        "Nidorino",
        "Nidoking", "Clefairy", "Clefable",
        "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras",
        "Parasect", "Venonat", "Venomoth", "Diglett",
        "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe"];

    let pokeInput = lista[n].toLowerCase();
    // const pokeName = document.getElementById("pokeName");
    //let pokeInput = pokeName.value.toLowerCase();
    console.log(pokeInput)
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/charizard-pokemon.gif");
        }
        else {
            return res.json();
        }
        // console.log(res);

    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeNombre = data.name;
        const { stats, types } = data;

        console.log(pokeImg);
        pokeImage(pokeImg, pokeNombre);
        pokeEsta(types);
        pokeType(types);
        pokeStat(stats);
    })

}
//DOM document Objet Model traer del HTML
//fetchPokemon();

const pokeImage = (url, pokeNombre) => {
    const pokeImg = document.getElementById("pokeImg");
    const pokeNom = document.getElementById("pokeNombre");
    pokeNom.innerHTML = pokeNombre;
    pokeImg.src = url;

}
const pokeEsta = types => {
    const colorUno = typeColors[types[0].type.name];
    const colorDos = types[1] ? typeColors[types[1].type.name] : typeColors.default;
    pokeImg.style.background = `radial-gradient(${colorDos} 33%, ${colorUno} 33%)`;
    pokeImg.style.backgroundSize = ' 5px 5px';
}

const pokeType = types => {

    pokeTypes.innerHTML = '';

    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.innerHTML = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}
const pokeStat = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    })
}
//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png")

//const imprimir = () => {
//    const pokeName = document.getElementById("1");
//    let pokeInput = pokeName.value;
//    console.log("" + pokeInput);

//}
