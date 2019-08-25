(window["webpackJsonpVXETable"]=window["webpackJsonpVXETable"]||[]).push([["excel"],{"3eb1":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._m(0),t("vxe-grid",{staticClass:"vxe-table-x-renderer",attrs:{border:"",height:"460",loading:e.loading,data:e.tableData,columns:e.tableColumn,"edit-config":{trigger:"click",mode:"cell"}},on:{"update:data":function(n){e.tableData=n}}}),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"tip"},[e._v("具体兼容请查看 "),t("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/vxe-table-plugin-renderer",target:"_blank"}},[e._v("vxe-table-plugin-renderer")]),e._v(" 插件的 API")])}],o=(t("5df3"),t("1c4c"),t("ac6a"),t("1487")),r=t.n(o),i={data:function(){return{loading:!1,tableData:[],tableColumn:[{type:"selection",width:60},{type:"index",title:"Number",width:80},{field:"name",title:"Name",editRender:{name:"XTextarea"}},{field:"role",title:"Role",showOverflow:!0,editRender:{name:"XTextarea"}},{field:"nickname",title:"Nickname",editRender:{name:"XInput"}},{field:"sex",title:"Sex",editRender:{name:"XInput",props:{suffixIcon:"vxe-icon--more"}}}],demoCodes:['\n        <vxe-grid\n          border\n          height="460"\n          class="vxe-table-x-renderer"\n          :loading="loading"\n          :data.sync="tableData"\n          :columns="tableColumn"\n          :edit-config="{trigger: \'click\', mode: \'cell\'}"></vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: [],\n              tableColumn: [\n                { type: 'selection', width: 60 },\n                { type: 'index', title: 'Number', width: 80 },\n                {\n                  field: 'name',\n                  title: 'Name',\n                  editRender: {\n                    name: 'XTextarea'\n                  }\n                },\n                {\n                  field: 'role',\n                  title: 'Role',\n                  showOverflow: true,\n                  editRender: {\n                    name: 'XTextarea'\n                  }\n                },\n                {\n                  field: 'nickname',\n                  title: 'Nickname',\n                  editRender: {\n                    name: 'XInput'\n                  }\n                },\n                {\n                  field: 'sex',\n                  title: 'Sex',\n                  editRender: {\n                    name: 'XInput',\n                    props: {\n                      suffixIcon: 'vxe-icon--more'\n                    }\n                  }\n                }\n              ]\n            }\n          },\n          created () {\n            this.loading = true\n            setTimeout(() => {\n              this.tableData = window.MOCK_DATA_LIST.slice(0, 10)\n              this.loading = false\n            }, 500)\n          }\n        }\n        "]}},created:function(){var e=this;this.loading=!0,setTimeout(function(){e.tableData=window.MOCK_DATA_LIST.slice(0,10),e.loading=!1},500)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){r.a.highlightBlock(e)})}},c=i,s=t("2877"),d=Object(s["a"])(c,a,l,!1,null,null,null);n["default"]=d.exports},"6c86":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._m(0),t("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-button",{on:{click:e.getValidEvent}},[e._v("获取有效数据")]),t("vxe-button",{on:{click:e.getInsertEvent}},[e._v("获取新增")]),t("vxe-button",{on:{click:e.getRemoveEvent}},[e._v("获取删除")]),t("vxe-button",{on:{click:e.getUpdateEvent}},[e._v("获取修改")]),t("vxe-button",{on:{click:e.exportCsvEvent}},[e._v("导出.csv")]),t("input",{attrs:{type:"file",accept:".csv,.xls,.xlsx"},on:{change:e.fileChangeEvent}})]},proxy:!0}])}),t("vxe-excel",{ref:"xExcel",attrs:{"max-height":"600",columns:e.columns,data:e.tableData},on:{"update:data":function(n){e.tableData=n}}}),e._m(1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"tip"},[e._v("具体兼容请查看 "),t("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/vxe-table-plugin-excel",target:"_blank"}},[e._v("vxe-table-plugin-excel")]),e._v(" 插件的 API")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[e._v("    "),t("code",[e._v("\n      | Arrow Up ↑ | 移动到当前活动单元格上面的单元格 |\n      | Arrow Down ↓ | 移动到当前活动单元格下面的单元格 |\n      | Arrow Left ← | 移动到当前活动单元格左边的单元格 |\n      | Arrow Right → | 移动到当前活动单元格右边的单元格 |\n      | Tab | 移动到当前选中或活动单元格的右侧单元格，如果到最后一列且存在下一行，则从下一行开始移动 |\n      | Tab + Shift | 移动到当前选中或活动单元格的左侧单元格，如果到第一列且存在上一行，则从上一行开始移动 |\n      | Enter | 取消编辑并移动到当前活动单元格下面的单元格 |\n      | Delete | 清空内容 |\n      | Backspace | 清空内容并激活选中单元格为编辑状态 |\n      | F2 | 激活单元格编辑 |\n      | Esc | 取消单元格编辑 |\n      | Ctrl + C | 复制选中的单元格内容 |\n      | Ctrl + X | 剪贴选中的单元格内容 |\n      | Ctrl + V | 粘贴选中的单元格内容 |\n      | Ctrl + A | 选中所有单元格 |\n    ")]),e._v("\n  ")])}],o=(t("28a5"),t("ac6a"),t("5df3"),t("1c4c"),t("1487")),r=t.n(o),i=t("1146"),c=t.n(i),s={data:function(){var e=["A","B","C","D","E","F","G","H","I","J","K","L","M","N"];return{columns:[{type:"index",width:50,align:"center",headerAlign:"center"}].concat(e.map(function(e){return{field:e,title:e,minWidth:76,headerAlign:"center",sortable:!0,editRender:{name:"cell"},filters:[{data:""}],filterRender:{name:"input"}}})),tableData:Array.from(new Array(20)).map(function(n,t){var a={};return e.forEach(function(e){a[e]=""}),a}),demoCodes:['\n        <vxe-button @click="getValidEvent">获取有效数据</vxe-button>\n        <vxe-button  @click="getInsertEvent">获取新增</vxe-button>\n        <vxe-button @click="getRemoveEvent">获取删除</vxe-button>\n        <vxe-button @click="getUpdateEvent">获取修改</vxe-button>\n        <vxe-button @click="exportCsvEvent">导出.csv</vxe-button>\n        <input type="file" @change="fileChangeEvent" accept=".csv,.xls,.xlsx">\n\n        <vxe-excel\n          ref="xExcel"\n          max-height="600"\n          :columns="columns"\n          :data.sync="tableData">\n        </vxe-excel>\n        ',"\n        export default {\n          data () {\n            let columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N']\n            return {\n              columns: [\n                {\n                  type: 'index',\n                  width: 50,\n                  align: 'center',\n                  headerAlign: 'center'\n                }\n              ].concat(columns.map(name => {\n                return {\n                  field: name,\n                  title: name,\n                  minWidth: 76,\n                  headerAlign: 'center',\n                  sortable: true,\n                  editRender: {\n                    name: 'cell'\n                  },\n                  filters: [{ data: '' }],\n                  filterRender: {\n                    name: 'input'\n                  }\n                }\n              })),\n              tableData: Array.from(new Array(20)).map((num, index) => {\n                let item = {}\n                columns.forEach(name => {\n                  item[name] = ''\n                })\n                return item\n              })\n            }\n          },\n          methods: {\n            getValidEvent () {\n              let fields = this.$refs.xExcel.getColumns().map(item => item.property).filter(key => key)\n              let validRecords = this.tableData.filter(item => fields.some(key => item[key]))\n              this.$XModal.alert(validRecords.length)\n            },\n            getInsertEvent () {\n              let insertRecords = this.$refs.xExcel.getInsertRecords()\n              this.$XModal.alert(insertRecords.length)\n            },\n            getRemoveEvent () {\n              let removeRecords = this.$refs.xExcel.getRemoveRecords()\n              this.$XModal.alert(removeRecords.length)\n            },\n            getUpdateEvent () {\n              let updateRecords = this.$refs.xExcel.getUpdateRecords()\n              this.$XModal.alert(updateRecords.length)\n            },\n            exportCsvEvent () {\n              this.$refs.xExcel.exportCsv({ isHeader: false })\n            },\n            fileChangeEvent (evnt) {\n              let files = evnt.target.files\n              let fileReader = new FileReader()\n              fileReader.onload = (ev) => {\n                let data = ev.target.result\n                let workbook = XLSX.read(data, { type: 'binary' })\n                let keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']\n                let csvData = XLSX.utils.sheet_to_csv(workbook.Sheets.Sheet1)\n                let tableData = csvData.split('\n').map((vRow, rIndex) => {\n                  let vCols = vRow.split(',')\n                  let item = {}\n                  vCols.forEach((val, cIndex) => {\n                    let kIndex = Math.floor(cIndex / 26)\n                    let lIndex = cIndex % 26\n                    let key\n                    if (kIndex) {\n                      key = `${keys[kIndex]}${keys[lIndex]}`\n                    } else {\n                      key = keys[lIndex]\n                    }\n                    item[key] = val\n                  })\n                  return item\n                })\n                this.tableData = tableData\n              }\n              fileReader.readAsBinaryString(files[0])\n            }\n          }\n        }\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){r.a.highlightBlock(e)})},methods:{getValidEvent:function(){var e=this.$refs.xExcel.getColumns().map(function(e){return e.property}).filter(function(e){return e}),n=this.tableData.filter(function(n){return e.some(function(e){return n[e]})});this.$XModal.alert(n.length)},getInsertEvent:function(){var e=this.$refs.xExcel.getInsertRecords();this.$XModal.alert(e.length)},getRemoveEvent:function(){var e=this.$refs.xExcel.getRemoveRecords();this.$XModal.alert(e.length)},getUpdateEvent:function(){var e=this.$refs.xExcel.getUpdateRecords();this.$XModal.alert(e.length)},exportCsvEvent:function(){this.$refs.xExcel.exportCsv({isHeader:!1})},fileChangeEvent:function(e){var n=this,t=e.target.files,a=new FileReader;a.onload=function(e){var t=e.target.result,a=c.a.read(t,{type:"binary"}),l=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],o=c.a.utils.sheet_to_csv(a.Sheets.Sheet1),r=o.split("\n").map(function(e,n){var t=e.split(","),a={};return t.forEach(function(e,n){var t,o=Math.floor(n/26),r=n%26;t=o?"".concat(l[o]).concat(l[r]):l[r],a[t]=e}),a});n.tableData=r},a.readAsBinaryString(t[0])}}},d=s,u=t("2877"),f=Object(u["a"])(d,a,l,!1,null,null,null);n["default"]=f.exports},ebfe:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._m(0),t("vxe-table",{attrs:{border:"",resizable:"","highlight-hover-row":"","show-footer":"","footer-method":e.footerMethod,data:e.tableData,"context-menu":{header:{options:e.headerMenus},body:{options:e.bodyMenus},footer:{options:e.footerMenus}},"edit-config":{trigger:"click",mode:"cell"}},on:{"update:data":function(n){e.tableData=n}}},[t("vxe-table-column",{attrs:{type:"index",width:"60"}}),t("vxe-table-column",{attrs:{field:"name",title:"Name",sortable:"","edit-render":{name:"input"}}}),t("vxe-table-column",{attrs:{field:"sex",title:"sex","edit-render":{name:"input"}}}),t("vxe-table-column",{attrs:{field:"age",title:"Age",sortable:"",filters:[{data:[]}],"filter-render":{name:"input"},"edit-render":{name:"input"}}}),t("vxe-table-column",{attrs:{field:"rate",title:"Rate",sortable:""}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},l=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"tip"},[e._v("具体兼容请查看 "),t("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/vxe-table-plugin-menus",target:"_blank"}},[e._v("vxe-table-plugin-menus")]),e._v(" 插件的 API")])}],o=(t("6762"),t("2fdb"),t("5df3"),t("1c4c"),t("ac6a"),t("1487")),r=t.n(o),i=t("c695"),c=t.n(i),s={data:function(){return{tableData:[],headerMenus:[[{code:"HIDDEN_COLUMN",name:"隐藏"},{code:"RESET_COLUMN",name:"取消隐藏"},{code:"RESET_ALL",name:"重置个性化数据",prefixIcon:"fa fa-undo"}],[{code:"EXPORT_ALL",name:"导出表格.csv",prefixIcon:"fa fa-download"}]],bodyMenus:[[{code:"INSERT_AT_ACTIVED_ROW",name:"插入"},{code:"DELETE_ROW",name:"删除"},{code:"CLEAR_CELL",name:"清除内容"}],[{name:"筛选",prefixIcon:"fa fa-filter",children:[{code:"CLEAR_FILTER",name:"清除筛选"},{code:"CLEAR_ALL_FILTER",name:"重置所有筛选"},{code:"FILTER_CELL",name:"按所选单元格的值筛选"}]},{name:"排序",children:[{code:"SORT_ASC",name:"升序",prefixIcon:"fa fa-sort-alpha-desc"},{code:"SORT_DESC",name:"倒序",prefixIcon:"fa fa-sort-alpha-desc"},{code:"CLEAR_SORT",name:"清除排序"}]}]],footerMenus:[[{code:"EXPORT_ALL",name:"导出表格.csv",prefixIcon:"fa fa-download"}]],demoCodes:['\n        <vxe-table\n          border\n          resizable\n          highlight-hover-row\n          show-footer\n          :footer-method="footerMethod"\n          :data.sync="tableData"\n          :context-menu="{header: {options: headerMenus}, body: {options: bodyMenus}, footer: {options: footerMenus}}"\n          :edit-config="{trigger: \'click\', mode: \'cell\'}">\n          <vxe-table-column type="index" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" sortable :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="sex" title="sex" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="age" title="Age" sortable :filters="[{ data: [] }]" :filter-render="{name: \'input\'}" :edit-render="{name: \'input\'}"></vxe-table-column>\n          <vxe-table-column field="rate" title="Rate" sortable></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              headerMenus: [\n                [\n                  {\n                    code: 'HIDDEN_COLUMN',\n                    name: '隐藏'\n                  },\n                  {\n                    code: 'RESET_COLUMN',\n                    name: '取消隐藏'\n                  },\n                  {\n                    code: 'RESET_ALL',\n                    name: '重置个性化数据',\n                    prefixIcon: 'fa fa-undo'\n                  }\n                ],\n                [\n                  {\n                    code: 'EXPORT_ALL',\n                    name: '导出表格.csv',\n                    prefixIcon: 'fa fa-download'\n                  }\n                ]\n              ],\n              bodyMenus: [\n                [\n                  {\n                    code: 'INSERT_AT_ACTIVED_ROW',\n                    name: '插入'\n                  },\n                  {\n                    code: 'DELETE_ROW',\n                    name: '删除'\n                  },\n                  {\n                    code: 'CLEAR_CELL',\n                    name: '清除内容'\n                  }\n                ],\n                [\n                  {\n                    name: '筛选',\n                    prefixIcon: 'fa fa-filter',\n                    children: [\n                      {\n                        code: 'CLEAR_FILTER',\n                        name: '清除筛选'\n                      },\n                      {\n                        code: 'CLEAR_ALL_FILTER',\n                        name: '重置所有筛选'\n                      },\n                      {\n                        code: 'FILTER_CELL',\n                        name: '按所选单元格的值筛选'\n                      }\n                    ]\n                  },\n                  {\n                    name: '排序',\n                    children: [\n                      {\n                        code: 'SORT_ASC',\n                        name: '升序',\n                        prefixIcon: 'fa fa-sort-alpha-desc'\n                      },\n                      {\n                        code: 'SORT_DESC',\n                        name: '倒序',\n                        prefixIcon: 'fa fa-sort-alpha-desc'\n                      },\n                      {\n                        code: 'CLEAR_SORT',\n                        name: '清除排序'\n                      }\n                    ]\n                  }\n                ]\n              ],\n              footerMenus: [\n                [\n                  {\n                    code: 'EXPORT_ALL',\n                    name: '导出表格.csv',\n                    prefixIcon: 'fa fa-download'\n                  }\n                ]\n              ]\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 5)\n          },\n          methods: {\n            footerMethod ({ columns, data }) {\n              return [\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '和值'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return XEUtils.sum(data, column.property)\n                  }\n                  return null\n                })\n              ]\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=window.MOCK_DATA_LIST.slice(0,5)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){r.a.highlightBlock(e)})},methods:{footerMethod:function(e){var n=e.columns,t=e.data;return[n.map(function(e,n){return 0===n?"和值":["age","rate"].includes(e.property)?c.a.sum(t,e.property):null})]}}},d=s,u=t("2877"),f=Object(u["a"])(d,a,l,!1,null,null,null);n["default"]=f.exports}}]);