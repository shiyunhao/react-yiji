import React, { Component } from "react";
import { connect } from "react-redux";
import "./articleDetails.css";
import { changeIsLike, addComment } from "./../../store/actions";
class ArticleDetails extends Component {
  state = {
    showAll: false,
    showMap: false,
    showShare: false,
    showRecommend: false,
    val: ""
  };
  changeShowAll = () => {
    this.setState({
      showAll: !this.state.showAll
    });
  };
  changeShowMap = () => {
    this.setState({
      showMap: !this.state.showMap
    });
  };
  changeShowShare = () => {
    this.setState({
      showShare: !this.state.showShare
    });
  };
  changeShowRecommende = () => {
    this.setState({
      showRecommend: !this.state.showRecommend
    });
  };
  changeVal = e => {
    if (e.target.value.trim()) {
      this.setState({
        val: e.target.value
      });
    }
  };
  addNewComment = ({ id, val }) => {
    this.props.addComment({ id, val }, () => {
      this.setState({
        val: "",
        showRecommend: !this.state.showRecommend
      });
    });
  };
  render() {
    const { id } = this.props.match.params;
    const { showLists } = this.props;
    const { showAll, showMap, showShare, showRecommend, val } = this.state;

    const showPag = showLists.length
      ? showLists.find(item => item.id === id)
      : "loading...";
    const { articleDetails } = showPag;

    const { comment } = articleDetails;
    const { paragraph } = articleDetails;
    const { imgs } = articleDetails;
    // 下边是数组 ，上边是 数据的简写
    const lessComment = comment.slice(0, 2);
    const recommentList = comment.length ? (
      showAll ? (
        <ul>
          {comment.map(item => (
            <li key={item.id}>
              <div>
                <img src={item.commentImg} alt="" />
              </div>
              <div>
                <span>{item.commentName}</span>
                <span>{item.commentTime}</span>
                <span>{item.commentText}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {lessComment.map(item => (
            <li key={item.id}>
              <div>
                <img src={item.commentImg} alt="" />
              </div>
              <div>
                <span>{item.commentName}</span>
                <span>{item.commentTime}</span>
                <span>{item.commentText}</span>
              </div>
            </li>
          ))}
        </ul>
      )
    ) : (
      "loadinf..."
    );
    const showWhat = showAll ? (
      <p onClick={this.changeShowAll}>展示少量评论</p>
    ) : (
      <p onClick={this.changeShowAll}>
        展开全部{comment.length}条评论
        <span className="iconfont icon-xia"></span>
      </p>
    );
    const showText = paragraph.length ? (
      paragraph.map(item => <p key={item.id}>{item.showText}</p>)
    ) : (
      <p>没有文字介绍</p>
    );
    const showImgs = imgs.length
      ? imgs.map(item => (
          <div key={item.id}>
            <img src={item.showImg} alt="" />
          </div>
        ))
      : "loading...";
    const showIsLike = showPag.isLike ? (
      <span
        onClick={() => this.props.changeIsLike(id)}
        className="iconfont icon-xin"
      >
        <span>&nbsp;关注</span>
      </span>
    ) : (
      <span
        onClick={() => this.props.changeIsLike(id)}
        className="iconfont icon-xin1"
      >
        <span>&nbsp;关注</span>
      </span>
    );
    return showPag.hadMessage ? (
      <div className="ArticleDetails-main">
        <div className="ArticleDetails-wrapper">
          <div className="ArticleDetails">
            <span
              className="iconfont icon-zuo goBack"
              onClick={() => {
                this.props.history.go(-1);
              }}
            ></span>
            <div>
              <img src={showPag.imgSrc} alt="" />
            </div>
            <div className="showTitle">
              <div>
                <span>{articleDetails.showTitle}</span>
              </div>
              {showText}
            </div>
            <div className="author">
              <div>
                <img src={articleDetails.authorImg} alt="" />
              </div>
              <p>{articleDetails.authorText}</p>
            </div>
            <div className="imgs">{showImgs}</div>
            <div className="recomment">
              <div>
                <span>{articleDetails.commentTitle}</span>
              </div>
              {recommentList}
            </div>
            <div className="moreRecomment">{showWhat}</div>
            <div className="artivleDetail-footer">
              {showIsLike}
              <span
                className="iconfont icon-luxian"
                onClick={this.changeShowMap}
              >
                &nbsp;到这
              </span>
              <span
                className="iconfont icon-fenxiang"
                onClick={this.changeShowShare}
              >
                &nbsp;分享
              </span>
              <span
                className="iconfont icon-xiaoxi1"
                onClick={this.changeShowRecommende}
              >
                &nbsp;评论
              </span>
            </div>
          </div>
          <div
            className="ArticleDetails_map"
            style={{ left: showMap ? "0" : "100vw" }}
          >
            <span
              onClick={this.changeShowMap}
              className="iconfont icon-zuo"
            ></span>
            <img
              src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/ditu.jpg"
              alt=""
            />
          </div>
          <div
            className="dark"
            onClick={this.changeShowShare}
            style={{ display: showShare ? "block" : "none" }}
          ></div>
          <div
            className="shareWay"
            style={{ bottom: showShare ? "0" : "-50vh" }}
          >
            <p>分享到</p>
            <div>
              <div>
                <img
                  src="https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/share_03.jpg"
                  alt=""
                />
                <span>艺集</span>
              </div>
              <div>
                <span className="iconfont icon-weixin"></span>
                <span>微信</span>
              </div>
              <div>
                <span className="iconfont icon-weibo"></span>
                <span>微博</span>
              </div>
              <div>
                <span className="iconfont icon-qq"></span>
                <span>QQ</span>
              </div>
            </div>
            <p onClick={this.changeShowShare}>取消</p>
          </div>
          <div
            className="addComment"
            style={{ left: showRecommend ? "0" : "100vw" }}
          >
            <div>
              <span
                className="iconfont icon-zuo"
                onClick={this.changeShowRecommende}
              ></span>
              <span>评论</span>
              <span
                className="iconfont icon-fabu"
                onClick={() => {
                  this.addNewComment({ id, val });
                }}
              ></span>
            </div>
            <div>
              <textarea
                placeholder="这里需要你的评论"
                value={val}
                onChange={this.changeVal}
              ></textarea>
            </div>
            <div>
              <span className="iconfont icon-tupian"></span>
              <span className="iconfont icon-zhaoxiangji"></span>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <h1>来了，老弟</h1>
    );
  }
}
const mapStateToProps = state => {
  return {
    showLists: state.news
  };
};
export default connect(
  mapStateToProps,
  { changeIsLike, addComment }
)(ArticleDetails);
