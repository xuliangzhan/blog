(window["webpackJsonpVXETable"]=window["webpackJsonpVXETable"]||[]).push([["start"],{"0aa1":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Theme 主题")]),n("p",{staticClass:"tip"},[e._v("Case 1.使用默认的主题样式")]),n("pre",[e._v("    "),n("code",{staticClass:"scss"},[e._v("\n      @import 'vxe-table/lib/index.css';\n    ")]),e._v("\n  ")]),n("p",{staticClass:"tip"},[e._v("Case 2.修改主题颜色，并引入所有样式（"),n("a",{staticClass:"link",attrs:{href:"https://github.com/xuliangzhan/vxe-table/blob/master/styles/variable.scss",target:"_blank"}},[e._v("查看所有变量")]),e._v("）")]),n("pre",[e._v("    "),n("code",{staticClass:"scss"},[e._v("\n      @import 'vxe-table/styles/variable.scss';\n      $vxe-font-color: #666; // 主题颜色\n      $vxe-zindex: 3000; // 对于在某些场景中，由于堆叠被覆盖时可能会用到\n      @import 'vxe-table/styles/default.scss';\n    ")]),e._v("\n  ")]),n("p",{staticClass:"tip"},[e._v("Case 3.修改主题颜色，并按需引入样式（"),n("a",{staticClass:"link",attrs:{href:"https://github.com/xuliangzhan/vxe-table/blob/master/styles/variable.scss",target:"_blank"}},[e._v("查看所有变量")]),e._v("）")]),n("pre",[e._v("    "),n("code",{staticClass:"scss"},[e._v("\n      @import 'vxe-table/styles/variable.scss';\n      $vxe-font-color: #666; // 主题颜色\n      $vxe-zindex: 3000; // 对于在某些场景中，由于堆叠被覆盖时可能会用到\n      @import 'vxe-table/styles/table.scss';\n      @import 'vxe-table/styles/column.scss';\n      @import 'vxe-table/styles/header.scss';\n      @import 'vxe-table/styles/body.scss';\n      @import 'vxe-table/styles/footer.scss';\n      @import 'vxe-table/styles/icon.scss';\n      @import 'vxe-table/styles/filter.scss';\n      @import 'vxe-table/styles/loading.scss';\n      @import 'vxe-table/styles/grid.scss';\n      @import 'vxe-table/styles/excel.scss';\n      @import 'vxe-table/styles/menu.scss';\n      @import 'vxe-table/styles/toolbar.scss';\n      @import 'vxe-table/styles/pager.scss';\n      @import 'vxe-table/styles/checkbox.scss';\n      @import 'vxe-table/styles/radio.scss';\n      @import 'vxe-table/styles/input.scss';\n      @import 'vxe-table/styles/button.scss';\n      @import 'vxe-table/styles/message.scss';\n      @import 'vxe-table/styles/tooltip.scss';\n    ")]),e._v("\n  ")]),n("p",[e._v("Case 4.如果需要完全重写主题样式，把 vxe-table/styles/** 目录全部复制到项目中自行修改（例如 /assets/styles/xtable 目录下）")]),n("pre",[e._v("    "),n("code",{staticClass:"scss"},[e._v("\n      @import './assets/styles/xtable/index.scss';\n    ")]),e._v("\n  ")])])}],r=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),s=n.n(r),i={mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})}},o=i,c=n("2877"),u=Object(c["a"])(o,a,l,!1,null,null,null);t["default"]=u.exports},"28e4":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("全局工具栏按钮注册器")]),n("p",{staticClass:"tip"},[e._v("你可以很简单的将工具栏中常用的按钮注册成全局可复用的")]),n("vxe-table",{attrs:{resizable:"","highlight-current-row":"","highlight-hover-row":"","highlight-current-column":"",data:e.tableData}},[n("vxe-table-column",{attrs:{field:"name",title:"app.api.title.prop","min-width":"280","tree-node":""}}),n("vxe-table-column",{attrs:{field:"desc",title:"app.api.title.desc","min-width":"200"}}),n("vxe-table-column",{attrs:{field:"type",title:"app.api.title.type","min-width":"140"}}),n("vxe-table-column",{attrs:{field:"enum",title:"app.api.title.enum","min-width":"150"}}),n("vxe-table-column",{attrs:{field:"defVal",title:"app.api.title.defVal","min-width":"160"}})],1),n("h3",[e._v("示例")]),n("pre",[e._v("    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[],r=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),s=n.n(r),i={data:function(){return{tableData:[{name:"add(code, callback)",desc:"添加",type:"",enum:"",defVal:"code, callback",list:[]},{name:"mixin(map)",desc:"混合多个",type:"",enum:"",defVal:"map",list:[]},{name:"delete(code)",desc:"删除",type:"",enum:"",defVal:"name",list:[]}],demoCodes:['\n        <vxe-toolbar :buttons="toolbarButtons"></vxe-toolbar>\n\n        <vxe-table\n          border\n          :data="tableData">\n          <vxe-table-column type="index" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="sex" title="sex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n        </vxe-table>\n        ',"\n        VXETable.buttons.add('exportCSV', (params, event) => {\n          let { $table } = params\n          $table.exportCsv()\n        })\n\n        export default {\n          data () {\n            return {\n              tableData: [],\n              toolbarButtons: [\n                {\n                  code: 'exportCSV',\n                  name: '导出.csv'\n                }\n              ]\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 6)\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})}},o=i,c=n("2877"),u=Object(c["a"])(o,a,l,!1,null,null,null);t["default"]=u.exports},"32c2":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v("\n    默认的渲染器 "),n("table-column-api-link",{attrs:{prop:"cell-render"}}),n("br"),e._v("\n    配置参数："),n("br"),e._v("\n    renderDefault (h, cellRender, { row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }) 渲染函数\n  ")],1),n("vxe-table",{attrs:{border:"",data:e.tableData}},[n("vxe-table-column",{attrs:{type:"index",width:"60"}}),n("vxe-table-column",{attrs:{field:"name",title:"Name","cell-render":{name:"MyLink",events:{click:e.linkEvent}}}}),n("vxe-table-column",{attrs:{field:"sex",title:"sex"}}),n("vxe-table-column",{attrs:{field:"age",title:"Age"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")])],1)},l=[],r=(n("7f7f"),n("5df3"),n("1c4c"),n("ac6a"),n("1487")),s=n.n(r),i=n("61c2");i["e"].renderer.add("MyLink",{renderDefault:function(e,t,n){var a=n.row,l=n.column,r=t.events;return[e("a",{class:"link",on:{click:function(){return r.click(n)}}},[a[l.property]])]}});var o={data:function(){return{tableData:[],demoCodes:["\n        // 创建一个超链接渲染器\n        VXETable.renderer.add('MyLink', {\n          // 默认显示模板\n          renderDefault (h, cellRender, params) {\n            let { row, column } = params\n            let { events } = cellRender\n            return [\n              <a class=\"my-link\" onClick={ () => events.click(params) }>{row[column.property]}</a>\n            ]\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          :data="tableData">\n          <vxe-table-column type="index" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :cell-render="{name: \'MyLink\', events: {click: linkEvent}}"></vxe-table-column>\n          <vxe-table-column field="sex" title="sex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 6)\n          },\n          methods: {\n            linkEvent ({ row }) {\n              console.log(row.name)\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=window.MOCK_DATA_LIST.slice(0,6)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})},methods:{linkEvent:function(e){var t=e.row;console.log(t.name)}}},c=o,u=n("2877"),d=Object(u["a"])(c,a,l,!1,null,null,null);t["default"]=d.exports},"335c8":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._m(1),n("vxe-table",{attrs:{resizable:"","highlight-current-row":"","highlight-hover-row":"","highlight-current-column":"",data:e.tableData}},[n("vxe-table-column",{attrs:{field:"name",title:"app.api.title.prop","min-width":"280","tree-node":""}}),n("vxe-table-column",{attrs:{field:"desc",title:"app.api.title.desc","min-width":"200"}}),n("vxe-table-column",{attrs:{field:"type",title:"app.api.title.type","min-width":"140"}}),n("vxe-table-column",{attrs:{field:"enum",title:"app.api.title.enum","min-width":"150"}}),n("vxe-table-column",{attrs:{field:"defVal",title:"app.api.title.defVal","min-width":"160"}})],1),n("h3",[e._v("type 可选值")]),n("p",{staticClass:"orange"},[e._v("event.clear_filter（清除筛选面板时触发）")]),n("p",{staticClass:"orange"},[e._v("event.clear_actived（清除激活单元格时触发）")]),n("p",{staticClass:"orange"},[e._v("event.show_menu（显示快捷菜单之前触发）")]),n("h3",[e._v("示例")]),n("p",[e._v("例子：比如自定义渲染某个组件后，由于弹出层面板不在单元格之内，按键事件的交互行为存在冲突，对于这些场景就很有用了")]),n("pre",[e._v("    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n  ")])],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("h2",[e._v("Event interceptor 事件拦截器")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"tip"},[e._v("通过内置拦截器可以处理表格事件行为与第三方组件的兼容性；比如这些插件 "),n("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/vxe-table-plugin-element",target:"_blank"}},[e._v("vxe-table-plugin-element")])])}],r=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),s=n.n(r),i={data:function(){return{tableData:[{name:"add(type, callback)",desc:"添加",type:"",enum:"",defVal:"type, callback",list:[]},{name:"mixin(map)",desc:"混合多个",type:"",enum:"",defVal:"map",list:[]},{name:"delete(type)",desc:"删除",type:"",enum:"",defVal:"name",list:[]}],demoCodes:["\n        VXETable.interceptor.add('event.clear_actived', (params, event) => {\n          // 比如点击了某个组件的弹出层面板之后，此时被激活单元格不应该被自动关闭，通过返回 false 可以阻止默认的行为。\n          if (event.target.className.indexOf('other-popper') > -1) {\n            return false\n          }\n        })\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})}},o=i,c=n("2877"),u=Object(c["a"])(o,a,l,!1,null,null,null);t["default"]=u.exports},"358e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("全局快捷菜单注册器")]),n("p",{staticClass:"tip"},[e._v("你可以很简单的将常用的快捷菜单注册成全局可复用的")]),n("vxe-table",{attrs:{resizable:"","highlight-current-row":"","highlight-hover-row":"","highlight-current-column":"",data:e.tableData}},[n("vxe-table-column",{attrs:{field:"name",title:"app.api.title.prop","min-width":"280","tree-node":""}}),n("vxe-table-column",{attrs:{field:"desc",title:"app.api.title.desc","min-width":"200"}}),n("vxe-table-column",{attrs:{field:"type",title:"app.api.title.type","min-width":"140"}}),n("vxe-table-column",{attrs:{field:"enum",title:"app.api.title.enum","min-width":"150"}}),n("vxe-table-column",{attrs:{field:"defVal",title:"app.api.title.defVal","min-width":"160"}})],1),n("h3",[e._v("示例")]),n("pre",[e._v("    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[],r=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),s=n.n(r),i={data:function(){return{tableData:[{name:"add(code, callback)",desc:"添加",type:"",enum:"",defVal:"code, callback",list:[]},{name:"mixin(map)",desc:"混合多个",type:"",enum:"",defVal:"map",list:[]},{name:"delete(code)",desc:"删除",type:"",enum:"",defVal:"name",list:[]}],demoCodes:['\n        <vxe-table\n          border\n          :context-menu="{body: {options: bodyMenus}}"\n          :data="tableData">\n          <vxe-table-column type="index" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="sex" title="sex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n        </vxe-table>\n        ',"\n        VXETable.menus.add('exportCSV', (params, event) => {\n          let { $table } = params\n          $table.exportCsv()\n        })\n\n        VXETable.menus.add('insert', (params, event) => {\n          let { $table, menu } = params\n          // 读取自定义的参数\n          $table.insert(menu.record)\n        })\n\n        export default {\n          data () {\n            return {\n              tableData: [],\n              bodyMenus: [\n                [\n                  {\n                    code: 'exportCSV',\n                    name: '导出.csv'\n                  },\n                  {\n                    code: 'insert',\n                    name: '新增',\n                    record: {\n                      name: '默认名称'\n                    }\n                  }\n                ]\n              ]\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 6)\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})}},o=i,c=n("2877"),u=Object(c["a"])(o,a,l,!1,null,null,null);t["default"]=u.exports},"4b3a":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Renderer 渲染器")]),e._m(0),n("h3",[e._v("渲染器和插槽对比")]),n("p",{staticClass:"orange"},[e._v("渲染器：抽象一切可复用的功能（类似组件的概念），实现非常简单的可配置化；")]),n("p",{staticClass:"orange"},[e._v("插槽：自定义程度高，但需要重复写冗余代码，比较繁琐；")]),n("p",{staticClass:"red"},[e._v("建议通过 JSX 实现更加简单，可维护性更好")]),n("vxe-table",{attrs:{resizable:"","highlight-current-row":"","highlight-hover-row":"","highlight-current-column":"",data:e.tableData}},[n("vxe-table-column",{attrs:{field:"name",title:"app.api.title.prop","min-width":"280","tree-node":""}}),n("vxe-table-column",{attrs:{field:"desc",title:"app.api.title.desc","min-width":"200"}}),n("vxe-table-column",{attrs:{field:"type",title:"app.api.title.type","min-width":"140"}}),n("vxe-table-column",{attrs:{field:"enum",title:"app.api.title.enum","min-width":"150"}}),n("vxe-table-column",{attrs:{field:"defVal",title:"app.api.title.defVal","min-width":"160"}})],1)],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"tip"},[e._v("通过渲染器你可以轻松实现筛选、单元格的复用，可以根据不同业务实现不一样的渲染器，这个功能将非常实用；比如这些插件 "),n("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/vxe-table-plugin-element",target:"_blank"}},[e._v("vxe-table-plugin-element")])])}],r=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),s=n.n(r),i={data:function(){return{tableData:[{name:"add(name, options)",desc:"添加",type:"",enum:"",defVal:"name, options",list:[]},{name:"mixin(map)",desc:"混合多个",type:"",enum:"",defVal:"map",list:[]},{name:"delete(name)",desc:"删除",type:"",enum:"",defVal:"name",list:[]}]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})}},o=i,c=n("2877"),u=Object(c["a"])(o,a,l,!1,null,null,null);t["default"]=u.exports},"61d9":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("npm install")]),n("p",{staticClass:"tip"},[e._v("\n    推荐使用 npm 的方式安装，它能更好地和 "),n("a",{staticClass:"link",attrs:{href:"https://webpack.js.org/"}},[e._v("webpack")]),e._v(" 打包工具配合使用。"),n("br"),e._v("\n    依赖库： "),n("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/xe-utils"}},[e._v("xe-utils2.2+")]),e._v("  "),n("a",{staticClass:"link",attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D"}},[e._v("vue2.6+")])]),n("pre",[e._v("    "),n("code",{staticClass:"shell"},[e._v("\n      npm install xe-utils vxe-table\n    ")]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v("\n      import Vue from 'vue'\n      import 'xe-utils'\n      import VXETable from 'vxe-table'\n      import 'vxe-table/lib/index.css'\n\n      Vue.use(VXETable)\n    ")]),e._v("\n  ")]),n("h2",[e._v("CDN")]),n("p",{staticClass:"tip"},[e._v("可以通过 "),n("a",{staticClass:"link",attrs:{href:"https://unpkg.com/vxe-table/"}},[e._v("unpkg")]),e._v(" 或 "),n("a",{staticClass:"link",attrs:{href:"https://cdn.jsdelivr.net/npm/vxe-table/"}},[e._v("cdnjs")]),e._v(" 获取到最新版本的资源，并在页面上引入即可")]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v('\n      \x3c!-- 引入样式 --\x3e\n      <link rel="stylesheet" href="https://unpkg.com/vxe-table/lib/index.css">\n      \x3c!-- 引入脚本 --\x3e\n      <script src="https://unpkg.com/xe-utils"><\/script>\n      <script src="https://unpkg.com/vxe-table"><\/script>\n    ')]),e._v("\n  ")])])}],r=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),s=n.n(r),i={mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})}},o=i,c=n("2877"),u=Object(c["a"])(o,a,l,!1,null,null,null);t["default"]=u.exports},"8dea":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("size")]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v("\n      每个组件都有 size 属性，默认是继承父组件，所以只要给局部的父组件设置 size，所有后代组件一律继承，该功能对于很多场景中都非常有用\n    ")]),e._v("\n  ")]),n("h2",[e._v("Default Global Props")]),n("pre",[e._v("    "),n("code",{staticClass:"javascript"},[e._v("\n      import Vue from 'vue'\n      import VXETable from 'vxe-table'\n      import 'vxe-table/lib/index.css'\n\n      VXETable.setup({\n        // 默认表格参数\n        size: 'small',\n        showOverflow: null,\n        showHeaderOverflow: null,\n        align: null,\n        headerAlign: null,\n        stripe: false,\n        border: false,\n        resizable: false,\n        fit: true,\n        showHeader: true,\n        highlightCurrentRow: false,\n        highlightHoverRow: false,\n        highlightCurrentColumn: false,\n        highlightHoverColumn: false,\n        rowId: '_XID',\n        sortConfig: {\n          trigger: 'default'\n        },\n        validConfig: {\n          message: 'default'\n        },\n        // 版本号（对于某些带 Storage 数据储存的功能有用到，上升版本号可以用于重置 Storage 数据）\n        version: 0,\n        // 自定义图标配置（如果全部图标都使用自定义，就不需要引入 Icon 模块了，减少体积）\n        icon: {\n          sortAsc: 'vxe-icon--caret-top',\n          sortDesc: 'vxe-icon--caret-bottom',\n          filter: 'vxe-icon--funnel',\n          edit: 'vxe-icon--edit-outline',\n          tree: 'vxe-icon--caret-right',\n          refresh: 'vxe-icon--refresh',\n          custom: 'vxe-icon--menu',\n          jumpPrev: 'vxe-icon--d-arrow-left',\n          jumpNext: 'vxe-icon--d-arrow-right',\n          prevPage: 'vxe-icon--arrow-left',\n          nextPage: 'vxe-icon--arrow-right',\n          zoomIn: 'vxe-icon--zoomin',\n          zoomOut: 'vxe-icon--zoomout',\n          modalClose: 'vxe-icon--close',\n          modalInfo: 'vxe-icon--info',\n          modalSuccess: 'vxe-icon--success',\n          modalWarning: 'vxe-icon--warning',\n          modalError: 'vxe-icon--error',\n          modalQuestion: 'vxe-icon--question',\n          modalLoading: 'vxe-icon--refresh roll',\n          caretBottom: 'vxe-icon--caret-bottom',\n          dropdownBottom: 'vxe-icon--arrow-bottom'\n        },\n        // 配置式表格的默认参数\n        grid: {\n          proxyConfig: {\n            autoLoad: true,\n            message: true,\n            props: {\n              list: null,\n              result: 'result',\n              total: 'page.total'\n            }\n          }\n        },\n        // 默认快捷菜单\n        menu: {},\n        // 默认 tooltip 主题样式\n        tooltip: {\n          trigger: 'hover',\n          theme: 'dark'\n        },\n        // 默认分页参数\n        pager: {\n          pageSize: 10,\n          pagerCount: 7,\n          pageSizes: [10, 15, 20, 50, 100],\n          layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total'] // 非常灵活的分页布局，支持任意位置随意换\n        },\n        // 默认工具栏参数\n        toolbar: {\n          refresh: false,\n          resizable: {\n            storage: false\n          },\n          setting: {\n            storage: false\n          },\n          buttons: []\n        },\n        // 默认模态窗口参数\n        modal: {\n          zIndex: 2000,\n          lockView: true,\n          lockScroll: true,\n          mask: true,\n          duration: 3000,\n          animat: true\n        },\n        // 默认优化配置项\n        optimization : {\n          animat: true,\n          // 当表头大于 100 列时自动启用横向 X 滚动渲染\n          scrollX: {\n            gt: 100\n          },\n          // 当行数据大于 500 条时自动启用纵向 Y 滚动渲染\n          scrollY: {\n            gt: 500\n          }\n        },\n        // 集成国际化（将对列头、校验提示..进行自动翻译）\n        translate: : key => i18n.t(key)\n      })\n    ")]),e._v("\n  ")])])}],r=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),s=n.n(r),i={mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})}},o=i,c=n("2877"),u=Object(c["a"])(o,a,l,!1,null,null,null);t["default"]=u.exports},a325:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Internationalization 国际化")]),e._m(0),n("pre",[e._v("    "),n("code",{staticClass:"shell"},[e._v("\n      npm install vue-i18n\n    ")]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n  ")]),n("h2",[e._v("集成国际化")]),n("p",{staticClass:"tip"},[e._v("若希望在项目中支持全局自动翻译，可以通过全局参数开启（将对列头、校验提示..进行自动翻译）")]),n("pre",[e._v("    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),n("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"tip"},[e._v("目前支持的"),n("a",{staticClass:"link",attrs:{href:"https://github.com/xuliangzhan/vxe-table/tree/master/locale/lang",target:"_blank"}},[e._v("国际化列表")]),e._v("，若希望使用指定语言，则需要进行多语言设置。以中/英文为例")])}],r=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),s=n.n(r),i={data:function(){return{demoCodes:["\n        import Vue from 'vue'\n        import VueI18n from 'vxe-i18n'\n        import VXETable from 'vxe-table'\n        import zhCNLocat from 'vxe-table/lib/locale/lang/zh_CN'\n        import enLocat from 'vxe-table/lib/locale/lang/en'\n\n        const messages = {\n          zh_CN: {\n            ...zhCNLocat\n          },\n          en: {\n            ...enLocat\n          }\n        }\n\n        const i18n = new VueI18n({\n          locale: 'zh_CN',\n          messages,\n        })\n\n        Vue.use(VXETable, {\n          // 对组件内置的提示语进行国际化翻译\n          i18n: (key, value) => i18n.t(key, value)\n        })\n\n        new Vue({ i18n }).$mount('#app')\n        ","\n        Vue.use(VXETable, {\n          // 对参数的内容自动进行国际化翻译（只对支持国际化的有效）\n          translate: : key => i18n.t(key)\n        })\n        ",'\n        <vxe-table\n          border\n          height="600"\n          :data="tableData">\n          <vxe-table-column field="name" title="app.body.label.name"></vxe-table-column>\n          <vxe-table-column field="age" title="app.body.label.age"></vxe-table-column>\n          <vxe-table-column field="sex" title="app.body.label.sex"></vxe-table-column>\n        </vxe-table>\n        ']}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})}},o=i,c=n("2877"),u=Object(c["a"])(o,a,l,!1,null,null,null);t["default"]=u.exports},d0c5:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v("\n    可编辑渲染器 "),n("table-column-api-link",{attrs:{prop:"edit-render"}}),n("br"),e._v("\n    默认支持原生的：input、textarea、select"),n("br"),e._v("\n    配置参数："),n("br"),e._v("\n    autofocus 自动聚焦的类名"),n("br"),e._v("\n    renderEdit (h, editRender, { row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }) 编辑的渲染函数"),n("br"),e._v("\n    renderCell (h, editRender, { row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }) 显示的渲染函数\n  ")],1),n("vxe-table",{attrs:{border:"",data:e.tableData,"edit-config":{trigger:"click",mode:"row"}}},[n("vxe-table-column",{attrs:{type:"index",width:"60"}}),n("vxe-table-column",{attrs:{field:"name",title:"Name","edit-render":{name:"MyInput"}}}),n("vxe-table-column",{attrs:{field:"sex",title:"sex","edit-render":{name:"MyInput"}}}),n("vxe-table-column",{attrs:{field:"age",title:"Age","edit-render":{name:"MyInput"}}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")])],1)},l=[],r=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),s=n.n(r),i=n("61c2");i["e"].renderer.add("MyInput",{renderEdit:function(e,t,n){var a=n.row,l=n.column;return[e("input",{class:"my-cell",attrs:{text:"text"},domProps:{value:a[l.property]},on:{input:function(e){a[l.property]=e.target.value}}})]},renderCell:function(e,t,n){var a=n.row,l=n.column;return[e("span",[a[l.property]])]}});var o={data:function(){return{tableData:[],demoCodes:['\n        // 创建一个简单输入框渲染器\n        VXETable.renderer.add(\'MyInput\', {\n          // 可编辑激活模板\n          renderEdit (h, editRender, { row, column }) {\n            return [\n              <input class="my-cell" text="text" value={ row[column.property] } onInput={ evnt => { row[column.property] = evnt.target.value }}/>\n            ]\n          },\n          // 可编辑显示模板\n          renderCell (h, editRender, { row, column }) {\n            return [\n              <span>{ row[column.property] }</span>\n            ]\n          }\n        })\n        ','\n        <vxe-table\n          border\n          :data="tableData"\n          :edit-config="{trigger: \'click\', mode: \'row\'}">\n          <vxe-table-column type="index" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :edit-render="{name: \'MyInput\'}"></vxe-table-column>\n          <vxe-table-column field="sex" title="sex" :edit-render="{name: \'MyInput\'}"></vxe-table-column>\n          <vxe-table-column field="age" title="Age" :edit-render="{name: \'MyInput\'}"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 6)\n          }\n        }\n        "]}},created:function(){this.tableData=window.MOCK_DATA_LIST.slice(0,6)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})}},c=o,u=n("2877"),d=Object(u["a"])(c,a,l,!1,null,null,null);t["default"]=d.exports},f8c4:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v("\n    筛选渲染器 "),n("table-column-api-link",{attrs:{prop:"filter-render"}}),n("br"),e._v("\n    默认支持原生的：input、textarea、select"),n("br"),e._v("\n    配置参数："),n("br"),e._v("\n    renderFilter (h, filterRender, { column, columnIndex, $columnIndex }, context) 渲染函数"),n("br"),e._v("\n    filterMethod ({ option, row, column }) 筛选函数\n  ")],1),n("vxe-table",{attrs:{border:"",data:e.tableData}},[n("vxe-table-column",{attrs:{type:"index",width:"60"}}),n("vxe-table-column",{attrs:{field:"name",title:"Name",filters:[{data:null}],"filter-render":{name:"input",attrs:{placeholder:"请输入名字"}}}}),n("vxe-table-column",{attrs:{field:"sex",title:"sex",filters:[{data:null}],"filter-render":{name:"select",options:e.sexList}}}),n("vxe-table-column",{attrs:{field:"age",title:"Age",filters:[{data:null}],"filter-render":{name:"MyFilter"}}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")])],1)},l=[],r=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),s=n.n(r),i=n("61c2"),o=n("a1cf"),c=n.n(o);i["e"].renderer.add("MyFilter",{renderFilter:function(e,t,n,a){var l=n.column;return l.filters.map(function(t){return e("input",{attrs:{type:"text"},domProps:{value:t.data},on:{input:function(e){t.data=e.target.value;var n=!!t.data;a.changeOption(e,n,t)}}})})},filterMethod:function(e){var t=e.option,n=e.row,a=e.column,l=t.data,r=c.a.get(n,a.property);return r==l}});var u={data:function(){return{tableData:[],sexList:[{label:"全部",value:""},{label:"男",value:"1"},{label:"女",value:"0"}],demoCodes:["\n        // 创建一个支持输入的筛选器\n        VXETable.renderer.add('MyFilter', {\n          // 筛选模板\n          renderFilter (h, filterRender, params, context) {\n            let { column } = params\n            return column.filters.map(item => {\n              return h('input', {\n                attrs: {\n                  type: 'text'\n                },\n                domProps: {\n                  value: item.data\n                },\n                on: {\n                  input (evnt) {\n                    item.data = evnt.target.value\n                    let checked = !!item.data\n                    context.changeOption(evnt, checked, item)\n                  }\n                }\n              })\n            })\n          },\n          // 筛选方法\n          filterMethod ({ option, row, column }) {\n            let { data } = option\n            let cellValue = this.$utils.get(row, column.property)\n            return cellValue == data\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          :data="tableData">\n          <vxe-table-column type="index" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :filters="[{data: null}]" :filter-render="{name: \'input\', attrs: {placeholder: \'请输入名字\'}}"></vxe-table-column>\n          <vxe-table-column field="sex" title="sex" :filters="[{data: null}]" :filter-render="{name: \'select\', options: sexList}"></vxe-table-column>\n          <vxe-table-column field="age" title="Age" :filters="[{data: null}]" :filter-render="{name: \'MyFilter\'}"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              sexList: [\n                {\n                  label: '全部',\n                  value: ''\n                },\n                {\n                  label: '男',\n                  value: '1'\n                },\n                {\n                  label: '女',\n                  value: '0'\n                }\n              ]\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 6)\n          }\n        }\n        "]}},created:function(){this.tableData=window.MOCK_DATA_LIST.slice(0,6)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})}},d=u,m=n("2877"),v=Object(m["a"])(d,a,l,!1,null,null,null);t["default"]=v.exports},f924:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Import 完整引入")]),n("pre",[e._v("    "),n("code",{staticClass:"shell"},[e._v("\n      npm install xe-utils vxe-table\n    ")]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v("\n      import Vue from 'vue'\n      import 'xe-utils'\n      import VXETable from 'vxe-table'\n      import 'vxe-table/lib/index.css'\n\n      Vue.use(VXETable)\n    ")]),e._v("\n  ")]),n("h2",[e._v("Import on demand 按需引入")]),n("p",{staticClass:"tip"},[n("a",{staticClass:"link",attrs:{href:"https://github.com/xuliangzhan/vxe-table-demo",target:"_blank"}},[e._v("查看项目")]),n("br"),e._v("借助插件 "),n("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/babel-plugin-import",target:"_blank"}},[e._v("babel-plugin-import")]),e._v(" 可以实现按需加载模块，减少文件体积。然后在文件 .babelrc 中配置")]),n("pre",[e._v("    "),n("code",{staticClass:"shell"},[e._v("\n      npm install babel-plugin-import -D\n    ")]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v('\n      {\n        "plugins": [\n          [\n            "import",\n            {\n              "libraryName": "vxe-table",\n              "style": true // 样式是否也按需加载\n            }\n          ]\n        ]\n      }\n    ')]),e._v("\n  ")]),n("p",{staticClass:"tip"},[e._v("最后这样按需引入模块，就可以减小体积了")]),n("pre",[e._v("    "),n("code",{staticClass:"javascript"},[e._v("\n      import XEUtils from 'xe-utils/methods/xe-utils'\n      import {\n        VXETable,\n        Icon,\n        Table,\n        Column,\n        Header,\n        Body,\n        Footer,\n        Filter,\n        Loading,\n        Tooltip,\n        Grid,\n        Menu,\n        Toolbar,\n        Pager,\n        Checkbox,\n        Radio,\n        Input,\n        Button,\n        Modal,\n        Export,\n        Keyboard,\n        Resize\n      } from 'vxe-table'\n      import zhCNLocat from 'vxe-table/lib/locale/lang/zh-CN'\n      import dependencies from 'vxe-table/lib/utils/dependencies'\n\n      // 按需导入依赖函数库\n      XEUtils.mixin(dependencies)\n\n      Vue.use(Icon)\n      Vue.use(Table)\n      Vue.use(Column)\n      Vue.use(Header)\n      Vue.use(Body)\n      Vue.use(Footer)\n      Vue.use(Filter)\n      Vue.use(Loading)\n      Vue.use(Tooltip)\n      Vue.use(Grid)\n      Vue.use(Menu)\n      Vue.use(Toolbar)\n      Vue.use(Pager)\n      Vue.use(Checkbox)\n      Vue.use(Radio)\n      Vue.use(Input)\n      Vue.use(Button)\n      Vue.use(Modal)\n      Vue.use(Export)\n      Vue.use(Keyboard)\n      Vue.use(Resize)\n\n      // 按需加载的方式默认是不带国际化的，需要自行导入\n      VXETable.setup({\n        i18n: (key, value) => VXETable.t(zhCNLocat, key)\n      })\n    ")]),e._v("\n  ")])])}],r=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),s=n.n(r),i={mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){s.a.highlightBlock(e)})}},o=i,c=n("2877"),u=Object(c["a"])(o,a,l,!1,null,null,null);t["default"]=u.exports}}]);