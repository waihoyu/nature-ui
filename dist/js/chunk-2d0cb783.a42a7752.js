(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cb783"],{"4a99":function(s,t,a){"use strict";a.r(t);var l=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Tree 树形菜单控件")]),a("h2",[s._v("基本用法")]),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[a("nt-tree",{attrs:{data:s.treeData},on:{"node-click":s.handTreeClick}})]],2),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-tree")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"treeData"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@node-click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handTreeClick"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-tree")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("treeData")]),s._v(": [\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"西游记"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"111"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("state")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"open"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"孙悟空"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"111-1"')]),s._v("\n            },\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"猪八戒"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"111-2"')]),s._v("\n            }\n          ]\n        },\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"三国演义"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"222"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("state")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"open"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"关羽"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"222-1"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("state")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"open"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [\n                {\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"关平"')]),s._v(",\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"222-1-1"')]),s._v("\n                }\n              ]\n            },\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"张飞"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"222-2"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [\n                {\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"张苞"')]),s._v(",\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"222-2-1"')]),s._v("\n                }\n              ]\n            },\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"刘备"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"222-3"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [\n                {\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"阿斗"')]),s._v(",\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"222-3-1"')]),s._v("\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    };\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    handTreeClick(item) {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item :"')]),s._v(", item);\n    }\n  }\n};\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])])]),a("h2",[s._v("可供选择")]),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[a("nt-tree",{ref:"checktree",attrs:{data:s.treeCheckboxData,showcheckbox:!0},on:{"node-click":s.handTreeClick}}),a("nt-button",{attrs:{size:"small",type:"primary"},on:{click:s.getAllCheckNode}},[s._v("获取所有选中的节点")]),a("nt-button",{attrs:{size:"small",type:"primary"},on:{click:s.getAllLeafCheckNode}},[s._v("获取所有选中叶子节点")])]],2),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-tree")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"checktree"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"treeCheckboxData"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":showcheckbox")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@node-click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handTreeClick"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-tree")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"getAllCheckNode"')]),s._v(">")]),s._v("获取所有选中的节点"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-button")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"getAllLeafCheckNode"')]),s._v(">")]),s._v("获取所有选中叶子节点"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("nt-button")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("treeCheckboxData")]),s._v(": [\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"西游记"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"111"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("state")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"open"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"孙悟空"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"111-1"')]),s._v("\n            },\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"猪八戒"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"111-2"')]),s._v("\n            }\n          ]\n        },\n        {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"三国演义"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"222"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("state")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"open"')]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"关羽"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"222-1"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("state")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"open"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [\n                {\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"关平"')]),s._v(",\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"222-1-1"')]),s._v("\n                }\n              ]\n            },\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"张飞"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"222-2"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [\n                {\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"张苞"')]),s._v(",\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"222-2-1"')]),s._v("\n                }\n              ]\n            },\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"刘备"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"222-3"')]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [\n                {\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"阿斗"')]),s._v(",\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"222-3-1"')]),s._v("\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    };\n  },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    handTreeClick(item) {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item :"')]),s._v(", item);\n    },\n    getAllCheckNode(){\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.checktree.getCheckedNode());\n    },\n    getAllLeafCheckNode(){\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.checktree.getCheckedLeafNode());\n    }\n  }\n};\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])])]),a("h3",[s._v("Attributes")]),s._m(0),a("h3",[s._v("Events")]),s._m(1)],1)},r=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("参数")]),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),a("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),a("th",{staticStyle:{"text-align":"left"}},[s._v("可选值")]),a("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("data")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("传递的需要渲染的tree的数据")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("Array")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("-")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("-")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("showcheckbox")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否显示复选框")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("Boolean")]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[s._v("true")]),a("code",{pre:!0},[s._v("false")])]),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[s._v("false")])])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("事件名称")]),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),a("th",{staticStyle:{"text-align":"left"}},[s._v("回调参数")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("node-click")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("点击每一项触发的事件")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("当前点击的项,该项中的isLeaf参数表示是否是叶子节点")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("node-click")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("获取所有勾选的节点")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("所有勾选的节点组成的数组")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("node-click")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("获取所有勾选叶子节点")]),a("td",{staticStyle:{"text-align":"left"}},[s._v("所有勾选的叶子节点组成的数组")])])])])}],e={data:function(){return{treeData:[{label:"西游记",id:"111",state:"open",children:[{label:"孙悟空",id:"111-1",checked:!0},{label:"猪八戒",id:"111-2",checked:!0}]},{label:"三国演义",id:"222",state:"open",children:[{label:"关羽",id:"222-1",state:"open",checked:!0,children:[{label:"关平",id:"222-1-1"}]},{label:"张飞",id:"222-2",children:[{label:"张苞",id:"222-2-1"}]},{label:"刘备",id:"222-3",children:[{label:"阿斗",id:"222-3-1"}]}]}],treeCheckboxData:[{label:"西游记",id:"111",state:"open",children:[{label:"孙悟空",id:"111-1",checked:!0},{label:"猪八戒",id:"111-2",checked:!0}]},{label:"三国演义",id:"222",state:"open",children:[{label:"关羽",id:"222-1",state:"open",checked:!0,children:[{label:"关平",id:"222-1-1"}]},{label:"张飞",id:"222-2",children:[{label:"张苞",id:"222-2-1"}]},{label:"刘备",id:"222-3",children:[{label:"阿斗",id:"222-3-1"}]}]}]}},methods:{handTreeClick:function(s){console.log("item :",s)},getAllCheckNode:function(){console.log(this.$refs.checktree.getCheckedNode())},getAllLeafCheckNode:function(){console.log(this.$refs.checktree.getCheckedLeafNode())}}},n=e,p=a("6691"),v=Object(p["a"])(n,l,r,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0cb783.a42a7752.js.map