(window["webpackJsonpVXETable"]=window["webpackJsonpVXETable"]||[]).push([["tree"],{"07c0":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("树表格与展开行同时使用，非常简单就能实现很复杂的树形展开行")]),n("vxe-table",{attrs:{border:"",resizable:"","tree-config":{children:"children"},data:e.tableData},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{field:"name",title:"Name","tree-node":""}}),n("vxe-table-column",{attrs:{type:"expand",title:"Details",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;t.rowIndex;return[n("ul",[n("li",[n("span",[e._v("ID：")]),n("span",[e._v(e._s(a.id))])]),n("li",[n("span",[e._v("Name：")]),n("span",[e._v(e._s(a.name))])]),n("li",[n("span",[e._v("Date")]),n("span",[e._v(e._s(a.date))])])])]}}])}),n("vxe-table-column",{attrs:{field:"size",title:"Size"}}),n("vxe-table-column",{attrs:{field:"type",title:"Type"}}),n("vxe-table-column",{attrs:{field:"date",title:"Date"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[],i=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),o=n.n(i),r=n("c695"),c=n.n(r),s={data:function(){return{tableData:[],demoCodes:['\n        <vxe-table\n          border\n          resizable\n          :tree-config="{children: \'children\'}"\n          :data.sync="tableData">\n          <vxe-table-column field="name" title="Name" tree-node></vxe-table-column>\n          <vxe-table-column type="expand" width="60">\n            <template v-slot="{ row, rowIndex }">\n              <ul>\n                <li>\n                  <span>ID：</span>\n                  <span>{{ row.id }}</span>\n                </li>\n                <li>\n                  <span>Name：</span>\n                  <span>{{ row.name }}</span>\n                </li>\n                <li>\n                  <span>Date</span>\n                  <span>{{ row.date }}</span>\n                </li>\n              </ul>\n            </template>\n          </vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          }\n        }\n        "]}},created:function(){this.tableData=c.a.clone(window.MOCK_TREE_DATA_LIST,!0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){o.a.highlightBlock(e)})}},d=s,u=n("2877"),v=Object(u["a"])(d,a,l,!1,null,null,null);t["default"]=v.exports},"15b1":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("多选树表格")]),n("vxe-table",{attrs:{resizable:"","tree-config":{children:"children"},data:e.tableData},on:{"update:data":function(t){e.tableData=t},"select-change":e.selectChangeEvent}},[n("vxe-table-column",{attrs:{type:"selection",width:"120","tree-node":""}}),n("vxe-table-column",{attrs:{field:"name",title:"Name"}}),n("vxe-table-column",{attrs:{field:"size",title:"Size"}}),n("vxe-table-column",{attrs:{field:"type",title:"Type"}}),n("vxe-table-column",{attrs:{field:"date",title:"Date"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),n("p",[e._v("默认选中，通过指定 "),n("table-api-link",{attrs:{prop:"checkRowKeys"}}),e._v(" 设置默认选中的行")],1),n("vxe-table",{attrs:{resizable:"","row-id":"id",data:e.tableData,"tree-config":{children:"children"},"select-config":{labelField:"name",checkRowKeys:["122000","20000"]}},on:{"update:data":function(t){e.tableData=t},"select-change":e.selectChangeEvent}},[n("vxe-table-column",{attrs:{type:"selection",title:"Name",width:"180","tree-node":""}}),n("vxe-table-column",{attrs:{field:"size",title:"Size"}}),n("vxe-table-column",{attrs:{field:"type",title:"Type"}}),n("vxe-table-column",{attrs:{field:"date",title:"Date"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")]),n("p",[e._v("通过 "),n("table-api-link",{attrs:{prop:"checkStrictly"}}),e._v(" 设置父子节点不互相关联")],1),n("vxe-table",{attrs:{resizable:"",data:e.tableData,"tree-config":{children:"children"},"select-config":{checkStrictly:!0}},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{type:"selection",width:"120","tree-node":""}}),n("vxe-table-column",{attrs:{field:"name",title:"Name"}}),n("vxe-table-column",{attrs:{field:"size",title:"Size"}}),n("vxe-table-column",{attrs:{field:"type",title:"Type"}}),n("vxe-table-column",{attrs:{field:"date",title:"Date"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[5]))]),e._v("\n  ")])],1)},l=[],i=(n("6762"),n("2fdb"),n("5df3"),n("1c4c"),n("ac6a"),n("1487")),o=n.n(i),r=n("c695"),c=n.n(r),s={data:function(){return{tableData:[],demoCodes:['\n        <vxe-table\n          resizable\n          :tree-config="{children: \'children\'}"\n          :data.sync="tableData"\n          @select-change="selectChangeEvent">\n          <vxe-table-column type="selection" tree-node></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          },\n          methods: {\n            selectChangeEvent ({ selection }) {\n              console.info(`勾选${selection.length}个树形节点`, selection)\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          resizable\n          row-id="id"\n          :data.sync="tableData"\n          :tree-config="{children: \'children\'}"\n          :select-config="{labelField: \'name\', checkRowKeys: [\'122000\', \'20000\']}"\n          @select-change="selectChangeEvent">\n          <vxe-table-column type="selection" title="Name" width="180" tree-node></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          },\n          methods: {\n            selectChangeEvent ({ selection }) {\n              console.info(`勾选${selection.length}个树形节点`, selection)\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          resizable\n          :data.sync="tableData"\n          :tree-config="{children: \'children\'}"\n          :select-config="{checkStrictly: true}">\n          <vxe-table-column type="selection" width="120" tree-node></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          }\n        }\n        "]}},created:function(){this.tableData=c.a.clone(window.MOCK_TREE_DATA_LIST,!0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){o.a.highlightBlock(e)})},methods:{checkMethod:function(e){var t=e.row;return!["js","mp4"].includes(t.type)},selectChangeEvent:function(e){var t=e.selection;console.info("勾选".concat(t.length,"个树形节点"),t)}}},d=s,u=n("2877"),v=Object(u["a"])(d,a,l,!1,null,null,null);t["default"]=v.exports},"165f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("树表格，通过配置 "),n("table-api-link",{attrs:{prop:"tree-config"}}),e._v(" 和指定列 "),n("table-column-api-link",{attrs:{prop:"tree-node"}}),e._v(" 属性来开启树表格")],1),n("p",[e._v("还可以通过 "),n("table-api-link",{attrs:{prop:"trigger"}}),e._v(" 指定触发方式")],1),n("vxe-table",{attrs:{border:"",resizable:"","tree-config":{children:"children"},data:e.tableData},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{field:"name",title:"Name"}}),n("vxe-table-column",{attrs:{field:"size",title:"Size"}}),n("vxe-table-column",{attrs:{field:"type",title:"Type"}}),n("vxe-table-column",{attrs:{field:"date",title:"Date","tree-node":""}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),n("p",[e._v("默认展开所有树节点，通过 "),n("table-api-link",{attrs:{prop:"expand-config"}}),e._v(" 参数设置默认展开树节点")],1),n("vxe-table",{attrs:{data:e.tableData,"tree-config":{children:"children",expandAll:!0}},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{type:"index",width:"160",title:"序号","tree-node":""}}),n("vxe-table-column",{attrs:{field:"name",title:"Name"}}),n("vxe-table-column",{attrs:{field:"size",title:"Size"}}),n("vxe-table-column",{attrs:{field:"type",title:"Type"}}),n("vxe-table-column",{attrs:{field:"date",title:"Date"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")])],1)},l=[],i=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),o=n.n(i),r={data:function(){return{tableData:[],demoCodes:['\n        <vxe-table\n          border\n          resizable\n          :tree-config="{children: \'children\'}"\n          :data.sync="tableData">\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date" tree-node></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          }\n        }\n        ",'\n        <vxe-table\n          :data.sync="tableData"\n          :tree-config="{children: \'children\', expandAll: true}">\n          <vxe-table-column type="index" width="120" title="序号" tree-node></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          }\n        }\n        "]}},created:function(){this.tableData=window.MOCK_TREE_DATA_LIST.slice(0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){o.a.highlightBlock(e)})}},c=r,s=n("2877"),d=Object(s["a"])(c,a,l,!1,null,null,null);t["default"]=d.exports},5304:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("树表格的懒加载，通过配置 "),n("table-api-link",{attrs:{prop:"hasLazy"}}),e._v(" 和 "),n("table-api-link",{attrs:{prop:"lazyLoad"}}),e._v(" 加载方法来开启树形懒加载")],1),n("vxe-table",{attrs:{border:"",resizable:"","tree-config":{children:"children"},data:e.tableData},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{field:"name",title:"Name"}}),n("vxe-table-column",{attrs:{field:"size",title:"Size"}}),n("vxe-table-column",{attrs:{field:"type",title:"Type"}}),n("vxe-table-column",{attrs:{field:"date",title:"Date","tree-node":""}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[],i=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),o=n.n(i),r=n("c695"),c=n.n(r),s={data:function(){return{tableData:[],demoCodes:['\n        <vxe-table\n          border\n          resizable\n          :tree-config="{children: \'children\'}"\n          :data.sync="tableData">\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date" tree-node></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          }\n        }\n        "]}},created:function(){this.tableData=c.a.clone(window.MOCK_TREE_DATA_LIST,!0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){o.a.highlightBlock(e)})}},d=s,u=n("2877"),v=Object(u["a"])(d,a,l,!1,null,null,null);t["default"]=v.exports},5638:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("插入数据：树形结构默认不支持子节点插入")]),n("p",[e._v("如果要往子节点插入数据，你可以把表格当成一个子组件进行封装，自行操作数据源即可")]),n("vxe-toolbar",{attrs:{data:e.tableData,setting:{storage:!1}},scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",{on:{click:function(t){return e.insertEvent()}}},[e._v("插入第一行")]),n("vxe-button",{on:{click:function(t){return e.insertAtEvent()}}},[e._v("插入指定行")]),n("vxe-button",{on:{click:e.getInsertEvent}},[e._v("获取新增")])]},proxy:!0}])}),n("vxe-table",{ref:"xTree",attrs:{resizable:"","tree-config":e.treeConfig,"edit-config":{trigger:"click",mode:"row",showStatus:!0},data:e.tableData},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{type:"selection",width:"120","tree-node":""}}),n("vxe-table-column",{attrs:{field:"name",title:"Name","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"size",title:"Size","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"type",title:"Type","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"date",title:"Date","edit-render":{name:"input"}}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[],i=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),o=n.n(i),r=n("c695"),c=n.n(r),s={data:function(){return{tableData:[],treeConfig:{children:"children"},demoCodes:['\n        <vxe-toolbar :data="tableData" :setting="{storage: false}">\n          <template v-slot:buttons>\n            <vxe-button @click="insertEvent()">插入第一行</vxe-button>\n            <vxe-button @click="insertAtEvent()">插入指定行</vxe-button>\n            <vxe-button @click="getInsertEvent">获取新增</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          resizable\n          ref="xTree"\n          :tree-config="treeConfig"\n          :edit-config="{trigger: \'click\', mode: \'row\', showStatus: true}"\n          :data.sync="tableData">\n          <vxe-table-column type="selection" width="120" tree-node></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="size" title="Size" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="type" title="Type" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="date" title="Date" :edit-render="{name: \'input\'}"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              treeConfig: {\n                children: 'children'\n              }\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          },\n          methods: {\n            insertEvent () {\n              let xTree = this.$refs.xTree\n              let newRow = xTree.createRow({\n                name: '新数据',\n                date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd'),\n                isNew: true\n              })\n              // 插入到第一行\n              this.tableData.unshift(newRow)\n              xTree.refreshData().then(() => xTree.setActiveRow(newRow))\n            },\n            insertAtEvent () {\n              let xTree = this.$refs.xTree\n              let newRow = xTree.createRow({\n                name: '新数据',\n                date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd'),\n                isNew: true\n              })\n              // 插入到 id 为 11000 的节点位置中\n              let rowNode = XEUtils.findTree(this.tableData, item => item.id === '11000', this.treeConfig)\n              if (rowNode) {\n                rowNode.items.splice(rowNode.index, 0, newRow)\n                xTree.refreshData().then(() => xTree.setActiveRow(newRow))\n              }\n            },\n            getInsertEvent () {\n              let insertRecords = XEUtils.filterTree(this.tableData, item => item.isNew, this.treeConfig)\n              this.$XMsg.alert(insertRecords.length)\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=c.a.clone(window.MOCK_TREE_DATA_LIST,!0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){o.a.highlightBlock(e)})},methods:{insertEvent:function(){var e=this.$refs.xTree,t=e.createRow({name:"新数据",date:c.a.toDateString(new Date,"yyyy-MM-dd"),isNew:!0});this.tableData.unshift(t),e.refreshData().then(function(){return e.setActiveRow(t)})},insertAtEvent:function(){var e=this.$refs.xTree,t=e.createRow({name:"新数据",date:c.a.toDateString(new Date,"yyyy-MM-dd"),isNew:!0}),n=c.a.findTree(this.tableData,function(e){return"11000"===e.id},this.treeConfig);n&&(n.items.splice(n.index,0,t),e.refreshData().then(function(){return e.setActiveRow(t)}))},getInsertEvent:function(){var e=c.a.filterTree(this.tableData,function(e){return e.isNew},this.treeConfig);this.$XMsg.alert(e.length)}}},d=s,u=n("2877"),v=Object(u["a"])(d,a,l,!1,null,null,null);t["default"]=v.exports},"728f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("可编辑树表格，还可以通过手动调用展开收起")]),n("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",{on:{click:function(t){return e.$refs.xTree.toggleTreeExpansion(e.tableData[0],!0)}}},[e._v("切换第一个")]),n("vxe-button",{on:{click:function(t){return e.$refs.xTree.setTreeExpansion(e.tableData[2],!0)}}},[e._v("展开第三个")]),n("vxe-button",{on:{click:function(t){return e.$refs.xTree.setAllTreeExpansion(!0)}}},[e._v("展开所有")]),n("vxe-button",{on:{click:function(t){return e.$refs.xTree.clearTreeExpand()}}},[e._v("关闭所有")])]},proxy:!0}])}),n("vxe-table",{ref:"xTree",attrs:{resizable:"","tree-config":{children:"children"},"edit-config":{trigger:"click",mode:"row"},"select-config":{labelField:"id"},data:e.tableData},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{type:"selection",title:"ID","tree-node":""}}),n("vxe-table-column",{attrs:{field:"name",title:"Name","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"size",title:"Size","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"type",title:"Type","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"date",title:"Date","edit-render":{name:"input"}}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[],i=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),o=n.n(i),r={data:function(){return{tableData:[],demoCodes:['\n        <vxe-toolbar>\n          <template v-slot:buttons>\n            <vxe-button @click="$refs.xTree.toggleTreeExpansion(tableData[0], true)">切换第一个</vxe-button>\n            <vxe-button @click="$refs.xTree.setTreeExpansion(tableData[2], true)">展开第三个</vxe-button>\n            <vxe-button @click="$refs.xTree.setAllTreeExpansion(true)">展开所有</vxe-button>\n            <vxe-button @click="$refs.xTree.clearTreeExpand()">关闭所有</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          resizable\n          ref="xTree"\n          :tree-config="{children: \'children\'}"\n          :edit-config="{trigger: \'click\', mode: \'row\'}"\n          :select-config="{labelField: \'id\'}"\n          :data.sync="tableData">\n          <vxe-table-column type="selection" title="ID" tree-node></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="size" title="Size" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="type" title="Type" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="date" title="Date" :edit-render="{name: \'input\'}"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          }\n        }\n        "]}},created:function(){this.tableData=window.MOCK_TREE_DATA_LIST.slice(0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){o.a.highlightBlock(e)})}},c=r,s=n("2877"),d=Object(s["a"])(c,a,l,!1,null,null,null);t["default"]=d.exports},"862b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("插入数据：树形结构默认不支持子节点插入")]),n("p",[e._v("如果要往子节点插入数据，你可以把表格当成一个子组件进行封装，自行操作数据源即可")]),n("vxe-toolbar",{attrs:{data:e.tableData,setting:{storage:!1}},scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",{on:{click:e.getInsertEvent}},[e._v("获取新增")])]},proxy:!0}])}),n("vxe-table",{ref:"xTree",attrs:{resizable:"","tree-config":e.treeConfig,"context-menu":{header:{options:e.headerMenus},body:{options:e.bodyMenus}},"edit-config":{trigger:"click",mode:"row",showStatus:!0},data:e.tableData},on:{"update:data":function(t){e.tableData=t},"context-menu-click":e.contextMenuClickEvent}},[n("vxe-table-column",{attrs:{type:"selection",width:"120","tree-node":""}}),n("vxe-table-column",{attrs:{field:"name",title:"Name","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"size",title:"Size","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"type",title:"Type","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"date",title:"Date","edit-render":{name:"input"}}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[],i=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),o=n.n(i),r=n("c695"),c=n.n(r),s={data:function(){return{tableData:[],treeConfig:{children:"children"},headerMenus:[[{code:"hideColumn",name:"隐藏列"}]],bodyMenus:[[{code:"insertAt",name:"插入一行"}]],demoCodes:['\n        <vxe-toolbar :data="tableData" :setting="{storage: false}">\n          <template v-slot:buttons>\n            <vxe-button @click="getInsertEvent">获取新增</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          resizable\n          ref="xTree"\n          :tree-config="treeConfig"\n          :context-menu="{header: {options: headerMenus}, body: {options: bodyMenus}}"\n          :edit-config="{trigger: \'click\', mode: \'row\', showStatus: true}"\n          :data.sync="tableData"\n          @context-menu-click="contextMenuClickEvent">\n          <vxe-table-column type="selection" width="120" tree-node></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="size" title="Size" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="type" title="Type" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="date" title="Date" :edit-render="{name: \'input\'}"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              treeConfig: {\n                children: 'children'\n              },\n              headerMenus: [\n                [\n                  {\n                    code: 'hideColumn',\n                    name: '隐藏列'\n                  }\n                ]\n              ],\n              bodyMenus: [\n                [\n                  {\n                    code: 'insertAt',\n                    name: '插入一行'\n                  }\n                ]\n              ]\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          },\n          methods: {\n            insertAtEvent (row, column) {\n              let xTree = this.$refs.xTree\n              let newRow = xTree.createRow({\n                name: '新数据',\n                date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd'),\n                isNew: true\n              })\n              // 插入到指定节点位置中\n              let rowNode = XEUtils.findTree(this.tableData, item => item === row, this.treeConfig)\n              if (rowNode) {\n                rowNode.items.splice(rowNode.index, 0, newRow)\n                xTree.refreshData().then(() => xTree.setActiveCell(newRow, column.property))\n              }\n            },\n            getInsertEvent () {\n              let insertRecords = XEUtils.filterTree(this.tableData, item => item.isNew, this.treeConfig)\n              this.$XMsg.alert(insertRecords.length)\n            },\n            contextMenuClickEvent ({ menu, row, column }) {\n              let xTree = this.$refs.xTree\n              switch (menu.code) {\n                case 'hideColumn':\n                  xTree.hideColumn(column)\n                  break\n                case 'insertAt':\n                  this.insertAtEvent(row, column)\n                  break\n              }\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=c.a.clone(window.MOCK_TREE_DATA_LIST,!0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){o.a.highlightBlock(e)})},methods:{insertAtEvent:function(e,t){var n=this.$refs.xTree,a=n.createRow({name:"新数据",date:c.a.toDateString(new Date,"yyyy-MM-dd"),isNew:!0}),l=c.a.findTree(this.tableData,function(t){return t===e},this.treeConfig);l&&(l.items.splice(l.index,0,a),n.refreshData().then(function(){return n.setActiveCell(a,t.property)}))},getInsertEvent:function(){var e=c.a.filterTree(this.tableData,function(e){return e.isNew},this.treeConfig);this.$XMsg.alert(e.length)},contextMenuClickEvent:function(e){var t=e.menu,n=e.row,a=e.column,l=this.$refs.xTree;switch(t.code){case"hideColumn":l.hideColumn(a);break;case"insertAt":this.insertAtEvent(n,a);break}}}},d=s,u=n("2877"),v=Object(u["a"])(d,a,l,!1,null,null,null);t["default"]=v.exports},ce1c:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("使用 "),n("table-api-link",{attrs:{prop:"highlight-current-row"}}),e._v(" 方式")],1),n("vxe-table",{attrs:{"highlight-current-row":"","tree-config":{children:"children"},data:e.tableData},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{field:"name",title:"Name","tree-node":""}}),n("vxe-table-column",{attrs:{field:"size",title:"Size"}}),n("vxe-table-column",{attrs:{field:"type",title:"Type"}}),n("vxe-table-column",{attrs:{field:"date",title:"Date"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),n("p",[e._v("使用 radio 方式")]),n("vxe-table",{attrs:{"tree-config":{children:"children"},"radio-config":{labelField:"name"},data:e.tableData},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{type:"radio",title:"Name","tree-node":""}}),n("vxe-table-column",{attrs:{field:"size",title:"Size"}}),n("vxe-table-column",{attrs:{field:"type",title:"Type"}}),n("vxe-table-column",{attrs:{field:"date",title:"Date"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")]),n("p",[e._v("当然也可以两种方式同时使用")]),n("vxe-table",{ref:"xTable3",attrs:{resizable:"","highlight-current-row":"","tree-config":{children:"children"},"radio-config":{trigger:"row"},data:e.tableData},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{type:"radio",width:"120","tree-node":""},scopedSlots:e._u([{key:"header",fn:function(){return[n("vxe-button",{attrs:{type:"text"},on:{click:function(t){return e.$refs.xTable3.clearRadioRow()}}},[e._v("取消")])]},proxy:!0}])}),n("vxe-table-column",{attrs:{field:"name",title:"Name"}}),n("vxe-table-column",{attrs:{field:"size",title:"Size"}}),n("vxe-table-column",{attrs:{field:"type",title:"Type"}}),n("vxe-table-column",{attrs:{field:"date",title:"Date"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[5]))]),e._v("\n  ")])],1)},l=[],i=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),o=n.n(i),r=n("c695"),c=n.n(r),s={data:function(){return{tableData:[],demoCodes:['\n        <vxe-table\n          highlight-current-row\n          :tree-config="{children: \'children\'}"\n          :data.sync="tableData">\n          <vxe-table-column field="name" title="Name" tree-node></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          }\n        }\n        ",'\n        <vxe-table\n          :tree-config="{children: \'children\'}"\n          :data.sync="tableData">\n          <vxe-table-column type="radio" width="120" tree-node></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          }\n        }\n        ",'\n        <vxe-table\n          resizable\n          highlight-current-row\n          ref="xTable3"\n          :tree-config="{children: \'children\'}"\n          :radio-config="{trigger: \'row\'}"\n          :data.sync="tableData">\n          <vxe-table-column type="radio" width="120" tree-node>\n            <template v-slot:header>\n              <vxe-button type="text" @click="$refs.xTable3.clearRadioRow()">取消</vxe-button>\n            </template>\n          </vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          }\n        }\n        "]}},created:function(){this.tableData=c.a.clone(window.MOCK_TREE_DATA_LIST,!0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){o.a.highlightBlock(e)})}},d=s,u=n("2877"),v=Object(u["a"])(d,a,l,!1,null,null,null);t["default"]=v.exports},d69a:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("增删改查、工具栏")]),n("vxe-toolbar",{attrs:{data:e.tableData,setting:{storage:!1}},scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",{on:{click:e.insertEvent}},[e._v("新增")]),n("vxe-button",{on:{click:function(t){return e.$refs.xTree.removeSelecteds()}}},[e._v("移除选中")]),n("vxe-button",{on:{click:e.getInsertEvent}},[e._v("获取新增")]),n("vxe-button",{on:{click:e.getRemoveEvent}},[e._v("获取删除")]),n("vxe-button",{on:{click:e.getUpdateEvent}},[e._v("获取修改")])]},proxy:!0}])}),n("vxe-table",{ref:"xTree",attrs:{resizable:"","tree-config":{children:"children"},"edit-config":{trigger:"click",mode:"row",showStatus:!0},data:e.tableData},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{type:"selection",width:"120","tree-node":""}}),n("vxe-table-column",{attrs:{field:"name",title:"Name","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"size",title:"Size","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"type",title:"Type","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"date",title:"Date","edit-render":{name:"input"}}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[],i=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),o=n.n(i),r=n("c695"),c=n.n(r),s={data:function(){return{tableData:[],demoCodes:['\n        <vxe-toolbar :data="tableData" :setting="{storage: false}">\n          <template v-slot:buttons>\n            <vxe-button @click="insertEvent">新增</vxe-button>\n            <vxe-button @click="$refs.xTree.removeSelecteds()">移除选中</vxe-button>\n            <vxe-button @click="getInsertEvent">获取新增</vxe-button>\n            <vxe-button @click="getRemoveEvent">获取删除</vxe-button>\n            <vxe-button @click="getUpdateEvent">获取修改</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          resizable\n          ref="xTree"\n          :tree-config="{children: \'children\'}"\n          :edit-config="{trigger: \'click\', mode: \'row\', showStatus: true}"\n          :data.sync="tableData">\n          <vxe-table-column type="selection" width="120" tree-node></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="size" title="Size" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="type" title="Type" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="date" title="Date" :edit-render="{name: \'input\'}"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)\n          },\n          methods: {\n            insertEvent () {\n              let record = {\n                date: XEUtils.toDateString(new Date(), 'yyyy-MM-dd')\n              }\n              this.$refs.xTree.insert(record)\n                .then(({ row }) => this.$refs.xTree.setActiveRow(row))\n            },\n            getInsertEvent () {\n              let insertRecords = this.$refs.xTree.getInsertRecords()\n              this.$XMsg.alert(insertRecords.length)\n            },\n            getRemoveEvent () {\n              let removeRecords = this.$refs.xTree.getRemoveRecords()\n              this.$XMsg.alert(removeRecords.length)\n            },\n            getUpdateEvent () {\n              let updateRecords = this.$refs.xTree.getUpdateRecords()\n              this.$XMsg.alert(updateRecords.length)\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=window.MOCK_TREE_DATA_LIST.slice(0)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){o.a.highlightBlock(e)})},methods:{insertEvent:function(){var e=this,t={date:c.a.toDateString(new Date,"yyyy-MM-dd")};this.$refs.xTree.insert(t).then(function(t){var n=t.row;return e.$refs.xTree.setActiveRow(n)})},getInsertEvent:function(){var e=this.$refs.xTree.getInsertRecords();this.$XMsg.alert(e.length)},getRemoveEvent:function(){var e=this.$refs.xTree.getRemoveRecords();this.$XMsg.alert(e.length)},getUpdateEvent:function(){var e=this.$refs.xTree.getUpdateRecords();this.$XMsg.alert(e.length)}}},d=s,u=n("2877"),v=Object(u["a"])(d,a,l,!1,null,null,null);t["default"]=v.exports}}]);