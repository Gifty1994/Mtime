import React, { Component } from "react";
import "./index.css";
import Bottom from "../Bottom";
import { NavLink } from "react-router-dom";
import { Icon } from 'antd';
import axios from "axios";


class Search extends Component {

    constructor(){
        super();
        this.state = {
            keyword:[]
        }
    }

    render() {
        return <div id="Search">
            <div className="movie_search">
                <div className="hea_search">
                    <NavLink to="/home">
                        <Icon type="left" theme="outlined" />
                    </NavLink>

                    <div className="input">
                        <img src="../../../assets/search_ico_01.png" alt="" />
                        <input type="text" placeholder="影片/影院/影人，任你搜"/>
                    </div>

                    <div className="button">
                        <span>搜索</span>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="box">
                    <div className="hotsou">
                        <span>热门搜索</span>
                    </div>

                    <div className="keyword">
                        {
                            this.state.keyword.map(item=>
                                <span key={item}>{item}</span>
                            )
                        }
                    </div>
                </div>

                
            </div>
           <Bottom></Bottom>
		</div>
    }

    componentDidMount(){
        axios.get("/Service/callback.mi/Search/HotKeyWords.api?t=201811218201050662").then(res=>{
            console.log(res.data);
            this.setState({
                keyword: res.data.keywords
            })
        })
    }
}

export default Search;