// pages/star/star.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starList: [],
    show: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {


    var that = this
    wx.login({
      success: (res) => {
        wx.request({
          url: 'https://tools.fushisanlang.cn/wind/poetry/star',
          method: "get",

          data: {
            code: res.code,
          },

          success: function (res) {


            that.setData({
              starList: res.data,
              show: true,
            })


          }
        })
      },
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  read: function (event) {

    var code, poetryid
    code = event.currentTarget.dataset.code
    poetryid = event.currentTarget.dataset.poetryid

    wx.redirectTo({
      url: '../read/read?code=' + code + '&poetryid=' + poetryid,
    })
  },
  random: function () {
    wx.redirectTo({
      url: '../random/random',
    })
  },
})