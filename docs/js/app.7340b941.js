(function(e){function t(t){for(var s,o,l=t[0],r=t[1],c=t[2],p=0,d=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,l=1;l<n.length;l++){var r=n[l];0!==a[r]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},a={app:0},i=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/wodisher/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=r;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"186b":function(e,t,n){},"1fda":function(e,t,n){"use strict";var s=n("afc8"),a=n.n(s);a.a},"2f60":function(e,t,n){},"43d5":function(e,t,n){},"4a9c":function(e,t,n){"use strict";var s=n("cfab"),a=n.n(s);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=(n("9082"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("TopBar",{on:{onToggleOptionsModal:function(t){return e.toggleOptionsModal()}}}),e.isPlaying?e._e():n("Placeholders"),e.isPlaying?n("Results",{attrs:{wodisher:e.wodisher}}):e._e(),n("Controls",{attrs:{isPlaying:e.isPlaying,challengerMode:e.config.general[0]},on:{onRoll:function(t){return e.roll()},onShowOptions:function(t){return e.toggleOptionsModal()},onConfigUpdate:function(t){return e.handleConfigUpdate(t)}}}),n("Footer"),e.showOptionsModal?n("Options",{attrs:{general:e.config.general,equipments:e.config.equipments,muscleGroups:e.config.muscleGroups},on:{onClose:function(t){return e.toggleOptionsModal()},onConfigUpdate:function(t){return e.handleConfigUpdate(t)},onShare:function(t){return e.toggleSnackBar(t)}}}):e._e(),e.snackBar.show?n("SnackBar",{attrs:{message:e.snackBar.message},on:{onHide:function(t){return e.toggleSnackBar()}}}):e._e()],1)}),i=[],o=(n("4de4"),n("7db0"),n("0481"),n("4160"),n("caad"),n("d81d"),n("45fc"),n("4069"),n("b0c0"),n("d3b7"),n("6062"),n("2532"),n("3ca3"),n("159b"),n("ddb0"),n("2909")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar"},[n("div",{staticClass:"navbar-brand"},[n("div",{staticClass:"navbar-item"},[n("svg",{staticClass:"logo",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1296 228"}},[n("g",[n("path",{attrs:{fill:"#fa2942",d:"M164.82,44.44a55.8,55.8,0,0,0-8.46-19c-4.31-6.35-10.08-11.16-16.6-15.12a47.63,47.63,0,0,0-15-6.2c-3.74-.78-7.53-1.28-11.32-1.74C103.82,1.18,94.25.1,84.58.38c-5.12.15-10.26.13-15.37.4-4.27.23-8.52.83-12.78,1.13A92.62,92.62,0,0,0,42.76,3.77C38,4.84,33.74,7,29.38,9c-3.67,1.68-6.66,4.31-9.71,6.88A54.8,54.8,0,0,0,6.58,32.94,50.61,50.61,0,0,0,1.86,46.49a81.5,81.5,0,0,0-1.81,12c-.33,7.58,1,15,2.87,22.36A116.7,116.7,0,0,0,8.7,98.52c.89,2.06,1.81,4.12,2.73,6.17q2,4.43,4,8.84A35.85,35.85,0,0,1,17,117.27a8.31,8.31,0,0,1,.27,2.06s-2.36,10.93-4.89,22c-1.64,7.21-3.34,14.49-4.51,18.91-3,11.23,0,25.43,0,25.43s10.35,31.25,20,34.12h0a7.65,7.65,0,0,0,1.57.67c4.33,1.24,8.65,2.54,13.06,3.45a170.68,170.68,0,0,0,18.08,2.71c3.28.32,3.84.76,7.14.92h0l0,.1h13.8l3.93-.11v.08c2.82,0,5.65-.15,8.47-.3l.4,0h0l4.09-.12h.17c3.79-.22,5.61-.48,9.46-.79,1.77-.14,3.54-.28,5.31-.44a110.41,110.41,0,0,0,22.5-4.16,22.87,22.87,0,0,0,5-2.26l6.6-7.07a125.47,125.47,0,0,0,5.88-11.38,64.47,64.47,0,0,0,4-9.74,66.05,66.05,0,0,0,3-17.42,62.44,62.44,0,0,0-.36-10.24c-.77-5.53-1.84-11-3-16.48-1-4.8-2.13-9.59-3.43-14.32-.11-.42-.23-.85-.35-1.28-1.11-3.92-2.13-7.77-1.82-11.9.24-3.24.36-6.4,2.24-9.28a11.52,11.52,0,0,0,1.16-3.25,12.16,12.16,0,0,1,.4-1.25c1.82-4.61,3.89-9.14,5.52-13.82a108.66,108.66,0,0,0,5.8-23.94C167.61,60.11,166.6,52.25,164.82,44.44ZM65.08,162.1c-3,.75-6,1.36-9.2.71-2-.43-4.11-.57-6.15-1-2.69-.51-5.38-1.09-8-1.75-2.43-.6-4.83-1.35-7.25-2a10,10,0,0,1-5.67-4.47A30.68,30.68,0,0,1,24.49,144c-.53-2.21-.76-4.49-1.12-6.74l.21,0a10.13,10.13,0,0,1,.67-4.14,1.34,1.34,0,0,1,2.1-.92q7.47,3.47,14.85,7.08c3.78,1.86,7.48,3.85,11.21,5.8s7.72,4.06,11.58,6.09l9.94,5.23c.54.29,1,.64,1.56,1s.47.7,0,.93c-1.9.83-3.8,1.68-5.74,2.4A41.2,41.2,0,0,1,65.08,162.1Zm16.11,9.73c-1,3.07-2.18,6.07-3.31,9.09a16.29,16.29,0,0,1-.86,1.79c-.22.41-.52.5-.81,0-.94-1.45-1.9-2.9-2.8-4.39-.42-.69,0-1.35.33-2,.84-1.49,1.71-3,2.56-4.46l3.92-6.88a1.82,1.82,0,0,1,.52-.66c.43-.24,1-.61,1.35-.49s.47.79.71,1.28C82.27,167.46,81.88,169.7,81.19,171.83Zm-7.61-84a78.91,78.91,0,0,0-21.19,6.48c-.74.33-1.39.85-2.12,1.23a27,27,0,0,1-3.94,1.91c-1.68.55-3.21-.15-4.69-1.07-3.15-2-4.8-5-6.06-8.29C34,83.87,32,79.68,30.84,75.29h0c-2.32-8.67-3.4-17.46.05-26.17,1.5-3.79,3.19-7.53,6.1-10.4a38.06,38.06,0,0,1,6.36-4.52C46.27,32.31,49.68,32,53,31.51c5.11-.68,10.25-1.23,15.39-1.55,5.7-.36,11.42-.4,17.13-.58,9,.4,17.95.85,26.87,2,2,.26,4,.48,6,.86a21.79,21.79,0,0,1,14,8.85A34.27,34.27,0,0,1,138.92,59c.39,4.9-.59,9.61-1.78,14.31-.28,1.13-.6,2.25-.93,3.36A99,99,0,0,1,131,90.33a22.53,22.53,0,0,1-2.52,4.3c-2,2.61-6.07,3.34-9.16,1.94a128.1,128.1,0,0,0-12.1-5.29,111.11,111.11,0,0,0-13.3-3.23A59.24,59.24,0,0,0,73.58,87.88Zm18,95.05c-.76,1.21-.9,1.2-1.5-.09-.68-1.47-1.23-3-1.89-4.46A15.81,15.81,0,0,0,86.83,176a4.12,4.12,0,0,1-.8-2.66c.09-1.9.15-3.79.22-5.69a.17.17,0,0,1,0-.07c.17-.41.35-.81.53-1.21a3.77,3.77,0,0,1,1,.74c1.32,1.87,2.64,3.73,3.84,5.66a32.3,32.3,0,0,1,1.88,3.77,4.7,4.7,0,0,1,.19,1.19A10.87,10.87,0,0,1,91.57,182.93Zm50.35-36.53c-.78,2.2-1.56,4.4-2.5,6.53a9.67,9.67,0,0,1-5.69,5,67.57,67.57,0,0,1-12.88,3.49c-3.13.55-6.29.9-9.45,1.29a45.63,45.63,0,0,1-4.67.35,18.76,18.76,0,0,1-6.46-1.24c-2.56-.89-5.06-2-7.56-3a5.11,5.11,0,0,1-1.07-.81,10.05,10.05,0,0,1,1.06-.79c6.26-3.41,12.58-6.72,18.78-10.24,3.83-2.17,7.47-4.68,11.22-7a50.38,50.38,0,0,1,12.79-6.13,46.36,46.36,0,0,1,6.33-1.14c1.13-.16,1.69.43,1.74,1.63,0,1,0,2.06,0,2.91C144.06,140.6,143,143.5,141.92,146.4Z"}}),n("path",{attrs:{fill:"#fefcfe",d:"M256.27,49.63h34.55v94.2h12.56V49.63h34.38v94.2h12.56V49.63h34.39V178.38H271.19L256.27,163.3Z"}}),n("path",{attrs:{fill:"#fefcfe",d:"M528.22,163.3,513.3,178.38h-98L400.41,163.3V64.7l14.92-15.07h98L528.22,64.7Zm-34.39-19.47V84.17H435v59.66Z"}}),n("path",{attrs:{fill:"#fefcfe",d:"M671.73,163.3l-14.92,15.08H544.08V49.63H656.81L671.73,64.7Zm-34.39-19.47V84.17H578.62v59.66Z"}}),n("path",{attrs:{fill:"#fefcfe",d:"M722.13,178.38H687.58V49.63h34.55Z"}}),n("path",{attrs:{fill:"#fefcfe",d:"M864.85,163.3l-14.92,15.08H737.67V143.83h92.79V131.27H752.58L737.67,116.2V64.7l14.91-15.07H864.85V84.17H772.21V96.73h77.72l14.92,14.92Z"}}),n("path",{attrs:{fill:"#fefcfe",d:"M1008.83,178.38H974.44V131.27H915.09v47.11H880.55V49.63h34.54v47.1h59.35V49.63h34.39Z"}}),n("path",{attrs:{fill:"#fefcfe",d:"M1152.18,178.38H1039.44l-14.91-15.08V64.7l14.91-15.07h112.74V84.17h-93.11V96.73h93.26v34.54h-93.26v12.56h93.11Z"}}),n("path",{attrs:{fill:"#fefcfe",d:"M1296,178.38h-34.39V131.27h-58.88v47.11h-34.54V49.63h112.89L1296,64.7v39.72l-9.42,9.58,9.42,9.58Zm-34.39-81.65V84.17h-58.88V96.73Z"}})])])]),n("button",{staticClass:"navbar-burger navbar-item icon-button",attrs:{type:"button"},on:{click:function(t){return e.toggleShowOptions()}}},[n("svg",{staticClass:"options",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M299.3,376a40.06,40.06,0,0,1,73.4,0H448a16,16,0,0,1,0,32H372.7a40.06,40.06,0,0,1-73.4,0H64a16,16,0,0,1,0-32Zm-160-136a40.06,40.06,0,0,1,73.4,0H448a16,16,0,0,1,0,32H212.7a40.06,40.06,0,0,1-73.4,0H64a16,16,0,0,1,0-32Zm160-136a40.06,40.06,0,0,1,73.4,0H448a16,16,0,0,1,0,32H372.7a40.06,40.06,0,0,1-73.4,0H64a16,16,0,0,1,0-32Z"}})])])])])},r=[],c={name:"TopBar",methods:{toggleShowOptions:function(){this.$emit("onToggleOptionsModal")}}},u=c,p=(n("b3a3"),n("2877")),d=Object(p["a"])(u,l,r,!1,null,"52ec7696",null),m=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("div",{staticClass:"placeholder",domProps:{innerHTML:e._s(e.quotes[e.index])}})])},f=[],v={name:"Placeholders",data:function(){return{quotes:["<span class='fade-in-out'>Si vis pacem, para bellum.</span>","<span class='fade-in-out'>I've no idea how things will end up.</span>","<span class='fade-in-out'>My favorite sound in the world is the silence after the first gunshot.</span>","<span class='fade-in-out'>People think that torture is pain. It's not pain, it's time.</span>","<span class='fade-in-out'>Happy is a kick in the balls waiting to happen.</span>"],index:0,interval:null}},created:function(){var e=this;this.interval=setInterval((function(){e.index=e.index<e.quotes.length-1?e.index+1:0}),1e4)},beforeDestroy:function(){clearInterval(this.interval)}},b=v,g=(n("4a9c"),Object(p["a"])(b,h,f,!1,null,null,null)),C=g.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("div",{staticClass:"results"},[n("span",{staticClass:"results_number",class:{"results_number--show":e.hasWodisher}},[e._v(e._s(e.wodisher.reps))]),n("span",{staticClass:"results_movement",class:{"results_movement--show":e.hasWodisher}},[e._v(e._s(e.wodisher.movement))])])])},_=[],k={name:"Results",props:["wodisher"],data:function(){return{}},methods:{},computed:{hasWodisher:function(){return!!this.wodisher.reps&&!!this.wodisher.movement}},created:function(){}},y=k,q=(n("5c87"),Object(p["a"])(y,w,_,!1,null,"307fab4b",null)),O=q.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("div",[n("button",{staticClass:"button is-primary is-large rollButton",attrs:{type:"button"},on:{click:function(t){return e.roll()}}},[e._v(" "+e._s(e.playingLabel)+" ")]),n("button",{staticClass:"button is-primary is-large is-outlined has-text-white optionsButton",attrs:{type:"button"},on:{click:function(t){return e.showOptions()}}},[e._v(" Options ")])]),n("Switcher",{staticClass:"challenger-mode-container",attrs:{isChecked:e.challengerMode.value,label:e.challengerMode.label,"data-tooltip":"Increase the min and max rep count from 10-60 to 30-120"},on:{onChange:function(t){return e.handleConfigUpdate("general",e.challengerMode.label,t)}}})],1)},G=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"switch-container"},[n("label",{staticClass:"switch",class:{"switch--disabled":e.disabled}},[e.label?n("span",{staticClass:"switch_label",class:{"switch_label--disabled":e.disabled}},[e._v(e._s(e.label))]):e._e(),n("input",{attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.isChecked},on:{change:function(t){return e.onChange(t.target.checked)}}}),n("div",{staticClass:"switch_control",class:{"switch_control--disabled":e.disabled}})])])},M=[],H={name:"Switcher",props:["isChecked","label","disabled"],methods:{onChange:function(e){this.$emit("onChange",e)}}},P=H,j=(n("64ae"),Object(p["a"])(P,S,M,!1,null,"62a6d235",null)),B=j.exports,V={name:"Controls",components:{Switcher:B},props:["challengerMode","isPlaying"],data:function(){return{}},methods:{handleConfigUpdate:function(e,t,n){this.$emit("onConfigUpdate",{section:e,label:t,checked:n})},roll:function(){this.$emit("onRoll")},showOptions:function(){this.$emit("onShowOptions")}},computed:{playingLabel:function(){return this.isPlaying?"Reroll":"Roll a workout"}},created:function(){}},$=V,T=(n("ac12"),Object(p["a"])($,x,G,!1,null,"2a1b06e3",null)),Z=T.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[e._v("© "+e._s(e.year)+", Wodisher")]),e._m(0)])])},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"level-item"},[n("a",{attrs:{href:"https://pierre-burton.be",target:"_blank"}},[e._v("Pierre Burton")])])}],U=(n("0d03"),{name:"Footer",computed:{year:function(){return(new Date).getFullYear()}}}),L=U,W=(n("1fda"),Object(p["a"])(L,A,E,!1,null,"08a97ae6",null)),R=W.exports,D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"options",class:{"options--hidden":e.closing},on:{click:function(t){return t.target!==t.currentTarget?null:e.close()}}},[s("div",{staticClass:"options_container",class:{"options_container--hidden":e.closing}},[s("div",{staticClass:"container_header"},[s("h2",{staticClass:"container_title"},[e._v("Options")]),s("button",{staticClass:"button button--text",on:{click:function(t){return t.target!==t.currentTarget?null:e.close()}}},[e._v("Close")])]),s("label",{staticClass:"label"},[e._v("General")]),e._l(e.general,(function(t){return s("div",{key:t.label,staticClass:"option"},[s("div",{staticClass:"option_label"},[e._v(" "+e._s(t.label)),s("br"),e._m(0,!0)]),s("div",{staticClass:"option_control"},[s("Switcher",{attrs:{isChecked:t.value},on:{onChange:function(n){return e.handleConfigUpdate("general",t.label,n)}}})],1)])})),s("label",{staticClass:"label"},[e._v("Equipments")]),e._l(e.equipments,(function(t){return s("div",{key:t.label,staticClass:"option"},[s("div",{staticClass:"option_label"},[e._v(" "+e._s(t.label.slice(0,1).toUpperCase()+t.label.slice(1))+" ")]),s("div",{staticClass:"option_control"},[s("Switcher",{attrs:{isChecked:t.value},on:{onChange:function(n){return e.handleConfigUpdate("equipments",t.label,n)}}})],1)])})),s("label",{staticClass:"label"},[e._v("Target muscles groups")]),e._l(e.muscleGroups,(function(t){return s("div",{key:t.label,staticClass:"option"},[s("div",{staticClass:"option_label"},[e._v(" "+e._s(t.label.slice(0,1).toUpperCase()+t.label.slice(1))+" ")]),s("div",{staticClass:"option_control"},[s("Switcher",{attrs:{isChecked:t.value},on:{onChange:function(n){return e.handleConfigUpdate("muscleGroups",t.label,n)}}})],1)])})),s("div",{staticClass:"about"},[s("label",{staticClass:"label"},[e._v("About")]),e._m(1),s("div",{staticClass:"option"},[s("div",{staticClass:"option_label"},[e._v(" Spread the love ")]),s("div",{staticClass:"option_control"},[s("button",{staticClass:"icon-button",attrs:{type:"button"},on:{click:function(t){return e.share()}}},[s("svg",{staticClass:"share",attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[s("path",{attrs:{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}})])])])]),s("img",{staticClass:"about_logo",attrs:{src:n("9b19")}}),s("div",{staticClass:"about_version"},[e._v(" v"+e._s(e.version)+" "),s("br"),e._v(" © "+e._s(e.year)+", Wodisher ")])])],2)])},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"is-text-small is-muted"},[e._v("Increase the min and max rep count"),n("br"),e._v("from 10-60 to 30-120")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"option"},[n("div",{staticClass:"option_label"},[e._v(" Made with 💪 by ")]),n("div",{staticClass:"option_control"},[n("a",{attrs:{href:"https://pierre-burton.be",target:"_blank"}},[e._v("Pierre Burton")])])])}],F=(n("96cf"),n("9224")),J={name:"Options",components:{Switcher:B},props:["isChallengerMode","general","equipments","muscleGroups"],data:function(){return{closing:!1,version:F.version}},methods:{close:function(){var e=this;this.closing=!0,setTimeout((function(){return e.$emit("onClose")}),500)},handleConfigUpdate:function(e,t,n){this.$emit("onConfigUpdate",{section:e,label:t,checked:n})},share:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(!navigator.share){t.next=5;break}return t.next=3,regeneratorRuntime.awrap(navigator.share({title:"Wodisher - It's time to throw you down !",url:location.href}));case 3:t.next=13;break;case 5:e=document.createElement("textarea"),e.value=location.href,document.body.appendChild(e),e.select(),e.setSelectionRange(0,9999999),document.execCommand("copy"),document.body.removeChild(e),this.$emit("onShare","Link copied in clipboard !");case 13:case"end":return t.stop()}}),null,this)}},computed:{year:function(){return(new Date).getFullYear()},isShareAvailable:function(){return!!navigator.share}},created:function(){}},N=J,Y=(n("64dc"),Object(p["a"])(N,D,I,!1,null,"2afd1116",null)),z=Y.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"snackbar"},[e._v(" "+e._s(e.message)+" ")])},Q=[],X={name:"SnackBar",props:["message"],mounted:function(){var e=this;setTimeout((function(){return e.$emit("onHide")}),3e3)}},ee=X,te=(n("9a3d"),Object(p["a"])(ee,K,Q,!1,null,"4b696dad",null)),ne=te.exports,se=[{name:"Burpees",equipment:[],muscleGroup:["cardio"]},{name:"Cal Assault-bike",equipment:["assault-bike"],muscleGroup:["cardio","legs","arms"]},{name:"Cal Assault-run",equipment:["assault-run"],muscleGroup:["cardio","legs"]},{name:"Cal Row",equipment:["row erg"],muscleGroup:["cardio","legs","back"]},{name:"Cal Bike erg",equipment:["bike erg"],muscleGroup:["cardio","legs"]},{name:"Cal Ski erg",equipment:["ski erg"],muscleGroup:["cardio","arms"]},{name:"Push-ups",equipment:[],muscleGroup:["arms","chest"]},{name:"Squats",equipment:[],muscleGroup:["legs"]},{name:"Lunges",equipment:[],muscleGroup:["legs"]},{name:"Sit-ups",equipment:[],muscleGroup:["core"]},{name:"Hollow rocks",equipment:[],muscleGroup:["core"]},{name:"sec Hollow hold",equipment:[],muscleGroup:["core"]},{name:"V-ups",equipment:[],muscleGroup:["core"]},{name:"Side raises",equipment:[],muscleGroup:["core"]},{name:"Flutter kicks",equipment:[],muscleGroup:["core"]},{name:"sec Plank",equipment:[],muscleGroup:["core"]},{name:"Toes to bar",equipment:[],muscleGroup:["core","back"]},{name:"Pull-ups",equipment:[],muscleGroup:["back","arms"]},{name:"Chest to bar",equipment:[],muscleGroup:["back","arms"]},{name:"Muscle-ups",equipment:[],muscleGroup:["back","arms"]},{name:"Dips",equipment:["rings","box","matador"],muscleGroup:["arms"]},{name:"Double unders",equipment:["jump rope"],muscleGroup:["back","arms"]},{name:"Hand-stand push-ups",equipment:[],muscleGroup:["shoulders","arms"]},{name:"sec L-sit",equipment:[],muscleGroup:["core"]},{name:"kettlebell swings",equipment:["kettlebell"],muscleGroup:["core"]},{name:"Clean",equipment:["barbell","dumbell","kettlebell","medicine ball","sandbag"],muscleGroup:["back","legs"]},{name:"Deadlift",equipment:["barbell","dumbell","kettlebell"],muscleGroup:["back","legs"]},{name:"Snatch",equipment:["barbell","dumbell","kettlebell"],muscleGroup:["back","legs","shoulders"]},{name:"Press/Jerk",equipment:["barbell","dumbell","kettlebell"],muscleGroup:["shoulders","arms"]},{name:"Devil Press",equipment:["dumbell","kettlebell"],muscleGroup:["back","legs","shoulders"]},{name:"Wall-ball shots",equipment:["medicine ball"],muscleGroup:["shoulders","legs"]},{name:"meters Farmer walk",equipment:["dumbell","kettlebell"],muscleGroup:["back","legs","arms"]}],ae={name:"app",components:{TopBar:m,Placeholders:C,Results:O,Controls:Z,Footer:R,Options:z,SnackBar:ne},data:function(){return{isPlaying:!1,showOptionsModal:!1,config:{general:[{label:"Challenger mode",value:!1}],equipments:[],muscleGroups:[]},movements:se,wodisher:{reps:null,movement:null},timer:null,throtle:null,snackBar:{show:!1,message:null}}},methods:{roll:function(){var e=this;clearTimeout(this.throtle),this.setWodisher();var t=Object(o["a"])(new Set(this.config.equipments.filter((function(e){return e.value})).map((function(e){return e.label})).flat())),n=Object(o["a"])(new Set(this.config.muscleGroups.filter((function(e){return e.value})).map((function(e){return e.label})).flat())),s=10*Math.floor(Math.random()*(this.max-this.min)+this.min),a=this.movements.filter((function(e){return!e.equipment.length&&e.muscleGroup.some((function(e){return n.includes(e)}))||e.equipment.some((function(e){return t.includes(e)}))&&e.muscleGroup.some((function(e){return n.includes(e)}))})),i=a[Math.floor(Math.random()*a.length)];this.throtle=setTimeout((function(){return e.setWodisher(s,i.name)}),500),this.isPlaying=!0},setWodisher:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.wodisher.reps=e,this.wodisher.movement=t},toggleOptionsModal:function(){this.showOptionsModal=!this.showOptionsModal},setDefaultConfig:function(){var e=this;this.equipments.forEach((function(t){e.config.equipments.push({label:t,value:!0})})),this.muscleGroups.forEach((function(t){e.config.muscleGroups.push({label:t,value:!0})})),this.saveConfig()},saveConfig:function(){localStorage.setItem("config",JSON.stringify(this.config))},getConfig:function(){this.config=JSON.parse(localStorage.getItem("config"))},handleConfigUpdate:function(e){var t=e.section,n=e.label,s=e.checked,a=this.config[t].find((function(e){return e.label===n}));a.value=s,this.saveConfig()},toggleSnackBar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&this.snackBar.show&&(this.snackBar.show=!1),this.snackBar.message=e,this.snackBar.show=!this.snackBar.show}},computed:{max:function(){return this.config.general[0].value?13:7},min:function(){return this.config.general[0].value?3:1},equipments:function(){return Object(o["a"])(new Set(this.movements.map((function(e){return e.equipment})).flat()))},muscleGroups:function(){return Object(o["a"])(new Set(this.movements.map((function(e){return e.muscleGroup})).flat()))}},watch:{isPlaying:function(e){var t=this;e?this.timer=setTimeout((function(){return t.isPlaying=!1}),3e5):clearTimeout(this.timer)}},created:function(){localStorage.getItem("config")?this.getConfig():this.setDefaultConfig()}},ie=ae,oe=(n("5c0b"),Object(p["a"])(ie,a,i,!1,null,null,null)),le=oe.exports,re=n("9483");Object(re["a"])("".concat("/wodisher/","service-worker.js"),{ready:function(){},registered:function(){},cached:function(){},updatefound:function(){},updated:function(){window.location.reload(!0)},offline:function(){},error:function(e){console.error("Error during service worker registration:",e)}}),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(le)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var s=n("9c0c"),a=n.n(s);a.a},"5c87":function(e,t,n){"use strict";var s=n("6238"),a=n.n(s);a.a},6238:function(e,t,n){},"64ae":function(e,t,n){"use strict";var s=n("43d5"),a=n.n(s);a.a},"64dc":function(e,t,n){"use strict";var s=n("6a6e"),a=n.n(s);a.a},"6a6e":function(e,t,n){},7445:function(e,t,n){},9082:function(e,t,n){},9224:function(e){e.exports=JSON.parse('{"name":"wodisher","version":"1.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","serve:prod":"npx http-server -p 8080 -c-1 dist","build":"vue-cli-service build && gulp build","lint":"vue-cli-service lint"},"dependencies":{"bulma":"^0.8.0","core-js":"^3.4.3","register-service-worker":"^1.6.2","vue":"^2.6.10"},"devDependencies":{"@vue/cli-plugin-babel":"^4.1.0","@vue/cli-plugin-eslint":"^4.1.0","@vue/cli-plugin-pwa":"^4.1.0","@vue/cli-service":"^4.1.0","@vue/eslint-config-prettier":"^5.0.0","babel-eslint":"^10.0.3","eslint":"^5.16.0","eslint-plugin-prettier":"^3.1.1","eslint-plugin-vue":"^5.0.0","gulp":"^4.0.2","gulp-clean":"^0.4.0","lint-staged":"^9.4.3","node-sass":"^4.13.0","prettier":"^1.19.1","sass-loader":"^8.0.0","vue-template-compiler":"^2.6.10"},"gitHooks":{"pre-commit":"lint-staged"},"lint-staged":{"src/*.{js,vue}":["vue-cli-service lint","git add"]},"postcss":{"plugins":{"autoprefixer":{}}},"vue":{"publicPath":"/wodisher/","pwa":{"name":"Wodisher","themeColor":"#121317","msTileColor":"#121317","appleMobileWebAppCapable":"yes","appleMobileWebAppStatusBarStyle":"black-translucent","workboxOptions":{"skipWaiting":true}}}}')},"9a3d":function(e,t,n){"use strict";var s=n("2f60"),a=n.n(s);a.a},"9b19":function(e,t,n){e.exports=n.p+"img/logo.dbd24a81.svg"},"9c0c":function(e,t,n){},ac12:function(e,t,n){"use strict";var s=n("7445"),a=n.n(s);a.a},afc8:function(e,t,n){},b3a3:function(e,t,n){"use strict";var s=n("186b"),a=n.n(s);a.a},cfab:function(e,t,n){}});
//# sourceMappingURL=app.7340b941.js.map