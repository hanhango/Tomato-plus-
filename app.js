//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var music = wx.setInnerAudioOption({

      obeyMuteSwitch: false,
      
      success: function(res) {
      
      console.log('开启静音模式下播放音乐的功能');
      
      },
      
      fail: function(res) {
      
      console.log('静音设置失败');
      
      }
      
      });
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res);
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    hasNew: false,
    userInfo: null,
    finishedPlan: [],
    //计划列表
  //  {
  //     tittle: "阅读书籍",
  //     reward: '吃鸡腿',
  //     spendTime: 1000,
  //     needTime: 1000,
  //     spendHour: 15,
  //     spendMinute: 20,
  //     needHour: 15,
  //     needMinute: 20,
  //   }
    planList: []
  }
})