import React, { Component } from "react";
import "./index.css";
import {NavLink} from "react-router-dom";
import axios from "axios";
import { Icon } from 'antd';

import store from "../../store";



class HotCity extends Component {

    constructor() {
        super();
        this.state = {
            hotcitylist:[]
        }
    }


    render() {
        return <div id="HotCity">
            <header>
                <NavLink to="/home"><Icon type="left" theme="outlined" /></NavLink>
                <h2>选择城市</h2>
            </header>

            <div className="input">
                <div className="inner">
                    <Icon type="search" theme="outlined" />
                    <input type="text" placeholder="请输入搜索关键词"/>
                </div>
            </div>

            <ul>
                {
                    this.state.hotcitylist.map(item=>
                        <li key={item.id} onClick={this.handleClick.bind(this, item.id, item.n)}>
                            {item.n}
                        </li>    
                    )
                }
            </ul>
        </div>
    }

    componentDidMount(){
        axios.get("/api/proxy/ticket/Showtime/HotCitiesByCinema.api?_=1541067356067").then(res=>{
            console.log(res.data);
            this.setState({
                hotcitylist:res.data.p
            })
        })

        
    }

    handleClick(id,n){
        store.dispatch({
            type: "copyid",
            payload: id
        })

        store.dispatch({
            type: "changetitle",
            payload: n
        })

        // console.log(this);
        this.props.history.push("/home");
    }
}

export default HotCity;