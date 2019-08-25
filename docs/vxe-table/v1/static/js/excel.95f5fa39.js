(window["webpackJsonpVXETable"]=window["webpackJsonpVXETable"]||[]).push([["excel"],{"3eb1":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("vxe-grid",{staticClass:"vxe-table-x-renderer",attrs:{border:"",height:"460",loading:e.loading,data:e.tableData,columns:e.tableColumn,"edit-config":{trigger:"click",mode:"cell"}},on:{"update:data":function(t){e.tableData=t}}}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"tip"},[e._v("具体兼容请查看 "),n("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/vxe-table-plugin-renderer",target:"_blank"}},[e._v("vxe-table-plugin-renderer")]),e._v(" 插件的 API")])}],r=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),i=n.n(r),o={data:function(){return{loading:!1,tableData:[],tableColumn:[{type:"selection",width:60},{type:"index",title:"Number",width:80},{field:"name",title:"Name",editRender:{name:"XTextarea"}},{field:"role",title:"Role",showOverflow:!0,editRender:{name:"XTextarea"}},{field:"nickname",title:"Nickname",editRender:{name:"XInput"}},{field:"sex",title:"Sex",editRender:{name:"XInput",props:{suffixIcon:"vxe-icon--more"}}}],demoCodes:['\n        <vxe-grid\n          border\n          height="460"\n          class="vxe-table-x-renderer"\n          :loading="loading"\n          :data.sync="tableData"\n          :columns="tableColumn"\n          :edit-config="{trigger: \'click\', mode: \'cell\'}"></vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: [],\n              tableColumn: [\n                { type: 'selection', width: 60 },\n                { type: 'index', title: 'Number', width: 80 },\n                {\n                  field: 'name',\n                  title: 'Name',\n                  editRender: {\n                    name: 'XTextarea'\n                  }\n                },\n                {\n                  field: 'role',\n                  title: 'Role',\n                  showOverflow: true,\n                  editRender: {\n                    name: 'XTextarea'\n                  }\n                },\n                {\n                  field: 'nickname',\n                  title: 'Nickname',\n                  editRender: {\n                    name: 'XInput'\n                  }\n                },\n                {\n                  field: 'sex',\n                  title: 'Sex',\n                  editRender: {\n                    name: 'XInput',\n                    props: {\n                      suffixIcon: 'vxe-icon--more'\n                    }\n                  }\n                }\n              ]\n            }\n          },\n          created () {\n            this.loading = true\n            setTimeout(() => {\n              this.tableData = window.MOCK_DATA_LIST.slice(0, 10)\n              this.loading = false\n            }, 500)\n          }\n        }\n        "]}},created:function(){var e=this;this.loading=!0,setTimeout(function(){e.tableData=window.MOCK_DATA_LIST.slice(0,10),e.loading=!1},500)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){i.a.highlightBlock(e)})}},s=o,c=n("2877"),d=Object(c["a"])(s,a,l,!1,null,null,null);t["default"]=d.exports},c055:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v("使用 vxe-excel 渲染 Excel 表格，注意：暂时不建议使用（完善中）")]),n("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[n("vxe-button",{on:{click:e.getValidEvent}},[e._v("获取有效数据")]),n("vxe-button",{on:{click:e.getInsertEvent}},[e._v("获取新增")]),n("vxe-button",{on:{click:e.getRemoveEvent}},[e._v("获取删除")]),n("vxe-button",{on:{click:e.getUpdateEvent}},[e._v("获取修改")]),n("vxe-button",{on:{click:e.exportCsvEvent}},[e._v("导出.csv")]),n("input",{attrs:{type:"file",accept:".csv,.xls,.xlsx"},on:{change:e.fileChangeEvent}})]},proxy:!0}])}),n("vxe-excel",{ref:"xExcel",attrs:{"max-height":"600",columns:e.columns,data:e.tableData},on:{"update:data":function(t){e.tableData=t}}}),e._m(0),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("    "),n("code",[e._v("\n      | Arrow Up ↑ | 移动到当前活动单元格上面的单元格 |\n      | Arrow Down ↓ | 移动到当前活动单元格下面的单元格 |\n      | Arrow Left ← | 移动到当前活动单元格左边的单元格 |\n      | Arrow Right → | 移动到当前活动单元格右边的单元格 |\n      | Tab | 移动到当前选中或活动单元格的右侧单元格，如果到最后一列且存在下一行，则从下一行开始移动 |\n      | Tab + Shift | 移动到当前选中或活动单元格的左侧单元格，如果到第一列且存在上一行，则从上一行开始移动 |\n      | Enter | 取消编辑并移动到当前活动单元格下面的单元格 |\n      | Delete | 清空内容 |\n      | Backspace | 清空内容并激活选中单元格为编辑状态 |\n      | F2 | 激活单元格编辑 |\n      | Esc | 取消单元格编辑 |\n      | Ctrl + C | 复制选中的单元格内容 |\n      | Ctrl + X | 剪贴选中的单元格内容 |\n      | Ctrl + V | 粘贴选中的单元格内容 |\n      | Ctrl + A | 选中所有单元格 |\n    ")]),e._v("\n  ")])}],r=(n("28a5"),n("ac6a"),n("5df3"),n("1c4c"),n("1487")),i=n.n(r),o=n("1146"),s=n.n(o),c={data:function(){var e=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"];return{columns:[{type:"index",width:50,fixed:"left",align:"center",headerAlign:"center"}].concat(e.map(function(e){return{field:e,title:e,width:76,headerAlign:"center",editRender:{name:"cell"}}})),tableData:Array.from(new Array(20)).map(function(t,n){var a={id:n};return e.forEach(function(e){a[e]=""}),a}),demoCodes:['\n        <vxe-button @click="getValidEvent">获取有效数据</vxe-button>\n        <vxe-button  @click="getInsertEvent">获取新增</vxe-button>\n        <vxe-button @click="getRemoveEvent">获取删除</vxe-button>\n        <vxe-button @click="getUpdateEvent">获取修改</vxe-button>\n        <vxe-button @click="exportCsvEvent">导出.csv</vxe-button>\n        <input type="file" @change="fileChangeEvent" accept=".csv,.xls,.xlsx">\n\n        <vxe-excel\n          ref="xExcel"\n          max-height="600"\n          :columns="columns"\n          :data.sync="tableData">\n        </vxe-excel>\n        ',"\n        export default {\n          data () {\n            let columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']\n            return {\n              columns: [\n                {\n                  type: 'index',\n                  width: 50,\n                  align: 'center',\n                  headerAlign: 'center'\n                }\n              ].concat(columns.map(name => {\n                return {\n                  field: name,\n                  title: name,\n                  width: 76,\n                  headerAlign: 'center',\n                  editRender: {\n                    name: 'cell'\n                  }\n                }\n              })),\n              tableData: Array.from(new Array(20)).map(() => {\n                let item = {}\n                columns.forEach(name => {\n                  item[name] = ''\n                })\n                return item\n              })\n            }\n          },\n          methods: {\n            getValidEvent () {\n              let fields = this.$refs.xExcel.getColumns().map(item => item.property).filter(key => key)\n              let validRecords = this.tableData.filter(item => fields.some(key => item[key]))\n              this.$XMsg.alert(validRecords.length)\n            },\n            getInsertEvent () {\n              let insertRecords = this.$refs.xExcel.getInsertRecords()\n              this.$XMsg.alert(insertRecords.length)\n            },\n            getRemoveEvent () {\n              let removeRecords = this.$refs.xExcel.getRemoveRecords()\n              this.$XMsg.alert(removeRecords.length)\n            },\n            getUpdateEvent () {\n              let updateRecords = this.$refs.xExcel.getUpdateRecords()\n              this.$XMsg.alert(updateRecords.length)\n            },\n            exportCsvEvent () {\n              this.$refs.xExcel.exportCsv()\n            },\n            fileChangeEvent (evnt) {\n              let files = evnt.target.files\n              let fileReader = new FileReader()\n              fileReader.onload = (ev) => {\n                let data = ev.target.result\n                let workbook = XLSX.read(data, { type: 'binary' })\n                let keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']\n                let csvData = XLSX.utils.sheet_to_csv(workbook.Sheets.Sheet1)\n                let tableData = csvData.split('\\n').map(vRow => {\n                  let vCols = vRow.split(',')\n                  let item = {}\n                  vCols.forEach((val, cIndex) => {\n                    let kIndex = Math.floor(cIndex / 26)\n                    let lIndex = cIndex % 26\n                    let key\n                    if (kIndex) {\n                      key = `${keys[kIndex]}${keys[lIndex]}`\n                    } else {\n                      key = keys[lIndex]\n                    }\n                    item[key] = val\n                  })\n                  return item\n                })\n                this.tableData = tableData\n              }\n              fileReader.readAsBinaryString(files[0])\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){i.a.highlightBlock(e)})},methods:{getValidEvent:function(){var e=this.$refs.xExcel.getColumns().map(function(e){return e.property}).filter(function(e){return e}),t=this.tableData.filter(function(t){return e.some(function(e){return t[e]})});this.$XMsg.alert(t.length)},getInsertEvent:function(){var e=this.$refs.xExcel.getInsertRecords();this.$XMsg.alert(e.length)},getRemoveEvent:function(){var e=this.$refs.xExcel.getRemoveRecords();this.$XMsg.alert(e.length)},getUpdateEvent:function(){var e=this.$refs.xExcel.getUpdateRecords();this.$XMsg.alert(e.length)},exportCsvEvent:function(){this.$refs.xExcel.exportCsv()},fileChangeEvent:function(e){var t=this,n=e.target.files,a=new FileReader;a.onload=function(e){var n=e.target.result,a=s.a.read(n,{type:"binary"}),l=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],r=s.a.utils.sheet_to_csv(a.Sheets.Sheet1),i=r.split("\n").map(function(e,t){var n=e.split(","),a={id:t};return n.forEach(function(e,t){var n,r=Math.floor(t/26),i=t%26;n=r?"".concat(l[r]).concat(l[i]):l[i],a[n]=e}),a});t.tableData=i},a.readAsBinaryString(n[0])}}},d=c,u=n("2877"),v=Object(u["a"])(d,a,l,!1,null,null,null);t["default"]=v.exports},ebfe:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("vxe-table",{attrs:{border:"",data:e.tableData,"context-menu":{body:{options:e.bodyMenus}},"edit-config":{trigger:"click",mode:"cell"}},on:{"update:data":function(t){e.tableData=t}}},[n("vxe-table-column",{attrs:{type:"index",width:"60"}}),n("vxe-table-column",{attrs:{field:"name",title:"Name","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"sex",title:"sex","edit-render":{name:"input"}}}),n("vxe-table-column",{attrs:{field:"age",title:"Age","edit-render":{name:"input"}}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"tip"},[e._v("具体兼容请查看 "),n("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/vxe-table-plugin-menus",target:"_blank"}},[e._v("vxe-table-plugin-menus")]),e._v(" 插件的 API")])}],r=(n("5df3"),n("1c4c"),n("ac6a"),n("1487")),i=n.n(r),o={data:function(){return{tableData:[],bodyMenus:[[{code:"EXPORT_ALL",name:"导出.csv"},{code:"INSERT_ACTIVED_ROW",name:"新增"},{code:"INSERT_ACTIVED_ROW",name:"新增2",params:[[{name:"默认值 Name"}],["sex"]]}]],demoCodes:['\n        <vxe-table\n          border\n          :data.sync="tableData"\n          :context-menu="{body: {options: bodyMenus}}"\n          :edit-config="{trigger: \'click\', mode: \'cell\'}">\n          <vxe-table-column type="index" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="sex" title="sex" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="age" title="Age" :edit-render="{name: \'input\'}"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              bodyMenus: [\n                [\n                  {\n                    code: 'EXPORT_ALL',\n                    name: '导出.csv'\n                  },\n                  {\n                    code: 'INSERT_ACTIVED_ROW',\n                    name: '新增'\n                  },\n                  {\n                    code: 'INSERT_ACTIVED_ROW',\n                    name: '新增2',\n                    params: [\n                      [{ name: '默认值 Name' }],\n                      ['sex']\n                    ]\n                  }\n                ]\n              ]\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 5)\n          }\n        }\n        "]}},created:function(){this.tableData=window.MOCK_DATA_LIST.slice(0,5)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){i.a.highlightBlock(e)})}},s=o,c=n("2877"),d=Object(c["a"])(s,a,l,!1,null,null,null);t["default"]=d.exports}}]);