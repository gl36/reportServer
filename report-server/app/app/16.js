(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{876:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=c(n(0)),a=n(321);n(877);var r=c(n(728)),A=c(n(322)),u=c(n(211));c(n(884));function c(e){return e&&e.__esModule?e:{default:e}}var l,s,d=new u.default,p={},f=(document.querySelector("audio"),1);function y(){var e=document.getElementById("microphone");e.addEventListener("touchstart",function(e){e.preventDefault(),HZRecorder.get(function(e){(l=e).start()})}),e.addEventListener("touchend",function(e){e.preventDefault(),HZRecorder.get(function(e){(l=e).stop()});var t=l.getBlob();if(0!==t.duration){p[f]=t,l.clear();var n=t.duration/10,i="<div class='warper'><div id="+f+" class='voiceItem' >"+n+"s</div></div>";$(".messages").append(i),f++;var o=new FormData;o.append("file",t.blob),A.default.post("reportServer/MyVoiceApplication/uploadai",o).then(function(e){"1000"==e.resultCode&&(e.data.content,fetch("https://api.ownthink.com/bot?spoken="+e.data.content,{method:"POST",type:"cors"}).then(function(e){return e.json()}).then(function(e){console.log(e),"success"==e.message&&null!=(s=e.data.info.text)&&""!=s&&fetch(window.getServerUrl()+"reportServer/MyVoiceApplication/yuyin",{method:"POST",headers:{"Content-Type":"application/json",credentials:JSON.stringify(d.getStorage("userInfo")||"")},body:s}).then(function(e){e.ok&&e.blob().then(function(e){var t=e.size,n=8*t/16/2/8e3;n=n.toFixed(1);var i=document.querySelector("audio");i.src=window.URL.createObjectURL(e),p[f]=e;var o=n,a="<div class='warper'><div id="+f+" class='voiceItemlet' >"+o+"s</div></div>";$(".messages").append(a),f++,$(".voiceItemlet").click(function(){h(e)})})})}))}),$(".voiceItem").click(function(){var e=$(this)[0].id;h(p[e].blob)})}else console.log("没有声音输入")})}function h(e){!function(e,t){e.autoplay=!0,e.src=window.URL.createObjectURL(t)}(document.querySelector("audio"),e)}var g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={question:"",answer:"",saying:!1,btnText:"按住  说话"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),i(t,[{key:"componentDidMount",value:function(){y()}},{key:"onInputChange",value:function(e,t){this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,t))}},{key:"onInputKeyUp",value:function(e){13===e.keyCode&&this.yuyin()}},{key:"yuyin",value:function(){null!=this.state.answer&&""!=this.state.answer&&fetch(window.getServerUrl()+"reportServer/MyVoiceApplication/yuyin",{method:"POST",headers:{"Content-Type":"application/json",credentials:JSON.stringify(d.getStorage("userInfo")||"")},body:this.state.answer}).then(function(e){if(e.ok){e.blob().then(function(e){var t=8*e.size/16/2/8e3;t=t.toFixed(1),document.querySelector("audio").src=window.URL.createObjectURL(e),p[1]=e;var n="<div class='warper'><div id=1 class='voiceItemlet' >"+t+"s</div></div>";$(".messages").append(n),0,$(".voiceItemlet").click(function(){h(e)})})}})}},{key:"handleStart",value:function(e){this.setState({saying:!0,btnText:"松开  结束"})}},{key:"handleTouchMove",value:function(e){this.setState({saying:!1,btnText:"按住  说话"})}},{key:"handleTouchEnd",value:function(e){this.setState({saying:!1,btnText:"按住  说话"})}},{key:"render",value:function(){var e=this;return o.default.createElement("div",null,o.default.createElement("div",{class:"messages"}),o.default.createElement(r.default,{url:"../src/page/ai/jquery-3.2.1.min.js"}),o.default.createElement(r.default,{url:"../src/page/ai/record.js"}),o.default.createElement(a.InputItem,{type:"text",name:"answer",placeholder:"输入用户名",clear:!0,onKeyUp:function(t){return e.onInputKeyUp(t)},onChange:function(t){return e.onInputChange("answer",t)}}),o.default.createElement("audio",{controls:!0,autoplay:!0}),1==this.state.saying?o.default.createElement("div",{className:"saying"},o.default.createElement("img",{src:n(884)})):"",o.default.createElement("div",{style:{textAlign:"center",margin:"10px"}},o.default.createElement(a.Button,{type:"primary",onClick:function(){return e.yuyin()},inline:!0,size:"small",style:{marginRight:"4px"}},"语音合成"),o.default.createElement(a.Button,{type:"primary",id:"microphone",onTouchStart:this.handleStart.bind(this),onTouchMove:this.handleTouchMove.bind(this),onTouchEnd:this.handleTouchEnd.bind(this),inline:!0,size:"small"},this.state.btnText)))}}]),t}();t.default=g},884:function(e,t){e.exports="data:image/gif;base64,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"}}]);