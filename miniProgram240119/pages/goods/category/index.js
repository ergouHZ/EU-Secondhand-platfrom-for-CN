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

    return new Promise((resolve, reject) => {
      wx.getFileSystemManager().readFile({
        filePath: `/model/category.json`, // json文件位置
        encoding: 'utf8',
        success(res) {
          const data = JSON.parse(res.data);
          resolve(data.categories);
        },
        fail(err) {
          reject(err);
        }
      });
    });
  }

});


