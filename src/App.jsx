import React from "react";
import {Routes,Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
// import About from "./Components/About";
const LazyAbout =React.lazy(()=> import("./Components/About"))

import Ordersummary from "./Components/Ordersummary";
import NoMatch from "./Components/NoMatch";
import Product from "./Components/Product";
import FeaturedProduct from "./Components/FeaturedProduct";
import NewProduct from "./Components/NewProduct";
import Users from "./Components/Users";
import Userdetail from "./Components/Userdetail";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
                <Route path="/about" element={<LazyAbout/>} />

        <Route path="/order-summary" element={<Ordersummary/>}/>
        <Route path="/product" element={<Product/>}>
        <Route index element={<FeaturedProduct/>}/>
          <Route path='featured' element={<FeaturedProduct/>}/>
          <Route path="new" element={<NewProduct/>}/>
        </Route>

          <Route path="users" element={<Users/>}/>
          <Route path="users/:userid" element={<Userdetail/>}/>
          
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </div>
  );
}

export default App;
