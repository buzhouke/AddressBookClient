(window.webpackJsonp=window.webpackJsonp||[]).push([["main"],{JwtI:function(e,t,a){"use strict";a.r(t);a("rMck"),a("ajHv");var n,o=a("ERkP"),l=a.n(o),i=a("7nmT"),r=a.n(i),c=a("0acT"),s=a("5qKm"),d=a("jtiS"),m=a("TQen"),u=a("Udmz"),p=a("H8PI"),b=a("8MrD");!function(e){e[e.Default=0]="Default",e[e.User=1]="User"}(n||(n={}));var f=a("8dj6"),g=a("fPKC"),v=a("pIRP"),h=a("8G6N");const x="EcsConfig",E=(()=>{try{return JSON.parse(localStorage.getItem(x)||"{}")}catch(e){return{}}})(),y=Object.assign(Object.assign({},{NPSFeedbackEnabledTimeRange:"",FeedbackBubbleEnabledTimeRange:"2024-09-18/2024-10-10"}),E);const O=new d.QueryClient({defaultOptions:{queries:{staleTime:1/0,cacheTime:1/0}}}),N=l.a.createContext({data:y});function j({children:e,defaultValue:t,value:a}){const n=b.k.get(b.g.UserId),o=b.k.get(b.g.TenantId),i=b.k.get(b.g.RingId),r=b.k.get(b.g.ClientType),s=Object(c.o)(),m=function(e){if(e)return{agents:"MWTWorkReport",ClientEnvironment:b.e,TeamsRing:e.ringId||"",HostClientType:e.hostClientType||"",TenantID:e.tid||"",UserID:e.userObjectId||""}}(Object.assign({userObjectId:n,tid:o,ringId:i,hostClientType:r},s)),u=Object(d.useQuery)(["GetECSConfigs",m],(()=>function(e){const t={params:e,_startRequestTime:performance.now()};return f.a.get(g.c,t).then((e=>{const t=Object(h.b)(e);return localStorage.setItem(x,JSON.stringify(t.MWTWorkReport)),t})).catch((e=>{var t;return v.f.logTraceError(v.a.ECSRequest,`EcsCallError ${null===(t=null==e?void 0:e.config)||void 0===t?void 0:t.url} ${e.message}`),{MWTWorkReport:y,Headers:{}}}))}(m)),{select:e=>e.MWTWorkReport,placeholderData:{MWTWorkReport:t||y,Headers:{}},enabled:!a&&!!m});return l.a.createElement(N.Provider,{value:a?{data:a}:u},e)}function k({children:e,defaultValue:t,value:a}){return l.a.createElement(d.QueryClientProvider,{client:O},l.a.createElement(j,{defaultValue:t,value:a},e))}a("2spY");var w,C=a("fQLH");!function(e){e.OnboardingModal="OnboardingModal",e.WriteBubble="WriteBubble",e.RequestBubble="RequestBubble",e.SubmitBubble="SubmitBubble",e.ReviewBubble="ReviewBubble",e.SubmitGuidesBubble="SubmitGuidesBubble",e.ReviewGuidesBubble="ReviewGuidesBubble",e.TaskModuleHomeBubble="TaskModuleHomeBubble",e.TaskModuleHomeSimpleFRE="TaskModuleHomeSimpleFRE",e.TaskModuleHomeSimplePreviewBubble="TaskModuleHomeSimplePreviewBubble",e.TaskModuleHomeSimpleRuleSettingsBubble="TaskModuleHomeSimpleRuleSettingsBubble",e.MobileSubmitBubble="MobileSubmitBubble",e.MobileReviewBubble="MobileReviewBubble",e.FeedbackInAppBubble="FeedbackInAppBubble",e.FeedbackInTaskModuleBubble="FeedbackInTaskModuleBubble"}(w||(w={}));w.WriteBubble,w.OnboardingModal,w.RequestBubble,w.WriteBubble,w.OnboardingModal,w.SubmitBubble,w.RequestBubble,w.OnboardingModal,w.SubmitGuidesBubble,w.SubmitBubble,w.OnboardingModal,w.ReviewBubble,w.RequestBubble,w.OnboardingModal,w.ReviewGuidesBubble,w.ReviewBubble,w.OnboardingModal,w.FeedbackInAppBubble,w.SubmitGuidesBubble,w.OnboardingModal,w.TaskModuleHomeBubble,w.OnboardingModal,w.MobileSubmitBubble,w.OnboardingModal,w.MobileReviewBubble,w.MobileSubmitBubble;a("VTGp");new C.a;var S;!function(e){e.Loading="loading",e.Error="error",e.Empty="empty",e.NonEmpty="nonEmpty"}(S||(S={}));var R,T=a("9hZ6"),M=(a("TktC"),a("jFKp")),F=a("Favm"),D=a("xRnI"),I=a("+INc"),P=a("Tr4L"),L=a("/5rm"),B=a("PNiH"),A=a("58+7"),H=a("5HKM"),z=a("ErM2"),W=a("wnJg"),U=a("HVbO"),q=a("MpLv");!function(e){e.noReport="noReport",e.noPermission="noPermission",e.newChat="newChat",e.guestUser="guestUser",e.solutionNotUpgrade="SolutionNotUpgrade",e.ReportDefinitionDisabled="ReportDefinitionDisabled",e.NotDefinitionSubmitter="NotDefinitionSubmitter",e.DefinitionReviewer="DefinitionReviewer",e.DefinitionOwner="DefinitionOwner",e.FormsResponseNotFound="FormsResponseNotFound",e.FormsPrincipalDisabled="FormsPrincipalDisabled",e.UserNotEnabled="UserNotEnabled",e.NotProvisioned="NotProvisioned",e.ExecutedSimilarManualReminderRecently="ExecutedSimilarManualReminderRecently",e.Retry="retry",e.EnvironmentNotFound="EnvironmentNotFound",e.ItemNotFound="ItemNotFound",e.BAPBatchAddUserFail="BAPBatchAddUserFail",e.MultiUserOperationConflict="MultiUserOperationConflict"}(R||(R={}));const $={[R.noReport]:L.a,[R.noPermission]:H.a,[R.newChat]:A.a,[R.guestUser]:H.a,[R.solutionNotUpgrade]:A.a,[R.ReportDefinitionDisabled]:B.a,[R.NotDefinitionSubmitter]:H.a,[R.FormsResponseNotFound]:W.a,[R.FormsPrincipalDisabled]:W.a,[R.NotProvisioned]:H.a,[q.a.network]:z.a,[q.a.teamsSDK]:z.a,[R.DefinitionReviewer]:L.a,[R.DefinitionOwner]:L.a,[R.ItemNotFound]:B.a,[R.MultiUserOperationConflict]:A.a},G=({img:e,title:t,message:a,actionText:n,onAction:o,className:i,error:r,errorCode:c,hideImg:s,onReturnToHome:d,children:m})=>{var u;const p=Object(M.a)(),{t:b}=Object(P.a)(),f=c||(null==r?void 0:r.code),g=s?"":e||$[f],h=(null==r?void 0:r.requestId)||`{${v.f.sessionId}}`,x=null!=n?n:o&&b(U.a.errorAction,{context:f}),E=f===R.MultiUserOperationConflict;return l.a.useEffect((()=>{!r||r instanceof q.b||v.f.logTraceException(v.a.ErrorStatus,{error:r})}),[r,f]),r instanceof q.b&&!a&&(a=(null!==(u=r.detailedErrors)&&void 0!==u?u:[r]).map((e=>{var t,a,n;return b(U.a.errorDescription,Object.assign({context:e.code,correlationId:h,count:null!==(n=null===(a=null===(t=e.additionalErrorMessage)||void 0===t?void 0:t.userNames)||void 0===a?void 0:a.length)&&void 0!==n?n:0},e.additionalErrorMessage))})).join("\n")),l.a.createElement(I.c,{image:g,role:"alert",title:null!=t?t:b(U.a.errorTitle,{context:f}),message:a,actionText:x,height:"100%",background:"transparent",color:p.palette.black,className:`${i} empty-state`},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",gap:"20px"}},x&&l.a.createElement(F.a,{text:x,onClick:o}),E&&d&&l.a.createElement(D.a,{text:b(U.a.returnToHomePage),onClick:d})),m)};var K=a("n4Dn"),V=a("tPyQ"),Q=a("ZOo+"),Y=a("apXe"),J=a("NGG8"),X=a("uel9"),Z=a("DDLe"),_=a("v0/M"),ee=a("Mt8f"),te=a("YCKj");function ae(e){var t;return{id:e.id,key:e.id,mail:null!==(t=e.mail)&&void 0!==t?t:e.userPrincipalName,manager:void 0,name:e.displayName,officeLocation:e.officeLocation,phone:e.mobilePhone,role:e.jobTitle,departmentPaths:e.departmentPaths}}var ne=function(e,t,a,n){return new(a||(a=Promise))((function(o,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function r(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,r)}c((n=n.apply(e,t||[])).next())}))};Object(K.a)((e=>({root:{width:"320px",maxHeight:"400px",display:"flex",flexDirection:"column"},primary:{display:"flex",alignItems:"center",gap:"16px",padding:"24px"},secondary:{flex:1,padding:"24px",borderTop:`1px solid ${Object(V.f)(e.name)?e.palette.black:e.palette.neutralLight}`,overflowY:"auto"},overview:{display:"flex",flexDirection:"column",gap:"4px"},name:{fontSize:Q.a.size14,fontWeight:700,lineHeight:Q.a.size20},badge:{padding:"2px 6px",borderRadius:"4px",backgroundColor:e.palette.themeLighter,border:Object(V.f)(e.name)?`1px solid ${e.palette.themePrimary}`:"none",color:e.palette.themePrimary},description:{fontSize:Q.a.size12,fontWeight:400}})));var oe;function le(e,t){return ne(this,void 0,void 0,(function*(){return function(e,t){return ne(this,void 0,void 0,(function*(){const a=e.type===Y.b.User?te.d.users(e.id):e.type===Y.b.Group?te.d.groups(e.id):void 0;if(a)try{return yield a.photos(64).download(t)}catch(e){return}}))}(e,t)}))}!function(e){e.overWriters="overWriters",e.overUser="overUser",e.overGroup="overGroup",e.overReceivers="overReceivers",e.overComanagers="overComanagers"}(oe||(oe={}));new Map([["",void 0],["4f197574-c487-4ab8-ac2e-c3584026d646",J.a],["da3647a2-cdeb-4b72-a31d-f4a184d8e727",_.a],["8af34f36-a407-4b16-9b7e-14dcea93fb09",void 0],["1a9ecbd6-05c1-42f1-ac1e-1534500be7d1",X.a],["ea126a6e-8e86-4401-8d5a-c168a8ee1e36",Z.a],["da3c2255-d519-4ee2-a586-932f8b6d88af",ee.a]]);a("k2tF");var ie=a("Ge+E"),re=a("y5uQ");function ce(){const[e,t]=Object(u.b)();return Object(o.useMemo)((()=>({params:Object.fromEntries(e),setParams:t,reset:()=>t({},{replace:!0})})),[e,t])}function se(e,t,a){var n,o,l,i,r;const c=Object(d.useInfiniteQuery)(Object.assign({queryFn:({queryKey:t,signal:a,pageParam:n})=>{var o;const l=n?Object.assign(Object.assign({},t[1]),{skipToken:n}):null!==(o=t[1])&&void 0!==o?o:{};return e(l,a)},queryKey:[e.name,t],getNextPageParam:e=>{var a,n;return e.skipToken&&(null===(a=e.results)||void 0===a?void 0:a.length)>=(null!==(n=null==t?void 0:t.top)&&void 0!==n?n:10)?e.skipToken:void 0}},a));return Object.assign(c,{loadMore:()=>c.fetchNextPage(),canLoadMore:c.isFetched&&c.hasNextPage,totalCount:null===(l=null===(o=null===(n=c.data)||void 0===n?void 0:n.pages)||void 0===o?void 0:o[0])||void 0===l?void 0:l.totalRecordCount,data:null===(r=null===(i=c.data)||void 0===i?void 0:i.pages)||void 0===r?void 0:r.reduce(((e,t)=>e.concat(t.results)),[]).filter((e=>null!=e))})}function de(e,t,a){return Object(d.useQuery)(Object.assign({queryFn:({queryKey:t,signal:a})=>t[1]?e(t[1],a):e(a),queryKey:[e.name,t]},a))}var me=[0];function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ue.apply(this,arguments)}function pe(e){var t,a=function(e){var t,a,n=null!=(t=null==e?void 0:e.rootMargin)?t:"0px",l=null!=(a=null==e?void 0:e.threshold)?a:me,i=Object(o.useRef)(null),r=Object(o.useRef)(null),c=Object(o.useRef)(null),s=Object(o.useState)(),d=s[0],m=s[1],u=Object(o.useCallback)((function(){var e=c.current;null==e||e.disconnect(),c.current=null}),[]),p=Object(o.useCallback)((function(){var e=i.current;if(e){var t=r.current,a=new IntersectionObserver((function(e){var t=e[0];m(t)}),{root:t,rootMargin:n,threshold:l});a.observe(e),c.current=a}}),[n,l]),b=Object(o.useCallback)((function(){u(),p()}),[p,u]),f=Object(o.useCallback)((function(e){i.current=e,b()}),[b]),g=Object(o.useCallback)((function(e){r.current=e,b()}),[b]);return Object(o.useEffect)((function(){return b(),function(){u()}}),[b,u]),[f,{entry:d,rootRef:g}]}(e),n=a[0],l=a[1],i=Boolean(null==(t=l.entry)?void 0:t.isIntersecting),r=Object(o.useState)(i),c=r[0],s=r[1];return Object(o.useEffect)((function(){i&&s(i)}),[i]),[n,ue({},l,{isVisible:i,wasEverVisible:c})]}var be=function(e){var t=e.loading,a=e.hasNextPage,n=e.onLoadMore,l=e.rootMargin,i=e.disabled,r=e.delayInMs,c=void 0===r?100:r,s=pe({rootMargin:l}),d=s[0],m=s[1],u=m.rootRef,p=m.isVisible,b=!i&&!t&&p&&a;return Object(o.useEffect)((function(){if(b){var e=setTimeout((function(){n()}),c);return function(){clearTimeout(e)}}}),[n,b,c]),[d,{rootRef:u}]};var fe=a("eZeq"),ge=a("ogYq"),ve=a("Pn0s"),he=a("fh99"),xe=a("KEG9"),Ee=a("Imro"),ye=a("hGA5");const Oe=({items:e,columns:t,className:a,rowClass:n,queryStatus:o,ariaLabel:i,onItemClick:r,shimmerLines:c,onRenderRow:s,isHeaderVisible:d=!0,groupProps:m,groups:u,announcedMessage:p})=>{var b;const[f]=be({loading:!!(null==o?void 0:o.isLoading),hasNextPage:!!(null==o?void 0:o.canLoadMore),onLoadMore:null!==(b=null==o?void 0:o.loadMore)&&void 0!==b?b:()=>{},disabled:!o}),g=l.a.useCallback((e=>e?l.a.createElement(fe.a,Object.assign({},e,{className:Object(ge.F)(n&&n(e)),"data-selection-invoke":!0,role:"row","data-testid":"DetailsRow","aria-rowindex":e.itemIndex})):l.a.createElement(l.a.Fragment,null)),[n]),v=l.a.useCallback((e=>e?l.a.createElement(l.a.Fragment,null,l.a.createElement(ve.a,Object.assign({},e)),p&&l.a.createElement(he.a,{message:p})):null),[p]);return l.a.createElement(xe.a,{selectionMode:Ee.c.none,constrainMode:ye.d.unconstrained,layoutMode:ye.e.justified,enableShimmer:!e,columns:t,items:((null==o?void 0:o.isLoading)||(null==o?void 0:o.canLoadMore))&&e?[...e,null]:e||[],isHeaderVisible:d,onRenderRow:null!=s?s:g,onItemInvoked:r&&(e=>r(e)),onRenderDetailsFooter:()=>l.a.createElement("div",{ref:f}),className:a,ariaLabelForGrid:i,shimmerLines:c,role:"table",groups:u,groupProps:m,onRenderDetailsHeader:v})};var Ne=a("HKfi");const je=({isMobile:e})=>{const t=Object(d.useIsFetching)()>0,a=!e&&window.location.pathname.indexOf(T.a.HomePage)>0;return l.a.createElement(l.a.Fragment,null,!a&&l.a.createElement(Ne.a,{isFetching:t}))};var ke=a("Qy9N"),we=a("FGVm"),Ce=a("RKR/"),Se=a("q7qM");const Re=Object(K.a)((()=>({root:{img:{width:"200px",height:"200px",objectFit:"contain"},"&.is-small":{gap:"0 !important",img:{width:"100px",height:"100px"}},"> button":{flexShrink:0}}}))),Te=({img:e,title:t,message:a,actionText:n,onAction:i,className:r,isSmall:c,children:s,role:d})=>{const m=Object(M.a)(),u=Re(),p=Object(o.useMemo)((()=>"FileEmpty"===e?L.a:"Optimizing"===e?Ce.a:"Submitted"===e?Se.a:"NoUnsubmitted"===e?we.a:"NoMessage"===e?ke.a:""),[e]);return l.a.createElement(I.c,{role:d,className:Object(ge.F)(u.root,c&&"is-small",r),image:p,title:null!=t?t:"",message:a,height:"100%",background:"transparent",color:m.palette.black},n&&l.a.createElement(D.a,{text:n,onClick:i}),s)};var Me=a("tZX7"),Fe=a("l3kg"),De=a("EO0U");const Ie=Object(K.a)((e=>({root:{height:"100%",padding:"0 2em"},message:{fontSize:"1.2em",fontWeight:ge.e.bold,color:e.palette.black,whiteSpace:"pre-line",textAlign:"center"}}))),Pe=({message:e,className:t})=>{const{t:a,ready:n}=Object(P.a)("strings",{useSuspense:!1}),o=Ie(),i=Object(De.a)("LoadingLabel");return l.a.useEffect((()=>{const e=setTimeout((()=>{v.f.logTraceError(v.a.LoadingTimeout,`${g.h} seconds loading timeout happens in page: ${window.location.href}`)}),1e3*g.h);return()=>clearTimeout(e)}),[]),l.a.createElement(Me.a,{verticalFill:!0,verticalAlign:"center",horizontalAlign:"center",className:`${Object(ge.F)(o.root,t)} loading-page`,role:"alert","aria-atomic":!0},l.a.createElement(I.d,{"aria-label":n?a(U.a.loadingAriaLabel):"Loading","aria-describedby":e&&i}),e&&l.a.createElement(Fe.a,{id:i,className:o.message},e))};var Le=a("dXTB"),Be=a("KIfy"),Ae=a("BFcr"),He=a("dERd");function ze(e){Object(c.f)(`https://teams.microsoft.com/l/chat/0/0?users=8:orgid:${e}`)}function We(e){Object(c.f)(`https://teams.microsoft.com/l/call/0/0?users=8:orgid:${e}`)}const Ue=Object(K.a)((e=>({root:{fontSize:e.fonts.small.fontSize,display:"flex",gap:"12px",flexDirection:"column"},header:{display:"flex",flexDirection:"column",gap:"4px"},main:{display:"flex",flexDirection:"column",gap:"12px",overflowY:"auto"},subHeaderText:{fontSize:e.fonts.medium.fontSize,fontWeight:"bold",color:e.palette.black},subHeader:{display:"flex",flexDirection:"row",gap:"2px",alignItems:"center"},presence:{display:"flex",flexDirection:"row",gap:"16px",alignItems:"center",padding:"12px 16px 12px 16px",border:Object(V.g)(e.name)?"1px solid #3D3D3D":"1px solid #F0F0F0"},ContractInfo:{display:"flex",flexDirection:"row",gap:"8px",alignItems:"center"},icon:{width:"20px",height:"20px",color:e.palette.black,position:"relative"},ManagerInfo:{},boldText:{fontSize:e.fonts.mediumPlus.fontSize,fontWeight:"bold",color:e.palette.black},peopleWithIcon:{display:"flex",flexDirection:"row",gap:"16px"},peopleWithPresenceInfo:{position:"relative",width:"64px",height:"64px"},presenceInfo:{position:"absolute",bottom:0,borderRadius:"100%",border:`2px solid ${e.palette.white}`,backgroundColor:e.palette.white,right:0,width:"20px",height:"20px"},info:{display:"flex",flexDirection:"column",gap:"4px"},quickHeader:{display:"flex",flexDirection:"row",gap:"20px"},callout:{width:320,padding:"20px 24px"},divider:{border:Object(V.g)(e.name)?"1px solid #3D3D3D":"1px solid #F0F0F0"}})));var qe=function(e,t,a,n){return new(a||(a=Promise))((function(o,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function r(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,r)}c((n=n.apply(e,t||[])).next())}))};const $e=({people:e,onDismiss:t,target:a})=>{const n=Ue(),[o,i]=l.a.useState(void 0),[r,s]=l.a.useState(void 0);return l.a.useEffect((()=>{qe(void 0,void 0,void 0,(function*(){const t=yield function(e){return ne(this,void 0,void 0,(function*(){return yield te.d.users(e).getPresence()}))}(e.id);i(t)}))}),[e.id]),l.a.useEffect((()=>{qe(void 0,void 0,void 0,(function*(){const t=yield function(e){return ne(this,void 0,void 0,(function*(){return t=yield te.d.users(e).getManager(),{id:null!==(a=t.id)&&void 0!==a?a:"",key:null!==(n=t.id)&&void 0!==n?n:"",mail:null!==(l=null!==(o=t.mail)&&void 0!==o?o:t.userPrincipalName)&&void 0!==l?l:"",manager:void 0,name:null!==(i=t.displayName)&&void 0!==i?i:"",officeLocation:null!==(r=t.officeLocation)&&void 0!==r?r:"",phone:null!==(c=t.mobilePhone)&&void 0!==c?c:"",role:null!==(s=t.jobTitle)&&void 0!==s?s:"",departmentPaths:{}};var t,a,n,o,l,i,r,c,s}))}(e.id);s(t)}))}),[e.id]),l.a.createElement(Le.a,{role:"dialog",className:n.callout,gapSpace:20,target:a,isBeakVisible:!1,onDismiss:t,setInitialFocus:!0},l.a.createElement("div",{className:n.root},l.a.createElement("div",{className:n.info},l.a.createElement("div",{className:n.peopleWithIcon},l.a.createElement("div",{className:n.peopleWithPresenceInfo},l.a.createElement(Y.a,{selection:{id:e.id,name:e.name,type:0},onRetrieveIcon:le,coinSize:64}),o&&l.a.createElement("div",{className:n.presenceInfo},l.a.createElement(Be.a,{"aria-label":"Mail",iconName:He.a[o].name,className:Object(ge.F)(n.icon,{color:He.a[o].color})}))),l.a.createElement("div",{className:n.info},l.a.createElement("span",{className:n.boldText},e.name),l.a.createElement("span",null,e.role),l.a.createElement("span",null,Object.entries(e.departmentPaths).map((([e,t])=>t)).join("; ")))),l.a.createElement("div",{className:n.quickHeader},l.a.createElement(Ae.a,{iconProps:{iconName:"Chat",styles:{root:{fontSize:"20px"}}},title:"Chat",ariaLabel:"Chat",onClick:()=>ze(e.id)}),l.a.createElement(Ae.a,{iconProps:{iconName:"Organization",styles:{root:{fontSize:"20px"}}},title:"OpenOrgExplorerApp",ariaLabel:"OpenOrgExplorerApp",onClick:()=>{Object(c.f)("https://teams.microsoft.com/l/app/1f8c20f5-d70f-4f8e-93e1-31d8fce0c8c9")}}),l.a.createElement(Ae.a,{iconProps:{iconName:"Call",styles:{root:{fontSize:"20px",padding:0}}},title:"OpenCall",ariaLabel:"OpenCall",onClick:()=>We(e.id)}),l.a.createElement(Ae.a,{iconProps:{iconName:"Video",styles:{root:{fontSize:"20px"}}},title:"OpenVideoCall",ariaLabel:"OpenVideoCall",onClick:()=>{return t=e.id,void Object(c.f)(`https://teams.microsoft.com/l/call/0/0?users=8:orgid:${t}`);var t}})),l.a.createElement("div",{className:n.divider})),l.a.createElement("div",{className:n.main},o&&l.a.createElement("div",{className:n.presence},l.a.createElement(Be.a,{"aria-label":"Mail",iconName:He.a[o].name,className:Object(ge.F)(n.icon,{color:He.a[o].color})}),l.a.createElement("span",{className:n.subHeaderText},o)),l.a.createElement("div",{className:n.subHeader},l.a.createElement("span",{className:n.subHeaderText},"联系人"),l.a.createElement(Be.a,{"aria-label":"ChevronRight",iconName:"ChevronRight",className:n.icon})),e.mail&&l.a.createElement("div",{className:n.ContractInfo},l.a.createElement(Be.a,{"aria-label":"Mail",iconName:"Mail",className:n.icon}),l.a.createElement("span",null,e.mail)),e.phone&&l.a.createElement("div",{className:n.ContractInfo},l.a.createElement(Be.a,{"aria-label":"Call",iconName:"Call",className:n.icon}),l.a.createElement("span",null,e.phone)),e.officeLocation&&l.a.createElement("div",{className:n.ContractInfo},l.a.createElement(Be.a,{"aria-label":"Location",iconName:"Location",className:n.icon}),l.a.createElement("span",null,e.officeLocation)),r&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:n.subHeader},l.a.createElement("span",{className:n.subHeaderText},"直属领导"),l.a.createElement(Be.a,{"aria-label":"ChevronRight",iconName:"ChevronRight",className:n.icon})),l.a.createElement("div",{className:n.peopleWithIcon},l.a.createElement("div",{className:n.info},l.a.createElement(Y.a,{selection:{id:r.id,name:r.name,type:0},onRetrieveIcon:le,coinSize:32})),l.a.createElement("div",null,l.a.createElement("span",null,r.name),l.a.createElement("br",null),l.a.createElement("span",null,r.role)))))))};var Ge=a("TzxL"),Ke=a("2Ah+"),Ve=a("AH+P");const Qe=()=>{const[e,t]=Object(o.useState)(!1);de(te.b.clearCache,{},{enabled:e});return l.a.createElement(l.a.Fragment,null,l.a.createElement(Ae.a,{iconProps:{iconName:"Refresh"},onClick:()=>{t(!0),te.e.clear(),Object(te.c)(),setTimeout((()=>{window.location.reload()}),30)}}))};var Ye=a("XgkO");const Je=Object(K.a)((e=>({inputField:{flex:1,".ms-Label":{padding:"0 0 4px",whiteSpace:"nowrap"},".ms-TextField-field":{paddingLeft:"36px",backgroundColor:e.palette.neutralLight,paddingRight:"36px"}},textFieldIcon1:{position:"absolute",left:"6px",top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}}))),Xe=({searchText:e})=>{const{t:t}=Object(P.a)(),[a,n]=Object(o.useState)(null!=e?e:""),i=Object(o.useCallback)(((e,t)=>{n(t||"")}),[]),r=Je(),c=Object(p.i)(),s={iconName:"Search",className:r.textFieldIcon1,styles:{root:{fontSize:"20px"}}};return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{noValidate:!0,autoComplete:"off"},l.a.createElement(Ye.a,{className:r.inputField,placeholder:t(U.a.searchPlaceholder),iconProps:s,value:a,onChange:i,onKeyDown:e=>{"Enter"===e.key&&""!==a&&c(Object(T.b)(T.a.SearchResults,void 0,{searchText:a}))}})))},Ze=Object(K.a)((()=>({navContainer:{display:"flex",flexDirection:"row",gap:"4px",alignItems:"center"}}))),_e=({items:e,farItems:t,title:a,moduleName:n,searchText:l})=>{const{t:i}=Object(P.a)(),r=Ze(),c=o.useMemo((()=>t||o.createElement("div",{className:r.navContainer},o.createElement(Xe,{searchText:l}),o.createElement(Qe,null))),[t,l,r.navContainer]);return o.createElement(I.a,{title:void 0===a?i(U.a.appName,{context:b.e}):a,items:e,farItems:c,moduleName:n})};var et=a("lm3o"),tt=a("rtnm"),at=a("kvDL"),nt=a("v4N6");const ot=Object(K.a)((e=>({iconCell:{padding:0,fontSize:"16px",marginRight:"4px",height:"20px",width:"20px"},cellTitle:{display:"flex",alignItems:"center",gap:"4px",flexDirection:"row"},nameShow:{display:"flex",flexDirection:"row",gap:"4px",alignItems:"center",cursor:"pointer"},nameField:{display:"flex",alignItems:"center",gap:"4px",flexDirection:"row"},hoverShowButton:{height:"100%",width:"100%",padding:"0",":hover,:focus-within":{color:e.palette.themePrimary}},hoverShowButtonContainer:{display:"none","*:hover > &, *:focus-within > &":{display:"flex",position:"relative",alignSelf:"flex-end",left:"20px"}},nameSpan:[Object(I.e)(1),{maxWidth:"160px"}],span:Object(I.e)(1),list:{"ms-DetailsRow":{cursor:"default"},".ms-Nav":{transition:"none !important"},"ms-DetailsHeader-cellTitle":{display:"flex",alignItems:"center",gap:"4px",flexDirection:"row"}}}))),lt=({items:e,queryStatus:t})=>{const a=ot(),[n,i]=Object(o.useState)(void 0),[r,c]=Object(o.useState)(void 0),[s,d]=Object(o.useState)(""),m=Object(p.i)(),{t:u}=Object(P.a)(),b=[{key:"name",name:u(U.a.peopleListColumnForName),fieldName:"name",minWidth:264,maxWidth:264,isResizable:!1,iconName:"ContactCard",iconClassName:a.iconCell,className:a.cellTitle,onRender:e=>l.a.createElement("div",{className:a.nameField,key:e.id},l.a.createElement("div",{className:a.nameShow,onClick:t=>{d(e.id);const a=t.target;c(e),i(a),v.f.logUserBiAction(v.c.PeopleCard,v.d.OpenPeopleCard,"moduleName",{})}},l.a.createElement(Y.a,{selection:{id:e.id,name:e.name,type:0},onRetrieveIcon:le,coinSize:24}),l.a.createElement("div",{className:a.nameSpan,title:e.name},e.name)),l.a.createElement("div",{className:a.hoverShowButtonContainer},l.a.createElement(Ae.a,{iconProps:{iconName:"Chat",styles:{root:{fontSize:"20px"}}},title:"Chat",ariaLabel:"Chat",className:a.hoverShowButton,onClick:()=>ze(e.id)}),l.a.createElement(Ae.a,{iconProps:{iconName:"Call",styles:{root:{fontSize:"20px",padding:0}}},title:"Emoji",ariaLabel:"Emoji",className:a.hoverShowButton,onClick:()=>We(e.id)})))},{key:"mail",name:u(U.a.peopleListColumnForEmail),fieldName:"mail",minWidth:200,maxWidth:300,isResizable:!1,iconName:"Mail",iconClassName:a.iconCell,onRender:e=>l.a.createElement("div",{title:e.mail,className:a.span,key:e.id},e.mail)},{key:"phone",name:u(U.a.peopleListColumnForPhone),fieldName:"phone",minWidth:100,width:120,maxWidth:150,isResizable:!1,iconName:"Call",iconClassName:a.iconCell,onRender:e=>l.a.createElement("div",{title:e.phone,className:a.span,key:e.id},e.phone)},{key:"depart",name:u(U.a.peopleListColumnForDepart),fieldName:"depart",minWidth:200,maxWidth:300,isResizable:!1,iconName:"Location",iconClassName:a.iconCell,onRender:e=>{const t={onRenderContent:()=>l.a.createElement("ol",{style:{margin:"0 5px 0 0",padding:"0 0 0 20px"}},Object.entries(e.departmentPaths).map((([e,t])=>l.a.createElement("li",{key:e},t))))};return l.a.createElement("div",{key:e.id},l.a.createElement(et.a,{tooltipProps:t,delay:tt.a.zero,directionalHint:at.a.leftCenter},l.a.createElement("div",{key:"tooltipId"+e.id},Object.entries(e.departmentPaths).map((([t,a],n)=>{return l.a.createElement(l.a.Fragment,null,l.a.createElement(nt.a,{key:t,onClick:()=>m(Object(T.b)(T.a.DepartmentTeam,void 0,{departmentFullName:a,departmentFullId:t}))},null!==(i=null==(o=a)?void 0:o.split("/").pop())&&void 0!==i?i:""),n<Object.entries(e.departmentPaths).length-1&&l.a.createElement("span",null,"; "));var o,i})))))}},{key:"role",name:u(U.a.peopleListColumnForJob),fieldName:"role",minWidth:100,width:120,maxWidth:150,isResizable:!0,iconName:"Desk",iconClassName:a.iconCell,onRender:e=>l.a.createElement("div",{title:e.role,className:a.span,key:e.id},e.role)}];return l.a.createElement(l.a.Fragment,null,l.a.createElement(Oe,{className:a.list,columns:b,items:e,queryStatus:t,shimmerLines:10}),void 0!==r&&r.id===s&&l.a.createElement($e,{key:r.id,people:r,onDismiss:()=>d(""),target:n}))},it=Object(K.a)((e=>({root:{height:"100%",overflowY:"hidden",display:"flex",flexDirection:"column",backgroundColor:e.palette.neutralLighterAlt},topSearchSection:{display:"flex",justifyContent:"flex-end",padding:"5px 30px 5px 0"},peopleSection:Object.assign({display:"flex",alignItems:"stretch",backgroundColor:e.palette.white,height:"100%"},Object(V.f)(e.name)&&{borderTop:`1px solid ${e.palette.black}`,borderBottom:`1px solid ${e.palette.black}`}),peopleList:{height:"80%",overflowY:"auto",overflowX:"hidden"},left:{flex:1,width:0,backgroundColor:e.palette.neutralLighterAlt,borderRight:`1px solid ${Object(V.f)(e.name)?e.palette.black:e.palette.neutralTertiaryAlt}`},main:{backgroundColor:e.palette.white,flex:4,width:0,padding:"20px",columnGap:"20px"},dropdown:{width:"400px",marginBottom:"20px",".ms-Dropdown-caretDown":{fontSize:"16px",color:e.palette.neutralPrimary}}}))),rt=e=>({chevronIcon:[{fontSize:20,left:"4px",top:"10px"},e.isExpanded&&{transform:""},!e.isExpanded&&{transform:"rotate(-90deg)"}]});function ct(e,t,a,n){const o=""===t?e.id:`${t}/${e.id}`,l=""===a?e.name:`${a}/${e.name}`;return{name:e.name,url:Object(T.b)(T.a.DepartmentTeam,void 0,{departmentFullName:l,departmentFullId:o}),key:o,expandAriaLabel:e.name,isExpanded:null==n?void 0:n.includes(e.name),links:e.subDepartments.length?e.subDepartments.map((e=>ct(e,o,l,n))):void 0}}var st;!function(e){e.AllMember="AllMember",e.DirectMember="DirectMember"}(st||(st={}));var dt=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a};const mt=()=>{const e=it(),{t:t}=Object(P.a)(),{params:a}=ce(),{departmentFullName:n,departmentFullId:i}=a,r=Object(p.i)(),c=[{key:st.AllMember,text:t(U.a.dropDownForDepartDefault)},{key:st.DirectMember,text:t(U.a.dropDownForDepartOption1)}],[s,d]=l.a.useState(st.AllMember),{data:m,isLoading:u,error:b}=de(te.b.fetchDepartmentNav,{},{staleTime:18e5,cacheTime:18e5}),f=i?function(e){var t;return null!==(t=null==e?void 0:e.split("/").pop())&&void 0!==t?t:""}(i):null==m?void 0:m.id,g=(O=s,N=f===(null==m?void 0:m.id),j=f,k=20,se("AllMember"===O?te.b.fetchGetAllUserMembersByDepartment:te.b.fetchGetDirectUserMembersByDepartment,{departmentId:j,isRootDepartment:N,top:k,skipToken:w},{enabled:!!j})),{data:h,error:x,isLoading:E}=g,y=dt(g,["data","error","isLoading"]);var O,N,j,k,w;const C=l.a.useMemo((()=>m?[{links:[ct(m,"","",n)]}]:[]),[m,n]);return Object(o.useEffect)((()=>{i&&""!==i||!(null==m?void 0:m.id)||!(null==m?void 0:m.name)||r(Object(T.b)(T.a.DepartmentTeam,void 0,{departmentFullName:m.name,departmentFullId:m.id}))}),[i,h,null==m?void 0:m.id,null==m?void 0:m.name,r]),l.a.createElement("div",{className:e.root},l.a.createElement(_e,{moduleName:v.b.HomePage}),l.a.createElement("div",{className:e.peopleSection},l.a.createElement("div",{className:e.left},u&&l.a.createElement(Pe,null),m&&l.a.createElement(Ke.a,{ariaLabel:"",styles:rt,groups:C,selectedKey:i,onLinkClick:(e,t)=>{null==e||e.preventDefault(),(null==t?void 0:t.url)&&r(t.url)}}),b&&l.a.createElement("div",null," ",null==b?void 0:b.message," ")),l.a.createElement("div",{className:e.main},l.a.createElement("h2",null,null!=n?n:null==m?void 0:m.name),l.a.createElement("div",null,l.a.createElement(Ve.a,{className:e.dropdown,placeholder:"Select an option",options:c,selectedKey:s,onChange:(e,t)=>{void 0!==t&&d(t.key)}})),l.a.createElement("div",{className:e.peopleList},h&&h.length>0&&l.a.createElement(lt,{items:h.map((e=>ae(e))),queryStatus:y,moduleName:v.b.HomePage}),0===(null==h?void 0:h.length)&&l.a.createElement(Te,{title:t(U.a.errorTitleForNotContract),message:t(U.a.errorMessageForNotContract),img:"NoMessage"}),E&&l.a.createElement(Pe,null),x&&l.a.createElement(G,{error:x})))))},ut=Object(K.a)((e=>({root:{height:"100%",display:"flex",flexDirection:"column"},topSearchSection:{display:"flex",justifyContent:"flex-end",padding:"30px"},field:{flex:1,".ms-Label":{padding:"0 0 4px",whiteSpace:"nowrap"}},peopleSection:Object.assign({display:"flex",alignItems:"stretch",height:"100%"},Object(V.f)(e.name)&&{borderTop:`1px solid ${e.palette.black}`,borderBottom:`1px solid ${e.palette.black}`}),textFieldIcon1:{position:"absolute",left:"6px",top:"50%",transform:"translateY(-50%)",pointerEvents:"none"},inputField:{flex:1,".ms-Label":{padding:"0 0 4px",whiteSpace:"nowrap"},".ms-TextField-field":{paddingLeft:"36px",backgroundColor:e.palette.white,paddingRight:"36px"}},left:{flex:1,width:0,backgroundColor:e.palette.neutralLighterAlt,borderRight:`1px solid ${Object(V.f)(e.name)?e.palette.black:e.palette.neutralTertiaryAlt}`},main:{padding:"24px 80px 24px 80px",backgroundColor:e.palette.white,height:"100%",overflowY:"auto"},topText:{color:e.palette.black},top:{display:"flex",justifyContent:"space-between",alignItems:"center"},dropdown:{width:"200px",marginBottom:"20px"},iconCell:{padding:0,fontSize:"16px",marginRight:"4px",height:"16px",width:"16px"}})));var pt=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a};const bt=[l.a.createElement(p.b,{key:T.a.HomePage,path:T.a.HomePage,element:l.a.createElement(mt,null)}),l.a.createElement(p.b,{key:T.a.SearchResults,path:T.a.SearchResults,element:l.a.createElement((()=>{const e=ut(),{t:t}=(e.textFieldIcon1,Object(P.a)()),{params:a}=ce(),{searchText:n}=a,[i,r]=Object(o.useState)(n),c=(l.a.useCallback(((e,t)=>{r(t||"")}),[]),Object(p.i)()),s=se(te.b.fetchSearchUser,{top:10,userDisplayName:n},{enabled:""!==n}),{data:d,error:m,isLoading:u}=s,b=pt(s,["data","error","isLoading"]);return l.a.createElement("div",{className:e.root},l.a.createElement(_e,{moduleName:v.b.SearchResult,searchText:n}),l.a.createElement("div",{className:e.main},l.a.createElement("div",{className:e.top},l.a.createElement("h2",{className:e.topText},t(U.a.searchResultLabel,{searchResult:n})),l.a.createElement(F.a,{onClick:()=>c(T.a.DepartmentTeam),text:t(U.a.exitSearchLabel)})),d&&d.length>0&&l.a.createElement(lt,{items:d.map((e=>ae(e))),queryStatus:b,moduleName:v.b.SearchResult}),0===(null==d?void 0:d.length)&&l.a.createElement(Te,{title:t(U.a.errorTitleForNotContract),message:t(U.a.errorMessageForNotContract),img:"NoMessage"}),u&&l.a.createElement(Pe,null),m&&l.a.createElement(G,{error:m})))}),null)}),l.a.createElement(p.b,{key:T.a.DepartmentTeam,path:T.a.DepartmentTeam,element:l.a.createElement(mt,null)}),l.a.createElement(p.b,{key:"*",path:"*",element:l.a.createElement((()=>{const e=window.location.href;return Object(o.useEffect)((()=>{v.f.logTraceWarning(v.a.Navigate,`Redirect to desktop default page. original url:${e}`)}),[e]),l.a.createElement(p.a,{to:T.a.DepartmentTeam,replace:!0})}),null)})];var ft=a("TJux");const gt=Object(ge.F)({width:"100%",height:"100%"});var vt=a("4YvN");Object(vt.a)(!1),r.a.render(l.a.createElement(Ge.a,null,l.a.createElement(c.c,null,l.a.createElement((()=>{const e=function(e){var t;const a=Object(c.p)()||b.k.get(b.g.Theme),{i18n:n}=Object(P.a)(void 0,{useSuspense:!1}),l=n.resolvedLanguage||(null===(t=n.languages)||void 0===t?void 0:t[0]);return Object(o.useEffect)((()=>{if(b.m?document.body.style.backgroundColor="#F5F5F5":document.body.style.backgroundColor="transparent",a){v.f.logTraceInfo(v.a.AppBoot,`Rendered app host with theme: ${a}.`);const e=`is-${a}Theme`;return document.body.classList.add(e),()=>document.body.classList.remove(e)}}),[a]),Object(o.useMemo)((()=>{const t=Object(re.a)(Object(c.e)(null!=a?a:""),e);if(l){const e="rtl"===U.b.dir();return Object(ie.c)(e),Object.assign(Object.assign({},t),{rtl:e})}return t}),[a,l,e])}();return l.a.useEffect((()=>(v.f.logTraceInfo(v.a.AppBoot,"Rendered app host"),()=>{v.f.logTraceInfo(v.a.AppBoot,"Closing the app host")})),[]),l.a.createElement(s.a,{theme:e,applyTo:"body",className:gt},l.a.createElement(l.a.Suspense,{fallback:l.a.createElement(Pe,null)},l.a.createElement(k,null,l.a.createElement(d.QueryClientProvider,{client:te.e},l.a.createElement(je,null),l.a.createElement(u.a,{history:ft.a},l.a.createElement(p.d,null,bt)),l.a.createElement(m.ReactQueryDevtools,{position:"bottom-right",styleNonce:b.f})))))}),null))),document.getElementById("root"),(()=>{v.f.markScenario(v.c.AppBoot,v.e.AppBootReactRendered),v.f.logTraceInfo(v.a.AppBoot,"React rendered desktop APP")}))},Udmz:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i}));var n=a("ERkP"),o=(a("SGJe"),a("H8PI"));function l(e){let{basename:t,children:a,history:l}=e;const[i,r]=Object(n.useState)({action:l.action,location:l.location});return Object(n.useLayoutEffect)((()=>l.listen(r)),[l]),Object(n.createElement)(o.c,{basename:t,children:a,location:i.location,navigationType:i.action,navigator:l})}function i(e){let t=Object(n.useRef)(r(e)),a=Object(o.h)(),l=Object(n.useMemo)((()=>{let e=r(a.search);for(let a of t.current.keys())e.has(a)||t.current.getAll(a).forEach((t=>{e.append(a,t)}));return e}),[a.search]),i=Object(o.i)();return[l,Object(n.useCallback)(((e,t)=>{i("?"+r(e),t)}),[i])]}function r(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,a)=>{let n=e[a];return t.concat(Array.isArray(n)?n.map((e=>[a,e])):[[a,n]])}),[]))}}},[["JwtI","runtime~main","main~mobile.microsoft","main~mobile.fui","main.fui","assets~main","package~main~mobile","package~main","npm._fluentui~react-icons","npm.framer-motion","npm._fluentui~utilities","npm.react-dom","npm.lodash-es","npm.react-query","npm._internationalized~date","npm.axios","npm.i18next","featureRelatedFiles~main~mobile","vendors~main~mobile","main~mobile"]]]);