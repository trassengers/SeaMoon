(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{318:function(s,e,a){"use strict";a.r(e);var t=a(7),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"🕹-快速开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🕹-快速开始"}},[s._v("#")]),s._v(" 🕹 快速开始")]),s._v(" "),e("p",[s._v("通过该页面，您可以通过推荐的部署方式快速开始使用 SeaMoon。")]),s._v(" "),e("blockquote",[e("p",[s._v("如果您希望获取到更多自定义的配置和使用方式，请跳转 https://seamoon.dvkunion.cn/guide/deploy")])]),s._v(" "),e("h3",{attrs:{id:"事前准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事前准备"}},[s._v("#")]),s._v(" 事前准备")]),s._v(" "),e("ul",[e("li",[s._v("云厂商账户(以阿里云为例)，并开通对应的serverless服务（阿里云serverless服务名为：函数计算）")]),s._v(" "),e("li",[s._v("云厂商账户AK/SK，并拥有操作FC的全部权限。")]),s._v(" "),e("li",[s._v("一台存在docker、Nodejs >= 12 的客户端的机器，同时保证 7777、1080、9999端口未被占用，该机器将作为使用的客户端。")])]),s._v(" "),e("h3",{attrs:{id:"step-1-安装serverless-devs工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-安装serverless-devs工具"}},[s._v("#")]),s._v(" Step.1 安装serverless-devs工具")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @serverless-devs/s "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("\n")])])]),e("p",[s._v("国内加速:")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ cnpm "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @serverless-devs/s "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("\n")])])]),e("p",[s._v("如果不存在npm包管理器，请先通过node安装npm/cnpm")]),s._v(" "),e("p",[s._v("安装后运行")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ s "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])])]),e("p",[s._v("将可以看到serverless-devs版本，表示安装成功。")]),s._v(" "),e("p",[s._v("然后通过如下命令开始配置云厂商认证")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ s config "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" \n")])])]),e("p",[s._v("按提示即可选择即可，本次我们以 "),e("code",[s._v("Alibaba Cloud")]),s._v(" 为例，输入对应的账户"),e("code",[s._v("AccessKeyID")]),s._v("、"),e("code",[s._v("AccessKeySecret")])]),s._v(" "),e("p",[s._v("最后一步填写"),e("code",[s._v("alias")]),s._v("时，请确保值为"),e("code",[s._v("default")]),s._v("(一般初次安装与认证该字段都默认为default，回车即可)。")]),s._v(" "),e("p",[s._v("如果AK/SK无误，那么你将会看到认证成功的提示。")]),s._v(" "),e("h3",{attrs:{id:"step-2-部署服务端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-部署服务端"}},[s._v("#")]),s._v(" Step.2 部署服务端")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/DVKunion/SeaMoon.git\n")])])]),e("p",[s._v("进入到项目目录")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" SeaMoon\n$ s deploy\n")])])]),e("p",[s._v("如果你不是第一次部署，那么将会提示你选择冲突的配置：remote/local，一般选择local即可。")]),s._v(" "),e("p",[s._v("稍等片刻，你将会得到部署好的两个地址：")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("SeaMoon-FC-HTTP-Proxy: \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n  url: \n    system_url:          https://http-proxy-seamoon-xxxxxxxxx.run\n    system_intranet_url: https://http-proxy-seamoon-xxxxxxxxx.fcapp.run\n    custom_domain: \n      - \n        domain: http://http-proxy.seamoon-service.xxxxxxxxx.fc.devsapp.net\n  triggers: \n    - \n      type: http\n      name: httpTrigger\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n  url: \n    system_url:          https://socks-proxy-seamoon-xxxxxxxxx.fcapp.run\n    system_intranet_url: https://socks-proxy-seamoon-xxxxxxxxx.fcapp.run\n    custom_domain: \n      - \n        domain: http://socks-proxy.seamoon-service.xxxxxxxxx.fc.devsapp.net\n  triggers: \n    - \n      type: http\n      name: httpTrigger\n")])])]),e("p",[s._v("这里是用的都是默认配置，如果你需要更多高级可选项，请继续阅读：https://seamoon.dvkunion.cn/guide/deploy")]),s._v(" "),e("p",[s._v("服务端部署完成")]),s._v(" "),e("h3",{attrs:{id:"step-3-开启客户端使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-开启客户端使用"}},[s._v("#")]),s._v(" Step.3 开启客户端使用")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--net")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("host dvkunion/seamoon-client\n")])])]),e("p",[s._v("默认使用"),e("code",[s._v("--net=host")]),s._v("模式，然后浏览器打开：")]),s._v(" "),e("p",[e("code",[s._v("localhost:7777")])]),s._v(" "),e("p",[s._v("即可开启客户端, 点击配置管理")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.dvkunion.cn/seamoon/04f8a842b0c24c5e93c37c7c20f91d72.png",alt:""}})]),s._v(" "),e("p",[s._v("添加云端配置")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.dvkunion.cn/seamoon/dfcc22b01c4a4f358bdee59acc5c563b.png",alt:""}})]),s._v(" "),e("blockquote",[e("p",[s._v("注意，此处填写的值为 Step.2 中输出的 domain字段，并去除 http:// 协议头，属于对应域名即可。")])]),s._v(" "),e("p",[s._v("开启socks5代理，并保持默认"),e("code",[s._v(":1080")]),s._v("不改变。")]),s._v(" "),e("p",[s._v("此时，你已经可以通过云函数启动socks5代理访问了。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.dvkunion.cn/SeaMoon/speed2.png",alt:"speed.png"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);