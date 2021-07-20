/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5,6,8],{221:function(t,e,n){var content=n(225);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("254f843c",content,!0,{sourceMap:!1})},222:function(t,e,n){"use strict";n.r(e);n(170);var o=n(233),r={name:"InvitationVoucher",components:{"vue-qr":n.n(o).a},props:{name:{type:String,required:!0},code:{type:String,required:!0},invites:{type:Number,required:!0}},data:function(){return{qr:{color:{fg:getComputedStyle(document.documentElement).getPropertyValue("--silver"),bg:getComputedStyle(document.documentElement).getPropertyValue("--black")},margin:0}}}},l=(n(224),n(42)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("vue-qr",{attrs:{text:"https://eleventazo.com/waitlist?code="+t.code,logoSrc:n(223),margin:t.qr.margin,colorDark:t.qr.color.fg,colorLight:t.qr.color.bg}}),t._v(" "),o("a",{attrs:{href:"whatsapp://send?text="+t.name+" quiere que vengas AL EVENTO. Activa tu invitación en: https://eleventazo.com/waitlist?code="+t.code,"data-action":"share/whatsapp/share",variant:"outline-primary"}},[t._v("\n      Envía una invitación ("+t._s(t.invites)+")\n    ")])],1)}),[],!1,null,null,null);e.default=component.exports},223:function(t,e,n){t.exports=n.p+"img/favicon.0f3cbd5.jpg"},224:function(t,e,n){"use strict";n(221)},225:function(t,e,n){var o=n(61)(!1);o.push([t.i,".qr-shade{position:relative;margin:-100px 0 0;padding:0;display:block;background:#111;width:100%;height:100px;opacity:.25;text-align:center}",""]),t.exports=o},226:function(t,e,n){var content=n(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("3692430b",content,!0,{sourceMap:!1})},230:function(t,e,n){var map={"./event.jpg":231,"./food-event.jpg":232};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=230},231:function(t,e,n){t.exports=n.p+"img/event.b5054d2.jpg"},232:function(t,e,n){t.exports=n.p+"img/food-event.ce8f151.jpg"},234:function(t,e,n){"use strict";n(226)},235:function(t,e,n){var o=n(61)(!1);o.push([t.i,'h3{font-family:"Billionaire";color:var(--accent-color);font-size:2em;font-weight:700}li,ul{list-style-type:none}li{text-indent:-2em}.small-txt{font-size:.7em;margin-bottom:2em}hr{margin:2em auto;color:var(--bg);border:5px dashed var(--bg)}.price{margin:.3em auto}.container{margin:auto .5em}.cellphone-container{height:auto;margin:60px auto;box-shadow:5px 5px 115px -14px #000;border-radius:10px}.movie-img{width:100%;height:300px;background-position:50%;background-repeat:no-repeat;background-size:cover;border-top-left-radius:10px;border-top-right-radius:10px;-webkit-mask-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#000),color-stop(.35,#000),color-stop(.5,#000),color-stop(.65,#000),color-stop(.85,rgba(0,0,0,.6)),color-stop(1,transparent))}.movie{background-color:#000;background-size:contain;background-size:cover;height:auto;border-radius:10px;padding-bottom:2em}.text{padding-left:.5em;padding-right:.5em}',""]),t.exports=o},239:function(t,e,n){"use strict";n.r(e);n(170);var o={components:{"invitation-voucher":n(222).default},props:{date:{type:String},name:{type:String,required:!0},code:{type:String,required:!0},invites:{type:Number,required:!0},type:{type:String,required:!0},price:{type:Number,required:!0},whatsapp:{type:String,required:!0},shareLocation:{type:Boolean,required:!0},bus:{type:String,required:!0},maps:{type:String,required:!0}}},r=(n(234),n(42)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"cellphone-container"},[o("div",{staticClass:"movie"},[o("div",{staticClass:"movie-img",style:{backgroundImage:"url("+n(230)("./"+t.type+".jpg")+")"}}),t._v(" "),o("div",{staticClass:"text"},["food-event"==t.type?o("h3",[t._v("\n          Comida "),o("span",{staticClass:"small"},[t._v("&")]),t._v(" Evento\n        ")]):t._e(),t._v(" "),"event"==t.type?o("h3",[t._v("\n          Evento\n        ")]):t._e(),t._v(" "),t.price>0?o("h1",{staticClass:"price"},[t._v("\n          "+t._s(t.price)),o("span",{staticClass:"small"},[t._v("€")])]):t._e(),t._v(" "),o("p",[t._v("\n        Bienvenid@ al EVENTO 3.0, los hermanos tenemos la tradición de hacer un evento con todos nuestros amig@s. Es un evento exclusivo y muy raro, por eso, en esta ocasión, lo queremos hacer un poco especial.\n        ")]),t._v(" "),o("p",[t._v("\n        Cuando se acerque la fecha del Evento aparecerá un precio a pagar a cualquier admin del grupo de whatsapp. Esto es necesario para organizar la fiesta, comprar alcohol y varias sorpresas. Al fin y al cabo esto es una fiesta privada de colegas.\n        ")]),t._v(" "),t.date?o("p",[t._v("\n        Te esperamos el "+t._s(t.date)+".\n        ")]):t._e(),t._v(" "),o("a",{attrs:{href:t.whatsapp}},[t._v("Grupo de whatsapp")]),t._v(" "),o("h3",[t._v("\n          Indispensables\n        ")]),t._v(" "),o("ul",[o("li",[t._v("\n            Ropa de recambio\n          ")]),t._v(" "),o("li",[t._v("\n            Bañador/Bikini\n          ")]),t._v(" "),o("li",[t._v("\n            Toalla\n          ")]),t._v(" "),o("li",[t._v("\n            Crema de sol\n          ")]),t._v(" "),"event"==t.type?o("li",[t._v("\n            Bocata/Tupper\n          ")]):t._e()]),t._v(" "),o("h3",[t._v("\n          Que tenemos?\n        ")]),t._v(" "),o("ul",[o("li",[t._v("\n            Piscina privada\n          ")]),t._v(" "),o("li",[t._v("\n            Barril de cerveza\n          ")]),t._v(" "),o("li",[t._v("\n            Alcohol\n          ")]),t._v(" "),"food-event"==t.type?o("li",[t._v("\n            Comida (Paella)\n          ")]):t._e(),t._v(" "),o("li",[t._v("\n            Multiples ambientes\n          ")]),t._v(" "),o("li",[t._v("\n            a!\n          ")])]),t._v(" "),t.shareLocation?o("div",[o("a",{attrs:{href:t.bus}},[t._v("BUS")]),t._v(" "),o("a",{attrs:{href:t.maps}},[t._v("Google maps")])]):t._e(),t._v(" "),t.invites?o("div",[o("hr"),t._v(" "),o("div",{staticClass:"small-txt"},[t._v("\n            * Si ves un código QR y un botón, has sido seleccionad@ para poder invitar a "+t._s(t.invites)+" de tus amig@s. Clicka en el botón, este enviará un whatsapp a tus amig@s o deja que escaneen el código QR.\n          ")]),t._v(" "),o("invitation-voucher",{attrs:{name:t.name,code:t.code,invites:t.invites}})],1):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InvitationVoucher:n(222).default})},249:function(t,e,n){var content=n(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("7e33df41",content,!0,{sourceMap:!1})},254:function(t,e,n){"use strict";n.r(e);var o={name:"InvitationList"},r=n(42),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t._v("\n  My invitation List\n  "),n("ul",[n("li",[t._v("\n      Name, Surname\n    ")]),t._v(" "),n("li",[t._v("\n      Status\n    ")]),t._v(" "),n("li",[t._v("\n      Ticket type\n    ")])])])}],!1,null,null,null);e.default=component.exports},274:function(t,e,n){t.exports=function(){"use strict";var t=1e3,e=60*t,n=60*e,o=24*n,r="visibilitychange";return{name:"countdown",data:function(){return{counting:!1,endTime:0,totalMilliseconds:0}},props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:function(t){return t>=0}},now:{type:Function,default:function(){return Date.now()}},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:function(t){return t>=0}},transform:{type:Function,default:function(t){return t}}},computed:{days:function(){return Math.floor(this.totalMilliseconds/o)},hours:function(){return Math.floor(this.totalMilliseconds%o/n)},minutes:function(){return Math.floor(this.totalMilliseconds%n/e)},seconds:function(){return Math.floor(this.totalMilliseconds%e/t)},milliseconds:function(){return Math.floor(this.totalMilliseconds%t)},totalDays:function(){return this.days},totalHours:function(){return Math.floor(this.totalMilliseconds/n)},totalMinutes:function(){return Math.floor(this.totalMilliseconds/e)},totalSeconds:function(){return Math.floor(this.totalMilliseconds/t)}},render:function(t){return t(this.tag,this.$scopedSlots.default?[this.$scopedSlots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:this.$slots.default)},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},methods:{start:function(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit("start"),"visible"===document.visibilityState&&this.continue())},continue:function(){var t=this;if(this.counting){var e=Math.min(this.totalMilliseconds,this.interval);if(e>0)if(window.requestAnimationFrame){var n,o,r=function r(l){n||(n=l),o||(o=l);var c=l-n;c>=e||c+(l-o)/2>=e?t.progress():t.requestId=requestAnimationFrame(r),o=l};this.requestId=requestAnimationFrame(r)}else this.timeoutId=setTimeout((function(){t.progress()}),e);else this.end()}},pause:function(){window.requestAnimationFrame?cancelAnimationFrame(this.requestId):clearTimeout(this.timeoutId)},progress:function(){this.counting&&(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit("progress",{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort:function(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit("abort"))},end:function(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit("end"))},update:function(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},handleVisibilityChange:function(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause()}}},mounted:function(){document.addEventListener(r,this.handleVisibilityChange)},beforeDestroy:function(){document.removeEventListener(r,this.handleVisibilityChange),this.pause()}}}()},275:function(t,e,n){"use strict";n(249)},276:function(t,e,n){var o=n(61)(!1);o.push([t.i,'.countdown{font-family:"Billionaire";color:var(--silver);font-size:2em}',""]),t.exports=o},286:function(t,e,n){"use strict";n.r(e);var o=n(2),r=(n(19),n(254)),l=n(239),c=(n(256),n(274)),d=n.n(c),v={middleware:"user",components:{"invitation-list":r.default,ticket:l.default,"vue-countdown":d.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,l,c,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,o=n.$storage.getUniversal("token"),r=null,e.prev=3,e.next=6,n.$fire.firestore.collection("users").doc(o).get();case 6:l=e.sent,r=l.data(),n.$storage.setUniversal("status",r.status),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0),alert("Tu usuario no existe, habla con un admin para solucionarlo."),n.$router.push("/");case 16:return c=null,d=null,e.prev=18,e.next=21,n.$fire.firestore.collection("ticket").doc(r.ticket).get();case 21:return v=e.sent,c=v.data(),e.next=25,n.$fire.firestore.collection("event").doc("3").get();case 25:v=e.sent,(d=v.data()).date=new Date(1e3*d.date.seconds)-new Date,e.next=33;break;case 30:e.prev=30,e.t1=e.catch(18),console.log(e.t1);case 33:return e.abrupt("return",{user:r,ticket:c,event:d});case 34:case"end":return e.stop()}}),e,null,[[3,11],[18,30]])})))()}},h=(n(275),n(42)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t._m(0),t._v(" "),n("vue-countdown",{staticClass:"countdown",attrs:{time:t.event.date},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.days,r=e.hours;e.minutes;return[t._v("\n    "+t._s(o)+" Dias, "+t._s(r)+" Horas\n    "),n("span",{staticClass:"shade"},[t._v(" ")])]}}])}),t._v(" "),"a"==t.user.status?n("ticket",{attrs:{type:t.user.ticket,price:t.ticket.price,whatsapp:t.ticket.whatsapp,name:t.user.name,code:t.user.inviteCode,invites:t.user.invites,shareLocation:t.event.shareLocation,date:t.ticket.date,bus:t.event.bus,maps:t.event.maps}}):t._e(),t._v(" "),"p"==t.user.status?n("div",[t._v("\n    Estamos valorando tu invitación, vuelve más tarde para comprobar si has sido aceptad@.\n  ")]):t._e(),t._v(" "),"c"==t.user.status?n("div",[t._v("\n    Has sido eliminado de la lista de invitados.\n  ")]):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("\n    Tu invitacioN\n    "),n("span",{staticClass:"shade"},[t._v(" ")]),t._v(" "),n("div",{staticClass:"small"},[t._v("\n      para\n      "),n("span",{staticClass:"shade"},[t._v(" ")])]),t._v("\n    EL EVENTO\n    "),n("span",{staticClass:"shade"},[t._v(" ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Ticket:n(239).default})}}]);