// pages/getstatistics/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tnum: 0,
    nnum: 0,
    hasNew: false
  },
  tosee(){
    let app =  getApp();
    app.globalData.hasNew = false;
    this.setData({
      hasNew: false
    })  
    wx.navigateTo({
      url: '../seeworks/index',
    })
  },
  toindex(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let app =  getApp();
    // console.log(app.globalData.finishedPlan);
    console.log(app.globalData.hasNew);    
    this.setData({
      tnum: app.globalData.finishedPlan.length,
      nnum: app.globalData.planList.length,
      hasNew: app.globalData.hasNew
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