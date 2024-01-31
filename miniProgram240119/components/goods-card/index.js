Component({
  options: {
    addGlobalClass: true,
  },

  properties: {
    id: {
      type: String,
      value: '',
      observer(id) {
        this.genIndependentID(id);
        if (this.properties.thresholds?.length) {
          this.createIntersectionObserverHandle();
        }
      },
    },
    data: {
      type: Object,
      observer(data) {
        if (!data) {
          return;
        }
        let isValidityLinePrice = true;
        if (data.originPrice && data.price && data.originPrice < data.price) {
          isValidityLinePrice = false;
        }
        this.setData({ goods: data, isValidityLinePrice });
      },
    },

    /*  货币 */
    currency: {
      type: String,
      value: '¥',
    },

    thresholds: {
      type: Array,
      value: [],
      observer(thresholds) {
        if (thresholds && thresholds.length) {
          this.createIntersectionObserverHandle();

        } else {
          this.clearIntersectionObserverHandle();
        }
      },
    },
  },

  data: {
    independentID: '',
    goods: { id: '' },  /*  WXml加载的货物ID */
    isValidityLinePrice: false,
  },

  lifetimes: {
    ready() {
      this.init();
    },
    detached() {
      this.clear();
    },
  },

  pageLifeTimes: {},

  methods: {
    clickHandle() {
      this.triggerEvent('click', { goods: this.data.goods });
    },

    clickThumbHandle() {
      this.triggerEvent('thumb', { goods: this.data.goods });
    },

    addCartHandle(e) {
      const { id } = e.currentTarget;
      const { id: cardID } = e.currentTarget.dataset;
      this.triggerEvent('add-cart', {
        ...e.detail,
        id,
        cardID,
        goods: this.data.goods,
      });
    },

    genIndependentID(id) {
      let independentID;
      if (id) {
        independentID = id;
      } else {
        independentID = `goods-card-${~~(Math.random() * 10 ** 8)}`;
      }
      this.setData({ independentID });
    },

    init() {
      const { thresholds, id } = this.properties;
      this.genIndependentID(id);
      if (thresholds && thresholds.length) {
        this.createIntersectionObserverHandle();
      }
    },

    clear() {
      this.clearIntersectionObserverHandle();
    },


    intersectionObserverContext: null,



    createIntersectionObserverHandle() {
      if (this.intersectionObserverContext || !this.data.independentID) {
        return;
      }
      this.intersectionObserverContext = this.createIntersectionObserver({
        thresholds: this.properties.thresholds,
      }).relativeToViewport();


      this.intersectionObserverContext.observe(
        `#${this.data.independentID}`,
        (res) => {

          console.log(res);

          if (res.intersectionRatio > 0.2 && (res.dataset.goods.spuId % 3) === 0) {
            // 当元素超过50%可见时执行的操作
            this.intersectionObserverCB();
            console.log('Element is more than 50% visible');
          } else if (res.intersectionRatio > 0 && (res.dataset.goods.spuId % 3) === 0) {
            // 当元素部分可见时执行的操作
            console.log('Element is now visible');
          } else if (res.intersectionRatio < 0 && (res.dataset.goods.spuId % 3) === 0) {
            // 当元素部分可见时执行的操作
            console.log('Element is not visible');
          };

          /* console.log(res.dataset.goods.spuId % 3); */
          /* console.log('createdIno') */


          //

        },
      );
    },


    //满足条件的操作

    intersectionObserverCB() {
      this.triggerEvent('ob', {
        goods: this.data.goods,
        context: this.intersectionObserverContext,
      });
      console.log('intersectionObserverCB');
    },


    clearIntersectionObserverHandle() {
      if (this.intersectionObserverContext) {
        try {
          this.intersectionObserverContext.disconnect();
        } catch (e) { }
        this.intersectionObserverContext = null;
      }
    },

    loadLazyImgChange() {
      console.log('e');
    }
  },
});
