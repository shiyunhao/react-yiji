import React, { Component } from "react";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.css";
import "./Swiper_news.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
class TypeSwiper extends Component {
  componentDidMount() {
    new Swiper(".typeSwiper", {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 10,
      slidesOffsetBefore: 100
    });
  }
  render() {
    const { swiperImgs } = this.props;
    const swiperShow = swiperImgs.length
      ? swiperImgs.map(item => (
          <div className="swiper-slide" key={item.id}>
            <NavLink to={`/home/${item.type}`}>
              <img src={item.imgSrc} alt="" />
            </NavLink>
          </div>
        ))
      : "load...";
    return (
      <div className="TypeSwiper">
        <div className="swiper-container typeSwiper">
          <div className="swiper-wrapper">{swiperShow}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    swiperImgs: state.typeSwiper
  };
};
export default connect(mapStateToProps)(TypeSwiper);
