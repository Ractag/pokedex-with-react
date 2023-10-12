import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import "./App.css";
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
  const handleClick = (currentPokemonIndex) => {
    setCurrentPokemonIndex(currentPokemonIndex);
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[currentPokemonIndex]} />
      <NavBar pokemonList={pokemonList} handleClick={handleClick} />
    </div>
  );
}

export default App;
