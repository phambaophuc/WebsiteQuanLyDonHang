"use strict";(self.webpackChunkmanage_shop=self.webpackChunkmanage_shop||[]).push([[53],{3053:(ut,C,a)=>{a.r(C),a.d(C,{InvoiceModule:()=>dt,MY_DATE_FORMATS:()=>I});var T=a(6814),D=a(4190),p=a(3365),d=a(3566),l=a(5313),L=a(5246),t=a(5879),y=a(872),Y=a(4300),E=a(9275),S=a(1387),Z=a(7700),x=a(1175),f=a(2296),m=a(4170),_=a(2032),u=a(8034),h=a(7466),g=a(6223),N=a(4321);function U(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"mat-form-field")(1,"mat-label"),t._uU(2,"Ch\u1ecdn ng\xe0y"),t.qZA(),t.TgZ(3,"input",27),t.NdJ("ngModelChange",function(i){t.CHM(n);const s=t.oxw();return t.KtG(s.date=i)})("dateChange",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.filterDateChange())}),t.qZA(),t._UZ(4,"mat-datepicker-toggle",28)(5,"mat-datepicker",null,29),t.qZA()}if(2&e){const n=t.MAs(6),o=t.oxw();t.xp6(3),t.Q6J("matDatepicker",n)("ngModel",o.date),t.xp6(1),t.Q6J("for",n)}}function J(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"div")(1,"mat-form-field",30)(2,"mat-label"),t._uU(3,"Start Date:"),t.qZA(),t.TgZ(4,"input",27),t.NdJ("ngModelChange",function(i){t.CHM(n);const s=t.oxw();return t.KtG(s.startDate=i)})("dateChange",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.filterDateChange())}),t.qZA(),t._UZ(5,"mat-datepicker-toggle",28)(6,"mat-datepicker",null,29),t.qZA(),t.TgZ(8,"mat-form-field")(9,"mat-label"),t._uU(10,"End Date:"),t.qZA(),t.TgZ(11,"input",27),t.NdJ("ngModelChange",function(i){t.CHM(n);const s=t.oxw();return t.KtG(s.endDate=i)})("dateChange",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.filterDateRangeChange())}),t.qZA(),t._UZ(12,"mat-datepicker-toggle",28)(13,"mat-datepicker",null,31),t.qZA()()}if(2&e){const n=t.MAs(7),o=t.MAs(14),i=t.oxw();t.xp6(4),t.Q6J("matDatepicker",n)("ngModel",i.startDate),t.xp6(1),t.Q6J("for",n),t.xp6(6),t.Q6J("matDatepicker",o)("ngModel",i.endDate),t.xp6(1),t.Q6J("for",o)}}function Q(e,c){1&e&&(t.TgZ(0,"th",32),t._uU(1," M\xe3 "),t.qZA())}function b(e,c){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=c.$implicit;t.xp6(1),t.hij(" ",n.key," ")}}function F(e,c){1&e&&(t.TgZ(0,"th",32),t._uU(1," Kh\xe1ch h\xe0ng "),t.qZA())}function R(e,c){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=c.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function B(e,c){1&e&&(t.TgZ(0,"th",32),t._uU(1," S\u0110T "),t.qZA())}function w(e,c){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=c.$implicit;t.xp6(1),t.hij(" ",n.phoneNumber," ")}}function H(e,c){1&e&&(t.TgZ(0,"th",32),t._uU(1," \u0110\u1ecba ch\u1ec9 "),t.qZA())}function G(e,c){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const n=c.$implicit;t.s9C("title",n.address),t.xp6(1),t.hij(" ",n.address," ")}}function K(e,c){1&e&&(t.TgZ(0,"th",32),t._uU(1," Ng\xe0y t\u1ea1o "),t.qZA())}function j(e,c){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=c.$implicit;t.xp6(1),t.hij(" ",n.createdDate," ")}}function k(e,c){1&e&&(t.TgZ(0,"th",32),t._uU(1," T\u1ed5ng ti\u1ec1n "),t.qZA())}function O(e,c){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const n=c.$implicit;t.xp6(1),t.hij(" ",n.totalPrice," ")}}function z(e,c){1&e&&(t.TgZ(0,"th",35),t._uU(1,"Chi ti\u1ebft"),t.qZA())}function $(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"td",36)(1,"button",37),t.NdJ("click",function(){const s=t.CHM(n).$implicit,r=t.oxw();return t.KtG(r.openOrderDetails(s))}),t.TgZ(2,"mat-icon"),t._uU(3,"visibility"),t.qZA()()()}}function P(e,c){1&e&&t._UZ(0,"tr",38)}function X(e,c){1&e&&t._UZ(0,"tr",39)}const W=function(){return[5,10,20,50]},q=[{path:"",component:(()=>{class e{constructor(n,o,i,s,r){this.authService=n,this._liveAnnouncer=o,this.invoiceService=i,this.excelService=s,this.dialog=r,this.displayedColumns=["key","name","phone","address","totalPrice","createdDate","details"],this.invoices=[],this.isLoading=!1,this.endDate=new Date,this.btnfilterType="date",this.textFilter=""}ngOnInit(){this.getAllInvoices()}exportToExcel(){this.excelService.exportInvoiceToExcel(this.invoices,"invoices")}getAllInvoices(){this.isLoading=!0,this.authService.getCurrentUser().subscribe(n=>{this.invoiceService.getInvoicesByShopId(n.shopId).subscribe(o=>{this.invoices=o,this.dataSource=new l.by(o),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort,this.isLoading=!1})})}openOrderDetails(n){this.dialog.open(L.o,{data:n})}announceSortChange(n){this._liveAnnouncer.announce(n.direction?`Sorted ${n.direction}ending`:"Sorting cleared")}filterChange(n){this.dataSource.filter=n.target.value.trim().toLowerCase()}filterDateChange(){if("date"===this.btnfilterType){const n=new Date(this.date),o=this.invoiceService.formatDate(n);this.dataSource.filter=o}else"dateRange"===this.btnfilterType&&this.filterDateRangeChange()}filterDateRangeChange(){const n=new Date(this.startDate),o=new Date(this.endDate);this.dataSource.filterPredicate=(i,s)=>{const r=new Date(i.createdDate),mt=this.invoiceService.formatDate(r),v=new Date(mt),M=new Date(v.getFullYear(),v.getMonth(),v.getDate());return M>=n&&M<=o},this.dataSource.filter="custom"}resetFilter(){this.date=null,this.startDate=null,this.dataSource.filter=""}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(y.e),t.Y36(Y.Kd),t.Y36(E.q),t.Y36(S.x),t.Y36(Z.uw))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-list-invoice"]],viewQuery:function(o,i){if(1&o&&(t.Gf(p.NW,5),t.Gf(d.YE,5)),2&o){let s;t.iGM(s=t.CRH())&&(i.paginator=s.first),t.iGM(s=t.CRH())&&(i.sort=s.first)}},decls:50,vars:10,consts:[[1,"mt-4"],["mat-button","","color","accent","type","button",3,"click"],[1,"d-flex","justify-content-between"],[3,"ngModel","ngModelChange"],["value","date"],["value","dateRange"],[4,"ngIf"],["mat-button","","color","primary",1,"float-end",3,"click"],["matInput","",3,"keyup"],[1,"table-responsive","mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource","matSortChange"],["matColumnDef","key"],["mat-header-cell","","mat-sort-header","","class","fw-bold",4,"matHeaderCellDef"],["mat-cell","","class","text-truncate",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","phone"],["matColumnDef","address"],["mat-cell","","class","text-truncate",3,"title",4,"matCellDef"],["matColumnDef","createdDate"],["matColumnDef","totalPrice"],["matColumnDef","details"],["mat-header-cell","","class","fw-bold",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSize","pageSizeOptions"],[3,"isLoading"],["matInput","",3,"matDatepicker","ngModel","ngModelChange","dateChange"],["matSuffix","",3,"for"],["startDatePicker",""],[1,"me-2"],["endDatePicker",""],["mat-header-cell","","mat-sort-header","",1,"fw-bold"],["mat-cell","",1,"text-truncate"],["mat-cell","",1,"text-truncate",3,"title"],["mat-header-cell","",1,"fw-bold"],["mat-cell",""],["mat-icon-button","","color","primary","title","Xem chi ti\u1ebft \u0111\u01a1n h\xe0ng",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return i.resetFilter()}),t._uU(2,"Reset data"),t.qZA(),t.TgZ(3,"div",2)(4,"div")(5,"div")(6,"mat-radio-group",3),t.NdJ("ngModelChange",function(r){return i.btnfilterType=r}),t.TgZ(7,"mat-radio-button",4),t._uU(8,"L\u1ecdc theo ng\xe0y c\u1ee5 th\u1ec3"),t.qZA(),t.TgZ(9,"mat-radio-button",5),t._uU(10,"L\u1ecdc theo kho\u1ea3ng ng\xe0y"),t.qZA()()(),t.YNc(11,U,7,3,"mat-form-field",6),t.YNc(12,J,15,6,"div",6),t.qZA(),t.TgZ(13,"div")(14,"button",7),t.NdJ("click",function(){return i.exportToExcel()}),t.TgZ(15,"mat-icon"),t._uU(16,"file_download"),t.qZA(),t._uU(17," Export to Excel "),t.qZA(),t.TgZ(18,"div")(19,"mat-form-field")(20,"mat-label"),t._uU(21,"D\u1eef li\u1ec7u c\u1ea7n t\xecm"),t.qZA(),t.TgZ(22,"input",8),t.NdJ("keyup",function(r){return i.filterChange(r)}),t.qZA()()()()(),t.TgZ(23,"div",9)(24,"table",10),t.NdJ("matSortChange",function(r){return i.announceSortChange(r)}),t.ynx(25,11),t.YNc(26,Q,2,0,"th",12),t.YNc(27,b,2,1,"td",13),t.BQk(),t.ynx(28,14),t.YNc(29,F,2,0,"th",12),t.YNc(30,R,2,1,"td",13),t.BQk(),t.ynx(31,15),t.YNc(32,B,2,0,"th",12),t.YNc(33,w,2,1,"td",13),t.BQk(),t.ynx(34,16),t.YNc(35,H,2,0,"th",12),t.YNc(36,G,2,2,"td",17),t.BQk(),t.ynx(37,18),t.YNc(38,K,2,0,"th",12),t.YNc(39,j,2,1,"td",13),t.BQk(),t.ynx(40,19),t.YNc(41,k,2,0,"th",12),t.YNc(42,O,2,1,"td",13),t.BQk(),t.ynx(43,20),t.YNc(44,z,2,0,"th",21),t.YNc(45,$,4,0,"td",22),t.BQk(),t.YNc(46,P,1,0,"tr",23),t.YNc(47,X,1,0,"tr",24),t.qZA()(),t._UZ(48,"mat-paginator",25)(49,"app-loading-dots",26),t.qZA()),2&o&&(t.xp6(6),t.Q6J("ngModel",i.btnfilterType),t.xp6(5),t.Q6J("ngIf","date"===i.btnfilterType),t.xp6(1),t.Q6J("ngIf","dateRange"===i.btnfilterType),t.xp6(12),t.Q6J("dataSource",i.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(1),t.Q6J("pageSize",10)("pageSizeOptions",t.DdM(9,W)),t.xp6(1),t.Q6J("isLoading",i.isLoading))},dependencies:[T.O5,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,p.NW,d.YE,d.nU,x.Hw,f.lW,f.RK,m.KE,m.hX,m.R9,_.Nt,u.Mq,u.hl,u.nW,h.VQ,h.U0,g.Fj,g.JJ,g.On,N.l]})}return e})()}];let V=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[D.Bz.forChild(q),D.Bz]})}return e})();var tt=a(8525),et=a(5986),nt=a(6385),it=a(9038),ot=a(4104),at=a(5195),ct=a(5940),st=a(9014),lt=a(8308),A=a(3680),rt=a(3445);const I={parse:{dateInput:"DD/MM/YYYY"},display:{dateInput:"DD/MM/YYYY",monthYearLabel:"MMMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}};let dt=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({providers:[{provide:A.sG,useValue:I}],imports:[T.ez,V,l.p0,p.TU,d.JX,x.Ps,f.ot,m.lN,tt.LD,_.c,et.p9,Z.Is,nt.t,it.ie,ot.Nh,at.QW,ct.Cq,st.g,u.FA,A.XK,rt.bg,h.Fk,lt.m]})}return e})()}}]);