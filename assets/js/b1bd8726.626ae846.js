"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[1485],{7291:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>t});var d=s(4848),c=s(8453);const l={slug:"k8s-debug",title:"\u5f00\u53d1 Kubernetes debug \u7684\u51e0\u79cd\u624b\u6bb5",authors:["rongfu"],tags:["Developer Env"]},i=void 0,r={permalink:"/blog/k8s-debug",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-30-k8s-debug.md",source:"@site/blog/2024-09-30-k8s-debug.md",title:"\u5f00\u53d1 Kubernetes debug \u7684\u51e0\u79cd\u624b\u6bb5",description:"\u6211\u4eec\u5728\u5f00\u53d1 Kubernetes \u9047\u5230\u6700\u5927\u7684\u96be\u9898\u5c31\u662f\u5982\u4f55\u8c03\u8bd5\u7ec4\u4ef6\uff0c\u56e0\u4e3a\u5b83\u6d89\u53ca\u5230\u7684\u7ec4\u4ef6\u8f83\u591a\uff0c\u5de5\u4f5c\u6d41\u7a0b\u8f83\u957f\uff0c\u5982\u679c\u662f\u8f83\u5c0f\u7684\u4ee3\u7801\u6539\u52a8\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u5355\u5143\u6d4b\u8bd5\u3001E2E  \u7b49\u624b\u6bb5\u8fdb\u884c\u529f\u80fd\u9a8c\u8bc1\u3002",date:"2024-09-30T00:00:00.000Z",tags:[{inline:!1,label:"Developer Env",permalink:"/blog/tags/developer-env",description:"Developer Env"}],readingTime:7.075,hasTruncateMarker:!1,authors:[{name:"Leng",title:"Softwore Developer",url:"https://github.com/lengrongfu",image_hrl:"https://avatars.githubusercontent.com/u/15009201?v=4",socials:{github:"https://github.com/lengrongfu"},key:"rongfu",page:null}],frontMatter:{slug:"k8s-debug",title:"\u5f00\u53d1 Kubernetes debug \u7684\u51e0\u79cd\u624b\u6bb5",authors:["rongfu"],tags:["Developer Env"]},unlisted:!1,nextItem:{title:"Kubelet\u6e90\u7801\u5206\u6790\uff1aPodAdmit",permalink:"/blog/kubelet-podadmit"}},o={authorsImageUrls:[void 0]},t=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u5b89\u88c5 Kubernetes \u96c6\u7fa4",id:"\u5b89\u88c5-kubernetes-\u96c6\u7fa4",level:3},{value:"\u5b9e\u73b0\u9700\u6c42",id:"\u5b9e\u73b0\u9700\u6c42",level:2},{value:"\u672c\u5730\u5f00\u53d1 K8s",id:"\u672c\u5730\u5f00\u53d1-k8s",level:3},{value:"\u8fdc\u7a0b\u5f00\u53d1 K8s",id:"\u8fdc\u7a0b\u5f00\u53d1-k8s",level:3},{value:"\u6d4b\u8bd5\u9700\u6c42",id:"\u6d4b\u8bd5\u9700\u6c42",level:2},{value:"\u547d\u4ee4\u884c\u6d4b\u8bd5",id:"\u547d\u4ee4\u884c\u6d4b\u8bd5",level:3},{value:"IDE debug",id:"ide-debug",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["\u6211\u4eec\u5728\u5f00\u53d1 ",(0,d.jsx)(n.code,{children:"Kubernetes"})," \u9047\u5230\u6700\u5927\u7684\u96be\u9898\u5c31\u662f\u5982\u4f55\u8c03\u8bd5\u7ec4\u4ef6\uff0c\u56e0\u4e3a\u5b83\u6d89\u53ca\u5230\u7684\u7ec4\u4ef6\u8f83\u591a\uff0c\u5de5\u4f5c\u6d41\u7a0b\u8f83\u957f\uff0c\u5982\u679c\u662f\u8f83\u5c0f\u7684\u4ee3\u7801\u6539\u52a8\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u5355\u5143\u6d4b\u8bd5\u3001E2E  \u7b49\u624b\u6bb5\u8fdb\u884c\u529f\u80fd\u9a8c\u8bc1\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4f46\u662f\u5982\u679c\u9047\u5230\u8f83\u5927\u529f\u80fd\u7684\u529f\u80fd\uff0c\u8fd8\u662f\u9700\u8981\u8fdb\u884c\u6d4b\u8bd5\uff0c\u4e43\u81f3\u4e8e\u8fdb\u884c debug\uff0c\u4f46\u662f\u5b58\u5728\u5982\u4e0b\u51e0\u4e2a\u95ee\u9898\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u901a\u5e38\u5f00\u53d1\u90fd\u662f\u57fa\u4e8e\u6700\u65b0\u4ee3\u7801\u5f00\u53d1\u7684\uff0c\u5c31\u5bfc\u81f4\u7248\u672c\u8f83\u65b0\uff1b\u90a3\u4f9d\u8d56\u7684\u7ec4\u4ef6\u7248\u672c\u4e5f\u9700\u8981\u6bd4\u8f83\u9ad8\u624d\u884c\uff1b\u6bd4\u5982\u5f00\u53d1 ",(0,d.jsx)(n.code,{children:"Kubelet"})," , \u90a3\u4f9d\u8d56\u7684 ",(0,d.jsx)(n.code,{children:"kube-apiserver"})," \u7248\u672c\u5c31\u9700\u8981\u63a5\u8fd1\u6700\u65b0\uff0c\u5177\u4f53\u53ef\u4ee5\u770b ",(0,d.jsx)(n.code,{children:"kubernetes"})," \u5b98\u7f51\u7684",(0,d.jsx)(n.a,{href:"https://kubernetes.io/releases/version-skew-policy/",children:"\u7248\u672c\u5339\u914d"}),"\u6587\u6863\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Kubernetes"})," \u7ec4\u4ef6\u542f\u52a8\u901a\u5e38\u4f1a\u4f9d\u8d56\u5176\u5b83\u670d\u52a1\uff0c\u4ee5\u53ca\u96c6\u7fa4\u914d\u7f6e\uff0c\u89e3\u51b3\u8d77\u6765\u6bd4\u8f83\u9ebb\u70e6\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"IDE"})," \u8fdb\u884c ",(0,d.jsx)(n.code,{children:"debug"})," \u6709\u96be\u5ea6\uff0c\u9700\u8981\u89e3\u51b3\u670d\u52a1\u4f9d\u8d56\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4e0b\u9762\u4ece\u672c\u4eba\u7684\u5f00\u53d1 ",(0,d.jsx)(n.code,{children:"debug"})," \u7ecf\u9a8c\u4e2d\u603b\u7ed3\u4e86\u5e38\u7528\u7684\u4e24\u79cd\u65b9\u5f0f\uff0c\u4e00\u79cd\u662f\u901a\u8fc7\u6253\u5370\u65e5\u5fd7\u7136\u540e\u90e8\u7f72\u670d\u52a1\u6765\u5206\u6790\u6267\u884c\u903b\u8f91\u3001\u4e00\u79cd\u662f\u76f4\u63a5\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"IDE"})," \u8fdb\u884c ",(0,d.jsx)(n.code,{children:"DEBUG"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["\u8981\u5f00\u53d1\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"Kubernetes"})," \u7684\u9700\u6c42\uff0c\u901a\u5e38\u9700\u8981\u6709\u51c6\u5907\u5de5\u4f5c\u3001\u5b9e\u73b0\u9700\u6c42\u548c\u6d4b\u8bd5\u4e09\u4e2a\u6b65\u9aa4\uff1b"]}),"\n",(0,d.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4e00\u53f0 ",(0,d.jsx)(n.code,{children:"Linux"})," \u670d\u52a1\u5668\uff0c\u6700\u597d\u662f\u5b89\u88c5 ",(0,d.jsx)(n.code,{children:"Ubuntu22.04"})," \u7684\u64cd\u4f5c\u7cfb\u7edf\uff0c\u6216\u8005\u6839\u636e\u9700\u6c42\u6765\u51b3\u5b9a\u9700\u8981\u5b89\u88c5\u4ec0\u4e48\u3002\u8d44\u6e90\u6700\u5c11 ",(0,d.jsx)(n.code,{children:"8"})," \u6838 CPU ",(0,d.jsx)(n.code,{children:"16G"})," \u7684\u5185\u5b58 ",(0,d.jsx)(n.code,{children:"150G"})," \u7684\u78c1\u76d8\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Linux"})," \u670d\u52a1\u5668\u673a\u5668\u5b89\u88c5\u597d\u6700\u65b0\u7684 ",(0,d.jsx)(n.code,{children:"golang"})," \u7248\u672c\uff0c\u5f00\u901a ",(0,d.jsx)(n.code,{children:"ssh"})," \u7aef\u53e3\uff0c\u4fee\u6539\u4f7f\u5176\u53ef\u4ee5\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"root"})," \u8fdb\u884c\u8fdc\u7a0b\u767b\u5f55\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u90e8\u7f72\u4e00\u4e2a\u6700\u65b0\u7684 ",(0,d.jsx)(n.code,{children:"Kubernetes"})," \u96c6\u7fa4\uff0c\u6700\u597d\u4f7f\u7528\u4e8c\u8fdb\u5236\u542f\u52a8 ",(0,d.jsx)(n.code,{children:"k8s"})," \u7684\u6838\u5fc3\u7ec4\u4ef6\uff0c\u8fd9\u6837\u4fbf\u4e8e\u8c03\u8bd5\uff1b\u5355\u8282\u70b9\u8db3\u591f\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u5b89\u88c5-kubernetes-\u96c6\u7fa4",children:"\u5b89\u88c5 Kubernetes \u96c6\u7fa4"}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u91cc\u4ecb\u7ecd\u4e00\u4e2a\u5de5\u5177 ",(0,d.jsx)(n.a,{href:"https://github.com/lengrongfu/kubeasz/blob/master/docs/setup/quickStart.md",children:(0,d.jsx)(n.code,{children:"kubeasz"})})," , \u53ef\u4ee5\u5feb\u901f\u7684\u5b89\u88c5\u51fa\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"kubernetes"})," \u5355\u673a\u96c6\u7fa4\uff0c\u5e76\u4e14\u4ee5\u4e8c\u8fdb\u5236\u7684\u5f62\u5f0f\u542f\u52a8\u6838\u5fc3\u7ec4\u4ef6\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4eec\u4e3a\u4ec0\u4e48\u4e0d\u7528 ",(0,d.jsx)(n.code,{children:"kubeadm"})," \u5462\uff1f\u56e0\u4e3a\u5b83\u542f\u52a8\u7684\u6838\u5fc3 ",(0,d.jsx)(n.code,{children:"pod"})," \u7684\u65b9\u5f0f\u662f\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"static"})," \u7684\u5f62\u5f0f\u542f\u52a8\u7684\uff0c\u8fd9\u6837\u5c31\u5bfc\u81f4\u4e0d\u80fd\u8fdb\u884c\u8c03\u8bd5\uff0c\u800c\u4e14\u9700\u8981\u7f16\u8bd1\u955c\u50cf\u624d\u80fd\u8fdb\u884c\u65e5\u5fd7\u8c03\u8bd5\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5b89\u88c5\u6b65\u9aa4\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ export release=3.6.5\n$ wget https://github.com/lengrongfu/kubeasz/releases/download/${release}/ezdown\n$ chmod +x ./ezdown\n$ ./ezdown -D\n$ ./ezdown -S\n$ docker exec -it kubeasz ezctl start-aio\n$ source ~/.bashrc\n$ kubectl version\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u5b9e\u73b0\u9700\u6c42",children:"\u5b9e\u73b0\u9700\u6c42"}),"\n",(0,d.jsxs)(n.p,{children:["\u56e0\u4e3a ",(0,d.jsx)(n.code,{children:"Kubernetes"})," \u5927\u591a\u6570\u90fd\u662f\u5728 ",(0,d.jsx)(n.code,{children:"Linux"})," \u4e0a\u8fd0\u884c\uff0c\u5f88\u591a\u903b\u8f91\u9700\u8981 ",(0,d.jsx)(n.code,{children:"Linux"})," \u64cd\u4f5c\u7cfb\u7edf\u4e0b\u624d\u53ef\u4ee5\u7f16\u8f91\uff0c\u901a\u5e38\u5927\u5bb6\u7684\u672c\u5730\u5f00\u673a\u90fd\u662f ",(0,d.jsx)(n.code,{children:"MacOS"})," \uff0c\u5bfc\u81f4\u4e0d\u80fd\u7f16\u5199 ",(0,d.jsx)(n.code,{children:"Linux"}),"  \u76f8\u5173\u7684\u903b\u8f91\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4e0b\u9762\u6211\u4ee5\u672c\u4eba\u7ecf\u5e38\u4f7f\u7528\u7684\u4e24\u79cd\u65b9\u6848\u6765\u4ecb\u7ecd\uff0c\u4e00\u79cd\u662f\u5728\u672c\u5730\u5f00\u53d1\uff0c\u4e00\u79cd\u662f\u5728\u8fdc\u7a0b\u5f00\u53d1\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u672c\u5730\u5f00\u53d1-k8s",children:"\u672c\u5730\u5f00\u53d1 K8s"}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4eec\u5728\u672c\u673a\u4e0a\u542f\u52a8\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"Linux"})," \u64cd\u4f5c\u7cfb\u7edf\u7684\u5bb9\u5668\uff0c\u6216\u8005\u662f\u7528  ",(0,d.jsx)(n.code,{children:"Multipass"})," \u6765\u542f\u52a8 ",(0,d.jsx)(n.code,{children:"Ubuntu"})," \u865a\u62df\u673a."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Multipass"})," \u529f\u80fd\u5f88\u5f3a\u5927\uff0c\u5c31\u662f\u4f7f\u7528\u6bd4\u8f83\u7e41\u7410\uff0c\u4e4b\u524d\u5c0f\u7f16\u4e5f\u7528\u8fc7\uff0c\u4f46\u662f\u540e\u9762\u53d1\u73b0\u542f\u52a8\u4e00\u4e2a\u5bb9\u5668\u4e5f\u591f\u7528\u4e86\uff0c\u5c31\u4e00\u76f4\u6cbf\u7528\u5230\u73b0\u5728\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6784\u5efa\u4e00\u4e2a\u5305\u542b\u73af\u5883\u7684\u955c\u50cf\uff0c\u9996\u5148\u901a\u8fc7\u5982\u4e0b\u7684 ",(0,d.jsx)(n.code,{children:"Dockerfile"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:"FROM ubuntu:22.04\nRUN apt-get update\nRUN apt-get install -y openssh-server\nRUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config\nRUN sed -i 's/PermitRootLogin.*/PermitRootLogin yes/' /etc/ssh/sshd_config\nRUN echo 'root:123456' | chpasswd\n\nRUN apt-get install -y git vim curl wget cmake\nRUN apt install software-properties-common -y\nRUN add-apt-repository ppa:longsleep/golang-backports\nRUN apt update\nRUN apt install golang-go -y\nRUN /etc/init.d/ssh start\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u7136\u540e\u8fdb\u884c\u6784\u5efa\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ docker build -t golang-env:dev -f Dockerfile .\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u542f\u52a8\u5bb9\u5668\uff0c\u5e76\u4e14\u628a\u672c\u5730\u7684 ",(0,d.jsx)(n.code,{children:"golang"})," \u76ee\u5f55\u6302\u8f7d\u5230\u5bb9\u5668\u76ee\u5f55\u4e2d\uff0c\u8fd9\u6837\u907f\u514d\u4fee\u6539\u7684\u4ee3\u7801\u4e22\u5931\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:"$ docker run  -d -p 50024:22 -v /Users/{local}/goworspace/code/src:/root/go/src golang-env:dev /usr/sbin/sshd -D\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u7136\u540e\u7ee7\u7eed\u53c2\u8003\u8fdc\u7a0b\u5f00\u53d1 ",(0,d.jsx)(n.code,{children:"k8s"})," \u90e8\u5206\uff0c\u7528\u672c\u5730\u5f00\u53d1\u7684\u597d\u5904\u662f\u53ef\u4ee5\u7ed9 ",(0,d.jsx)(n.code,{children:"Docker"})," \u914d\u7f6e\u672c\u5730\u7684\u4ee3\u7406\u3001\u53ef\u4ee5\u767b\u5f55 ",(0,d.jsx)(n.code,{children:"Github Copilot"})," \u7b49\u63d2\u4ef6\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u8fdc\u7a0b\u5f00\u53d1-k8s",children:"\u8fdc\u7a0b\u5f00\u53d1 K8s"}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u91cc\u6211\u4eec\u901a\u8fc7\u8fde\u63a5\u8fdc\u7a0b ",(0,d.jsx)(n.code,{children:"Linux"})," \u670d\u52a1\u5668\u6216\u8005\u662f\u672c\u5730\u7684\u5bb9\u5668\u6765\u6784\u5efa\u4e00\u4e2a\u5f00\u53d1\u73af\u5883\u3002"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u9996\u5148\u9700\u8981\u4e0b\u8f7d\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"jetbrains"})," ****\u5bb6\u6700\u65b0\u7684\u4efb\u610f\u4e00\u4e2a\u7f16\u8f91\u5668\uff0c\u6253\u5f00\u7f16\u8f91\u5668\u4e4b\u540e\u4e0d\u8981\u6253\u5f00\u9879\u76ee\uff0c\u5728\u7f16\u8f91\u5668\u9996\u9875\u6709\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"Remote Development"})," \u7684\u83dc\u5355\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"image.png",src:s(1732).A+"",width:"426",height:"626"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u70b9\u51fb ",(0,d.jsx)(n.code,{children:"SSH"})," \u8fdb\u884c\u521b\u5efa Project \u548c\u914d\u7f6e\uff1b\u8fd9\u91cc\u586b\u5199\u7528\u6237\u540d\u3001\u4e3b\u673a\u5730\u5740\u548c\u7aef\u53e3"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"image.png",src:s(7335).A+"",width:"3802",height:"584"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u8fde\u63a5\u4e4b\u540e\u70b9\u51fb + \u53f7\u6dfb\u52a0\u9879\u76ee"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"image.png",src:s(8420).A+"",width:"3364",height:"162"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u4e4b\u540e\u9009\u62e9\u597d IDE version \u548c \u9879\u76ee\u76ee\u5f55\uff0c\u70b9\u51fb\u53f3\u4e0b\u89d2\u7684 Start IDE and Connect. \u6309\u94ae\u5373\u53ef\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"image.png",src:s(6495).A+"",width:"2000",height:"162"})}),"\n",(0,d.jsxs)(n.p,{children:["\u6210\u529f\u4e4b\u540e\u5c06\u6253\u5f00 ",(0,d.jsx)(n.code,{children:"Golang"})," \u7f16\u8f91\u5668\u7684\u754c\u9762\uff0c\u548c\u5728\u672c\u5730\u5f00\u53d1\u4e00\u6837\uff1b\u5269\u4e0b\u7684\u5c31\u662f\u7f16\u5199\u4ee3\u7801\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u6d4b\u8bd5\u9700\u6c42",children:"\u6d4b\u8bd5\u9700\u6c42"}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u91cc\u6211\u4eec\u4ee5\u6d4b\u8bd5 ",(0,d.jsx)(n.code,{children:"Kubelet"})," \u4e3a\u4f8b\u6765\u8bf4\u660e\uff0c\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"kubeaze"})," \u5b89\u88c5\u7684 ",(0,d.jsx)(n.code,{children:"Kubernetes"})," \u96c6\u7fa4\u6838\u5fc3\u7ec4\u4ef6\u90fd\u662f\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"systemctl"})," \u542f\u52a8\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u6d4b\u8bd5\u7684\u65f6\u5019\u53ef\u4ee5\u4f7f\u5176\u505c\u6b62\uff0c\u7136\u540e\u542f\u52a8\u81ea\u5df1\u4fee\u6539\u4ee3\u7801\u7684\u670d\u52a1\u5373\u53ef\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5047\u5982\u6211\u4eec\u901a\u8fc7\u6253\u5370\u65e5\u5fd7\u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u6d4b\u8bd5\uff0c \u53ea\u9700\u8981\u628a\u672c\u5730\u4ee3\u7801\u63d0\u4ef7\u5230\u670d\u52a1\u5668\u4e0a\u5373\u53ef\u3002\u7136\u540e\u6267\u884c ",(0,d.jsx)(n.code,{children:"make all"})," \u6216\u8005 ",(0,d.jsx)(n.code,{children:"make all WHAT=cmd/kubelet GOFLAGS=-v"})," \u53ea\u7f16\u8bd1\u6307\u5b9a\u9879\u76ee\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u7f16\u8bd1\u751f\u6210\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u5728\xa0",(0,d.jsx)(n.code,{children:"_output/bin/"}),"\xa0\u76ee\u5f55\u4e0b\uff0c\u8fd9\u4e2a\u662f\u7f51\u7edc\u4e0a\u901a\u5e38\u7684\u8bf4\u6cd5\uff0c\u4f46\u662f\u5f88\u5947\u602a\u6211\u7684\u7f16\u8bd1\u540e\u4e0d\u518d\u8fd9\u4e2a\u76ee\u5f55\u4e0b\uff0c\u5728 ",(0,d.jsx)(n.code,{children:"~/go/bin"})," \u76ee\u5f55\u4e0b\uff0c\u53ef\u4ee5\u90fd\u627e\u627e\u770b\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u7136\u540e\u67e5\u770b\u4e0b\u7f16\u8bd1\u540e\u7684\u7248\u672c\u4fe1\u606f ",(0,d.jsx)(n.code,{children:"~/go/bin/kubelet \u2014version"})," ."]}),"\n",(0,d.jsx)(n.h3,{id:"\u547d\u4ee4\u884c\u6d4b\u8bd5",children:"\u547d\u4ee4\u884c\u6d4b\u8bd5"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"ps"})," \u83b7\u53d6 ",(0,d.jsx)(n.code,{children:"kubelet"})," \u542f\u52a8\u547d\u4ee4\uff0c\u9700\u8981\u5148\u627e\u5230\u542f\u52a8\u53c2\u6570\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u505c\u6b62\u4e4b\u524d\u7684 ",(0,d.jsx)(n.code,{children:"kubelet"})," \u670d\u52a1 ",(0,d.jsx)(n.code,{children:"systemctl stop kubelet.service"})]}),"\n",(0,d.jsx)(n.li,{children:"\u4f7f\u7528\u7f16\u8bd1\u540e\u7684\u4e8c\u8fdb\u5236\u542f\u52a8\u4ee5\u53ca\u6dfb\u52a0\u9ed8\u8ba4\u7684\u53c2\u6570\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"ide-debug",children:"IDE debug"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"ps"})," \u83b7\u53d6 ",(0,d.jsx)(n.code,{children:"kubelet"})," \u542f\u52a8\u547d\u4ee4\uff0c\u9700\u8981\u5148\u627e\u5230\u542f\u52a8\u53c2\u6570\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u505c\u6b62\u4e4b\u524d\u7684 ",(0,d.jsx)(n.code,{children:"kubelet"})," \u670d\u52a1 ",(0,d.jsx)(n.code,{children:"systemctl stop kubelet.service"})]}),"\n",(0,d.jsx)(n.li,{children:"\u628a\u542f\u52a8\u53c2\u6570\u586b\u5199\u8fdb\u53bb\u5373\u53ef\u8fdb\u884c Debug."}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"image.png",src:s(1120).A+"",width:"1600",height:"1360"})})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},8420:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/remote-add-47740e2e36625a3b323a59ca68412aab.png"},6495:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/remote-connect-e5640f17f0da3b30f2d79019bd285f79.png"},1120:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/remote-debug-902aae2f40f1b51b694455f29446971d.png"},1732:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/remote-dev-05d2e8465355e4bfbdc0e24b263f4a91.png"},7335:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/remote-ssh-7aae9e9ad27302191128f2a08ac35337.png"},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var d=s(6540);const c={},l=d.createContext(c);function i(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);