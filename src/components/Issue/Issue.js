import React, { Component } from "react";
import "./issue.css";
class Issue extends Component {
  state = {};
  render() {
    return (
      <div className="Issue">
        <div>
          <span>上传照片</span>
          <span className="iconfont icon-fabu" />
        </div>
        <div>
          <textarea placeholder="说点什么...." />
          <div>
            <div>
              <span className="iconfont icon-tupian" />
              <span>点击添加图片</span>
            </div>
            <span className="iconfont icon-zhaoxiangji" />
          </div>
        </div>
        <div>
          <span className="iconfont icon-dizhi">
            <span>&nbsp;点击获取地址</span>
          </span>
          <span className="iconfont icon-biaoqian">
            <span>&nbsp;添加标签</span>
          </span>
        </div>
      </div>
    );
  }
}
export default Issue;
