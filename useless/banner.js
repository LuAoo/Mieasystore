window.pageTools = window.pageTools || {}
    ; (function () {
        function Banner(datas, categoryNavDatas) {
            this.selsctor = $('.swiper-wrapper')
            this.datas = datas
            this.categoryNavDatas = categoryNavDatas
            this.setBanner()
            this.setcategory()
        }
        Banner.prototype.setBanner = function () {
            this.datas.forEach(function (info) {
                var item = $('  <div class="swiper-slide">\
                <a href=""><img src="'+ info.url + '" alt=""\ srcset=""></a>\
            </div>');
                this.selsctor.append(item);
            }.bind(this));
            var mySwiper = new Swiper('.swiper-container', {
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
            console.log('我是分类');
            // 两个父容器
            var container = $('.swiper-container');
            var ulcontainer = $('.first_category');
            // 遍历加li
            this.categoryNavDatas.forEach(function (info) {
                var first_li = $('<li class="first_category_li"><a href="' + info.url + '">' + info.title + '</a> <span class="iconfont">&#xe600;</span></li>')
                ulcontainer.append(first_li)
                // 耳机商品目录
                first_li.mouseenter(function () {
                    console.log(info.des);
                    var ulcontainer2 = $('<ul class="second_category"></ul>')
                    info.des.forEach(function (info2) {
                        console.log(info2);
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
        pageTools.Banner = Banner
    })()