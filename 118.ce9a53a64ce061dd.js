"use strict";(self.webpackChunkmanage_shop=self.webpackChunkmanage_shop||[]).push([[118],{7118:(Zt,_,r)=>{r.r(_),r.d(_,{OrderModule:()=>Et});var u=r(6814),g=r(4190),t=r(5879),p=r(3365),l=r(3566),d=r(5313),h=r(7700),C=r(6385);function E(e,o){1&e&&t._UZ(0,"mat-divider",12)}function O(e,o){if(1&e&&(t.TgZ(0,"div",5)(1,"div",6),t._UZ(2,"img",7),t.qZA(),t.TgZ(3,"div",8)(4,"div",9)(5,"p",10)(6,"strong"),t._uU(7,"T\xean:"),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"p",10)(10,"strong"),t._uU(11,"Gi\xe1:"),t.qZA(),t._uU(12),t.ALo(13,"currency"),t.qZA(),t.TgZ(14,"p",10)(15,"strong"),t._uU(16,"S\u1ed1 l\u01b0\u1ee3ng:"),t.qZA(),t._uU(17),t.qZA()()(),t.YNc(18,E,1,0,"mat-divider",11),t.qZA()),2&e){const n=o.$implicit,i=o.last;t.xp6(2),t.Q6J("src",n.foodImage,t.LSH),t.xp6(6),t.hij(" ",n.foodName,""),t.xp6(4),t.hij(" ",t.xi3(13,5,n.foodPrice,"VND")," "),t.xp6(5),t.hij(" ",n.quantity," "),t.xp6(1),t.Q6J("ngIf",!i)}}let Z=(()=>{class e{constructor(n){this.data=n,this.totalAmount=0}ngOnInit(){this.calculateTotalAmount()}calculateTotalAmount(){this.totalAmount=this.data.foods.reduce((n,i)=>n+i.foodPrice*i.quantity,0)}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(h.WI))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-detail-order"]],decls:11,vars:5,consts:[[1,"p-5","order-list"],[1,"d-flex","justify-content-around"],[1,"text-center","mb-4"],["class","row",4,"ngFor","ngForOf"],[1,"text-end","mt-4"],[1,"row"],[1,"col","d-flex","justify-content-center","align-items-center"],["width","100px",1,"mx-auto","d-block",3,"src"],[1,"col","d-flex","justify-content-around","align-items-center"],[1,"me-3"],[1,"mb-0","text-truncate"],["class","my-3",4,"ngIf"],[1,"my-3"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Chi ti\u1ebft \u0111\u01a1n h\xe0ng"),t.qZA()(),t.YNc(4,O,19,8,"div",3),t.TgZ(5,"div",4)(6,"h4"),t._uU(7,"T\u1ed5ng ti\u1ec1n: "),t.TgZ(8,"span"),t._uU(9),t.ALo(10,"currency"),t.qZA()()()()),2&i&&(t.xp6(4),t.Q6J("ngForOf",a.data.foods),t.xp6(5),t.Oqu(t.xi3(10,2,a.totalAmount,"VND")))},dependencies:[u.sg,u.O5,C.d,u.H9],styles:[".order-list[_ngcontent-%COMP%]{max-height:450px;overflow-y:auto}"]})}return e})();var s=function(e){return e.PENDING="PENDING",e.ACCEPTED="ACCEPTED",e.DENIED="DENIED",e.DELIVERING="DELIVERING",e.COMPLETED="COMPLETED",e}(s||{}),f=function(e){return e.CASH="CASH",e.ONLINE="ONLINE",e}(f||{}),x=r(7398),y=r(6487);let D=(()=>{class e{constructor(n){this.db=n,this.orderRef=n.list("Orders")}getAllOrders(){return this.orderRef.snapshotChanges().pipe((0,x.U)(n=>n.map(i=>({key:i.payload.key,...i.payload.val()}))))}getOrdersByShopId(n){return this.db.list("Orders",i=>i.orderByChild("shopId").equalTo(n)).snapshotChanges().pipe((0,x.U)(i=>i.map(a=>{const c=a.payload.val();return{key:a.payload.key,...c||{}}})))}updateOrder(n,i){return this.orderRef.update(n,i)}static#t=this.\u0275fac=function(i){return new(i||e)(t.LFG(y.KQ))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var A=r(872),N=r(4300),L=r(3942),U=r(4321),v=r(1175),T=r(2296);function S(e,o){1&e&&(t.TgZ(0,"th",25),t._uU(1,"Chi ti\u1ebft"),t.qZA())}function I(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"td",26)(1,"button",27),t.NdJ("click",function(){const c=t.CHM(n).$implicit,m=t.oxw(2);return t.KtG(m.openOrderDetails(c))}),t.TgZ(2,"mat-icon"),t._uU(3,"visibility"),t.qZA()()()}}function Y(e,o){1&e&&(t.TgZ(0,"th",28),t._uU(1," Kh\xe1ch h\xe0ng "),t.qZA())}function B(e,o){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function b(e,o){1&e&&(t.TgZ(0,"th",28),t._uU(1," S\u0110T "),t.qZA())}function Q(e,o){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.phoneNumber," ")}}function w(e,o){1&e&&(t.TgZ(0,"th",30),t._uU(1," \u0110\u1ecba ch\u1ec9 "),t.qZA())}function k(e,o){if(1&e&&(t.TgZ(0,"td",31),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.s9C("title",n.address),t.xp6(1),t.hij(" ",n.address," ")}}function P(e,o){1&e&&(t.TgZ(0,"th",28),t._uU(1," Ng\xe0y \u0111\u1eb7t "),t.qZA())}function M(e,o){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.dateScheduled," ")}}function G(e,o){1&e&&(t.TgZ(0,"th",28),t._uU(1," T/G \u0111\u1eb7t "),t.qZA())}function J(e,o){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.timeScheduled," ")}}function H(e,o){1&e&&(t.TgZ(0,"th",28),t._uU(1," Ph\u01b0\u01a1ng th\u1ee9c giao "),t.qZA())}function F(e,o){if(1&e&&(t.TgZ(0,"td",29),t._UZ(1,"i",32),t._uU(2),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Q6J("ngClass",n.isScheduled?"fas fa-calendar":"fas fa-truck"),t.xp6(1),t.hij(" ",n.isScheduled?"H\u1eb9n tr\u01b0\u1edbc":"Giao ngay"," ")}}function j(e,o){1&e&&(t.TgZ(0,"th",28),t._uU(1," Thanh to\xe1n "),t.qZA())}function q(e,o){if(1&e&&(t.TgZ(0,"td",29),t._UZ(1,"i",33),t._uU(2),t.qZA()),2&e){const n=o.$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("ngClass",i.getPaymentIcon(n.paymentMethod)),t.xp6(1),t.hij(" ",n.paymentMethod," ")}}function R(e,o){1&e&&(t.TgZ(0,"th",28),t._uU(1," Tr\u1ea1ng th\xe1i "),t.qZA())}function $(e,o){if(1&e&&(t.TgZ(0,"td",29)(1,"span",34),t._UZ(2,"i",33),t._uU(3),t.qZA()()),2&e){const n=o.$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("ngClass",i.getStatusClass(n.status)),t.xp6(1),t.Q6J("ngClass",i.getStatusIcon(n.status)),t.xp6(1),t.hij(" ",n.status," ")}}function z(e,o){1&e&&(t.TgZ(0,"th",28),t._uU(1," T/G x\xe1c nh\u1eadn "),t.qZA())}function K(e,o){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.acceptedTime?n.acceptedTime:"Ch\u01b0a x\xe1c nh\u1eadn"," ")}}function X(e,o){1&e&&(t.TgZ(0,"th",28),t._uU(1," Ng\xe0y x\xe1c nh\u1eadn "),t.qZA())}function V(e,o){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.acceptedDate?n.acceptedDate:"Ch\u01b0a x\xe1c nh\u1eadn"," ")}}function W(e,o){1&e&&(t.TgZ(0,"th",25),t._uU(1,"X\xe1c nh\u1eadn"),t.qZA())}function tt(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",38),t.NdJ("click",function(){t.CHM(n);const a=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.acceptOrder(a))}),t.TgZ(1,"mat-icon"),t._uU(2,"done"),t.qZA()()}}function et(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",39),t.NdJ("click",function(){t.CHM(n);const a=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.deliveringOrder(a))}),t.TgZ(1,"mat-icon"),t._uU(2,"local_shipping"),t.qZA()()}}function nt(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",40),t.NdJ("click",function(){t.CHM(n);const a=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.deniedOrder(a))}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}const it=function(){return["denied","completed"]};function ot(e,o){if(1&e&&(t.TgZ(0,"td",29),t.YNc(1,tt,3,0,"button",35),t.YNc(2,et,3,0,"button",36),t.YNc(3,nt,3,0,"button",37),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Q6J("ngIf","pending"===n.status.toLowerCase()),t.xp6(1),t.Q6J("ngIf","accepted"===n.status.toLowerCase()),t.xp6(1),t.Q6J("ngIf",!t.DdM(3,it).includes(n.status.toLowerCase()))}}function rt(e,o){1&e&&t._UZ(0,"tr",41)}function at(e,o){1&e&&t._UZ(0,"tr",42)}const ct=function(){return[5,10,20,50]};function st(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div")(1,"div",2)(2,"table",3),t.NdJ("matSortChange",function(a){t.CHM(n);const c=t.oxw();return t.KtG(c.announceSortChange(a))}),t.ynx(3,4),t.YNc(4,S,2,0,"th",5),t.YNc(5,I,4,0,"td",6),t.BQk(),t.ynx(6,7),t.YNc(7,Y,2,0,"th",8),t.YNc(8,B,2,1,"td",9),t.BQk(),t.ynx(9,10),t.YNc(10,b,2,0,"th",8),t.YNc(11,Q,2,1,"td",9),t.BQk(),t.ynx(12,11),t.YNc(13,w,2,0,"th",12),t.YNc(14,k,2,2,"td",13),t.BQk(),t.ynx(15,14),t.YNc(16,P,2,0,"th",8),t.YNc(17,M,2,1,"td",9),t.BQk(),t.ynx(18,15),t.YNc(19,G,2,0,"th",8),t.YNc(20,J,2,1,"td",9),t.BQk(),t.ynx(21,16),t.YNc(22,H,2,0,"th",8),t.YNc(23,F,3,2,"td",9),t.BQk(),t.ynx(24,17),t.YNc(25,j,2,0,"th",8),t.YNc(26,q,3,2,"td",9),t.BQk(),t.ynx(27,18),t.YNc(28,R,2,0,"th",8),t.YNc(29,$,4,3,"td",9),t.BQk(),t.ynx(30,19),t.YNc(31,z,2,0,"th",8),t.YNc(32,K,2,1,"td",9),t.BQk(),t.ynx(33,20),t.YNc(34,X,2,0,"th",8),t.YNc(35,V,2,1,"td",9),t.BQk(),t.ynx(36,21),t.YNc(37,W,2,0,"th",5),t.YNc(38,ot,4,4,"td",9),t.BQk(),t.YNc(39,rt,1,0,"tr",22),t.YNc(40,at,1,0,"tr",23),t.qZA()(),t._UZ(41,"mat-paginator",24),t.qZA()}if(2&e){const n=t.oxw();t.xp6(2),t.Q6J("dataSource",n.dataSource),t.xp6(37),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSize",10)("pageSizeOptions",t.DdM(5,ct))}}let dt=(()=>{class e{constructor(n,i,a,c,m,Ot){this.orderService=n,this.authService=i,this._liveAnnouncer=a,this.dialog=c,this.snackbar=m,this.datePipe=Ot,this.displayedColumns=["actions","name","phone","address","dateScheduled","timeScheduled","isScheduled","payment","status","acceptedTime","acceptedDate","accept"],this.orders=[],this.isLoading=!1}ngOnInit(){this.getOrders()}getOrders(){this.isLoading=!0,this.authService.getCurrentUser().subscribe(n=>{this.orderService.getOrdersByShopId(n.shopId).subscribe(i=>{this.dataSource=new d.by(i),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort,this.isLoading=!1})})}openOrderDetails(n){this.dialog.open(Z,{data:n})}announceSortChange(n){this._liveAnnouncer.announce(n.direction?`Sorted ${n.direction}ending`:"Sorting cleared")}acceptOrder(n){n.status=s.ACCEPTED;const i=this.datePipe.transform(new Date,"HH:mm"),a=this.datePipe.transform(new Date,"dd/MM/yyyy");n.acceptedTime=i,n.acceptedDate=a,this.orderService.updateOrder(n.key,n).then(()=>{this.snackbar.openSnackBar("\u0110\xe3 x\xe1c nh\u1eadn \u0111\u01a1n h\xe0ng.")}).catch(c=>{console.error(c)})}deniedOrder(n){n.status=s.DENIED,this.orderService.updateOrder(n.key,n).then(()=>{this.snackbar.openSnackBar("\u0110\u01a1n h\xe0ng \u0111\xe3 b\u1ecb hu\u1ef7.","DONE")}).catch(i=>{console.error(i)})}deliveringOrder(n){n.status=s.DELIVERING,this.orderService.updateOrder(n.key,n).then(()=>{this.snackbar.openSnackBar("\u0110\u01a1n h\xe0ng \u0111\xe3 \u0111\u01b0\u1ee3c giao!","DONE")}).catch(i=>{console.error(i)})}getStatusClass(n){switch(n){case s.PENDING:return"text-info";case s.ACCEPTED:return"text-primary";case s.DENIED:return"text-danger";case s.DELIVERING:return"text-warning pulsating-text";case s.COMPLETED:return"text-green";default:return""}}getStatusIcon(n){switch(n){case s.PENDING:return"fa-hourglass-half rotating-icon";case s.ACCEPTED:return"fa-check-circle";case s.DENIED:return"fa-times-circle";case s.DELIVERING:return"fa-truck";case s.COMPLETED:return"fa-check";default:return""}}getPaymentIcon(n){switch(n){case f.CASH:return"fa-money-bill";case f.ONLINE:return"fa-credit-card";default:return""}}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(D),t.Y36(A.e),t.Y36(N.Kd),t.Y36(h.uw),t.Y36(L.c),t.Y36(u.uU))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-list-order"]],viewQuery:function(i,a){if(1&i&&(t.Gf(p.NW,5),t.Gf(l.YE,5)),2&i){let c;t.iGM(c=t.CRH())&&(a.paginator=c.first),t.iGM(c=t.CRH())&&(a.sort=c.first)}},decls:2,vars:2,consts:[[4,"ngIf"],[3,"isLoading"],[1,"table-responsive","mt-4"],["mat-table","","matSort","",3,"dataSource","matSortChange"],["matColumnDef","actions"],["mat-header-cell","","class","fw-bold",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","","class","fw-bold","style","max-width: fit-content;",4,"matHeaderCellDef"],["mat-cell","","class","text-truncate",4,"matCellDef"],["matColumnDef","phone"],["matColumnDef","address"],["mat-header-cell","","mat-sort-header","","class","fw-bold",4,"matHeaderCellDef"],["mat-cell","","class","text-truncate","style","max-width: 200px;",3,"title",4,"matCellDef"],["matColumnDef","dateScheduled"],["matColumnDef","timeScheduled"],["matColumnDef","isScheduled"],["matColumnDef","payment"],["matColumnDef","status"],["matColumnDef","acceptedTime"],["matColumnDef","acceptedDate"],["matColumnDef","accept"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSize","pageSizeOptions"],["mat-header-cell","",1,"fw-bold"],["mat-cell",""],["mat-icon-button","","color","primary","title","Xem chi ti\u1ebft \u0111\u01a1n h\xe0ng",3,"click"],["mat-header-cell","","mat-sort-header","",1,"fw-bold",2,"max-width","fit-content"],["mat-cell","",1,"text-truncate"],["mat-header-cell","","mat-sort-header","",1,"fw-bold"],["mat-cell","",1,"text-truncate",2,"max-width","200px",3,"title"],[1,"me-1",3,"ngClass"],[1,"me-1","fas",3,"ngClass"],[3,"ngClass"],["mat-icon-button","","color","primary","title","X\xe1c nh\u1eadn \u0111\u01a1n h\xe0ng",3,"click",4,"ngIf"],["mat-icon-button","","color","primary","title","Giao h\xe0ng",3,"click",4,"ngIf"],["mat-icon-button","","color","warn","title","Hu\u1ef7 \u0111\u01a1n h\xe0ng",3,"click",4,"ngIf"],["mat-icon-button","","color","primary","title","X\xe1c nh\u1eadn \u0111\u01a1n h\xe0ng",3,"click"],["mat-icon-button","","color","primary","title","Giao h\xe0ng",3,"click"],["mat-icon-button","","color","warn","title","Hu\u1ef7 \u0111\u01a1n h\xe0ng",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(i,a){1&i&&(t.YNc(0,st,42,6,"div",0),t._UZ(1,"app-loading-dots",1)),2&i&&(t.Q6J("ngIf",!a.isLoading),t.xp6(1),t.Q6J("isLoading",a.isLoading))},dependencies:[u.mk,u.O5,U.l,d.BZ,d.fO,d.as,d.w1,d.Dz,d.nj,d.ge,d.ev,d.XQ,d.Gk,p.NW,l.YE,l.nU,v.Hw,T.RK],styles:[".text-green[_ngcontent-%COMP%]{color:green}@keyframes _ngcontent-%COMP%_pulse{0%{opacity:1}50%{opacity:.5}to{opacity:1}}.pulsating-text[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse 1.5s infinite}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.rotating-icon[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_rotate 2s linear infinite}"]})}return e})();const ut=[{path:"",component:(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-order"]],decls:1,vars:0,template:function(i,a){1&i&&t._UZ(0,"app-list-order")},dependencies:[dt]})}return e})()}];let lt=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(ut),g.Bz]})}return e})();var mt=r(8308),pt=r(4170),ht=r(8525),ft=r(2032),_t=r(5986),gt=r(9038),Ct=r(4104),xt=r(5195),vt=r(5940),Tt=r(9014);let Et=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({providers:[u.uU],imports:[u.ez,lt,mt.m,d.p0,p.TU,l.JX,v.Ps,T.ot,pt.lN,ht.LD,ft.c,_t.p9,h.Is,C.t,gt.ie,Ct.Nh,xt.QW,vt.Cq,Tt.g]})}return e})()}}]);