import React, { useEffect } from 'react'
import { MENU_API } from "../utils/constant";

//!this is our 1st custom hook
//!the major responsibility of this component is to only display the data not worry about fetching the data
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
      
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };
    return resInfo;
};

export default useRestaurantMenu;
