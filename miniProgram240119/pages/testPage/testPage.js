const db = wx.cloud.database();

Page({
  // data: {
  //   fabButton: {
  //     icon: 'share',
  //     openType: 'share',
  //   },
  // },


  onShow() {
    /*     this.getTabBar().init(); */
  },


  onLoad() {
    console.log('11');

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



    // 这里进行数据库的查询操作
    db.collection('testA').get().then(res => {
      // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
      console.log(res.data)
    });


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
  handleClick(e) {
    console.log(e);
    wx.navigateTo({ url: '/pages/goods/search/index' });
  },
});