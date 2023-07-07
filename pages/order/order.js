// pages/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    money:220, //付款金额
    orderHistory:[
      {     tableNumber:'A06',
             orderTime:"2023-05-21 17:36:39",
             payment:"251",
             id:1,
             particulars:[
               {
              dishes: "宫保虾球",
              quantity:"2",
              amount:66.00
             },
             {
              dishes: "钵钵鸡",
              quantity:"1",
              amount:39.00
             },
             {
              dishes: "回锅肉",
              quantity:"1",
              amount:33.00
             }
            ]
      
    }]
  },
 // 更改tabs
 onChange(){

 },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
 
  },
  sumbitOrder(){
    wx.switchTab({
      url: '/pages/index/index',
    })
    // wx.navigateTo({
    //   url: '/pages/index/index',
    // })
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

  }
})