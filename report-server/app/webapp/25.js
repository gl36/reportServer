(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(1048);var a,o=n(442);var i=new((a=o)&&a.__esModule?a:{default:a}).default,u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"get",value:function(){}}],[{key:"getBaseUrl",value:function(){return window.getServerUrl()}},{key:"post",value:function(t,n){if(null==i.getStorage("userInfo")&&"/reportServer/user/encodePwd"!=t&&"/reportServer/user/Reactlogin"!=t||""==i.getStorage("userInfo")&&"/reportServer/user/encodePwd"!=t&&"/reportServer/user/Reactlogin"!=t)return window.location.href="#login",new Promise(function(e,t){});var r=e.getBaseUrl()+t,a={method:"POST",headers:{credentials:JSON.stringify(i.getStorage("userInfo")||"")},body:n};return fetch(r,a).then(function(e){return e.json()}).catch(function(e){return e.json()})}}]),e}();t.default=u},1258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1250),i=(r=o)&&r.__esModule?r:{default:r};var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,[{key:"getDictList",value:function(e){return i.default.post("reportServer/dict/getDictList",JSON.stringify(e))}},{key:"getDictValue",value:function(e,t){return i.default.post("reportServer/dict/getDictValueByDictID",JSON.stringify({dict_id:e,value_code:t}))}},{key:"saveDict",value:function(e){if("null"==e.oldvalue_code||null==e.oldvalue_code){return i.default.post("reportServer/dict/createFuncDictValue",JSON.stringify(e))}return i.default.post("reportServer/dict/updateDictValue",JSON.stringify(e))}},{key:"deleteDict",value:function(e){return i.default.post("reportServer/dict/deleteDictValueByIDCode",JSON.stringify(e))}}]),e}();t.default=u},1259:function(e,t,n){var r=n(1260);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0};n(22)(r,a);r.locals&&(e.exports=r.locals)},1260:function(e,t,n){(e.exports=n(21)(!1)).push([e.i,".ant-table-thead .headerRow {\n  text-align: center; }\n\n.ant-table-tbody .headerRow {\n  text-align: center; }\n\n.checkbox {\n  text-align: center;\n  margin: auto;\n  padding: 0; }\n",""])},1403:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=v(n(1042)),a=v(n(1186)),o=v(n(44)),i=(v(n(11)),v(n(1043))),u=v(n(1185)),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(1041),n(1187),n(157),n(1054),n(443),n(1184);var c=v(n(1)),f=(n(444),v(n(1258))),s=v(n(448)),d=v(n(442)),p=v(n(1250));function v(e){return e&&e.__esModule?e:{default:e}}n(1259);u.default.Item,new d.default,new f.default,i.default.Search;var g=window.getServerUrl(),h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={list:[],pageNum:1,perPage:10},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.default.Component),l(t,[{key:"componentDidMount",value:function(){this.loadUserList()}},{key:"loadUserList",value:function(){var e=this,t={};t.pageNum=this.state.pageNum,t.perPage=this.state.perPage,p.default.post("/reportServer/uploadFile/getAll",JSON.stringify(t)).then(function(t){e.setState({list:t.data.list,total:t.data.total})},function(t){e.setState({list:[]})})}},{key:"onPageNumChange",value:function(e){var t=this;this.setState({pageNum:e},function(){t.loadUserList()})}},{key:"onValueChange",value:function(e){var t=e.target.name,n=e.target.value.trim();this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,n))}},{key:"onSearch",value:function(e){var t=this,n=""===e?"list":"search";this.setState({listType:n,pageNum:1,value_name:e},function(){t.loadUserList()})}},{key:"deleteUpload",value:function(e){var t=this;if(confirm("确认删除吗？")){var n={id:e};p.default.post("/reportServer/uploadFile/deleteUpload",JSON.stringify(n)).then(function(e){t.loadUserList()},function(e){t.setState({list:[]})}).catch(function(e){})}}},{key:"render",value:function(){var e=this;this.state.list.map(function(e,t){e.key=t});var t=this.state.list;return c.default.createElement("div",{id:"page-wrapper"},c.default.createElement(r.default,{title:"图片列表",extra:c.default.createElement(o.default,{href:"#/upload/uploadInfo/null",style:{float:"right",marginRight:"30px"},type:"primary"},"Upload")},c.default.createElement(u.default,{itemLayout:"horizontal",size:"large",dataSource:t,renderItem:function(t){return c.default.createElement(u.default.Item,{actions:[c.default.createElement(o.default,{onClick:function(){return e.deleteUpload(t.id)}},"delete")]},c.default.createElement(u.default.Item.Meta,{avatar:c.default.createElement(a.default,{src:g+"/report/"+t.usefilepath}),title:t.fileoriginname,description:t.filepath}),c.default.createElement("div",null,t.filename))}}),c.default.createElement(s.default,{current:this.state.pageNum,total:this.state.total,onChange:function(t){return e.onPageNumChange(t)}})))}}]),t}();t.default=h}}]);