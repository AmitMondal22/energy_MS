"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[9845],{9845:(E,O,l)=>{l.r(O),l.d(O,{OverlaysDemoModule:()=>le});var c=l(6814),d=l(95),a=l(3557),b=l(9862),y=l(5219),e=l(4769),x=l(8814),S=l(981),w=l(4104),P=l(1312),C=l(707),L=l(6804),u=l(3965);function _(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"button",25),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.getsetting())}),e.qZA()}}function f(n,r){1&n&&(e.TgZ(0,"div",26),e._UZ(1,"div")(2,"div")(3,"div")(4,"div")(5,"div"),e.qZA())}function m(n,r){1&n&&e._UZ(0,"div",27)}const g=function(){return{width:"30vw",height:"30vw"}},k=function(){return{"960px":"75vw"}};let I=(()=>{var n;class r{constructor(o,i,s,h,p,v,D){this.router=o,this.http=i,this.fb=s,this.api=h,this.productService=p,this.confirmationService=v,this.messageService=D,this.orgList=[],this.client_id=+localStorage.getItem("c_id"),this.editMode=!1,this.spiner=!1,this.display=!0,this.formGroup=this.fb.group({id_view_organization:[0,d.kI.required],gv_energy_used:[!1,d.kI.required],gv_voltage:[!1,d.kI.required],gv_current:[!1,d.kI.required],gv_power:[!1,d.kI.required],mn_device_management:[!1,d.kI.required],mn_user_management:[!1,d.kI.required],en_tab_device_info:[!1,d.kI.required],en_tab_create_alert:[!1,d.kI.required],en_tab_scheduling:[!1,d.kI.required],en_tab_report_analysi:[!1,d.kI.required]})}ngOnInit(){this.ct=this.formGroup.controls,this.getOrg()}getsetting(){this.display=!1;const o=this.api.baseUrl,i=localStorage.getItem("token"),s=(new b.WM).set("Authorization",`Bearer ${i}`),h={organization_id:this.selectedOrganization.organization_id};this.spiner=!0,this.http.post(o+"/client/settings/client_screen_settings",h,{headers:s}).subscribe(p=>{if(console.log(p.data),p.data[0]?.id_view_organization){this.spiner=!1,this.editMode=!0;const v=p.data[0];console.log(v),this.formGroup.patchValue({id_view_organization:v.id_view_organization,gv_energy_used:"Y"==v.gv_energy_used,gv_voltage:"Y"==v.gv_voltage,gv_current:"Y"==v.gv_current,gv_power:"Y"==v.gv_power,mn_device_management:"Y"==v.mn_device_management,mn_user_management:"Y"==v.mn_user_management,en_tab_device_info:"Y"==v.en_tab_device_info,en_tab_create_alert:"Y"==v.en_tab_create_alert,en_tab_scheduling:"Y"==v.en_tab_scheduling,en_tab_report_analysi:"Y"==v.en_tab_report_analysis})}else this.spiner=!1,this.editMode=!1,this.formGroup.patchValue({id_view_organization:0,gv_energy_used:!1,gv_voltage:!1,gv_current:!1,gv_power:!1,mn_device_management:!1,mn_user_management:!1,en_tab_device_info:!1,en_tab_create_alert:!1,en_tab_scheduling:!1,en_tab_report_analysi:!1})},p=>{this.spiner=!1,"401"==p.status&&this.router.navigate(["/"]),console.log(p.status),console.error(p),this.messageService.add({severity:"error",summary:"Error",detail:"From Server Side!!",life:3e3})})}getOrg(){const o=this.api.baseUrl,i=localStorage.getItem("token"),s=(new b.WM).set("Authorization",`Bearer ${i}`),h={client_id:this.client_id};this.spiner=!0,this.http.post(o+"/client/manage_organization/list",h,{headers:s}).subscribe(p=>{this.spiner=!1,console.log(p),this.orgList=p.data},p=>{this.spiner=!1,"401"==p.status&&this.router.navigate(["/"]),console.log(p.status),console.error(p),this.messageService.add({severity:"error",summary:"Error",detail:"From Server Side!!",life:3e3})})}setOrg(o){this.selectedOrganization=null,console.log(o),this.selectedOrganization=o}valueChange(){if(this.selectedOrganization){const o=this.api.baseUrl,i=localStorage.getItem("token"),s=(new b.WM).set("Authorization",`Bearer ${i}`),h={id_view_organization:this.editMode?this.ct.id_view_organization.value:0,user_type:"U",organization_id:this.selectedOrganization.organization_id,gv_energy_used:this.ct.gv_energy_used.value?"Y":"N",gv_voltage:this.ct.gv_voltage.value?"Y":"N",gv_current:this.ct.gv_current.value?"Y":"N",gv_power:this.ct.gv_power.value?"Y":"N",mn_add_organization:"N",mn_device_management:this.ct.mn_device_management.value?"Y":"N",mn_user_management:this.ct.mn_user_management.value?"Y":"N",en_tab_device_info:this.ct.en_tab_device_info.value?"Y":"N",en_tab_create_alert:this.ct.en_tab_create_alert.value?"Y":"N",en_tab_scheduling:this.ct.en_tab_scheduling.value?"Y":"N",en_tab_report_analysi:this.ct.en_tab_report_analysi.value?"Y":"N"};this.spiner=!0,this.http.post(o+"/client/settings/client_screen_settings_edit",h,{headers:s}).subscribe(p=>{console.log(p),"success"==p.status?(this.spiner=!1,this.messageService.add({severity:"success",summary:"Successful",detail:".Screen settings Updated.",life:3e3})):(this.spiner=!1,this.messageService.add({severity:"error",summary:"Error",detail:"Unknown Error",life:3e3}))},p=>{"401"==p.status&&(this.spiner=!1,this.router.navigate(["/"])),console.log(p.status),console.error(p),this.messageService.add({severity:"error",summary:"Error",detail:"From Server Side!!",life:3e3})})}else this.messageService.add({severity:"error",summary:"Error",detail:"To begin, please choose an organization.",life:3e3})}}return(n=r).\u0275fac=function(o){return new(o||n)(e.Y36(a.F0),e.Y36(b.eN),e.Y36(d.qu),e.Y36(x.s),e.Y36(S.M),e.Y36(y.YP),e.Y36(y.ez))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],features:[e._Bn([y.YP,y.ez])],decls:68,vars:14,consts:[[1,"grid"],[1,"col-12","lg:col-12"],[3,"formGroup"],[1,"col-8"],[1,"col-4",2,"text-align","right"],["pButton","","icon","pi pi-external-link","label","Change Organization",3,"click"],[1,"card","flex","flex-column","md:flex-row","gap-1"],[1,"field","col-12","md:col-2"],["htmlFor","firstname2"],["formControlName","mn_device_management","onLabel","Show","offLabel","Hide","onCha","","onIcon","pi pi-eye","offIcon","pi pi-eye-slash","styleClass","w-9rem","ariaLabel","Do you confirm",3,"onChange"],["formControlName","mn_user_management","onLabel","Show","offLabel","Hide","onIcon","pi pi-eye","offIcon","pi pi-eye-slash","styleClass","w-9rem","ariaLabel","Do you confirm",3,"onChange"],["formControlName","en_tab_device_info","onLabel","Show","offLabel","Hide","onIcon","pi pi-eye","offIcon","pi pi-eye-slash","styleClass","w-9rem","ariaLabel","Do you confirm",3,"onChange"],["formControlName","en_tab_create_alert","onLabel","Show","offLabel","Hide","onIcon","pi pi-eye","offIcon","pi pi-eye-slash","styleClass","w-9rem","ariaLabel","Do you confirm",3,"onChange"],["formControlName","en_tab_scheduling","onLabel","Show","offLabel","Hide","onIcon","pi pi-eye","offIcon","pi pi-eye-slash","styleClass","w-9rem","ariaLabel","Do you confirm",3,"onChange"],["formControlName","en_tab_report_analysi","onLabel","Show","offLabel","Hide","onIcon","pi pi-eye","offIcon","pi pi-eye-slash","styleClass","w-9rem","ariaLabel","Do you confirm",3,"onChange"],["formControlName","gv_energy_used","onLabel","Show","offLabel","Hide","onIcon","pi pi-eye","offIcon","pi pi-eye-slash","styleClass","w-9rem","ariaLabel","Do you confirm",3,"onChange"],["formControlName","gv_voltage","onLabel","Show","offLabel","Hide","onIcon","pi pi-eye","offIcon","pi pi-eye-slash","styleClass","w-9rem","ariaLabel","Do you confirm",3,"onChange"],["formControlName","gv_current","onLabel","Show","offLabel","Hide","onIcon","pi pi-eye","offIcon","pi pi-eye-slash","styleClass","w-9rem","ariaLabel","Do you confirm",3,"onChange"],["formControlName","gv_power","onLabel","Show","offLabel","Hide","onIcon","pi pi-eye","offIcon","pi pi-eye-slash","styleClass","w-9rem","ariaLabel","Do you confirm",3,"onChange"],["header","Screen Settings","showEffect","fade",3,"visible","modal","breakpoints","visibleChange"],[1,"field","col-12","md:col-12"],["optionLabel","organization_name","placeholder","Select a Organization",2,"max-width","20px!important",3,"ngModel","options","ngModelChange","onChange"],["pTemplate","footer"],["class","loader",4,"ngIf"],["class","overlay",4,"ngIf"],["pButton","","icon","pi pi-check","label","Get Details",1,"p-button-outlined",3,"click"],[1,"loader"],[1,"overlay"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"p-toast"),e.TgZ(2,"div",1)(3,"form",2)(4,"div")(5,"div",0)(6,"div",3)(7,"h5"),e._uU(8),e.qZA()(),e.TgZ(9,"div",4)(10,"button",5),e.NdJ("click",function(){return i.display=!0}),e.qZA()()(),e.TgZ(11,"div",6)(12,"div",7)(13,"label",8),e._uU(14,"Device Management"),e.qZA(),e.TgZ(15,"p-toggleButton",9),e.NdJ("onChange",function(){return i.valueChange()}),e.qZA()(),e.TgZ(16,"div",7)(17,"label",8),e._uU(18,"User Management"),e.qZA(),e.TgZ(19,"p-toggleButton",10),e.NdJ("onChange",function(){return i.valueChange()}),e.qZA()(),e.TgZ(20,"div",7)(21,"label",8),e._uU(22,"Device Information"),e.qZA(),e.TgZ(23,"p-toggleButton",11),e.NdJ("onChange",function(){return i.valueChange()}),e.qZA()(),e.TgZ(24,"div",7)(25,"label",8),e._uU(26,"Create Device Alert"),e.qZA(),e.TgZ(27,"p-toggleButton",12),e.NdJ("onChange",function(){return i.valueChange()}),e.qZA()(),e.TgZ(28,"div",7)(29,"label",8),e._uU(30,"Device Scheduling"),e.qZA(),e.TgZ(31,"p-toggleButton",13),e.NdJ("onChange",function(){return i.valueChange()}),e.qZA()(),e.TgZ(32,"div",7)(33,"label",8),e._uU(34,"Report Analysis"),e.qZA(),e.TgZ(35,"p-toggleButton",14),e.NdJ("onChange",function(){return i.valueChange()}),e.qZA()()()(),e.TgZ(36,"div"),e._UZ(37,"br"),e.TgZ(38,"h5"),e._uU(39),e.qZA(),e.TgZ(40,"div",6)(41,"div",7)(42,"label",8),e._uU(43,"Energy Used Graph"),e.qZA(),e.TgZ(44,"p-toggleButton",15),e.NdJ("onChange",function(){return i.valueChange()}),e.qZA()(),e.TgZ(45,"div",7)(46,"label",8),e._uU(47,"Voltage Graph"),e.qZA(),e.TgZ(48,"p-toggleButton",16),e.NdJ("onChange",function(){return i.valueChange()}),e.qZA()(),e.TgZ(49,"div",7)(50,"label",8),e._uU(51,"Current Graph"),e.qZA(),e.TgZ(52,"p-toggleButton",17),e.NdJ("onChange",function(){return i.valueChange()}),e.qZA()(),e.TgZ(53,"div",7)(54,"label",8),e._uU(55,"Power Graph"),e.qZA(),e.TgZ(56,"p-toggleButton",18),e.NdJ("onChange",function(){return i.valueChange()}),e.qZA()()()()(),e._UZ(57,"br"),e.TgZ(58,"p-dialog",19),e.NdJ("visibleChange",function(h){return i.display=h}),e._UZ(59,"hr"),e.TgZ(60,"div",20)(61,"label",8),e._uU(62,"Select Organization"),e.qZA(),e._UZ(63,"br"),e.TgZ(64,"p-dropdown",21),e.NdJ("ngModelChange",function(h){return i.selectedOrganization=h})("onChange",function(h){return i.setOrg(h.value)}),e.qZA()(),e.YNc(65,_,1,0,"ng-template",22),e.qZA()()(),e.YNc(66,f,6,0,"div",23),e.YNc(67,m,1,0,"div",24)),2&o&&(e.xp6(3),e.Q6J("formGroup",i.formGroup),e.xp6(5),e.hij(" Menu Screen Settings for ",null==i.selectedOrganization?null:i.selectedOrganization.organization_name,""),e.xp6(31),e.hij(" Graph Screen Settings ",null==i.selectedOrganization?null:i.selectedOrganization.organization_name,""),e.xp6(19),e.Akn(e.DdM(12,g)),e.Q6J("visible",i.display)("modal",!0)("breakpoints",e.DdM(13,k)),e.xp6(6),e.Q6J("ngModel",i.selectedOrganization)("options",i.orgList),e.xp6(2),e.Q6J("ngIf",i.spiner),e.xp6(1),e.Q6J("ngIf",i.spiner))},dependencies:[c.O5,w.FN,y.jx,P.V,d._Y,d.JJ,d.JL,d.On,C.Hq,L.CO,d.sg,d.u,u.Lt],encapsulation:2}),r})(),M=(()=>{var n;class r{}return(n=r).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[a.Bz.forChild([{path:"",component:I}]),a.Bz]}),r})();var T=l(1180),z=l(7778),Z=l(4480);let Y=(()=>{var n;class r{}return n=r,(0,T.Z)(r,"\u0275fac",function(o){return new(o||n)}),(0,T.Z)(r,"\u0275mod",e.oAB({type:n})),(0,T.Z)(r,"\u0275inj",e.cJS({imports:[c.ez,Z.T,y.m8,z.q,y.m8]})),r})();var F=l(9552),J=l(3904),q=l(9246);let re=(()=>{var n;class r{}return n=r,(0,T.Z)(r,"\u0275fac",function(o){return new(o||n)}),(0,T.Z)(r,"\u0275mod",e.oAB({type:n})),(0,T.Z)(r,"\u0275inj",e.cJS({imports:[c.ez,C.hJ,y.m8,y.m8]})),r})();var se=l(3259),ae=l(3714);let le=(()=>{var n;class r{}return(n=r).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,M,w.EV,P.S,d.u5,se.z,ae.j,C.hJ,Y,F.U$,J.D,q.l,Z.T,re,L.KZ,d.UX,u.kW]}),r})()},6804:(E,O,l)=>{l.d(O,{CO:()=>C,KZ:()=>L});var c=l(1180),d=l(6814),a=l(4769),b=l(95),y=l(4480);const e=function(u,_){return{"p-button-icon":!0,"p-button-icon-left":u,"p-button-icon-right":_}};function x(u,_){if(1&u&&a._UZ(0,"span",3),2&u){const f=a.oxw();a.Tol(f.checked?f.onIcon:f.offIcon),a.Q6J("ngClass",a.WLB(3,e,"left"===f.iconPos,"right"===f.iconPos))}}function S(u,_){if(1&u&&(a.TgZ(0,"span",4),a._uU(1),a.qZA()),2&u){const f=a.oxw();a.xp6(1),a.Oqu(f.checked?f.hasOnLabel?f.onLabel:"":f.hasOffLabel?f.offLabel:"")}}const w=function(u,_,f){return{"p-button p-togglebutton p-component":!0,"p-button-icon-only":u,"p-highlight":_,"p-disabled":f}},P={provide:b.JU,useExisting:(0,a.Gpc)(()=>C),multi:!0};let C=(()=>{var u;class _{constructor(m){(0,c.Z)(this,"cd",void 0),(0,c.Z)(this,"onLabel",void 0),(0,c.Z)(this,"offLabel",void 0),(0,c.Z)(this,"onIcon",void 0),(0,c.Z)(this,"offIcon",void 0),(0,c.Z)(this,"ariaLabelledBy",void 0),(0,c.Z)(this,"disabled",void 0),(0,c.Z)(this,"style",void 0),(0,c.Z)(this,"styleClass",void 0),(0,c.Z)(this,"inputId",void 0),(0,c.Z)(this,"tabindex",void 0),(0,c.Z)(this,"iconPos","left"),(0,c.Z)(this,"onChange",new a.vpe),(0,c.Z)(this,"checked",!1),(0,c.Z)(this,"onModelChange",()=>{}),(0,c.Z)(this,"onModelTouched",()=>{}),this.cd=m}toggle(m){this.disabled||(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:m,checked:this.checked}),this.cd.markForCheck())}onBlur(){this.onModelTouched()}writeValue(m){this.checked=m,this.cd.markForCheck()}registerOnChange(m){this.onModelChange=m}registerOnTouched(m){this.onModelTouched=m}setDisabledState(m){this.disabled=m,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}}return u=_,(0,c.Z)(_,"\u0275fac",function(m){return new(m||u)(a.Y36(a.sBO))}),(0,c.Z)(_,"\u0275cmp",a.Xpm({type:u,selectors:[["p-toggleButton"]],hostAttrs:[1,"p-element"],inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabelledBy:"ariaLabelledBy",disabled:"disabled",style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:"tabindex",iconPos:"iconPos"},outputs:{onChange:"onChange"},features:[a._Bn([P])],decls:3,vars:12,consts:[["role","checkbox","pRipple","",3,"ngClass","ngStyle","click","keydown.enter"],[3,"class","ngClass",4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"ngClass"],[1,"p-button-label"]],template:function(m,g){1&m&&(a.TgZ(0,"div",0),a.NdJ("click",function(I){return g.toggle(I)})("keydown.enter",function(I){return g.toggle(I)}),a.YNc(1,x,1,6,"span",1),a.YNc(2,S,2,1,"span",2),a.qZA()),2&m&&(a.Tol(g.styleClass),a.Q6J("ngClass",a.kEZ(8,w,g.onIcon&&g.offIcon&&!g.hasOnLabel&&!g.hasOffLabel,g.checked,g.disabled))("ngStyle",g.style),a.uIk("tabindex",g.disabled?null:"0")("aria-checked",g.checked),a.xp6(1),a.Q6J("ngIf",g.onIcon||g.offIcon),a.xp6(1),a.Q6J("ngIf",g.onLabel||g.offLabel))},dependencies:[d.mk,d.O5,d.PC,y.H],styles:['.p-button[_ngcontent-%COMP%]{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default;pointer-events:none}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]:after{content:"p";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child){border-right:0 none}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus{position:relative;z-index:1}'],changeDetection:0})),_})(),L=(()=>{var u;class _{}return u=_,(0,c.Z)(_,"\u0275fac",function(m){return new(m||u)}),(0,c.Z)(_,"\u0275mod",a.oAB({type:u})),(0,c.Z)(_,"\u0275inj",a.cJS({imports:[d.ez,y.T]})),_})()}}]);