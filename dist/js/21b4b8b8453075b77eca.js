(window.webpackJsonp=window.webpackJsonp||[]).push([["npm._internationalized~date"],{"3Ku1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));new Map;new Map;new WeakMap;new WeakMap;new WeakMap;new WeakMap;let o=new Map;class a{format(t){return this.formatter.format(t)}formatToParts(t){return this.formatter.formatToParts(t)}formatRange(t,e){if("function"==typeof this.formatter.formatRange)return this.formatter.formatRange(t,e);if(e<t)throw new RangeError("End date must be >= start date");return`${this.formatter.format(t)} – ${this.formatter.format(e)}`}formatRangeToParts(t,e){if("function"==typeof this.formatter.formatRangeToParts)return this.formatter.formatRangeToParts(t,e);if(e<t)throw new RangeError("End date must be >= start date");let r=this.formatter.formatToParts(t),o=this.formatter.formatToParts(e);return[...r.map((t=>({...t,source:"startRange"}))),{type:"literal",value:" – ",source:"shared"},...o.map((t=>({...t,source:"endRange"})))]}resolvedOptions(){let t=this.formatter.resolvedOptions();return function(){null==i&&(i="h12"===new Intl.DateTimeFormat("fr",{hour:"numeric",hour12:!1}).resolvedOptions().hourCycle);return i}()&&(this.resolvedHourCycle||(this.resolvedHourCycle=function(t,e){if(!e.timeStyle&&!e.hour)return;t=t.replace(/(-u-)?-nu-[a-zA-Z0-9]+/,"");let r=u(t+=(t.includes("-u-")?"":"-u")+"-nu-latn",{...e,timeZone:void 0}),o=parseInt(r.formatToParts(new Date(2020,2,3,0)).find((t=>"hour"===t.type)).value,10),a=parseInt(r.formatToParts(new Date(2020,2,3,23)).find((t=>"hour"===t.type)).value,10);if(0===o&&23===a)return"h23";if(24===o&&23===a)return"h24";if(0===o&&11===a)return"h11";if(12===o&&11===a)return"h12";throw new Error("Unexpected hour cycle result")}(t.locale,this.options)),t.hourCycle=this.resolvedHourCycle,t.hour12="h11"===this.resolvedHourCycle||"h12"===this.resolvedHourCycle),"ethiopic-amete-alem"===t.calendar&&(t.calendar="ethioaa"),t}constructor(t,e={}){this.formatter=u(t,e),this.options=e}}const n={true:{ja:"h11"},false:{}};function u(t,e={}){if("boolean"==typeof e.hour12&&function(){null==s&&(s="24"===new Intl.DateTimeFormat("en-US",{hour:"numeric",hour12:!1}).format(new Date(2020,2,3,0)));return s}()){e={...e};let r=n[String(e.hour12)][t.split("-")[0]],o=e.hour12?"h12":"h23";e.hourCycle=null!=r?r:o,delete e.hour12}let r=t+(e?Object.entries(e).sort(((t,e)=>t[0]<e[0]?-1:1)).join():"");if(o.has(r))return o.get(r);let a=new Intl.DateTimeFormat(t,e);return o.set(r,a),a}let s=null;let i=null}}]);