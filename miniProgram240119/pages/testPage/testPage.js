Page({
  data: {
    fabButton: {
      icon: 'share',
      openType: 'share',
    },
  },

  onShow() {
    this.getTabBar().init();
  },

  /*  悬浮钮 */
  handleClick(e) {
    console.log(e);
    /* wx.navigateTo({ url: '/pages/goods/search/index' }); */
  },
});