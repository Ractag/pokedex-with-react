import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);
  const totalPokemon = pokemonList.length;

  const handleNextPokemon = () => {
    if (currentPokemonIndex < totalPokemon - 1) {
      setCurrentPokemonIndex(currentPokemonIndex + 1);
    } else {
      setCurrentPokemonIndex(0);
    }
  };

  const handlePreviousPokemon = () => {
    if (currentPokemonIndex > 0) {
      setCurrentPokemonIndex(currentPokemonIndex - 1);
    } else {
      setCurrentPokemonIndex(totalPokemon - 1);
    }};

    return (
      <div>
        <PokemonCard pokemon={pokemonList[currentPokemonIndex]} />
        <NavBar
          handlePreviousPokemon={handlePreviousPokemon}
          handleNextPokemon={handleNextPokemon}
        />
      </div>
    );
  }


export default App;
