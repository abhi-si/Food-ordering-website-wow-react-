import RestaurantCard, {withPromotedLabel } from "./RestaurantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [whatsOnYourMind, setWhatsOnYourMind] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  //!higher order component
  
  // console.log("body is rendered")
  
  useEffect(() => {
    fetchData();
  }, []);
 
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(
      json);
    
    // setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    //! I AM CHANGING THIS BECAUSE SWIGGY API IS UPDATED
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
     setFilteredRestaurants(
       json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
         ?.restaurants
     );
  };

  //!using custom hook onlinestatus
  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false)
    return (<h1>Looks like you are offline!!
      Please check your internet connection</h1>);

 //!conditional rendering
  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
    
  }
  
    
    
    //using ternary operator
  // return listOfRestaurants?.length === 0 ? (
  //   <Shimmer />
  // ) : (
  return (
    <div className="body">
      <div className="filter flex ">
        <div className="search  mx-16 p-4">
          <input
            type="text"
            placeholder="search restaurants"
            className="border  border-black rounded-lg px-4 py-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-1 bg-green-100 mx-1 my-4 rounded-lg hover:bg-red-500"
            onClick={() => {
              //filter rest card and update ui
              // console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res?.data?.name
                  ?.toLowerCase()
                  ?.includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className=" m-4 p-4 flex items-center">
          <button
            className=" px-4 py-2 bg-gray-100 rounded-lg hover:bg-sky-300"
            onClick={() => {
              console.log("button click is working");
              //!filter logic

              const filteredList = listOfRestaurants.filter(
                // (res) => res.data?.avgRating > 4
                (res) => res?.info?.avgRating > 4.2
              );
              console.log(filteredList);
              setFilteredRestaurants(filteredList);
            }}
          >
            Top rated restaurant
          </button>
        </div>
      </div>
      <div className="res-container grid grid-cols-4 mx-16 gap-4 ">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            // key={restaurant.data.id}
            // to={"/restaurant/" + restaurant.data.id}
            //!I AM CHANGING THIS BECAUSE SWIGGY API IS UPDATED
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            {restaurant?.data?.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;