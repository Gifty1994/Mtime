import React, { Component } from "react";
import "./index.css";
import Bottom from "../Bottom";
import Navbar from "../Navbar";


class Discover extends Component {
    render() {
        return <div id="Discover">
            <Navbar></Navbar>
           这是发现页面Discover
           <Bottom></Bottom>
		</div>
    }
}

export default Discover;