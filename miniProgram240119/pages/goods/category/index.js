const db = wx.cloud.database();

Page({
  data: {
    list: [],
  },

  async init() {
    try {
      const result = await this.getCategoryList();
      this.setData({
        list: result,
      });

      console.log(this.data.list);
    } catch (error) {
      console.error('err:', error);
    }
  },

  onShow() {
    /*     this.getTabBar().init(); */
  },

  onChange() {
    wx.navigateTo({
      url: '/pages/goods/list/index',
    });
  },
  onLoad() {
    this.init();
  },

  //从数据库中获取分类定义
  getCategoryListReal() {
    return db.collection('category').get('1fe899fa65ba9c3b000000364501012c').then(res => {
      return res.data[0].categories;

    });
  }

});


