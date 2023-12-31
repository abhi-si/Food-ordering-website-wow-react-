import { useState } from "react";
import ItemList from "./ItemList";
 const RestaurantCategory = ({ data,showItems,setShowIndex}) => {

   // const [showItems,setShowItems] = useState(false);
  //! lifting the state up 

    const handleClick = () => {
        // setShowItems(true);
        // making toogle feature
        // setShowItems(!showItems);
        setShowIndex();
    };
    // console.log(data);
    return (
      <div>
        {/* header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4  ">
          <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg ">
              {data.title}({data.itemCards.length})
            </span>
            <span>▼</span>
                </div>
                {/* if  showItems is true only the show ItemList */}
          {showItems && <ItemList items={data.itemCards} />}
         
        </div>
      </div>
    );
    
}

export default RestaurantCategory;