import React, { Component } from "react";
import "./card.css";
class Card extends Component {
  state = {};

  render() {
    const imgMessage = this.props;
    const showDays =
      imgMessage.time > 0 ? (
        <span>剩余 {imgMessage.time} 天</span>
      ) : imgMessage.time === 0 ? (
        <span style={{ backgroundColor: "#111" }}>已结束</span>
      ) : (
        ""
      );
    const showLook =
      imgMessage.look < 1000 ? (
        <span className="iconfont icon-chakan">{imgMessage.look}</span>
      ) : (
        <span className="iconfont icon-chakan">
          {(imgMessage.look / 1000).toFixed(1) + "k"}
        </span>
      );
    const showLike = imgMessage.isLike ? (
      <span style={{ color: "red" }} className="iconfont icon-xin">
        <span>{imgMessage.like}</span>
      </span>
    ) : (
      <span className="iconfont icon-xin1">
        <span>{imgMessage.like}</span>
      </span>
    );
    const showMessage =
      imgMessage.message > 1000 ? (
        <span className="iconfont icon-xiaoxi1">
          {(imgMessage.message / 1000).toFixed(1) + "k"}
        </span>
      ) : (
        <span className="iconfont icon-xiaoxi1">{imgMessage.message}</span>
      );
    return (
      <div className="Card">
        <div>
          <img src={imgMessage.imgSrc} alt="" />
        </div>
        <div className="card_message">
          <div>{showDays}</div>
          <div>
            <span className="iconfont icon-fenxiang" />
            {showLike}
            {showLook}
            {showMessage}
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
