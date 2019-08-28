import React, { Component } from "react";
import MainAnother from "../Main/MainAnother";
import { NavLink } from "react-router-dom";
import "./home.css";
class Home extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <div className="Home">
        <div>
          <MainAnother />
        </div>
        <div className="nav">
          <ul>
            <li>
              <NavLink activeClassName="active" exact to="/home">
                <span
                  className={
                    pathname === "/home"
                      ? "iconfont icon-tuijian active"
                      : "iconfont icon-tuijian"
                  }
                />
                展讯
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/home/recommend">
                <span
                  className={
                    pathname === "/home/recommend"
                      ? "iconfont icon-ziliaoneirongguanli_huaban active"
                      : "iconfont icon-ziliaoneirongguanli_huaban"
                  }
                />
                推荐
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/home/issue">
                <span
                  className={
                    pathname === "/home/issue"
                      ? "iconfont icon-fabu active"
                      : "iconfont icon-fabu"
                  }
                />
                发布
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/home/ownmessage">
                <span
                  className={
                    pathname === "/home/ownmessage"
                      ? "iconfont icon-geren active"
                      : "iconfont icon-geren"
                  }
                />
                个人
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;
