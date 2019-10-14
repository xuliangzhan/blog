(window["webpackJsonpVXETable"]=window["webpackJsonpVXETable"]||[]).push([["module"],{1906:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("按钮")]),n("p",{staticClass:"tip"},[e._v("查看 "),n("router-link",{staticClass:"link",attrs:{to:{name:"VXEAPI",params:{name:"button"}}}},[e._v("API")])],1),n("p",[n("vxe-button",{attrs:{type:"text"}},[e._v("文本按钮")]),n("vxe-button",{attrs:{type:"text",disabled:""}},[e._v("禁用")]),n("vxe-button",{attrs:{type:"text",loading:""}},[e._v("加载中")]),n("vxe-button",{attrs:{type:"text"},scopedSlots:e._u([{key:"dropdowns",fn:function(){return[n("vxe-button",{attrs:{type:"text"}},[e._v("下拉按钮1")]),n("vxe-button",{attrs:{type:"text"}},[e._v("下拉按钮2")]),n("vxe-button",{attrs:{type:"text"}},[e._v("下拉按钮3")])]},proxy:!0}])},[[e._v("下拉按钮")]],2)],1),n("p",[n("vxe-button",[e._v("普通按钮")]),n("vxe-button",{attrs:{disabled:""}},[e._v("禁用")]),n("vxe-button",{attrs:{loading:""}},[e._v("加载中")]),n("vxe-button",{attrs:{type:"primary"}},[e._v("主要按钮")]),n("vxe-button",{attrs:{type:"primary",loading:""}},[e._v("加载中")]),n("vxe-button",{scopedSlots:e._u([{key:"dropdowns",fn:function(){return[n("vxe-button",[e._v("下拉按钮1")]),n("vxe-button",[e._v("下拉按钮2")]),n("vxe-button",[e._v("下拉按钮3")])]},proxy:!0}])},[[e._v("下拉按钮")]],2)],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n  ")])])},o=[],l=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),u=n.n(l),s={data:function(){return{demoCodes:['\n        <p>\n          <vxe-button type="text">文本按钮</vxe-button>\n          <vxe-button type="text" disabled>禁用</vxe-button>\n          <vxe-button type="text" loading>加载中</vxe-button>\n          <vxe-button type="text">\n            <template>下拉按钮</template>\n            <template v-slot:dropdowns>\n              <vxe-button type="text">下拉按钮1</vxe-button>\n              <vxe-button type="text">下拉按钮2</vxe-button>\n              <vxe-button type="text">下拉按钮3</vxe-button>\n            </template>\n          </vxe-button>\n        </p>\n\n        <p>\n          <vxe-button>普通按钮</vxe-button>\n          <vxe-button disabled>禁用</vxe-button>\n          <vxe-button loading>加载中</vxe-button>\n          <vxe-button type="primary">主要按钮</vxe-button>\n          <vxe-button type="primary" loading>加载中</vxe-button>\n          <vxe-button>\n            <template>下拉按钮</template>\n            <template v-slot:dropdowns>\n              <vxe-button>下拉按钮1</vxe-button>\n              <vxe-button>下拉按钮2</vxe-button>\n              <vxe-button>下拉按钮3</vxe-button>\n            </template>\n          </vxe-button>\n        </p>\n        ']}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){u.a.highlightBlock(e)}))}},r=s,i=n("2877"),c=Object(i["a"])(r,a,o,!1,null,null,null);t["default"]=c.exports},"1b04":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("按钮")]),n("p",{staticClass:"tip"},[e._v("查看 "),n("router-link",{staticClass:"link",attrs:{to:{name:"VXEAPI",params:{name:"radio"}}}},[e._v("API")])],1),n("p",[n("vxe-radio",{attrs:{name:"n1",label:"1"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}},[e._v("单选1")]),n("vxe-radio",{attrs:{name:"n1",label:"2"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}},[e._v("单选2")]),n("vxe-radio",{attrs:{name:"n1",label:"3"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}},[e._v("单选3")])],1),n("p",[n("vxe-radio",{attrs:{name:"n2",label:"1"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}},[e._v("单选1")]),n("vxe-radio",{attrs:{name:"n2",label:"2",disabled:""},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}},[e._v("禁用2")]),n("vxe-radio",{attrs:{name:"n2",label:"3"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}},[e._v("单选3")])],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])])},o=[],l=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),u=n.n(l),s={data:function(){return{value1:"1",value2:"2",demoCodes:['\n        <p>\n          <vxe-radio name="n1" v-model="value1" label="1">单选1</vxe-radio>\n          <vxe-radio name="n1" v-model="value1" label="2">单选2</vxe-radio>\n          <vxe-radio name="n1" v-model="value1" label="3">单选3</vxe-radio>\n        </p>\n\n        <p>\n          <vxe-radio name="n2" v-model="value2" label="1">单选1</vxe-radio>\n          <vxe-radio name="n2" v-model="value2" label="2" disabled>禁用2</vxe-radio>\n          <vxe-radio name="n2" v-model="value2" label="3">单选3</vxe-radio>\n        </p>\n        ',"\n        export default {\n          data () {\n            return {\n              value1: '1',\n              value2: '2'\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){u.a.highlightBlock(e)}))}},r=s,i=n("2877"),c=Object(i["a"])(r,a,o,!1,null,null,null);t["default"]=c.exports},2107:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("模态窗口")]),n("p",{staticClass:"tip"},[e._v("查看 "),n("router-link",{staticClass:"link",attrs:{to:{name:"VXEAPI",params:{name:"modal"}}}},[e._v("API")])],1),n("p",[n("vxe-button",{on:{click:function(t){return e.$XModal.message({message:"消息提示"})}}},[e._v("消息提示框")]),n("vxe-button",{on:{click:function(t){return e.$XModal.message({message:"成功消息提示",status:"success"})}}},[e._v("成功消息提示框")]),n("vxe-button",{on:{click:function(t){return e.$XModal.message({message:"失败消息提示",status:"error"})}}},[e._v("失败消息提示框")]),n("vxe-button",{on:{click:function(t){return e.$XModal.message({message:"不允许重复点击",id:"unique1"})}}},[e._v("不允许重复点击")])],1),n("p",[n("vxe-button",{on:{click:function(t){return e.$XModal.alert("基本提示框","标题1")}}},[e._v("基本提示框")]),n("vxe-button",{on:{click:function(t){return e.$XModal.alert({message:"成功提示框",status:"success"})}}},[e._v("成功提示框")]),n("vxe-button",{on:{click:function(t){return e.$XModal.alert({message:"失败提示框",title:"app.body.msg.error",status:"error"})}}},[e._v("失败提示框")]),n("vxe-button",{on:{click:function(t){return e.$XModal.confirm("您确定要删除吗？")}}},[e._v("确认提示框")])],1),n("p",[n("vxe-button",{on:{click:function(t){return e.$XModal.alert({message:"点击遮罩层可以关闭",maskClosable:!0})}}},[e._v("点击遮罩层可以关闭")]),n("vxe-button",{on:{click:function(t){return e.$XModal.alert({message:"按 Esc 键可以关闭",escClosable:!0})}}},[e._v("按 Esc 键可以关闭")]),n("vxe-button",{on:{click:function(t){return e.$XModal.alert({message:"锁界面不要遮罩层",mask:!1})}}},[e._v("锁界面不要遮罩层")]),n("vxe-button",{on:{click:function(t){return e.$XModal.alert({message:"不锁界面不要遮罩层",lockView:!1,mask:!1})}}},[e._v("不锁界面不要遮罩层")])],1),n("p",[n("vxe-button",{on:{click:function(t){e.value1=!e.value1}}},[e._v("基本窗口")]),n("vxe-modal",{attrs:{"lock-scroll":!1,"show-footer":""},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}},[[n("vxe-table",{attrs:{"show-overflow":"",height:"auto","sync-resize":e.value1,data:e.tableData}},[n("vxe-table-column",{attrs:{type:"index",width:"60"}}),n("vxe-table-column",{attrs:{field:"name",title:"app.body.label.name"}}),n("vxe-table-column",{attrs:{field:"sex",title:"app.body.label.sex"}}),n("vxe-table-column",{attrs:{field:"age",title:"app.body.label.age"}})],1)]],2),n("vxe-button",{on:{click:function(t){e.value2=!e.value2}}},[e._v("拖动窗口调整大小")]),n("vxe-modal",{attrs:{resize:""},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}},[[n("p",{staticStyle:{color:"red"}},[e._v("按住头部移动！！！！！！！！！！！！！！！")]),n("p",{staticStyle:{color:"blue"}},[e._v("按住左边距拖动！！！！！！！！！！！！！！！")]),n("p",{staticStyle:{color:"red"}},[e._v("按住右边距拖动！！！！！！！！！！！！！！！")]),n("p",{staticStyle:{color:"blue"}},[e._v("按住底边距拖动！！！！！！！！！！！！！！！")]),n("p",{staticStyle:{color:"blue"}},[e._v("按住左下角拖动 ！！！！！！！！！！！！！！！")]),n("p",{staticStyle:{color:"blue"}},[e._v("按住右下角拖动！！！！！！！！！！！！！！！")])]],2),n("vxe-button",{on:{click:function(t){e.value3=!e.value3}}},[e._v("缩放表格的窗口")]),n("vxe-modal",{attrs:{title:"缩放表格的窗口",width:"800",height:"400",resize:""},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}},[[n("vxe-table",{attrs:{border:"",resizable:"","show-overflow":"","auto-resize":"",height:"auto","sync-resize":e.value3,data:e.tableData}},[n("vxe-table-column",{attrs:{type:"index",width:"60"}}),n("vxe-table-column",{attrs:{field:"name",title:"app.body.label.name"}}),n("vxe-table-column",{attrs:{field:"sex",title:"app.body.label.sex"}}),n("vxe-table-column",{attrs:{field:"age",title:"app.body.label.age"}})],1)]],2),n("vxe-button",{on:{click:function(t){e.value4=!e.value4}}},[e._v("完整功能的窗口")]),n("vxe-modal",{attrs:{title:"完整功能的窗口",width:"800",height:"400","min-width":"400","min-height":"320",resize:""},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}},[[n("vxe-grid",{attrs:{border:"",resizable:"","show-overflow":"","auto-resize":"",height:"auto","sync-resize":e.value4,"pager-config":e.tablePage,"proxy-config":e.tableProxy,columns:e.tableColumn,toolbar:e.tableToolbar}})]],2)],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])])},o=[],l=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),u=n.n(l),s={data:function(){var e=this;return{value1:!1,value2:!1,value3:!1,value4:!1,tablePage:{pageSize:10},tableProxy:{props:{result:"data.result",total:"data.page.total"},ajax:{query:function(t){var n=t.page;return e.$ajax.doGet("/api/user/page/list/".concat(n.pageSize,"/").concat(n.currentPage))}}},tableToolbar:{buttons:[{code:"myBtn1",name:"按钮1"},{code:"myBtn2",name:"按钮2"}],refresh:!0,setting:!0},tableColumn:[{type:"selection",width:50},{type:"index",width:60},{field:"name",title:"Name"},{field:"nickname",title:"Nickname"},{field:"role",title:"Role"},{field:"describe",title:"Describe"}],demoCodes:['\n        <p>\n          <vxe-button @click="$XModal.message({ message: \'消息提示\' })">消息提示框</vxe-button>\n          <vxe-button @click="$XModal.message({ message: \'成功消息提示\', status: \'success\' })">成功消息提示框</vxe-button>\n          <vxe-button @click="$XModal.message({ message: \'失败消息提示\', status: \'error\' })">失败消息提示框</vxe-button>\n          <vxe-button @click="$XModal.message({ message: \'不允许重复点击\', id: \'unique1\' })">不允许重复点击</vxe-button>\n        </p>\n\n        <p>\n          <vxe-button @click="$XModal.alert(\'基本提示框\', \'标题1\')">基本提示框</vxe-button>\n          <vxe-button @click="$XModal.alert({ message: \'成功提示框\', status: \'success\' })">成功提示框</vxe-button>\n          <vxe-button @click="$XModal.alert({ message: \'失败提示框\', title: \'app.body.msg.error\', status: \'error\' })">失败提示框</vxe-button>\n          <vxe-button @click="$XModal.confirm(\'您确定要删除吗？\')">确认提示框</vxe-button>\n        </p>\n\n        <p>\n          <vxe-button @click="$XModal.alert({ message: \'点击遮罩层可以关闭\', maskClosable: true })">点击遮罩层可以关闭</vxe-button>\n          <vxe-button @click="$XModal.alert({ message: \'按 Esc 键可以关闭\', escClosable: true })">按 Esc 键可以关闭</vxe-button>\n          <vxe-button @click="$XModal.alert({ message: \'锁界面不要遮罩层\', mask: false })">锁界面不要遮罩层</vxe-button>\n          <vxe-button @click="$XModal.alert({ message: \'不锁界面不要遮罩层\', lockView: false, mask: false })">不锁界面不要遮罩层</vxe-button>\n        </p>\n\n        <p>\n          <vxe-button @click="value1 = !value1">基本窗口</vxe-button>\n          <vxe-modal v-model="value1" :lock-scroll="false" show-footer>\n            <template>\n              <vxe-table\n                show-overflow\n                height="auto"\n                :sync-resize="value1"\n                :data="tableData">\n                <vxe-table-column type="index" width="60"></vxe-table-column>\n                <vxe-table-column field="name" title="app.body.label.name"></vxe-table-column>\n                <vxe-table-column field="sex" title="app.body.label.sex"></vxe-table-column>\n                <vxe-table-column field="age" title="app.body.label.age"></vxe-table-column>\n              </vxe-table>\n            </template>\n          </vxe-modal>\n\n          <vxe-button @click="value2 = !value2">拖动窗口调整大小</vxe-button>\n          <vxe-modal v-model="value2" resize>\n            <template>\n              <p style="color: red">按住头部移动！！！！！！！！！！！！！！！</p>\n              <p style="color: blue">按住左边距拖动！！！！！！！！！！！！！！！</p>\n              <p style="color: red">按住右边距拖动！！！！！！！！！！！！！！！</p>\n              <p style="color: blue">按住底边距拖动！！！！！！！！！！！！！！！</p>\n              <p style="color: blue">按住左下角拖动 ！！！！！！！！！！！！！！！</p>\n              <p style="color: blue">按住右下角拖动！！！！！！！！！！！！！！！</p>\n            </template>\n          </vxe-modal>\n\n          <vxe-button @click="value3 = !value3">缩放表格的窗口</vxe-button>\n          <vxe-modal v-model="value3" title="缩放表格的窗口" width="800" height="400" resize>\n            <template>\n              <vxe-table\n                border\n                resizable\n                show-overflow\n                auto-resize\n                height="auto"\n                :sync-resize="value3"\n                :data="tableData">\n                <vxe-table-column type="index" width="60"></vxe-table-column>\n                <vxe-table-column field="name" title="app.body.label.name"></vxe-table-column>\n                <vxe-table-column field="sex" title="app.body.label.sex"></vxe-table-column>\n                <vxe-table-column field="age" title="app.body.label.age"></vxe-table-column>\n              </vxe-table>\n            </template>\n          </vxe-modal>\n\n          <vxe-button @click="value4 = !value4">完整功能的窗口</vxe-button>\n          <vxe-modal v-model="value4" title="完整功能的窗口" width="800" height="400" min-width="400" min-height="320" resize>\n            <template>\n              <vxe-grid\n                border\n                resizable\n                show-overflow\n                auto-resize\n                height="auto"\n                :sync-resize="value4"\n                :pager-config="tablePage"\n                :proxy-config="tableProxy"\n                :columns="tableColumn"\n                :toolbar="tableToolbar"></vxe-grid>\n            </template>\n          </vxe-modal>\n        </p>\n        ',"\n        export default {\n          data () {\n            return {\n              value1: false,\n              value2: false,\n              value3: false,\n              value4: false,\n              tablePage: {\n                pageSize: 10\n              },\n              tableProxy: {\n                props: {\n                  result: 'data.result',\n                  total: 'data.page.total'\n                },\n                ajax: {\n                  query: ({ page }) => this.$ajax.doGet(`/api/user/page/list/${page.pageSize}/${page.currentPage}`)\n                }\n              },\n              tableToolbar: {\n                buttons: [\n                  { code: 'myBtn1', name: '按钮1' },\n                  { code: 'myBtn2', name: '按钮2' }\n                ],\n                refresh: true,\n                setting: true\n              },\n              tableColumn: [\n                { type: 'selection', width: 50 },\n                { type: 'index', width: 60 },\n                { field: 'name', title: 'Name' },\n                { field: 'nickname', title: 'Nickname' },\n                { field: 'role', title: 'Role' },\n                { field: 'describe', title: 'Describe' }\n              ]\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 8)\n          }\n        }\n        "]}},created:function(){this.tableData=window.MOCK_DATA_LIST.slice(0,8)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){u.a.highlightBlock(e)}))}},r=s,i=n("2877"),c=Object(i["a"])(r,a,o,!1,null,null,null);t["default"]=c.exports},"41f6":function(e,t,n){},"48b7":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("图标")]),n("p",{staticClass:"tip"},[e._v("内置轻量级的 icon 图标，还可以通过修改 "),n("router-link",{staticClass:"link",attrs:{to:{name:"StartIcons"}}},[e._v("icon")]),e._v(" 替换默认的")],1),n("ul",{staticClass:"icon-list"},e._l(e.list,(function(t){return n("li",{key:t.icon,attrs:{title:"点击复制内容"},on:{click:function(n){return e.copyEvent(t)}}},[n("i",{class:t.icon}),n("div",{staticClass:"title"},[e._v(e._s(t.icon))])])})),0),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n  ")])])},o=[],l=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),u=n.n(l),s=n("f11d"),r={data:function(){return{list:[{icon:"vxe-icon--caret-top"},{icon:"vxe-icon--caret-bottom"},{icon:"vxe-icon--caret-left"},{icon:"vxe-icon--caret-right"},{icon:"vxe-icon--arrow-top"},{icon:"vxe-icon--arrow-bottom"},{icon:"vxe-icon--arrow-left"},{icon:"vxe-icon--arrow-right"},{icon:"vxe-icon--d-arrow-top"},{icon:"vxe-icon--d-arrow-bottom"},{icon:"vxe-icon--d-arrow-left"},{icon:"vxe-icon--d-arrow-right"},{icon:"vxe-icon--menu"},{icon:"vxe-icon--edit-outline"},{icon:"vxe-icon--more"},{icon:"vxe-icon--close"},{icon:"vxe-icon--refresh"},{icon:"vxe-icon--refresh roll"},{icon:"vxe-icon--funnel"},{icon:"vxe-icon--question"},{icon:"vxe-icon--info"},{icon:"vxe-icon--warning"},{icon:"vxe-icon--success"},{icon:"vxe-icon--error"},{icon:"vxe-icon--zoomin"},{icon:"vxe-icon--zoomout"}],demoCodes:['\n        <i class="vxe-icon--caret-top"></i>\n        ']}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){u.a.highlightBlock(e)}))},methods:{copyEvent:function(e){var t=e.icon;s["a"].copy(t)&&this.$XModal.message({message:"已复制到剪贴板！",status:"success"})}}},i=r,c=(n("e167"),n("2877")),v=Object(c["a"])(i,a,o,!1,null,"4592054e",null);t["default"]=v.exports},"53e7":function(e,t,n){"use strict";var a=n("f7fa"),o=n.n(a);o.a},"8e22":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("工具栏")]),n("p",{staticClass:"tip"},[e._v("查看 "),n("router-link",{staticClass:"link",attrs:{to:{name:"VXEAPI",params:{name:"toolbar"}}}},[e._v("API")])],1),n("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",[e._v("按钮1")]),n("vxe-button",[e._v("按钮2")]),n("vxe-button",[e._v("按钮3")]),n("vxe-button",{scopedSlots:e._u([{key:"dropdowns",fn:function(){return[n("vxe-button",[e._v("按钮1")]),n("vxe-button",[e._v("按钮2")]),n("vxe-button",[e._v("按钮3")])]},proxy:!0}])},[[e._v("下拉按钮")]],2)]},proxy:!0}])}),n("vxe-toolbar",{attrs:{refresh:{query:e.findList}},scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",[e._v("按钮1")]),n("vxe-button",[e._v("按钮2")]),n("vxe-button",[e._v("按钮3")]),n("vxe-button",{scopedSlots:e._u([{key:"dropdowns",fn:function(){return[n("vxe-button",[e._v("按钮1")]),n("vxe-button",[e._v("按钮2")]),n("vxe-button",[e._v("按钮3")])]},proxy:!0}])},[[e._v("下拉按钮")]],2)]},proxy:!0},{key:"tools",fn:function(){return[n("i",{staticClass:"vxe-icon--question tool-btn"}),n("i",{staticClass:"vxe-icon--funnel tool-btn"})]},proxy:!0}])}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),n("code",{staticClass:"css"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")])],1)},o=[],l=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),u=n.n(l),s={data:function(){return{loading:!1,demoCodes:['\n        <vxe-toolbar>\n          <template v-slot:buttons>\n            <vxe-button>按钮1</vxe-button>\n            <vxe-button>按钮2</vxe-button>\n            <vxe-button>按钮3</vxe-button>\n            <vxe-button>\n              <template>下拉按钮</template>\n              <template v-slot:dropdowns>\n                <vxe-button>按钮1</vxe-button>\n                <vxe-button>按钮2</vxe-button>\n                <vxe-button>按钮3</vxe-button>\n              </template>\n            </vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-toolbar :refresh="{ query: findList }">\n          <template v-slot:buttons>\n            <vxe-button>按钮1</vxe-button>\n            <vxe-button>按钮2</vxe-button>\n            <vxe-button>按钮3</vxe-button>\n            <vxe-button>\n              <template>下拉按钮</template>\n              <template v-slot:dropdowns>\n                <vxe-button>按钮1</vxe-button>\n                <vxe-button>按钮2</vxe-button>\n                <vxe-button>按钮3</vxe-button>\n              </template>\n            </vxe-button>\n          </template>\n          <template v-slot:tools>\n            <i class="vxe-icon--question tool-btn"></i>\n            <i class="vxe-icon--funnel tool-btn"></i>\n          </template>\n        </vxe-toolbar>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false\n            }\n          },\n          methods: {\n            findList () {\n              this.loading = true\n              return new Promise(resolve => {\n                this.loading = false\n                this.$XModal.message({ message: '刷新成功！', status: 'success' })\n                setTimeout(resolve, 800)\n              })\n            }\n          }\n        }\n        ","\n        .tool-btn {\n          font-size: 20px;\n          margin: 6px 10px 0 0;\n          cursor: pointer;\n        }\n        .tool-btn:hover {\n          color: #409eff;\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){u.a.highlightBlock(e)}))},methods:{findList:function(){var e=this;return this.loading=!0,new Promise((function(t){e.loading=!1,e.$XModal.message({message:"刷新成功！",status:"success"}),setTimeout(t,800)}))}}},r=s,i=(n("53e7"),n("2877")),c=Object(i["a"])(r,a,o,!1,null,"ca75b4ce",null);t["default"]=c.exports},ba0c:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("按钮")]),n("p",{staticClass:"tip"},[e._v("查看 "),n("router-link",{staticClass:"link",attrs:{to:{name:"VXEAPI",params:{name:"checkbox"}}}},[e._v("API")])],1),n("p",[n("vxe-checkbox",{attrs:{indeterminate:""}},[e._v("不确定选项")])],1),n("p",[n("vxe-checkbox",{model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}},[e._v("复选1")]),n("vxe-checkbox",{attrs:{disabled:""},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}},[e._v("复选2")]),n("vxe-checkbox",[e._v("复选3")])],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])])},o=[],l=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),u=n.n(l),s={data:function(){return{value1:!0,value2:!0,demoCodes:['\n        <p>\n          <vxe-checkbox indeterminate>不确定选项</vxe-checkbox>\n        </p>\n\n        <p>\n          <vxe-checkbox v-model="value1">复选1</vxe-checkbox>\n          <vxe-checkbox v-model="value2" disabled>复选2</vxe-checkbox>\n          <vxe-checkbox>复选3</vxe-checkbox>\n        </p>\n        ',"\n        export default {\n          data () {\n            return {\n              value1: true,\n              value2: true\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){u.a.highlightBlock(e)}))}},r=s,i=n("2877"),c=Object(i["a"])(r,a,o,!1,null,null,null);t["default"]=c.exports},d567:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("输入框")]),n("p",{staticClass:"tip"},[e._v("查看 "),n("router-link",{staticClass:"link",attrs:{to:{name:"VXEAPI",params:{name:"input"}}}},[e._v("API")])],1),n("p",[n("vxe-input",{attrs:{placeholder:"请输入内容"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),n("p",[n("vxe-input",{attrs:{placeholder:"请输入内容",disabled:""},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),n("p",[n("vxe-textarea",{attrs:{placeholder:"请输入内容"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),n("p",[n("vxe-textarea",{attrs:{placeholder:"请输入内容",disabled:""},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])])},o=[],l=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),u=n.n(l),s={data:function(){return{value1:"",value2:"",value3:"",value4:"",demoCodes:['\n        <p>\n          <vxe-input v-model="value1" placeholder="请输入内容"></vxe-input>\n        </p>\n\n        <p>\n          <vxe-input v-model="value2" placeholder="请输入内容" disabled></vxe-input>\n        </p>\n\n        <p>\n          <vxe-textarea v-model="value3" placeholder="请输入内容"></vxe-textarea>\n        </p>\n\n        <p>\n          <vxe-textarea v-model="value4" placeholder="请输入内容" disabled></vxe-textarea>\n        </p>\n        ',"\n        export default {\n          data () {\n            return {\n              value1: '',\n              value2: '',\n              value3: '',\n              value4: ''\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){u.a.highlightBlock(e)}))}},r=s,i=n("2877"),c=Object(i["a"])(r,a,o,!1,null,null,null);t["default"]=c.exports},de0f:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("分页")]),n("p",{staticClass:"tip"},[e._v("查看 "),n("router-link",{staticClass:"link",attrs:{to:{name:"VXEAPI",params:{name:"pager"}}}},[e._v("API")])],1),n("vxe-pager",{attrs:{align:"left","current-page":e.page1.currentPage,"page-size":e.page1.pageSize,total:e.page1.totalResult,layouts:["JumpNumber"]},on:{"update:currentPage":function(t){return e.$set(e.page1,"currentPage",t)},"update:current-page":function(t){return e.$set(e.page1,"currentPage",t)},"update:pageSize":function(t){return e.$set(e.page1,"pageSize",t)},"update:page-size":function(t){return e.$set(e.page1,"pageSize",t)}}}),n("vxe-pager",{attrs:{align:"left","current-page":e.page2.currentPage,"page-size":e.page2.pageSize,total:e.page2.totalResult,layouts:["Sizes","PrevPage","JumpNumber","NextPage"]},on:{"update:currentPage":function(t){return e.$set(e.page2,"currentPage",t)},"update:current-page":function(t){return e.$set(e.page2,"currentPage",t)},"update:pageSize":function(t){return e.$set(e.page2,"pageSize",t)},"update:page-size":function(t){return e.$set(e.page2,"pageSize",t)}}}),n("vxe-pager",{attrs:{"current-page":e.page3.currentPage,"page-size":e.page3.pageSize,total:e.page3.totalResult,layouts:["PrevJump","PrevPage","Jump","PageCount","NextPage","NextJump","Sizes","Total"]},on:{"update:currentPage":function(t){return e.$set(e.page3,"currentPage",t)},"update:current-page":function(t){return e.$set(e.page3,"currentPage",t)},"update:pageSize":function(t){return e.$set(e.page3,"pageSize",t)},"update:page-size":function(t){return e.$set(e.page3,"pageSize",t)}}}),n("vxe-pager",{attrs:{"current-page":e.page4.currentPage,"page-size":e.page4.pageSize,total:e.page4.totalResult,layouts:["PrevJump","PrevPage","Number","NextPage","NextJump","Sizes","FullJump","Total"]},on:{"update:currentPage":function(t){return e.$set(e.page4,"currentPage",t)},"update:current-page":function(t){return e.$set(e.page4,"currentPage",t)},"update:pageSize":function(t){return e.$set(e.page4,"pageSize",t)},"update:page-size":function(t){return e.$set(e.page4,"pageSize",t)}}}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},o=[],l=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),u=n.n(l),s={data:function(){return{page1:{currentPage:1,pageSize:10,totalResult:200},page2:{currentPage:1,pageSize:10,totalResult:200},page3:{currentPage:1,pageSize:10,totalResult:200},page4:{currentPage:1,pageSize:10,totalResult:300},value2:"",demoCodes:["\n        <vxe-pager\n          align=\"left\"\n          :current-page.sync=\"page1.currentPage\"\n          :page-size.sync=\"page1.pageSize\"\n          :total=\"page1.totalResult\"\n          :layouts=\"['JumpNumber']\">\n        </vxe-pager>\n\n        <vxe-pager\n          align=\"left\"\n          :current-page.sync=\"page2.currentPage\"\n          :page-size.sync=\"page2.pageSize\"\n          :total=\"page2.totalResult\"\n          :layouts=\"['Sizes', 'PrevPage', 'JumpNumber', 'NextPage']\">\n        </vxe-pager>\n\n        <vxe-pager\n          :current-page.sync=\"page3.currentPage\"\n          :page-size.sync=\"page3.pageSize\"\n          :total=\"page3.totalResult\"\n          :layouts=\"['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total']\">\n        </vxe-pager>\n\n        <vxe-pager\n          :current-page.sync=\"page4.currentPage\"\n          :page-size.sync=\"page4.pageSize\"\n          :total=\"page4.totalResult\"\n          :layouts=\"['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total']\">\n        </vxe-pager>\n        ","\n        export default {\n          data () {\n            return {\n              page1: {\n                currentPage: 1,\n                pageSize: 10,\n                totalResult: 200\n              },\n              page2: {\n                currentPage: 1,\n                pageSize: 10,\n                totalResult: 200\n              },\n              page3: {\n                currentPage: 1,\n                pageSize: 10,\n                totalResult: 200\n              },\n              page4: {\n                currentPage: 1,\n                pageSize: 10,\n                totalResult: 300\n              }\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){u.a.highlightBlock(e)}))}},r=s,i=n("2877"),c=Object(i["a"])(r,a,o,!1,null,null,null);t["default"]=c.exports},e167:function(e,t,n){"use strict";var a=n("41f6"),o=n.n(a);o.a},edda:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("文字提示")]),n("p",{staticClass:"tip"},[e._v("查看 "),n("router-link",{staticClass:"link",attrs:{to:{name:"VXEAPI",params:{name:"tooltip"}}}},[e._v("API")])],1),n("p",[n("vxe-tooltip",{attrs:{content:"我是提示内容"}},[n("a",{staticClass:"link"},[e._v("文字提示")])])],1),n("p",[n("vxe-tooltip",{attrs:{content:"除了点击之外不会自动消息",trigger:"click"}},[n("vxe-button",[e._v("点击触发")])],1),n("vxe-tooltip",{attrs:{content:"hover 提示内容 "}},[n("vxe-button",[e._v("Hover 触发")])],1)],1),n("p",[n("vxe-tooltip",{attrs:{content:"自定义提示内容",trigger:"manual"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}},[n("vxe-button",{on:{mouseenter:function(t){e.value1=!0},mouseleave:function(t){e.value1=!1}}},[e._v("手动模式")])],1)],1),n("p",[n("vxe-tooltip",{ref:"myTip"}),n("vxe-button",{on:{mouseenter:function(t){return e.$refs.myTip.toVisible(t.target,"自定义提示内容")},mouseleave:function(t){return e.$refs.myTip.close()}}},[e._v("高性能模式，只创建一个实例")])],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])])},o=[],l=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),u=n.n(l),s={data:function(){return{value1:!1,demoCodes:['\n        <p>\n          <vxe-tooltip content="我是提示内容">\n            <a class="link">文字提示</a>\n          </vxe-tooltip>\n        </p>\n\n        <p>\n          <vxe-tooltip content="除了点击之外不会自动消息" trigger="click">\n            <vxe-button>点击触发</vxe-button>\n          </vxe-tooltip>\n          <vxe-tooltip content="hover 提示内容 ">\n            <vxe-button>Hover 触发</vxe-button>\n          </vxe-tooltip>\n        </p>\n\n        <p>\n          <vxe-tooltip v-model="value1" content="自定义提示内容" trigger="manual">\n            <vxe-button @mouseenter="value1 = true" @mouseleave="value1 = false">手动模式</vxe-button>\n          </vxe-tooltip>\n        </p>\n\n        <p>\n          <vxe-tooltip ref="myTip"></vxe-tooltip>\n          <vxe-button @mouseenter="$refs.myTip.toVisible($event.target, \'自定义提示内容\')" @mouseleave="$refs.myTip.close()">高性能模式，只创建一个实例</vxe-button>\n        </p>\n        ',"\n        export default {\n          data () {\n            return {\n              value1: false\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){u.a.highlightBlock(e)}))}},r=s,i=n("2877"),c=Object(i["a"])(r,a,o,!1,null,null,null);t["default"]=c.exports},f11d:function(e,t,n){"use strict";var a=window.document,o=a.createElement("textarea");function l(e){var t=o.style;o.id="$XECopy",t.width="48px",t.height="24px",t.position="fixed",t.zIndex="0",t.left="-500px",t.top="-500px",o.value=null===e||void 0===e?"":""+e,o.parentNode||a.body.appendChild(o)}function u(e){return o.focus(),o.select(),o.setSelectionRange(0,o.value.length),a.execCommand("copy",!!e)}function s(e){var t=!1;try{l(e),t=u(),t||(t=u(1))}catch(n){}return t}s.copy=s,t["a"]=s},f7fa:function(e,t,n){}}]);