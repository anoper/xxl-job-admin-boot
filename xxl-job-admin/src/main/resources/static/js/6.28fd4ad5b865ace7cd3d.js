webpackJsonp([6],{"1QHH":function(e,t,a){var s=a("70dq");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("45eb926b",s,!0)},"70dq":function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.app-container[data-v-3c7e4844] {\n  padding: 20px;\n}\n.pagination-container[data-v-3c7e4844] {\n  margin-top: 30px;\n}\n","",{version:3,sources:["D:/vuework/xxl-job-admin-vue-h5/src/views/users/list.vue"],names:[],mappings:";AACA;EACE,cAAc;CACf;AACD;EACE,iBAAiB;CAClB",file:"list.vue",sourcesContent:["\n.app-container[data-v-3c7e4844] {\n  padding: 20px;\n}\n.pagination-container[data-v-3c7e4844] {\n  margin-top: 30px;\n}\n"],sourceRoot:""}])},"9WUd":function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.adminColor {\n  color: #67c23a;\n}\n.normalColor {\n  color: #409EFF;\n}\n.dialogModifyLessonManage .el-dialog__header {\n  padding-bottom: 0;\n}\n.dialogModifyLessonManage .el-dialog__body {\n  padding: 0;\n}\n.dialogModifyLessonManage .createPost-main-container {\n  padding: 20px 0 !important;\n}\n","",{version:3,sources:["D:/vuework/xxl-job-admin-vue-h5/src/views/users/list.vue"],names:[],mappings:";AACA;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,WAAW;CACZ;AACD;EACE,2BAA2B;CAC5B",file:"list.vue",sourcesContent:["\n.adminColor {\n  color: #67c23a;\n}\n.normalColor {\n  color: #409EFF;\n}\n.dialogModifyLessonManage .el-dialog__header {\n  padding-bottom: 0;\n}\n.dialogModifyLessonManage .el-dialog__body {\n  padding: 0;\n}\n.dialogModifyLessonManage .createPost-main-container {\n  padding: 20px 0 !important;\n}\n"],sourceRoot:""}])},BqA7:function(e,t,a){var s=a("9WUd");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("a102d75e",s,!0)},"To/2":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("TIfe"),o=a("vMJZ"),n={name:"list",props:{},components:{},data:function(){var e=this;return{dialogStatus:"create",dialogFormVisible:!1,userTypeCode:-1,userTypes:[{code:0,msg:"超级管理员"},{code:1,msg:"普通用户"}],headers:{},modifyData:"",userForm:{id:"",userName:"",realName:"",phone:"",userType:null,password:"",checkPass:""},rules:{userName:[{required:!0,message:"请输入用户名",trigger:"blur"}],realName:[{required:!0,message:"请输入真实姓名",trigger:"blur"}],userType:[{required:!0,message:"请选择用户类型",trigger:"blur"}],phone:[{required:!0,message:"手机号不能为空"}],pass:[{required:!0,validator:function(t,a,s){""===a?s(new Error("请输入密码")):(""!==e.userForm.checkPass&&e.$refs.userForm.validateField("checkPass"),s())},trigger:"blur"}],checkPass:[{required:!0,validator:function(t,a,s){""===a?s(new Error("请再次输入密码")):a!==e.userForm.password?s(new Error("两次输入密码不一致!")):s()},trigger:"blur"}]},list:null,total:null,listLoading:!0,listQuery:{userName:"",pageNo:1,pageSize:10},tableKey:0,pageBoolean:{delColor:"primary",delText:"批量删除",addColor:"success",addText:"添加用户"}}},created:function(){},mounted:function(){this.headers={accessToken:Object(s.a)()},this.getList()},watch:{},methods:{addForm:function(){var e=this;this.$refs.userForm.validate(function(t){if(!t)return!1;Object(o.b)(e.userForm).then(function(t){200===t.code?(e.dialogFormVisible=!1,e.$message({message:"新增成功",type:"success"}),e.getList()):e.$message(t.msg)}).catch(function(e){console.log(e.message)})})},updateForm:function(){var e=this;this.$refs.userForm.validate(function(t){if(!t)return!1;Object(o.f)(e.userForm).then(function(t){200===t.code?(e.dialogFormVisible=!1,e.$message({message:"更新成功",type:"success"}),e.getList()):e.$message(t.msg)}).catch(function(e){console.log(e.message)})})},userCreate:function(){this.userForm={id:"",userName:"",realName:"",phone:"",userType:""},this.dialogFormVisible=!0,this.dialogStatus="create"},getList:function(){var e=this;Object(o.e)(this.listQuery).then(function(t){var a=t.code,s=t.content,o=s.list,n=s.total;200===a?(e.list=o,e.total=n,0===e.total&&e.$message({message:"用户列表为空",type:"warning"}),e.listLoading=!1):(e.listLoading=!1,e.$message(t.msg))}).catch(function(e){console.log(e.message)})},userModify:function(e){var t=this;Object(o.c)(e.id).then(function(e){var a=e.code,s=e.content;200===a&&(t.userForm=s,t.userForm.checkPass=s.password,t.dialogFormVisible=!0,t.dialogStatus="update")})},modifyComplete:function(e){if(!e)return!1;this.getList(),this.dialogFormVisible=!1},warnBeforeDelete:function(e,t){var a=this;this.$confirm("确认删除当前用户？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(s){a.batchDelete(e,t)}).catch(function(e){return console.log(e)})},batchDelete:function(e,t){var a=this;Object(o.a)(t.id).then(function(t){if(200===t.code){a.$message({message:"删除成功",type:"success"});a.list.indexOf(e);a.list.splice(e,1),a.total--}else a.$message({message:"删除失败",type:"error"})}).catch(function(e){console.log(e.message)})},handleFilter:function(){this.listQuery.pageNo=1,this.getList()},handleSizeChange:function(e){this.listQuery.pageSize=e,this.getList()},handleCurrentChange:function(e){this.listQuery.pageNo=e,this.getList()},handleRefresh:function(){this.list=null,this.total=null,this.listQuery.pageNo=1,this.getList()}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container",staticStyle:{"margin-bottom":"20px"}},[a("span",{staticStyle:{"margin-right":"10px"}},[e._v("账户名")]),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px","margin-left":"10px"},attrs:{placeholder:"账户名/姓名"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.userName,callback:function(t){e.$set(e.listQuery,"userName",t)},expression:"listQuery.userName"}}),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索\n    ")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:e.pageBoolean.addColor,icon:"el-icon-plus"},on:{click:e.userCreate}},[e._v(e._s(e.pageBoolean.addText)+"\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,ref:"list",staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"数据加载中，请稍后",border:"",fit:"","highlight-current-row":"","select-on-indeterminate":""}},[a("el-table-column",{attrs:{align:"center",label:"ID","min-width":"40"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"link-type"},[e._v(e._s(t.row.id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"用户名","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"link-type"},[e._v(e._s(t.row.userName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"120",align:"center",label:"姓名","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.realName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"100",align:"center",label:"用户类型","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{class:{adminColor:0===t.row.userType,normalColor:1===t.row.userType}},[e._v(e._s(t.row.userTypeDesc))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"120",align:"center",label:"手机号","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.phone))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"100",align:"center",label:"创建时间","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("dateformat")(t.row.createTime,"YYYY-MM-DD")))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){e.userModify(t.row)}}},[e._v("编辑\n        ")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.warnBeforeDelete(t.$index,t.row)}}},[e._v("删除\n        ")])]}}])})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":e.listQuery.pageNo,"page-sizes":[10,20,30,50],"page-size":e.listQuery.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"pageNo",t)}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"create"==e.dialogStatus?"新增用户":"编辑用户",visible:e.dialogFormVisible,center:""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"userForm",attrs:{model:e.userForm,rules:e.rules}},[a("el-form-item",{attrs:{label:"用户名","label-width":"80px",prop:"userName"}},[a("el-input",{attrs:{"auto-complete":"off",maxlength:"180",placeholder:"请输入用户名"},model:{value:e.userForm.userName,callback:function(t){e.$set(e.userForm,"userName",t)},expression:"userForm.userName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名","label-width":"80px",prop:"realName"}},[a("el-input",{attrs:{"auto-complete":"off",maxlength:"180",placeholder:"请输入真实姓名"},model:{value:e.userForm.realName,callback:function(t){e.$set(e.userForm,"realName",t)},expression:"userForm.realName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号","label-width":"80px",prop:"phone"}},[a("el-input",{attrs:{"auto-complete":"off",maxlength:"16",placeholder:"请输入手机号"},model:{value:e.userForm.phone,callback:function(t){e.$set(e.userForm,"phone",t)},expression:"userForm.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户类型",prop:"userType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.userForm.userType,callback:function(t){e.$set(e.userForm,"userType",t)},expression:"userForm.userType"}},e._l(e.userTypes,function(e){return a("el-option",{key:e.code,attrs:{label:e.msg,value:e.code}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"pass"}},[a("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.userForm.password,callback:function(t){e.$set(e.userForm,"password",t)},expression:"userForm.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[a("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.userForm.checkPass,callback:function(t){e.$set(e.userForm,"checkPass",t)},expression:"userForm.checkPass"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.addForm}},[e._v("确 定")]):a("el-button",{attrs:{type:"primary"},on:{click:e.updateForm}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(n,r,!1,function(e){a("1QHH"),a("BqA7")},"data-v-3c7e4844",null);t.default=i.exports}});
//# sourceMappingURL=6.28fd4ad5b865ace7cd3d.js.map