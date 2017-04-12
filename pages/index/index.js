//index.js
//获取应用实例
let app = getApp()
Page({
  data: {
    userInfo:{},
    active:1,
  },
  //事件处理函数
  navTap(e){
    let navType=e.currentTarget.dataset.type;
    switch(navType){
      case "1":this.setData({active:1}); break;
      case "2":this.setData({active:2}); break;
      case "3":this.setData({active:3}); break;
      case "4":this.setData({active:4}); break;
      default:this.setData({active:1});
    }
  },
  onLoad: function () {
    let that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      console.log(userInfo)
    })
  }
})
