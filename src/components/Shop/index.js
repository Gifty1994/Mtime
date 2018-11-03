import React, { Component } from "react";
import "./index.css";
import Bottom from "../Bottom";
import Navbar from "../Navbar";


class Shop extends Component {
    render() {
        return <div id="Shop">
            <Navbar></Navbar>
           这是商城页面shop
           <Bottom></Bottom>
		</div>
    }
}

export default Shop;