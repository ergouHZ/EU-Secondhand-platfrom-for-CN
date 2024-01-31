const db = wx.cloud.database();

Page({
  data: {
    list: [],
  },

  async init() {
    try {
      const result = await this.getCategoryListReal();
      this.setData({
        list: result,
      });
    } catch (error) {
      console.error('err:', error);
    }
  },

  onShow() {
    /*     this.getTabBar().init(); */
  },


  onLoad() {
    this.init();
  },

  //从数据库中获取分类定义
  getCategoryListReal() {
    return db.collection('category').doc('1fe899fa65ba9c3b000000364501012c').get().then(res => {
      return res.data.categories;

    });
  }

});


