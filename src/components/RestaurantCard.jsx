import{ CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
   const { resData } = props;
   return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
         <img className="res-logo"  src={CDN_URL} />
         <h3>{resData.data.resName} </h3>
         <h4>{resData.data.cuisine.join(", ")}</h4>
         <h4>{resData.data.rating}</h4>
         <h4>{resData.data.deliveryTime}</h4>
         <h4>Rs {resData.data.costForTwo/100}</h4>


      </div>
   )
}
export default RestaurantCard;