Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index1",
      iconPath: "/images/首页.png",

    }
    , {
      pagePath: "index2",
      iconPath: "/images/发现.png",

    }
    , {
      pagePath: "index3",
      iconPath: "/images/我的.png",

    }
  ]
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})