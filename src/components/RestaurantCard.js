const RestaurantCard = ({ image, name, cuisine, rating, resId }) => {
  return (
    <div className="restaurant-card" key={resId}>
      <img className="restaurant-card-image" src={image.url} />
      <h4>{name}</h4>
      <h4 className="cuisines">
        {cuisine[1].name},&nbsp;
        {cuisine[0].name},&nbsp;
        {cuisine[2]?.name}
      </h4>
      <h4>* {rating.aggregate_rating}</h4>
    </div>
  );
};

export default RestaurantCard;
