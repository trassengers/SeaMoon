(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{319:function(a,e,t){"use strict";t.r(e);var s=t(7),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"客户端安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端安装"}},[a._v("#")]),a._v(" 客户端安装")]),a._v(" "),e("h3",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),e("p",[a._v("推荐使用 docker 一键部署client")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--net")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("host dvkunion/seamoon:latest client proxy\n")])])]),e("p",[a._v("默认使用"),e("code",[a._v("--net=host")]),a._v("模式，这样比较简单易懂。为了更高的安全性、可控性，你也可以自己选择映射：")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:7777:7777 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1080")]),a._v(":1080 dvkunion/seamoon:latest client proxy\n")])])]),e("p",[a._v("这样可以将管理端口限制只能通过本地 "),e("code",[a._v("127.0.0.1")]),a._v(" 访问，如果你需要限制为其他 IP，可以自行修改。")]),a._v(" "),e("p",[a._v("然后浏览器打开：")]),a._v(" "),e("p",[e("code",[a._v("localhost:7777")])]),a._v(" "),e("p",[a._v("即可开启客户端")]),a._v(" "),e("h3",{attrs:{id:"binary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binary"}},[a._v("#")]),a._v(" Binary")]),a._v(" "),e("h4",{attrs:{id:"客户端下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端下载"}},[a._v("#")]),a._v(" 客户端下载")]),a._v(" "),e("p",[a._v("在 "),e("a",{attrs:{href:"https://github.com/DVKunion/SeaMoon/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("Github Release"),e("OutboundLink")],1),a._v(" 界面。在最新版本列表哪，选择您对应系统型号的client 包下载。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/955161ed6d3c48b181397bed1bcaca45.png",alt:"release"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);