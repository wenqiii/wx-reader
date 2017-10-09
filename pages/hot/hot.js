// pages/hot/hot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hot: [
      {
        author: "潇洒的肉丝面君",
        "id": 1,
        book: {
          name: "敏感词",
          bgimg: "../img/1.jpg"
        },
        tag: "自由，6分钟",
        beLiked: 76,
        beLooked: 416,
      },{
        author: "李嘉寅",
        "id": 2,
        book: {
          name: "局中局",
          bgimg: "../img/9.jpg"
        },
        tag: "谍战，3分钟",
        beLiked: 33,
        beLooked: 358,
      },{
        author: "梦无方",
        "id": 3,
        book: {
          name: "方夜谭",
          bgimg: "../img/2.jpg"
        },
        tag: "趣乐，2分钟",
        beLiked: 40,
        beLooked: 338,
      },{
        author: "二月初一",
        "id": 4,
        book: {
          name: "稀奇古怪午夜电台",
          bgimg: "../img/3.jpg"
        },
        tag: "灵异，3分钟",
        beLiked: 37,
        beLooked: 315,
      },{
        author: "Acup",
        "id": 5,
        book: {
          name: "遗忘都",
          bgimg: "../img/6.jpg"
        },
        tag: "漂灵，8分钟",
        beLiked: 35,
        beLooked: 397,
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  searching: function() {
    wx.navigateTo({
      url: '../search/search',
    })
  },

  // listenTap: function(){
  //   wx.navigateTo({
  //     url: '../details/details',
  //   })
  // },
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