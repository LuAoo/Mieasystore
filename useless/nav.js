// 全局入口变量（设置全局）
window.pageTools = window.pageTools || {}
    ; (function () {
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

        pageTools.Nav = Nav;//将定义的构造函数暴露出去
    })()