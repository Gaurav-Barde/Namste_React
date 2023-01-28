import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const filterData = (searchText, restaurants) => {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant?.data?.name
      .toLowerCase()
      ?.includes(searchText.toLowerCase());
  });
  return filteredData;
};

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.875628420654445&lng=74.46725349671841&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;

  return !allRestaurants.length ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // setRestaurants(restaurantList);
          }}
          className="search-bar"
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {!filteredRestaurants.length ? (
          <h1>No restaurant matches your search</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
