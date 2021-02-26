window.pageTools = window.pageTools || {}
    ; (function () {
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
                console.log(info);
                var item = $('<li class="goods_item">\
                <a href=""><img class="good_poster" src="'+ info.poster + '" alt=""></a>\
                <h3>'+ info.title + '</h3>\
                <ul class="goods_item_content '+info.title+'"></ul>\
            </li>');
                this.selector.append(item);
                //增加最下层li
                info.des.forEach(function (info2) {
                    console.log(info2);
                    var item2 = $('<a href="'+'../views/goods_datails.html'+'">\
                        <li class= "goods_item_content_item" >\
                        <img class="goods_item_content_item_img" src="'+ info2.image + '" alt="">\
                            <p class="goods_item_content_item_name">'+ info2.name + '</p>\
                            <p class="goods_item_content_item_des">'+ info2.description + '</p>\
                            <p class="goods_item_content_item_price">'+ info2.price + '</p></a>');
                            $('.'+info.title+'').append(item2)
                });
            }.bind(this));
        }
        pageTools.Goods = Goods;
    })()