// components/body/body.js
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
    show:  false,
    value: 1,
    active: 1,
    activeKey: 0,
    mainActiveIndex: 0,
    activeId: [],
    max: 2,
    items: [{
        // 导航名称
        text: '主食米饭',
        id: 1,
        // 禁用选项
        disabled: false,
      },
      {
        // 导航名称
        text: '炒菜',
        id: 2,
        // 禁用选项
        disabled: false,

      },
    ],
    // 该导航下所有的可选项
    children: [{
        // 名称
        text: '爆炒猪肝',
        // id，作为匹配选中状态的标识
        id: 1,
        price: 20,
        monthlySales: 16,
        image: "https://img.yzcdn.cn/vant/cat.jpeg"
      },
      {
        price: 27,
        monthlySales: 200,
        text: '地三鲜',
        id: 2,
        image: "https://img.yzcdn.cn/vant/cat.jpeg"
      },
      // {
      //   // 名称
      //   text: '蛋炒饭',
      //   // id，作为匹配选中状态的标识
      //   id: 1,
      //   image:"https://img.yzcdn.cn/vant/cat.jpeg"
      // },
      // {
      //   text: '米饭',
      //   id: 2,
      //   image:"https://img.yzcdn.cn/vant/cat.jpeg"
      // },
    ],
    particulars: [{
      id: 3,
      name: '爆炒腰子盖浇饭',
      img: "https://img.yzcdn.cn/vant/cat.jpeg",
      price: 12,

    }],

    scoville: [{
      id:1,
      hot:"特辣" },
      {
        id:2,
        hot:"中辣" },
        {
          id:3,
          hot:"微辣" },
          {
            id:4,
            hot:"不辣" }
    
    
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {

    onClickNav({
      detail = {}
    }) {
      this.setData({
        mainActiveIndex: detail.index || 0,
      });
    },
    onClose() {
      this.setData({
        show: false
      });
    },
    changeSize() {
      // 对应的id 然后显示对应的内容 
      this.setData({
        show: true
      });
    },
    minusValues(e){
    console.log(this.data.value)
    if(this.data.value<=1){
      return 
    }else{
      this.setData({value:this.data.value-1})
    }

    },
    plusValues(){
      this.setData({value:this.data.value+1})
    },
    onClickItem({
      detail = {}
    }) {
      const {
        activeId
      } = this.data;

      const index = activeId.indexOf(detail.id);
      if (index > -1) {
        activeId.splice(index, 1);
      } else {
        activeId.push(detail.id);
      }

      this.setData({
        activeId
      });
    },


    getUserProfile(e) {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    },
    onChange(event) {
      // console.log(event.detail.index)
    },
    sidebarChange(event) {
      // console.log(event)
    },


  }
})