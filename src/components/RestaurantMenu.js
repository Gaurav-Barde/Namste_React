import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="p-4 flex">
      <div className="mr-2">
        <h1 className="text-2xl">{restaurant.name}</h1>
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
        <ul data-testid="menu">
          {Object.values(restaurant?.menu?.items).map((item, index) => (
            <li key={item.id} className="my-4">
              <span className="mr-1">{item.name}</span>
              <button
                data-testid="add-to-cart-btn"
                className="bg-green-300 p-1 px-2 rounded-md"
                onClick={() => handleAddToCart(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
