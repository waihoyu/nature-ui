(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7931d6dc"],{"9e9d":function(s,t,a){},a2c0:function(s,t,a){"use strict";a.r(t);var r=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Select下拉框")]),a("h2",[s._v("基本用法")]),s._m(0),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("nt-select",{attrs:{options:s.options},model:{value:s.sVal,callback:function(t){s.sVal=t},expression:"sVal"}}),a("p",[s._v("当前选择项的value值为:"+s._s(s.sVal))])],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sVal"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-select")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("当前选择项的value值为:{{sVal}}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n    data(){\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sVal")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'3'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'北京大学\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'清华大学\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'复旦大学\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'3'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'中国人民大学\t\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'4'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'浙江大学\t\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'5'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'中山大学\t\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'6'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'上海交通大学\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'7'")]),s._v("\n            }],\n        }\n    }\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n\n")])])])]),a("h2",[s._v("下拉框多选")]),a("p",[s._v("传递multiple属性,并通过v-model绑定一个数组(Array)")]),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("nt-select",{attrs:{options:s.options,multiple:""},model:{value:s.sList,callback:function(t){s.sList=t},expression:"sList"}}),a("p",[s._v("当前选择项的value值为:"+s._s(s.sList))])],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sList"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("multiple")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-select")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("当前选择项的value值为:{{sList}}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n    data(){\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sList")]),s._v(":[],\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'北京大学\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'清华大学\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'复旦大学\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'3'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'中国人民大学\t\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'4'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'浙江大学\t\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'5'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'中山大学\t\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'6'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'上海交通大学\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'7'")]),s._v("\n            }],\n        }\n    }\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n\n")])])])]),a("h2",[s._v("下拉框禁用")]),a("p",[s._v("传递disabled属性,参数为Boolean值，默认为false")]),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("nt-select",{attrs:{options:s.options,disabled:!0},model:{value:s.sVal,callback:function(t){s.sVal=t},expression:"sVal"}}),a("nt-select",{attrs:{options:s.options,disabled:!0,multiple:""},model:{value:s.sList,callback:function(t){s.sList=t},expression:"sList"}})],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sVal"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-select")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sList"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("multiple")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-select")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n    data(){\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sVal")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'3'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sList")]),s._v(":["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1'")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'3'")]),s._v("],\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'北京大学\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'清华大学\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'复旦大学\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'3'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'中国人民大学\t\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'4'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'浙江大学\t\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'5'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'中山大学\t\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'6'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'上海交通大学\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'7'")]),s._v("\n            }],\n        }\n    }\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n\n")])])])]),a("h2",[s._v("下拉框change事件")]),a("p",[s._v("直接@change绑定change事件即可")]),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("nt-select",{attrs:{options:s.options},on:{change:s.handleChange},model:{value:s.sVal,callback:function(t){s.sVal=t},expression:"sVal"}}),a("nt-select",{attrs:{options:s.options,multiple:""},on:{change:s.handleMulChange},model:{value:s.sList,callback:function(t){s.sList=t},expression:"sList"}})],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sVal"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleChange"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-select")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sList"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleMulChange"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("multiple")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-select")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n    data(){\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sVal")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'3'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sList")]),s._v(":["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1'")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'3'")]),s._v("],\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'北京大学\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'清华大学\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'复旦大学\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'3'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'中国人民大学\t\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'4'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'浙江大学\t\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'5'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'中山大学\t\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'6'")]),s._v("\n            }, {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'上海交通大学\t'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'7'")]),s._v("\n            }],\n        }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(":{\n        handleChange(val){\n            alert("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`单选框改变，更新后的key值为"),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${val}")]),s._v("`")]),s._v(")\n        },\n        handleMulChange(val){\n            alert("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`multipleSelect改变，更新后的key值数组为"),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${val}")]),s._v("`")]),s._v(")\n        },\n    }\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n\n")])])])]),a("h3",[s._v("Attributes")]),s._m(1),a("h3",[s._v("Events")]),s._m(2)],1)},l=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("下拉框选项通过options传递,要求每一项的value值"),a("strong",[s._v("必须唯一")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("参数")]),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),a("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),a("th",{staticStyle:{"text-align":"left"}},[s._v("可选值")]),a("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("disabled")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否禁用")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("Boolean")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[s._v("true")]),a("code",{pre:!0},[s._v("false")])]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[s._v("false")])])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("multiple")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否多选")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("-")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("直接加上这个属性即可，默认不加")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[s._v("无")])])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("事件名称")]),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),a("th",{staticStyle:{"text-align":"center"}},[s._v("回调参数")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("change")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("直接@change绑定change事件即可")]),a("td",{staticStyle:{"text-align":"center"}},[s._v("Event")])])])])}],n={data:function(){return{sVal:"3",sList:["1","3"],options:[{text:"北京大学\t",value:"1"},{text:"清华大学\t",value:"2"},{text:"复旦大学\t",value:"3"},{text:"中国人民大学\t\t",value:"4"},{text:"浙江大学\t\t",value:"5"},{text:"中山大学\t\t",value:"6"},{text:"上海交通大学\t",value:"7"}]}},methods:{handleChange:function(s){alert("单选框改变，更新后的key值为".concat(s))},handleMulChange:function(s){alert("multipleSelect改变，更新后的key值数组为".concat(s))}}},e=n,v=(a("d9ba"),a("6691")),p=Object(v["a"])(e,r,l,!1,null,null,null);t["default"]=p.exports},d9ba:function(s,t,a){"use strict";var r=a("9e9d"),l=a.n(r);l.a}}]);
//# sourceMappingURL=chunk-7931d6dc.f77dcbbf.js.map