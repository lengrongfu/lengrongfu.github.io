"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[1017],{5065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(4848),u=n(8453);const a={slug:"kubelet-volumemanager",title:"Kubelet \u6e90\u7801\u5206\u6790 volumeManager",authors:["rongfu"],tags:["Kubernetes","Kubelet"]},r=void 0,l={permalink:"/blog/kubelet-volumemanager",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-01-kubelet-volumemanager.md",source:"@site/blog/2024-09-01-kubelet-volumemanager.md",title:"Kubelet \u6e90\u7801\u5206\u6790 volumeManager",description:"VolumeManager \u8fd0\u884c\u4e00\u7ec4\u5f02\u6b65\u5faa\u73af\uff0c\u6839\u636e\u8be5\u8282\u70b9\u4e0a\u8c03\u5ea6\u7684 pod \u786e\u5b9a\u9700\u8981 attached/mounted/unmounted/detached \u54ea\u4e9b\u5377\uff0c\u5e76\u6267\u884c\u6b64\u64cd\u4f5c\u3002",date:"2024-09-01T00:00:00.000Z",tags:[{inline:!1,label:"Kubernetes",permalink:"/blog/tags/kubernetes",description:"kubernetes"},{inline:!1,label:"Kubelet",permalink:"/blog/tags/Kubelet",description:"Kubelet"}],readingTime:7.76,hasTruncateMarker:!0,authors:[{name:"Leng",title:"Softwore Developer",url:"https://github.com/lengrongfu",image_hrl:"https://avatars.githubusercontent.com/u/15009201?v=4",socials:{github:"https://github.com/lengrongfu"},key:"rongfu",page:null}],frontMatter:{slug:"kubelet-volumemanager",title:"Kubelet \u6e90\u7801\u5206\u6790 volumeManager",authors:["rongfu"],tags:["Kubernetes","Kubelet"]},unlisted:!1,nextItem:{title:"kubelet\u6e90\u7801\u5206\u6790 podManager\u548cpodWorkers\u3001workQueue",permalink:"/blog/kubelet-five-analyze"}},s={authorsImageUrls:[void 0]},c=[];function i(e){const t={code:"code",p:"p",...(0,u.R)(),...e.components};return(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"VolumeManager"})," \u8fd0\u884c\u4e00\u7ec4\u5f02\u6b65\u5faa\u73af\uff0c\u6839\u636e\u8be5\u8282\u70b9\u4e0a\u8c03\u5ea6\u7684 ",(0,o.jsx)(t.code,{children:"pod"})," \u786e\u5b9a\u9700\u8981 ",(0,o.jsx)(t.code,{children:"attached/mounted/unmounted/detached"})," \u54ea\u4e9b\u5377\uff0c\u5e76\u6267\u884c\u6b64\u64cd\u4f5c\u3002"]})}function d(e={}){const{wrapper:t}={...(0,u.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var o=n(6540);const u={},a=o.createContext(u);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(u):e.components||u:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);