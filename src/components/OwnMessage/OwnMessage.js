import React, { Component } from "react";
import "./ownMessage.css";
class OwnMessage extends Component {
  state = {
    isChangeMessage: false,
    isChangeInstall: false,
    isAutomatic: true,
    isRemind: false,
    isChangePortrait: false
  };
  showMessage = () => {
    this.setState({
      isChangeMessage: !this.state.isChangeMessage
    });
  };
  showInstall = () => {
    this.setState({
      isChangeInstall: !this.state.isChangeInstall
    });
  };
  showAutomatic = e => {
    if (e.target.className !== "tureChange") {
      this.setState({
        isAutomatic: !this.state.isAutomatic
      });
    }
  };
  showRemind = e => {
    if (e.target.className !== "tureChange") {
      this.setState({
        isRemind: !this.state.isRemind
      });
    }
  };
  showPortrait = () => {
    this.setState({
      isChangePortrait: !this.state.isChangePortrait
    });
  };
  render() {
    const {
      isChangeInstall,
      isChangeMessage,
      isAutomatic,
      isRemind,
      isChangePortrait
    } = this.state;
    return (
      <div className="OwnMessage">
        <div>
          <div className="own-show">
            <div className="own-top">
              <div>
                <span
                  onClick={this.showInstall}
                  className="iconfont icon-shezhi"
                ></span>
              </div>
              <div>
                <img
                  onClick={this.showMessage}
                  src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/User-info_01%20(2).png"
                  alt=""
                />
              </div>
              <div>
                <span>阴天不下雨</span>
              </div>
              <div>
                <div>
                  <span>关注</span>
                  <span>11</span>
                </div>
                <div>
                  <span>发布</span>
                  <span>9</span>
                </div>
                <div>
                  <span>访客</span>
                  <span>49</span>
                </div>
              </div>
            </div>
            <div className="own-middle">
              <div>
                <span>异象云集</span>
                <span>
                  ALL <span className="iconfont icon-you"></span>
                </span>
              </div>
              <div>
                <div>
                  <img
                    src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/User-pic_11.png"
                    alt=""
                  />
                  <span>订阅/11</span>
                </div>
                <div>
                  <img
                    src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/User-pic_13.png"
                    alt=""
                  />
                  <span>订阅/9</span>
                </div>
                <div>
                  <img
                    src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/User-pic_15.png"
                    alt=""
                  />
                  <span>订阅/49</span>
                </div>
              </div>
            </div>
            <div className="own-footer">
              <div>
                <span>原创</span>
                <span>缓存</span>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div
            className="own-change"
            style={{ left: isChangeMessage ? "0" : "100vw" }}
          >
            <div>
              <span
                className="iconfont icon-zuo"
                onClick={this.showMessage}
              ></span>
              <img
                src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/logo.png"
                alt=""
              />
            </div>
            <div>
              <ul>
                <li onClick={this.showPortrait}>
                  <span>头像</span>
                  <div>
                    <img
                      src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/User-info_01%20(2).png"
                      alt=""
                    />
                    <span className="iconfont icon-you"></span>
                  </div>
                </li>
                <li>
                  <span>背景</span>
                  <div>
                    <span>更换</span>
                    <span className="iconfont icon-you"></span>
                  </div>
                </li>
                <li>
                  <span>名字</span>
                  <div>
                    <span>阴天不下雨</span>
                    <span className="iconfont icon-you"></span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <span>我的二维码</span>
                  <div>
                    <img
                      src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/User-info_07.png"
                      alt=""
                    />
                    <span className="iconfont icon-you"></span>
                  </div>
                </li>
                <li>
                  <span>我的地址</span>
                  <div>
                    <span>河北省 秦皇岛市</span>
                    <span className="iconfont icon-you"></span>
                  </div>
                </li>
                <li className="privacy">
                  <span>隐私</span>
                  <div>
                    <span>!</span>
                    <span className="iconfont icon-you"></span>
                  </div>
                </li>
              </ul>
              <p>为保护用户隐私，请您尽量选择默认隐私设置</p>
            </div>
            <div
              className="mask"
              style={{ display: isChangePortrait ? "block" : "none" }}
            >
              <div className="dark" onClick={this.showPortrait}></div>
              <div className="choice">
                <div>
                  <span>进入相册选择</span>
                  <span>拍一张</span>
                </div>
                <p onClick={this.showPortrait}>取消</p>
              </div>
            </div>
            <div></div>
          </div>
          <div
            className="own-install"
            style={{ left: isChangeInstall ? "0" : "100vw" }}
          >
            <div>
              <span
                onClick={this.showInstall}
                className="iconfont icon-zuo"
              ></span>
              <img
                src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/logo.png"
                alt=""
              />
            </div>
            <div>
              <ul>
                <li className="showSwitch">
                  <span>自动离线缓存</span>
                  <span>
                    <span
                      onClick={this.showAutomatic}
                      className={isAutomatic ? "tureChange" : ""}
                    >
                      开
                    </span>
                    <span>/</span>
                    <span
                      onClick={this.showAutomatic}
                      className={isAutomatic ? "" : "tureChange"}
                    >
                      关
                    </span>
                  </span>
                </li>
                <li>
                  <span>wifi 状态下自动缓存高清作品</span>
                  <span className="iconfont icon-you"></span>
                </li>
                <li className="showSwitch">
                  <span>使用流量状态下提醒</span>
                  <span>
                    <span
                      onClick={this.showRemind}
                      className={isRemind ? "tureChange" : ""}
                    >
                      开
                    </span>
                    <span>/</span>
                    <span
                      onClick={this.showRemind}
                      className={isRemind ? "" : "tureChange"}
                    >
                      关
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <span>消息推送</span>
                </li>
                <li>
                  <span>意见反馈</span>
                </li>
                <li>
                  <span>当前版本</span>
                </li>
                <li>
                  <span>关于艺集</span>
                </li>
              </ul>
            </div>
            <div>
              <span>退出登录</span>
              <p>当前版本 1.0.42</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OwnMessage;
