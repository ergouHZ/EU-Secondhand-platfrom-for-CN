Page({

  data: {
    independentID: '46451315',

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
      specList: [
        {
          specId: '10011',
          title: '颜色',
          specValueList: [
            {
              specValueId: '10012',
              specId: null,
              saasId: null,
              specValue: '米色荷叶边',
              image: null,
            },
          ],
        },
        {
          specId: '10013',
          title: '尺码',
          specValueList: [
            {
              specValueId: '11014',
              specId: null,
              saasId: null,
              specValue: 'S',
              image: null,
            },
            {
              specValueId: '10014',
              specId: null,
              saasId: null,
              specValue: 'M',
              image: null,
            },
            {
              specValueId: '11013',
              specId: null,
              saasId: null,
              specValue: 'L',
              image: null,
            },
          ],
        },
      ],
      skuList: [
        {
          skuId: '135676631',
          skuImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
          specInfo: [
            {
              specId: '10011',
              specTitle: null,
              specValueId: '10012',
              specValue: null,
            },
            {
              specId: '10013',
              specTitle: null,
              specValueId: '11014',
              specValue: null,
            },
          ],
          priceInfo: [
            { priceType: 1, price: '29800', priceTypeName: null },
            { priceType: 2, price: '40000', priceTypeName: null },
          ],
          stockInfo: {
            stockQuantity: 175,
            safeStockQuantity: 0,
            soldQuantity: 0,
          },
          weight: { value: null, unit: 'KG' },
          volume: null,
          profitPrice: null,
        },
        {
          skuId: '135676632',
          skuImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
          specInfo: [
            {
              specId: '10011',
              specTitle: null,
              specValueId: '10012',
              specValue: null,
            },
            {
              specId: '10013',
              specTitle: null,
              specValueId: '11013',
              specValue: null,
            },
          ],
          priceInfo: [
            { priceType: 1, price: '29800', priceTypeName: null },
            { priceType: 2, price: '40000', priceTypeName: null },
          ],
          stockInfo: {
            stockQuantity: 158,
            safeStockQuantity: 0,
            soldQuantity: 0,
          },
          weight: { value: null, unit: 'KG' },
          volume: null,
          profitPrice: null,
        },
        {
          skuId: '135681631',
          skuImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
          specInfo: [
            {
              specId: '10011',
              specTitle: null,
              specValueId: '10012',
              specValue: null,
            },
            {
              specId: '10013',
              specTitle: null,
              specValueId: '10014',
              specValue: null,
            },
          ],
          priceInfo: [
            { priceType: 1, price: '29800', priceTypeName: null },
            { priceType: 2, price: '40000', priceTypeName: null },
          ],
          stockInfo: {
            stockQuantity: 177,
            safeStockQuantity: 0,
            soldQuantity: 0,
          },
          weight: { value: null, unit: 'KG' },
          volume: null,
          profitPrice: null,
        },
      ],
      spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
      limitInfo: [
        {
          text: '限购5件',
        },
      ],
      desc: [
        'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09c.png',
        'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09d.png',
      ],
      etitle: '',
    },  /*  WXml加载的货物数据 */
    isValidityLinePrice: false,
  },

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {

    console.log(this.data.goodsExample.spuId);
    console.log(this.data.goodsExample.minSalePrice);

    this.data.goodsExample.skuList.forEach(sku => {
      sku.priceInfo.forEach(price => {
        console.log(`价格类型${price.priceType}:价格${price.price}`)
      })
    })

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

  }
})

  ;


