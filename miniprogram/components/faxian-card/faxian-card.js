import formatTime from "../../utils/formatTime"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    faxian:{
      type:Object
    }
  },
observers:{
  ['faxian.createTime'](val){
    if(val){
      this.setData({
        time:  formatTime(new Date(val))

      })
      
    }
  }

},
  /**
   * 组件的初始数据
   */
  data: {
    time:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    scroll(e) {
      console.log(e)
    },
    pre(event){
      console.log(event)
      wx.previewImage({
        urls: event.target.dataset.src,
        current: event.target.dataset.url
      })
    },
  }
})
