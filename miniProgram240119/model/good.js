import { cdnBase } from '../config/index';
const imgPrefix = cdnBase;

const defaultDesc = [`${imgPrefix}/goods/details-1.png`];

const allGoods = [
  {
    saasId: '88888888',
    storeId: '1000',
    /* 这项改成userid */
    spuId: '0',
    title: '白色短袖连衣裙荷叶边裙摆宽松韩版休闲纯白清爽优雅连衣裙',
    primaryImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
    images: [
      'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
      'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09b.png',
    ],
    video: null,
    available: 1,
    minSalePrice: 29800,
    minLinePrice: 29800,
    maxSalePrice: 29800,
    maxLinePrice: 40000,
    spuStockQuantity: 510,
    soldNum: 1020,
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
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '135686633',
    title: '纯色纯棉休闲圆领短袖T恤纯白亲肤厚柔软细腻面料纯白短袖套头T恤',
    primaryImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
    minSalePrice: '25900',
    minLinePrice: '31900',
    maxSalePrice: '26900',
    maxLinePrice: '31900',
    isSoldOut: false,
    images: [
      'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08a.png',
      'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08a1.png',
      'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
    ],
    groupIdList: ['15029', '14023'],
    spuTagList: [
      {
        id: null,
        title: '2020夏季新款',
        image: null,
      },
    ],
    skuList: [
      {
        skuId: '135686634',
        skuImage: null,
        specInfo: [
          {
            specId: '10000',
            specTitle: null,
            specValueId: '10001',
            specValue: '白色',
          },
          {
            specId: '10002',
            specTitle: null,
            specValueId: '10003',
            specValue: 'M',
          },
        ],
        priceInfo: [
          {
            priceType: 1,
            price: '25900',
            priceTypeName: '销售价格',
          },
          {
            priceType: 2,
            price: '31900',
            priceTypeName: '划线价格',
          },
        ],
        stockInfo: {
          stockQuantity: -9,
          safeStockQuantity: 0,
          soldQuantity: 0,
        },
        weight: null,
        volume: null,
        profitPrice: null,
      },
      {
        skuId: '135691631',
        skuImage: null,
        specInfo: [
          {
            specId: '10000',
            specTitle: null,
            specValueId: '10001',
            specValue: '白色',
          },
          {
            specId: '10002',
            specTitle: null,
            specValueId: '11003',
            specValue: 'S',
          },
        ],
        priceInfo: [
          {
            priceType: 1,
            price: '26900',
            priceTypeName: '销售价格',
          },
          {
            priceType: 2,
            price: '31900',
            priceTypeName: '划线价格',
          },
        ],
        stockInfo: {
          stockQuantity: 177,
          safeStockQuantity: 0,
          soldQuantity: 0,
        },
        weight: null,
        volume: null,
        profitPrice: null,
      },
      {
        skuId: '135691632',
        skuImage: null,
        specInfo: [
          {
            specId: '10000',
            specTitle: null,
            specValueId: '10001',
            specValue: '白色',
          },
          {
            specId: '10002',
            specTitle: null,
            specValueId: '11002',
            specValue: 'L',
          },
        ],
        priceInfo: [
          {
            priceType: 1,
            price: '26900',
            priceTypeName: '销售价格',
          },
          {
            priceType: 2,
            price: '31900',
            priceTypeName: '划线价格',
          },
        ],
        stockInfo: {
          stockQuantity: 194,
          safeStockQuantity: 0,
          soldQuantity: 0,
        },
        weight: null,
        volume: null,
        profitPrice: null,
      },
    ],
    isAvailable: 1,
    spuStockQuantity: 371,
    soldNum: 1032,
    isPutOnSale: 1,
    specList: [
      {
        specId: '10000',
        title: '颜色',
        specValueList: [
          {
            specValueId: '10001',
            specId: '10000',
            saasId: '88888888',
            specValue: '白色',
            image: '',
          },
        ],
      },
      {
        specId: '10002',
        title: '尺码',
        specValueList: [
          {
            specValueId: '11003',
            specId: '10002',
            saasId: '88888888',
            specValue: 'S',
            image: '',
          },
          {
            specValueId: '10003',
            specId: '10002',
            saasId: '88888888',
            specValue: 'M',
            image: '',
          },
          {
            specValueId: '11002',
            specId: '10002',
            saasId: '88888888',
            specValue: 'L',
            image: '',
          },
        ],
      },
    ],
    promotionList: null,
    minProfitPrice: null,
    etitle: '',
    desc: [
      'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08c.png',
      'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08d.png',
    ],
  },



  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '135691628',
    title: '运动连帽拉链卫衣休闲开衫长袖多色运动细绒面料运动上衣',
    images: [
      'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png',
      'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a1.png',
      'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17b.png',
      'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17b1.png',
    ],
    primaryImage: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png',
    minSalePrice: '25900',
    minLinePrice: '39900',
    maxSalePrice: '25900',
    maxLinePrice: '39900',
    isSoldOut: true,
    groupIdList: ['15029', '14023'],
    spuTagList: [
      {
        id: null,
        title: '2020夏季新款',
        image: null,
      },
    ],
    skuList: [
      {
        skuId: '135686631',
        skuImage: null,
        specInfo: [
          {
            specId: '127904180600844800',
            specTitle: null,
            specValueId: '127904180768617216',
            specValue: '军绿色',
          },
          {
            specId: '127904861604820480',
            specTitle: null,
            specValueId: '127904862494014208',
            specValue: 'XS',
          },
        ],
        priceInfo: [
          {
            priceType: 1,
            price: '25900',
            priceTypeName: '销售价格',
          },
          {
            priceType: 2,
            price: '39900',
            priceTypeName: '划线价格',
          },
        ],
        stockInfo: {
          stockQuantity: 0,
          safeStockQuantity: 0,
          soldQuantity: 0,
        },
        weight: null,
        volume: null,
        profitPrice: null,
      },
      {
        skuId: '135686632',
        skuImage: null,
        specInfo: [
          {
            specId: '127904180600844800',
            specTitle: null,
            specValueId: '127904180768617216',
            specValue: '军绿色',
          },
          {
            specId: '127904861604820480',
            specTitle: null,
            specValueId: '127904862007474176',
            specValue: 'M',
          },
        ],
        priceInfo: [
          {
            priceType: 1,
            price: '25900',
            priceTypeName: '销售价格',
          },
          {
            priceType: 2,
            price: '39900',
            priceTypeName: '划线价格',
          },
        ],
        stockInfo: {
          stockQuantity: 0,
          safeStockQuantity: 0,
          soldQuantity: 0,
        },
        weight: null,
        volume: null,
        profitPrice: null,
      },
      {
        skuId: '135691629',
        skuImage: null,
        specInfo: [
          {
            specId: '127904180600844800',
            specTitle: null,
            specValueId: '127904180768617216',
            specValue: '军绿色',
          },
          {
            specId: '127904861604820480',
            specTitle: null,
            specValueId: '127904862175246592',
            specValue: 'S',
          },
        ],
        priceInfo: [
          {
            priceType: 1,
            price: '25900',
            priceTypeName: '销售价格',
          },
          {
            priceType: 2,
            price: '39900',
            priceTypeName: '划线价格',
          },
        ],
        stockInfo: {
          stockQuantity: 0,
          safeStockQuantity: 0,
          soldQuantity: 0,
        },
        weight: null,
        volume: null,
        profitPrice: null,
      },
      {
        skuId: '135691630',
        skuImage: null,
        specInfo: [
          {
            specId: '127904180600844800',
            specTitle: null,
            specValueId: '127904180768617216',
            specValue: '军绿色',
          },
          {
            specId: '127904861604820480',
            specTitle: null,
            specValueId: '127904861755815680',
            specValue: 'L',
          },
        ],
        priceInfo: [
          {
            priceType: 1,
            price: '25900',
            priceTypeName: '销售价格',
          },
          {
            priceType: 2,
            price: '39900',
            priceTypeName: '划线价格',
          },
        ],
        stockInfo: {
          stockQuantity: 0,
          safeStockQuantity: 0,
          soldQuantity: 0,
        },
        weight: null,
        volume: null,
        profitPrice: null,
      },
    ],
    isAvailable: 1,
    spuStockQuantity: 0,
    soldNum: 1022,
    isPutOnSale: 1,
    specList: [
      {
        specId: '127904180600844800',
        title: '颜色',
        specValueList: [
          {
            specValueId: '127904180768617216',
            specId: '127904180600844800',
            saasId: '88888888',
            specValue: '军绿色',
            image: '',
          },
        ],
      },
      {
        specId: '127904861604820480',
        title: '尺码',
        specValueList: [
          {
            specValueId: '127904862494014208',
            specId: '127904861604820480',
            saasId: '88888888',
            specValue: 'XS',
            image: '',
          },
          {
            specValueId: '127904862175246592',
            specId: '127904861604820480',
            saasId: '88888888',
            specValue: 'S',
            image: '',
          },
          {
            specValueId: '127904862007474176',
            specId: '127904861604820480',
            saasId: '88888888',
            specValue: 'M',
            image: '',
          },
          {
            specValueId: '127904861755815680',
            specId: '127904861604820480',
            saasId: '88888888',
            specValue: 'L',
            image: '',
          },
        ],
      },
    ],
    promotionList: null,
    minProfitPrice: null,
    etitle: '',
    desc: [
      'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17c.png',
      'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17d.png',
    ],
  },

];

/**
 * @param {string} id
 * @param {number} [available] 库存, 默认1
 */
export function genGood(id, available = 1) {
  const specID = ['135681624', '135681628'];
  if (specID.indexOf(id) > -1) {
    return allGoods.filter((good) => good.spuId === id)[0];
  }
  const item = allGoods[id % allGoods.length];
  return {
    ...item,
    spuId: `${id}`,
    available: available,
    desc: item?.desc || defaultDesc,
    images: item?.images || [item?.primaryImage],
  };
}
