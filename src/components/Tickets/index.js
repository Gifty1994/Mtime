import React, { Component } from "react";
import "./index.css";
import Bottom from "../Bottom";
import Navbar from "../Navbar";


class Tickets extends Component {
    render() {
        return <div id="Tickets">
            <Navbar></Navbar>
           这是购票页面Tickets
           <Bottom></Bottom>
		</div>
    }
}

export default Tickets;