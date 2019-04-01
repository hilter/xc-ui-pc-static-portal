// 导入mode01.js
var {add} = require("./mode01");
var Vue = require("./vue.min");


// 编写MVVM中的model部分以及VM(ViewModel部分)
var VM = new Vue({
    el: '#app',// vm接管了app区域的管理
    data: {// model数据
        name: '麦客子',
        num1: 1,
        num2: 2,
        result: 0,
        url: 'https://www.baidu.com'
    },
    methods: {
        change: function () {
            this.result = add(Number.parseInt(this.num1), Number.parseInt(this.num2));
            alert("计算结果" + this.result)
        }
    }
});