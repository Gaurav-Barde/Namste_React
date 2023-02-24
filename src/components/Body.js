import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useIsOnline from "../utils/useIsOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { user, setUser } = useContext(UserContext);

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
  const isOnline = useIsOnline();

  if (!isOnline)
    return <h1>🔴 You are Offline. Please check your internet connection!</h1>;

  if (!allRestaurants) return null;

  return !allRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="bg-pink-50 my-3 p-3">
      <div className="py-10 px-6">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // setRestaurants(restaurantList);
          }}
          className="p-1"
          data-testid="search-input"
        />
        <button
          className="mx-3 bg-purple-200 hover:bg-purple-300 transition-all p-1 px-4 rounded-sm"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
          data-testid="search-btn"
        >
          Search
        </button>
      </div>
      <div data-testid="restaurants" className="flex flex-wrap">
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
    </div>
  );
};

export default Body;
