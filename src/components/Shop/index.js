import React, { Component } from "react";
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios';
import 'antd-mobile/dist/antd-mobile.css';
import "./index.scss";
import Bottom from "../Bottom";
import Navbar from "../Navbar";



class Shop extends Component {

	constructor(){
		super()
		this.state={
			data:[1,2,3],
			navigatorIconList:[],
			cellB:"",
			cellC:[],
			topic:[],
			topicSubList:[],
			topic1:[],
			category:[],
			categoryList:[],
			ECommerce:[]
		}
	}

	
	 componentDidMount() {
		axios.get("/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=201810311431230125").then((res)=>{
			console.log(res.data.category)
			this.setState({
				data:res.data.scrollImg,
				navigatorIconList:res.data.navigatorIcon,
				cellB:res.data.cellB.img,
				cellC:res.data.cellC.list,
				topic:res.data.topic.slice(0,4),
				topic1:res.data.topic[0],
				topicSubList:res.data.topic[0].subList,
				category:res.data.category,
				categoryList:res.data.category
			})
		})

		axios.get("/Service/callback.mi/ECommerce/RecommendProducts.api?t=20181111053618289&goodsIds=&pageIndex=1").then(res=>{
			console.log(res.data)
			this.setState({
				ECommerce:res.data.goodsList
			})
		})
	  }


    render() {
        return (
        <div id="Shop">

        <Navbar></Navbar>
        	{/*头部搜索*/}
           <div className="shop">
				<div className="shopNav">
					<ul>
						<li><i className="iconfont icon-search"></i></li>
						<li><input type="text" placeholder="搜索正版电影周边"/></li>
						<li><i className="iconfont icon-cart"></i></li>
					</ul>
				</div>
           </div>


			
			{/*头部轮播*/}
			<WingBlank>
			        <Carousel
			          autoplay={true}
			          autoplayInterval='3000'
			          infinite
			        >
			          {this.state.data.map(val => (
			            <a
			              key={val}
			              href="http://www.alipay.com"
			              style={{ display: 'inline-block', width: '100%' }}
			            >
			              <img
			                src={val.image}
			                alt=""
			                style={{ width: '100%', verticalAlign: 'top' }}
			              />
			            </a>
			          ))}
			        </Carousel>
			</WingBlank>
			  

			
			<div className="navigatorIcon">
				<ul>
					{this.state.navigatorIconList.map(item=>
							<li>
								<img src={item.image} alt=""/>
								<p>{item.iconTitle}</p>
							</li>
						)
					}
				</ul>
			</div>


			{/*专区*/}
			<div className="cell">
				<div className="cellAC">
					<div className="cellA"></div>
					<div className="cellC">
						{
							this.state.cellC.map(item=>
								<img src={item.image} alt=""/>
							)
						}
					</div>
				</div>
				<div className="cellB">
					<img src={this.state.cellB} alt=""/>
				</div>
			</div>

			
			{/*星球大战*/}
			<div className="topic" style={{background:'url(http://img5.mtime.cn/mg/2018/07/20/155300.52298962.jpg) no-repeat center',backgroundSize:'contain'}}>
				{
					this.state.topic.map(item=>
					<img src={item.checkedImage} alt=""/>
					)
				}			
			</div>


			<div className="topicSubList">
				<h4>{this.state.topic1.titleEn}</h4>
				<h3>{this.state.topic1.titleCn}</h3>
				<div className="goods">
					{
						this.state.topicSubList.map(item=>
							<div>
								<img src={item.image} alt=""/>
								<p>{item.title}</p>
							</div>
						)
					}
				</div>
				<div className="moregoods">
					<a>更多商品 ></a>
				</div>
			</div>




			{/*玩具模型*/}
			{
				this.state.category.map(item=>
					<div className="category">
						<div className="category1">
							<span></span>
							<span>{item.name}</span>
							<span>更多></span>
						</div>
						<div className="category2">
							<img src={item.image} alt=""/>
						</div>
						<div className="category3">
						<div className="category3-1"><span></span></div>
							{item.subList.map(item=>
								<span className="category3-2">
									<img src={item.image} alt=""/>
									<p>{item.title}</p>
								</span>
							)}
						</div>
					</div>
				)

			}



			{/*你可能感兴趣*/}
			<div className="interest">—————— * 你可能感兴趣的——————</div>


			{this.state.ECommerce.map(item=>
				<div className="interest1">
					<img src={item.image} alt=""/>
					<p>{item.name}</p>
				</div>
				
			)}		
	

			<div className="jiazai">奋力加载中。。。</div>


			<Bottom></Bottom>

		</div>)



    }
}

export default Shop;