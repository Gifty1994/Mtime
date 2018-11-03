import React, { Component } from "react";
import "./index.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Bottom from "../Bottom";
import Navbar from "../Navbar";

import { Icon } from 'antd';

import store from "../../store";

class Home extends Component {
    constructor () {
        super();
        this.state={
            homelist:[],
            number:"",
            img:[],
            hotpoint:[],
            id: store.getState().myId,
            // hotcitylist: [],
            title: store.getState().myTitle
        }
    }

    componentWillMount(){
        store.subscribe(()=>{
            this.setState({
                id: store.getState().myId
            })
        })

        store.subscribe(() => {
            this.setState({
                title: store.getState().myTitle
            })
        })
        console.log(this.state.title);
        console.log(this.state.id);

        window.scrollTo(0, 0);
        
    }

    render() {
        return <div id="Home">

            <Navbar></Navbar>

            <div className="movie_search">
                <div className="hea_search">
                    <NavLink to="/hotcity">
                        <div className="city">
                            <span>{this.state.title}</span>
                            <img src="../../../assets/i_city.png" alt="" />
                        </div>
                    </NavLink>
                    

                    <div className="input">
                        <img src="../../../assets/search_ico_01.png" alt="" />
                        <NavLink to="/Search">影片/影院/影人，任你搜</NavLink>
                    </div>
                </div>
            </div> 

            <div className="nowplay">
                <h2>
                    <NavLink to="#">
                        <span>正在热映({this.state.homelist.length}部)</span>
                        <Icon type="right" theme="outlined" />
                    </NavLink>
                </h2>

                <ul>
                    {
                        this.state.homelist.map(item=>
                            <li key={item.id}>
                               <div className="mdic">
                                    <img src={item.img} alt="" />

                                    {
                                        item.r===-1?null:<span>{item.r}</span>
                                    }
                                    
                               </div> 
                               <p>{item.t}</p>
                            </li>
                        )
                    }
                </ul>
            </div>

            <div className="comingplay">

                <h2>
                    即将上映({this.state.number})部
                    <Icon type="right" theme="outlined" />
                </h2>
                
            </div>

            <div className="banner">
                    <img src={this.state.img} alt=""/>
            </div>

            <div className="hotpoint">
            
                    <h2>今日热点</h2>
                    <ul>
                        {
                            this.state.hotpoint.map(item=>
                                <li key={item.id}>
                                    <div className="pic">
                                    <img src={item.img} alt=""/>
                                    </div>
                                    <div className="todytext">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    {/* <p>{item.title}</p> */}
                                    </div>
                                </li> 
                            )
                        }
                        
                    </ul>
            </div>

            {
                this.props.children
            }
            
            <Bottom></Bottom>
		</div>
    }

    componentDidMount(){
        // console.log(this.props.match.params.num);
        // this.setState({
        //     id: this.props.match.params.num
        // })
        axios.get(`/Service/callback.mi/Showtime/LocationMovies.api?locationId=${this.state.id}&t=20181111557361014`).then(res => {
        //    console.log(res.data);
           this.setState({
               homelist:res.data.ms,
               number: res.data.totalComingMovie
           })
       })

        axios.get("/Service/callback.mi/PageSubArea/MallAreaFirstH5Url.api?t=2018103118421886763").then(res=>{
            // console.log(res.data);
            this.setState({
                img: res.data.areaFirst.image
            })
        })

        axios.get("/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2018103118421861555").then(res => {
            // console.log(res.data);
            this.setState({
                hotpoint: res.data.hotPoints
            })
        })

        // axios.get("/api/proxy/ticket/Showtime/HotCitiesByCinema.api?_=1541067356067").then(res => {
        //     console.log(res.data);
        //     this.setState({
        //         hotcitylist: res.data.p
        //     })
        // })
    }

}

export default Home;