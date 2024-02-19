Page({

  data: {
    independentID: '46451315',

    imageURL: 'https://i.pinimg.com/736x/40/ec/bf/40ecbff9d8c0f343036bed0169f3ea88.jpg',
    goodsExample: {
      saasId: '88888888',
      storeId: '1000',
      /* 这项改成userid */
      spuId: '0',
      title: '白色短袖连衣裙荷叶边裙摆宽松韩版休闲纯白清爽优雅连衣裙',
      thumb: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
      images: [
        'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
        'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09b.png',
      ],
      video: null,
      available: 1,
      minSalePrice: 29800,
      originPrice: 29800,
      maxSalePrice: 29800,
      price: 40000,
      //改了一些商品数据
      isPutOnSale: 1,
      categoryIds: [
        '127880527393854975',
        '127880527393854976',
        '127880537778953984',
      ],
      etitle: '',
    },  /*  WXml加载的货物数据 */
    isValidityLinePrice: false,

    fileList: [],
  },

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {


    // 商品fetch list方法
    /*     console.log(this.data.goodsExample.spuId);
        console.log(this.data.goodsExample.minSalePrice);
    
        this.data.goodsExample.skuList.forEach(sku => {
          sku.priceInfo.forEach(price => {
            console.log(`价格类型${price.priceType}:价格${price.price}`)
          })
        }) */

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().init();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },




  handleAdd(e) {
    const { fileList } = this.data;
    const { files } = e.detail;

    // 方法1：选择完所有图片之后，统一上传，因此选择完就直接展示
    this.setData({
      fileList: [...fileList, ...files], // 此时设置了 fileList 之后才会展示选择的图片

    });

    console.log(this.data.fileList);

    // 方法2：每次选择图片都上传，展示每次上传图片的进度
    // files.forEach(file => this.uploadFile(file))
  },


  onUpload(file) {
    const { fileList } = this.data;

    this.setData({
      fileList: [...fileList, { ...file, status: 'loading' }],
    });
    const { length } = fileList;

    const task = wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: 'file',
      formData: { user: 'test' },
      success: () => {
        this.setData({
          [`fileList[${length}].status`]: 'done',
        });
      },
    });
    task.onProgressUpdate((res) => {
      this.setData({
        [`fileList[${length}].percent`]: res.progress,
      });
    });
  },

  handleRemove(e) {
    const { index } = e.detail;
    const { fileList } = this.data;

    fileList.splice(index, 1);
    this.setData({
      fileList,
    });
  },

  consoleRespond() {
    console.log('Received');
  },

});






