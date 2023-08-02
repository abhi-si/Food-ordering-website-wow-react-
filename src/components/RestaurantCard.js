import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    costForTwo,
    cuisines,
    locality,
    sla,
    
    
  } = resData;
  //!here i change = resData?.data; to resData; as swiggy api updated
  return (
    <div className=" m-4 p-4  w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300 h-fit">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        // src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dlt4ml0id5wei4yi840b"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="flex-auto ">{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
      <h4>{locality }</h4>
    </div>
  );
};

//!higher order component it is use to enhance the component by adding extra feature without changing the original component

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};


export default RestaurantCard;