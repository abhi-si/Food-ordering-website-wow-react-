import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  console.log("hi");
  
  const { resId } = useParams();
  //!creating our own custom hook
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null)
   return  <Shimmer />;
 
  //!array destructuring
  const { name, cuisines, costForTwoMessage } = resInfo.cards[0].card.card.info;
  
  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(" , ")} -{costForTwoMessage}
      </p>

      <h2>menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs
            {item.card.info.price / 100 || item.card.info.dafaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
