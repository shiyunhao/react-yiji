import React, { Component } from "react";
import Top from "../Top/Top";
import NewsShow from "../Swiper/NewsShow";
import TypeSwiper from "../Swiper/TypeSwiper";
import { connect } from "react-redux";
import Card from "./../Card/Card";
import "./news.css";
import { NavLink } from "react-router-dom";
class News extends Component {
  state = {
    isShow: false
  };
  changeShow = () => {
    this.setState({
      isShow: true
    });
  };
  changeBackShow = () => {
    this.setState({
      isShow: false
    });
  };
  render() {
    const { showLists } = this.props;

    const showListsNews = showLists.length
      ? showLists.filter(item => item.category.indexOf("news") !== -1)
      : [];
    const showNow = showListsNews.length
      ? showLists.filter(item => item.showTime === "now")
      : [];
    const showWill = showLists.length
      ? showLists.filter(item => item.showTime === "will")
      : [];
    const showNowLists = showNow.length
      ? showNow.map(item => (
          <NavLink to={`/articleDetails/${item.id}`} key={item.id}>
            <Card {...item} />
          </NavLink>
        ))
      : "load....";
    const showWillLists = showWill.length
      ? showWill.map(item => (
          <NavLink to={`/articleDetails/${item.id}`} key={item.id}>
            <Card {...item} />
          </NavLink>
        ))
      : "load....";
    const { isShow } = this.state;
    return (
      <div className="News">
        <Top />
        <div>
          <NewsShow />
        </div>
        <div style={{ height: "18vh" }}>
          <TypeSwiper />
        </div>
        <div className="news-container">
          <div style={{ marginLeft: isShow ? "-100vw" : "0" }}>
            <div className="show-now">
              <div>
                <span>正在展开</span>
                <span onClick={this.changeShow}>即将展开</span>
              </div>
              <div>{showNowLists}</div>
            </div>
            <div className="show-will">
              <div>
                <span onClick={this.changeBackShow}>正在展开</span>
                <span>即将展开</span>
              </div>
              <div>{showWillLists}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    showLists: state.news
  };
};
export default connect(mapStateToProps)(News);
