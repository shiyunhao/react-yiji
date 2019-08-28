import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import "./typeShow.css";
class TypeShow extends Component {
  state = {};
  render() {
    const { type } = this.props.match.params;
    const { showLists, swiperImgs } = this.props;
    // 数据
    const typeLists = showLists.length
      ? showLists.filter(item => item.type === type)
      : [];
    //   筛选数组
    const showTypeList = typeLists.length ? (
      typeLists.map(item => <Card {...item} key={item.id} />)
    ) : (
      <div className="nothing">
        <span>抱歉近期没有相关的展览信息</span>
      </div>
    );
    // 显示
    const bgImg = swiperImgs.length
      ? swiperImgs.find(item => item.type === type)
      : "loading...";
    // 背景图
    return (
      <div className="TypeShow">
        <div style={{ backgroundImage: `url(${bgImg.imgSrc})` }}>
          <span className="iconfont icon-sousuo"></span>
          <span onClick={() => this.props.history.go(-1)}>X</span>
        </div>
        <div
          className="typeShowList"
          style={{ backgroundImage: `url(${bgImg.imgSrc})` }}
        >
          {showTypeList}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    showLists: state.news,
    swiperImgs: state.typeSwiper
  };
};
export default connect(mapStateToProps)(TypeShow);
