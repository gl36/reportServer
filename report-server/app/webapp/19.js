(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=c(n(1)),o=n(444),u=c(n(1309)),i=c(n(1310));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"render",value:function(){return a.default.createElement(o.Switch,null,a.default.createElement(o.Route,{path:"/cached/cachedList",component:u.default}),a.default.createElement(o.Route,{path:"/cached/cachedInfo/:cached_id",component:i.default}),a.default.createElement(o.Redirect,{exact:!0,from:"/cached",to:"/cached/cachedList"}))}}]),t}();t.default=l},1250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(1048);var a,o=n(442);var u=new((a=o)&&a.__esModule?a:{default:a}).default,i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"get",value:function(){}}],[{key:"getBaseUrl",value:function(){return window.getServerUrl()}},{key:"post",value:function(t,n){if(null==u.getStorage("userInfo")&&"/reportServer/user/encodePwd"!=t&&"/reportServer/user/Reactlogin"!=t||""==u.getStorage("userInfo")&&"/reportServer/user/encodePwd"!=t&&"/reportServer/user/Reactlogin"!=t)return window.location.href="#login",new Promise(function(e,t){});var r=e.getBaseUrl()+t,a={method:"POST",headers:{credentials:JSON.stringify(u.getStorage("userInfo")||"")},body:n};return fetch(r,a).then(function(e){return e.json()}).catch(function(e){return e.json()})}}]),e}();t.default=i},1279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=o(n(1250));function o(e){return e&&e.__esModule?e:{default:e}}new(o(n(442)).default);var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"getCubeList",value:function(e){return a.default.post("reportServer/cacheds/getAllCacheName",JSON.stringify(e))}},{key:"getCubeInfo",value:function(e){var t=[{cached_id:e}];return a.default.post("/reportServer/cacheds/getElementValuesByKey",JSON.stringify(t))}},{key:"delCube",value:function(e){var t=[{cached_id:cached_id}];return a.default.post("/reportServer/cacheds/deleteCube",JSON.stringify(t))}}]),e}();t.default=u},1309:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(160)),a=d(n(1042)),o=d(n(1249)),u=d(n(1185)),i=d(n(1045)),c=d(n(1043)),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(291),n(1041),n(1225),n(1184),n(1044),n(443);var f=d(n(1)),s=(n(444),d(n(448)));function d(e){return e&&e.__esModule?e:{default:e}}var p=new(d(n(1279)).default),h=(c.default.Search,i.default.Item,function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={list:[],pageNum:1,perPage:10,listType:"list",cube_name:"",loading:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,f.default.Component),l(t,[{key:"componentDidMount",value:function(){this.loadCubeList()}},{key:"loadCubeList",value:function(){var e=this,t={};t.pageNum=this.state.pageNum,t.perPage=this.state.perPage,this.setState({loading:!0}),p.getCubeList(t).then(function(t){e.setState({list:t.data,total:10,loading:!1})},function(t){e.setState({list:[],loading:!1})})}},{key:"onPageNumChange",value:function(e){var t=this;this.setState({pageNum:e},function(){t.loadCubeList()})}},{key:"onValueChange",value:function(e){var t=e.target.name,n=e.target.value.trim();this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,n))}},{key:"onSearch",value:function(e){var t=this,n=""===e?"list":"search";this.setState({listType:n,pageNum:1,cube_name:e},function(){t.loadCubeList()})}},{key:"deleteCube",value:function(e){var t=this;confirm("确认删除吗？")&&p.delCube(e).then(function(e){alert("删除成功"),t.loadCubeList()},function(e){alert("删除失败")})}},{key:"onclickview",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this,t=this.state.list;return f.default.createElement("div",{id:"page-wrapper"},f.default.createElement(r.default,{spinning:this.state.loading,delay:100},f.default.createElement(a.default,{title:"缓存列表"},f.default.createElement(u.default,{bordered:!0,dataSource:t,renderItem:function(e){return f.default.createElement(u.default.Item,{actions:[f.default.createElement("a",{href:"#/cached/cachedInfo/"+e},"view"),f.default.createElement("a",null,"delete")]},f.default.createElement(o.default,{avatar:!0,title:!1,loading:e.loading,active:!0},f.default.createElement(u.default.Item.Meta,{title:f.default.createElement("a",{href:"#/cached/cachedInfo/"+e},"ceshi"),description:e})))}}),f.default.createElement(s.default,{current:this.state.pageNum,total:this.state.total,onChange:function(t){return e.onPageNumChange(t)}}))))}}]),t}());t.default=h},1310:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(1042)),a=s(n(120)),o=s(n(66)),u=s(n(1043)),i=s(n(1045)),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(1041),n(445),n(446),n(443),n(1044);var l=s(n(1)),f=s(n(442));function s(e){return e&&e.__esModule?e:{default:e}}var d=new(s(n(1279)).default),p=new f.default,h=(i.default.Item,u.default.Search,function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={confirmDirty:!1,cached_id:n.props.match.params.cached_id,cachedContent:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),c(t,[{key:"componentDidMount",value:function(){var e=this;null!=this.state.cached_id&&""!=this.state.cached_id&&"null"!=this.state.cached_id&&d.getCubeInfo(this.state.cached_id).then(function(t){e.setState({cachedContent:t.data})},function(t){e.setState({}),p.errorTips(t)})}},{key:"render",value:function(){return l.default.createElement("div",{id:"page-wrapper"},l.default.createElement(r.default,{title:"详情"},l.default.createElement(a.default,null,l.default.createElement(o.default,{xs:24,sm:12},this.state.cachedContent))))}}]),t}());t.default=h}}]);