const db = wx.cloud.database();

//储存临时图片的路径
const imgPath = 'img/temp/';


Page({
  data: {
    images: [],
    options: [],


    //价格输入提示
    priceError: false,

    /*    类别联级栏数据 */
    /*     subTitles: ['请选择主类', '请选择次类', '请选择次类'], */
    note: '请选择类别',
    visible: true,
    keys: {
      label: 'name',
      value: 'groupId',
      children: 'children',
    },

    //从选择框提取数据
    selector: {
      groupId: '',
      subCategoryId: '',
    },

    //图片上传插件
    fileList: [
      {

      }
    ],

  },




  /* 获取所有表单值 */
  submitForm(e) {
    //合并表单数据
    const formData = { ...e.detail.value, ...this.data.selector };

    console.log('Form data:', formData);


    // 这里可以加入表单提交逻辑，如 wx.request 发送网络请求等
    wx.showToast({
      title: '商品发布成功',
      icon: 'success',
      duration: 2000
    });
    // 提交后的处理，如清空表单，跳转页面等
  },

  async init() {
    try {
      // 从后台数据库获取商品列表
      await db.collection('category').doc('1fe899fa65ba9c3b000000364501012c').get().then(res => {
        this.setData({
          options: res.data.categories,
        })
      });

    } catch (error) {
      console.error('err:', error);
    }
  },

  onShow() {
    this.getTabBar().init();
  },


  onLoad() {

    /*     const swipers = db.collection('swiperImg'); */
    const todo = db.collection('todos').doc('test111');

    /*     db.collection("testA").add({
          // data 字段表示需新增的 JSON 数据
          data: {
            _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
            description: "learn cloud database",
            due: new Date("2018-09-01"),
            tags: [
              "cloud",
              "database"
            ],
            // 为待办事项添加一个地理位置（113°E，23°N）
            location: new db.Geo.Point(113, 23),
            done: false
          },
          success: function (res) {
            // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
            console.log(res)
          }
        }) */




    /*     通过云路径id获取文件url方法
        wx.cloud.getTempFileURL({
          fileList: ['cloud://cloud1-2gt7rgawd6658b5d.636c-cloud1-2gt7rgawd6658b5d-1323986321/api/goodCard/nz-09a.png'],
          success: res => {
            // get temp file URL
            console.log(res.fileList);
            console.log(res.fileList[0].tempFileURL)
          },
          fail: err => {
            // handle error
          }
        }) */
  },

  /*  悬浮钮 */
  /*   handleClick(e) {
      console.log(e);
      wx.navigateTo({ url: '/pages/goods/search/index' });
    },
   */



  /* 初始化页面,即加载类别 */
  onReady() {
    this.init();
  },


  //验证数字的输入并传递数据
  onPriceInput(e) {
    const { priceError } = this.data;
    const isNumber = /^\d+(\.\d+)?$/.test(e.detail.value);
    if (priceError === isNumber) {
      this.setData({
        priceError: !isNumber,
      });
    }
  },

  showCascader() {
    this.setData({ visible: true });
  },

  //选项提交后执行的操作，整理数据
  onChange(e) {
    const { selectedOptions } = e.detail;

    const groupid = selectedOptions[0].groupId;
    const subid = selectedOptions[2].groupId;

    //console.log(selectedOptions);

    this.setData({

      //选项显示到表单
      note: selectedOptions.map((item) => item.name).join('/'),

      //数据传到后台表单
      selector: {
        groupId: groupid,
        subCategoryId: subid,
      }
    });
  },


  //图片模块
  afterRead(event) {

    //设置图片变量
    const { file } = event.detail;

    //执行上传方法
    this.uploadToCloud(file);

    //read之后上传至云后台


    // 常规url方法
    /* wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: 'file',
      formData: { user: 'test' },
      success(res) {
        // 上传完成需要更新 fileList
        const { fileList = [] } = this.data;
        fileList.push({ ...file, url: res.data });
        this.setData({ fileList });
      },
    }); */


    //尝试传到本地
    /* wx.downloadFile({
      url: confirmationUrl,//confirmationurl图片地址
      success: (res) => {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: (res) => {
            wx.showToast({
              title: '保存成功',
              duration: 1000
            })
          },


          fail: (err) => {
            wx.showToast({
              title: '获取权限失败',
              duration: 1000
            })
          }
        })
      }
    }); */



  },



  //之后使用真实API，放弃微信云开发，方法API需要更改
  uploadToCloud(fileList) {
    wx.cloud.init();
    const randomStr = Math.random().toString(36).substr(2, 15);
    //名字里加随机字符串
    const fileName = randomStr + `tempPicture${fileList.size}.png`;

    //临时存文件用的路径
    const tempRoute = imgPath + fileName;

    const cloudRoute = 'cloud://cloud1-2gt7rgawd6658b5d.636c-cloud1-2gt7rgawd6658b5d-1323986321/';
    //获取临时url用的路径
    const tempFilePath2 = cloudRoute + imgPath + fileName;


    this.uploadFilePromise(tempRoute, fileList.url)
      .then(data => {
        this.setData({
          //将新获得的id用于下面的获取链接
          tempFilePath2: data.fileID,
        });

        wx.showToast({ title: '上传成功', icon: 'none' });

        //获取临时链接
        wx.cloud.getTempFileURL({
          fileList: [`${tempFilePath2}`],
          success: res => {

            const { fileList = [] } = this.data;
            const url = res.fileList[0].tempFileURL;

            fileList.push({ ...file, url: url });
            this.setData({ fileList }, () => {
              console.log(this.data.fileList); // 在setData的回调中打印更新后的fileList
            })

          },
          fail: console.error
        });

      })
      .catch(e => {
        wx.showToast({ title: '上传失败', icon: 'none' });
        console.log(e);
      });


    //临时缓存方法


  },



  uploadFilePromise(thisRoute, chooseResult) {

    return new Promise((resolve, reject) => {

      wx.cloud.uploadFile({
        cloudPath: thisRoute,
        filePath: chooseResult,
        success: res => resolve(res),
        fail: err => reject(err)
      });
    });

  },


});