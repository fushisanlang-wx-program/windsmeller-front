// pages/register/register.js
var username
var password
var usermail
Page({

  username: function (e) {
    var value = e.detail.value;
    this.setData({
      username: value,
    })
  },

  Fu: function () {
    wx.redirectTo({
      url: '../../pages/fu/fu',
    })
  },

  registered: function (e) {
    var that = this;
    if (that.data.username.length == 0) {
      wx.showToast({
        icon: 'none',
        title: '昵称不能为空！',
        duration: 2000,
      })

    } else {

      wx.login({
        success: (res) => {

          wx.request({
            url: 'https://tools.fushisanlang.cn/wind/user/register',
            method: "get",
            header: {
              'content-type': 'application/json'
            },
            data: {
              UserName: this.data.username,
              code: res.code,
              //  UserMail: this.data.usermail,
            },

            success: function (res) {
              wx.redirectTo({
                url: '../random/random',
              })


            }
          })
        }
      })


    }
  },
})