(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1250:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(1048);var r,l=a(442);var u=new((r=l)&&r.__esModule?r:{default:r}).default,o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"get",value:function(){}}],[{key:"getBaseUrl",value:function(){return window.getServerUrl()}},{key:"post",value:function(t,a){if(null==u.getStorage("userInfo")&&"/reportServer/user/encodePwd"!=t&&"/reportServer/user/Reactlogin"!=t||""==u.getStorage("userInfo")&&"/reportServer/user/encodePwd"!=t&&"/reportServer/user/Reactlogin"!=t)return window.location.href="#login",new Promise(function(e,t){});var n=e.getBaseUrl()+t,r={method:"POST",headers:{credentials:JSON.stringify(u.getStorage("userInfo")||"")},body:a};return fetch(n,r).then(function(e){return e.json()}).catch(function(e){return e.json()})}}]),e}();t.default=o},1258:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(1250),u=(n=l)&&n.__esModule?n:{default:n};var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"getDictList",value:function(e){return u.default.post("reportServer/dict/getDictList",JSON.stringify(e))}},{key:"getDictValue",value:function(e,t){return u.default.post("reportServer/dict/getDictValueByDictID",JSON.stringify({dict_id:e,value_code:t}))}},{key:"saveDict",value:function(e){if("null"==e.oldvalue_code||null==e.oldvalue_code){return u.default.post("reportServer/dict/createFuncDictValue",JSON.stringify(e))}return u.default.post("reportServer/dict/updateDictValue",JSON.stringify(e))}},{key:"deleteDict",value:function(e){return u.default.post("reportServer/dict/deleteDictValueByIDCode",JSON.stringify(e))}}]),e}();t.default=o},1374:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=m(a(1042)),r=m(a(44)),l=m(a(120)),u=m(a(66)),o=m(a(1043)),i=m(a(138)),c=m(a(1045)),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(1041),a(157),a(445),a(446),a(443),a(447),a(1044);var d=m(a(1)),p=m(a(1258));function m(e){return e&&e.__esModule?e:{default:e}}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var b=new(m(a(442)).default),h=c.default.Item,y=new p.default,_=(i.default.Option,function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={confirmDirty:!1,dict_id:a.props.match.params.dictId,oldvalue_code:a.props.match.params.value_code,value_code:"",value_name:"",abbr_name1:"",abbr_name2:"",enabled:"1"},a.handleSubmit=a.handleSubmit.bind(a),a.handleConfirmBlur=a.handleConfirmBlur.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,d.default.Component),s(t,[{key:"componentDidMount",value:function(){var e=this;null!=this.state.oldvalue_code&&""!=this.state.oldvalue_code&&"null"!=this.state.oldvalue_code&&y.getDictValue(this.state.dict_id,this.state.oldvalue_code).then(function(t){e.setState(t.data),e.props.form.setFieldsValue({dict_id:e.state.dict_id,value_code:e.state.oldvalue_code,value_name:t.data.value_name,abbr_name1:t.data.abbr_name1,abbr_name2:t.data.abbr_name2,confirm:""})},function(t){e.setState({}),b.errorTips(t)})}},{key:"onValueChange",value:function(e){var t=e.target.name,a=e.target.value.trim();this.setState(v({},t,a)),this.props.form.setFieldsValue(v({},t,a))}},{key:"onSelectChange",value:function(e,t){this.setState(v({},e,t)),this.props.form.setFieldsValue(v({},e,t))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.props.form.validateFieldsAndScroll(function(e,a){e||y.saveDict(t.state).then(function(e){null!=t.state.oldvalue_code&&""!=t.state.oldvalue_code&&"null"!=t.state.oldvalue_code?alert("修改成功"):alert("保存成功"),window.location.href="#dict/DictValueList/"+t.state.dict_id},function(e){t.setState({}),b.errorTips(e)})})}},{key:"handleConfirmBlur",value:function(e){var t=e.target.value;this.setState({confirmDirty:this.state.confirmDirty||!!t})}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,a={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}};return d.default.createElement("div",{id:"page-wrapper"},d.default.createElement(n.default,{title:"null"==this.state.oldvalue_code?"新建字典":"编辑字典"},d.default.createElement(c.default,{onSubmit:this.handleSubmit},d.default.createElement(l.default,null,d.default.createElement(u.default,{xs:24,sm:12},d.default.createElement(h,f({},a,{label:"字典编码"}),t("value_code",{rules:[{required:!0,message:"请输入字典编码!"}]})(d.default.createElement(o.default,{type:"text",name:"value_code",onChange:function(t){return e.onValueChange(t)}})))),d.default.createElement(u.default,{xs:24,sm:12},d.default.createElement(h,f({},a,{label:"字典名称"}),t("value_name",{rules:[{required:!0,message:"请输入字典名称!"}]})(d.default.createElement(o.default,{type:"text",name:"value_name",onChange:function(t){return e.onValueChange(t)}}))))),d.default.createElement(l.default,null,d.default.createElement(u.default,{xs:24,sm:12},d.default.createElement(h,f({},a,{label:"简称1"}),t("abbr_name1",{rules:[{required:!1,message:"请输入简称1!"}]})(d.default.createElement(o.default,{type:"text",name:"abbr_name1",onChange:function(t){return e.onValueChange(t)}})))),d.default.createElement(u.default,{xs:24,sm:12},d.default.createElement(h,f({},a,{label:"简称2"}),t("abbr_name2",{rules:[{required:!1,message:"请输入简称2!"}]})(d.default.createElement(o.default,{type:"text",name:"abbr_name2",onChange:function(t){return e.onValueChange(t)}}))))),d.default.createElement(h,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},d.default.createElement(r.default,{type:"primary",htmlType:"submit"},"保存"),d.default.createElement(r.default,{href:"#/dict/dictValueList/"+this.state.dict_id,type:"primary",style:{marginLeft:"30px"}},"返回")))))}}]),t}());t.default=c.default.create()(_)}}]);