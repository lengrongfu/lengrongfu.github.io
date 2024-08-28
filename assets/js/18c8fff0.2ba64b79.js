"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[3595],{8952:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>t});var c=d(4848),s=d(8453);const r={slug:"kubelet-one-analyze",title:"kubelet\u6e90\u7801\u5206\u6790(\u4e00)\uff1a\u5de5\u4f5c\u539f\u7406",authors:["rongfu"],tags:["kubernetes","Kubelet"]},l="kubelet\u6e90\u7801\u5206\u6790(\u4e00)\uff1a\u5de5\u4f5c\u539f\u7406",i={permalink:"/blog/kubelet-one-analyze",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-08-25-kubelet-one-analyze.md",source:"@site/blog/2024-08-25-kubelet-one-analyze.md",title:"kubelet\u6e90\u7801\u5206\u6790(\u4e00)\uff1a\u5de5\u4f5c\u539f\u7406",description:"\u4ece kubelet \u6e90\u7801\u6765\u5206\u6790\u5b83\u7684\u5de5\u4f5c\u539f\u7406.",date:"2024-08-25T00:00:00.000Z",tags:[{inline:!0,label:"kubernetes",permalink:"/blog/tags/kubernetes"},{inline:!1,label:"Kubelet",permalink:"/blog/tags/Kubelet",description:"Kubelet"}],readingTime:8.975,hasTruncateMarker:!0,authors:[{name:"Leng Student",title:"Softwore Developer",url:"https://github.com/lengrongfu",image_hrl:"https://avatars.githubusercontent.com/u/15009201?v=4",socials:{github:"https://github.com/lengrongfu"},key:"rongfu",page:null}],frontMatter:{slug:"kubelet-one-analyze",title:"kubelet\u6e90\u7801\u5206\u6790(\u4e00)\uff1a\u5de5\u4f5c\u539f\u7406",authors:["rongfu"],tags:["kubernetes","Kubelet"]},unlisted:!1,prevItem:{title:"kubelet\u6e90\u7801\u5206\u6790 syncLoopIteration\uff08\u4e00\uff09 podUpdateCh",permalink:"/blog/kubelet-one-analyze"},nextItem:{title:"JSON Patch and JSON Merge Patch",permalink:"/blog/jsonpatch-jsonmergepatch"}},o={authorsImageUrls:[void 0]},t=[{value:"<strong>kubelet \u5de5\u4f5c\u539f\u7406</strong>",id:"kubelet-\u5de5\u4f5c\u539f\u7406",level:2}];function h(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["\u4ece ",(0,c.jsx)(n.code,{children:"kubelet"})," \u6e90\u7801\u6765\u5206\u6790\u5b83\u7684\u5de5\u4f5c\u539f\u7406."]}),"\n",(0,c.jsx)(n.h2,{id:"kubelet-\u5de5\u4f5c\u539f\u7406",children:(0,c.jsx)(n.strong,{children:"kubelet \u5de5\u4f5c\u539f\u7406"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"image.png",src:d(2988).A+"",width:"1333",height:"954"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Kubelet"})," \u7684\u5de5\u4f5c\u6838\u5fc3\u5c31\u662f\u4e00\u4e2a\u63a7\u5236\u5faa\u73af ",(0,c.jsx)(n.code,{children:"syncLoop"})," \uff0c\u9a71\u52a8\u8fd9\u4e2a\u63a7\u5236\u5faa\u73af\u8fd0\u884c\u7684\u4e8b\u4ef6\uff0c\u5305\u62ec: ",(0,c.jsx)(n.code,{children:"Pod"})," \u66f4\u65b0\u4e8b\u4ef6, ",(0,c.jsx)(n.code,{children:"Pod"})," \u751f\u547d\u5468\u671f\u53d8\u5316, ",(0,c.jsx)(n.code,{children:"Kubelet"})," \u672c\u8eab\u8bbe\u7f6e\u7684\u6267\u884c\u5468\u671f\u3001\u5b9a\u65f6\u7684\u6e05\u7406\u4efb\u52a1(",(0,c.jsx)(n.code,{children:"GC"})," )."]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u5927\u5faa\u73af ",(0,c.jsx)(n.code,{children:"syncLoop"})," \u4e4b\u5916, ",(0,c.jsx)(n.code,{children:"kubelet"})," \u8fd8\u7ef4\u62a4\u7740\u8bb8\u591a\u5176\u4ed6\u7684\u5b57\u63a7\u5236\u5faa\u73af\uff0c\u5c31\u662f\u56fe\u4e2d\u7684\u5c0f\u5706\u5708, \u6bd4\u5982\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"podManager"})," :  \u4e3b\u8981\u7528\u4e8e\u5b58\u50a8\u548c\u7ba1\u7406\u671f\u671b\u7684 ",(0,c.jsx)(n.code,{children:"Pod"})," \u96c6\u5408\uff0c\u5305\u62ec\u88ab\u63a5\u53d7\u7684\u5e38\u89c4 ",(0,c.jsx)(n.code,{children:"pod"})," \u548c\u955c\u50cf ",(0,c.jsx)(n.code,{children:"pod\uff08mirror pods\uff09"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"podWorkers"}),": \u4e3b\u8981\u8d1f\u8d23\u7ba1\u7406 ",(0,c.jsx)(n.code,{children:"pod"})," \u751f\u547d\u5468\u671f\u72b6\u6001\u673a\u7684\u5173\u952e\u7ec4\u4ef6, \u5b83\u4f1a\u5904\u7406 ",(0,c.jsx)(n.code,{children:"pod"})," \u7684\u51e0\u4e2a\u72b6\u6001","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"syncing"}),"\uff1apod \u5e94\u8be5\u6b63\u5728\u8fd0\u884c\uff08\u8c03\u7528",(0,c.jsx)(n.code,{children:"syncPod"}),"\u65b9\u6cd5\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"terminating"}),"\uff1apod\u5e94\u8be5\u6b63\u5728\u505c\u6b62\uff08\u8c03\u7528",(0,c.jsx)(n.code,{children:"syncTerminatingPod"}),"\u65b9\u6cd5\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"terminated"}),"\uff1apod\u5e94\u8be5\u5df2\u7ecf\u6e05\u7406\u4e86\u6240\u6709\u8d44\u6e90\uff08\u8c03\u7528",(0,c.jsx)(n.code,{children:"syncTerminatedPod"}),"\u65b9\u6cd5\uff09\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"evictionManager"}),": \u8d1f\u8d23\u76d1\u63a7\u8282\u70b9\u7684\u72b6\u6001\uff0c\u4ee5\u8bc6\u522b\u53ef\u80fd\u5f71\u54cd\u8282\u70b9\u7a33\u5b9a\u6027\u7684\u60c5\u51b5\uff0c\u5e76\u901a\u8fc7\u9a71\u9010pod\uff08\u5c06 ",(0,c.jsx)(n.code,{children:"pod"})," \u72b6\u6001\u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"Failed"})," \uff0c\u5e76\u7ed9\u51fa\u539f\u56e0 ",(0,c.jsx)(n.code,{children:"Evicted"})," \uff09\u6765\u51cf\u8f7b\u8d44\u6e90\u538b\u529b; \u5e76\u4f9d\u8d56",(0,c.jsx)(n.code,{children:"podWorker"}),"\u7684\u6743\u5a01\u6027\u6765\u6267\u884c\u9a71\u9010\u64cd\u4f5c\u3002\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u5728\u8d44\u6e90\u538b\u529b\u8fc7\u5927\u6216\u5176\u4ed6\u5f71\u54cd\u8282\u70b9\u7a33\u5b9a\u6027\u7684\u60c5\u51b5\u4e0b\uff0c\u80fd\u591f\u53ca\u65f6\u91c7\u53d6\u63aa\u65bd\uff0c\u6062\u590d\u8282\u70b9\u7684\u6b63\u5e38\u8fd0\u884c"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"probeManager"})," : \u4f1a\u5b9a\u65f6\u53bb\u76d1\u63a7 ",(0,c.jsx)(n.code,{children:"Pod"})," \u4e2d\u5bb9\u5668\u7684\u5065\u5eb7\u72b6\u51b5\uff0c\u5f53\u524d\u652f\u6301\u4e24\u79cd\u7c7b\u578b\u7684\u63a2\u9488: ",(0,c.jsx)(n.code,{children:"livenessProbe"})," \u548c ",(0,c.jsx)(n.code,{children:"readinessProbe"})," ."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"secretManager"}),": \u662f ",(0,c.jsx)(n.code,{children:"kubelet"})," \u4e2d\u8d1f\u8d23\u7f13\u5b58\u548c\u7ba1\u7406\u8fd0\u884c\u5728\u8282\u70b9\u4e0a\u7684 ",(0,c.jsx)(n.code,{children:"pod"})," \u6240\u4f7f\u7528\u7684 ",(0,c.jsx)(n.code,{children:"secret"})," \u7684\u7ec4\u4ef6\uff0c\u5b83\u901a\u8fc7\u4e0e",(0,c.jsx)(n.code,{children:"podWorkers"}),"\xa0\u7684\u534f\u4f5c\uff0c\u786e\u4fdd\u5728 ",(0,c.jsx)(n.code,{children:"pod"})," \u542f\u52a8\u548c\u7ec8\u6b62\u65f6\u6b63\u786e\u5730\u83b7\u53d6\u548c\u6e05\u7406 ",(0,c.jsx)(n.code,{children:"secret"}),"\uff0c\u5e76\u4fdd\u6301 ",(0,c.jsx)(n.code,{children:"secret"})," \u7684\u6700\u65b0\u72b6\u6001\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"configMapManager"}),": \u662f ",(0,c.jsx)(n.code,{children:"kubelet"})," \u4e2d\u8d1f\u8d23\u7f13\u5b58\u548c\u7ba1\u7406\u8fd0\u884c\u5728\u8282\u70b9\u4e0a\u7684 ",(0,c.jsx)(n.code,{children:"pod"})," \u6240\u4f7f\u7528\u7684 ",(0,c.jsx)(n.code,{children:"configmap"})," \u7684\u7ec4\u4ef6\u3002\u5b83\u901a\u8fc7\u4e0e",(0,c.jsx)(n.code,{children:"podWorkers"}),"\xa0\u7684\u534f\u4f5c\uff0c\u786e\u4fdd\u5728 ",(0,c.jsx)(n.code,{children:"pod"})," \u542f\u52a8\u548c\u7ec8\u6b62\u65f6\u6b63\u786e\u5730\u83b7\u53d6\u548c\u6e05\u7406 ",(0,c.jsx)(n.code,{children:"configmap"}),", \u5e76\u4fdd\u6301 ",(0,c.jsx)(n.code,{children:"configmap"})," \u7684\u6700\u65b0\u72b6\u6001\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"volumeManager"})," : \u662f ",(0,c.jsx)(n.code,{children:"kubelet"})," \u4e2d\u8d1f\u8d23\u7ba1\u7406\u8fd0\u884c\u5728\u8282\u70b9\u4e0a\u7684 ",(0,c.jsx)(n.code,{children:"pod"})," \u6240\u4f7f\u7528\u7684\u5377\u7684\u7ec4\u4ef6\u3002\u5b83\u901a\u8fc7\u89c2\u5bdf ",(0,c.jsx)(n.code,{children:"pod"})," \u7684\u751f\u547d\u5468\u671f\uff0c\u6267\u884c\u5fc5\u8981\u7684\u5377\u64cd\u4f5c\uff0c\u5e76\u5b9a\u671f\u540c\u6b65\u5377\u72b6\u6001\u4ee5\u786e\u4fdd\u4e0e\u5b9e\u9645\u671f\u671b\u7684\u5377\u96c6\u5408\u4e00\u81f4\uff0c\u5e76\u7ba1\u7406\u8fd9\u4e9b ",(0,c.jsx)(n.code,{children:"pod"})," \u7684\u751f\u547d\u5468\u671f\u4e2d\u6d89\u53ca\u7684\u5377\uff08volumes\uff09\u64cd\u4f5c\uff0c\u5305\u62ec\uff1a","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u6302\u8f7d\uff08attaching\uff09\uff1a\u5c06\u5377\u8fde\u63a5\u5230\u8282\u70b9\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u6302\u8f7d\uff08mounting\uff09\uff1a\u5c06\u5377\u6302\u8f7d\u5230pod\u7684\u6587\u4ef6\u7cfb\u7edf\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u5378\u8f7d\uff08unmounting\uff09\uff1a\u4ecepod\u7684\u6587\u4ef6\u7cfb\u7edf\u5378\u8f7d\u5377\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u5206\u79bb\uff08detaching\uff09\uff1a\u4ece\u8282\u70b9\u65ad\u5f00\u5377\u7684\u8fde\u63a5\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"statusManager"}),": \u662f ",(0,c.jsx)(n.code,{children:"kubelet"})," \u4e2d\u8d1f\u8d23\u66f4\u65b0\u548c\u7ba1\u7406 ",(0,c.jsx)(n.code,{children:"pod"})," \u72b6\u6001\u7684\u7ec4\u4ef6\u3002\u5b83\u4ece",(0,c.jsx)(n.code,{children:"podWorker"}),"\u63a5\u6536\u72b6\u6001\u66f4\u65b0\uff0c\u5e76\u5c06\u8fd9\u4e9b\u66f4\u65b0\u540c\u6b65\u5230 ",(0,c.jsx)(n.code,{children:"API"})," \u670d\u52a1\u5668\u4e2d\u3002",(0,c.jsx)(n.code,{children:"statusManager"}),"\xa0\u5bf9\u4e8e ",(0,c.jsx)(n.code,{children:"kubelet"})," \u5408\u6210\u7684 ",(0,c.jsx)(n.code,{children:"pod"})," \u72b6\u6001\u5177\u6709\u6743\u5a01\u6027\uff0c\u5176\u4ed6\u7ec4\u4ef6\u5e94\u8be5\u54a8\u8be2\u5b83\u4ee5\u83b7\u53d6\u6b63\u786e\u7684\u72b6\u6001\u4fe1\u606f\u3002\u540c\u65f6\uff0c\u7531\u4e8e",(0,c.jsx)(n.code,{children:"statusManager"}),"\xa0\u4f9d\u8d56\u4e8e",(0,c.jsx)(n.code,{children:"podWorker"}),"\uff0c\u56e0\u6b64\u9700\u8981\u68c0\u67e5 ",(0,c.jsx)(n.code,{children:"pod"})," \u8fd0\u884c\u72b6\u6001\u7684\u7ec4\u4ef6\u5e94\u8be5\u76f4\u63a5\u54a8\u8be2",(0,c.jsx)(n.code,{children:"podWorker"}),"\u3002\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd ",(0,c.jsx)(n.code,{children:"pod"})," \u72b6\u6001\u7684\u4e00\u81f4\u6027\u548c\u51c6\u786e\u6027\uff0c\u4ece\u800c\u4fdd\u8bc1\u6574\u4e2a\u7cfb\u7edf\u7684\u6b63\u5e38\u8fd0\u884c\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"imageManager"})," : \u662fkubelet\u4e2d\u8d1f\u8d23\u7ba1\u7406\u955c\u50cf\u5783\u573e\u56de\u6536\u7684\u7ec4\u4ef6\u3002\u5b83\u901a\u8fc7\u5b9a\u671f\u68c0\u67e5\u548c\u6e05\u7406\u4e0d\u518d\u4f7f\u7528\u7684\u955c\u50cf\uff0c\u5e2e\u52a9\u7ef4\u62a4\u8282\u70b9\u7684\u78c1\u76d8\u7a7a\u95f4\uff0c\u786e\u4fdd\u8282\u70b9\u6709\u8db3\u591f\u7684\u8d44\u6e90\u6765\u8fd0\u884c\u65b0\u7684pod"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"containerLogManager"})," : \u662fkubelet\u4e2d\u8d1f\u8d23\u7ba1\u7406\u5bb9\u5668\u65e5\u5fd7\u7684\u7ec4\u4ef6\u3002\u5b83\u901a\u8fc7\u6536\u96c6\u3001\u5b58\u50a8\u3001\u8f6e\u8f6c\u548c\u6e05\u7406\u5bb9\u5668\u65e5\u5fd7\uff0c\u786e\u4fdd\u65e5\u5fd7\u6570\u636e\u7684\u53ef\u7528\u6027\u548c\u8282\u70b9\u7684\u78c1\u76d8\u7a7a\u95f4\u4e0d\u4f1a\u88ab\u8fc7\u5ea6\u6d88\u8017\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"serverCertificateManager"}),": \u662fkubelet\u4e2d\u8d1f\u8d23\u5904\u7406\u8bc1\u4e66\u8f6e\u6362\u7684\u7ec4\u4ef6\u3002\u5b83\u901a\u8fc7\u76d1\u63a7\u8bc1\u4e66\u7684\u6709\u6548\u671f\uff0c\u81ea\u52a8\u8fdb\u884c\u8bc1\u4e66\u8f6e\u6362\uff0c\u5e76\u786e\u4fdd\u6240\u6709\u76f8\u5173\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528\u65b0\u7684\u8bc1\u4e66\u3002\u8fd9\u4e2a\u7ec4\u4ef6\u5bf9\u4e8e\u7ef4\u62a4\u96c6\u7fa4\u7684\u5b89\u5168\u901a\u4fe1\u548c\u9632\u6b62\u8bc1\u4e66\u8fc7\u671f\u5bfc\u81f4\u7684\u670d\u52a1\u4e2d\u65ad\u975e\u5e38\u91cd\u8981\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"cloudResourceSyncManager"}),": \u662fkubelet\u4e2d\u8d1f\u8d23\u5904\u7406\u5411\u4e91\u670d\u52a1\u63d0\u4f9b\u5546\u53d1\u9001\u8bf7\u6c42\u7684\u7ec4\u4ef6\u3002\u5b83\u901a\u8fc7\u8bbe\u7f6e\u8bf7\u6c42\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u786e\u4fdd\u8bf7\u6c42\u5728\u9884\u5b9a\u7684\u65f6\u95f4\u5185\u5b8c\u6210\uff0c\u5e76\u5904\u7406\u8bf7\u6c42\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u51fa\u73b0\u7684\u9519\u8bef\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Runtime"})," \u76f8\u5173\u7684\u5b57\u6bb5\uff1a","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"containerRuntime"}),": \u662fkubelet\u4e2d\u8d1f\u8d23\u7ba1\u7406\u5bb9\u5668\u751f\u547d\u5468\u671f\u7684\u7ec4\u4ef6\u3002\u5b83\u4e0e\u5e95\u5c42\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\uff08\u5982Docker\u3001containerd\u3001CRI-O\u7b49\uff09\u8fdb\u884c\u901a\u4fe1\uff0c\u6267\u884c\u4ee5\u4e0b\u4efb\u52a1"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:"streamingRuntime"}),":"]})," \u8d1f\u8d23\u5904\u7406\u5bb9\u5668\u7684\u6d41\u5f0f\u64cd\u4f5c\uff0c\u5982\u65e5\u5fd7\u6d41\u3001exec\u547d\u4ee4\u548c\u7aef\u53e3\u8f6c\u53d1\u7b49"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:"runtimeService"})," :"]}),"  \u662f\u4e00\u4e2a\u5185\u90e8API\u670d\u52a1\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e0e\u5bb9\u5668\u8fd0\u884c\u65f6\u8fdb\u884c\u4ea4\u4e92\u7684\u63a5\u53e3\u3002\u8fd9\u4e2a\u670d\u52a1\u901a\u5e38\u662f\u5bb9\u5668\u8fd0\u884c\u65f6\u63a5\u53e3\uff08Container Runtime Interface, CRI\uff09\u7684\u4e00\u90e8\u5206\uff1b\u5728\u5185\u90e8\u4e3b\u8981\u662f\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"containerRuntime"})," \u8fd9\u4e2a\u5bf9\u8c61\u53bb\u7ba1\u7406\u5bb9\u5668\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"PLEG"})," \u76f8\u5173\u7684\u5b57\u6bb5\uff1a",(0,c.jsx)(n.strong,{children:"PLEG"}),"\xa0\u662f\u57fa\u4e8e\u8f6e\u8be2\u7684\u5b9a\u671f\u68c0\u67e5\u673a\u5236\uff0c\u7528\u4e8e\u68c0\u6d4b\u548c\u62a5\u544a\u5bb9\u5668\u72b6\u6001\u7684\u53d8\u5316, ",(0,c.jsx)(n.strong,{children:"eventedPleg"}),"\xa0\u662f\u57fa\u4e8e\u4e8b\u4ef6\u9a71\u52a8\u7684\u5b9e\u65f6\u54cd\u5e94\u673a\u5236\uff0c\u7528\u4e8e\u4ee5\u4f4e\u5ef6\u8fdf\u63d0\u4f9b\u5bb9\u5668\u72b6\u6001\u7684\u53d8\u5316\u3002","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"PLEG\uff08Pod Lifecycle Event Generator\uff09"}),":","\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u5b9a\u671f\u68c0\u67e5"}),"\uff1aPLEG \u5b9a\u671f\uff08\u901a\u5e38\u662f\u6bcf\u9694\u51e0\u79d2\u949f\uff09\u68c0\u67e5\u6240\u6709pod\u548c\u5bb9\u5668\u7684\u72b6\u6001\uff0c\u5e76\u5c06\u72b6\u6001\u53d8\u5316\u751f\u6210\u4e8b\u4ef6\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u8f6e\u8be2\u673a\u5236"}),"\uff1aPLEG \u4f7f\u7528\u8f6e\u8be2\u673a\u5236\u6765\u68c0\u6d4b\u5bb9\u5668\u72b6\u6001\u7684\u53d8\u5316\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u9700\u8981\u5b9a\u671f\u626b\u63cf\u6240\u6709\u5bb9\u5668\uff0c\u5373\u4f7f\u6ca1\u6709\u72b6\u6001\u53d8\u5316\u4e5f\u4f1a\u8fdb\u884c\u68c0\u67e5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u5ef6\u8fdf"}),"\uff1a\u7531\u4e8e\u662f\u5b9a\u671f\u68c0\u67e5\uff0cPLEG \u53ef\u80fd\u4f1a\u6709\u4e00\u5b9a\u7684\u5ef6\u8fdf\uff0c\u56e0\u4e3a\u5b83\u9700\u8981\u7b49\u5f85\u4e0b\u4e00\u4e2a\u68c0\u67e5\u5468\u671f\u624d\u80fd\u53d1\u73b0\u72b6\u6001\u53d8\u5316\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"eventedPleg"})," :","\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u4e8b\u4ef6\u9a71\u52a8"}),"\uff1a",(0,c.jsx)(n.code,{children:"eventedPleg"}),"\xa0\u901a\u8fc7\u76d1\u542c\u5bb9\u5668\u8fd0\u884c\u65f6\u7684\u4e8b\u4ef6\u6765\u5b9e\u65f6\u83b7\u53d6\u5bb9\u5668\u72b6\u6001\u7684\u53d8\u5316\uff0c\u800c\u4e0d\u662f\u5b9a\u671f\u68c0\u67e5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u4f4e\u5ef6\u8fdf"}),"\uff1a",(0,c.jsx)(n.code,{children:"eventedPleg"}),"\xa0\u53ef\u4ee5\u5728\u5bb9\u5668\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\u7acb\u5373\u54cd\u5e94\uff0c\u56e0\u6b64\u5177\u6709\u66f4\u4f4e\u7684\u5ef6\u8fdf\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u8fb9\u7f18\u9a71\u52a8"}),"\uff1a",(0,c.jsx)(n.code,{children:"eventedPleg"}),"\xa0\u5728\u5bb9\u5668\u72b6\u6001\u53d8\u5316\u7684\u8fb9\u7f18\uff08\u5373\u4e8b\u4ef6\u53d1\u751f\u65f6\uff09\u89e6\u53d1\u54cd\u5e94\uff0c\u800c\u4e0d\u662f\u5728\u5468\u671f\u6027\u7684\u68c0\u67e5\u70b9\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"containerRefManager"})," : \u5bb9\u5668\u5f15\u7528\u7684\u7ba1\u7406\uff0c\u7528\u6765\u62a5\u544a\u5bb9\u5668\u7684\u521b\u5efa\u3001\u5931\u8d25\u4e8b\u4ef6\u7b49."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u8ff0\u63cf\u8ff0\u4e86 ",(0,c.jsx)(n.code,{children:"Kubelet"})," \u7ed3\u6784\u4f53\u4e2d\u5b9a\u4e49\u7684\u6838\u5fc3\u7684\u5b57\u6bb5\uff0c\u9664\u6b64\u4e4b\u5916\u8fd8\u6709\u5f88\u591a\u5b57\u6bb5\uff0c\u4e00\u4e9b\u5b57\u6bb5\u6bd4\u8f83\u7b80\u5355\uff0c\u8fd9\u91cc\u4e0d\u4e00\u4e00\u63cf\u8ff0\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"kubelet-arch.drawio.png",src:d(7616).A+"",width:"2000",height:"836"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Kubelet"})," \u542f\u52a8\u4e4b\u540e\u4f1a\u521b\u5efa ",(0,c.jsx)(n.code,{children:"syncLoopIteration"})," \u7684\u5faa\u73af\uff0c\u5b83\u63a5\u53d7\u4e00\u4e2a ",(0,c.jsx)(n.code,{children:"podUpdate"})," \u7684 ",(0,c.jsx)(n.code,{children:"chan"})," ,\u5206\u522b\u4ece\u9759\u6001\u6587\u4ef6\u3001HTTP URL\u3001List-Watch(API) \u4e09\u4e2a\u6765\u6e90\u5199\u5165\u521b\u5efa\u3001\u66f4\u65b0\u3001\u5220\u9664\u7684 ",(0,c.jsx)(n.code,{children:"Pod"})," ;"]}),"\n",(0,c.jsxs)(n.p,{children:["\u63a5\u6536\u5230 ",(0,c.jsx)(n.code,{children:"podUpdate"})," \u5bf9\u8c61\u4e4b\u540e\uff0c\u4f1a\u8fdb\u5165 ",(0,c.jsx)(n.code,{children:"podWorkers.UpdatePod"})," \u7684\u65b9\u6cd5\u4e2d\u8fdb\u884c\u5904\u7406\uff0c\u4e4b\u540e\u53d1\u5f80 ",(0,c.jsx)(n.code,{children:"podWork"})," chan \u91cc\u9762\uff0c\u5728 ",(0,c.jsx)(n.code,{children:"podWorkLoop"})," \u4e2d\uff0c\u9488\u5bf9\u6bcf\u4e2a ",(0,c.jsx)(n.code,{children:"pod"})," \u4f1a\u521b\u5efa\u4e00\u4e2a\u534f\u7a0b\uff0c\u7136\u540e\u5728 ",(0,c.jsx)(n.code,{children:"syncPod"})," \u4e2d\u5904\u7406\uff0c\u91cc\u9762\u4e3b\u8981\u5c31\u662f\u628a ",(0,c.jsx)(n.code,{children:"pod"})," \u53d1\u5f80 ",(0,c.jsx)(n.code,{children:"podStatus"})," \u4e2d\u8fdb\u884c\u72b6\u6001\u5904\u7406\uff0c\u8fd8\u6709\u5c31\u662f\u521b\u5efa\u5bb9\u5668\uff0c\u7136\u540e\u5c31\u662f\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"CRI"})," \u7684\u63a5\u53e3\u62c9\u955c\u50cf\u3001\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"device-plugin"})," \u7684\u63a5\u53e3\u8fdb\u884c\u8bbe\u5907\u7684\u5206\u914d\uff0c\u4ee5\u53ca ",(0,c.jsx)(n.code,{children:"CRI"})," \u7684\u5bb9\u5668\u670d\u52a1\u63a5\u53e3\u521b\u5efa\u5bb9\u5668\u7b49\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 ",(0,c.jsx)(n.code,{children:"syncLoopIteration"})," \u4e2d\u8fd8\u4f1a\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"syncCh"})," \u548c ",(0,c.jsx)(n.code,{children:"cleanupCh"})," \u914d\u7f6e\u7684 ",(0,c.jsx)(n.code,{children:"time.Ticker"})," \u5b9a\u671f\u7684\u5904\u7406 ",(0,c.jsx)(n.code,{children:"pod"}),",\u4ee5\u53ca\u5728 ",(0,c.jsx)(n.code,{children:"containerCh"})," chan \u4e2d\u63a5\u53d7 ",(0,c.jsx)(n.code,{children:"device-plguin"})," \u4e0a\u62a5\u7684\u8bbe\u5907\u5065\u5eb7\u4fe1\u606f\uff0c\u8fd8\u6709 ",(0,c.jsx)(n.code,{children:"probeCh"})," \u8fd9\u4e2a\u6839\u636e ",(0,c.jsx)(n.code,{children:"livenessManager\u3001readinessManager\u3001startupManager"}),"  \u8fd9\u4e09\u4e2a\u63a2\u9488\u7684\u7ed3\u679c\u5f71\u54cd ",(0,c.jsx)(n.code,{children:"pod"})," \u7684\u72b6\u6001\u66f4\u65b0\uff1b"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"plegCh"})," \u4f1a\u63a5\u53d7 ",(0,c.jsx)(n.code,{children:"Pod"})," \u7684 ",(0,c.jsx)(n.code,{children:"Lifecycle Event"})," ,\u6839\u636e ",(0,c.jsx)(n.code,{children:"Event"})," \u6765\u51b3\u5b9a ",(0,c.jsx)(n.code,{children:"pod"})," \u7684 sync."]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},7616:(e,n,d)=>{d.d(n,{A:()=>c});const c=d.p+"assets/images/kubelet-arch-8f1969a6bde0633f0cf5decdc7ee7e77.png"},2988:(e,n,d)=>{d.d(n,{A:()=>c});const c=d.p+"assets/images/kubelet-flow-4ca563abbd2633858a5edff9bb4bd281.png"},8453:(e,n,d)=>{d.d(n,{R:()=>l,x:()=>i});var c=d(6540);const s={},r=c.createContext(s);function l(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);