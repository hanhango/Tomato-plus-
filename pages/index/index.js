//index.js
//获取应用实例
Page({
  data:{
    goplan: false,
    planList: [],
  },
  goUser(){
    wx.navigateTo({
      url: '../getstatistics/index',
      success: function(res){
      }
    })
  }, 
  planClick(){
    wx.navigateTo({
      url: '../setplan/index',
    });
      
  },
  continue(e){
    //console.log(e.currentTarget.dataset.index);
    let index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: "../doplan/doplan?index=" + index
    })
  },
  getreward(e){
    let app =  getApp();
    let index = e.currentTarget.dataset.index;
    let str = '恭喜你完成任务啦~，快去' + app.globalData.planList[index].reward
      
    setTimeout(() => {
      wx.showToast({           
        title: str,
        image: '../../img/finished.png'
      })
    },1000)
    // 
    // this.setData({
    //   planList: app.globalData.planList
    // })
    wx.navigateTo({
      url: '../getreward/index?index=' + index
    })
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    let app =  getApp();
    this.setData({
      planList: app.globalData.planList
    })
    // for(let i = 0;i < this.data.planList.length;i++){
    //   this.data.planList[i].percent = (this.data.planList[i].finishedTime / this.data.planList[i].needTime).toFixed(2) * 100; 
    // }
    // console.log(this.data.planList[0].percent);
    let arr = this.data.planList;
    arr.forEach(item => {
      item.percent = ((item.spendTime / item.needTime) * 100).toFixed(2)
    })
    this.setData({
      planList: arr
    })
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    let app =  getApp();
    this.setData({
      planList: app.globalData.planList
    })
    // for(let i = 0;i < this.data.planList.length;i++){
    //   this.data.planList[i].percent = (this.data.planList[i].finishedTime / this.data.planList[i].needTime).toFixed(2) * 100; 
    // }
    // console.log(this.data.planList[0].percent);
    let arr = this.data.planList;
    arr.forEach(item => {
      item.percent = ((item.spendTime / item.needTime) * 100).toFixed(2)
    })
    this.setData({
      planList: arr
    })
    // this.data.planList.forEach(item => {
    //   console.log(item.percent);
    // })
    console.log(app.globalData.userInfo);

  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})