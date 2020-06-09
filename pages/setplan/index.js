// pages/setplan/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: '0时0分',
    minute: 0,
    hour: 0,
    tittle: '',
    reward: ''
  },

  timeChange(e) {
    this.setData({
      hour: parseInt(e.detail.value.substr(0, 2)),
      minute: parseInt(e.detail.value.substr(3, 2))
    })
  },
  save() {
    let app = getApp();
    let needHour = this.data.hour;
    let needMinute = this.data.minute;
    let needTime = (needHour * 60 + needMinute) * 60;
    let obj = {}
    if (needTime === 0) {
      wx.showToast({
        title: '请选择时间!',
        icon: 'none'
      })
    } else if (this.data.tittle.length === 0) {
      wx.showToast({
        title: '请填写任务!',
        icon: 'none'
      })
    } else if (this.data.reward.length === 0) {
      wx.showToast({
        title: '请填写奖励!',
        icon: 'none'
      })
    } else {
      obj.tittle = this.data.tittle;
      obj.reward = this.data.reward;
      obj.needHour = this.data.hour;
      obj.needMinute = this.data.minute;
      obj.spendHour = 0;
      obj.spendMinute = 0;

      obj.needTime = needTime;
      obj.spendTime = 0;

      app.globalData.planList.push(obj)

      wx.navigateTo({
        url: '../index/index'
      })
    }

  },
  cancel() {
    wx.navigateTo({
      url: '../index/index'
    })
  },

  flagSet(e) {
    this.setData({
      tittle: e.detail.value
    })
  },
  rewardSet(e) {
    this.setData({
      reward: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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