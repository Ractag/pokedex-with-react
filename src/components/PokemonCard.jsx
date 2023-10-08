// tableau pokemonList
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
//fonction pokemonCard()
function PokemonCard() {
//variable contenant le pokemon à l'index 0 du tableau pokemonList, peut être 0 ou 1
  const pokemon = pokemonList[0];
//la fonction renvoie ()
  return (
    <div>
      <figure>
        {pokemon.imgSrc ? ( //si pokemon.imgSrc existe
          <img src={pokemon.imgSrc} alt={pokemon.name}/> //on renvoie une image, avec pour source l'imgSrc à l'index 0 de pokemon + alt
        ) : ( // sinon
          <p>???</p> //on renvoie ??? dans une balise p
        )}
      </figure>
      <figcaption>{pokemon.name}</figcaption> {/* pour afficher le nom du pokemon */}
    </div>
  );
}

export default PokemonCard;
