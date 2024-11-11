"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[5602],{5602:(M,C,o)=>{o.r(C),o.d(C,{FormLayoutDemoModule:()=>B});var c=o(6814),n=o(95),m=o(3557),v=o(9862),h=o(5219),e=o(4769),p=o(8814),d=o(4104),u=o(7327),_=o(707),D=o(3714);const S=["itemInput"];function Z(l,g){1&l&&(e.TgZ(0,"div",25),e._UZ(1,"div")(2,"div")(3,"div")(4,"div")(5,"div"),e.qZA())}function k(l,g){1&l&&e._UZ(0,"div",26)}const b=function(){return{standalone:!0}};let I=(()=>{var l;class g{constructor(s,t,a,i,r,f,A){this.router=s,this.renderer=t,this.fb=a,this.http=i,this.messageService=r,this.confirmationService=f,this.api=A,this.filteredCountries=[],this.countries=[],this.selectedState=null,this.spinner=!1,this.alert_type="",this.client_id=+localStorage.getItem("c_id"),this.cities2=[{unit_name:"Energy",unit:"EN"},{unit_name:"Water",unit:"WA"},{unit_name:"Wind",unit:"WI"}],this.states=[{name:"Arizona",code:"Arizona"},{name:"California",value:"California"},{name:"Florida",code:"Florida"},{name:"Ohio",code:"Ohio"},{name:"Washington",code:"Washington"}],this.dropdownItems=[{name:"Option 1",code:"Option 1"},{name:"Option 2",code:"Option 2"},{name:"Option 3",code:"Option 3"}],this.cities1=[],this.city1=null,this.city2=null,this.modelList=[],this.dealerList=[],this.lastAddedIndex=-1,this.stockIn=this.fb.group({device_id:[0,n.kI.required],device:["",n.kI.required],device_type:["",n.kI.required],do_channel:[0,n.kI.required],relay_close_time:["",n.kI.required],timer_start_hours:["",n.kI.required],timer_start_minutes:["",n.kI.required],timer_stop_hours_1:["",n.kI.required],timer_stop_minutes_1:["",n.kI.required]})}ngOnInit(){this.ct=this.stockIn.controls,this.getDevice()}resetData(){this.stockIn.reset(),this.selectedCountryAdvanced=[],this.selectedDealer=[]}getDevice(){const s={client_id:this.client_id},t=this.api.baseUrl,a=localStorage.getItem("token"),i=(new v.WM).set("Authorization",`Bearer ${a}`);this.spinner=!0,this.http.post(t+"/client/devices/list",s,{headers:i}).subscribe(r=>{console.log(r),this.spinner=!1,this.data=r,this.models=this.data.data,this.filteredCountries=this.cities1[0],console.log(this.selectedDealer)},r=>{"401"==r.status&&this.router.navigate(["/"]),console.log(r.status),this.spinner=!1,"401"==r.status&&this.router.navigate(["/"]),console.log(r.status)})}getDeviceModel(){const s=this.api.baseUrl,t=localStorage.getItem("token"),a=(new v.WM).set("Authorization",`Bearer ${t}`);this.http.get(s+"/master/model_name",{headers:a}).subscribe(i=>{console.log(i),this.modelList=i,this.models=this.modelList.data},i=>{"401"==i.status&&this.router.navigate(["/"]),console.log(i.status),console.error(i)})}getDealer(){const s=this.api.baseUrl,t=localStorage.getItem("token"),a=(new v.WM).set("Authorization",`Bearer ${t}`);this.http.get(s+"/seller/list",{headers:a}).subscribe(i=>{console.log(i),this.dealerList=i,this.dealer=this.dealerList.data},i=>{"401"==i.status&&this.router.navigate(["/"]),console.log(i.status),console.error(i)})}insertStockData(){this.spinner=!0;const s={device_id:this.selectedCountryAdvanced.device_id,device:this.selectedCountryAdvanced.device,device_type:this.selectedCountryAdvanced.device_type,do_channel:0,relay_close_time:this.ct.relay_close_time.value,timer_start_hours:this.ct.timer_start_hours.value,timer_start_minutes:this.ct.timer_start_minutes.value,timer_stop_hours_1:this.ct.timer_stop_hours_1.value,timer_stop_minutes_1:this.ct.timer_stop_minutes_1.value},t=this.api.baseUrl,a=localStorage.getItem("token"),i=(new v.WM).set("Authorization",`Bearer ${a}`);this.http.post(t+"/mqtt/publish_schedule",s,{headers:i}).subscribe(r=>{console.log(r),"success"==r.status?(this.spinner=!1,this.messageService.add({severity:"success",summary:"Successful",detail:"Settings Updated",life:3e3}),this.resetData()):(this.spinner=!1,this.messageService.add({severity:"error",summary:"Error",detail:"Data Related Issue!!",life:3e3}))},r=>{"401"==r.status&&this.router.navigate(["/"]),console.log(r.status),console.error(r),this.spinner=!1,this.messageService.add({severity:"error",summary:"Error",detail:"From Server Side !!",life:3e3})})}filterCountry(s){const t=[],a=s.query;for(let i=0;i<this.models.length;i++){const r=this.models[i];0==r.device.toLowerCase().indexOf(a.toLowerCase())&&t.push(r)}this.filteredCountries=t}filterDealer(s){const t=[],a=s.query;for(let i=0;i<this.cities2.length;i++){const r=this.cities2[i];0==r.unit_name.toLowerCase().indexOf(a.toLowerCase())&&t.push(r)}this.filteredDealer=t}setWarranty(){this.warr_in_month=this.warr_in_month?this.warr_in_month:0;const s=new Date(this.ct.purchase_date.value);isNaN(s.getTime())?console.error("Invalid date input"):(s.setMonth(s.getMonth()+Number(this.warr_in_month)),this.stockIn.get("warranty_expired").setValue(s))}selected(){this.spinner=!0,console.log(this.selectedCountryAdvanced),this.modelID=this.selectedCountryAdvanced.device_id,this.company_n=this.selectedCountryAdvanced.devices;const s={client_id:this.client_id,device_id:this.selectedCountryAdvanced.device_id,device:this.selectedCountryAdvanced.device},t=this.api.baseUrl,a=localStorage.getItem("token"),i=new v.WM({Authorization:`Bearer ${a}`,Accept:"*/*","Content-Type":"application/json"});this.http.post(t+"/client/device_schedule",s,{headers:i}).subscribe(r=>{if(this.spinner=!1,console.log(r),this.dealerList=r,"EN"===this.dealerList?.data?.device_type){const f=this.cities2.find(A=>"Energy"===A?.unit_name);f&&(this.selectedDealer=f)}this.stockIn.patchValue({device_type:this.dealerList?.data?.device_type,do_channel:0,relay_close_time:this.dealerList?.data?.relay_close_time,timer_start_hours:this.dealerList?.data?.timer_start_hours,timer_start_minutes:this.dealerList?.data?.timer_start_minutes,timer_stop_hours_1:this.dealerList?.data?.timer_stop_hours_1,timer_stop_minutes_1:this.dealerList?.data?.timer_stop_minutes_1})},r=>{this.spinner=!1,"401"==r.status&&this.router.navigate(["/"]),console.log(r.status),console.error(r)})}setDealer(){}get skillsFormArray(){return this.stockIn.get("sl_no")}addSkill(){this.skillsFormArray.push(this.fb.control(""))}removeSkill(s){this.skillsFormArray.removeAt(s)}addItem(s){13===s.keyCode&&(this.addSkill(),this.lastAddedIndex=this.skillsFormArray.length,this.lastAddedIndex=this.skillsFormArray.length-1)}formatedDate(s){const a=new Date(s),A=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;return console.log(A),A}}return(l=g).\u0275fac=function(s){return new(s||l)(e.Y36(m.F0),e.Y36(e.Qsj),e.Y36(n.qu),e.Y36(v.eN),e.Y36(h.ez),e.Y36(h.YP),e.Y36(p.s))},l.\u0275cmp=e.Xpm({type:l,selectors:[["ng-component"]],viewQuery:function(s,t){if(1&s&&e.Gf(S,5),2&s){let a;e.iGM(a=e.CRH())&&(t.itemInput=a.first)}},features:[e._Bn([h.ez,h.YP])],decls:45,vars:13,consts:[[1,"grid"],[1,"col-8"],[1,"card"],[2,"display","flex"],[3,"formGroup"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-6"],["htmlFor","firstname2"],["field","device",3,"ngModel","ngModelOptions","suggestions","dropdown","ngModelChange","onSelect","completeMethod"],[1,"field","col-12","md:col-3"],["field","unit_name",3,"ngModel","ngModelOptions","suggestions","dropdown","ngModelChange","onSelect","completeMethod"],["htmlFor","lastname2"],["pInputText","","formControlName","relay_close_time","type","time"],["htmlFor","city"],["pInputText","","formControlName","timer_start_hours","type","time"],["pInputText","","formControlName","timer_start_minutes","type","time"],["pInputText","","formControlName","timer_stop_hours_1","type","time"],["pInputText","","formControlName","timer_stop_minutes_1","type","time"],[1,"field","col-12","md:col-12"],["icon","pi pi-check","styleClass","p-button-primary ","label","Update Settings",3,"click"],["icon","pi pi-refresh","styleClass","p-button-danger","label","Reset",3,"click"],[1,"field","col-12","md:col-2"],[1,"col-4",2,"justify-content","center"],["class","loader",4,"ngIf"],["class","overlay",4,"ngIf"],[1,"loader"],[1,"overlay"]],template:function(s,t){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4"),e._uU(5,"Manage Scheduling"),e.qZA()(),e.TgZ(6,"form",4)(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10,"Select Device"),e.qZA(),e.TgZ(11,"p-autoComplete",8),e.NdJ("ngModelChange",function(i){return t.selectedCountryAdvanced=i})("onSelect",function(){return t.selected()})("completeMethod",function(i){return t.filterCountry(i)}),e.qZA()(),e.TgZ(12,"div",9)(13,"label",7),e._uU(14,"DO TYPE:"),e.qZA(),e.TgZ(15,"p-autoComplete",10),e.NdJ("ngModelChange",function(i){return t.selectedDealer=i})("onSelect",function(){return t.setDealer()})("completeMethod",function(i){return t.filterDealer(i)}),e.qZA()(),e.TgZ(16,"div",9)(17,"label",11),e._uU(18,"Relay Close Time"),e.qZA(),e._UZ(19,"input",12),e.qZA(),e.TgZ(20,"div",9)(21,"label",13),e._uU(22,"Timer Start Hrs"),e.qZA(),e._UZ(23,"input",14),e.qZA(),e.TgZ(24,"div",9)(25,"label",13),e._uU(26,"Timer Start Min"),e.qZA(),e._UZ(27,"input",15),e.qZA(),e.TgZ(28,"div",9)(29,"label",13),e._uU(30,"Timer stop hrs -1 "),e.qZA(),e._UZ(31,"input",16),e.qZA(),e.TgZ(32,"div",9)(33,"label",13),e._uU(34,"Timer stop min -1 "),e.qZA(),e._UZ(35,"input",17),e.qZA()(),e.TgZ(36,"div",18)(37,"p-button",19),e.NdJ("click",function(){return t.insertStockData()}),e.qZA(),e._uU(38," \xa0\xa0\xa0\xa0\xa0\xa0"),e.TgZ(39,"p-button",20),e.NdJ("click",function(){return t.resetData()}),e.qZA()(),e._UZ(40,"div",21),e.qZA()()(),e._UZ(41,"div",22),e.qZA(),e._UZ(42,"p-toast"),e.YNc(43,Z,6,0,"div",23),e.YNc(44,k,1,0,"div",24)),2&s&&(e.xp6(6),e.Q6J("formGroup",t.stockIn),e.xp6(5),e.Q6J("ngModel",t.selectedCountryAdvanced)("ngModelOptions",e.DdM(11,b))("suggestions",t.filteredCountries)("dropdown",!0),e.xp6(4),e.Q6J("ngModel",t.selectedDealer)("ngModelOptions",e.DdM(12,b))("suggestions",t.filteredDealer)("dropdown",!0),e.xp6(28),e.Q6J("ngIf",t.spinner),e.xp6(1),e.Q6J("ngIf",t.spinner))},dependencies:[d.FN,c.O5,n._Y,n.Fj,n.JJ,n.JL,n.On,n.sg,n.u,u.Qc,_.zx,D.o],encapsulation:2}),g})(),L=(()=>{var l;class g{}return(l=g).\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[m.Bz.forChild([{path:"",component:I}]),m.Bz]}),g})();var T=o(6760),F=o(1480),U=o(3965),z=o(9663),P=o(5167),O=o(8062),E=o(4055),x=o(6218),W=o(5359),N=o(7680);let B=(()=>{var l;class g{}return(l=g).\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({providers:[h.ez,h.YP],imports:[d.EV,c.ez,n.u5,n.UX,L,u.WN,T._8,F.Gg,N.L,U.kW,z.zz,P.L$,O.XH,E.q4,x.A,D.j,W.x]}),g})()},5359:(M,C,o)=>{o.d(C,{i:()=>h,x:()=>e});var c=o(1180),n=o(4769),m=o(6814);const v=["*"];let h=(()=>{var p;class d{constructor(){(0,c.Z)(this,"style",void 0),(0,c.Z)(this,"styleClass",void 0),(0,c.Z)(this,"layout","horizontal"),(0,c.Z)(this,"type","solid"),(0,c.Z)(this,"align",void 0)}containerClass(){return{"p-divider p-component":!0,"p-divider-horizontal":"horizontal"===this.layout,"p-divider-vertical":"vertical"===this.layout,"p-divider-solid":"solid"===this.type,"p-divider-dashed":"dashed"===this.type,"p-divider-dotted":"dotted"===this.type,"p-divider-left":"horizontal"===this.layout&&(!this.align||"left"===this.align),"p-divider-center":"horizontal"===this.layout&&"center"===this.align||"vertical"===this.layout&&(!this.align||"center"===this.align),"p-divider-right":"horizontal"===this.layout&&"right"===this.align,"p-divider-top":"vertical"===this.layout&&"top"===this.align,"p-divider-bottom":"vertical"===this.layout&&"bottom"===this.align}}}return p=d,(0,c.Z)(d,"\u0275fac",function(_){return new(_||p)}),(0,c.Z)(d,"\u0275cmp",n.Xpm({type:p,selectors:[["p-divider"]],hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},ngContentSelectors:v,decls:3,vars:4,consts:[["role","separator",3,"ngClass","ngStyle"],[1,"p-divider-content"]],template:function(_,D){1&_&&(n.F$t(),n.TgZ(0,"div",0)(1,"div",1),n.Hsn(2),n.qZA()()),2&_&&(n.Tol(D.styleClass),n.Q6J("ngClass",D.containerClass())("ngStyle",D.style))},dependencies:[m.mk,m.PC],styles:['.p-divider-horizontal{display:flex;width:100%;position:relative;align-items:center}.p-divider-horizontal:before{position:absolute;display:block;top:50%;left:0;width:100%;content:""}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{min-height:100%;margin:0 1rem;display:flex;position:relative;justify-content:center}.p-divider-vertical:before{position:absolute;display:block;top:0;left:50%;height:100%;content:""}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-top-style:dotted}.p-divider-dotted.p-divider-horizontal:before{border-left-style:dotted}\n'],encapsulation:2,changeDetection:0})),d})(),e=(()=>{var p;class d{}return p=d,(0,c.Z)(d,"\u0275fac",function(_){return new(_||p)}),(0,c.Z)(d,"\u0275mod",n.oAB({type:p})),(0,c.Z)(d,"\u0275inj",n.cJS({imports:[m.ez]})),d})()},7680:(M,C,o)=>{o.d(C,{L:()=>h});var c=o(1180),n=o(6814),m=o(4769);let h=(()=>{var e;class p{}return e=p,(0,c.Z)(p,"\u0275fac",function(u){return new(u||e)}),(0,c.Z)(p,"\u0275mod",m.oAB({type:e})),(0,c.Z)(p,"\u0275inj",m.cJS({imports:[n.ez]})),p})()}}]);