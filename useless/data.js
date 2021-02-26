// 导航栏数据
var navdatas = [
    {
        id: '001',
        title: '小米手机',
        url: 'https://www.mi.com/mi11',
    },
    {
        id: '002',
        title: '红米手机',
        url: 'https://www.mi.com/buy/detail?product_id=10000267',
    },
    {
        id: '003',
        title: '小米电视',
        url: 'https://www.mi.com/buy/detail?product_id=12874',
    },
    {
        id: '004',
        title: '小米笔记本',
        url: 'https://www.mi.com/redmi-g',
    },
    {
        id: '005',
        title: '小米家电',
        url: 'https://www.mi.com/airconditionc1/v1c1',
    },
    {
        id: '006',
        title: '小米路由器',
        url: 'https://www.mi.com/r6000',
    },
    {
        id: '007',
        title: '智能硬件',
        url: 'https://www.mi.com/buy/detail?product_id=12790',
    },
    {
        id: '008',
        title: '服务',
        url: 'https://www.mi.com/service',
    },
    {
        id: '009',
        title: '社区',
        url: 'https://www.xiaomi.cn/',
    },
]

// Banner数据
var bannerdata = [
    {
        url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa6133dcd2cca53b77f4ad79551628df.jpg?w=2452&h=920',
    },
    {
        url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e09cc560affe2924c290046976fce6.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
    },
    {
        url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ebff5f5c1f52f2dbdd611897adbefd4.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
    },
    {
        url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ef4160c861b998239bce9adb82341e7.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
    }
]
// 分类菜单数据
var categoryNav = [
    {
        title: "手机 电话卡",
        url: "https://www.mi.com/p/1915.html",
        des: [
            {
                title: "小米11",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小米10 至尊纪念版",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小米10",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小米10 青春版",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Redmi K30S 至尊纪念版",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小米云服务",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Redmi K30 Pro 变焦版",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Redmi K30 5G",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Redmi K30 至尊纪念版",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Redmi 10X Pro",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Redmi 10X 5G",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Redmi 10X 4G",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Redmi Note 9 Pro",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Redmi Note 9 5G",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Redmi Note 9 4G",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
        ]
    },
    {
        title: "电视 盒子",
        url: "https://www.mi.com/p/1915.html",
        des: [
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
            {
                title: "小米透明电视",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mitv-great/hyaline"
            },
        ]
    },

    {
        title: "笔记本 显示器",
        url: "https://www.mi.com/a/h/7529.html",
        des: [
            {
                title: "RedMi G 游戏本",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/redmi-g"
            },
            {
                title: "RedMi G 游戏本",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/redmi-g"
            },
            {
                title: "RedMi G 游戏本",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/redmi-g"
            },
            {
                title: "RedMi G 游戏本",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/redmi-g"
            },
            {
                title: "RedMi G 游戏本",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/redmi-g"
            },
            {
                title: "RedMi G 游戏本",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/redmi-g"
            },
            {
                title: "RedMi G 游戏本",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/redmi-g"
            },
            {
                title: "RedMi G 游戏本",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/redmi-g"
            },
            {
                title: "RedMi G 游戏本",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/redmi-g"
            },
            {
                title: "RedMi G 游戏本",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/redmi-g"
            },
            {
                title: "RedMi G 游戏本",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/redmi-g"
            },
            {
                title: "RedMi G 游戏本",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/redmi-g"
            },
            {
                title: "RedMi G 游戏本",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/redmi-g"
            },
            {
                title: "RedMi G 游戏本",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/redmi-g"
            },
        ]
    },

    {
        title: "家电 插线板",
        url: "https://www.mi.com/p/9285.html",
        des: [
            {
                title: "冰箱",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
            },
            {
                title: "冰箱",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
            },
            {
                title: "冰箱",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
            },
            {
                title: "冰箱",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
            },
            {
                title: "冰箱",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
            },
            {
                title: "冰箱",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
            },
            {
                title: "冰箱",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
            },
            {
                title: "冰箱",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
            },
            {
                title: "冰箱",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
            },
            {
                title: "冰箱",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
            },
            {
                title: "冰箱",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
            },
            {
                title: "冰箱",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
            },
            {
                title: "冰箱",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
            },
            {
                title: "冰箱",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
            },
            {
                title: "冰箱",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
            },
            {
                title: "冰箱",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
            },
            {
                title: "冰箱",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1"
            },
        ]
    },

    {
        title: "出行 穿戴",
        url: "https://www.mi.com/p/1915.html",
        des: [
            {
                title: "Red Mi手表",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69bd883c1fc06ce41ff0fa1423b77e4e.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Red Mi手表",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69bd883c1fc06ce41ff0fa1423b77e4e.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Red Mi手表",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69bd883c1fc06ce41ff0fa1423b77e4e.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Red Mi手表",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69bd883c1fc06ce41ff0fa1423b77e4e.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Red Mi手表",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69bd883c1fc06ce41ff0fa1423b77e4e.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Red Mi手表",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69bd883c1fc06ce41ff0fa1423b77e4e.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Red Mi手表",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69bd883c1fc06ce41ff0fa1423b77e4e.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Red Mi手表",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69bd883c1fc06ce41ff0fa1423b77e4e.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Red Mi手表",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69bd883c1fc06ce41ff0fa1423b77e4e.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Red Mi手表",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69bd883c1fc06ce41ff0fa1423b77e4e.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "Red Mi手表",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69bd883c1fc06ce41ff0fa1423b77e4e.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
        ]
    },

    {
        title: "智能 路由器",
        url: "https://www.mi.com/p/1915.html",
        des: [
            {
                title: "打印机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "打印机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "打印机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "打印机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "打印机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "打印机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "打印机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "打印机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "打印机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "打印机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "打印机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "打印机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "打印机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
        ]
    },

    {
        title: "电源 配件",
        url: "https://www.mi.com/p/1915.html",
        des: [
            {
                title: "移动电源",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "移动电源",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "移动电源",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "移动电源",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "移动电源",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "移动电源",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "移动电源",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "移动电源",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "移动电源",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
        ]
    },

    {
        title: "健康 儿童",
        url: "https://www.mi.com/p/1915.html",
        des: [
            {
                title: "洗手机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "洗手机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "洗手机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "洗手机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "洗手机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "洗手机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "洗手机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "洗手机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "洗手机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },

            {
                title: "洗手机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "洗手机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "洗手机",
                img: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=40&h=40",
                url: "https://www.mi.com/mi11"
            },
        ]
    },

    {
        title: "耳机 音响",
        url: "https://www.mi.com/p/1915.html",
        des: [
            {
                title: "小爱音响",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱音响",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱音响",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱音响",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },

            {
                title: "小爱音响",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱音响",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱音响",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },

            {
                title: "小爱音响",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱音响",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱音响",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },

        ]
    },

    {
        title: "生活 箱包",
        url: "https://www.mi.com/p/1915.html",
        des: [
            {
                title: "小爱背包",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱背包",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱背包",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱背包",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱背包",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱音响",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱音响",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱音响",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱音响",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱音响",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱音响",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                title: "小爱音响",
                img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&w=40&h=40&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
        ]
    },
];






/* 
goods
*/
// 商品列表详情数据
var goodsdata = [
    {
        poster: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/431e5fd6bfd1b67d096928248be18303.jpg?thumb=1&w=1533&h=150&f=webp&q=90",
        title: "手机",
        des: [
            {
                name: "小米11",
                price: "3999元起",
                description: "晓龙888|2K四曲面屏",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a260090e0e08770b0bd865845a4b4ab.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "小米10",
                price: "3399元",
                description: "骁龙865/1亿像素相机",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: " Note 9 Pro",
                price: "1599元起",
                description: " 一亿像素夜景相机，120Hz六档变速高刷屏",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4e75e528fb468aee107f551179aa0799.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {

                name: "Note9",
                price: "1299元起",
                description: "晓龙888|2K四曲面屏",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/de2f71a797a74e1ca70f1fb4570bc026.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {

                name: "Note9 4G",
                price: "999元起",
                description: "6000mAh长续航",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13f10e47913f9dc82e6c6a6199f413cd.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {

                name: "Redmi 9A",
                price: "499元起",
                description: "  5000mAh长循环大电量，6.53超大护眼屏",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13f10e47913f9dc82e6c6a6199f413cd.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "Redmi K30S 至尊纪念版",
                price: "2599元起",
                description: " 144Hz[7档]变速高刷屏",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cf7a05df86a858a1f391a0378d8c27d.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "Redmi K30 至尊版",
                price: "1999元起",
                description: "120Hz弹出全面屏，天玑1000+旗舰处理器",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {

                name: "Note9",
                price: "1299元起",
                description: "晓龙888|2K四曲面屏",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/de2f71a797a74e1ca70f1fb4570bc026.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {

                name: "Note9 4G",
                price: "999元起",
                description: "6000mAh长续航",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13f10e47913f9dc82e6c6a6199f413cd.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
        ]
    },
    {
        poster: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41d16e66381cfeda7b6b39ab67678d5e.jpg?thumb=1&w=1533&h=150&f=webp&q=90",
        title: "家电",
        des: [
            {
                name: "小米全面屏电视65英寸 E65X",
                price: "3099元起",
                description: "全面屏设计",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "全面屏电视E43K",
                price: "1299元1399元",
                description: "全面屏设计，海量内容",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20d36fbaa18625e4fe507af31e4e9f83.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: " 小米电视4A 70英寸",
                price: "3299元起",
                description: " 大屏更享受",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {

                name: "米家空调",
                price: "1699元",
                description: "出众静音，快速制冷热",
                image: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "米家互联网洗烘一体机 Pro 10kg",
                price: "2899元",
                description: "智能洗烘，省心省力",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: " Redmi全自动波轮洗衣机1A 8kg",
                price: "799元起",
                description: "  一键操作，父母都爱用",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "Air 13.3 2019款",
                price: "5399元起",
                description: "新一代独立显卡",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: " Redmi全自动波轮洗衣机1A 8kg",
                price: "799元起",
                description: "  一键操作，父母都爱用",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "米家互联网洗烘一体机 Pro 10kg",
                price: "2899元",
                description: "智能洗烘，省心省力",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: " 小米电视4A 70英寸",
                price: "3299元起",
                description: " 大屏更享受",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
        ]
    },
    {
        poster: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e8fc8ba9718c266882719fb4bbcedd.jpg?thumb=1&w=1533&h=150&f=webp&q=90",
        title: "智能",
        des: [
            {
                name: "小爱音响 Play",
                price: "99元",
                description: "听音乐、语音遥控家电",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "米家智能窗帘",
                price: "779元",
                description: "窗帘开合随心控制",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3accd497afc0047cfbd40f442e3b17df.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "小米体脂秤2",
                price: "99元起",
                description: " 轻松掌握身体脂肪率",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/550177d2e54387521bce9e78cb2949dd.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "小米智能门锁 推拉式",
                price: "1499元",
                description: "一步推拉，高端智能门锁",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a312d69c1a5447c9e3d14d42d01a8fb.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "九号平衡车",
                price: "1799元",
                description: "年轻人的酷玩具",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "Redmi小爱触屏音箱 8英寸",
                price: "349元",
                description: "超大屏，让智能更多可能",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/49f30069c778b494257320d9da5a1a60.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "小米手环5",
                price: "199元起",
                description: "11种运动模式 磁吸式充电",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: " Redmi全自动波轮洗衣机1A 8kg",
                price: "799元起",
                description: "  一键操作，父母都爱用",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "小米智能门锁 推拉式",
                price: "1499元",
                description: "一步推拉，高端智能门锁",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a312d69c1a5447c9e3d14d42d01a8fb.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "米家智能窗帘",
                price: "779元",
                description: "窗帘开合随心控制",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3accd497afc0047cfbd40f442e3b17df.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
        ]
    },
    {
        poster: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b34997348887380ab4d19587fa1a711c.jpg?thumb=1&w=1533&h=150&f=webp&q=90",
        title: "搭配",
        des: [
            {
                name: " 小米真无线蓝牙耳机Air 2 Pro",
                price: "679元",
                description: "主动降噪/持久续航/无线充",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5fc35cf0af915a9e60f5d4ea220521ab.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "高速无线充套装",
                price: "149元",
                description: "快速无线闪充，Qi充电标准",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: " Redmi AirDots 2真无线蓝牙耳机",
                price: "99元",
                description: " 支持蓝牙5.0，自动秒连，拿起就能用",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7d9e8308f5f55bfa69c5c7fadc7cb4aa.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "小米真无线蓝牙耳机Air 2s",
                price: "369元",
                description: "全面升级，智慧真无线",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6306bf6d8aede9f6f48d8e4d9256db2.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "Redmi充电宝 10000mAh 标准版 白色",
                price: "59元",
                description: "10000mAh大电量",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea8e42faebf7d76a4cb42b8930cf9e46.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "Redmi充电宝 20000mAh 快充版",
                price: "89元",
                description: "大容量， 可上飞机",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eaf70e0e9905de6452f07b1f48fcc386.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "小米插线板 5孔位",
                price: "39元",
                description: "多重安全保护",
                image: "https://i8.mifile.cn/v1/a1/5dd69c0a-8f4a-b42f-d840-6c5a47f2cd03!250x250.jpg",
                url: "https://www.mi.com/mi11"
            },
            {
                name: " Redmi全自动波轮洗衣机1A 8kg",
                price: "799元起",
                description: "  一键操作，父母都爱用",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "小米智能门锁 推拉式",
                price: "1499元",
                description: "一步推拉，高端智能门锁",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a312d69c1a5447c9e3d14d42d01a8fb.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "米家智能窗帘",
                price: "779元",
                description: "窗帘开合随心控制",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3accd497afc0047cfbd40f442e3b17df.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
        ]
    },
    {
        poster: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1615d1842fe85914a545297836a44271.jpg?thumb=1&w=1533&h=150&f=webp&q=90",
        title: "配件",
        des: [
            {
                name: " 小米真无线蓝牙耳机Air 2 Pro",
                price: "679元",
                description: "主动降噪/持久续航/无线充",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5fc35cf0af915a9e60f5d4ea220521ab.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "高速无线充套装",
                price: "149元",
                description: "快速无线闪充，Qi充电标准",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: " Redmi AirDots 2真无线蓝牙耳机",
                price: "99元",
                description: " 支持蓝牙5.0，自动秒连，拿起就能用",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7d9e8308f5f55bfa69c5c7fadc7cb4aa.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "小米真无线蓝牙耳机Air 2s",
                price: "369元",
                description: "全面升级，智慧真无线",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6306bf6d8aede9f6f48d8e4d9256db2.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "Redmi充电宝 10000mAh 标准版 白色",
                price: "59元",
                description: "10000mAh大电量",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea8e42faebf7d76a4cb42b8930cf9e46.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "Redmi充电宝 20000mAh 快充版",
                price: "89元",
                description: "大容量， 可上飞机",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eaf70e0e9905de6452f07b1f48fcc386.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "小米插线板 5孔位",
                price: "39元",
                description: "多重安全保护",
                image: "https://i8.mifile.cn/v1/a1/5dd69c0a-8f4a-b42f-d840-6c5a47f2cd03!250x250.jpg",
                url: "https://www.mi.com/mi11"
            },
            {
                name: " Redmi全自动波轮洗衣机1A 8kg",
                price: "799元起",
                description: "  一键操作，父母都爱用",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "小米智能门锁 推拉式",
                price: "1499元",
                description: "一步推拉，高端智能门锁",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a312d69c1a5447c9e3d14d42d01a8fb.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "米家智能窗帘",
                price: "779元",
                description: "窗帘开合随心控制",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3accd497afc0047cfbd40f442e3b17df.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
        ]
    },
    {
        poster: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9880db34d227b6c1df5b45cb7df4f465.jpg?thumb=1&w=1533&h=150&f=webp&q=90",
        title: "周边",
        des: [
            {
                name: " 小米真无线蓝牙耳机Air 2 Pro",
                price: "679元",
                description: "主动降噪/持久续航/无线充",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5fc35cf0af915a9e60f5d4ea220521ab.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "高速无线充套装",
                price: "149元",
                description: "快速无线闪充，Qi充电标准",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: " Redmi AirDots 2真无线蓝牙耳机",
                price: "99元",
                description: " 支持蓝牙5.0，自动秒连，拿起就能用",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7d9e8308f5f55bfa69c5c7fadc7cb4aa.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "小米真无线蓝牙耳机Air 2s",
                price: "369元",
                description: "全面升级，智慧真无线",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6306bf6d8aede9f6f48d8e4d9256db2.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "Redmi充电宝 10000mAh 标准版 白色",
                price: "59元",
                description: "10000mAh大电量",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea8e42faebf7d76a4cb42b8930cf9e46.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "Redmi充电宝 20000mAh 快充版",
                price: "89元",
                description: "大容量， 可上飞机",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eaf70e0e9905de6452f07b1f48fcc386.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "小米插线板 5孔位",
                price: "39元",
                description: "多重安全保护",
                image: "https://i8.mifile.cn/v1/a1/5dd69c0a-8f4a-b42f-d840-6c5a47f2cd03!250x250.jpg",
                url: "https://www.mi.com/mi11"
            },
            {
                name: " Redmi全自动波轮洗衣机1A 8kg",
                price: "799元起",
                description: "  一键操作，父母都爱用",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "小米智能门锁 推拉式",
                price: "1499元",
                description: "一步推拉，高端智能门锁",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a312d69c1a5447c9e3d14d42d01a8fb.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
            {
                name: "米家智能窗帘",
                price: "779元",
                description: "窗帘开合随心控制",
                image: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3accd497afc0047cfbd40f442e3b17df.jpg?thumb=1&w=250&h=250&f=webp&q=90",
                url: "https://www.mi.com/mi11"
            },
        ]
    },
]

