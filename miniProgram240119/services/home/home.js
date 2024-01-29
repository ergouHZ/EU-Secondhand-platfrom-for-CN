
const db = wx.cloud.database();

/** 获取首页数据 */
export function fetchHome() {
  const { delay } = require('../_utils/delay');

  //从后台获取swiper 以及tablist，tablist直接由文字定义就放函数里了
  return db.collection('swiperImg').get().then(res => {
    // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
    const links = res.data.map(item => item.link);

    return delay().then(() => {
      return {
        swiper: links,
        tabList: [
          {
            text: '精选推荐',
            key: 0,
          },
          {
            text: '夏日防晒',
            key: 1,
          },
          {
            text: '厨房用品',
            key: 2,
          },
          {
            text: '人气榜',
            key: 3,
          },
          {
            text: '好评榜',
            key: 4,
          },
          {
            text: 'RTX 30',
            key: 5,
          },
          {
            text: '手机产品',
            key: 6,
          },
        ],
        /*         activityImg: `${cdnBase}/activity/banner.png`, */
      };
    });

    //如果返回数据出错
  }).catch(error => {

    console.error("Failed to fetch home data:", error);
    throw error;
  });
}
