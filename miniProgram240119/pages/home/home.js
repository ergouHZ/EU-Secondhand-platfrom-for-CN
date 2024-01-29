import Toast from 'tdesign-miniprogram/toast/index';
import { fetchGoodsList } from '../../services/good/fetchGoods';
import { fetchHome } from '../../services/home/home';


const swiperList = [
  'https://636c-cloud1-2gt7rgawd6658b5d-1323986321.tcb.qcloud.la/img/swiper/num1.png?sign=4b3e7e8d0cf872c8ee096a233fda3e91&t=1706549772',
  'https://636c-cloud1-2gt7rgawd6658b5d-1323986321.tcb.qcloud.la/img/swiper/num2ad.png?sign=8ee48d0175444a26525e2619b458ed44&t=1706549789',
  /*   'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner3.png',
    'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner4.png',
    'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner5.png',
    'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner6.png', */
];


Page({
  data: {
    imgSrcs: [],
    tabList: [],
    goodsList: [],
    goodsListLoadStatus: 0,
    pageLoading: false,
    current: 1,
    autoplay: true,
    duration: '500',
    interval: 5000,
    navigation: { type: 'dots' },
    swiperImageProps: { mode: 'scaleToFill' },
    fabButton: {
      icon: 'share',
      openType: 'share',
    },
  },

  pageNum: 1,

  goodListPagination: {
    index: 0,
    num: 20,
  },


  privateData: {
    tabIndex: 0,
  },

  onShow() {
    this.getTabBar().init();
  },

  onLoad() {
    this.init();
  },

  onReachBottom() {
    if (this.data.goodsListLoadStatus === 0) {
      this.loadGoodsList();
    }
  },

  onPullDownRefresh() {
    this.init();
  },

  init() {
    this.loadHomePage();
  },


  loadHomePage() {
    wx.stopPullDownRefresh();

    this.setData({
      pageLoading: true,
    });
    fetchHome().then(({ swiper, tabList }) => {
      this.setData({
        tabList,
        imgSrcs: swiper,
        pageLoading: false,
      });
      this.loadGoodsList(true);

    });
  },


  tabChangeHandle(e) {
    this.privateData.tabIndex = e.detail;
    this.loadGoodsList(true);
  },

  onReTry() {
    this.loadGoodsList();
  },



  //获取商品清单
  async loadGoodsList(fresh = false) {
    if (fresh) {
      wx.pageScrollTo({
        scrollTop: 0,
      });
    }

    this.setData({ goodsListLoadStatus: 1 });

    const pageSize = this.goodListPagination.num;
    let pageIndex = this.privateData.tabIndex * pageSize + this.goodListPagination.index + 1;
    if (fresh) {
      pageIndex = 0;
    }

    try {
      const nextList = await fetchGoodsList(pageIndex, pageSize);
      this.setData({
        goodsList: fresh ? nextList : this.data.goodsList.concat(nextList),
        goodsListLoadStatus: 0,
      });

      //0代表导入成功

      this.goodListPagination.index = pageIndex;
      this.goodListPagination.num = pageSize;
    } catch (err) {
      this.setData({ goodsListLoadStatus: 3 });
      console.log("载入数据失败")
    }
  },

  goodListClickHandle(e) {
    const { index } = e.detail;
    const { spuId } = this.data.goodsList[index];
    wx.navigateTo({
      url: `/pages/goods/details/index?spuId=${spuId}`,
    });
  },

  goodListAddCartHandle() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '点击加入购物车',
    });
  },

  navToSearchPage() {
    wx.navigateTo({ url: '/pages/goods/search/index' });
  },

  navToCategoryPage() {
    wx.navigateTo({ url: '/pages/goods/category/index' });
  },


  navToActivityDetail({ detail }) {
    const { index: promotionID = 0 } = detail || {};

    console.log(promotionID)
    wx.navigateTo({
      url: `/pages/promotion-detail/index?promotion_id=${promotionID}`,
    });
  },
});

