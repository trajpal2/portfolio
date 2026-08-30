(()=>{var a={};a.id=772,a.ids=[772],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14985:a=>{"use strict";a.exports=require("dns")},21820:a=>{"use strict";a.exports=require("os")},25737:(a,b,c)=>{"use strict";c.r(b),c.d(b,{handler:()=>B,patchFetch:()=>A,routeModule:()=>w,serverHooks:()=>z,workAsyncStorage:()=>x,workUnitAsyncStorage:()=>y});var d={};c.r(d),c.d(d,{GET:()=>v});var e=c(95736),f=c(9117),g=c(4044),h=c(39326),i=c(32324),j=c(261),k=c(54290),l=c(85328),m=c(38928),n=c(46595),o=c(3421),p=c(17679),q=c(41681),r=c(63446),s=c(86439),t=c(51356),u=c(80776);async function v(){return Response.json({ok:!0,service:"portfolio-api",emailConfigured:(0,u.bw)()})}let w=new e.AppRouteRouteModule({definition:{kind:f.RouteKind.APP_ROUTE,page:"/api/health/route",pathname:"/api/health",filename:"route",bundlePath:"app/api/health/route"},distDir:".next",relativeProjectDir:"",resolvedPagePath:"/Users/tushant-rajpal/Desktop/tushant/github_portfolio_projects/portfolio_project/app/api/health/route.js",nextConfigOutput:"standalone",userland:d}),{workAsyncStorage:x,workUnitAsyncStorage:y,serverHooks:z}=w;function A(){return(0,g.patchFetch)({workAsyncStorage:x,workUnitAsyncStorage:y})}async function B(a,b,c){var d;let e="/api/health/route";"/index"===e&&(e="/");let g=await w.prepare(a,b,{srcPage:e,multiZoneDraftMode:!1});if(!g)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:u,params:v,nextConfig:x,isDraftMode:y,prerenderManifest:z,routerServerContext:A,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,resolvedPathname:D}=g,E=(0,j.normalizeAppPath)(e),F=!!(z.dynamicRoutes[E]||z.routes[D]);if(F&&!y){let a=!!z.routes[D],b=z.dynamicRoutes[E];if(b&&!1===b.fallback&&!a)throw new s.NoFallbackError}let G=null;!F||w.isDev||y||(G="/index"===(G=D)?"/":G);let H=!0===w.isDev||!F,I=F&&!H,J=a.method||"GET",K=(0,i.getTracer)(),L=K.getActiveScopeSpan(),M={params:v,prerenderManifest:z,renderOpts:{experimental:{cacheComponents:!!x.experimental.cacheComponents,authInterrupts:!!x.experimental.authInterrupts},supportsDynamicResponse:H,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:null==(d=x.experimental)?void 0:d.cacheLife,isRevalidate:I,waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:void 0,onInstrumentationRequestError:(b,c,d)=>w.onRequestError(a,b,d,A)},sharedContext:{buildId:u}},N=new k.NodeNextRequest(a),O=new k.NodeNextResponse(b),P=l.NextRequestAdapter.fromNodeNextRequest(N,(0,l.signalFromNodeResponse)(b));try{let d=async c=>w.handle(P,M).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=K.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==m.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${J} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${J} ${a.url}`)}),g=async g=>{var i,j;let k=async({previousCacheEntry:f})=>{try{if(!(0,h.getRequestMeta)(a,"minimalMode")&&B&&C&&!f)return b.statusCode=404,b.setHeader("x-nextjs-cache","REVALIDATED"),b.end("This page could not be found"),null;let e=await d(g);a.fetchMetrics=M.renderOpts.fetchMetrics;let i=M.renderOpts.pendingWaitUntil;i&&c.waitUntil&&(c.waitUntil(i),i=void 0);let j=M.renderOpts.collectedTags;if(!F)return await (0,o.I)(N,O,e,M.renderOpts.pendingWaitUntil),null;{let a=await e.blob(),b=(0,p.toNodeOutgoingHttpHeaders)(e.headers);j&&(b[r.NEXT_CACHE_TAGS_HEADER]=j),!b["content-type"]&&a.type&&(b["content-type"]=a.type);let c=void 0!==M.renderOpts.collectedRevalidate&&!(M.renderOpts.collectedRevalidate>=r.INFINITE_CACHE)&&M.renderOpts.collectedRevalidate,d=void 0===M.renderOpts.collectedExpire||M.renderOpts.collectedExpire>=r.INFINITE_CACHE?void 0:M.renderOpts.collectedExpire;return{value:{kind:t.CachedRouteKind.APP_ROUTE,status:e.status,body:Buffer.from(await a.arrayBuffer()),headers:b},cacheControl:{revalidate:c,expire:d}}}}catch(b){throw(null==f?void 0:f.isStale)&&await w.onRequestError(a,b,{routerKind:"App Router",routePath:e,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})},A),b}},l=await w.handleResponse({req:a,nextConfig:x,cacheKey:G,routeKind:f.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:z,isRoutePPREnabled:!1,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,responseGenerator:k,waitUntil:c.waitUntil});if(!F)return null;if((null==l||null==(i=l.value)?void 0:i.kind)!==t.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==l||null==(j=l.value)?void 0:j.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});(0,h.getRequestMeta)(a,"minimalMode")||b.setHeader("x-nextjs-cache",B?"REVALIDATED":l.isMiss?"MISS":l.isStale?"STALE":"HIT"),y&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,p.fromNodeOutgoingHttpHeaders)(l.value.headers);return(0,h.getRequestMeta)(a,"minimalMode")&&F||m.delete(r.NEXT_CACHE_TAGS_HEADER),!l.cacheControl||b.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,q.getCacheControlHeader)(l.cacheControl)),await (0,o.I)(N,O,new Response(l.value.body,{headers:m,status:l.value.status||200})),null};L?await g(L):await K.withPropagatedContext(a.headers,()=>K.trace(m.BaseServerSpan.handleRequest,{spanName:`${J} ${a.url}`,kind:i.SpanKind.SERVER,attributes:{"http.method":J,"http.target":a.url}},g))}catch(b){if(b instanceof s.NoFallbackError||await w.onRequestError(a,b,{routerKind:"App Router",routePath:E,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})}),F)throw b;return await (0,o.I)(N,O,new Response(null,{status:500})),null}}},27910:a=>{"use strict";a.exports=require("stream")},28354:a=>{"use strict";a.exports=require("util")},29021:a=>{"use strict";a.exports=require("fs")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},34631:a=>{"use strict";a.exports=require("tls")},44870:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},55511:a=>{"use strict";a.exports=require("crypto")},55591:a=>{"use strict";a.exports=require("https")},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},74075:a=>{"use strict";a.exports=require("zlib")},78335:()=>{},79551:a=>{"use strict";a.exports=require("url")},79646:a=>{"use strict";a.exports=require("child_process")},80776:(a,b,c)=>{"use strict";c.d(b,{bw:()=>l,mk:()=>o,vV:()=>n});var d=c(52731);let e=process.env.CONTACT_REPLY_TO||"tushant.rajpal23@gmail.com",f=process.env.CONTACT_FROM_EMAIL||process.env.SMTP_USER||"",g=process.env.SMTP_HOST||"",h=Number(process.env.SMTP_PORT||587),i="true"===String(process.env.SMTP_SECURE||"false").toLowerCase(),j=process.env.SMTP_USER||"",k=process.env.SMTP_PASS||"";function l(){return!!(g&&j&&k&&f&&e)}function m(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function n(a,b){console.error("Something occurred.",a,b&&"object"==typeof b?{failedStep:b.failedStep,message:b.message,code:b.code,response:b.response,responseCode:b.responseCode,command:b.command,stack:b.stack}:{message:String(b)})}async function o(a){if(!l())throw Error("Email is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_FROM_EMAIL, and CONTACT_REPLY_TO in .env");let b=function({name:a,email:b,company:c,project:d,message:e}){let f=String(a||"").trim(),g=String(b||"").trim(),h=String(c||"").trim();return{name:f,email:g,company:h||"Not provided",project:String(d||"").trim()||"Not provided",message:String(e||"").trim()||"No additional message was provided."}}(a),c=d.createTransport({host:g,port:h,secure:i,auth:{user:j,pass:k}});try{await c.sendMail(function(a){let{name:b,email:c,company:d,project:g,message:h}=a;return{from:{name:"Request Received From Portfolio",address:f},to:e,replyTo:{name:b,address:c},subject:`New Portfolio Contact Request — ${b}`,text:`Hello Team,

A new contact request has been submitted through the portfolio website.

Contact Details

Name: ${b}
Email: ${c}
Company: ${d}

Project Details

Project: ${g}

Message

${h}

Next Steps

Please review the request and follow up with the contact if the inquiry is relevant.

Regards,
`,html:`
      <p>Hello Team,</p>
      <p>A new contact request has been submitted through the portfolio website.</p>
      <h3>Contact Details</h3>
      <p><strong>Name:</strong> ${m(b)}</p>
      <p><strong>Email:</strong> <a href="mailto:${m(c)}">${m(c)}</a></p>
      <p><strong>Company:</strong> ${m(d)}</p>
      <h3>Project Details</h3>
      <p><strong>Project:</strong> ${m(g)}</p>
      <h3>Message</h3>
      <p>${m(h).replace(/\n/g,"<br>")}</p>
      <h3>Next Steps</h3>
      <p>Please review the request and follow up with the contact if the inquiry is relevant.</p>
      <p>Regards,</p>
    `}}(b))}catch(a){throw a.failedStep="admin notification email to CONTACT_REPLY_TO",a}try{await c.sendMail(function(a){let{name:b,email:c,company:d,project:g}=a,h=String(b).trim().split(/\s+/)[0]||"there";return{from:{name:"Tushant Rajpal",address:f},to:c,replyTo:e,subject:"We've Received Your Request",text:`Hello ${h},

Thank you for reaching out to us.

We have successfully received your request regarding ${g} at ${d}. Our team will review the information you provided and get back to you as soon as possible.

If you have any additional details, requirements, or documents that may help us better understand your project, feel free to reply to this email.

We appreciate your interest and look forward to speaking with you.

Best regards,
Tushant Rajpal
`,html:`
      <p>Hello ${m(h)},</p>
      <p>Thank you for reaching out to us.</p>
      <p>
        We have successfully received your request regarding
        <strong>${m(g)}</strong> at
        <strong>${m(d)}</strong>.
        Our team will review the information you provided and get back to you as soon as possible.
      </p>
      <p>
        If you have any additional details, requirements, or documents that may help us better
        understand your project, feel free to reply to this email.
      </p>
      <p>We appreciate your interest and look forward to speaking with you.</p>
      <p>Best regards,<br><strong>Tushant Rajpal</strong></p>
    `}}(b))}catch(a){throw a.failedStep="user confirmation email",a}return b}},81630:a=>{"use strict";a.exports=require("http")},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},91645:a=>{"use strict";a.exports=require("net")},94735:a=>{"use strict";a.exports=require("events")},96487:()=>{}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[873,876],()=>b(b.s=25737));module.exports=c})();