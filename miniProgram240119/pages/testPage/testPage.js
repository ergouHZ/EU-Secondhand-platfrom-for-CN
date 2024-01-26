Page({
  // data: {
  //   fabButton: {
  //     icon: 'share',
  //     openType: 'share',
  //   },
  // },


  onShow() {
    this.getTabBar().init();
  },

  onLoad() {
    console.log('11');

    const db = wx.cloud.database();
    const todos = db.collection('testA');

    // 这里进行数据库的查询操作
    todos.doc('f531710465b2fb090033fee105584481').get({
      success: (res) => {
        // res.data 包含该记录的数据
        console.log(res.data);
        // 如果你想要在页面上显示这些数据，你需要设置 data 属性
        this.setData({
          todo: res.data
        });
      },
      fail: (err) => {
        console.error(err);
      }
    });
  },

  /*  悬浮钮 */
  handleClick(e) {
    console.log(e);
    wx.navigateTo({ url: '/pages/goods/search/index' });
  },
});