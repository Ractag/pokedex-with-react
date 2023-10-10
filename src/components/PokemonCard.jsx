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

export default PokemonCard;
