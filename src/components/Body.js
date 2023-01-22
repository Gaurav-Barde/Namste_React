import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState } from "react";

const filterData = (searchText, restaurants) => {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant.info.name.toLowerCase().includes(searchText);
  });
  console.log(filteredData);
  return filteredData;
};

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  let [searchText, setSearchText] = useState("");

  console.log(restaurants);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-bar"
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.resId} {...restaurant.info} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
