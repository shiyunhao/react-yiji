import React, { Component } from "react";
import Top from "../Top/Top";
import "./recommend.css";
import { connect } from "react-redux";
import Card from "../Card/Card";
class Recommend extends Component {
  state = {
    showWen: false
  };
  changeShowWen = () => {
    this.setState({
      showWen: !this.state.showWen
    });
  };
  render() {
    const { showLists } = this.props;
    const { showWen } = this.state;
    const recommentShowLists = showLists.length
      ? showLists.filter(item => item.category.indexOf("recommend") !== -1)
      : [];
    const zhanShowLists = recommentShowLists.length
      ? recommentShowLists.filter(item => item.recommendType === "zhan")
      : [];
    const wenShowLists = recommentShowLists.length
      ? recommentShowLists.filter(item => item.recommendType === "wen")
      : [];
    console.log(wenShowLists);

    // map
    const zhanList = zhanShowLists.length
      ? zhanShowLists.map(item => <Card {...item} key={item.id} />)
      : "loading...";
    const wenList = wenShowLists.length
      ? wenShowLists.map(item => <Card {...item} key={item.id} />)
      : "loading...";
    return (
      <div className="Recommend">
        <Top />
        <div className="recommend-container">
          <div
            style={{ marginLeft: showWen ? "-100vw" : "0" }}
            className="recommend-wrapper"
          >
            <div className="recommend-zhan">
              <div>
                <span>展</span>
                <span onClick={this.changeShowWen}>文</span>
              </div>
              {zhanList}
            </div>
            <div className="recommend-wen">
              <div>
                <span onClick={this.changeShowWen}>展</span>
                <span>文</span>
              </div>
              {wenList}
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
export default connect(mapStateToProps)(Recommend);
