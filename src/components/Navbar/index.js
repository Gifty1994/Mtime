import React, { Component } from "react";
import "./index.css";
import {NavLink} from "react-router-dom";


class Navbar extends Component {
    render() {
        return <div id="Navbar">
           <ul>
               <li>
                   <NavLink to="/home" className="mtime">
                       <img src="../../../assets/logo_mtime.png" alt=""/>
                   </NavLink>      
               </li>
               <li><NavLink to="/home" activeClassName="avtive">首页</NavLink></li>
               <li><NavLink to="/tickets" activeClassName="avtive">购票</NavLink></li>
               <li><NavLink to="/shop" activeClassName="avtive">商城</NavLink></li>
               <li><NavLink to="/discover" activeClassName="avtive">发现</NavLink></li>
               <li>
                    <NavLink to="/logo" className="myself">
                        <img src="../../../assets/ico_my.png" alt="" />
                    </NavLink> 
               </li>
           </ul>
		</div>
    }
}

export default Navbar;