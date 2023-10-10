import PropTypes from 'prop-types';

function PokemonCard(props) {
  const { name, imgSrc } = props.pokemon;
  return (
    <div>
      <figure>
        <img src={imgSrc} alt={name} />
      </figure>
      <figcaption>{name}</figcaption>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired}).isRequired
}

export default PokemonCard;
