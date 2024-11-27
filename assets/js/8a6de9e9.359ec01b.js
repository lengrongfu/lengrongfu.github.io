"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[7620],{6018:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=n(4848),c=n(8453);const o={slug:"k8s-dra",title:"kubernetes 1.32 DRA \u539f\u7406\u89e3\u6790",authors:["rongfu"],tags:["Kubernetes DRA"]},i=void 0,l={permalink:"/blog/k8s-dra",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-11-27-k8s-dra.md",source:"@site/blog/2024-11-27-k8s-dra.md",title:"kubernetes 1.32 DRA \u539f\u7406\u89e3\u6790",description:"\u6211\u4eec\u901a\u8fc7 KEP \u6765\u4e86\u89e3 DRA \u7684\u6700\u65b0\u5de5\u4f5c\u539f\u7406\u3002",date:"2024-11-27T00:00:00.000Z",tags:[{inline:!0,label:"Kubernetes DRA",permalink:"/blog/tags/kubernetes-dra"}],readingTime:7.83,hasTruncateMarker:!0,authors:[{name:"Leng",title:"Softwore Developer",url:"https://github.com/lengrongfu",image_hrl:"https://avatars.githubusercontent.com/u/15009201?v=4",socials:{github:"https://github.com/lengrongfu"},key:"rongfu",page:null}],frontMatter:{slug:"k8s-dra",title:"kubernetes 1.32 DRA \u539f\u7406\u89e3\u6790",authors:["rongfu"],tags:["Kubernetes DRA"]},unlisted:!1,nextItem:{title:"kubernetes 1.31 DRA Nvidia GPU\u6d4b\u8bd5",permalink:"/blog/k8s-nvidia-dra-test"}},t={authorsImageUrls:[void 0]},a=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:3},{value:"ResourceSlice",id:"resourceslice",level:3},{value:"<strong>ResourceClaim</strong>",id:"resourceclaim",level:3},{value:"<strong>DeviceClass</strong>",id:"deviceclass",level:3},{value:"<strong>ResourceClaimTemplate</strong>",id:"resourceclaimtemplate",level:3},{value:"<strong>\u7ba1\u7406\u8d44\u6e90</strong>",id:"\u7ba1\u7406\u8d44\u6e90",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"\u6211\u4eec\u901a\u8fc7 KEP \u6765\u4e86\u89e3 DRA \u7684\u6700\u65b0\u5de5\u4f5c\u539f\u7406\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u539f\u6587\uff1a"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://mp.weixin.qq.com/s/KvgQSnPaTKDDjIzISaQopA",children:"kubernetes 1.32 DRA \u539f\u7406\u89e3\u6790"})}),"\n",(0,r.jsx)(s.h3,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,r.jsx)(s.p,{children:"\u65b0\u7248\u672c\u67b6\u6784\u56fe"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"image.png",src:n(7185).A+"",width:"1047",height:"460"})}),"\n",(0,r.jsx)(s.p,{children:"\u6838\u5fc3\u8bbe\u8ba1\u4e86\u56db\u4e2a CRD\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"DeviceClass\uff1a\u8fd9\u662f\u4e00\u4e2a\u4f9b\u5e94\u5546\u63d0\u4f9b\u7684 device class\uff0c\u7c7b\u4f3c\u4e8e StorageClass\u3002"}),"\n",(0,r.jsx)(s.li,{children:"ResourceSlice: \u4e3b\u8981\u8bb0\u5f55\u8282\u70b9\u4e0a\u53ef\u7528\u7684\u8bbe\u5907"}),"\n",(0,r.jsx)(s.li,{children:"ResourceClaim\uff1a\u5b9a\u4e49\u9700\u8981\u591a\u5c11\u8bbe\u5907\u4ee5\u53ca\u5b83\u4eec\u5fc5\u987b\u5177\u5907\u54ea\u4e9b\u529f\u80fd"}),"\n",(0,r.jsx)(s.li,{children:"ResourceClaimTemplate: \u521b\u5efaResourceClaim\u7684\u6a21\u7248\u5b9a\u4e49"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"kube-controller-manager \u4e2d\u7684\u65b0\u63a7\u5236\u5668\u53ef\u6839\u636e ResourceClaimTemplates \u521b\u5efa ResourceClaims\uff0c\u5f53 ResourceClaim \u4e0d\u518d\u4fdd\u7559\u65f6\uff0c\u5b83\u4f1a\u6e05\u9664\u5206\u914d\uff0c\u4ece\u800c\u4f7f\u5e95\u5c42\u8d44\u6e90\u518d\u6b21\u53ef\u7528\u3002"}),"\n",(0,r.jsx)(s.p,{children:"kube-scheduler \u63d2\u4ef6\u9700\u8981\u68c0\u6d4b Pod \u7684\u5f15\u7528 ResourceClaim\uff08\u76f4\u63a5\u6216\u901a\u8fc7 ResourceClaimTemplates \uff09\uff0c\u5e76\u786e\u4fdd\u5728 Pod \u8c03\u5ea6\u4e4b\u524d\u5206\u914d\u8d44\u6e90\u3002"}),"\n",(0,r.jsx)(s.p,{children:"DRA \u9a71\u52a8\u7a0b\u5e8f\u9700\u8981\u6709\u5982\u4e0b\u529f\u80fd\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"admission webhook"}),"\uff08\u53ef\u9009\uff09\uff1a\u4e00\u4e2a\u4e2d\u5fc3\u7ec4\u4ef6\uff0c\u7528\u4e8e\u5728\u521b\u5efa ",(0,r.jsx)(s.code,{children:"ResourceClaims"}),"\u3001ResourceClaimTemplates \u548c DeviceClasses \u65f6\u68c0\u67e5\u5176\u4e2d\u7684\u4e0d\u900f\u660e\u914d\u7f6e\u53c2\u6570\u3002\u5982\u679c\u6ca1\u6709\u5b83\uff0c\u5219\u53ea\u80fd\u5728 Pod \u5373\u5c06\u5728\u8282\u70b9\u4e0a\u8fd0\u884c\u65f6\u68c0\u6d4b\u5230\u65e0\u6548\u53c2\u6570\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"kubelet\u63d2\u4ef6"}),"\uff08\u5fc5\u9009\uff09\uff1a\u53d1\u5e03\u8bbe\u5907\u4fe1\u606f\uff0c\u4e0ekubelet\u914d\u5408\u51c6\u5907\u8282\u70b9\u4e0a\u8bbe\u5907\u7684\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4e0b\u9762\u6211\u4eec\u6765\u770b\u4e0b ",(0,r.jsx)(s.a,{href:"http://resource.k8s.io",children:"**resource.k8s.io"}),"** \u8fd9\u4e2a\u8d44\u6e90\u7ec4\u4e2d\u5b9a\u4e49\u7684\u51e0\u4e2a CRD\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"resourceslice",children:"ResourceSlice"}),"\n",(0,r.jsx)(s.p,{children:"\u5bf9\u4e8e\u6bcf\u4e2a\u8282\u70b9\uff0c\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u6216\u591a\u4e2a ResourceSlice \u5bf9\u8c61\u3002\u8282\u70b9\u4e0a\u7684\u9a71\u52a8\u7a0b\u5e8f\u4f1a\u4ee5\u8282\u70b9\u4e3a\u6240\u6709\u8005\u53d1\u5e03\u8fd9\u4e9b\u5bf9\u8c61\uff0c\u56e0\u6b64\u5f53\u8282\u70b9\u53d1\u751f\u6545\u969c\u65f6\uff0c\u8fd9\u4e9b\u5bf9\u8c61\u4f1a\u88ab\u5220\u9664\uff0c\u7136\u540e\u88ab\u79fb\u9664\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u6240\u6709\u5217\u8868\u7c7b\u578b\u90fd\u662f\u539f\u5b50\u7684\uff0c\u56e0\u4e3a\u8fd9\u6837\u53ef\u4ee5\u66f4\u8f7b\u677e\u5730\u8ddf\u8e2a\u670d\u52a1\u5668\u7aef\u5e94\u7528 (SSA) \u7684\u6240\u6709\u8005\u3002\u65e0\u9700\u4fee\u8865\u5355\u4e2a\u5217\u8868\u5143\u7d20\uff0c\u5e76\u4e14\u53ea\u6709\u4e00\u4e2a\u6240\u6709\u8005\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"type ResourceSliceSpec struct {\n    // \u9a71\u52a8\u7a0b\u5e8f\u540d\u5b57\n    Driver string\n    // Pool \u63cf\u8ff0\u7684\u662f\u6b64 ResourceSlice \u6240\u5c5e\u7684\u6c60\u3002\n    Pool ResourcePool\n    // NodeName \u6807\u8bc6\u5728\u6b64\u6c60\u4e2d\u63d0\u4f9b\u8d44\u6e90\u7684\u8282\u70b9\u3002\n    NodeName string\n    // NodeSelector \u5b9a\u4e49\u54ea\u4e9b\u8282\u70b9\u53ef\u4ee5\u8bbf\u95ee\u8fd9\u4e2a\u8d44\u6e90\u6c60\n    NodeSelector *core.NodeSelector\n    // \u8868\u793a\u6240\u6709\u8282\u70b9\u90fd\u53ef\u4ee5\u8bbf\u95eePool\u4e2d\u7684\u8d44\u6e90\uff0c\u8fd9\u4e2a\u611f\u89c9\u662f\u7ed9\u7f51\u7edc\u8bbe\u5907\u4f7f\u7528\u7684\n    AllNodes bool\n    // \u5b9a\u4e49\u8282\u70b9\u4e0a\u7684\u6240\u6709device\n    Devices []Device\n}\n\n// ResourcePool describes the pool that ResourceSlices belong to.\ntype ResourcePool struct {\n    // pool\u7684\u552f\u4e00\u540d\u5b57\uff0c\u5728\u8282\u70b9\u7ea7\u522b\u901a\u5e38\u662f\u8282\u70b9name\n    Name string\n    // \u6ca1\u61c2\u8fd9\u4e2a\u5b57\u6bb5\n    Generation int64\n\n    // ResourceSliceCount \u662f\u6b64 Generation \u65f6\u6c60\u4e2d\u7684 ResourceSlice \u603b\u6570\n    ResourceSliceCount int64\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"resourceclaim",children:(0,r.jsx)(s.strong,{children:"ResourceClaim"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"scheduler"})," \u7a0b\u5e8f\u5fc5\u987b\u5728 ResourceClaim \u4e2d\u8bbe\u7f6e\u7ec8\u7ed3\u5668 ",(0,r.jsx)(s.code,{children:'Finalizer = "resource.kubernetes.io/delete-protection"'}),"\uff0c\u7136\u540e\u624d\u80fd\u6dfb\u52a0\u5206\u914d\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"type DeviceClaim struct {\n    // \u8bf7\u6c42\u4ee3\u8868\u5bf9\u4e0d\u540c\u8bbe\u5907\u7684\u5355\u72ec\u8bf7\u6c42\uff0c\u8fd9\u4e9b\u8bf7\u6c42\u5fc5\u987b\u5168\u90e8\u6ee1\u8db3\u3002\u5982\u679c\u4e3a\u7a7a\uff0c\u5219\u65e0\u9700\u5206\u914d\u4efb\u4f55\u5185\u5bb9\u3002\n    Requests []DeviceRequest\n    // \u5206\u914d\u7ed9\u58f0\u660e\u7684\u8bbe\u5907\u96c6\u5fc5\u987b\u6ee1\u8db3\u8fd9\u4e9b\u7ea6\u675f\u3002\n    Constraints []DeviceConstraint\n    // \u6b64\u5b57\u6bb5\u4fdd\u5b58\u53ef\u6ee1\u8db3\u6b64\u58f0\u660e\u4e2d\u7684\u8bf7\u6c42\u7684\u591a\u4e2a\u6f5c\u5728\u9a71\u52a8\u7a0b\u5e8f\u7684\u914d\u7f6e\u3002\n    Config []DeviceClaimConfiguration\n    \n    // Score *SomeScoringStruct\n}\ntype DeviceRequest struct {\n    // pod.spec.containers[].resources.claims \u7684\u5f15\u7528\u540d\u79f0\n    Name string\n    // DeviceClass\n    DeviceClassName string\n    // \u9009\u62e9\u5668\u5b9a\u4e49\u7279\u5b9a\u8bbe\u5907\u5fc5\u987b\u6ee1\u8db3\u7684\u6761\u4ef6\n    Selectors []DeviceSelector\n    // AllocationMode \u5206\u914d\u6a21\u5f0f\n    // - ExactCount: \u6b64\u8bf7\u6c42\u9488\u5bf9\u7279\u5b9a\u6570\u91cf\u7684\u8bbe\u5907\u3002\u8fd9\u662f\u9ed8\u8ba4\u503c\u3002\u786e\u5207\u6570\u91cf\u5728\u8ba1\u6570\u5b57\u6bb5\u4e2d\u63d0\u4f9b\u3002\n    // - All: \u6b64\u8bf7\u6c42\u9488\u5bf9\u6c60\u4e2d\u7684\u6240\u6709\u5339\u914d\u8bbe\u5907\u3002\u5982\u679c\u67d0\u4e9b\u8bbe\u5907\u5df2\u5206\u914d\uff0c\u5219\u5206\u914d\u5c06\u5931\u8d25\uff0c\u9664\u975e\u8bf7\u6c42 adminAccess\u3002\n    AllocationMode DeviceAllocationMode\n    // \u5f53\u6a21\u5f0f\u662fExactCount\uff0c\u9700\u8981\u6307\u5b9a\u8bf7\u6c42\u7684\u6570\u91cf; \u9ed8\u8ba4\u503c\u662f1\n    Count int64\n    // AdminAccess \u8868\u793a\u8fd9\u662f\u5bf9\u8bbe\u5907\u7684\u7ba1\u7406\u8bbf\u95ee\u6743\u7684\u58f0\u660e\n    AdminAccess bool\n}\ntype DeviceSelector struct {\n    // CEL \u5305\u542b\u7528\u4e8e\u9009\u62e9\u8bbe\u5907\u7684 CEL \u8868\u8fbe\u5f0f\u3002\n    CEL *CELDeviceSelector\n}\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"type ResourceClaimStatus struct {\n    // \u4e00\u65e6claim\u88ab\u6210\u529f\u5206\u914d\uff0c\u5c31\u4f1a\u8bbe\u7f6e\u5206\u914d\u3002\n    Allocation *AllocationResult\n\n    // ReservedFor \u8868\u793a\u5f53\u524d\u5141\u8bb8\u4f7f\u7528\u58f0\u660e\u7684\u5b9e\u4f53\n    ReservedFor []ResourceClaimConsumerReference\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"deviceclass",children:(0,r.jsx)(s.strong,{children:"DeviceClass"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"type DeviceClassSpec struct {\n    // \u6bcf\u4e2a\u9009\u62e9\u5668\u90fd\u5fc5\u987b\u7531\u901a\u8fc7\u6b64\u7c7b\u58f0\u660e\u7684\u8bbe\u5907\u6765\u6ee1\u8db3\u3002\n    Selectors []DeviceSelector\n    // Config \u5b9a\u4e49\u9002\u7528\u4e8e\u901a\u8fc7\u6b64\u7c7b\u58f0\u660e\u7684\u6bcf\u4e2a\u8bbe\u5907\u7684\u914d\u7f6e\u53c2\u6570\u3002\n    Config []DeviceClassConfiguration\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"resourceclaimtemplate",children:(0,r.jsx)(s.strong,{children:"ResourceClaimTemplate"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"\n// ResourceClaimTemplateSpec \u5305\u542b ResourceClaim \u7684\u5143\u6570\u636e\u548c\u5b57\u6bb5\u3002\ntype ResourceClaimTemplateSpec struct {\n    metav1.ObjectMeta\n    // ResourceClaimSpec\n    Spec ResourceClaimSpec\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"\u7ba1\u7406\u8d44\u6e90",children:(0,r.jsx)(s.strong,{children:"\u7ba1\u7406\u8d44\u6e90"})}),"\n",(0,r.jsxs)(s.p,{children:["kubelet \u5fc5\u987b\u786e\u4fdd\u5728\u8fd0\u884c\u4f7f\u7528\u7279\u5b9a\u8d44\u6e90\u5b9e\u4f8b\u7684\u7b2c\u4e00\u4e2a Pod \u4e4b\u524d\uff0c\u8d44\u6e90\u5728\u8282\u70b9\u4e0a\u53ef\u7528\uff0c\u5e76\u5728\u6700\u540e\u4e00\u4e2a\u4f7f\u7528\u8be5\u8d44\u6e90\u7684 Pod \u7ec8\u6b62\u540e\uff0c\u4f7f\u8d44\u6e90\u5728\u5176\u4ed6\u5730\u65b9\u518d\u6b21\u53ef\u7528\u3002\u5bf9\u4e8e\u8fd9\u4e24\u4e2a\u64cd\u4f5c\uff0ckubelet \u90fd\u4f1a\u8c03\u7528 kubelet \u63d2\u4ef6\u7684\u4e24\u4e2a\u65b9\u6cd5 ",(0,r.jsx)(s.code,{children:"NodeUnprepareResources"}),"  \u548c ",(0,r.jsx)(s.code,{children:"NodePrepareResources"}),"\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u8fd9\u662f\u8282\u70b9\u4e0a\u4f7f\u7528\u7279\u5b9a\u8d44\u6e90\u5b9e\u4f8b\u7684\u6700\u540e\u4e00\u4e2a Pod\uff0c\u5219\u5fc5\u987b\u5728\u5141\u8bb8\u5220\u9664 Pod \u4e4b\u524d\u6210\u529f\u8c03\u7528 ",(0,r.jsx)(s.code,{children:"NodeUnprepareResource"}),"\uff08\u89c1\u4e0b\u6587\uff09\u3002\u8fd9\u786e\u4fdd\u4e86\u7f51\u7edc\u8fde\u63a5\u8d44\u6e90\u518d\u6b21\u53ef\u7528\u4e8e\u5176\u4ed6 Pod\uff0c\u5305\u62ec\u90a3\u4e9b\u53ef\u80fd\u88ab\u8c03\u5ea6\u5230\u5176\u4ed6\u8282\u70b9\u7684 Pod\u3002\u5b83\u8fd8\u6307\u793a\u89e3\u9664\u5206\u914d\u548c\u5220\u9664 ResourceClaim \u662f\u5b89\u5168\u7684\u3002"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"image.png",src:n(563).A+"",width:"569",height:"753"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"NodePrepareResource"})}),"\n",(0,r.jsx)(s.p,{children:"\u5f53\u60f3\u8981\u4f7f\u7528\u6307\u5b9a\u8d44\u6e90\u7684 Pod \u88ab\u8c03\u5ea6\u5230\u8282\u70b9\u4e0a\u65f6\uff0ckubelet \u4f1a\u8c03\u7528\u6b64 RPC\u3002\u63d2\u4ef6\u5e94\u5047\u5b9a\u6b64 RPC \u5c06\u5728\u5c06\u4f7f\u7528\u8d44\u6e90\u7684\u8282\u70b9\u4e0a\u6267\u884c\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u63d2\u4ef6\u5e94\u786e\u4fdd\u5206\u914d\u7684\u8d44\u6e90\u6709 CDI \u683c\u5f0f\u7684 json \u6587\u4ef6\u3002\u5728\u521b\u5efa\u4f7f\u7528\u8be5\u8d44\u6e90\u7684\u5bb9\u5668\u4e4b\u524d\uff0c\u8fd0\u884c\u65f6\u5e94\u4f7f\u7528\u8fd9\u4e9b\u6587\u4ef6\u6765\u66f4\u65b0\u8fd0\u884c\u65f6\u914d\u7f6e\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'message NodePrepareResourcesRequest {\n     // \u9700\u8981\u51c6\u5907\u7684 ResourceClaims \u5217\u8868\u3002\n     repeated Claim claims = 1;\n}\n\nmessage NodePrepareResourcesResponse {\n    // \u5df2\u5b8c\u6210\u51c6\u5907\u7684 ResourceClaims\n    map<string, NodePrepareResourceResponse> claims = 1;\n}\n\nmessage NodePrepareResourceResponse {\n    // \u8bbe\u5907\u5217\u8868\n    repeated Device devices = 1;\n    //  \u9519\u8bef\u4fe1\u606f\n    string error = 2;\n}\nmessage Device {\n    // \u58f0\u660e\u4e2d\u4e0e\u6b64\u8bbe\u5907\u5173\u8054\u7684\u8bf7\u6c42\u3002\n    repeated string request_names = 1;\n    // \u5305\u542b\u8bbe\u5907\u7684\u6c60\n    string pool_name = 2;\n    // \u8bbe\u5907\u672c\u8eab\n    string device_name = 3;\n    // \u5355\u4e2a\u8bbe\u5907\u5b9e\u4f8b\u53ef\u80fd\u6620\u5c04\u5230\u591a\u4e2a CDI \u8bbe\u5907 ID\u3002\n    repeated string cdi_device_ids = 4 [(gogoproto.customname) = "CDIDeviceIDs"];\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["\u6b64\u5904",(0,r.jsx)(s.code,{children:"\u7684request_names"}),"\u5141\u8bb8 kubelet \u4e3a\u4f7f\u7528\u7279\u5b9a\u8bf7\u6c42\u4e2d\u7684\u8bbe\u5907\u800c\u4e0d\u662f\u58f0\u660e\u7684\u6240\u6709\u8bbe\u5907\u7684\u5bb9\u5668\u627e\u5230\u6b63\u786e\u7684 CDI ID\u3002"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"NodeUnprepareResources"})}),"\n",(0,r.jsxs)(s.p,{children:["Kubelet \u63d2\u4ef6\u5fc5\u987b\u5b9e\u73b0\u6b64 RPC \u8c03\u7528\u3002\u6b64 RPC \u662f\xa0",(0,r.jsx)(s.code,{children:"NodePrepareResource"}),"\xa0\u7684\u53cd\u5411\u64cd\u4f5c\u3002\u6b64 RPC \u5fc5\u987b\u64a4\u6d88\u76f8\u5e94\xa0",(0,r.jsx)(s.code,{children:"NodePrepareResource"}),"\xa0\u7684\u5de5\u4f5c\u3002\u5bf9\u4e8e\u6bcf\u4e2a\u6210\u529f\u7684\xa0",(0,r.jsx)(s.code,{children:"NodePrepareResource\uff0ckubelet"}),"\xa0\u81f3\u5c11\u5e94\u8c03\u7528\u4e00\u6b21\u6b64 RPC\u3002\u63d2\u4ef6\u5e94\u5047\u5b9a\u6b64 RPC \u5c06\u5728\u4f7f\u7528\u8d44\u6e90\u7684\u8282\u70b9\u4e0a\u6267\u884c\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"message NodeUnprepareResourcesRequest {\n    // \u9700\u8981\u91ca\u653e\u7684 ResourceClaims \u5217\u8868\u3002\n    repeated Claim claims = 1;\n}\nmessage NodeUnprepareResourcesResponse {\n    // \u5df2\u64a4\u9500\u51c6\u5907\u7684 ResourceClaims\u3002\n    map<string, NodeUnprepareResourceResponse> claims = 1;\n}\nmessage NodeUnprepareResourceResponse {\n    // \u5982\u679c\u6709\u9519\u8bef\n    string error = 1;\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u53c2\u8003\uff1a",(0,r.jsx)(s.a,{href:"https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/4381-dra-structured-parameters#design-details",children:"https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/4381-dra-structured-parameters#design-details"})]})]})}function u(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7185:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/components-cdd8236535605340dbffe6cf495c5e1a.png"},563:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/kubelet-690b9f266ea83de09273b90bfca89a85.png"},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var r=n(6540);const c={},o=r.createContext(c);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);