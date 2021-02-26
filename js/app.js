(function () {
    // 设置变量用于存放对话框DOM
    var loginView = null
    // 注册登录click中的回调方法
    function loginregisterAction(e) {
        e.preventDefault();
        // 点击后再点击其他失效
        if (!loginView) {
            var type = e.target.dataset.tt
            $('body').addClass('shape');
            loginView = new pageTools.Login(type == 'login', 'body', function () {
                // 点击关闭按钮后的回调操作（垃圾回收）  
                loginView = null
                $('body').removeClass('shape');
            })
        }
    }

    // 入口构造函数
    function Page(url) {
        this.url = url
        // 判断传值情况判断页面入口
        var current_postion = location.search;
        console.log(current_postion);
        if (location.search) {
            // 则是商品详情页面
            var positionArray = current_postion.replace('?', '').split('&')
            var type = positionArray[0].replace('type=', '')
            var id = positionArray[1].replace('id=', '')
            console.log('我是商品详情页');
            this.loadData(url).then(function (res) {
                //继续请求后台数据
                // 这里只需要请求特定商品信息
                this.setNav(res.navdatas)
                console.log(res);
                console.log(type, id);
                this.setGooddetails(res.goodsdata[type].des[id])
            }.bind(this))
        } else {
            // 则是首页
            console.log('我是首页');
            // 首页逻辑处理
            this.loadData(url).then(function (res) {
                // 数据请求口
                // JSON数据在此
                // bind的原因就是在这里init的口，不然找不到this.init()
                // var test=JSON.stringify(res)
                // console.log(test);
                this.init(res);
            }.bind(this))

        }

    }
    Page.prototype.loadData = function () {
        return new Promise((resolve, reject) => {
            $.get(this.url).then(function (res) {
                resolve(res)
            })
        });
    }
    // 初始化项目
    Page.prototype.init = function (data) {
        this.setNav(data.navdatas)
        this.setBanner(data.bannerdata, data.categoryNav)
        this.setGoods(data.goodsdata)
        this.setlogin()
        this.addLeftBar(data.goodsdata);
        this.addRightBar();
    }

    Page.prototype.setNav = function (data) {
        new pageTools.Nav('nav_content', data, function () {
        })
    }

    Page.prototype.setBanner = function (bannerdata, categoryNav) {
        // console.log(categoryNav);
        new pageTools.Banner(bannerdata, categoryNav);
    }
    Page.prototype.setGoods = function (goodsdata) {
        new pageTools.Goods(goodsdata, function (goodsdata) {
            console.log('我是回调函数' + goodsdata);
        })
    }
    Page.prototype.setlogin = function () {
        $('.login').click(loginregisterAction);
        $('.register').click(loginregisterAction);
    }
    // 第二个页面的操作
    Page.prototype.setGooddetails = function (data) {
        console.log('我是方法内的数据', data);
        $('.detail_img').attr('src', data.image);
        $('.detail_name').html(data.name);
        $('.detail_info').html(data.description);
        $('.detail_price').html(data.price);
        $('.detail_buyinfo_top_info').html(data.name);
        $('.detail_buyinfo_top_price').html(data.price);
        $('.price_add').html(data.price);
        $(document).ready(function () {
            $(".detail_img").blowup({
                "background": data.image,
                "width": 200,
                "height": 200
            });
        })
    }


    // 左侧快速定位实现
    Page.prototype.addLeftBar = function (goodsdata) {
        var bar = $('.left_bar');
        goodsdata.forEach(function (info) {
            var barli=$('<li><a href="#'+info.title+'">'+info.title+'</a></li>');
            bar.append(barli);
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 500) {
                bar.fadeIn();
            }
            else {
                bar.fadeOut();
            }
        });

    }

     // 右侧一些功能的实现
     Page.prototype.addRightBar = function (goodsdata) {
         var backtop=$('.backtop');
         backtop.click(function (e) { 
             e.preventDefault();
             console.log('sdfsdfsdf');
             $('html,body').animate({
                scrollTop:0
             },800)
         });     
         $(window).scroll(function () {
            if ($(window).scrollTop() >= 500) {
                $('.backtop').fadeIn();
            }
            else {
                $('.backtop').fadeOut();
            }
        });    
    }


    function main() {
        new Page('../json/data.json');
    }
    main();
})()