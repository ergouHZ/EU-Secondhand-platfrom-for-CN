import updateManager from './common/updateManager';

App({
  onLaunch() {
    wx.cloud.init({
      env: 'cloud1-2gt7rgawd6658b5d'
    })
  },

  onShow: function () {
    updateManager();
  },
});
