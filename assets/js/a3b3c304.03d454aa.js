"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[4300],{6928:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=t(4848),A=t(8453);const r={slug:"Linux-Network-Namespace",title:"Linux\u7f51\u7edc\u865a\u62df\u5316:\u63a2\u7d22NetWork Namespace",authors:["rongfu"],tags:["Kubernetes","Kubernetes Network"]},i=void 0,l={permalink:"/blog/Linux-Network-Namespace",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-12-Linux-Network-Namespace.md",source:"@site/blog/2022-05-12-Linux-Network-Namespace.md",title:"Linux\u7f51\u7edc\u865a\u62df\u5316:\u63a2\u7d22NetWork Namespace",description:"NetWork Namespace \u662f Linux 2.6 \u7248\u672c\u5f15\u5165\u7684\uff0c\u4f5c\u7528\u662f\u9694\u79bb\u51fa\u4e00\u4e2a\u72ec\u7acb\u7684\u7f51\u7edc\u6808\uff08\u5305\u62ec\u8bbe\u5907\u3001IP\u3001\u8def\u7531\u8868\u3001\u7aef\u53e3\u3001\u9632\u706b\u5899\u7b49\uff09\uff0c\u5b83\u80fd\u521b\u5efa\u591a\u4e2a\u9694\u79bb\u7684\u7f51\u7edc\u7a7a\u95f4\u3002",date:"2022-05-12T00:00:00.000Z",tags:[{inline:!1,label:"Kubernetes",permalink:"/blog/tags/kubernetes",description:"kubernetes"},{inline:!1,label:"Kubernetes Network",permalink:"/blog/tags/kubernetes-network",description:"Kubernetes Network"}],readingTime:7.795,hasTruncateMarker:!0,authors:[{name:"Leng",title:"Softwore Developer",url:"https://github.com/lengrongfu",image_hrl:"https://avatars.githubusercontent.com/u/15009201?v=4",socials:{github:"https://github.com/lengrongfu"},key:"rongfu",page:null}],frontMatter:{slug:"Linux-Network-Namespace",title:"Linux\u7f51\u7edc\u865a\u62df\u5316:\u63a2\u7d22NetWork Namespace",authors:["rongfu"],tags:["Kubernetes","Kubernetes Network"]},unlisted:!1,prevItem:{title:"\u8bfb\u300a\u4e91\u8ba1\u7b97\u90a3\u4e9b\u4e8b\u513f\u300b",permalink:"/blog/\u8bfb\u4e91\u8ba1\u7b97\u90a3\u4e9b\u4e8b\u513f"},nextItem:{title:"Kubernetes\u7f51\u7edc\u4e4bCNI\u89c4\u8303\u89e3\u8bfb",permalink:"/blog/k8s\u4e4bCNI\u89c4\u8303\u89e3\u8bfb"}},o={authorsImageUrls:[void 0]},a=[{value:"NetWork Namespace\u7b80\u4ecb",id:"network-namespace\u7b80\u4ecb",level:2},{value:"ip netns \u547d\u4ee4\u624b\u518c",id:"ip-netns-\u547d\u4ee4\u624b\u518c",level:3},{value:"\u7ba1\u7406Network Namespace",id:"\u7ba1\u7406network-namespace",level:3},{value:"\u5355\u4e3b\u673a\u4e24\u4e2a NetWork Namespace \u4e4b\u95f4\u901a\u4fe1",id:"\u5355\u4e3b\u673a\u4e24\u4e2a-network-namespace-\u4e4b\u95f4\u901a\u4fe1",level:2},{value:"\u5355\u4e3b\u673a\u591a\u4e2a NetWork Namespace \u4e4b\u95f4\u901a\u4fe1",id:"\u5355\u4e3b\u673a\u591a\u4e2a-network-namespace-\u4e4b\u95f4\u901a\u4fe1",level:2},{value:"\u8de8\u4e3b\u673a\u591a\u4e2a NetWork Namespace \u4e4b\u95f4\u901a\u4fe1",id:"\u8de8\u4e3b\u673a\u591a\u4e2a-network-namespace-\u4e4b\u95f4\u901a\u4fe1",level:2}];function c(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,A.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"NetWork Namespace"})," \u662f ",(0,s.jsx)(n.code,{children:"Linux 2.6"})," \u7248\u672c\u5f15\u5165\u7684\uff0c\u4f5c\u7528\u662f\u9694\u79bb\u51fa\u4e00\u4e2a\u72ec\u7acb\u7684\u7f51\u7edc\u6808\uff08\u5305\u62ec\u8bbe\u5907\u3001IP\u3001\u8def\u7531\u8868\u3001\u7aef\u53e3\u3001\u9632\u706b\u5899\u7b49\uff09\uff0c\u5b83\u80fd\u521b\u5efa\u591a\u4e2a\u9694\u79bb\u7684\u7f51\u7edc\u7a7a\u95f4\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"network-namespace\u7b80\u4ecb",children:"NetWork Namespace\u7b80\u4ecb"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"NetWork Namespace"})," \u662f ",(0,s.jsx)(n.code,{children:"Linux 2.6"})," \u7248\u672c\u5f15\u5165\u7684\uff0c\u4f5c\u7528\u662f\u9694\u79bb\u51fa\u4e00\u4e2a\u72ec\u7acb\u7684\u7f51\u7edc\u6808\uff08\u5305\u62ec\u8bbe\u5907\u3001IP\u3001\u8def\u7531\u8868\u3001\u7aef\u53e3\u3001\u9632\u706b\u5899\u7b49\uff09\uff0c\u5b83\u80fd\u521b\u5efa\u591a\u4e2a\u9694\u79bb\u7684\u7f51\u7edc\u7a7a\u95f4\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728",(0,s.jsx)(n.code,{children:"Linux"}),"\u7cfb\u7edf\u4e0a\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(n.code,{children:"ip"}),"\u547d\u4ee4\u6765\u521b\u5efa\u548c\u7ba1\u7406",(0,s.jsx)(n.code,{children:"Network namespace"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"ip-netns-\u547d\u4ee4\u624b\u518c",children:"ip netns \u547d\u4ee4\u624b\u518c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"SYNOPSIS\n       ip netns [ list ]\uff1a\u5217\u51fa\u6240\u6709\u7684network namespace\n\n       ip netns add NETNSNAME\uff1a\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684ns\n\n       ip [-all] netns del [ NETNSNAME ]\uff1a\u5220\u9664\u6240\u6709\u6216\u8005\u6307\u5b9a\u7684ns\n\n       ip netns set NETNSNAME NETNSID\uff1a\u4fee\u6539netnsname\u6216\u8005netnsid\n\n       ip netns identify [ PID ]\uff1a\u628a\u67d0\u4e2a\u8fdb\u7a0b\u52a0\u5165\u5230network namespace\u4e2d\n\n       ip netns pids NETNSNAME\uff1a\u5217\u51fa\u52a0\u5165\u5f53\u524dns\u7684pid\n\n       ip [-all] netns exec [ NETNSNAME ] command...\uff1a\u5728netns\u4e2d\u6267\u884c\u547d\u4ee4\uff0c\u5982ping\u3001ifconfig\n\n       ip netns monitor\uff1a\u76d1\u63a7\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6309\u7167\u64cd\u4f5c\u624b\u518c\u4e2d\u7684\u547d\u4ee4\u5c31\u53ef\u4ee5\u521b\u5efa ",(0,s.jsx)(n.code,{children:"ns"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"\u7ba1\u7406network-namespace",children:"\u7ba1\u7406Network Namespace"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u521b\u5efaNS"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"[root@k8s-master-168 ~]# ip netns add nets1\n[root@k8s-master-168 ~]# ip netns list\nnets1\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u67e5\u770bNS\u4e2d\u7684\u7f51\u7edc\u4fe1\u606f"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"[root@k8s-master-168 ~]# ip netns exec nets1 ip link list\n1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN mode DEFAULT group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n\n[root@k8s-master-168 ~]# ip netns exec nets1 route\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\n\n[root@k8s-master-168 ~]# ip netns exec nets1 iptables -L\nChain INPUT (policy ACCEPT)\ntarget     prot opt source               destination         \n\nChain FORWARD (policy ACCEPT)\ntarget     prot opt source               destination         \n\nChain OUTPUT (policy ACCEPT)\ntarget     prot opt source               destination\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4ece\u7ed3\u679c\u6765\u770b\uff0c\u521b\u5efa\u7684",(0,s.jsx)(n.code,{children:"nets1"}),"\u7f51\u7edc\u6808\u4e2d\u53ea\u6709",(0,s.jsx)(n.code,{children:"lo"}),"\u8fd9\u4e2a\u672a\u542f\u7528\u7684\u56de\u73af\u8bbe\u5907\uff0c\u5e76\u4e14\u6ca1\u6709\u914d\u7f6e\u8def\u7531\u548c\u9632\u706b\u5899\u89c4\u5219\u7b49\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u521b\u5efa\u4e00\u4e2a\u7f51\u7edc\u8bbe\u5907\u5e76\u914d\u7f6eIP"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# \u521b\u5efaveth pair\u865a\u62df\u7f51\u7edc\u8bbe\u5907\u7f51\u5361\n# \u521b\u5efa\u4e00\u4e2aveth0\u548cveth1\u7684veth \u5bf9\uff0c\u628aveth1\u63d2\u5165\u5230nets1\u7684\u7f51\u7edc\u6808\u4e2d\uff0cveth0\u9ed8\u8ba4\u5728\u8ddfnetwork namespace\u4e2d\u3002\n[root@k8s-master-168 ~]# ip link add  veth0 type veth peer name veth1\n[root@k8s-master-168 ~]# ip link set veth1 netns nets1\n# \u6b64\u65f6\u67e5\u770b\u5c31\u53d1\u73b0\u591a\u4e86\u4e00\u4e2a\u7f51\u7edc\u8bbe\u5907veth1\uff0c\u4f46\u662f\u8bbe\u5907\u6ca1\u6709\u542f\u52a8\uff0c\u5e76\u4e14\u6ca1\u6709\u914d\u7f6eIP\n[root@k8s-master-168 ~]# ip netns exec nets1 ip link list\n1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN mode DEFAULT group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n9: veth1@if10: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000\n    link/ether aa:54:ee:12:3a:34 brd ff:ff:ff:ff:ff:ff link-netnsid 0\n# \u542f\u7528\u7f51\u5361\uff0c\u5e76\u8bbe\u7f6eip\n[root@k8s-master-168 ~]# ip netns exec nets1 ifconfig veth1 10.1.1.1/24 up\n[root@k8s-master-168 ~]# ip netns exec nets1 ifconfig\nveth1: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500\n        inet 10.1.1.1  netmask 255.255.255.0  broadcast 10.1.1.255\n        ether aa:54:ee:12:3a:34  txqueuelen 1000  (Ethernet)\n        RX packets 0  bytes 0 (0.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 0  bytes 0 (0.0 B)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5220\u9664veth\u5bf9\u548cns"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# veth\u5bf9\u662f\u4e00\u4e2a\u6574\u4f53\uff0c\u5220\u9664veth0\uff0cveth1\u4e5f\u5c31\u4e0d\u5b58\u5728\u3002\n[root@k8s-master-168 ~]# ip link del veth0\n[root@k8s-master-168 ~]# ip netns del nets1\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5355\u4e3b\u673a\u4e24\u4e2a-network-namespace-\u4e4b\u95f4\u901a\u4fe1",children:"\u5355\u4e3b\u673a\u4e24\u4e2a NetWork Namespace \u4e4b\u95f4\u901a\u4fe1"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"veth1",src:t(2248).A+"",width:"483",height:"201"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3b\u673a\u4e0a\u521b\u5efa\u4e24\u4e2a",(0,s.jsx)(n.code,{children:"ns"}),"\uff0c\u5b83\u4eec\u4e4b\u95f4\u5982\u4f55\u901a\u4fe1\u5462\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(n.code,{children:"veth pair"}),"\u8fdb\u884c\u8fde\u63a5\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u521b\u5efa\u4e24\u4e2a",(0,s.jsx)(n.code,{children:"ns"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"#\u521b\u5efa\u4e24\u4e2ans\n[root@k8s-master-168 ~]# ip netns add nets1\n[root@k8s-master-168 ~]# ip netns add nets2\n\n# \u521b\u5efaveth\uff0c\u5e76\u5206\u522b\u63d2\u5165ns\u4e2d\n[root@k8s-master-168 ~]# ip link add veth0 type veth peer name veth1\n[root@k8s-master-168 ~]# ip link set veth0 netns nets1\n[root@k8s-master-168 ~]# ip link set veth1 netns nets2\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u914d\u7f6e\u4e24\u4e2aveth\u7f51\u7edc\u8bbe\u5907"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"[root@k8s-master-168 ~]# ip netns exec nets2 ifconfig veth1 10.1.1.2/24 up\n[root@k8s-master-168 ~]# ip netns exec nets1 ifconfig veth0 10.1.1.1/24 up\n\n# \u68c0\u67e5\u662f\u5426\u914d\u7f6e\u6210\u529f\n[root@k8s-master-168 ~]# ip netns exec nets1 ifconfig\nveth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 10.1.1.1  netmask 255.255.255.0  broadcast 10.1.1.255\n        inet6 fe80::b4c2:70ff:fe8d:3b0e  prefixlen 64  scopeid 0x20<link>\n        ether b6:c2:70:8d:3b:0e  txqueuelen 1000  (Ethernet)\n        RX packets 8  bytes 656 (656.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 8  bytes 656 (656.0 B)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\n\n[root@k8s-master-168 ~]# ip netns exec nets2 ifconfig\nveth1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 10.1.1.2  netmask 255.255.255.0  broadcast 10.1.1.255\n        inet6 fe80::f046:44ff:fe62:1ecc  prefixlen 64  scopeid 0x20<link>\n        ether f2:46:44:62:1e:cc  txqueuelen 1000  (Ethernet)\n        RX packets 9  bytes 726 (726.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 9  bytes 726 (726.0 B)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6d4b\u8bd5\u7f51\u7edc"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# \u4ecenets1 ping nets2\u7f51\u7edc\u662f\u901a\u7684\n[root@k8s-master-168 ~]# ip netns exec nets1 ping 10.1.1.2\nPING 10.1.1.2 (10.1.1.2) 56(84) bytes of data.\n64 bytes from 10.1.1.2: icmp_seq=1 ttl=64 time=0.106 ms\n64 bytes from 10.1.1.2: icmp_seq=2 ttl=64 time=0.079 ms\n64 bytes from 10.1.1.2: icmp_seq=3 ttl=64 time=0.083 ms\n\n# \u4ecenets2 ping nets1 \u7f51\u7edc\u662f\u901a\u7684\n[root@k8s-master-168 ~]# ip netns exec nets2 ping 10.1.1.1\nPING 10.1.1.1 (10.1.1.1) 56(84) bytes of data.\n64 bytes from 10.1.1.1: icmp_seq=1 ttl=64 time=0.108 ms\n64 bytes from 10.1.1.1: icmp_seq=2 ttl=64 time=0.085 ms\n64 bytes from 10.1.1.1: icmp_seq=3 ttl=64 time=0.078 ms\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5355\u4e3b\u673a\u591a\u4e2a-network-namespace-\u4e4b\u95f4\u901a\u4fe1",children:"\u5355\u4e3b\u673a\u591a\u4e2a NetWork Namespace \u4e4b\u95f4\u901a\u4fe1"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"bridge",src:t(5085).A+"",width:"640",height:"252"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u8ff0\u662f\u4e24\u4e2a",(0,s.jsx)(n.code,{children:"ns"}),"\u53ef\u4ee5\u91c7\u7528\u76f4\u63a5",(0,s.jsx)(n.code,{children:"veth"}),"\u7684\u6a21\u5f0f\u8fdb\u884c\u901a\u4fe1\uff0c\u5c31\u597d\u6bd4\u91c7\u7528\u4e00\u6839\u7f51\u7ebf\uff0c\u8fde\u63a5\u4e24\u53f0\u7535\u8111\uff0c\u5982\u679c\u51fa\u73b03\u53f0\u7535\u8111\u9700\u8981\u901a\u4fe1\uff0c\u6b64\u65f6\u5c31\u4e0d\u80fd\u518d\u901a\u8fc7\u62c9\u53d6\u7f51\u7ebf\u7684\u65b0\u5f0f\u4e86\uff0c\u5728\u7269\u7406\u7f51\u7edc\u4e2d\u662f\u91c7\u7528\u4ea4\u6362\u673a\u6765\u5904\u7406\u8fd9\u79cd\u95ee\u9898\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u865a\u62df\u7f51\u7edc\u4e2d\u901a\u5e38\u7528",(0,s.jsx)(n.code,{children:"Linux bridge"}),", ",(0,s.jsx)(n.code,{children:"Linux Bridge"}),"\u53ef\u4ee5\u8fde\u63a5\u4efb\u610f\u771f\u5b9e\u7684\u7269\u7406\u8bbe\u5907\uff08\u5982\uff1aeth0\u7f51\u5361\uff09\u6216\u4efb\u610f\u865a\u62df\u8bbe\u5907\uff08\u5982\uff1aveth pair\u8bbe\u5907\uff0ctap\u8bbe\u5907\uff09\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u521b\u5efa\u4e00\u4e2abridge"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"[root@k8s-master-168 ~]# ip link add name br0 type bridge\n[root@k8s-master-168 ~]# ip link set br0 up\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u521b\u5efa\u4e09\u4e2ans"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# \u521b\u5efa3\u4e2ans\n[root@k8s-master-168 ~]# ip netns add nets1\n[root@k8s-master-168 ~]# ip netns add nets2\n[root@k8s-master-168 ~]# ip netns add nets3\n# \u521b\u5efa3\u5bf9veth pair\n[root@k8s-master-168 ~]# ip link add type veth\n[root@k8s-master-168 ~]# ip link add type veth\n[root@k8s-master-168 ~]# ip link add type veth\n\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u628abr0\u548c3\u4e2ans\u7248\u5b9a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# \u628aveth1\u3001veth3\u3001veth5\u5206\u522b\u63d2\u5165nets1\u3001nets2\u3001nets3\u4e2d\n[root@k8s-master-168 ~]# ip link set veth1 netns nets1\n[root@k8s-master-168 ~]# ip link set veth3 netns nets2\n[root@k8s-master-168 ~]# ip link set veth5 netns nets3\n# \u628aveth0\u3001veth2\u3001veth4\u63d2\u5165br0\u4e2d\n[root@k8s-master-168 ~]# ip link set dev veth0 master br0 up\n[root@k8s-master-168 ~]# ip link set dev veth2 master br0 up\n[root@k8s-master-168 ~]# ip link set dev veth4 master br0 up\n# \u8bbe\u7f6e\u4e09\u4e2aip\u7ed9veth1\u3001veth3\u3001veth5\u8bbe\u5907\u5e76\u542f\u7528\n[root@k8s-master-168 ~]# ip netns exec nets1 ifconfig veth1 10.1.1.1/24 up\n[root@k8s-master-168 ~]# ip netns exec nets2 ifconfig veth3 10.1.1.2/24 up\n[root@k8s-master-168 ~]# ip netns exec nets3 ifconfig veth5 10.1.1.3/24 up\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fdb\u8fc7\u4e0a\u8ff0\u914d\u7f6e\u4e4b\u540e\u5462\u5c31\u628a\u8fd9\u4e09\u4e2ans\u901a\u8fc7br0\u8fd9\u4e2a\u6865\u7ed1\u5b9a\u4e0a\u4e86\uff0c\u5c31\u53ef\u4ee5\u505a\u5230\u4e24\u4e24\u4efb\u610f\u8bbf\u95ee\u4e86\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"[root@k8s-master-168 ~]# ip netns exec nets1 ping 10.1.1.2\nPING 10.1.1.2 (10.1.1.2) 56(84) bytes of data.\n64 bytes from 10.1.1.2: icmp_seq=1 ttl=64 time=0.138 ms\n64 bytes from 10.1.1.2: icmp_seq=2 ttl=64 time=0.172 ms\n64 bytes from 10.1.1.2: icmp_seq=3 ttl=64 time=0.138 ms\n\n[root@k8s-master-168 ~]# ip netns exec nets1 ping 10.1.1.3\nPING 10.1.1.3 (10.1.1.3) 56(84) bytes of data.\n64 bytes from 10.1.1.3: icmp_seq=1 ttl=64 time=0.149 ms\n64 bytes from 10.1.1.3: icmp_seq=2 ttl=64 time=0.114 ms\n64 bytes from 10.1.1.3: icmp_seq=3 ttl=64 time=0.130 ms\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8de8\u4e3b\u673a\u591a\u4e2a-network-namespace-\u4e4b\u95f4\u901a\u4fe1",children:"\u8de8\u4e3b\u673a\u591a\u4e2a NetWork Namespace \u4e4b\u95f4\u901a\u4fe1"}),"\n",(0,s.jsxs)(n.p,{children:["\u8de8\u4e3b\u673a\u7f51\u7edc\u901a\u4fe1\u6d89\u53ca\u5230\u9700\u8981\u901a\u8fc7",(0,s.jsx)(n.code,{children:"vxlan"}),"\u3001",(0,s.jsx)(n.code,{children:"macvlan"}),"\u3001",(0,s.jsx)(n.code,{children:"ipvlan"}),"\u7b49\u6280\u672f\u8fdb\u884c\u8de8\u4e3b\u673a\u7ec4\u7f51\uff0c"]})]})}function p(e={}){const{wrapper:n}={...(0,A.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},5085:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/bridge-fc2ae5550a1d11c81f5f337691607b6d.png"},2248:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,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hx85cmTKlCn58+d32g8YMKBUqVLDhg3T7Ny5cz///POkpKTbb7+9c+fObdq0mTp16tKlS/XSunXrtm/fPmvWrEWLFiUnJ588eXLevHl6rl69+sCBAxs1aqQ248ePv/POO59//nmnco0aNXr06FG4cGFtW0JCgrPQk+cgcTzZtijtNDeR+ufgtPrx3LFjh/Op37lz5+bNm1u0aFGhQoUoPfxMbbZ/Rz+qVav2448/btmyxXmrBw8eXLNmTaVKlTQ7ceLE0aNHlylTpmvXrikpKUOHDtW/wKVLl3Z2p9JcyeuspX+clfVNmzZt166dcv+11167cOFCamrqmTNnFNwuotP++PHj7hImEEAgGwF7H091etttt/XLeDRv3jybbchTL3lwTh2k76OPPjpp0qQVK1Y0bPj3VcFVq1bpuXXr1seOHZszZ07Hjh2HDBmiJb169XrmmWcmT578xRdf1K5de8OGDd27d2/VqpXbizL9gQce0OzNN9+sZrt3765atapmixUr5rbR2bT+DVeIu0uYQACBbATsfTzvuuuubPrNsy/595xaJ8h33333t99+m57+92WHlStX1qtXT2mrE+3Lly9rQHltxmPjxo01a9Y8fPjw3r17A/eiTrSdmNZLqqZnnYPHxsZq4sqV/3exMS0tzekosAhLEEDgKgF7H8+rOmLWEfDvObW2T6PP77777rZt23RY/PLLLxpl1kINYuh5woQJzhtwn0+dOlW0aFF31plQUrtLnIBWHBcsWFALNQbivqRpLS9UqJC7hAkEEMhewNLHM/tO8+yrvk7qli1bauxCAyA6g1bOOmMaTviOGTNGI2WZd1u5cuX279+fecm1pm/MeBw6dMhtoCuTmtbAt7uECQQQyF7A0scz+07z7Kv+Hf3QLilRooQuBiqpNfTRuHHjm266SQvr1Kmj5wMHDiipncfChQt1up0vXw7ei+4Y0Un6iRMnnB2/bNkyTdStW9eZ5RkBBK4rYO/jed2u82ADX59Ta3/of1iDBg3SMPSIESOc3aPrwkptXRvUkIUuPmzdulUXGHVRUVcFixQpojZLlizRtcEOHTo47bN87tSpU2Jiom4F0d0jOqGePXu2BljuvffeLBuzEAEEshSw9PHMsq88vtDvSd2sWTONPl+6dCnz/ToavNbj448/1qVFnWjrDryePXtqR1apUkW3SztXGq+V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"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(6540);const A={},r=s.createContext(A);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(A):e.components||A:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);