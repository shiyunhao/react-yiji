import React, { Component } from "react";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.css";
import "./Swiper_news.css";
class NewsShow extends Component {
  state = {};
  componentDidMount() {
    new Swiper(".news", {
      autoplay: true,
      pagination: {
        el: ".swiper-pagination"
      },
      loop: true
    });
  }
  render() {
    return (
      <div className="NewsShow">
        <div className="swiper-container news">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/banner1.png"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bannermin_08.png"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/tuijian-pic_09.png"
                alt=""
              />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  }
}
export default NewsShow;
