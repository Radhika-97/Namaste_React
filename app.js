import react from "react";
import ReactDOM from "react-dom/client";
      //Header

const Header = () => {
return (
<div className="header">
     <div className="logo-container">
      <img className="logo" src="https://img.magnific.com/free-psd/vintage-pizzeria-logo-design_23-2151236943.jpg?semt=ais_hybrid&w=740&q=80" />
      </div>
   
      <div className="nav-items">
         <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Cart</li>

         </ul>
      </div> 

</div> 
)
}
const styleCard =  {

}
const RestaurantCard = () => {
   return (
   <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img className="res-logo" src="https://img.magnific.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?semt=ais_hybrid&w=740&q=80" />
      <h3>Dominos </h3>
      <h4>Pizza, Fast Food</h4>
      <h4>4.5 Stars</h4>
      <h4>38 mins</h4>

   </div>
   )
}
      //Body
const Body =() => {
   return (
      <div className="body">
         <div className="Search">Search</div>
         <div className="res-container">
            {/* //Retaurant Card */}
            <RestaurantCard />
            <RestaurantCard />

            <RestaurantCard />

            <RestaurantCard />

            <RestaurantCard />

            <RestaurantCard />

            <RestaurantCard />

            <RestaurantCard />

            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />

            


         </div>

      
      </div>
   );
}
const AppLayout = () => {
   return (<div className="app">
           
      <Header />
      <Body />

   </div>)
}
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout />);
