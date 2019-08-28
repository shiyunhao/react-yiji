const swiperImgs = [
  {
    id: "z1",
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bannermin_10.png",
    type: "painting"
  },
  {
    id: "z2",
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bannermin_13.png",
    type: "ink"
  },
  {
    id: "z3",
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bannermin01_02.png",
    type: "design"
  },
  {
    id: "z4",
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bannermin01_04.png",
    type: "shoot"
  },
  {
    id: "z5",
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bannermin02_03.png",
    type: "sculpture"
  },
  {
    id: "z6",
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bannermin02_05.png",
    type: "device"
  }
];
export default (state = swiperImgs, action) => {
  switch (action.type) {
    case "":
      return;
    default:
      return state;
  }
};
