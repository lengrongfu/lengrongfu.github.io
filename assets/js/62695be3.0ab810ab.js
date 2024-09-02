"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[2041],{6251:(e,d,o)=>{o.r(d),o.d(d,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>t});var n=o(4848),r=o(8453);const s={slug:"kubelet-five-analyze",title:"kubelet\u6e90\u7801\u5206\u6790 podManager\u548cpodWorkers\u3001workQueue",authors:["rongfu"],tags:["Kubernetes","Kubelet"]},c=void 0,i={permalink:"/blog/kubelet-five-analyze",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-08-31-kubelet-five-analyze.md",source:"@site/blog/2024-08-31-kubelet-five-analyze.md",title:"kubelet\u6e90\u7801\u5206\u6790 podManager\u548cpodWorkers\u3001workQueue",description:"\u5728 Kubelet \u6e90\u7801\u5206\u6790\u5de5\u4f5c\u539f\u7406\u4e2d\u4ecb\u7ecd\u8fc7, Kubelet \u4e2d\u6709\u4e24\u4e2a\u6838\u5fc3\u7684\u6570\u636e\u7ed3\u6784\u5b57\u6bb5, podManager \u548c podWorkers, \u73b0\u5728\u6211\u4eec\u6765\u4e00\u63a2\u7a76\u7adf\u3002",date:"2024-08-31T00:00:00.000Z",tags:[{inline:!1,label:"Kubernetes",permalink:"/blog/tags/kubernetes",description:"kubernetes"},{inline:!1,label:"Kubelet",permalink:"/blog/tags/Kubelet",description:"Kubelet"}],readingTime:6.735,hasTruncateMarker:!0,authors:[{name:"Leng",title:"Softwore Developer",url:"https://github.com/lengrongfu",image_hrl:"https://avatars.githubusercontent.com/u/15009201?v=4",socials:{github:"https://github.com/lengrongfu"},key:"rongfu",page:null}],frontMatter:{slug:"kubelet-five-analyze",title:"kubelet\u6e90\u7801\u5206\u6790 podManager\u548cpodWorkers\u3001workQueue",authors:["rongfu"],tags:["Kubernetes","Kubelet"]},unlisted:!1,prevItem:{title:"Kubelet \u6e90\u7801\u5206\u6790 volumeManager",permalink:"/blog/kubelet-volumemanager"},nextItem:{title:"kubelet\u6e90\u7801\u5206\u6790 syncLoopIteration\uff08\u4e09\uff09 probeCH",permalink:"/blog/kubelet-fore-analyze"}},l={authorsImageUrls:[void 0]},t=[{value:"MirrorPod",id:"mirrorpod",level:2},{value:"podManager",id:"podmanager",level:2},{value:"podWorkers",id:"podworkers",level:2},{value:"workQueue",id:"workqueue",level:2}];function a(e){const d={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.p,{children:["\u5728 ",(0,n.jsx)(d.code,{children:"Kubelet"})," \u6e90\u7801\u5206\u6790\u5de5\u4f5c\u539f\u7406\u4e2d\u4ecb\u7ecd\u8fc7, ",(0,n.jsx)(d.code,{children:"Kubelet"})," \u4e2d\u6709\u4e24\u4e2a\u6838\u5fc3\u7684\u6570\u636e\u7ed3\u6784\u5b57\u6bb5, ",(0,n.jsx)(d.strong,{children:(0,n.jsx)(d.code,{children:"podManager"})})," \u548c ",(0,n.jsx)(d.strong,{children:(0,n.jsx)(d.code,{children:"podWorkers"})}),", \u73b0\u5728\u6211\u4eec\u6765\u4e00\u63a2\u7a76\u7adf\u3002"]}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.strong,{children:(0,n.jsx)(d.code,{children:"podManager"})})," \u548c ",(0,n.jsx)(d.strong,{children:(0,n.jsx)(d.code,{children:"podWorkers"})})," \u91cc\u9762\u4fdd\u5b58\u7684 ",(0,n.jsx)(d.code,{children:"Pod"})," \u5185\u5bb9\u53ef\u80fd\u4e0d\u4e00\u6837\uff0c\u6bd4\u5982\uff1a"]}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:["\u5f3a\u5236\u5220\u9664 ",(0,n.jsx)(d.code,{children:"Pod"})," \u65f6\uff0c\u4f1a\u628a ",(0,n.jsx)(d.strong,{children:(0,n.jsx)(d.code,{children:"podManager"})}),"  \u4e2d\u7684\u8bb0\u5f55\u5220\u9664\u6389\uff0c\u4f46\u662f**",(0,n.jsx)(d.code,{children:"podWorkers"}),"**  \u4e2d\u7684 ",(0,n.jsx)(d.code,{children:"Pod"})," \u4f1a\u6267\u884c\u6b63\u5e38\u7684\u5220\u9664\u6d41\u7a0b\uff1b\u6b64\u65f6\u5c31\u51fa\u73b0 ",(0,n.jsx)(d.strong,{children:(0,n.jsx)(d.code,{children:"podManager"})})," \u4e0d\u5b58\u5728**\uff0c",(0,n.jsx)(d.code,{children:"podWorkers"}),"** \u5b58\u5728\u7684\u95ee\u9898**\u3002**"]}),"\n",(0,n.jsxs)(d.li,{children:["\u65b0\u521b\u5efa\u7684 ",(0,n.jsx)(d.code,{children:"Pod"})," \u4f1a\u5148\u4fdd\u5b58\u5230 ",(0,n.jsx)(d.code,{children:"podManager"})," \u4e2d\uff0c\u542f\u52a8\u65f6\u518d\u4fdd\u5b58\u5230 ",(0,n.jsx)(d.code,{children:"podWorkers"})," \u4e2d\u3002"]}),"\n"]}),"\n",(0,n.jsx)(d.p,{children:"\u5b83\u4eec\u8981\u505a\u7684\u5c31\u662f\u65e0\u9650\u8d8b\u8fd1\u4e8e\u4e00\u6837\u3002"}),"\n",(0,n.jsx)(d.h2,{id:"mirrorpod",children:"MirrorPod"}),"\n",(0,n.jsxs)(d.p,{children:["\u5728 ",(0,n.jsx)(d.code,{children:"PodManager"})," \u4e2d\u5b58\u5728 ",(0,n.jsx)(d.code,{children:"podByFullName"})," \u548c ",(0,n.jsx)(d.code,{children:"mirrorPodByFullName"})," \u7684\u4e24\u4e2a\u5b57\u6bb5\uff0c\u5206\u522b\u4fdd\u5b58 ",(0,n.jsx)(d.code,{children:"Pod"})," \u4fe1\u606f\u548c ",(0,n.jsx)(d.code,{children:"MirrorPod"})," \u7684\u3002"]}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-go",children:"\tpodByFullName       map[string]*v1.Pod\n\tmirrorPodByFullName map[string]*v1.Pod\n"})}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"pod"})," \u6765\u6e90\u5206\u4e3a ",(0,n.jsx)(d.code,{children:"file"}),"  ",(0,n.jsx)(d.code,{children:"http"}),"  ",(0,n.jsx)(d.code,{children:"apiserver"})," \u4e09\u4e2a ",(0,n.jsx)(d.code,{children:"source"})," , \u5176\u4e2d ",(0,n.jsx)(d.code,{children:"apiserver"})," \u4e2d\u7684 ",(0,n.jsx)(d.code,{children:"pod"})," \u79f0\u4e3a\u666e\u901a",(0,n.jsx)(d.code,{children:"pod"}),"\uff0c\u5176\u4ed6\u6765\u6e90\u7684 ",(0,n.jsx)(d.code,{children:"pod"})," \u79f0\u4e3a ",(0,n.jsx)(d.code,{children:"static pod"}),", \u4e3a\u4e86\u7ba1\u7406 ",(0,n.jsx)(d.code,{children:"pod"})," \u65b9\u4fbf, ",(0,n.jsx)(d.code,{children:"kubelet"})," \u4f1a\u5728 ",(0,n.jsx)(d.code,{children:"apiserver"})," \u4e0a\u4e3a",(0,n.jsx)(d.code,{children:"static pod"})," \u751f\u6210\u5bf9\u5e94\u7684 ",(0,n.jsx)(d.code,{children:"pod"}),"\uff0c\u8fd9\u7c7b\u578b ",(0,n.jsx)(d.code,{children:"pod"})," \u79f0\u4e3a ",(0,n.jsx)(d.code,{children:"mirror pod"})," ."]}),"\n",(0,n.jsxs)(d.p,{children:["\u5373\u53ef\u4ee5\u7406\u89e3\u662f\u8fd9\u4e2a ",(0,n.jsx)(d.code,{children:"pod"})," \u7684\u66ff\u8eab, \u57fa\u672c\u4e0a\u8ddf ",(0,n.jsx)(d.code,{children:"static pod"}),"\u4e00\u6a21\u4e00\u6837\uff0c\u53ea\u6709 ",(0,n.jsx)(d.code,{children:"uid"})," \u4e0d\u4e00\u6837\u548c ",(0,n.jsx)(d.code,{children:"annotations"})," \u91cc\u591a\u4e86 ",(0,n.jsx)(d.code,{children:"kubernetes.io/config.mirror"})," ."]}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"mirror pod"})," \u662f\u4fdd\u5b58\u5728 ",(0,n.jsx)(d.code,{children:"apiserver"})," \u4e2d\u7684 ",(0,n.jsx)(d.code,{children:"static pod"})," \u7684\u4e00\u4e2a\u955c\u50cf\uff0c\u4f46\u662f\u64cd\u4f5c ",(0,n.jsx)(d.code,{children:"mirror pod"})," \u5bf9 ",(0,n.jsx)(d.code,{children:"static pod"})," \u7684\u5f71\u54cd\u662f\u4e0d\u4e00\u6837\u7684\u3002"]}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.img,{alt:"image.png",src:o(34).A+"",width:"1025",height:"382"})}),"\n",(0,n.jsxs)(d.p,{children:["\u5982\u679c\u8981\u5220\u9664 ",(0,n.jsx)(d.code,{children:"static pod"})," ,\u6bd4\u5982\u662f\u4ece\u6587\u4ef6\u521b\u5efa\u7684\uff0c\u5219\u9700\u8981\u5220\u9664\u6587\u4ef6\u624d\u80fd\u5220\u9664\u8fd9\u4e2a ",(0,n.jsx)(d.code,{children:"static pod"})," \u548c ",(0,n.jsx)(d.code,{children:"mirror pod"})," ."]}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"static pod\u79fb\u9664\u6d41\u7a0b:"})}),"\n",(0,n.jsxs)(d.ol,{children:["\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"podConfig"})," \u611f\u77e5\u5230 ",(0,n.jsx)(d.code,{children:"static"})," \u6587\u4ef6\u7684\u79fb\u9664\uff0c\u89e6\u53d1 ",(0,n.jsx)(d.code,{children:"SyncLoop REMOVE"})]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"podWoker"})," \u6267\u884c ",(0,n.jsx)(d.code,{children:"syncTerminatingPod"}),"\uff08\u6267\u884c\u505c\u6b62\u5bb9\u5668\u548c ",(0,n.jsx)(d.code,{children:"sandbox"}),"\uff09"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"PLEG"})," \u611f\u77e5\u5230 ",(0,n.jsx)(d.code,{children:"sanbox"})," \u548c ",(0,n.jsx)(d.code,{children:"container"})," \u7684\u9000\u51fa"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"podWoker"})," \u6267\u884c ",(0,n.jsx)(d.code,{children:"syncTerminatedPod"}),"\uff08\u79fb\u9664 ",(0,n.jsx)(d.code,{children:"cgroup"}),"\uff0c\u66f4\u65b0 ",(0,n.jsx)(d.code,{children:"mirror pod"}),"\u7684 ",(0,n.jsx)(d.code,{children:"status"}),"\uff0c\u7b49\u5f85pod \u7684 ",(0,n.jsx)(d.code,{children:"volume umount"})," \u5b8c\u6210\uff09"]}),"\n",(0,n.jsxs)(d.li,{children:["\u611f\u77e5\u5230 ",(0,n.jsx)(d.code,{children:"mirror pod"})," \u7684 ",(0,n.jsx)(d.code,{children:"status"})," \u66f4\u65b0"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"housekeeping"})," \u89e6\u53d1\uff0c\u6267\u884c\u6e05\u7406\u5de5\u4f5c\uff08 ",(0,n.jsx)(d.code,{children:"podWorker"})," \u7684\u79fb\u9664 ",(0,n.jsx)(d.code,{children:"mirror pod"})," \u7684\u5220\u9664 ",(0,n.jsx)(d.code,{children:"pod volume"})," \u76ee\u5f55\u79fb\u9664\uff09"]}),"\n",(0,n.jsxs)(d.li,{children:["\u611f\u77e5\u5230 ",(0,n.jsx)(d.code,{children:"mirror pod"})," \u7684\u5220\u9664\u548c\u4ece ",(0,n.jsx)(d.code,{children:"apiserver"}),"\u4e0a\u79fb\u9664"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"garbageCollector"})," \u6267\u884c ",(0,n.jsx)(d.code,{children:"sandbox"})," \u548c\u5bb9\u5668\u7684\u6e05\u7406\uff0c\u5e76\u79fb\u9664 ",(0,n.jsx)(d.code,{children:"pod"})," \u65e5\u5fd7\u76ee\u5f55"]}),"\n"]}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.img,{alt:"image.png",src:o(1867).A+"",width:"1495",height:"513"})}),"\n",(0,n.jsx)(d.h2,{id:"podmanager",children:"podManager"}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"podManager"})," \u4e3b\u8981\u662f\u5b58\u50a8\u5e94\u8be5\u5728 ",(0,n.jsx)(d.code,{children:"kubelet"})," \u4e0a\u8fd0\u884c\u7684 ",(0,n.jsx)(d.code,{children:"Pod"})," \u7684\u96c6\u5408\uff0c\u5b83\u5305\u62ec ",(0,n.jsx)(d.code,{children:"admitted pods"})," \u548c ",(0,n.jsx)(d.code,{children:"mirror pods"})," ."]}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"podManager"})," \u7684\u6570\u636e\u7531 ",(0,n.jsx)(d.code,{children:"kubelet"})," \u5199\u5165\uff0c\u4e3b\u8981\u662f\u63a5\u6536\u4e0d\u540c\u6765\u6e90  ",(0,n.jsx)(d.code,{children:"API"})," ",(0,n.jsx)(d.code,{children:"URL"})," ",(0,n.jsx)(d.code,{children:"Static Fiel"})," \uff0c\u6700\u540e\u5199\u5165\u5230 ",(0,n.jsx)(d.strong,{children:(0,n.jsx)(d.code,{children:"podUpdateCh"})})," \u8fd9\u4e2a ",(0,n.jsxs)(d.strong,{children:[(0,n.jsx)(d.code,{children:"chan"}),"."]})]}),"\n",(0,n.jsxs)(d.p,{children:["\u6211\u4eec\u628a ",(0,n.jsx)(d.code,{children:"Manager"})," \u8fd9\u4e2a\u63a5\u53e3\u7684\u65b9\u6cd5\u6309\u529f\u80fd\u5212\u5206"]}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:["\n",(0,n.jsx)(d.p,{children:"\u8bfb"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-go",children:"GetPodByFullName(podFullName string) (*v1.Pod, bool)\nGetPodByName(namespace, name string) (*v1.Pod, bool)\nGetPodByUID(types.UID) (*v1.Pod, bool)\nGetPodByMirrorPod(*v1.Pod) (*v1.Pod, bool)\nGetMirrorPodByPod(*v1.Pod) (*v1.Pod, bool)\nGetPodAndMirrorPod(*v1.Pod) (pod, mirrorPod *v1.Pod, wasMirror bool)\nGetPods() []*v1.Pod\nGetPodsAndMirrorPods() (allPods []*v1.Pod, allMirrorPods []*v1.Pod, orphanedMirrorPodFullnames []string)\nTranslatePodUID(uid types.UID) kubetypes.ResolvedPodUID\nGetUIDTranslations() (podToMirror map[kubetypes.ResolvedPodUID]kubetypes.MirrorPodUID, mirrorToPod map[kubetypes.MirrorPodUID]kubetypes.ResolvedPodUID)\n"})}),"\n"]}),"\n",(0,n.jsxs)(d.li,{children:["\n",(0,n.jsx)(d.p,{children:"\u5199"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-go",children:"SetPods(pods []*v1.Pod) #\u5df2\u7ecf\u672a\u4f7f\u7528\u4e86\uff0c\u4e0d\u5206\u6790\nAddPod(pod *v1.Pod)\nUpdatePod(pod *v1.Pod)\nRemovePod(pod *v1.Pod)\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(d.p,{children:"\u6211\u4eec\u4e3b\u8981\u6765\u5206\u6790\u4e0b\u5199\u7684\u8fd9\u51e0\u4e2a\u64cd\u4f5c\u6d41\u7a0b\uff1a"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.img,{src:"https://firebasestorage.googleapis.com/v0/b/notiondiagram.appspot.com/o/diagram%2Fm5smUNzLG7NDZmSPY82qhFvWnsu1%2F22b7bc7d-7fc7-4db3-be5e-edefe4f87cfd.svg?alt=media&token=a917d00f-1d65-4b82-8fa6-d0f33595f64d",alt:"a"})}),"\n",(0,n.jsxs)(d.p,{children:["\u5b83\u4ece ",(0,n.jsx)(d.code,{children:"PodUpdate"})," \u63a5\u6536\u5230\u64cd\u4f5c\u4e4b\u540e\u4f1a\u6309\u7167 ",(0,n.jsx)(d.code,{children:"PodOperation"})," \u7c7b\u578b\u6765\u533a\u5206\u64cd\u4f5c\u65b9\u6cd5\uff0c\u76ee\u524d\u4f7f\u7528\u4e86\u4e94\u79cd\u64cd\u4f5c\u65b9\u6cd5\uff0c\u6700\u7ec8\u5bf9\u5e94\u5230 ",(0,n.jsx)(d.code,{children:"podManager"})," \u4e0a\u6709\u4e09\u4e2a\u64cd\u4f5c\u65b9\u6cd5\u3002"]}),"\n",(0,n.jsxs)(d.p,{children:["\u4e3b\u6267\u884c\u4e0a\u8ff0\u56db\u79cd\u65b9\u6cd5\u7684\u65f6\u5019\u4f1a\u6267\u884c ",(0,n.jsx)(d.code,{children:"podWorkers"})," \u7684 ",(0,n.jsx)(d.code,{children:"UpdatePod"})," \u65b9\u6cd5,\u5c31\u662f\u8c03\u7528\u4e0d\u540c\u7684 ",(0,n.jsx)(d.code,{children:"UpdatePodOptions"})," \u64cd\u4f5c\u7c7b\u578b\uff0c\u5206\u522b\u5bf9\u5e94\u56db\u79cd ",(0,n.jsx)(d.code,{children:"Option"})," , \u5176\u4e2d\u9700\u8981\u6839\u636e\u8fd9\u4e2a ",(0,n.jsx)(d.code,{children:"Pod"})," \u662f\u5426\u662f ",(0,n.jsx)(d.code,{children:"MirrorPod"})," \u6765\u51b3\u5b9a\u5b83\u7684\u64cd\u4f5c\u7c7b\u578b\u3002"]}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.img,{src:"https://firebasestorage.googleapis.com/v0/b/notiondiagram.appspot.com/o/diagram%2Fm5smUNzLG7NDZmSPY82qhFvWnsu1%2F2fed5e50-56ef-4e06-9e72-4f107bd08551.svg?alt=media&token=96e8476f-98a9-43ce-97c9-239599e59c1e",alt:"a"})}),"\n",(0,n.jsx)(d.h2,{id:"podworkers",children:"podWorkers"}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"podWorkers"})," \u7b80\u5355\u8bf4\u5c31\u662f\u901a\u8fc7\u63a7\u5236 ",(0,n.jsx)(d.code,{children:"Pod"})," \u7684\u751f\u547d\u5468\u671f\u6765\u66f4\u65b0 ",(0,n.jsx)(d.code,{children:"Pod"})," \u7684\u771f\u5b9e\u72b6\u6001\uff0c\u6bcf\u4e2a ",(0,n.jsx)(d.code,{children:"Pod"})," \u4f1a\u6709\u4e00\u4e2a\u534f\u7a0b\u6267\u884c ",(0,n.jsx)(d.code,{children:"podWorkerLoop"})," \u3002"]}),"\n",(0,n.jsxs)(d.p,{children:["\u6211\u4eec\u6765\u5206\u6790\u4e0b ",(0,n.jsx)(d.code,{children:"PodWorkers"})," \u7684\u65b9\u6cd5\uff1a"]}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-go",children:"type PodWorkers interface {\n\t// \u901a\u8fc7 podworker pod \u53d1\u9001\u6539\u53d8\uff0c\u7136\u540epod\u4f1a\u6309\u7167FIFO\u7684\u987a\u5e8f\u8fdb\u5165\u81ea\u5df1\u7684\u534f\u7a0b\u5904\u7406\uff0cpodUID\u662f\u534f\u7a0b\u7684key\uff0c\n\t// \u7136\u540e\u8fdb\u5165 syncPod \u65b9\u6cd5\u4f1a\u76f4\u5230\u88abkubelet\u9a71\u9010\u6216\u8005\u662f\u6807\u8bb0deleted\u3001Succeeded\u3001Failed\uff0c\u4e00\u65e6\u53d1\u751f\u9a71\u9010\u6216\u8005delete\n\t// syncTerminatingPod \u65b9\u6cd5\u5c06\u88ab\u8c03\u7528\uff0c\u540e\u7eed\u7684UpdatePod\u8c03\u7528\u90fd\u5c06\u88ab\u5ffd\u7565\uff0c\u76f4\u5230\u5b83\u6210\u529f\uff0c\u7ec8\u6b62\u7684pod\u4e0d\u4f1a\u88ab\u542f\u52a8\u3002\n\tUpdatePod(options UpdatePodOptions)\n}\n"})}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"UpdatePodOptions"})," \u7ed3\u6784\u4f53\u5206\u6790\uff1a"]}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-go",children:"type UpdatePodOptions struct {\n\t//\u66f4\u65b0\u7c7b\u578b(create, update, sync, kill).\n\tUpdateType kubetypes.SyncPodType\n\t// Pod to update. Required.\n\tPod *v1.Pod\n\t// MirrorPod is the mirror pod if Pod is a static pod. Optional when UpdateType\n\t// is kill or terminated.\n\tMirrorPod *v1.Pod\n\t// RunningPod \u4e0d\u518d\u5b58\u5728\u7684\u8fd0\u884c\u65f6 pod\uff0c\u53ea\u6709\u6267\u884cPodCleanup\u7684\u65f6\u5019\u624d\u4f1a\u4e0d\u4e3a\u7a7a\n\tRunningPod *kubecontainer.Pod\n\t// KillPodOptions \u7528\u4e8e\u8986\u76d6 pod \u7684\u9ed8\u8ba4\u7ec8\u6b62\u884c\u4e3a\u6216\u5728\u64cd\u4f5c\u5b8c\u6210\u540e\u66f4\u65b0 pod \u72b6\u6001\u3002\n\tKillPodOptions *KillPodOptions\n}\n"})}),"\n",(0,n.jsxs)(d.p,{children:["\u6211\u4eec\u6765\u5206\u6790 ",(0,n.jsx)(d.code,{children:"podWorkers"})," \u7684\u7ed3\u6784\u4f53\uff1a"]}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-go",children:"type podWorkers struct {\n\t// \n\tpodUpdates map[types.UID]chan struct{}\n\t// WorkQueue \u5141\u8bb8\u4f7f\u7528\u65f6\u95f4\u6233\u5bf9\u9879\u76ee\u8fdb\u884c\u6392\u961f\u3002\u5982\u679c\u65f6\u95f4\u6233\u5df2\u8fc7\u671f\uff0c\u5219\u9879\u76ee\u5c06\u88ab\u89c6\u4e3a\u5df2\u51c6\u5907\u597d\u8fdb\u884c\u5904\u7406\u3002\n\tworkQueue queue.WorkQueue\n\n\t// \u8fd9\u4e2a\u51fd\u6570\u540d\u5b57\u5c31\u53ebpodSyncer\n\tpodSyncer podSyncer\n\n}\n"})}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.img,{src:"https://firebasestorage.googleapis.com/v0/b/notiondiagram.appspot.com/o/diagram%2Fm5smUNzLG7NDZmSPY82qhFvWnsu1%2Fd3660f8b-b079-48a3-935f-f409c3745cfc.svg?alt=media&token=2c2cf998-a701-41f9-a923-78e7d6757c63",alt:"a"})}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"syncPod"})," \u662f\u6574\u4e2a ",(0,n.jsx)(d.code,{children:"kubelet"})," \u7684\u6838\u5fc3\uff0cpod \u7684\u521b\u5efa\u4e0e\u5220\u9664\u90fd\u7531\u5b83\u6765\u5904\u7406\u3002\u7531\u4e8e ",(0,n.jsx)(d.code,{children:"syncPod()"})," \u6d89\u53ca\u5230\u592a\u591a\u7684 ",(0,n.jsx)(d.code,{children:"kubelet"})," \u4e2d\u529f\u80fd\u5305\uff0c\u6240\u4ee5\u7b49 ",(0,n.jsx)(d.code,{children:"volumeManager"}),", ",(0,n.jsx)(d.code,{children:"podManager"})," \u7b49\u4ecb\u7ecd\u5b8c\u6bd5\u518d\u8be6\u7ec6\u5206\u6790\u3002\u73b0\u5728\u53ea\u9700\u77e5\u9053 ",(0,n.jsx)(d.code,{children:"syncPod()"})," \u4f1a\u5904\u7406\u4f20\u8fdb\u6765\u7684 ",(0,n.jsx)(d.code,{children:"pod"}),"\uff0c\u7ef4\u62a4\u7269\u7406\u673a\u4e0a\u7684 ",(0,n.jsx)(d.code,{children:"pod"})," \u548c ",(0,n.jsx)(d.code,{children:"etcd"})," \u4e2d\u7684 ",(0,n.jsx)(d.code,{children:"pod"})," \u7684\u4e00\u81f4\u6027\u3002"]}),"\n",(0,n.jsx)(d.p,{children:"\u5b58\u5728\u4e00\u4e2a\u7591\u95ee\uff1aPod \u662f\u88ab\u593a\u534f\u7a0b\u5e76\u884c\u7684\u5904\u7406\u7684\uff0c\u90a3\u9488\u5bf9\u8d44\u6e90\u5206\u914d\u662f\u5426\u4f1a\u5b58\u5728\u7ade\u4e89\u5173\u7cfb\u3002\u8fd9\u4e2a\u7559\u5230\u540e\u9762\u53bb\u5206\u6790\u3002"}),"\n",(0,n.jsx)(d.h2,{id:"workqueue",children:"workQueue"}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"workQueu"})," \u662f\u4e00\u4e2a\u5141\u8bb8\u4f7f\u7528\u65f6\u95f4\u6233\u5bf9\u9879\u76ee\u8fdb\u884c\u6392\u961f\u7684 ",(0,n.jsx)(d.code,{children:"Queue"})," , \u5982\u679c\u65f6\u95f4\u6233\u5df2\u8fc7\u671f\uff0c\u5219\u9879\u76ee\u5c06\u88ab\u89c6\u4e3a\u5df2\u51c6\u5907\u597d\u8fdb\u884c\u5904\u7406\u3002"]}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"WorkQueue"})," \u53ea\u5305\u62ec\u4e24\u4e2a\u6838\u5fc3\u7684\u65b9\u6cd5, ",(0,n.jsx)(d.code,{children:"GetWork()"})," \u8fd4\u56de\u7684\u662f\u6240\u6709\u5df2\u7ecf\u51c6\u5907\u597d\u7684 ",(0,n.jsx)(d.code,{children:"Worker"})," ."]}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-go",children:"type WorkQueue interface {\n\t// GetWork dequeues and returns all ready items.\n\tGetWork() []types.UID\n\t// Enqueue inserts a new item or overwrites an existing item.\n\tEnqueue(item types.UID, delay time.Duration)\n}\n"})}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"basicWorkQueue"})," \u7684\u5185\u90e8\u7ed3\u6784\u662f\u4e00\u4e2a ",(0,n.jsx)(d.code,{children:"Map"}),": ",(0,n.jsx)(d.code,{children:"key"})," \u662f\u4e00\u4e2a ",(0,n.jsx)(d.code,{children:"UID"}),", ",(0,n.jsx)(d.code,{children:"value"})," \u65f6\u4e00\u4e2a ",(0,n.jsx)(d.code,{children:"Time"}),"."]}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-go",children:"type basicWorkQueue struct {\n\tclock clock.Clock\n\tlock  sync.Mutex\n\tqueue map[types.UID]time.Time\n}\n"})})]})}function p(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},34:(e,d,o)=>{o.d(d,{A:()=>n});const n=o.p+"assets/images/mirror-delete-pod-35079e6f8ad51f2f5e61e1b69c42566f.png"},1867:(e,d,o)=>{o.d(d,{A:()=>n});const n=o.p+"assets/images/static-delete-pod-376d5405cb5a938fb9dcdd8e5a6019a8.png"},8453:(e,d,o)=>{o.d(d,{R:()=>c,x:()=>i});var n=o(6540);const r={},s=n.createContext(r);function c(e){const d=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:d},e.children)}}}]);