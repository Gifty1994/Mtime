import React, { Component } from "react";
import "./index.css";

import {NavLink} from "react-router-dom";


class Bottom extends Component {
    render() {
        return <div id="Bottom">
            <footer className="footer">
                <nav className="link">
                    <ul>
                        <li>
                            <NavLink to="/home">
                                <span>首页</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/tickets">
                                <span>购票</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="shop">
                                <span>商城</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/discover">
                                <span>发现</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="logo">
                                <span>我的</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="footlink">
                    <ul className="bottom">
                        <li>
                            <a href="http://www.mtime.com/rdtopc">
                                <span>PC端</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>客户端下载</span>
                            </a>
                        </li>
                        <li>
                            <NavLink to="#">
                                <span>意见反馈</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <span>帮助中心</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="copy">
                    <p>
                        <img src="../../../assets/fot_logo.png" className="mtime_pic" alt=""/>
                        <img src="../../../assets/h_mark.jpg" className="work_pic" alt=""/>
                    </p>
                    <p>Copyright 2006-2018 Mtime.com Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    }
}

export default Bottom;