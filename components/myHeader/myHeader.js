// components/myHeader/myHeader.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    show:false

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap(){
      console.log('点击事件被触发');
      this.setData({ show: true});
      // 在这里编写点击事件的逻辑
    
    },
  
    onClose() {
      this.setData({ show: false });
    },
  }
})
