// 全局入口变量（设置全局）
window.pageTools = window.pageTools || {}
    ; (function () {
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
        pageTools.Login = Login;//将定义的构造函数暴露出去
    })()