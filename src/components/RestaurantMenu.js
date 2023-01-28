import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=15.8496953&lng=74.4976741&menuId=" +
        resId
    );
    const json = await data.json();
    setRestaurant(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>{restaurant.id}</h1>
        <h2>{restaurant.name}</h2>
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          className="restaurant-card-image"
        />
        <h3>{restaurant.cuisines.join(", ")}</h3>
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMsg}/-</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item, index) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
