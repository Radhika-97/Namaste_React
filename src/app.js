import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
const styleCard = {

}
const RestaurantCard = (props) => {
   const { resData } = props;
   return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
         <img className="res-logo" src="https://img.magnific.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?semt=ais_hybrid&w=740&q=80" />
         <h3>{resData.data.resName} </h3>
         <h4>{resData.data.cuisine.join(", ")}</h4>
         <h4>{resData.data.rating}</h4>
         <h4>{resData.data.deliveryTime}</h4>
         <h4>Rs {resData.data.costForTwo/100}</h4>


      </div>
   )
}


const AppLayout = () => {
   return (<div className="app">

      <Header />
      <Body />

   </div>);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
