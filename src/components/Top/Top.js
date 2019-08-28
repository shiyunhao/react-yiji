import React, { Component } from "react";
import "./top.css";
class Top extends Component {
  state = {
    isSearch: false
  };
  changeSearch = () => {
    this.setState({
      isSearch: !this.state.isSearch
    });
  };
  render() {
    const { isSearch } = this.state;
    return (
      <div className="top-container">
        <div className="top-wrapper">
          <div className="Top">
            <div>
              <img
                src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/logo.png"
                alt=""
              />
            </div>
            <div>
              <span
                onClick={this.changeSearch}
                className="iconfont icon-sousuo "
              />
            </div>
          </div>
          <div className="search" style={{ left: isSearch ? "0" : "100vw" }}>
            <div>
              <span className="iconfont icon-sousuo"></span>
              <span onClick={this.changeSearch}>X</span>
            </div>
            <div>
              <img
                src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/search_03.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Top;
