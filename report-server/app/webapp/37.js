(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1250:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(1048);var r,l=a(442);var o=new((r=l)&&r.__esModule?r:{default:r}).default,u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"get",value:function(){}}],[{key:"getBaseUrl",value:function(){return window.getServerUrl()}},{key:"post",value:function(t,a){if(null==o.getStorage("userInfo")&&"/reportServer/user/encodePwd"!=t&&"/reportServer/user/Reactlogin"!=t||""==o.getStorage("userInfo")&&"/reportServer/user/encodePwd"!=t&&"/reportServer/user/Reactlogin"!=t)return window.location.href="#login",new Promise(function(e,t){});var n=e.getBaseUrl()+t,r={method:"POST",headers:{credentials:JSON.stringify(o.getStorage("userInfo")||"")},body:a};return fetch(n,r).then(function(e){return e.json()}).catch(function(e){return e.json()})}}]),e}();t.default=u},1392:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=g(a(1042)),r=g(a(1047)),l=g(a(120)),o=g(a(44)),u=g(a(66)),i=g(a(1049)),s=g(a(1043)),c=g(a(1045)),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(1041),a(1046),a(445),a(157),a(446),a(1050),a(443),a(1044);var d=g(a(1)),p=a(444),h=g(a(1250)),m=g(a(448)),y=g(a(442));function g(e){return e&&e.__esModule?e:{default:e}}c.default.Item,new y.default;var b=s.default.Search,v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={list:[],pageNum:1,perPage:10,listType:"list",dbname:""},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,d.default.Component),f(t,[{key:"componentDidMount",value:function(){this.loadUserList()}},{key:"loadUserList",value:function(){var e=this,t={};t.pageNum=this.state.pageNum,t.perPage=this.state.perPage,"search"===this.state.listType&&(t.dbname=this.state.dbname),h.default.post("reportServer/nlp/getAll",JSON.stringify(t)).then(function(t){"1000"==t.resultCode?e.setState(t.data):message.error(t.message)})}},{key:"onPageNumChange",value:function(e){var t=this;this.setState({pageNum:e},function(){t.loadUserList()})}},{key:"onValueChange",value:function(e){var t=e.target.name,a=e.target.value.trim();this.setState(function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},t,a))}},{key:"onSearch",value:function(e){var t=this,a=""===e?"list":"search";this.setState({listType:a,pageNum:1,dbname:e},function(){t.loadUserList()})}},{key:"deleteRole",value:function(e){var t=this;if(confirm("确认删除吗？")){var a={tid:e};h.default.post("reportServer/nlp/deleteTC",JSON.stringify(a)).then(function(e){"1000"==e.resultCode?(alert("删除成功"),t.loadUserList()):message.error(e.message)})}}},{key:"render",value:function(){var e=this;this.state.list.map(function(e,t){e.key=t});var t=this.state.list,a=[{title:"数据库名",dataIndex:"table_db",key:"table_db",className:"headerRow"},{title:"表名",dataIndex:"table_name",key:"table_name",className:"headerRow"},{title:"自然语言一",dataIndex:"table_nlp1",key:"table_nlp1",className:"headerRow"},{title:"自然语言二",dataIndex:"table_nlp2",key:"table_nlp2",className:"headerRow"},{title:"自然语言三",dataIndex:"table_nlp3",key:"table_nlp3",className:"headerRow"},{title:"自然语言四",dataIndex:"table_nlp4",key:"table_nlp4",className:"headerRow"},{title:"操作",dataIndex:"操作",className:"headerRow",render:function(t,a){return d.default.createElement("span",null,d.default.createElement(p.Link,{to:"/query/nlpCreator/"+a.table_id},"编辑"),d.default.createElement(i.default,{type:"vertical"}),d.default.createElement("a",{onClick:function(){return e.deleteRole(""+a.table_id)},href:"javascript:;"},"删除"))}}];return d.default.createElement("div",{id:"page-wrapper"},d.default.createElement(n.default,{title:"列表"},d.default.createElement(l.default,null,d.default.createElement(u.default,{xs:24,sm:12},d.default.createElement(b,{style:{maxWidth:300,marginBottom:"10px"},placeholder:"请输入表名",enterButton:"查询",onSearch:function(t){return e.onSearch(t)}})),d.default.createElement(u.default,{xs:24,sm:12},d.default.createElement(o.default,{href:"#/query/nlpCreator/null",style:{float:"right",marginRight:"30px"},type:"primary"},"新建"))),d.default.createElement(r.default,{dataSource:t,columns:a,pagination:!1}),d.default.createElement(m.default,{current:this.state.pageNum,total:this.state.total,onChange:function(t){return e.onPageNumChange(t)}})))}}]),t}();t.default=v}}]);