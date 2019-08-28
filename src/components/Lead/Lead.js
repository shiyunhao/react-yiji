import React, { Component } from "react";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.css";
import "./lead.css";

class Lead extends Component {
  componentDidMount() {
    new Swiper(".lead");
  }
  state = {
    text: "123456",
    val: "asdfqwer"
  };
  changeText = e => {
    this.setState({
      text: e.target.value
    });
  };
  changeVal = e => {
    this.setState({
      val: e.target.value
    });
  };
  changeIsSwiper = payload => {
    if (payload.text === "123456" && payload.val === "asdfqwer") {
      this.props.history.push("/home");
    } else {
      alert("密码与账号不匹配");
      this.setState({
        val: "",
        text: ""
      });
    }
  };
  render() {
    const { text, val } = this.state;
    return (
      <div className="Lead">
        <div className="swiper-container lead">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/lead1.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/lead2.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/lead3.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/lead4.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <div>
                <h4>-2019-8-23</h4>
                <p>今日推送>></p>
              </div>
            </div>
            <div className="swiper-slide login">
              <div>
                <div>
                  <div>
                    <input
                      type="text"
                      placeholder="点击输入手机号/Email登录"
                      value={text}
                      onChange={this.changeText}
                    />
                    <input
                      type="text"
                      placeholder="输入密码"
                      value={val}
                      onChange={this.changeVal}
                    />
                    <div>
                      <button
                        onClick={() => this.changeIsSwiper({ text, val })}
                      >
                        登录
                      </button>
                      <button>注册</button>
                    </div>
                  </div>
                  <p>
                    <span>√</span> 登录或注册表示同意
                    <span style={{ color: "#fff" }}>用户安全协议</span>
                  </p>
                </div>
                <div>
                  <span className="iconfont icon-weibo">&nbsp;&nbsp;微博</span>
                  <span className="iconfont icon-weixin">&nbsp;&nbsp;微信</span>
                  <span className="iconfont icon-qq">&nbsp;&nbsp;QQ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Lead;
