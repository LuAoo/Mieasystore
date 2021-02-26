// 全局入口变量（设置全局）
window.pageTools = window.pageTools || {}
    ;(function () {
        /* 轮播及其分类逻辑 */
        function Banner(datas, categoryNavDatas) {
            this.selsctor = $('.swiper-wrapper')
            this.datas = datas
            this.categoryNavDatas = categoryNavDatas
            this.setBanner()
            this.setcategory()
        }
        // 轮播
        Banner.prototype.setBanner = function () {
            this.datas.forEach(function (info) {
                var item = $('  <div class="swiper-slide">\
                <a href=""><img src="'+ info.url + '" alt=""\ srcset=""></a>\
            </div>');
                this.selsctor.append(item);
            }.bind(this));
            new Swiper('.swiper-container', {
                autoplay: true,
                autoplay: {
                    disableOnInteraction: false,
                },
                loop: true, // 循环模式选项
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                // 进度条
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                // },
            })
        }
        // 商品分类处理逻辑
        Banner.prototype.setcategory = function () {
            // console.log('我是分类');
            // 两个父容器
            var container = $('.swiper-container');
            var ulcontainer = $('.first_category');
            // 遍历加li
            this.categoryNavDatas.forEach(function (info) {
                var first_li = $('<li class="first_category_li"><a href="' + info.url + '">' + info.title + '</a> <span class="iconfont">&#xe600;</span></li>')
                ulcontainer.append(first_li)
                // 耳机商品目录
                first_li.mouseenter(function () {
                    // console.log(info.des);
                    var ulcontainer2 = $('<ul class="second_category"></ul>')
                    info.des.forEach(function (info2) {
                        // console.log(info2);
                        var second_li = $('<li><img src="'+info2.img+'" alt=""><a href="'+info2.url+'">'+info2.title+'</a></li>')
                        ulcontainer2.append(second_li)
                    });
                    first_li.append(ulcontainer2);
                }).mouseleave(function () {
                    console.log('移除');
                    $('.second_category').remove();
                });
            });
        }

        /* 登录逻辑 */
        function Goods(datas, callback) {
            this.datas = datas
            this.callback = callback
            this.selector = $('.doogs_content')
            this.init()
        }
        Goods.prototype.init = function () {
            // this.callback('123');//回调函数
            this.datas.forEach(function (info) {
                //增加最上层li
                // console.log(info);
                var item = $('<li id="'+ info.title + '" class="goods_item">\
                <a href=""><img class="good_poster" src="'+ info.poster + '" alt=""></a>\
                <h3>'+ info.title + '</h3>\
                <ul class="goods_item_content '+info.title+'"></ul>\
            </li>');
                this.selector.append(item);
                //增加最下层li
                info.des.forEach(function (info2) {
                    // console.log(info2);
                    var item2 = $('<a href="'+'../views/goods_datails.html?type='+info.type+'&id='+info2.id+''+'">\
                        <li class= "goods_item_content_item" >\
                        <img class="goods_item_content_item_img" src="'+ info2.image + '" alt="">\
                            <p class="goods_item_content_item_name">'+ info2.name + '</p>\
                            <p class="goods_item_content_item_des">'+ info2.description + '</p>\
                            <p class="goods_item_content_item_price">'+ info2.price + '</p></a>');
                            $('.'+info.title+'').append(item2)
                });
            }.bind(this));
        }

        /* 登录逻辑 */
        function Login(isLogin, selector, eventListen) {
            this.isLogin = isLogin
            this.selector = $(selector)
            this.eventListen = eventListen
            this.init();
        }
        // 挂载原型方法init
        Login.prototype.init = function () {
            var isShow = this.isLogin ? 'none' : 'block'
            var buttonText = this.isLogin ? '登录' : '注册'
            // 添加对话框DOM
            this.dialog = $('<div class="dialog">\
            <div class="close_dialog"><span class="iconfont">&#xe608;</span></div>\
            <p class="dialogtext"></p>\
            <div class="input-dialog">\
                <input type="text" placeholder="请输入账号">\
                <input type="text" placeholder="请输入密码">\
                <input type="text" class="again_psw" placeholder="请再次密码">\
                <button class="btn">登录</button>\
            </div></div>')
            // 将其挂载在DOM上
            this.selector.append(this.dialog);
            
            // 单击登录或者注册时关闭,设置文字
            $('.dialogtext').html(buttonText);
            $('.btn').html(buttonText);
            $('.btn').click(function (e) { 
                e.preventDefault();
                // console.log(this.dialog);
                // this.dialog.remove(); 
                this.dialog.remove();    
                // 垃圾回收
                this.dialog=null; 
                // 回调函数  
                console.log(this.eventListen);
                console.log(this.eventListen());
                this.eventListen();   
            }.bind(this));

            // 单击关闭时关闭
            $('.close_dialog').click(function (e) { 
                e.preventDefault();
                this.dialog.remove();        
                // 垃圾回收
                this.dialog=null;   
                // 回调函数
                this.eventListen();     
            }.bind(this));
            // 如果是登录时则取消确认密码操作
            $('.again_psw').css('display',isShow);
        }
 
        /* 导航栏逻辑 */
        function Nav(selector, datas, callback) {
            // selector 将处理的结果渲染到指定的DOM上
            // datas 菜单项的内容
            // callback 需要执行的一些附带操作
            this.selector = $(selector || '')
            this.datas = datas || []
            this.callback = callback
            // 执行以下原型上的方法
            this.createView()
        }
        // 创建导航栏界面逻辑
        Nav.prototype.createView = function () {
            // 创建导航栏ui
            var navul = $('.nav_content_ul')
            // 通过遍历datas将li标签内容植入ul
            this.datas.forEach(function (info) {
                // console.log(info);
                var item = $(' <li><a href="javascript:;">' + info.title + '</a></li>')
                // 点击跳转
                item.click(function () {
                    location.href=info.url
                });
                navul.append(item);

            });
            // 最后将DOM添加带selector中
            this.selector.append(navul)
            // 最后回调操作
            this.callback();
        }
 
        //暴露构造函数
        pageTools ={
            Banner:Banner,
            Goods:Goods,
            Login:Login,
            Nav:Nav
        };
    })()