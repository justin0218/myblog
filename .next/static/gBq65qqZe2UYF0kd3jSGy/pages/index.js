(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return v});var n=r("ln6h"),a=r.n(n),i=r("O40h"),s=r("0iUn"),o=r("sLSF"),c=r("MI3g"),l=r("a7VT"),u=r("AT/M"),f=r("Tit0"),p=r("vYYK"),d=r("MX0m"),m=r.n(d),h=r("q1tI"),g=r.n(h),x=r("CafY"),b=r("80kA"),v=function(e){function t(){var e,r;Object(s.default)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return r=Object(c.default)(this,(e=Object(l.default)(t)).call.apply(e,[this].concat(a))),Object(p.a)(Object(u.default)(r),"state",{blogList:[],leftHeight:0}),r}return Object(f.default)(t,e),Object(o.default)(t,[{key:"loadList",value:function(){var e=Object(i.default)(a.a.mark(function e(t){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.c(t,"");case 2:r=e.sent,this.setState({blogList:r.blogArticleListList});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(i.default)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadList(-1);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.blogList;e.leftHeight;return g.a.createElement(x.a,null,t.map(function(e,t){return g.a.createElement("div",{key:t,className:"jsx-2617870180 right_item"},e.cover&&g.a.createElement("i",{className:"jsx-2617870180"},g.a.createElement("img",{src:e.cover,className:"jsx-2617870180 coverimg"})),g.a.createElement("h3",{className:"jsx-2617870180"},1==e.recommended&&"[ 顶 ]"," ",g.a.createElement("span",{style:{color:"#222"},onClick:function(){location.href="/detail?id=".concat(e.id)},className:"jsx-2617870180 blogname"},e.name)),g.a.createElement("p",{className:"jsx-2617870180"},e.preface))}),g.a.createElement(m.a,{id:"2617870180"},[".blogname.jsx-2617870180:hover{-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;color:#555;}",".coverimg.jsx-2617870180{float:right;clear:right;width:100%;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;cursor:pointer;}",".coverimg.jsx-2617870180:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);-webkit-transform:scale(1.2);}",".right_item.jsx-2617870180 p.jsx-2617870180{margin:20px 0 0 0;line-height:22px;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;}",".right_item.jsx-2617870180 h3.jsx-2617870180{font-size:16px;line-height:25px;text-shadow:#FFF 1px 1px 1px;color:#de4949;margin:0;}",".right_item.jsx-2617870180 i.jsx-2617870180{width:150px;display:block;max-height:100px;overflow:hidden;float:right;margin-left:20px;}",".right_item.jsx-2617870180{background:rgba(255,255,255,0.8);padding:15px;overflow:hidden;color:#797b7c;margin-bottom:20px;cursor:pointer;}"]))}}],[{key:"getInitialProps",value:function(){var e=Object(i.default)(a.a.mark(function e(t){var r,n,i,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.req,n=t.query,i=t.jsonPageRes,s=r?r.headers["user-agent"]:navigator.userAgent,e.abrupt("return",{userAgent:s,query:n,jsonPageRes:i});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(g.a.Component)},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=r("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);