// pages/read/read.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poetryInfo: {},
    show: false,
    poetryid: 0,
    code: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    var that = this
    wx.login({
      success: (res) => {
        wx.request({
          url: 'https://tools.fushisanlang.cn/wind/poetry/read/'+ options.code + '/'+options.poetryid,
          method: "get",
          data: {
            code: res.code,
          },
          success: function (res) {
            that.setData({
              poetryInfo: res.data,
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
  random() {
    wx.redirectTo({
      url: '../random/random',
    })
  },
  err() {
    var that = this
    wx.login({
      success: (res) => {
        wx.request({
          url: 'https://tools.fushisanlang.cn/wind/poetry/err',
          method: "get",
          data: {
            code: res.code,
            poetryid: that.data.poetryInfo.PoetryId,
            poetrycode: that.data.poetryInfo.PoetryCode,
          },

          success: function (res) {

            console.log(res.data)
            wx.showToast({
              title: res.data.message,
            })

          }
        })
      },
    })


  },
  starlist(){
wx.redirectTo({
  url: '../star/star',
})
  },
  delstar() {
    var that = this
    wx.login({
      success: (res) => {
        wx.request({
          url: 'https://tools.fushisanlang.cn/wind/poetry/star',
          method: "delete",
          data: {
            code: res.code,
            poetryid: that.data.poetryInfo.PoetryId,
            poetrycode: that.data.poetryInfo.PoetryCode,
          },

          success: function (res) {


            wx.showToast({
              title: res.data.message,
            })
            wx.redirectTo({
              url: '../star/star',
            })

          }
        })
      },
    })


  }
})