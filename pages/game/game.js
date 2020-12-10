// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 数据初始化
   */
  initial: function() {
    this.setData({
      answer: Math.round(Math.random() * 100),//随机数
      count: 0,//回合数
      tip: '',//提示语句
      x: -1,//用户猜的数字
      isGameStart: true//游戏已经开始
    });
  },
  /**
   * 获取用户输入的数字
   */
  getNumber: function(e) {
    this.setData({ x : e.detail.value});
  },
  /**
   * 本回合开始猜数字
   */
  guess: function() {
    //获取用户本回合填写的数字
    let x = this.data.x;
    //重置x为未获得新数字状态
    this.setData({x: -1});

    if (x < 0) {
      wx.showToast({
        title: '不能小于0',
      });
    } else if (x > 100) {
      wx.showToast({
        title: '不能大于100',
      });
    } else {
      //回合数增加1
      let count = this.data.count + 1;
      //获取当前提示信息
      let tip = this.data.tip;
      //获取正确答案
      let answer = this.data.answer;

      if (x == answer) {
        tip += ' \n第' + count + '回合：' + x + '，猜对了！';
        this.setData({isGameStart: false});//游戏结束
      } else if (x > answer) {
        tip += ' \n第' + count + '回合：' + x + '，大了！';
      } else {
        tip += ' \n第' + count + '回合：' + x + '，小了！';
      }

      if (count == 8) {
        tip += ' \n游戏结束';
        this.setData({ isGameStart: false });//游戏结束
      }

      //更新提示语句和回合数
      this.setData({
        tip: tip,
        count: count
      });
    }
  },
  /**
   * 游戏重新开始
   */
  restartGame: function() {
    this.initial();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initial();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})