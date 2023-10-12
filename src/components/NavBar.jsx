import PropTypes from "prop-types";
function NavBar({ pokemonList, handleClick }) {
  return (
    <div>
      {pokemonList.map((element, currentPokemonIndex) => {
        return (
          <button
            key={element.name}
            onClick={() => {
              handleClick(currentPokemonIndex);
            }}
          >
            {element.name}
          </button>
        );
      })}
      ;
    </div>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NavBar;
