(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{327:function(t,o,s){"use strict";s.r(o);var a=s(7),n=Object(a.a)({},(function(){var t=this,o=t._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"🧅-tor-网络开启"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#🧅-tor-网络开启"}},[t._v("#")]),t._v(" 🧅 Tor 网络开启")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),o("p",[t._v("tor 服务比较吃内存，经测试 内存至少需要配置在 100MB 以上才能发挥稳定的效果。")])]),t._v(" "),o("p",[t._v("为了防止普通流量过 Tor 导致的速率下降，在客户端做了个开关。")]),t._v(" "),o("p",[t._v("客户端会根据这个这个开关来选择是否给服务端发送 Tor 代理标识。")]),t._v(" "),o("p",[t._v("服务端接收到 Tor 代理标识后，会将流量直接转发给本地服务。")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/ec26347f298a4f9d81f7068eb3c0e4dc.png",alt:"tor"}})]),t._v(" "),o("p",[t._v("注意，tor 网络目前仅支持： 本地 socks5 代理 + websocket 隧道 的模式。")]),t._v(" "),o("p",[t._v("然后本地的 socks5 代理即可访问一些 .onion 结尾的域名了。如：")]),t._v(" "),o("p",[o("code",[t._v("https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/")])]),t._v(" "),o("p",[o("img",{attrs:{src:"https://seamoon.oss-cn-hangzhou.aliyuncs.com/09626bede56b4c18b6cd4d41d3e11c00.png",alt:"onion"}})]),t._v(" "),o("p",[t._v("::: tips\n在当前版本内，seamoon 实现了最简单的 tor 接入方式 -- 通过 tor cli 自带的 s5 协议做了一层转发，因为 v2ray 也是这样玩的。")]),t._v(" "),o("p",[t._v("实际上，这种方案，有很多不足，出去开头的资源占用较高 warning，通过 binary 的集成力度也不是非常合适，但是在这个阶段暂时用该方案来减少代码开发的工作量。")]),t._v(" "),o("p",[t._v('因此，此方案仅用于证明 seamoon 的扩展性，距离真正 "便宜" 可能还需要一段的距离。\n:::')])])}),[],!1,null,null,null);o.default=n.exports}}]);