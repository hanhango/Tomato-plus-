// pages/doplan/doplan.js
let go = setInterval(function () {

});
const innerAudioContext = wx.createInnerAudioContext()
// const backgroundAudioManager = wx.getBackgroundAudioManager()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    isGoing: false,
    hour: '00',
    minute: '00',
    second: '00',
    playMusic: true
  },
  musicClick() {
    this.setData({
      playMusic: !this.data.playMusic
    })
    if (this.data.playMusic && this.data.isGoing) {
      console.log('play');
      // backgroundAudioManager.src = "http://m10.music.126.net/20200609142013/8649b92598a2c95568b598a43dfcffc5/ymusic/0159/0258/0f5b/6326b98bf65295d8d1648149d8b6c6c4.mp3"
      // backgroundAudioManager.play();
      innerAudioContext.autoplay = true
      innerAudioContext.play();
      innerAudioContext.loop = true;
      // innerAudioContext.src = "http://m10.music.126.net/20200609142013/8649b92598a2c95568b598a43dfcffc5/ymusic/0159/0258/0f5b/6326b98bf65295d8d1648149d8b6c6c4.mp3"
    } else {
      innerAudioContext.pause()
      // backgroundAudioManager.pause();

    }
  },

  pauseTime() {
    clearInterval(go);
    // wx.pauseBackgroundAudio();
    innerAudioContext.pause()
    this.setData({
      isGoing: false
    })
  },

  continueTime() {
    // innerAudioContext.autoplay = true
    // innerAudioContext.src = "http://m10.music.126.net/20200603092654/deaf5b1cfd31d32df78f654d5a0bf876/ymusic/0159/0258/0f5b/6326b98bf65295d8d1648149d8b6c6c4.mp3"
    innerAudioContext.src = "http://sd.sycdn.kuwo.cn/9b0ab25231ccc062918c3cfdbc9cfd64/5edf3c26/resource/n3/86/11/782437239.mp3"
    // innerAudioContext.src = "G:\迅雷下载"
    innerAudioContext.play();
    innerAudioContext.loop = true;

    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })

    let app = getApp();
    this.setData({
      isGoing: true
    })
    console.log(this.data.index);
    let spendTime = app.globalData.planList[this.data.index].spendTime

    go = setInterval(() => {
      spendTime = ++app.globalData.planList[this.data.index].spendTime;
      let hh = Math.floor(spendTime / (60 * 60) % 24).toString();
      let mm = Math.floor(spendTime / 60 % 60).toString();
      let ss = Math.floor(spendTime % 60).toString();
      app.globalData.planList[this.data.index].spendHour = parseInt(hh);
      app.globalData.planList[this.data.index].spendMinute = parseInt(mm);
      if (hh.length == 1) {
        hh = '0' + hh;
      }
      if (mm.length == 1) {
        mm = '0' + mm;
      }
      if (ss.length == 1) {
        ss = '0' + ss;
      }
      this.setData({
        // hour: Math.floor(spendTime / (60*60) %24),
        // minute: Math.floor(spendTime/ 60 % 60),
        // second: Math.floor(spendTime % 60)
        hour: hh,
        minute: mm,
        second: ss
      })


      if (spendTime === app.globalData.planList[this.data.index].needTime) {
        wx.reLaunch({
          url: '../index/index'
        })
        clearInterval(go);
      }
    }, 1000);
  },


  deletePlan() {
    clearInterval(go);
    let app = getApp();
    app.globalData.planList.splice(this.data.index, 1);
    innerAudioContext.pause()
    wx.reLaunch({
      url: '../index/index',
    })
    clearInterval(go);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let app = getApp();

    let spendTime = app.globalData.planList[options.index].spendTime
    let hh = Math.floor(spendTime / (60 * 60) % 24).toString();
    let mm = Math.floor(spendTime / 60 % 60).toString();
    let ss = Math.floor(spendTime % 60).toString();

    if (hh.length == 1) {
      hh = '0' + hh;
    }
    if (mm.length == 1) {
      mm = '0' + mm;
    }
    if (ss.length == 1) {
      ss = '0' + ss;
    }
    this.setData({
      // hour: Math.floor(spendTime / (60*60) %24),
      // minute: Math.floor(spendTime/ 60 % 60),
      // second: Math.floor(spendTime % 60)
      index: options.index,
      hour: hh,
      minute: mm,
      second: ss
    })
    console.log(this.data.index);
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
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.src = "http://sd.sycdn.kuwo.cn/9b0ab25231ccc062918c3cfdbc9cfd64/5edf3c26/resource/n3/86/11/782437239.mp3"
    clearInterval(go)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    innerAudioContext.pause();
    clearInterval(go)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    innerAudioContext.pause()
    clearInterval(go)
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