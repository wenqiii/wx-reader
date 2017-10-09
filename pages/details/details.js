var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    id: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    console.log(id);
    var url = 'https://www.easy-mock.com/mock/5965833ab6cab76bb73915e8/reader/hot';
    url += '/' + id;
    var that = this;
    console.log(url);
    wx.request({
      url: url,
      method: 'GET',
      success: function (res) {    
        that.setData({
          detail: res.data.data
        });
      },
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