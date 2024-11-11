"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[7878],{7878:(se,Z,g)=>{g.d(Z,{d:()=>le});var p=g(9862),c=g(5219),b=g(6814),k=g(8483),e=g(4769),D=g(3557),M=g(3859),O=g(5905),v=g(95),T=g(981),A=g(5592),C=g(8814);let U=(()=>{var n;class s{constructor(i,t,o){this.router=i,this.api=t,this.http=o,this.socketStatus=!1,this.baseURL="wss://msapi.iotblitz.com/api/ws_routes/ws/EMS/"}connect(i,t,o){return this.client_id=i,this.device_id=t,this.device=o,this.socket=new WebSocket(this.baseURL+`${i}/${t}/${o}`),new A.y(l=>(this.socket.onopen=d=>{this.socketStatus=!0,console.log("WebSocket connected"),this.callData()},this.socket.onmessage=d=>{try{const h=JSON.parse(d.data);l.next(h),console.log(h)}catch(h){l.error(h),console.log(h)}},this.socket.onerror=d=>{l.error(d),console.log(d)},this.socket.onclose=()=>{console.log("WebSocket closed"),l.complete(),this.socketStatus=!1},()=>{this.socket.close()}))}sendMessage(i){this.socket.send(JSON.stringify(i))}callData(){if(this.socketStatus){const i={device:this.device,device_id:this.device_id,client_id:this.client_id},t=localStorage.getItem("token"),o=(new p.WM).set("Authorization",`Bearer ${t}`);this.http.post(this.api.baseUrl+"/device/ws_data_ems",i,{headers:o}).subscribe(r=>{this.resData=r.data,console.log(r)})}}}return(n=s).\u0275fac=function(i){return new(i||n)(e.LFG(D.F0),e.LFG(C.s),e.LFG(p.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),s})();var q=g(3965),N=g(7327),S=g(6903);const F=["chart"],Y=["chart2"];function j(n,s){if(1&n){const a=e.EpF();e.TgZ(0,"p-dropdown",50),e.NdJ("ngModelChange",function(t){e.CHM(a);const o=e.oxw();return e.KtG(o.selectedPhase=t)})("onChange",function(t){e.CHM(a);const o=e.oxw();return e.KtG(o.setPhase(t))}),e.qZA()}if(2&n){const a=e.oxw();e.Q6J("options",a.cities2)("ngModel",a.selectedPhase)}}function I(n,s){if(1&n&&(e.TgZ(0,"h3",23),e._uU(1),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.hij(" ",a.td_e1," kWh ")}}function J(n,s){if(1&n&&(e.TgZ(0,"h3",23),e._uU(1),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.hij(" ",a.td_e2," kWh ")}}function L(n,s){if(1&n&&(e.TgZ(0,"h3",23),e._uU(1),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.hij(" ",a.td_e3," kWh ")}}function W(n,s){if(1&n&&(e.TgZ(0,"h3",23),e._uU(1),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.hij(" ",a.m_e1," kWh ")}}function V(n,s){if(1&n&&(e.TgZ(0,"h3",23),e._uU(1),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.hij(" ",a.m_e2," kWh ")}}function H(n,s){if(1&n&&(e.TgZ(0,"h3",23),e._uU(1),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.hij(" ",a.m_e3," kWh ")}}function Q(n,s){if(1&n&&(e.TgZ(0,"h3",23),e._uU(1),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.hij(" ",a.ye_e1," kWh ")}}function B(n,s){if(1&n&&(e.TgZ(0,"h3",23),e._uU(1),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.hij(" ",a.ye_e2," kWh ")}}function R(n,s){if(1&n&&(e.TgZ(0,"h3",23),e._uU(1),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.hij(" ",a.ye_e3," kWh ")}}function G(n,s){if(1&n&&(e.TgZ(0,"h3",23),e._uU(1),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.hij(" ",a.tot_e1," kWh ")}}function z(n,s){if(1&n&&(e.TgZ(0,"h3",23),e._uU(1),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.hij(" ",a.tot_e2," kWh ")}}function $(n,s){if(1&n&&(e.TgZ(0,"h3",23),e._uU(1),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.hij(" ",a.tot_e3," kWh ")}}function K(n,s){if(1&n&&(e.TgZ(0,"div",6)(1,"div",7)(2,"div",51)(3,"div",9),e._UZ(4,"i",22),e.qZA(),e.TgZ(5,"div",11)(6,"h5",12),e._uU(7," VOLTAGE OF R"),e.qZA()()(),e.TgZ(8,"h3",23),e._uU(9),e.qZA()()()),2&n){const a=e.oxw();e.xp6(9),e.hij(" ",null!=a.EnergyData&&a.EnergyData.r?null==a.EnergyData?null:a.EnergyData.r:0," V ")}}function X(n,s){if(1&n&&(e.TgZ(0,"div",6)(1,"div",7)(2,"div",51)(3,"div",9),e._UZ(4,"i",22),e.qZA(),e.TgZ(5,"div",11)(6,"h5",12),e._uU(7,"VOLTAGE OF Y"),e.qZA()()(),e.TgZ(8,"h3",23),e._uU(9),e.qZA()()()),2&n){const a=e.oxw();e.xp6(9),e.hij(" ",null!=a.EnergyData&&a.EnergyData.y?null==a.EnergyData?null:a.EnergyData.y:0," V ")}}function ee(n,s){if(1&n&&(e.TgZ(0,"div",6)(1,"div",7)(2,"div",51)(3,"div",9),e._UZ(4,"i",22),e.qZA(),e.TgZ(5,"div",11)(6,"h5",12),e._uU(7," VOLTAGE OF B"),e.qZA()()(),e.TgZ(8,"h3",23),e._uU(9),e.qZA()()()),2&n){const a=e.oxw();e.xp6(9),e.hij(" ",null!=a.EnergyData&&a.EnergyData.b?null==a.EnergyData?null:a.EnergyData.b:0," V ")}}function te(n,s){if(1&n&&(e.TgZ(0,"div",6)(1,"div",7)(2,"div",52)(3,"div",9),e._UZ(4,"i",22),e.qZA(),e.TgZ(5,"div",11)(6,"h5",12),e._uU(7,"VOLTAGE OF R-Y"),e.qZA()()(),e.TgZ(8,"h3",23),e._uU(9),e.qZA()()()),2&n){const a=e.oxw();e.xp6(9),e.hij(" ",null!=a.EnergyData&&a.EnergyData.r_y?null==a.EnergyData?null:a.EnergyData.r_y:0," V ")}}function ne(n,s){if(1&n&&(e.TgZ(0,"div",6)(1,"div",7)(2,"div",52)(3,"div",9),e._UZ(4,"i",22),e.qZA(),e.TgZ(5,"div",11)(6,"h5",12),e._uU(7,"VOLTAGE OF Y-B"),e.qZA()()(),e.TgZ(8,"h3",23),e._uU(9),e.qZA()()()),2&n){const a=e.oxw();e.xp6(9),e.hij(" ",null!=a.EnergyData&&a.EnergyData.y_b?null==a.EnergyData?null:a.EnergyData.y_b:0," V ")}}function ae(n,s){if(1&n&&(e.TgZ(0,"div",6)(1,"div",7)(2,"div",52)(3,"div",9),e._UZ(4,"i",22),e.qZA(),e.TgZ(5,"div",11)(6,"h5",12),e._uU(7," VOLTAGE OF B-R"),e.qZA()()(),e.TgZ(8,"h3",23),e._uU(9),e.qZA()()()),2&n){const a=e.oxw();e.xp6(9),e.hij(" ",null!=a.EnergyData&&a.EnergyData.b_r?null==a.EnergyData?null:a.EnergyData.b_r:0," V ")}}function ie(n,s){1&n&&(e.TgZ(0,"div",53),e._UZ(1,"div")(2,"div")(3,"div")(4,"div")(5,"div"),e.qZA())}function oe(n,s){1&n&&e._UZ(0,"div",54)}const re=function(){return{standalone:!0}};let le=(()=>{var n;class s{constructor(i,t,o,r,l,d,h,u,_,y,f){this.router=i,this.datePipe=t,this.layoutService=o,this.authservice=r,this.fb=l,this.http=d,this.productService=h,this.websocketService=u,this.messageService=_,this.confirmationService=y,this.api=f,this.activeOptionButton="all",this.updateOptionsData={"1m":{xaxis:{min:new Date("28 Jan 2013").getTime(),max:new Date("27 Feb 2013").getTime()}},"6m":{xaxis:{min:new Date("27 Sep 2012").getTime(),max:new Date("27 Feb 2013").getTime()}},"1y":{xaxis:{min:new Date("27 Feb 2012").getTime(),max:new Date("27 Feb 2013").getTime()}},"1yd":{xaxis:{min:new Date("01 Jan 2013").getTime(),max:new Date("01 Jan 2013").getTime()}},all:{xaxis:{min:void 0,max:void 0}}},this.spinner=!1,this.filteredCountries=[],this.filteredDealer=[],this.countries=[],this.selectedState=null,this.data1=[],this.cities=[],this.liveData=[],this.flowData=[],this.flowDate=[],this.rpmData=[],this.rpmDate=[],this.user_type="",this.lastUpdateTime="",this.checked=!0,this.alert_type="",this.client_id=+localStorage.getItem("c_id"),this.cities2=[{unit_name:"Single Phase",unit:"single"},{unit_name:"Two Phase",unit:"two"},{unit_name:"Three Phase",unit:"three"}],this.messages=[],this.selectedPhase={unit_name:"Single Phase",unit:"single"},this.loginType=localStorage.getItem("loginType"),this.EnergyData=[],this.m_e1=0,this.m_e2=0,this.m_e3=0,this.td_e1=0,this.td_e2=0,this.td_e3=0,this.ye_e1=0,this.ye_e2=0,this.ye_e3=0,this.tot_e1=0,this.tot_e2=0,this.tot_e3=0,this.weeklyPaiData=[],this.weekdayName=[],this.weekData=[],this.subscription=this.layoutService.configUpdate$.subscribe(m=>{this.initCharts()})}convertToISTDateTime(i){const t=new Date(i);return this.datePipe.transform(t,"dd-MM-yyyy HH:mm:ss","+0530")||""}ggg(){}ngOnInit(){this.items=[{label:"Live",icon:"pi pi-fw pi-home",routerLink:["/app/outlet/alert"]},{label:"device Info",icon:"pi pi-fw pi-calendar",routerLink:["/app/outlet/alert"]},{label:"Graphical View",icon:"pi pi-fw pi-pencil",routerLink:["/app/outlet/alert"]},{label:"Create Alert",icon:"pi pi-fw pi-file",routerLink:["/app/outlet/alert"]},{label:"Historic Data",icon:"pi pi-fw pi-cog",routerLink:["/app/outlet/alert"]}],this.activeItem=this.items[0],this.getDevice()}connectToWebSocket(i,t,o){this.spinner=!0,this.websocketSubscription=this.websocketService.connect(i,t,o).subscribe(r=>{console.log("Received message:",r);const d=JSON.parse(r),h=d.lastdata;this.weeklyPaiData=d.lastdata_weekdata,this.weeklyPaiData.length>0&&this.initCharts(),this.m_e1=0,this.m_e2=0,this.m_e3=0,this.avgPF=0,console.log(h),console.log(this.weeklyPaiData),this.EnergyData=h;const u=this.EnergyData.e1-this.EnergyData.e1_past_month,_=this.EnergyData.e2-this.EnergyData.e2_past_month,y=this.EnergyData.e3-this.EnergyData.e3_past_month;this.m_e1=parseFloat(u?u.toFixed(2):"0"),this.m_e2=parseFloat(_?_.toFixed(2):"0"),this.m_e3=parseFloat(y?y.toFixed(2):"0"),this.td_e1=0,this.td_e2=0,this.td_e3=0;const f=this.EnergyData.e1-this.EnergyData.e1_yesterday,m=this.EnergyData.e2-this.EnergyData.e2_yesterday,P=this.EnergyData.e3-this.EnergyData.e3_yesterday;this.td_e1=parseFloat(f?f.toFixed(2):"0"),this.td_e2=parseFloat(m?m.toFixed(2):"0"),this.td_e3=parseFloat(P?P.toFixed(2):"0"),this.ye_e1=0,this.ye_e2=0,this.ye_e3=0;const x=this.EnergyData.e1-this.EnergyData.e1_past_year,E=this.EnergyData.e2-this.EnergyData.e2_past_year,w=this.EnergyData.e3-this.EnergyData.e3_past_year;this.ye_e1=parseFloat(x?x.toFixed(2):"0"),this.ye_e2=parseFloat(E?E.toFixed(2):"0"),this.ye_e3=parseFloat(w?w.toFixed(2):"0"),this.tot_e1=0,this.tot_e2=0,this.tot_e3=0,this.tot_e1=parseFloat(this.EnergyData?.e1?this.EnergyData?.e1.toFixed(2):0),this.tot_e2=parseFloat(this.EnergyData?.e2?this.EnergyData?.e2.toFixed(2):0),this.tot_e3=parseFloat(this.EnergyData?.e3?this.EnergyData?.e3.toFixed(2):0),this.avgPF=this.EnergyData.pf1+this.EnergyData.pf2+this.EnergyData.pf3,this.avgPF=parseFloat(this.avgPF?this.avgPF.toFixed(2):"0"),this.spinner=!1},r=>{"401"==r.status&&this.router.navigate(["/"]),console.log(r.status),this.spinner=!1,console.error("WebSocket error:",r)},()=>{this.spinner=!1,console.log("WebSocket connection closed")})}setPhase(i){console.log(i,this.selectedPhase)}abc(){this.alert_type="",console.log(this.selectedAlert),this.alert_type=this.selectedAlert?.unit_name,this.alert_type=" "+this.alert_type}getDevice(){const i={client_id:this.client_id},t=this.api.baseUrl,o=localStorage.getItem("token"),r=(new p.WM).set("Authorization",`Bearer ${o}`);this.spinner=!0,this.http.post(t+"/client/devices/list",i,{headers:r}).subscribe(l=>{console.log(l),this.spinner=!1,this.data1=l,this.cities=this.data1.data,this.selectedDealer=this.cities[0],this.getDeviceLiveData(this.selectedDealer.device,this.selectedDealer.device_id),console.log(this.selectedDealer)},l=>{"401"==l.status&&this.router.navigate(["/"]),console.log(l.status),this.spinner=!1,"401"==l.status&&this.router.navigate(["/"]),console.log(l.status)})}dateConvt(i){const t=new Date(i),l=`${String(t.getMonth()+1).padStart(2,"0")}/${String(t.getDate()).padStart(2,"0")}`;return console.log(l),l}getDeviceLiveData(i,t){this.connectToWebSocket(this.client_id,t,i),console.log(this.websocketService.socketStatus),this.spinner=!0,this.websocketService.resData&&console.log(this.websocketService.resData)}dateChange(i){const d=new Date(this.liveData2.created_at).toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1,timeZone:"Asia/Kolkata"});return console.log(d),d}setDevice(){console.log(this.selectedDealer),this.getDeviceLiveData(this.selectedDealer.device,this.selectedDealer.device_id)}filterDealer(i){const t=[],o=i.query;for(let r=0;r<this.cities.length;r++){const l=this.cities[r];0==l.device.toLowerCase().indexOf(o.toLowerCase())&&t.push(l)}this.filteredDealer=t}getWeekdayName(i){return new Date(i).toLocaleDateString("en-US",{weekday:"long"})}initCharts(){this.weekdayName=[],this.weekData=[],this.weeklyPaiData.forEach(i=>{i.day=this.getWeekdayName(i.date),this.weekdayName.push(this.getWeekdayName(i.date)),this.weekData.push(Number(i.e1_diff+i.e2_diff+i.e3_diff))}),this.weekdayName.length>0&&this.weekData.length>0?(console.log(this.weekdayName,this.weekData),this.chartOptions={series:this.weekData,chart:{type:"pie"},labels:this.weekdayName,responsive:[{breakpoint:1349,options:{legend:{position:"bottom"}}}]}):(console.log(this.weekdayName,this.weekData),this.chartOptions={series:[100],chart:{type:"pie"},labels:["Sunday"],responsive:[{breakpoint:1349,options:{legend:{position:"bottom"}}}]})}generateDayWiseTimeSeries(i,t,o){for(var r=0,l=[];r<t;){var d=i,h=Math.floor(Math.random()*(o.max-o.min+1))+o.min;l.push([d,h]),i+=864e5,r++}return l}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return(n=s).\u0275fac=function(i){return new(i||n)(e.Y36(D.F0),e.Y36(b.uU),e.Y36(M.P),e.Y36(O.$),e.Y36(v.qu),e.Y36(p.eN),e.Y36(T.M),e.Y36(U),e.Y36(c.ez),e.Y36(c.YP),e.Y36(C.s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-chartsdemo"]],viewQuery:function(i,t){if(1&i&&(e.Gf(k.j,5),e.Gf(F,5),e.Gf(Y,5)),2&i){let o;e.iGM(o=e.CRH())&&(t.msg=o.first),e.iGM(o=e.CRH())&&(t.chart=o.first),e.iGM(o=e.CRH())&&(t.chart2=o.first)}},features:[e._Bn([c.ez,c.YP,b.uU])],decls:188,vars:46,consts:[[1,"grid",2,"margin-left","0rem!important"],[1,"col-12","md:col-12"],[2,"float","right"],["optionLabel","unit_name","placeholder","Select a Phase Type",3,"options","ngModel","ngModelChange","onChange",4,"ngIf"],["placeholder","Select a device","field","device",3,"ngModel","ngModelOptions","suggestions","dropdown","ngModelChange","onSelect","completeMethod"],[1,"card"],[1,"col-12","lg:col-6","xl:col-3"],[1,"card","mb-0",2,"box-shadow","0 4px 8px 0 rgba(0,0,0,0.2)","transition","0.3s","width","100%","border-radius","10px","padding","0px!important"],[1,"tiles__header",2,"border-radius","10px 10px 0 0","background","linear-gradient(15deg, rgb(59, 8, 92) 0%, rgb(28, 9, 135) 50%, rgb(1, 4, 211) 100%)","height","40px"],[2,"margin","10px","position","absolute","height","23px","width","23px"],[1,"pi","pi-clock","text-white-600","text-xl",2,"position","absolute","padding-top","3px","padding-left","2px"],[2,"padding-left","40px","position","absolute"],[2,"color","white"],["style","text-align: center;",4,"ngIf"],[1,"tiles__header",2,"border-radius","10px 10px 0 0","background","linear-gradient(15deg, rgb(125, 3, 35) 0%, rgb(156, 5, 5) 50%, rgb(171, 62, 8) 100%)","height","40px"],[1,"pi","pi-calendar","text-white-600","text-xl",2,"position","absolute","padding-top","3px","padding-left","2px"],[1,"tiles__header",2,"border-radius","10px 10px 0 0","background","linear-gradient(15deg, rgb(49, 70, 13) 0%, rgb(87, 112, 15) 50%, rgb(130, 141, 6) 100%)","height","40px"],[1,"pi","pi-calendar-minus","text-white-600","text-xl",2,"position","absolute","padding-top","3px","padding-left","2px"],[1,"tiles__header",2,"border-radius","10px 10px 0 0","background","linear-gradient(15deg, rgb(116, 5, 116) 0%, rgb(117, 6, 148) 50%, rgb(174, 7, 176) 100%)","height","40px"],[1,"pi","pi-check-circle","text-white-600","text-xl",2,"position","absolute","padding-top","3px","padding-left","2px"],["class","col-12 lg:col-6 xl:col-3",4,"ngIf"],[1,"tiles__header",2,"border-radius","10px 10px 0 0","background","linear-gradient(15deg, rgb(104, 48, 86) 0%, rgb(136, 20, 95) 50%, rgb(182, 16, 124) 100%)","height","40px"],[1,"pi","pi-bolt","text-white-600","text-xl",2,"position","absolute","padding-top","3px","padding-left","2px"],[2,"text-align","center"],[1,"tiles__header",2,"border-radius","10px 10px 0 0","background","linear-gradient(15deg, rgb(53, 3, 92) 0%, rgb(73, 4, 143) 50%, rgb(83, 4, 185) 100%)","height","40px"],[1,"grid",2,"margin-left","0rem!important","margin-top","50px","width","100%!important"],[1,"col-12","lg:col-6","xl:col-6"],[1,"card","mb-0","xcard",2,"height","476px"],["id","chart"],[3,"series","chart","labels","responsive"],[1,"card",2,"height","476px","overflow-x","hidden","overflow-y","auto"],[1,"card-para"],[1,"subCard"],[1,"subcard-icon"],[1,"icon"],[1,"pi","pi-bolt","text-blue-600","text-xl"],[1,"unit"],[1,"pi","pi-chart-bar","text-blue-600","text-xl"],[1,"pi","pi-percentage","text-blue-600","text-xl"],[1,"pi","pi-window-maximize","text-blue-600","text-xl"],[1,"pi","pi-sync","text-blue-600","text-xl"],[1,"pi","pi-hourglass","text-blue-600","text-xl"],[1,"pi","pi-cloud-upload","text-blue-600","text-xl"],[1,"pi","pi-sliders-v","text-blue-600","text-xl"],[1,"pi","pi-sitemap","text-blue-600","text-xl"],[1,"pi","pi-arrows-alt","text-blue-600","text-xl"],[1,"pi","pi-slack","text-blue-600","text-xl"],[1,"pi","pi-clock","text-blue-600","text-xl"],["class","loader",4,"ngIf"],["class","overlay",4,"ngIf"],["optionLabel","unit_name","placeholder","Select a Phase Type",3,"options","ngModel","ngModelChange","onChange"],[1,"tiles__header",2,"border-radius","10px 10px 0 0","background","linear-gradient(15deg, rgb(6, 103, 123) 0%, rgb(9, 157, 170) 50%, rgb(3, 211, 183) 100%)","height","40px"],[1,"tiles__header",2,"border-radius","10px 10px 0 0","background","linear-gradient(15deg, rgb(43, 77, 29) 0%, rgb(47, 114, 16) 50%, rgb(51, 188, 5) 100%)","height","40px"],[1,"loader"],[1,"overlay"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e.YNc(3,j,1,2,"p-dropdown",3),e._uU(4,"\xa0\xa0\xa0\xa0\xa0 "),e.TgZ(5,"p-autoComplete",4),e.NdJ("ngModelChange",function(r){return t.selectedDealer=r})("onSelect",function(){return t.setDevice()})("completeMethod",function(r){return t.filterDealer(r)}),e.qZA()()(),e.TgZ(6,"div",1)(7,"div",5)(8,"div",0)(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9),e._UZ(13,"i",10),e.qZA(),e.TgZ(14,"div",11)(15,"h5",12),e._uU(16," TODAY ENERGY"),e.qZA()()(),e.YNc(17,I,2,1,"h3",13),e.YNc(18,J,2,1,"h3",13),e.YNc(19,L,2,1,"h3",13),e.qZA()(),e.TgZ(20,"div",6)(21,"div",7)(22,"div",14)(23,"div",9),e._UZ(24,"i",15),e.qZA(),e.TgZ(25,"div",11)(26,"h5",12),e._uU(27," MONTHLY ENERGY"),e.qZA()()(),e.YNc(28,W,2,1,"h3",13),e.YNc(29,V,2,1,"h3",13),e.YNc(30,H,2,1,"h3",13),e.qZA()(),e.TgZ(31,"div",6)(32,"div",7)(33,"div",16)(34,"div",9),e._UZ(35,"i",17),e.qZA(),e.TgZ(36,"div",11)(37,"h5",12),e._uU(38," YEARLY ENERGY"),e.qZA()()(),e.YNc(39,Q,2,1,"h3",13),e.YNc(40,B,2,1,"h3",13),e.YNc(41,R,2,1,"h3",13),e.qZA()(),e.TgZ(42,"div",6)(43,"div",7)(44,"div",18)(45,"div",9),e._UZ(46,"i",19),e.qZA(),e.TgZ(47,"div",11)(48,"h5",12),e._uU(49," TOTAL ENERGY"),e.qZA()()(),e.YNc(50,G,2,1,"h3",13),e.YNc(51,z,2,1,"h3",13),e.YNc(52,$,2,1,"h3",13),e.qZA()(),e.YNc(53,K,10,1,"div",20),e.YNc(54,X,10,1,"div",20),e.YNc(55,ee,10,1,"div",20),e.YNc(56,te,10,1,"div",20),e.YNc(57,ne,10,1,"div",20),e.YNc(58,ae,10,1,"div",20),e.TgZ(59,"div",6)(60,"div",7)(61,"div",21)(62,"div",9),e._UZ(63,"i",22),e.qZA(),e.TgZ(64,"div",11)(65,"h5",12),e._uU(66," CURRENT"),e.qZA()()(),e.TgZ(67,"h3",23),e._uU(68),e.qZA()()(),e.TgZ(69,"div",6)(70,"div",7)(71,"div",24)(72,"div",9),e._UZ(73,"i",22),e.qZA(),e.TgZ(74,"div",11)(75,"h5",12),e._uU(76," ACTIVE POWER"),e.qZA()()(),e.TgZ(77,"h3",23),e._uU(78),e.qZA()()(),e.TgZ(79,"div",25)(80,"div",26)(81,"div",27)(82,"div",28)(83,"h4"),e._uU(84,"Weekly Energy Used"),e.qZA(),e._UZ(85,"apx-chart",29),e.qZA()()(),e.TgZ(86,"div",26)(87,"div",30)(88,"h4",31),e._uU(89,"Emission Type"),e.qZA(),e.TgZ(90,"div",32)(91,"div",33)(92,"div",34),e._UZ(93,"i",35),e.qZA(),e.TgZ(94,"p"),e._uU(95,"Apparent Power"),e.qZA()(),e.TgZ(96,"p",36),e._uU(97),e.qZA()(),e.TgZ(98,"div",32)(99,"div",33)(100,"div",34),e._UZ(101,"i",37),e.qZA(),e.TgZ(102,"p"),e._uU(103,"Power Factor"),e.qZA()(),e.TgZ(104,"p",36),e._uU(105),e.qZA()(),e.TgZ(106,"div",32)(107,"div",33)(108,"div",34),e._UZ(109,"i",38),e.qZA(),e.TgZ(110,"p"),e._uU(111,"Frequency"),e.qZA()(),e.TgZ(112,"p",36),e._uU(113),e.qZA()(),e.TgZ(114,"div",32)(115,"div",33)(116,"div",34),e._UZ(117,"i",39),e.qZA(),e.TgZ(118,"p"),e._uU(119,"Reactivepower"),e.qZA()(),e.TgZ(120,"p",36),e._uU(121),e.qZA()(),e.TgZ(122,"div",32)(123,"div",33)(124,"div",34),e._UZ(125,"i",40),e.qZA(),e.TgZ(126,"p"),e._uU(127,"Average pf"),e.qZA()(),e.TgZ(128,"p",36),e._uU(129),e.qZA()(),e.TgZ(130,"div",32)(131,"div",33)(132,"div",34),e._UZ(133,"i",41),e.qZA(),e.TgZ(134,"p"),e._uU(135),e.qZA()(),e.TgZ(136,"p",36),e._uU(137),e.qZA()(),e.TgZ(138,"div",32)(139,"div",33)(140,"div",34),e._UZ(141,"i",42),e.qZA(),e.TgZ(142,"p"),e._uU(143),e.qZA()(),e.TgZ(144,"p",36),e._uU(145),e.qZA()(),e.TgZ(146,"div",32)(147,"div",33)(148,"div",34),e._UZ(149,"i",43),e.qZA(),e.TgZ(150,"p"),e._uU(151,"Avarage current "),e.qZA()(),e.TgZ(152,"p",36),e._uU(153),e.qZA()(),e.TgZ(154,"div",32)(155,"div",33)(156,"div",34),e._UZ(157,"i",44),e.qZA(),e.TgZ(158,"p"),e._uU(159,"TOTAL kVA"),e.qZA()(),e.TgZ(160,"p",36),e._uU(161),e.qZA()(),e.TgZ(162,"div",32)(163,"div",33)(164,"div",34),e._UZ(165,"i",45),e.qZA(),e.TgZ(166,"p"),e._uU(167,"TOTAL kW"),e.qZA()(),e.TgZ(168,"p",36),e._uU(169),e.qZA()(),e.TgZ(170,"div",32)(171,"div",33)(172,"div",34),e._UZ(173,"i",46),e.qZA(),e.TgZ(174,"p"),e._uU(175,"TOTAL kVAR"),e.qZA()(),e.TgZ(176,"p",36),e._uU(177),e.qZA()(),e.TgZ(178,"div",32)(179,"div",33)(180,"div",34),e._UZ(181,"i",47),e.qZA(),e.TgZ(182,"p"),e._uU(183,"Run Hour"),e.qZA()(),e.TgZ(184,"p",36),e._uU(185),e.qZA()()()()()()()(),e.YNc(186,ie,6,0,"div",48),e.YNc(187,oe,1,0,"div",49),e.qZA()),2&i&&(e.xp6(3),e.Q6J("ngIf","ENTF"==(null==t.selectedDealer?null:t.selectedDealer.meter_type)),e.xp6(2),e.Q6J("ngModel",t.selectedDealer)("ngModelOptions",e.DdM(45,re))("suggestions",t.filteredDealer)("dropdown",!0),e.xp6(12),e.Q6J("ngIf","single"==t.selectedPhase.unit),e.xp6(1),e.Q6J("ngIf","two"==t.selectedPhase.unit),e.xp6(1),e.Q6J("ngIf","three"==t.selectedPhase.unit),e.xp6(9),e.Q6J("ngIf","single"==t.selectedPhase.unit),e.xp6(1),e.Q6J("ngIf","two"==t.selectedPhase.unit),e.xp6(1),e.Q6J("ngIf","three"==t.selectedPhase.unit),e.xp6(9),e.Q6J("ngIf","single"==t.selectedPhase.unit),e.xp6(1),e.Q6J("ngIf","two"==t.selectedPhase.unit),e.xp6(1),e.Q6J("ngIf","three"==t.selectedPhase.unit),e.xp6(9),e.Q6J("ngIf","single"==t.selectedPhase.unit),e.xp6(1),e.Q6J("ngIf","two"==t.selectedPhase.unit),e.xp6(1),e.Q6J("ngIf","three"==t.selectedPhase.unit),e.xp6(1),e.Q6J("ngIf","single"==t.selectedPhase.unit),e.xp6(1),e.Q6J("ngIf","two"==t.selectedPhase.unit),e.xp6(1),e.Q6J("ngIf","three"==t.selectedPhase.unit),e.xp6(1),e.Q6J("ngIf","single"==t.selectedPhase.unit),e.xp6(1),e.Q6J("ngIf","two"==t.selectedPhase.unit),e.xp6(1),e.Q6J("ngIf","three"==t.selectedPhase.unit),e.xp6(10),e.hij(" ","single"==t.selectedPhase.unit?null!=t.EnergyData&&t.EnergyData.curr1?null==t.EnergyData?null:t.EnergyData.curr1:0:"two"==t.selectedPhase.unit?null==t.EnergyData?null:t.EnergyData.curr2:"three"==t.selectedPhase.unit?null==t.EnergyData?null:t.EnergyData.curr3:0," A "),e.xp6(10),e.hij(" ","single"==t.selectedPhase.unit?null!=t.EnergyData&&t.EnergyData.activep1?null==t.EnergyData?null:t.EnergyData.activep1:0:"two"==t.selectedPhase.unit?null==t.EnergyData?null:t.EnergyData.activep2:"three"==t.selectedPhase.unit?null==t.EnergyData?null:t.EnergyData.activep3:0," kW "),e.xp6(7),e.Q6J("series",null==t.chartOptions?null:t.chartOptions.series)("chart",null==t.chartOptions?null:t.chartOptions.chart)("labels",null==t.chartOptions?null:t.chartOptions.labels)("responsive",null==t.chartOptions?null:t.chartOptions.responsive),e.xp6(12),e.hij("","single"==t.selectedPhase.unit?null!=t.EnergyData&&t.EnergyData.apparentp1?null==t.EnergyData?null:t.EnergyData.apparentp1:0:"two"==t.selectedPhase.unit?null!=t.EnergyData&&t.EnergyData.apparentp2?null==t.EnergyData?null:t.EnergyData.apparentp2:0:"three"==t.selectedPhase.unit&&null!=t.EnergyData&&t.EnergyData.apparentp3?null==t.EnergyData?null:t.EnergyData.apparentp3:0," kVA"),e.xp6(8),e.Oqu("single"==t.selectedPhase.unit?null!=t.EnergyData&&t.EnergyData.pf1?t.EnergyData.pf1:0:"two"==t.selectedPhase.unit?null!=t.EnergyData&&t.EnergyData.pf2?null==t.EnergyData?null:t.EnergyData.pf2:0:"three"==t.selectedPhase.unit&&null!=t.EnergyData&&t.EnergyData.pf3?null==t.EnergyData?null:t.EnergyData.pf3:0),e.xp6(8),e.hij("","single"==t.selectedPhase.unit||"two"==t.selectedPhase.unit?null!=t.EnergyData&&t.EnergyData.freq?null==t.EnergyData?null:t.EnergyData.freq:0:"three"==t.selectedPhase.unit&&null!=t.EnergyData&&t.EnergyData.freq?null==t.EnergyData?null:t.EnergyData.freq:0," Hz"),e.xp6(8),e.hij("","single"==t.selectedPhase.unit?null!=t.EnergyData&&t.EnergyData.reactvp1?null==t.EnergyData?null:t.EnergyData.reactvp1:0:"two"==t.selectedPhase.unit?null!=t.EnergyData&&t.EnergyData.reactvp2?null==t.EnergyData?null:t.EnergyData.reactvp2:0:"three"==t.selectedPhase.unit&&null!=t.EnergyData&&t.EnergyData.reactvp3?null==t.EnergyData?null:t.EnergyData.reactvp3:0," kVAR"),e.xp6(8),e.Oqu(t.avgPF?t.avgPF:0),e.xp6(6),e.Oqu("single"==t.selectedPhase.unit?"Average Voltage R":"two"==t.selectedPhase.unit?"Average Voltage Y":"Average Voltage B"),e.xp6(2),e.hij("","single"==t.selectedPhase.unit||"two"==t.selectedPhase.unit?null!=t.EnergyData&&t.EnergyData.avaragevln?null==t.EnergyData?null:t.EnergyData.avaragevln:0:"three"==t.selectedPhase.unit&&null!=t.EnergyData&&t.EnergyData.avaragevln?null==t.EnergyData?null:t.EnergyData.avaragevln:0," V"),e.xp6(6),e.Oqu("single"==t.selectedPhase.unit?"Average Voltage R_Y":"two"==t.selectedPhase.unit?"Average Voltage Y_B":"Average Voltage B_R"),e.xp6(2),e.hij("","single"==t.selectedPhase.unit||"two"==t.selectedPhase.unit?null!=t.EnergyData&&t.EnergyData.avaragevll?null==t.EnergyData?null:t.EnergyData.avaragevll:0:"three"==t.selectedPhase.unit&&null!=t.EnergyData&&t.EnergyData.avaragevll?null==t.EnergyData?null:t.EnergyData.avaragevll:0," V"),e.xp6(8),e.hij("","single"==t.selectedPhase.unit||"two"==t.selectedPhase.unit?null!=t.EnergyData&&t.EnergyData.avaragecurrent?null==t.EnergyData?null:t.EnergyData.avaragecurrent:0:"three"==t.selectedPhase.unit&&null!=t.EnergyData&&t.EnergyData.avaragecurrent?null==t.EnergyData?null:t.EnergyData.avaragecurrent:0," A"),e.xp6(8),e.hij(" ","single"==t.selectedPhase.unit||"two"==t.selectedPhase.unit?null!=t.EnergyData&&t.EnergyData.totkva?null==t.EnergyData?null:t.EnergyData.totkva:0:"three"==t.selectedPhase.unit&&null!=t.EnergyData&&t.EnergyData.totkva?null==t.EnergyData?null:t.EnergyData.totkva:0," kVA"),e.xp6(8),e.hij(" ","single"==t.selectedPhase.unit||"two"==t.selectedPhase.unit?null!=t.EnergyData&&t.EnergyData.totkw?null==t.EnergyData?null:t.EnergyData.totkw:0:"three"==t.selectedPhase.unit&&null!=t.EnergyData&&t.EnergyData.totkw?null==t.EnergyData?null:t.EnergyData.totkw:0," kW"),e.xp6(8),e.hij(" ","single"==t.selectedPhase.unit||"two"==t.selectedPhase.unit?null!=t.EnergyData&&t.EnergyData.totkvar?null==t.EnergyData?null:t.EnergyData.totkvar:0:"three"==t.selectedPhase.unit&&null!=t.EnergyData&&t.EnergyData.totkvar?null==t.EnergyData?null:t.EnergyData.totkvar:0," kVAR"),e.xp6(8),e.Oqu("single"==t.selectedPhase.unit?null!=t.EnergyData&&t.EnergyData.runhr?t.EnergyData.runhr:0:"two"==t.selectedPhase.unit||"three"==t.selectedPhase.unit?null==t.EnergyData?null:t.EnergyData.runhr:0),e.xp6(1),e.Q6J("ngIf",t.spinner),e.xp6(1),e.Q6J("ngIf",t.spinner))},dependencies:[q.Lt,b.O5,N.Qc,v.JJ,v.On,S.x],styles:['body[_ngcontent-%COMP%]{background-color:#333}h5[_ngcontent-%COMP%]{margin:0;font-size:13px;padding:0!important}h3[_ngcontent-%COMP%]{font-size:19px;font-weight:500;color:#444}.holder[_ngcontent-%COMP%]{max-width:455px;margin:0 auto}.holder[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%]{display:block;text-decoration:none;font-family:sans-serif;font-size:12px;color:#666;text-align:center}.livenow[_ngcontent-%COMP%]{margin-top:23px;width:30px;margin-left:15px;display:inline-block}.livenow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{vertical-align:middle;width:22px;height:22px;border-radius:100%;position:absolute;margin:0 auto;border:3px solid rgb(255,0,0);animation:_ngcontent-%COMP%_live 1.4s infinite ease-in-out;animation-fill-mode:both}.livenow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){background-color:#ffffff4d;background-color:#f81010;animation-delay:-.1s}.livenow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){animation-delay:.16s}.livenow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){animation-delay:.42s;border:3px solid rgba(255,255,255,.5)}.livenow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){border:3px solid rgba(255,255,255,1);animation-delay:-.42s}@keyframes _ngcontent-%COMP%_live{0%,80%,to{transform:scale(.6);-webkit-transform:scale(.6)}40%{transform:scale(1);-webkit-transform:scale(1)}}.xcard[_ngcontent-%COMP%]{height:100%!important}.xxx[_ngcontent-%COMP%]{height:40px}.energy[_ngcontent-%COMP%]{width:100%;height:auto}p-tabview[_ngcontent-%COMP%]   .p-tabview-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:33.3%!important}.cylinder[_ngcontent-%COMP%]{position:relative;overflow:hidden;margin:24px auto;width:137px;height:200px;border-radius:50px/25px;background-color:#a0a0a080}.cylinder[_ngcontent-%COMP%]:before{position:absolute;left:0;top:0;width:100px;height:50px;border-radius:50px/25px;background-color:#a0a0a033;content:""}.cylinder[_ngcontent-%COMP%]:after{position:absolute;left:0;bottom:0;width:100px;height:50px;border-radius:50px/25px;background-color:#a0a0a066;content:""}.water[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;width:108px;height:0;padding-top:50px;border-radius:50px/25px;background-color:#00a0a080;transition:.3s linear}.water[_ngcontent-%COMP%]:before{position:absolute;left:0;top:0;width:108px;height:50px;border-radius:50px/25px;background-color:#00a0a033;content:""}.water[_ngcontent-%COMP%]:after{position:absolute;left:0;bottom:0;width:108px;height:50px;border-radius:50px/25px;background-color:#00a0a066;content:""}.water--0[_ngcontent-%COMP%]:checked ~ .cylinder[_ngcontent-%COMP%]   .water[_ngcontent-%COMP%]{bottom:-50px}.water--30[_ngcontent-%COMP%]:checked ~ .cylinder[_ngcontent-%COMP%]   .water[_ngcontent-%COMP%]{height:75px}.cylinder[_ngcontent-%COMP%]   .water[_ngcontent-%COMP%]{height:150px}.water--90[_ngcontent-%COMP%]:checked ~ .cylinder[_ngcontent-%COMP%]   .water[_ngcontent-%COMP%]{height:225px}.UPSCylindre[_ngcontent-%COMP%], .BCylindre[_ngcontent-%COMP%]{overflow:hidden;position:relative;width:120px;height:215px;margin:20px auto;box-shadow:0 0 0 1px #80808026 inset;background:linear-gradient(90deg,rgba(128,128,128,.2) 0%,rgba(128,128,128,.2) 20%,rgba(128,128,128,.2) 20%,transparent 50%,transparent 75%,rgba(128,128,128,.2) 90%);border-radius:60px/30px}.PPole[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:-1px;width:99%;height:57px;border:1px solid rgba(128,128,128,.15);border-radius:60px/30px;background:linear-gradient(rgba(128,128,128,.25) 0%,rgba(128,128,128,.15) 20%,rgba(128,128,128,.15) 20%,transparent 50%,transparent 75%,rgba(128,128,128,.15) 90%)}.PPole[_ngcontent-%COMP%]:after{content:"";position:absolute;width:36%;left:31.5%;top:1px;height:30px;border-radius:60px/27.5px;box-shadow:0 0 0 1px #ffffff59;background:linear-gradient(90deg,rgba(128,128,128,1) 0%,rgba(128,128,128,.3) 30%,transparent 50%,transparent 75%,rgba(128,128,128,1) 90%)}.PPole[_ngcontent-%COMP%]:before{content:"";position:absolute;left:8%;right:0;top:8%;width:84%;height:73%;border-radius:55px/24px;background-color:#80808080;box-shadow:0 1px 0 1px #ffffff59}.UPSCylindre[_ngcontent-%COMP%]:after{content:"";position:absolute;width:32%;left:33%;top:1px;height:6%;border:1px solid rgba(255,255,255,.25);border-radius:60px/25px;background-color:#80808099;box-shadow:0 0 0 1px #80808099}.UPSCylindre[_ngcontent-%COMP%]:before{content:"";position:absolute;width:92%;height:20%;inset:78% 5px 0;border-radius:60px/25px;background-color:#80808080;box-shadow:0 0 0 1px #ffffff59}.BCylindre[_ngcontent-%COMP%]:after{content:"";position:absolute;width:32%;left:33%;top:1px;height:6%;border:1px solid rgba(255,255,255,.25);border-radius:60px/25px;background-color:#80808099;box-shadow:0 0 0 1px #80808099}.BCylindre[_ngcontent-%COMP%]:before{content:"";position:absolute;width:92%;height:20%;inset:78% 5px 0;border-radius:60px/25px;background-color:#80808080;box-shadow:0 0 0 1px #ffffff59}.NiMH[_ngcontent-%COMP%]{position:absolute;left:5px;right:5px;bottom:5px;height:0;padding-top:30px;border-radius:54px/24px;background:linear-gradient(90deg,rgba(0,204,0,.6) 0%,rgba(0,170,0,.6) 50%,rgba(0,204,0,.6) 100%);box-shadow:0 0 10px #0c0;transition:.5s linear}.NiMH[_ngcontent-%COMP%]:after{content:"";position:absolute;left:.5%;right:0;top:0;width:99%;height:50px;border-radius:54px/25px;background-color:#00aa0059;box-shadow:0 0 10px #0c0 inset}.cath_NA[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{height:12px;background:linear-gradient(90deg,rgba(255,0,0,.6) 0%,rgba(195,0,0,.6) 50%,rgba(255,0,0,.6) 100%);box-shadow:0 0 10px red;transform:scale(0);-webkit-transform:scale(0);-o-transform:scale(0);-moz-transform:scale(0)}.cath_NA[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#c3000059;box-shadow:0 0 10px red inset}.cath_0[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(255,0,0,.8) 0%,rgba(195,0,0,.6) 50%,rgba(255,0,0,.8) 100%);box-shadow:0 0 10px red;height:18.55px}.cath_0[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#c3000059;box-shadow:0 0 10px red inset}.cath_2[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(255,0,0,.8) 0%,rgba(195,0,0,.6) 50%,rgba(255,0,0,.8) 100%);box-shadow:0 0 10px red;height:38px}.cath_2[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#c3000059;box-shadow:0 0 10px red inset}.cath_4[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(255,204,0,.7) 0%,rgba(204,163,0,.6) 50%,rgba(255,204,0,.7) 100%);box-shadow:0 0 10px #fc0;height:76px}.cath_4[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#cca30059;box-shadow:0 0 10px #fc0 inset}.cath_6[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(255,204,0,.7) 0%,rgba(204,163,0,.6) 50%,rgba(255,204,0,.7) 100%);box-shadow:0 0 10px #fc0;height:114px}.cath_6[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#cca30059;box-shadow:0 0 10px #fc0 inset}.UPSCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(255,204,0,.7) 0%,rgba(204,163,0,.6) 50%,rgba(255,204,0,.7) 100%);box-shadow:0 0 10px #fc0;height:114px}.UPSCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#cca30059;box-shadow:0 0 10px #fc0 inset}.BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{height:152px}.cath_10[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{height:190px}.customeX[_ngcontent-%COMP%]{font-size:large;color:#4f46e5}table[_ngcontent-%COMP%]{overflow-x:auto;border-collapse:collapse;border-spacing:0;width:100%;border:1px solid #b8b7b7}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #b8b7b7;padding:10px}.circle[_ngcontent-%COMP%]{color:red;transform:translate(-50%) translateY(-50%);width:20px;height:20px;margin-left:30px;margin-top:30px}.circle[_ngcontent-%COMP%]:before{content:"";position:relative;display:block;width:250%;height:250%;box-sizing:border-box;margin-left:-75%;margin-top:-75%;border-radius:45px;background-color:red;animation:_ngcontent-%COMP%_pulse 1.25s cubic-bezier(.215,.61,.355,1) infinite}.circle[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;display:block;width:100%;height:100%;background-color:red;border-radius:50px;animation:_ngcontent-%COMP%_circle 1.25s cubic-bezier(.455,.03,.515,.955) -.4s infinite}@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(.33)}80%,to{opacity:0}}@keyframes _ngcontent-%COMP%_circle{0%{transform:scale(.8)}50%{transform:scale(1)}to{transform:scale(.8)}}@use postcss-preset-env{stage: 0;}.on-off-toggle[_ngcontent-%COMP%]{width:76px;height:24px;position:relative;display:inline-block}.on-off-toggle__slider[_ngcontent-%COMP%]{width:76px;height:24px;display:block;border-radius:34px;background-color:#d8d8d8;transition:background-color .4s}.on-off-toggle__slider[_ngcontent-%COMP%]:before{content:"";display:block;background-color:#fff;box-shadow:0 0 0 1px #949494;bottom:3px;height:18px;left:24px;position:absolute;transition:.4s;width:18px;z-index:5;border-radius:100%}.on-off-toggle__slider[_ngcontent-%COMP%]:after{display:block;line-height:24px;text-transform:uppercase;font-size:12px;font-weight:700;content:"day";color:#484848;padding-left:46px;transition:all .4s}.on-off-toggle__input[_ngcontent-%COMP%]{position:absolute;opacity:0}.on-off-toggle__input[_ngcontent-%COMP%]:checked + .on-off-toggle__slider[_ngcontent-%COMP%]{background-color:#000}.on-off-toggle__input[_ngcontent-%COMP%]:checked + .on-off-toggle__slider[_ngcontent-%COMP%]:before{transform:translate(32px)}.on-off-toggle__input[_ngcontent-%COMP%]:checked + .on-off-toggle__slider[_ngcontent-%COMP%]:after{content:"month";color:#fff;padding-left:8px}*[_ngcontent-%COMP%]{box-sizing:border-box}#chart[_ngcontent-%COMP%]{max-width:480px;margin:35px auto;padding:0}.subCard[_ngcontent-%COMP%]{width:100%;display:flex;padding:1rem;margin:1rem 0rem;background-color:#f0f0f0;justify-content:space-between}.subcard-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:.5rem}.icon[_ngcontent-%COMP%]{height:1.2rem;width:1.2rem}.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.unit[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600}.qbutton[_ngcontent-%COMP%]{background:#fff;color:#222;border:1px solid #e7e7e7;border-bottom:2px solid #ddd;border-radius:2px;padding:4px 17px}.qbutton.active[_ngcontent-%COMP%]{color:#fff;background:#008ffb;border:1px solid blue;border-bottom:2px solid blue}.qbutton[_ngcontent-%COMP%]:focus{outline:0}.tiles__header[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-direction:column}']}),s})()}}]);