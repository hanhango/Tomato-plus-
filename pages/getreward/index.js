// pages/getreward/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let app =  getApp();
    
    console.log(app.globalData.planList[options.index].reward);
    console.log(options.index);
    let ans = '恭喜完成任务啦~  快去';
    let check = app.globalData.planList[options.index].reward;
    if(check[check.length - 1] === '!' || check[check.length - 1] === '~'){
      ans += check
    } else{
      ans += check + '吧!';
    } 
    this.setData({
      // message: '恭喜完成任务啦~快去' + app.globalData.planList[options.index].reward + '吧'
      message:  ans
    })
    let time = new Date();
    app.globalData.planList[options.index].nowTime = time.getFullYear().toString() + "-" + (time.getMonth() + 1).toString() + "-" + time.getDay().toString();
    app.globalData.hasNew = true;
    app.globalData.finishedPlan.push(app.globalData.planList[options.index]);
    app.globalData.planList.splice(options.index,1);
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