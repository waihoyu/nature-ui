(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76ab75ff"],{"0cb4":function(t,s,a){"use strict";a.r(s);var l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("Dialog 弹框")]),a("h2",[t._v("基本用法")]),t._m(0),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("nt-button",{attrs:{type:"primary"},on:{click:t.showModal}},[t._v("点击")])],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("nt-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"showModal"')]),t._v(">")]),t._v("点击"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("nt-button")]),t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v("{\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(":{\n        showModal(){\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$dialog().then("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("()")]),t._v(" =>")]),t._v(" {\n                alert("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'面板已经打开'")]),t._v(")\n            });\n        }\n  }\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n\n\n")])])])]),a("h2",[t._v("显示遮罩")]),a("p",[t._v("直接配置参数showMask即可")]),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("nt-button",{attrs:{type:"primary"},on:{click:t.showMaskModal}},[t._v("点击")])],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("nt-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"showMaskModal"')]),t._v(">")]),t._v("点击"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("nt-button")]),t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v("{\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(":{\n        showMaskModal(){\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$dialog({\n                 "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("showMask")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n            }).then("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("()")]),t._v(" =>")]),t._v(" {\n               \n            });\n        },\n  }\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n\n")])])])]),a("h2",[t._v("配置确定按钮点击事件,只显示确定按钮")]),a("p",[t._v("直接配置参数confirm即可,注:如果这个参数的方法使用了箭头函数,将不能再通过this调用dialogClose方法关闭弹窗")]),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("nt-button",{attrs:{type:"primary"},on:{click:t.showClickModal}},[t._v("点击")]),t._v("  "+t._s(t.clickText)+"\n\n\n\n")],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("nt-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"showClickModal"')]),t._v(">")]),t._v("点击"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("nt-button")]),t._v(">")]),t._v("  {{clickText}}\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v("{\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(":{\n        data(){\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v("{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("clickText")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("''")]),t._v("\n            }\n        },\n         showClickModal(){\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" _this = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(";\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$dialog({\n                 "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("showMask")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n                 "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("justOkBtn")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n                 confirm(){\n                    _this.clickText = _this.clickText ?"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("''")]),t._v(" :"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'点击了确定'")]),t._v(";\n                    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".dialogClose(); "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// 此处直接通过this调用dialogClose方法关闭弹窗")]),t._v("\n                 }\n            }).then("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("()")]),t._v(" =>")]),t._v(" {\n               \n            });\n        },\n  }\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n\n")])])])]),a("h2",[t._v("配置自定义宽高")]),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("nt-button",{attrs:{type:"primary"},on:{click:t.showHwModal}},[t._v("点击")])],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("nt-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"showHwModal"')]),t._v(">")]),t._v("点击"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("nt-button")]),t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v("{\n         showHwModal(){\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" _this = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(";\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$dialog({\n                 "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("300")]),t._v(",\n                 "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("width")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("300")]),t._v(",\n                 "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("showMask")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n                 "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("justOkBtn")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n            })\n        },\n  }\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n\n")])])])]),a("h3",[t._v("Attributes")]),t._m(1),a("h3",[t._v("Events")]),a("p",[t._v("this.$dialog()返回一个pormise对象，可以通过.then进行处理回调")])],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("span",[t._v("直接通过"),a("code",{pre:!0},[t._v("this.$dialog([options])")]),t._v("调用即可，dialog的内容通过body传递，默认是唱、跳、rap、篮球、music")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("body")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("dialog的body部分")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("唱、跳、rap、篮球、music")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("showMask")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示遮罩层")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[t._v("true")]),t._v(","),a("code",{pre:!0},[t._v("false")])]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[t._v("false")])])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("justOkBtn")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否只显示确定按钮")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[t._v("true")]),a("code",{pre:!0},[t._v("false")])]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[t._v("false")])])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("showHeader")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示头部header")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[t._v("true")]),a("code",{pre:!0},[t._v("false")])]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[t._v("true")])])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("头部标题")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("提示")]),a("td",{staticStyle:{"text-align":"left"}})]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("confirmTxt")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("确定按钮的文字")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[t._v("确定")])])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("concelTxt")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("取消按钮的文字")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[t._v("取消")])])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("confirm")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击确定按钮执行的方法")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),a("td",{staticStyle:{"text-align":"left"}})]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("concel")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击取消按钮执行的方法")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),a("td",{staticStyle:{"text-align":"left"}})])])])}],r=a("a506"),n={data:function(){return{clickText:""}},methods:Object(r["a"])({showHwModal:function(){this.$dialog({height:300,width:300,showMask:!0,justOkBtn:!0})},showModal:function(){this.$dialog().then(function(){alert("面板已经打开")})},showMaskModal:function(){this.$dialog({showMask:!0}).then(function(){})},showClickModal:function(){var t=this;this.$dialog({showMask:!0,justOkBtn:!0,confirm:function(){t.clickText=t.clickText?"":"点击了确定",this.dialogClose()}}).then(function(){})}},"showHwModal",function(){this.$dialog({showMask:!0,height:300,width:600}).then(function(){})})},c=n,i=(a("d64a"),a("6691")),v=Object(i["a"])(c,l,e,!1,null,null,null);s["default"]=v.exports},d64a:function(t,s,a){"use strict";var l=a("f3ad"),e=a.n(l);e.a},f3ad:function(t,s,a){}}]);
//# sourceMappingURL=chunk-76ab75ff.5358ceea.js.map