(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);a(63),a(88);var n=a(0),c=a.n(n),l=a(31),o=a.n(l),i=a(17),r=a.n(i),s=a(55),d=a(56),u=a(60),p=a(57),m=a(61),h=a(5),f=(a(110),function(e){var t=e.id,a=(e.go,e.fetchedData);return c.a.createElement(h.Panel,{id:t},c.a.createElement(h.PanelHeader,{theme:"light"},"\u0417\u0430\u043f\u0438\u0441\u044c \u043a \u0432\u0440\u0430\u0447\u0443"),a&&c.a.createElement(h.Group,{title:"Contacts"},"".concat(a.phone," ").concat(a.email),"*/}"),c.a.createElement(h.Group,null,c.a.createElement("cc-schedule",{modal:"false"})),"}")}),b=(a(58),a(111),a(59),a(32),Object(h.platform)(),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedData:null},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;t.loadScript("//cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.1/zone.min.js"),t.loadScript("//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.10/custom-elements-es5-adapter.js",null,!0),t.loadScript("//static.cloud-clinic.ru/appointment-widget/main-es2015.js","module"),t.loadScript("//static.cloud-clinic.ru/appointment-widget/main-es5.js",null,!0);var a=document.createElement("base");a.href="/",document.head.append(a);var n=document.createElement("link");n.rel="stylesheet",n.href="//static.cloud-clinic.ru/appointment-widget/styles.css",document.head.append(n),r.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetPersonalCardResult":e.setState({fetchedData:t.detail.data});break;default:console.log(t.detail.type)}}),r.a.send("VKWebAppGetPersonalCard",{type:["phone","email"]})}},{key:"render",value:function(){return c.a.createElement(h.View,{activePanel:this.state.activePanel},c.a.createElement(f,{id:"home",fetchedData:this.state.fetchedData,go:this.go}))}}],[{key:"loadScript",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=document.createElement("script");n.src=e,n.async=!1,n.noModule=a,t&&(n.type=t),document.body.appendChild(n)}}]),t}(c.a.Component));r.a.send("VKWebAppInit",{}),o.a.render(c.a.createElement(b,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},62:function(e,t,a){e.exports=a(112)}},[[62,1,2]]]);
//# sourceMappingURL=main.71b304d2.chunk.js.map