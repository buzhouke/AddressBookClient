(window.webpackJsonp=window.webpackJsonp||[]).push([["featureRelatedFiles~main~mobile"],{"8/2k":function(e,t,r){var n={"./dev/strings.json":["DqxR","dev-strings-json"],"./en-US/strings.json":["eXG7","en-US-strings-json"],"./zh-CN/strings.json":["GB1s","zh-CN-strings-json"],"./zh-TW/strings.json":["rTTZ","zh-TW-strings-json"]};function o(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return r.e(t[1]).then((function(){return r.t(o,3)}))}o.keys=function(){return Object.keys(n)},o.id="8/2k",e.exports=o},"8G6N":function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return v}));var n=r("0acT"),o=r("1hmm"),s=r("8dj6"),i=r("ggb3"),a=r("fPKC"),c=r("8MrD"),u=r("pIRP"),l=r("TktC"),d=r("MpLv"),p=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e))}catch(e){s(e)}}function a(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const h=e=>e>=200&&e<300,f=s.a.create({validateStatus:h,paramsSerializer:{serialize:e=>new URLSearchParams(Object.entries(e).filter((e=>void 0!==e[1]))).toString()}});function m(e){var t;return null===(t=null==e?void 0:e.headers)||void 0===t?void 0:t[a.e]}function g(e,t){const r=e.url||"",n=(null==e?void 0:e._getTeamsContextTime)||performance.now(),o=(null==e?void 0:e._getAuthTokenTime)||performance.now(),s=(null==e?void 0:e._startRequestTime)||performance.now(),i=o-n,c=s-o,u=performance.now()-s,d=m(e),p=null==t?void 0:t[a.f],h=Object(l.b)(t);return{url:r,getTeamsContextLatency:i,getAuthTokenLatency:c,latency:u,clientRequestId:d,correlationId:p,apiName:new URL(r,e.baseURL||location.origin).pathname,requestMethod:e.method||"GET",edgeRef:h}}function v(e){var t;const{status:r=0,config:n}=e,o=g(n,e.headers);h(r)?u.f.logTraceDebug(u.a.APIRequest,`success for ${e.config.url}`):u.f.logTraceHttpException(o.apiName||"",(null===(t=e.data)||void 0===t?void 0:t.Message)||e.statusText,r);const s=Object.assign(Object.assign({},o),{responseCode:r,responseText:e.statusText});return u.f.logHttp(s),e.data}f.interceptors.request.use((function(e){var t,r;return p(this,void 0,void 0,(function*(){e.headers?e.headers[a.e]||(e.headers[a.e]=Object(o.e)()):e.headers=new i.b({[a.e]:Object(o.e)()}),u.f.logTraceDebug(u.a.APIRequest,`Calling getAuthToken for ${c.a}`),e._getTeamsContextTime=performance.now();const s=yield Object(n.h)();return e._getAuthTokenTime=performance.now(),e.headers.authorization=`Bearer ${yield Object(n.g)(c.a)}`,e.headers[a.g]=null===(r=null===(t=s.user)||void 0===t?void 0:t.tenant)||void 0===r?void 0:r.id,e._startRequestTime=performance.now(),e}))})),f.interceptors.response.use(v,(function(e){var t,r,o,a;return p(this,void 0,void 0,(function*(){if((null==e?void 0:e.code)===i.a.ERR_NETWORK)throw u.f.logTraceError(u.a.NetworkError,`NetworkError ${null===(t=null==e?void 0:e.config)||void 0===t?void 0:t.url} ${e.message}`),e.config&&u.f.logHttp(g(e.config)),new d.b(e,d.a.network,m(e.config));if(null==e?void 0:e.response){const t=e.response;if((null==t?void 0:t.data)instanceof Blob&&"application/json"===(null==t?void 0:t.data.type))try{const e=JSON.parse(yield null==t?void 0:t.data.text());t.data=e}catch(e){u.f.logTraceError(u.a.APIRequest,`Invalid JSON response from Blob: ${null==t?void 0:t.data}`)}throw v(t),new d.b(t,void 0,m(e.config))}if(s.a.isCancel(e))u.f.logTraceInfo(u.a.APIRequest,`Cancel ${null===(r=null==e?void 0:e.config)||void 0===r?void 0:r.url}`);else{if(null==e?void 0:e.config){const t=function(e){switch(e){case i.a.ERR_NETWORK:return u.a.NetworkError;case i.a.ETIMEDOUT:return u.a.TimeoutExceeded;case i.a.ECONNABORTED:return u.a.RequestAborted;default:return u.a.APIRequest}}(null==e?void 0:e.code);throw u.f.logTraceError(t,`NetworkError ${null===(o=null==e?void 0:e.config)||void 0===o?void 0:o.url} ${e.message}`),u.f.logHttp(g(e.config)),new d.b(e,d.a.network,m(e.config))}if(e instanceof Error){const t=e instanceof n.b;throw u.f.logTraceException(t?u.a.TeamsSDKError:u.a.RuntimeError,{error:e,message:`${e.name} ${null===(a=null==e?void 0:e.config)||void 0===a?void 0:a.url}`}),new d.b(e,t?d.a.teamsSDK:d.a.runtime)}u.f.logTraceError(u.a.UnknownRequestError,`UnknownError ${e}`)}throw new d.b(e)}))}))},FMwJ:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("k2tF"),o=r("b6hu"),s=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e))}catch(e){s(e)}}function a(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const i=new Map;function a(e,t){return s(this,void 0,void 0,(function*(){const r=function(e,t){return`${e}${t?`_${t}`:""}`}(e,t);let s=i.get(r);if(s){const e=yield c(s,r);if(e&&new Date(e.expiresOn)>new Date)return e.token}s=o.a.tokenExchangeVersion_Exchange({input:{ResourceType:e,ResourceUrl:t}}),i.set(r,s);const a=yield c(s,r);Object(n.a)(a.token);return a.token}))}function c(e,t){return s(this,void 0,void 0,(function*(){try{return yield e}catch(e){return i.delete(t),Promise.reject(e)}}))}},MpLv:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s}));var n,o;!function(e){e.unknown="C_ERR_UNKNOWN",e.unknownServerInternal="C_ERR_UNKNOWN_SERVER_INTERNAL",e.unknownServerRequest="C_ERR_UNKNOWN_SERVER_REQUEST",e.unknownRuntime="C_ERR_UNKNOWN_RUNTIME",e.network="C_ERR_NETWORK",e.teamsSDK="C_ERR_TEAMS_SDK",e.runtime="C_ERR_RUNTIME"}(n||(n={})),o||(o={});class s extends Error{constructor(e,t,r){var o,s,a;if(super(),this.name="RequestError",this.headers={},this.requestId=r,e instanceof Error)this.code=t||n.unknown,this.message=`Request Erorr: ${e.message}`,this.isRetriable=this.code!==n.runtime&&this.code!==n.unknownRuntime,this.stack=e.stack;else if(e.status){const t=e.data;(null==t?void 0:t.Code)?this.code=t.Code:e.status>=500?this.code=n.unknownServerInternal:(e.status,this.code=n.unknownServerRequest),this.message="string"==typeof t?t:(null==t?void 0:t.Message)||e.statusText||"An unexpected server error occurred",this.status=e.status,this.headers=e.headers,this.response=t,this.isRetriable=null!==(o=null==t?void 0:t.IsRetriable)&&void 0!==o?o:e.status>=500,this.additionalErrorMessage=null===(s=null==t?void 0:t.AdditionalMessage)||void 0===s?void 0:s.map((e=>i(e))),this.detailedErrors=null===(a=null==t?void 0:t.DetailedErrors)||void 0===a?void 0:a.map((e=>({code:e.Code,message:e.Message,isRetriable:e.IsRetriable,additionalErrorMessage:i(e.AdditionalMessage)})))}else this.code=t||n.unknown,this.message=`${(null==e?void 0:e.message)||e}`||"An unexpected server error occurred",this.isRetriable=!0}}function i(e){return{userNames:e.UserNames,userIds:e.UserIds,entityNames:e.EntityNames,entityIds:e.EntityIds,helpLink:e.HelpLink}}},YCKj:function(e,t,r){"use strict";r.d(t,"d",(function(){return n.a})),r.d(t,"a",(function(){return o.DirectoryObjectType})),r.d(t,"b",(function(){return s.a})),r.d(t,"e",(function(){return d})),r.d(t,"c",(function(){return m}));r("8G6N");var n=r("k/S9"),o=r("kUcb"),s=r("b6hu"),i=r("jtiS"),a=r("twkq"),c=r("2O6R"),u=r("8MrD"),l=r("pIRP");const d=new i.QueryClient({defaultOptions:{queries:{cacheTime:864e5,staleTime:3e5,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnWindowFocus:!1,retryDelay:e=>1500*e,retry:(e,t)=>{if(t instanceof Error){const r=t;return e<3&&404!==r.status&&429!==r.status&&403!==(null==r?void 0:r.status)}return!1}}}}),p=u.k.get(u.g.UserId),h="REACT_QUERY_OFFLINE_CACHE",f=Object(a.a)({storage:window.localStorage,key:h}),m=()=>window.localStorage.removeItem(h);Object(c.a)({queryClient:d,persistor:f,maxAge:6048e5,buster:(p?"APICache-"+p:"CommonAPICache")+"-V3"}),window.ononline=()=>{i.onlineManager.setOnline(!0)},window.onoffline=()=>{i.onlineManager.setOnline(!0)},Object(i.setLogger)(u.l?console:{log:e=>{l.f.logTraceInfo(l.a.ReactQuery,JSON.stringify(e))},warn:e=>{l.f.logTraceWarning(l.a.ReactQuery,JSON.stringify(e))},error:e=>{l.f.logTraceError(l.a.ReactQuery,JSON.stringify(e))}});r("MpLv"),r("FMwJ")},b6hu:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("8G6N"),o=r("kUcb");const s={};Object.entries(o).filter((([e])=>e.endsWith("ServiceClient"))).forEach((([e,t])=>{const r=new t("",n.a);Object.getOwnPropertyNames(t.prototype).forEach((e=>{"constructor"!==e&&(s[e]=r[e].bind(r))}))}))},fOXQ:function(e,t,r){"use strict";var n;r.d(t,"a",(function(){return n})),function(e){e.appName="appName",e.dropDownForDepartDefault="dropDownForDepartDefault",e.dropDownForDepartOption1="dropDownForDepartOption1",e.searchPlaceholder="searchPlaceholder",e.peopleListColumnForName="peopleListColumnForName",e.peopleListColumnForEmail="peopleListColumnForEmail",e.peopleListColumnForPhone="peopleListColumnForPhone",e.peopleListColumnForDepart="peopleListColumnForDepart",e.peopleListColumnForJob="peopleListColumnForJob",e.errorTitleForNotContract="errorTitleForNotContract",e.errorMessageForNotContract="errorMessageForNotContract",e.exitSearchLabel="exitSearchLabel",e.searchResultLabel="searchResultLabel",e.loadingAriaLabel="loadingAriaLabel",e.errorTitle="errorTitle",e.errorDescription="errorDescription",e.errorAction="errorAction",e.returnToHomePage="returnToHomePage"}(n||(n={}))},kUcb:function(e,t,r){"use strict";r.r(t),r.d(t,"ReportServiceClient",(function(){return c})),r.d(t,"DirectoryObjectType",(function(){return n})),r.d(t,"ExpandValue",(function(){return o})),r.d(t,"UserType",(function(){return s})),r.d(t,"ResourceType",(function(){return i})),r.d(t,"ServiceException",(function(){return u}));var n,o,s,i,a=r("8dj6");class c{constructor(e,t){this.jsonParseReviver=void 0,this.instance=t||a.a.create(),this.baseUrl=null!=e?e:""}fetchGetAllUserMembersByDepartment({departmentId:e,isRootDepartment:t,top:r,skipToken:n},o){let s={method:"GET",url:"https://hierarchicaladdressbook20241114184550.azurewebsites.net/api/Department/GetAllUserMembers",params:{Top:r,SkipToken:n,isRootDepartment:t,departmentId:e},headers:{Accept:"application/json"},signal:o};return this.instance.request(s)}fetchGetDirectUserMembersByDepartment({departmentId:e,isRootDepartment:t,top:r,skipToken:n},o){let s={method:"GET",url:"https://hierarchicaladdressbook20241114184550.azurewebsites.net/api/Department/GetUserMembersNotAssignedToAnySubDepartments",params:{Top:r,SkipToken:n,IsRootDepartment:t,departmentId:e},headers:{Accept:"application/json"},signal:o};return this.instance.request(s)}fetchSearchUser({userDisplayName:e,top:t,skipToken:r},n){let o={method:"GET",url:"https://hierarchicaladdressbook20241114184550.azurewebsites.net/api/User/SearchUsers",params:{Top:t,SkipToken:r,userDisplayName:e},headers:{Accept:"application/json"},signal:n};return this.instance.request(o)}tokenExchangeVersion_Exchange({input:e},t){let r={data:JSON.stringify(e),method:"POST",url:"https://hierarchicaladdressbook20241114184550.azurewebsites.net/api/TokenExchange",params:{},headers:{"Content-Type":"application/json",Accept:"application/json"},signal:t};return this.instance.request(r)}fetchDepartmentNav({},e){let t={method:"Get",url:"https://hierarchicaladdressbook20241114184550.azurewebsites.net/api/Department/GetAllDepartments",params:{},headers:{"Content-Type":"application/json",Accept:"application/json"},signal:e};return this.instance.request(t)}clearCache({},e){let t={method:"Get",url:"https://hierarchicaladdressbook20241114184550.azurewebsites.net/api/Department/ClearCache",params:{},headers:{Accept:"application/json"},signal:e};return this.instance.request(t)}}!function(e){e[e.User=0]="User",e[e.Group=1]="Group",e[e.TeamworkTag=2]="TeamworkTag"}(n||(n={})),function(e){e[e.Members=1]="Members",e[e.MembersWithPhoto=3]="MembersWithPhoto"}(o||(o={})),function(e){e[e.Member=0]="Member",e[e.Guest=1]="Guest",e[e.Unknown=2]="Unknown"}(s||(s={})),function(e){e[e.Graph=0]="Graph",e[e.WorkHub=1]="WorkHub"}(i||(i={}));class u extends Error{constructor(e,t,r,n,o){super(),this.isServiceException=!0,this.message=e,this.status=t,this.response=r,this.headers=n,this.result=o}static isServiceException(e){return!0===e.isServiceException}}},xZ10:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n=["en-US","zh-CN","zh-TW"]}}]);