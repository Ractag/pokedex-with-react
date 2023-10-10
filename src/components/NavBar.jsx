import PropTypes from 'prop-types';
function NavBar({handleNextPokemon, handlePreviousPokemon}) {
    
    return (
      <div>
        <button onClick={handlePreviousPokemon}>Précédent</button>
        <button onClick={handleNextPokemon}>Suivant</button>
      </div>
    )
  }
  
  NavBar.propTypes = {
    
      handlePreviousPokemon: PropTypes.func.isRequired,
      handleNextPokemon: PropTypes.func.isRequired
    
  }

  export default NavBar;