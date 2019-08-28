import { CHANGE_ISLIKE, ADD_COMMENT } from "../actionsTypes";
const showLists = [
  {
    id: "a01",
    hadMessage: true,
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/index-pic_01.png",
    time: 10,
    like: 159,
    message: 9,
    look: 394,
    isLike: true,
    showTime: "now",
    type: "shoot",
    category: "news",
    articleDetails: {
      showTitle: "展览内容",
      paragraph: [
        {
          id: "q12",
          showText:
            "本次展览将从人像摄影室肖全为杨丽萍拍摄的中低频摄影中挑选出一组精品向观众展示。"
        },
        {
          id: "q13",
          showText:
            "一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家，两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真是的杨丽萍是什么样的？25日开始的“心动”展，无疑极大的聊起了人们的好奇心。"
        }
      ],
      authorImg:
        "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao1_02.jpg",
      authorText:
        "肖全，男，1959年生于四川成都，曾任深圳《街道 》杂志摄影记苜，被称为'中国最好的人像摄影师'。1980年代中期开始'我们这一代'拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
      imgs: [
        {
          id: "i1",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao2_02.jpg"
        },
        {
          id: "i2",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao3_04.jpg"
        },
        {
          id: "i3",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao4_06.jpg"
        }
      ],
      commentTitle: "展览评论",
      comment: [
        {
          id: "p1",
          commentText: "挺好的，特别喜欢这种风格",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p2",
          commentText: "漂亮",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p3",
          commentText: "性感小姐姐",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p4",
          commentText: "喜欢",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        }
      ]
    }
  },
  {
    id: "a02",
    hadMessage: true,
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/index-pic_03.png",
    time: 12,
    like: 239,
    message: 52,
    look: 526,
    isLike: false,
    showTime: "now",
    type: "painting",
    category: "news",
    articleDetails: {
      showTitle: "展览内容",
      paragraph: [
        {
          id: "q12",
          showText:
            "曾健勇出生于广东澄海一一个笃信基督教的家庭，在今天这样一个“解构”、“去历史化”、“反宏大叙事”莫名其妙流行的年代，他力图通过自己的思考、创作和展览，以”大洪荒”、“启示录”、“复乐园”三幕视觉场景，重建一个关于人类和自我的”编年史”。以时间为轴展开的三幕，既充满了历史的必然宿命，也展现了自身内部的复杂冲突，这是一个身处历史内部的当代艺术家力图对“历史”的理解和重写。"
        },
        {
          id: "q13",
          showText: "第一幕大洪荒。"
        },
        {
          id: "q14",
          showText:
            " 大洪荒是历史的终结，也是历史的开端。上帝毁灭了旧人类，创造了新人类。义人诺亚在神的指引下，带领自己的家人和各种动物登上方舟，从而躲过灾难。新人诺亚把一年分为12个月、 每个月30天，“编年史”由此开始。大洪荒几乎在所有文明的源头中都能找到，然而，它不仅是一个关于正义与邪恶、忠告与背弃、选择与放弃、毁灭与拯救的简单故事，更是人类历史中不断重现的伦理”原型”。这里，它显现为一场旷日持久的战争。"
        },
        {
          id: "q15",
          showText: "第二幕启示录"
        },
        {
          id: "q16",
          showText:
            "战争是人类社会和人类历史永恒的主题，主宰巴比伦大城的大赤龙招来海上的兽，与羊和羊的信众激战。圣徒们最终获胜，灾难降临，巴比伦大城在一日之内土崩瓦解。上帝揭开第七封印，跟随龙和兽助纣为孽的罪人在末日审判中受到彻底毁灭的惩罚。启示录发生在何时?与大洪荒-样，在永恒的《圣经》中，在过去的《浮士德》中，在今天的恐怖主义，也在未来的预言中。末日审判之后，“编年史”由此翻篇，美丽新世界再次显现。"
        },
        {
          id: "q17",
          showText: "第三幕复乐园"
        },
        {
          id: "q18",
          showText:
            "在东方，四条大河围绕灌溉之地，.上帝 为亚当和夏娃建造了伊甸园，大地上满是奇花异草和黄金珠宝，鸟兽不绝、五谷丰登。因受蛇之诱惑，他们偷食善恶树果，而被驱逐出乐园，终日辛勤。亚当夏娃之子该隐杀兄开始，人类进入一次又一次不断重复的“启示录”。末日审判之后，历史再次轮回，完美之境重现，乐园失而复得，历史在这里得以永恒。然而，复乐园也可能是完关地狱，在这里，经验的历史永远继续，而精神的历史却已然完结。"
        }
      ],
      authorImg:
        "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian1_02.jpg",
      authorText:
        "曾健勇，男，1971年11月出生于广东澄海，毕业于国立华侨大学艺术系中国画专业；进入中央美术学院版画研修班学习；职业：画家。",
      imgs: [
        {
          id: "i11",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian2_04.jpg"
        },
        {
          id: "i12",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian3_06.jpg"
        },
        {
          id: "i13",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian4_08.jpg"
        },
        {
          id: "i14",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian5_10.jpg"
        }
      ],
      commentTitle: "展览评论",
      comment: [
        {
          id: "p11",
          commentText: "挺好的，特别喜欢这种风格",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p21",
          commentText: "漂亮",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p31",
          commentText: "性感小姐姐",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p41",
          commentText: "喜欢",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        }
      ]
    }
  },
  {
    id: "a03",
    hadMessage: false,
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/index-pic_05.png",
    time: 0,
    like: 319,
    message: 39,
    look: 226,
    isLike: true,
    showTime: "now",
    type: "ink",
    category: "news",
    articleDetails: {
      showTitle: "展览内容",
      paragraph: [
        {
          id: "q12",
          showText:
            "本次展览将从人像摄影室肖全为杨丽萍拍摄的中低频摄影中挑选出一组精品向观众展示。"
        },
        {
          id: "q13",
          showText:
            "一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家，两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真是的杨丽萍是什么样的？25日开始的“心动”展，无疑极大的聊起了人们的好奇心。"
        }
      ],
      authorImg:
        "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao1_02.jpg",
      authorText:
        "肖全，男，1959年生于四川成都，曾任深圳《街道 》杂志摄影记苜，被称为'中国最好的人像摄影师'。1980年代中期开始'我们这一代'拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
      imgs: [
        {
          id: "i1",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao2_02.jpg"
        },
        {
          id: "i2",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao3_04.jpg"
        },
        {
          id: "i3",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao4_06.jpg"
        }
      ],
      commentTitle: "展览评论",
      comment: [
        {
          id: "p1",
          commentText: "挺好的，特别喜欢这种风格",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p2",
          commentText: "漂亮",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p3",
          commentText: "性感小姐姐",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p4",
          commentText: "喜欢",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        }
      ]
    }
  },
  {
    id: "a04",
    hadMessage: false,
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/index-pic_07.png",
    time: 2,
    like: 119,
    message: 17,
    look: 926,
    isLike: true,
    showTime: "now",
    type: "ink",
    category: "news",
    articleDetails: {
      showTitle: "展览内容",
      paragraph: [
        {
          id: "q12",
          showText:
            "曾健勇出生于广东澄海一一个笃信基督教的家庭，在今天这样一个“解构”、“去历史化”、“反宏大叙事”莫名其妙流行的年代，他力图通过自己的思考、创作和展览，以”大洪荒”、“启示录”、“复乐园”三幕视觉场景，重建一个关于人类和自我的”编年史”。以时间为轴展开的三幕，既充满了历史的必然宿命，也展现了自身内部的复杂冲突，这是一个身处历史内部的当代艺术家力图对“历史”的理解和重写。"
        },
        {
          id: "q13",
          showText: "第一幕大洪荒。"
        },
        {
          id: "q14",
          showText:
            " 大洪荒是历史的终结，也是历史的开端。上帝毁灭了旧人类，创造了新人类。义人诺亚在神的指引下，带领自己的家人和各种动物登上方舟，从而躲过灾难。新人诺亚把一年分为12个月、 每个月30天，“编年史”由此开始。大洪荒几乎在所有文明的源头中都能找到，然而，它不仅是一个关于正义与邪恶、忠告与背弃、选择与放弃、毁灭与拯救的简单故事，更是人类历史中不断重现的伦理”原型”。这里，它显现为一场旷日持久的战争。"
        },
        {
          id: "q15",
          showText: "第二幕启示录"
        },
        {
          id: "q16",
          showText:
            "战争是人类社会和人类历史永恒的主题，主宰巴比伦大城的大赤龙招来海上的兽，与羊和羊的信众激战。圣徒们最终获胜，灾难降临，巴比伦大城在一日之内土崩瓦解。上帝揭开第七封印，跟随龙和兽助纣为孽的罪人在末日审判中受到彻底毁灭的惩罚。启示录发生在何时?与大洪荒-样，在永恒的《圣经》中，在过去的《浮士德》中，在今天的恐怖主义，也在未来的预言中。末日审判之后，“编年史”由此翻篇，美丽新世界再次显现。"
        },
        {
          id: "q17",
          showText: "第三幕复乐园"
        },
        {
          id: "q18",
          showText:
            "在东方，四条大河围绕灌溉之地，.上帝 为亚当和夏娃建造了伊甸园，大地上满是奇花异草和黄金珠宝，鸟兽不绝、五谷丰登。因受蛇之诱惑，他们偷食善恶树果，而被驱逐出乐园，终日辛勤。亚当夏娃之子该隐杀兄开始，人类进入一次又一次不断重复的“启示录”。末日审判之后，历史再次轮回，完美之境重现，乐园失而复得，历史在这里得以永恒。然而，复乐园也可能是完关地狱，在这里，经验的历史永远继续，而精神的历史却已然完结。"
        }
      ],
      authorImg:
        "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian1_02.jpg",
      authorText:
        "曾健勇，男，1971年11月出生于广东澄海，毕业于国立华侨大学艺术系中国画专业；进入中央美术学院版画研修班学习；职业：画家。",
      imgs: [
        {
          id: "i11",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian2_04.jpg"
        },
        {
          id: "i12",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian3_06.jpg"
        },
        {
          id: "i13",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian4_08.jpg"
        },
        {
          id: "i14",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian5_10.jpg"
        }
      ],
      commentTitle: "展览评论",
      comment: [
        {
          id: "p11",
          commentText: "挺好的，特别喜欢这种风格",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p21",
          commentText: "漂亮",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p31",
          commentText: "性感小姐姐",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p41",
          commentText: "喜欢",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        }
      ]
    }
  },
  {
    id: "a05",
    hadMessage: false,
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/index-pic_09.png",
    time: 35,
    like: 909,
    message: 179,
    look: 1299,
    isLike: true,
    showTime: "now",
    type: "sculpture",
    category: "news",
    articleDetails: {
      showTitle: "展览内容",
      paragraph: [
        {
          id: "q12",
          showText:
            "本次展览将从人像摄影室肖全为杨丽萍拍摄的中低频摄影中挑选出一组精品向观众展示。"
        },
        {
          id: "q13",
          showText:
            "一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家，两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真是的杨丽萍是什么样的？25日开始的“心动”展，无疑极大的聊起了人们的好奇心。"
        }
      ],
      authorImg:
        "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao1_02.jpg",
      authorText:
        "肖全，男，1959年生于四川成都，曾任深圳《街道 》杂志摄影记苜，被称为'中国最好的人像摄影师'。1980年代中期开始'我们这一代'拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
      imgs: [
        {
          id: "i1",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao2_02.jpg"
        },
        {
          id: "i2",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao3_04.jpg"
        },
        {
          id: "i3",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao4_06.jpg"
        }
      ],
      commentTitle: "展览评论",
      comment: [
        {
          id: "p1",
          commentText: "挺好的，特别喜欢这种风格",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p2",
          commentText: "漂亮",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p3",
          commentText: "性感小姐姐",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p4",
          commentText: "喜欢",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        }
      ]
    }
  },
  {
    id: "a06",
    hadMessage: false,
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/banner1.png",
    time: 60,
    like: 159,
    look: 394,
    message: 9,
    isLike: false,
    showTime: "will",
    type: "sculpture",
    category: "news",
    articleDetails: {
      showTitle: "展览内容",
      paragraph: [
        {
          id: "q12",
          showText:
            "曾健勇出生于广东澄海一一个笃信基督教的家庭，在今天这样一个“解构”、“去历史化”、“反宏大叙事”莫名其妙流行的年代，他力图通过自己的思考、创作和展览，以”大洪荒”、“启示录”、“复乐园”三幕视觉场景，重建一个关于人类和自我的”编年史”。以时间为轴展开的三幕，既充满了历史的必然宿命，也展现了自身内部的复杂冲突，这是一个身处历史内部的当代艺术家力图对“历史”的理解和重写。"
        },
        {
          id: "q13",
          showText: "第一幕大洪荒。"
        },
        {
          id: "q14",
          showText:
            " 大洪荒是历史的终结，也是历史的开端。上帝毁灭了旧人类，创造了新人类。义人诺亚在神的指引下，带领自己的家人和各种动物登上方舟，从而躲过灾难。新人诺亚把一年分为12个月、 每个月30天，“编年史”由此开始。大洪荒几乎在所有文明的源头中都能找到，然而，它不仅是一个关于正义与邪恶、忠告与背弃、选择与放弃、毁灭与拯救的简单故事，更是人类历史中不断重现的伦理”原型”。这里，它显现为一场旷日持久的战争。"
        },
        {
          id: "q15",
          showText: "第二幕启示录"
        },
        {
          id: "q16",
          showText:
            "战争是人类社会和人类历史永恒的主题，主宰巴比伦大城的大赤龙招来海上的兽，与羊和羊的信众激战。圣徒们最终获胜，灾难降临，巴比伦大城在一日之内土崩瓦解。上帝揭开第七封印，跟随龙和兽助纣为孽的罪人在末日审判中受到彻底毁灭的惩罚。启示录发生在何时?与大洪荒-样，在永恒的《圣经》中，在过去的《浮士德》中，在今天的恐怖主义，也在未来的预言中。末日审判之后，“编年史”由此翻篇，美丽新世界再次显现。"
        },
        {
          id: "q17",
          showText: "第三幕复乐园"
        },
        {
          id: "q18",
          showText:
            "在东方，四条大河围绕灌溉之地，.上帝 为亚当和夏娃建造了伊甸园，大地上满是奇花异草和黄金珠宝，鸟兽不绝、五谷丰登。因受蛇之诱惑，他们偷食善恶树果，而被驱逐出乐园，终日辛勤。亚当夏娃之子该隐杀兄开始，人类进入一次又一次不断重复的“启示录”。末日审判之后，历史再次轮回，完美之境重现，乐园失而复得，历史在这里得以永恒。然而，复乐园也可能是完关地狱，在这里，经验的历史永远继续，而精神的历史却已然完结。"
        }
      ],
      authorImg:
        "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian1_02.jpg",
      authorText:
        "曾健勇，男，1971年11月出生于广东澄海，毕业于国立华侨大学艺术系中国画专业；进入中央美术学院版画研修班学习；职业：画家。",
      imgs: [
        {
          id: "i11",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian2_04.jpg"
        },
        {
          id: "i12",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian3_06.jpg"
        },
        {
          id: "i13",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian4_08.jpg"
        },
        {
          id: "i14",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian5_10.jpg"
        }
      ],
      commentTitle: "展览评论",
      comment: [
        {
          id: "p11",
          commentText: "挺好的，特别喜欢这种风格",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p21",
          commentText: "漂亮",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p31",
          commentText: "性感小姐姐",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p41",
          commentText: "喜欢",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        }
      ]
    }
  },
  {
    id: "a07",
    hadMessage: false,
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/banner2.png",
    time: 80,
    like: 821,
    look: 1200,
    message: 56,
    isLike: false,
    showTime: "will",
    type: "painting",
    category: "news recommend",
    recommendType: "zhan",
    articleDetails: {
      showTitle: "展览内容",
      paragraph: [
        {
          id: "q12",
          showText:
            "本次展览将从人像摄影室肖全为杨丽萍拍摄的中低频摄影中挑选出一组精品向观众展示。"
        },
        {
          id: "q13",
          showText:
            "一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家，两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真是的杨丽萍是什么样的？25日开始的“心动”展，无疑极大的聊起了人们的好奇心。"
        }
      ],
      authorImg:
        "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao1_02.jpg",
      authorText:
        "肖全，男，1959年生于四川成都，曾任深圳《街道 》杂志摄影记苜，被称为'中国最好的人像摄影师'。1980年代中期开始'我们这一代'拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
      imgs: [
        {
          id: "i1",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao2_02.jpg"
        },
        {
          id: "i2",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao3_04.jpg"
        },
        {
          id: "i3",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao4_06.jpg"
        }
      ],
      commentTitle: "展览评论",
      comment: [
        {
          id: "p1",
          commentText: "挺好的，特别喜欢这种风格",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p2",
          commentText: "漂亮",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p3",
          commentText: "性感小姐姐",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p4",
          commentText: "喜欢",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        }
      ]
    }
  },
  {
    id: "a08",
    hadMessage: false,
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/tuijian-pic_05.png",
    time: 90,
    like: 151,
    look: 1111,
    message: 123,
    isLike: true,
    showTime: "will",
    type: "painting",
    category: "news recommend",
    recommendType: "zhan",
    articleDetails: {
      showTitle: "展览内容",
      paragraph: [
        {
          id: "q12",
          showText:
            "曾健勇出生于广东澄海一一个笃信基督教的家庭，在今天这样一个“解构”、“去历史化”、“反宏大叙事”莫名其妙流行的年代，他力图通过自己的思考、创作和展览，以”大洪荒”、“启示录”、“复乐园”三幕视觉场景，重建一个关于人类和自我的”编年史”。以时间为轴展开的三幕，既充满了历史的必然宿命，也展现了自身内部的复杂冲突，这是一个身处历史内部的当代艺术家力图对“历史”的理解和重写。"
        },
        {
          id: "q13",
          showText: "第一幕大洪荒。"
        },
        {
          id: "q14",
          showText:
            " 大洪荒是历史的终结，也是历史的开端。上帝毁灭了旧人类，创造了新人类。义人诺亚在神的指引下，带领自己的家人和各种动物登上方舟，从而躲过灾难。新人诺亚把一年分为12个月、 每个月30天，“编年史”由此开始。大洪荒几乎在所有文明的源头中都能找到，然而，它不仅是一个关于正义与邪恶、忠告与背弃、选择与放弃、毁灭与拯救的简单故事，更是人类历史中不断重现的伦理”原型”。这里，它显现为一场旷日持久的战争。"
        },
        {
          id: "q15",
          showText: "第二幕启示录"
        },
        {
          id: "q16",
          showText:
            "战争是人类社会和人类历史永恒的主题，主宰巴比伦大城的大赤龙招来海上的兽，与羊和羊的信众激战。圣徒们最终获胜，灾难降临，巴比伦大城在一日之内土崩瓦解。上帝揭开第七封印，跟随龙和兽助纣为孽的罪人在末日审判中受到彻底毁灭的惩罚。启示录发生在何时?与大洪荒-样，在永恒的《圣经》中，在过去的《浮士德》中，在今天的恐怖主义，也在未来的预言中。末日审判之后，“编年史”由此翻篇，美丽新世界再次显现。"
        },
        {
          id: "q17",
          showText: "第三幕复乐园"
        },
        {
          id: "q18",
          showText:
            "在东方，四条大河围绕灌溉之地，.上帝 为亚当和夏娃建造了伊甸园，大地上满是奇花异草和黄金珠宝，鸟兽不绝、五谷丰登。因受蛇之诱惑，他们偷食善恶树果，而被驱逐出乐园，终日辛勤。亚当夏娃之子该隐杀兄开始，人类进入一次又一次不断重复的“启示录”。末日审判之后，历史再次轮回，完美之境重现，乐园失而复得，历史在这里得以永恒。然而，复乐园也可能是完关地狱，在这里，经验的历史永远继续，而精神的历史却已然完结。"
        }
      ],
      authorImg:
        "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian1_02.jpg",
      authorText:
        "曾健勇，男，1971年11月出生于广东澄海，毕业于国立华侨大学艺术系中国画专业；进入中央美术学院版画研修班学习；职业：画家。",
      imgs: [
        {
          id: "i11",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian2_04.jpg"
        },
        {
          id: "i12",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian3_06.jpg"
        },
        {
          id: "i13",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian4_08.jpg"
        },
        {
          id: "i14",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian5_10.jpg"
        }
      ],
      commentTitle: "展览评论",
      comment: [
        {
          id: "p11",
          commentText: "挺好的，特别喜欢这种风格",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p21",
          commentText: "漂亮",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p31",
          commentText: "性感小姐姐",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p41",
          commentText: "喜欢",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        }
      ]
    }
  },
  {
    id: "a09",
    hadMessage: false,
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/tuijian-pic_07.png",
    time: 119,
    like: 1102,
    look: 2300,
    message: 401,
    isLike: false,
    showTime: "will",
    type: "painting",
    category: "news recommend",
    recommendType: "zhan",
    articleDetails: {
      showTitle: "展览内容",
      paragraph: [
        {
          id: "q12",
          showText:
            "本次展览将从人像摄影室肖全为杨丽萍拍摄的中低频摄影中挑选出一组精品向观众展示。"
        },
        {
          id: "q13",
          showText:
            "一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家，两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真是的杨丽萍是什么样的？25日开始的“心动”展，无疑极大的聊起了人们的好奇心。"
        }
      ],
      authorImg:
        "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao1_02.jpg",
      authorText:
        "肖全，男，1959年生于四川成都，曾任深圳《街道 》杂志摄影记苜，被称为'中国最好的人像摄影师'。1980年代中期开始'我们这一代'拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
      imgs: [
        {
          id: "i1",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao2_02.jpg"
        },
        {
          id: "i2",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao3_04.jpg"
        },
        {
          id: "i3",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao4_06.jpg"
        }
      ],
      commentTitle: "展览评论",
      comment: [
        {
          id: "p1",
          commentText: "挺好的，特别喜欢这种风格",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p2",
          commentText: "漂亮",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p3",
          commentText: "性感小姐姐",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p4",
          commentText: "喜欢",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        }
      ]
    }
  },
  {
    id: "a010",
    hadMessage: false,
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/tuijian-pic_09.png",
    time: 49,
    like: 159,
    look: 394,
    message: 9,
    isLike: false,
    showTime: "will",
    type: "design",
    category: "news",
    articleDetails: {
      showTitle: "展览内容",
      paragraph: [
        {
          id: "q12",
          showText:
            "曾健勇出生于广东澄海一一个笃信基督教的家庭，在今天这样一个“解构”、“去历史化”、“反宏大叙事”莫名其妙流行的年代，他力图通过自己的思考、创作和展览，以”大洪荒”、“启示录”、“复乐园”三幕视觉场景，重建一个关于人类和自我的”编年史”。以时间为轴展开的三幕，既充满了历史的必然宿命，也展现了自身内部的复杂冲突，这是一个身处历史内部的当代艺术家力图对“历史”的理解和重写。"
        },
        {
          id: "q13",
          showText: "第一幕大洪荒。"
        },
        {
          id: "q14",
          showText:
            " 大洪荒是历史的终结，也是历史的开端。上帝毁灭了旧人类，创造了新人类。义人诺亚在神的指引下，带领自己的家人和各种动物登上方舟，从而躲过灾难。新人诺亚把一年分为12个月、 每个月30天，“编年史”由此开始。大洪荒几乎在所有文明的源头中都能找到，然而，它不仅是一个关于正义与邪恶、忠告与背弃、选择与放弃、毁灭与拯救的简单故事，更是人类历史中不断重现的伦理”原型”。这里，它显现为一场旷日持久的战争。"
        },
        {
          id: "q15",
          showText: "第二幕启示录"
        },
        {
          id: "q16",
          showText:
            "战争是人类社会和人类历史永恒的主题，主宰巴比伦大城的大赤龙招来海上的兽，与羊和羊的信众激战。圣徒们最终获胜，灾难降临，巴比伦大城在一日之内土崩瓦解。上帝揭开第七封印，跟随龙和兽助纣为孽的罪人在末日审判中受到彻底毁灭的惩罚。启示录发生在何时?与大洪荒-样，在永恒的《圣经》中，在过去的《浮士德》中，在今天的恐怖主义，也在未来的预言中。末日审判之后，“编年史”由此翻篇，美丽新世界再次显现。"
        },
        {
          id: "q17",
          showText: "第三幕复乐园"
        },
        {
          id: "q18",
          showText:
            "在东方，四条大河围绕灌溉之地，.上帝 为亚当和夏娃建造了伊甸园，大地上满是奇花异草和黄金珠宝，鸟兽不绝、五谷丰登。因受蛇之诱惑，他们偷食善恶树果，而被驱逐出乐园，终日辛勤。亚当夏娃之子该隐杀兄开始，人类进入一次又一次不断重复的“启示录”。末日审判之后，历史再次轮回，完美之境重现，乐园失而复得，历史在这里得以永恒。然而，复乐园也可能是完关地狱，在这里，经验的历史永远继续，而精神的历史却已然完结。"
        }
      ],
      authorImg:
        "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian1_02.jpg",
      authorText:
        "曾健勇，男，1971年11月出生于广东澄海，毕业于国立华侨大学艺术系中国画专业；进入中央美术学院版画研修班学习；职业：画家。",
      imgs: [
        {
          id: "i11",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian2_04.jpg"
        },
        {
          id: "i12",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian3_06.jpg"
        },
        {
          id: "i13",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian4_08.jpg"
        },
        {
          id: "i14",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian5_10.jpg"
        }
      ],
      commentTitle: "展览评论",
      comment: [
        {
          id: "p11",
          commentText: "挺好的，特别喜欢这种风格",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p21",
          commentText: "漂亮",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p31",
          commentText: "性感小姐姐",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p41",
          commentText: "喜欢",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        }
      ]
    }
  },
  {
    id: "a011",
    hadMessage: false,
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/tuijian-pic_11.png",
    time: 140,
    like: 9,
    look: 194,
    message: 5,
    isLike: true,
    showTime: "will",
    type: "ink",
    category: "news",
    articleDetails: {
      showTitle: "展览内容",
      paragraph: [
        {
          id: "q12",
          showText:
            "本次展览将从人像摄影室肖全为杨丽萍拍摄的中低频摄影中挑选出一组精品向观众展示。"
        },
        {
          id: "q13",
          showText:
            "一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家，两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真是的杨丽萍是什么样的？25日开始的“心动”展，无疑极大的聊起了人们的好奇心。"
        }
      ],
      authorImg:
        "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao1_02.jpg",
      authorText:
        "肖全，男，1959年生于四川成都，曾任深圳《街道 》杂志摄影记苜，被称为'中国最好的人像摄影师'。1980年代中期开始'我们这一代'拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
      imgs: [
        {
          id: "i1",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao2_02.jpg"
        },
        {
          id: "i2",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao3_04.jpg"
        },
        {
          id: "i3",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao4_06.jpg"
        }
      ],
      commentTitle: "展览评论",
      comment: [
        {
          id: "p1",
          commentText: "挺好的，特别喜欢这种风格",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p2",
          commentText: "漂亮",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p3",
          commentText: "性感小姐姐",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p4",
          commentText: "喜欢",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        }
      ]
    }
  },
  {
    id: "a012",
    hadMessage: false,
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/a8c00a0ec34c910a233676caa834ece8279b8515/wen1_01.jpg",
    time: -1,
    like: 159,
    look: 394,
    message: 98,
    isLike: true,
    category: "recommend",
    recommendType: "wen",
    articleDetails: {
      showTitle: "展览内容",
      paragraph: [
        {
          id: "q12",
          showText:
            "曾健勇出生于广东澄海一一个笃信基督教的家庭，在今天这样一个“解构”、“去历史化”、“反宏大叙事”莫名其妙流行的年代，他力图通过自己的思考、创作和展览，以”大洪荒”、“启示录”、“复乐园”三幕视觉场景，重建一个关于人类和自我的”编年史”。以时间为轴展开的三幕，既充满了历史的必然宿命，也展现了自身内部的复杂冲突，这是一个身处历史内部的当代艺术家力图对“历史”的理解和重写。"
        },
        {
          id: "q13",
          showText: "第一幕大洪荒。"
        },
        {
          id: "q14",
          showText:
            " 大洪荒是历史的终结，也是历史的开端。上帝毁灭了旧人类，创造了新人类。义人诺亚在神的指引下，带领自己的家人和各种动物登上方舟，从而躲过灾难。新人诺亚把一年分为12个月、 每个月30天，“编年史”由此开始。大洪荒几乎在所有文明的源头中都能找到，然而，它不仅是一个关于正义与邪恶、忠告与背弃、选择与放弃、毁灭与拯救的简单故事，更是人类历史中不断重现的伦理”原型”。这里，它显现为一场旷日持久的战争。"
        },
        {
          id: "q15",
          showText: "第二幕启示录"
        },
        {
          id: "q16",
          showText:
            "战争是人类社会和人类历史永恒的主题，主宰巴比伦大城的大赤龙招来海上的兽，与羊和羊的信众激战。圣徒们最终获胜，灾难降临，巴比伦大城在一日之内土崩瓦解。上帝揭开第七封印，跟随龙和兽助纣为孽的罪人在末日审判中受到彻底毁灭的惩罚。启示录发生在何时?与大洪荒-样，在永恒的《圣经》中，在过去的《浮士德》中，在今天的恐怖主义，也在未来的预言中。末日审判之后，“编年史”由此翻篇，美丽新世界再次显现。"
        },
        {
          id: "q17",
          showText: "第三幕复乐园"
        },
        {
          id: "q18",
          showText:
            "在东方，四条大河围绕灌溉之地，.上帝 为亚当和夏娃建造了伊甸园，大地上满是奇花异草和黄金珠宝，鸟兽不绝、五谷丰登。因受蛇之诱惑，他们偷食善恶树果，而被驱逐出乐园，终日辛勤。亚当夏娃之子该隐杀兄开始，人类进入一次又一次不断重复的“启示录”。末日审判之后，历史再次轮回，完美之境重现，乐园失而复得，历史在这里得以永恒。然而，复乐园也可能是完关地狱，在这里，经验的历史永远继续，而精神的历史却已然完结。"
        }
      ],
      authorImg:
        "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian1_02.jpg",
      authorText:
        "曾健勇，男，1971年11月出生于广东澄海，毕业于国立华侨大学艺术系中国画专业；进入中央美术学院版画研修班学习；职业：画家。",
      imgs: [
        {
          id: "i11",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian2_04.jpg"
        },
        {
          id: "i12",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian3_06.jpg"
        },
        {
          id: "i13",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian4_08.jpg"
        },
        {
          id: "i14",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian5_10.jpg"
        }
      ],
      commentTitle: "展览评论",
      comment: [
        {
          id: "p11",
          commentText: "挺好的，特别喜欢这种风格",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p21",
          commentText: "漂亮",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p31",
          commentText: "性感小姐姐",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p41",
          commentText: "喜欢",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        }
      ]
    }
  },
  {
    id: "a013",
    hadMessage: false,
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/a8c00a0ec34c910a233676caa834ece8279b8515/wen2_02.jpg",
    time: -1,
    like: 169,
    look: 594,
    message: 1245,
    isLike: true,
    category: "recommend",
    recommendType: "wen",
    articleDetails: {
      showTitle: "展览内容",
      paragraph: [
        {
          id: "q12",
          showText:
            "本次展览将从人像摄影室肖全为杨丽萍拍摄的中低频摄影中挑选出一组精品向观众展示。"
        },
        {
          id: "q13",
          showText:
            "一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家，两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真是的杨丽萍是什么样的？25日开始的“心动”展，无疑极大的聊起了人们的好奇心。"
        }
      ],
      authorImg:
        "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao1_02.jpg",
      authorText:
        "肖全，男，1959年生于四川成都，曾任深圳《街道 》杂志摄影记苜，被称为'中国最好的人像摄影师'。1980年代中期开始'我们这一代'拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
      imgs: [
        {
          id: "i1",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao2_02.jpg"
        },
        {
          id: "i2",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao3_04.jpg"
        },
        {
          id: "i3",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao4_06.jpg"
        }
      ],
      commentTitle: "展览评论",
      comment: [
        {
          id: "p1",
          commentText: "挺好的，特别喜欢这种风格",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p2",
          commentText: "漂亮",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p3",
          commentText: "性感小姐姐",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p4",
          commentText: "喜欢",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        }
      ]
    }
  },
  {
    id: "a014",
    hadMessage: false,
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/a8c00a0ec34c910a233676caa834ece8279b8515/wen3_04.jpg",
    time: -1,
    like: 89,
    look: 224,
    message: 32,
    isLike: true,
    category: "recommend",
    recommendType: "wen",
    articleDetails: {
      showTitle: "展览内容",
      paragraph: [
        {
          id: "q12",
          showText:
            "曾健勇出生于广东澄海一一个笃信基督教的家庭，在今天这样一个“解构”、“去历史化”、“反宏大叙事”莫名其妙流行的年代，他力图通过自己的思考、创作和展览，以”大洪荒”、“启示录”、“复乐园”三幕视觉场景，重建一个关于人类和自我的”编年史”。以时间为轴展开的三幕，既充满了历史的必然宿命，也展现了自身内部的复杂冲突，这是一个身处历史内部的当代艺术家力图对“历史”的理解和重写。"
        },
        {
          id: "q13",
          showText: "第一幕大洪荒。"
        },
        {
          id: "q14",
          showText:
            " 大洪荒是历史的终结，也是历史的开端。上帝毁灭了旧人类，创造了新人类。义人诺亚在神的指引下，带领自己的家人和各种动物登上方舟，从而躲过灾难。新人诺亚把一年分为12个月、 每个月30天，“编年史”由此开始。大洪荒几乎在所有文明的源头中都能找到，然而，它不仅是一个关于正义与邪恶、忠告与背弃、选择与放弃、毁灭与拯救的简单故事，更是人类历史中不断重现的伦理”原型”。这里，它显现为一场旷日持久的战争。"
        },
        {
          id: "q15",
          showText: "第二幕启示录"
        },
        {
          id: "q16",
          showText:
            "战争是人类社会和人类历史永恒的主题，主宰巴比伦大城的大赤龙招来海上的兽，与羊和羊的信众激战。圣徒们最终获胜，灾难降临，巴比伦大城在一日之内土崩瓦解。上帝揭开第七封印，跟随龙和兽助纣为孽的罪人在末日审判中受到彻底毁灭的惩罚。启示录发生在何时?与大洪荒-样，在永恒的《圣经》中，在过去的《浮士德》中，在今天的恐怖主义，也在未来的预言中。末日审判之后，“编年史”由此翻篇，美丽新世界再次显现。"
        },
        {
          id: "q17",
          showText: "第三幕复乐园"
        },
        {
          id: "q18",
          showText:
            "在东方，四条大河围绕灌溉之地，.上帝 为亚当和夏娃建造了伊甸园，大地上满是奇花异草和黄金珠宝，鸟兽不绝、五谷丰登。因受蛇之诱惑，他们偷食善恶树果，而被驱逐出乐园，终日辛勤。亚当夏娃之子该隐杀兄开始，人类进入一次又一次不断重复的“启示录”。末日审判之后，历史再次轮回，完美之境重现，乐园失而复得，历史在这里得以永恒。然而，复乐园也可能是完关地狱，在这里，经验的历史永远继续，而精神的历史却已然完结。"
        }
      ],
      authorImg:
        "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian1_02.jpg",
      authorText:
        "曾健勇，男，1971年11月出生于广东澄海，毕业于国立华侨大学艺术系中国画专业；进入中央美术学院版画研修班学习；职业：画家。",
      imgs: [
        {
          id: "i11",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian2_04.jpg"
        },
        {
          id: "i12",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian3_06.jpg"
        },
        {
          id: "i13",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian4_08.jpg"
        },
        {
          id: "i14",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian5_10.jpg"
        }
      ],
      commentTitle: "展览评论",
      comment: [
        {
          id: "p11",
          commentText: "挺好的，特别喜欢这种风格",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p21",
          commentText: "漂亮",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p31",
          commentText: "性感小姐姐",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p41",
          commentText: "喜欢",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        }
      ]
    }
  },
  {
    id: "a015",
    hadMessage: false,
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/a8c00a0ec34c910a233676caa834ece8279b8515/wen4_06.jpg",
    time: -1,
    like: 169,
    look: 494,
    message: 54,
    isLike: true,
    category: "recommend",
    recommendType: "wen",
    articleDetails: {
      showTitle: "展览内容",
      paragraph: [
        {
          id: "q12",
          showText:
            "本次展览将从人像摄影室肖全为杨丽萍拍摄的中低频摄影中挑选出一组精品向观众展示。"
        },
        {
          id: "q13",
          showText:
            "一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家，两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真是的杨丽萍是什么样的？25日开始的“心动”展，无疑极大的聊起了人们的好奇心。"
        }
      ],
      authorImg:
        "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao1_02.jpg",
      authorText:
        "肖全，男，1959年生于四川成都，曾任深圳《街道 》杂志摄影记苜，被称为'中国最好的人像摄影师'。1980年代中期开始'我们这一代'拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
      imgs: [
        {
          id: "i1",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao2_02.jpg"
        },
        {
          id: "i2",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao3_04.jpg"
        },
        {
          id: "i3",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao4_06.jpg"
        }
      ],
      commentTitle: "展览评论",
      comment: [
        {
          id: "p1",
          commentText: "挺好的，特别喜欢这种风格",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p2",
          commentText: "漂亮",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p3",
          commentText: "性感小姐姐",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        },
        {
          id: "p4",
          commentText: "喜欢",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019/8/27"
        }
      ]
    }
  },
  {
    id: "a016",
    hadMessage: false,
    imgSrc:
      "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/a8c00a0ec34c910a233676caa834ece8279b8515/wen5_08.jpg",
    time: -1,
    like: 219,
    look: 594,
    message: 26,
    isLike: true,
    category: "recommend",
    recommendType: "wen",
    articleDetails: {
      showTitle: "展览内容",
      paragraph: [
        {
          id: "q12",
          showText:
            "曾健勇出生于广东澄海一一个笃信基督教的家庭，在今天这样一个“解构”、“去历史化”、“反宏大叙事”莫名其妙流行的年代，他力图通过自己的思考、创作和展览，以”大洪荒”、“启示录”、“复乐园”三幕视觉场景，重建一个关于人类和自我的”编年史”。以时间为轴展开的三幕，既充满了历史的必然宿命，也展现了自身内部的复杂冲突，这是一个身处历史内部的当代艺术家力图对“历史”的理解和重写。"
        },
        {
          id: "q13",
          showText: "第一幕大洪荒。"
        },
        {
          id: "q14",
          showText:
            " 大洪荒是历史的终结，也是历史的开端。上帝毁灭了旧人类，创造了新人类。义人诺亚在神的指引下，带领自己的家人和各种动物登上方舟，从而躲过灾难。新人诺亚把一年分为12个月、 每个月30天，“编年史”由此开始。大洪荒几乎在所有文明的源头中都能找到，然而，它不仅是一个关于正义与邪恶、忠告与背弃、选择与放弃、毁灭与拯救的简单故事，更是人类历史中不断重现的伦理”原型”。这里，它显现为一场旷日持久的战争。"
        },
        {
          id: "q15",
          showText: "第二幕启示录"
        },
        {
          id: "q16",
          showText:
            "战争是人类社会和人类历史永恒的主题，主宰巴比伦大城的大赤龙招来海上的兽，与羊和羊的信众激战。圣徒们最终获胜，灾难降临，巴比伦大城在一日之内土崩瓦解。上帝揭开第七封印，跟随龙和兽助纣为孽的罪人在末日审判中受到彻底毁灭的惩罚。启示录发生在何时?与大洪荒-样，在永恒的《圣经》中，在过去的《浮士德》中，在今天的恐怖主义，也在未来的预言中。末日审判之后，“编年史”由此翻篇，美丽新世界再次显现。"
        },
        {
          id: "q17",
          showText: "第三幕复乐园"
        },
        {
          id: "q18",
          showText:
            "在东方，四条大河围绕灌溉之地，.上帝 为亚当和夏娃建造了伊甸园，大地上满是奇花异草和黄金珠宝，鸟兽不绝、五谷丰登。因受蛇之诱惑，他们偷食善恶树果，而被驱逐出乐园，终日辛勤。亚当夏娃之子该隐杀兄开始，人类进入一次又一次不断重复的“启示录”。末日审判之后，历史再次轮回，完美之境重现，乐园失而复得，历史在这里得以永恒。然而，复乐园也可能是完关地狱，在这里，经验的历史永远继续，而精神的历史却已然完结。"
        }
      ],
      authorImg:
        "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian1_02.jpg",
      authorText:
        "曾健勇，男，1971年11月出生于广东澄海，毕业于国立华侨大学艺术系中国画专业；进入中央美术学院版画研修班学习；职业：画家。",
      imgs: [
        {
          id: "i11",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian2_04.jpg"
        },
        {
          id: "i12",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian3_06.jpg"
        },
        {
          id: "i13",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian4_08.jpg"
        },
        {
          id: "i14",
          showImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/bian5_10.jpg"
        }
      ],
      commentTitle: "展览评论",
      comment: [
        {
          id: "p11",
          commentText: "挺好的，特别喜欢这种风格",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p21",
          commentText: "漂亮",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p31",
          commentText: "性感小姐姐",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        },
        {
          id: "p41",
          commentText: "喜欢",
          commentImg:
            "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/xiao5_09.jpg",
          commentName: "阿德",
          commentId: "ade",
          commentTime: "2019.8.27"
        }
      ]
    }
  }
];
export default (state = showLists, action) => {
  const { id } = action;
  const { payload } = action;
  const newState = [...state];

  switch (action.type) {
    case CHANGE_ISLIKE:
      newState.find(item => item.id === id).isLike = !newState.find(
        item => item.id === id
      ).isLike;
      return newState;
    case ADD_COMMENT:
      const newComment = {
        id: new Date().getTime(),
        commentText: payload.val,
        commentImg:
          "https://dev.tencent.com/u/shiyunhao/p/tupian/git/raw/master/User-info_01%20(2).png",
        commentName: "阴天不下雨",
        commentId: "ytbxy",
        commentTime: new Date().toLocaleDateString()
      };
      const changeComment = [
        newComment,
        ...newState.find(item => item.id === payload.id).articleDetails.comment
      ];
      newState.find(
        item => item.id === payload.id
      ).articleDetails.comment = changeComment;
      action.callback();
      return newState;
    default:
      return state;
  }
};
