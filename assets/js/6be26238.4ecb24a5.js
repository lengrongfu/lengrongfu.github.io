"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[6531],{3379:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var l=t(4848),i=t(8453);const r={slug:"linux-Keepalived",title:"Linux Keepalived \u4f7f\u7528",authors:["rongfu"],tags:["Linux"]},s=void 0,d={permalink:"/blog/linux-Keepalived",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2018-10-17-linux-Keepalived.md",source:"@site/blog/2018-10-17-linux-Keepalived.md",title:"Linux Keepalived \u4f7f\u7528",description:"Keepalived \u6784\u5efa\u4e00\u4e2a\u9ad8\u53ef\u7528\u7684\u96c6\u7fa4",date:"2018-10-17T00:00:00.000Z",tags:[{inline:!1,label:"Linux",permalink:"/blog/tags/linux",description:"Linux"}],readingTime:6.975,hasTruncateMarker:!0,authors:[{name:"Leng Student",title:"Softwore Developer",url:"https://github.com/lengrongfu",image_hrl:"https://avatars.githubusercontent.com/u/15009201?v=4",socials:{github:"https://github.com/lengrongfu"},key:"rongfu",page:null}],frontMatter:{slug:"linux-Keepalived",title:"Linux Keepalived \u4f7f\u7528",authors:["rongfu"],tags:["Linux"]},unlisted:!1,prevItem:{title:"Linux Firewall \u914d\u7f6e",permalink:"/blog/linux-Firewall"},nextItem:{title:"Linux crond",permalink:"/blog/linux-crond"}},c={authorsImageUrls:[void 0]},a=[{value:"\u4e00\u3001\u5b89\u88c5",id:"\u4e00\u5b89\u88c5",level:3},{value:"\u4e8c\u3001\u4f7f\u7528<code>Keepalived</code>\u5b9e\u73b0\u4e00\u4e2a\u6545\u969c\u8f6c\u79fb\u7684\u9ad8\u53ef\u7528\u670d\u52a1",id:"\u4e8c\u4f7f\u7528keepalived\u5b9e\u73b0\u4e00\u4e2a\u6545\u969c\u8f6c\u79fb\u7684\u9ad8\u53ef\u7528\u670d\u52a1",level:3},{value:"\uff11\u3001\u9700\u6c42",id:"\uff11\u9700\u6c42",level:4},{value:"\uff12\u3001\u51c6\u5907\u5de5\u4f5c",id:"\uff12\u51c6\u5907\u5de5\u4f5c",level:4},{value:"\uff13\u3001\u4f7f\u7528,<code>Keepalived</code>\u7684\u6240\u6709\u529f\u80fd\u90fd\u662f\u7531\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u7684",id:"\uff13\u4f7f\u7528keepalived\u7684\u6240\u6709\u529f\u80fd\u90fd\u662f\u7531\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u7684",level:4},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Keepalived \u6784\u5efa\u4e00\u4e2a\u9ad8\u53ef\u7528\u7684\u96c6\u7fa4"}),"\n",(0,l.jsx)(n.p,{children:"\u53c2\u8003\u6587\u6863\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"http://www.keepalived.org/doc/case_study_healthcheck.html",children:"\u6587\u6863\u5730\u5740"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/acassen/keepalived",children:"github \u5730\u5740"})}),"\n",(0,l.jsx)(n.p,{children:"\u200b"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u4e00\u5b89\u88c5",children:"\u4e00\u3001\u5b89\u88c5"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"centos"}),"\u4e0a\u5b89\u88c5\uff1a",(0,l.jsx)(n.code,{children:"yum install keepalived"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6e90\u7801\u5b89\u88c5\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"wget http://www.keepalived.org/software/keepalived-1.2.24.tar.gz\ntar -zxvf keepalived-1.2.24.tar.gz\ncd keepalived-1.2.24\n./configure --prefix=/usr/local/keepalived\nmake && make install\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"keepalived"}),"\u542f\u52a8\u65f6\u4f1a\u4ece",(0,l.jsx)(n.code,{children:"/etc/keepalived"}),"\u76ee\u5f55\u4e0b\u67e5\u627e",(0,l.jsx)(n.code,{children:"keepalived.conf"}),"\u914d\u7f6e\u6587\u4ef6\uff0c\u5982\u679c\u6ca1\u6709\u627e\u5230\u5219\u4f7f\u7528\u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4f7f\u7528\u6e90\u7801\u5b89\u88c5\u65f6\u662f\u6ca1\u6709",(0,l.jsx)(n.code,{children:"/etc/keepalived"}),"\u8fd9\u4e2a\u6587\u4ef6\u5939\u7684\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u9700\u8981\u5c06\u914d\u7f6e\u6587\u4ef6\u62f7\u8d1d\u5230\u7cfb\u7edf\u5bf9\u5e94\u7684\u76ee\u5f55\u4e0b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"shell> mkdir /etc/keepalived\nshell> cp /usr/local/keepalived/etc/keepalived.conf /etc/keepalived/keepalived.conf\nshell> cp /usr/local/keepalived/etc/rc.d/init.d/keepalived /etc/rc.d/init.d/keepalived\nshell> cp /usr/local/keepalived/etc/sysconfig/keepalived /etc/sysconfig/keepalived\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528\u547d\u4ee4\u4ecb\u7ecd"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"[root@dev_file keepalived]# service keepalived\n\u7528\u6cd5\uff1a/etc/init.d/keepalived {start|stop|status|restart|condrestart|try-restart|reload|force-reload}\nstart:\u542f\u7528\nstop:\u505c\u6b62\nstatus:\u72b6\u6001\nrestart:\u91cd\u542f\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["\u53e6\u5916\u9700\u8981\u6ce8\u610f\u7684\u4e00\u70b9\u662f\uff0c",(0,l.jsx)(n.code,{children:"keepalived"}),"\u542f\u52a8\u65f6\u4e0d\u4f1a\u68c0\u67e5\u914d\u7f6e\u6587\u4ef6\u7684\u8bed\u6cd5\u662f\u5426\u6b63\u786e\uff0c\u6240\u4ee5\u6211\u4eec\u5728\u7f16\u5199\u914d\u7f6e\u6587\u4ef6\u65f6\u8981\u7279\u522b\u5c0f\u5fc3\uff0c\u522b\u5199\u9519\u4e86\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u4e00\u4e9b\u610f\u60f3\u4e0d\u5230\u7684\u73b0\u8c61"]})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"service keepalived start"})," \u6267\u884c\u540e\u670d\u52a1\u4f1a\u52a0\u8f7d",(0,l.jsx)(n.code,{children:"/etc/keepalived/keepalived.conf"}),"\u4e0b\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u4f7f\u7528",(0,l.jsx)(n.code,{children:"-f"})," \u53c2\u6570\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u7684\u4f4d\u7f6e\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"\u4e8c\u4f7f\u7528keepalived\u5b9e\u73b0\u4e00\u4e2a\u6545\u969c\u8f6c\u79fb\u7684\u9ad8\u53ef\u7528\u670d\u52a1",children:["\u4e8c\u3001\u4f7f\u7528",(0,l.jsx)(n.code,{children:"Keepalived"}),"\u5b9e\u73b0\u4e00\u4e2a\u6545\u969c\u8f6c\u79fb\u7684\u9ad8\u53ef\u7528\u670d\u52a1"]}),"\n",(0,l.jsx)(n.h4,{id:"\uff11\u9700\u6c42",children:"\uff11\u3001\u9700\u6c42"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u4e00\u4e2a",(0,l.jsx)(n.code,{children:"golang"}),"\u7684\u670d\u52a1\u90e8\u7f72\u591a\u4e2a\u8282\u70b9\uff0c\u4e4b\u524d\u53ea\u6709\u4e00\u4e2a\u8282\u70b9\uff0c\u73b0\u5728\u4e3a\u4e86\u9ad8\u53ef\u7528\u9700\u8981\u90e8\u7f72\u4e24\u4e2a\u8282\u70b9"]}),"\n",(0,l.jsxs)(n.li,{children:["\u4e0d\u6253\u7b97\u4f7f\u7528",(0,l.jsx)(n.code,{children:"nginx"})]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\uff12\u51c6\u5907\u5de5\u4f5c",children:"\uff12\u3001\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e09\u4e2a\u8282\u70b9\u6700\u5c11\u4e24\u53f0\u670d\u52a1\u5668"}),"\n",(0,l.jsxs)(n.li,{children:["\u4e09\u53f0\u5b89\u88c5\u4e86",(0,l.jsx)(n.code,{children:"keepalived"}),"\u7684\u673a\u5668"]}),"\n"]}),"\n",(0,l.jsxs)(n.h4,{id:"\uff13\u4f7f\u7528keepalived\u7684\u6240\u6709\u529f\u80fd\u90fd\u662f\u7531\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u7684",children:["\uff13\u3001\u4f7f\u7528,",(0,l.jsx)(n.code,{children:"Keepalived"}),"\u7684\u6240\u6709\u529f\u80fd\u90fd\u662f\u7531\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u7684"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"keepalived"}),"\u542f\u52a8\u4e4b\u540e\u7684\u65e5\u5fd7\u8def\u5f84\uff1a",(0,l.jsx)(n.code,{children:"/var/log/messages"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"vip"})," \u865aip\u5730\u5740\u5728\u4e09\u53f0\u670d\u52a1\u5668\u4e2d\u53ea\u4f1a\u6709\u4e00\u53f0\u6709\uff0c",(0,l.jsx)(n.code,{children:"ip a"})," \u67e5\u770b\u662f\u5426\u6709\u865a",(0,l.jsx)(n.code,{children:"ips"}),"\u662f\u5426\u751f\u6210"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5982\u4e0b\u4e3a",(0,l.jsx)(n.code,{children:"MASTER"})," \u914d\u7f6e"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"vrrp_instance VI_1 { #vrrp\u5b9e\u4f8b\u540d\n\tstate MASTER # \u5b9e\u4f8b\u72b6\u6001,\u53ea\u6709MASTER\u548cBACKUP\u4e24\u79cd\u72b6\u6001\uff0c\u5e76\u4e14\u9700\u8981\u5168\u90e8\u5927\u5199\uff0c\u62a2\u5360\u6a21\u5f0f\u4e0b\uff0c\u5176\u4e2dMASTER\u4e3a\u5de5\u4f5c\u72b6\u6001\uff0cBACKUP\u4e3a\u5907\u7528\u72b6\u6001\uff0c\u5f53MASTER\u670d\u52a1\u5931\u6548\u65f6\uff0cBACKUP\u6240\u5728\u7684\u670d\u52a1\u4f1a\u81ea\u52a8\u628a\u5b83\u7684\u72b6\u6001\u7531BACKUP\u5207\u6362\u5230MASTER\u72b6\u6001,\u5f53\u5931\u6548\u7684MASTER\u6240\u5728\u7684\u670d\u52a1\u6062\u590d\u65f6\uff0cBACKUP\u4eceMASTER\u6062\u590d\u5230BACKUP\u72b6\u6001\n\tinterface eth0 # \u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u7684\u7f51\u5361,\u5373vip\u7ed1\u5b9a\u7684\u7f51\u5361\u63a5\u53e3,\u5982:eth0,eth1\n    virtual_router_id 01 #\u865a\u62df\u8def\u7531\u7684ID\u53f7\uff0c\u6bcf\u4e2a\u8282\u70b9\u8bbe\u7f6e\u5fc5\u987b\u4e00\u6837\uff0c\u53ef\u9009\u62e9IP\u6700\u540e\u4e00\u6bb5\u4f7f\u7528\uff0c\u76f8\u540c\u7684 VRID \u4e3a\u4e00\u4e2a\u7ec4,\u4e00\u4e2akeepalived\u96c6\u7fa4\u8fd9\u4e2a\u503c\u5fc5\u987b\u4e00\u6837\n\tpriority 100 #\u8282\u70b9\u4f18\u5148\u7ea7\uff0c\u53d6\u503c\u8303\u56f40\uff5e254\uff0cMASTER\u8981\u6bd4BACKUP\u9ad8,\u503c\u8d8a\u5927\uff0c\u4f18\u5148\u7ea7\u8d8a\u9ad8\n\tadvert_int 1 # MASTER\u4e0eBACKUP\u8282\u70b9\u95f4\u540c\u6b65\u68c0\u67e5\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u79d2\n\tnopreempt # \u7981\u6b62\u62a2\u5360\u670d\u52a1\u3002\u9ed8\u8ba4\u60c5\u51b5\uff0c\u5f53MASTER\u670d\u52a1\u6302\u6389\u4e4b\u540e\uff0cBACKUP\u81ea\u52a8\u5347\u7ea7\u4e3aMASTER\u5e76\u63a5\u66ff\u5b83\u7684\u4efb\u52a1\uff0c\u5f53MASTER\u670d\u52a1\u6062\u590d\u540e\uff0c\u5347\u7ea7\u4e3aMASTER\u7684BACKUP\u670d\u52a1\u53c8\u81ea\u52a8\u964d\u4e3aBACKUP\uff0c\u628a\u5de5\u4f5c\u6743\u4ea4\u7ed9\u539fMASTER\u3002\u5f53\u914d\u7f6e\u4e86nopreempt\uff0cMASTER\u4ece\u6302\u6389\u5230\u6062\u590d\uff0c\u4e0d\u518d\u5c06\u670d\u52a1\u62a2\u5360\u8fc7\u6765\u3002\n\tauthentication {      #\u4f20\u9012\u4fe1\u606f\u7684\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u5bc6\u7801\u4ec5\u652f\u63018\u4f4d\n    \t\tauth_type PASS # \u7c7b\u578b\u4e3b\u8981\u6709 PASS\u3001AH \u4e24\u79cd\n    \t\tauth_pass 1111 # \u540c\u4e00vrrp \u5b9e\u4f8bMASTER\u4e0eBACKUP\u4f7f\u7528\u76f8\u540c\u7684\u5bc6\u7801\u624d\u80fd\u6b63\u5e38\u901a\u4fe1\n\t}\n\tvirtual_ipaddress { #\u865a\u62dfIP\u5730\u5740\u6c60\uff0c\u53ef\u4ee5\u6709\u591a\u4e2aIP\uff0c\u6bcf\u4e2aIP\u5360\u4e00\u884c\uff0c\u4e0d\u9700\u8981\u6307\u5b9a\u5b50\u7f51\u63a9\u7801\u3002\u6ce8\u610f\uff1a\u8fd9\u4e2aIP\u5fc5\u987b\u4e0e\u6211\u4eec\u7684\u8bbe\u5b9a\u7684vip\u4fdd\u6301\u4e00\u81f4\u3002\n\t\t255.255.10.99\n\t\t### \u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\n\t}\n}\nvirtual_server 255.255.10.99 80 {\u3000#\u865a\u62df\u670d\u52a1\u5668virtual_server\u5b9a\u4e49\u5757\n\tdelay_loop 10 #\u5065\u5eb7\u68c0\u67e5\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\uff1a\u79d2 \n\tlb_algo wrr # \u8d1f\u8f7d\u5747\u8861\u8c03\u5ea6\u7b97\u6cd5\uff0c\u4e92\u8054\u7f51\u5e94\u7528\u5e38\u7528\u65b9\u5f0f\u4e3awlc\u6216rr\n\tlb_kind NAT # \u8d1f\u8f7d\u5747\u8861\u8f6c\u53d1\u89c4\u5219\u3002\u5305\u62ecDR\u3001NAT\u3001TUN3\u79cd\uff0c\u4e00\u822c\u4f7f\u7528\u8def\u7531\uff08DR\uff09\u8f6c\u53d1\u89c4\u5219\uff0cDR\u548cNAT\u6548\u7387\u6700\u9ad8\uff0c\u4f46\u662f\u6709\u4f7f\u7528\u573a\u666f\u9650\u5236\n\tpersistence_timeout 50 # http\u670d\u52a1\u4f1a\u8bdd\u4fdd\u6301\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u79d2 \n    protocol TCP # \u8f6c\u53d1\u534f\u8bae\uff0c\u5206\u4e3aTCP\u548cUDP\u4e24\u79cd\n   \t# \u4e0b\u9762\u7684\u914d\u7f6e\u7528\u6237\u68c0\u6d4b\u670d\u52a1\u6545\u969c\uff0c\u7136\u540e\u5254\u9664\u5230vrrp\u96c6\u7fa4\u4e2d\n\treal_server 255.255.10.203 8081 { #\u771f\u5b9e\u670d\u52a1\u5668IP\u548c\u7aef\u53e3\uff0c\u53ef\u4ee5\u5b9a\u4e49\u591a\u4e2a\n\t\tweight 2\u3000# \u8d1f\u8f7d\u6743\u91cd\uff0c\u503c\u8d8a\u5927\uff0c\u8f6c\u53d1\u7684\u4f18\u5148\u7ea7\u8d8a\u9ad8 \n\t\tHTTP_GET { # \u4f7f\u7528HTTP_GET\u6765\u68c0\u67e5\u670d\u52a1\u7684\u72b6\u6001\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 TCP_CHECK\n\t\t\turl {\n\t\t\t\tpath /beat\n\t\t\t\tdigest 7bd3d5f5b3cdb13aed632121206e729c # \u8fd9\u4e2a\u503c\u662f\u4e00\u4e2amd5\u7684\u6c42\u548c\uff0c\u5b89\u88c5keepalived\u4e4b\u540e\u6709\u4e00\u4e2a\u5de5\u5177\u7528\u6765\u6c42\u548c\uff0c\n\t\t\t\t# genhash -s 255.255.10.203 -p 8081 -u /beat \u6267\u884c\u8fd9\u4e2a\u547d\u4ee4\u5c31\u53ef\u4ee5\u7b97\u51fadigest\u503c\n\t\t\t}\n\t\t\tconnect_timeout 3 #\u670d\u52a1\u8fde\u63a5\u8d85\u65f6\u65f6\u957f\uff0c\u5355\u4f4d\uff1a\u79d2 \n            retry 3 # \u91cd\u8bd5\u6b21\u6570\n            delay_before_retry 2 #\u91cd\u8bd5\u8fde\u63a5\u95f4\u9694\n\t\t}\n\t}\n\t\n\treal_server 255.255.10.204 8081 { #\u53e6\u4e00\u4e2a\u8282\u70b9\n                weight 2\n                HTTP_GET {\n                        url {\n                                path /beat\n                                digest 7bd3d5f5b3cdb13aed632121206e729c\n                        }\n                        connect_timeout 3\n                        retry 3\n                        delay_before_retry 2\n                }\n        }\n}\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5982\u4e0b\u4e3a",(0,l.jsx)(n.code,{children:"BACKUP"}),"\u7684\u914d\u7f6e"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"vrrp_instance VI_1 {\n        state  BACKUP # BACKUP\n\t\tinterface eth0\n        virtual_router_id 01\n        priority 99\u3000# \u6bd4master\u4e0b\n        advert_int 1\n\t\tnopreempt\n        authentication {      //\u4f20\u9012\u4fe1\u606f\u7684\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u5bc6\u7801\u4ec5\u652f\u63018\u4f4d\n                auth_type PASS\n                auth_pass 1111\n        }\n        virtual_ipaddress {\n                255.255.10.99\n        }\n}\nvirtual_server 255.255.10.99 8000 {\n        delay_loop 6\n        lb_algo wrr\n        lb_kind NAT\n        persistence_timeout 50\n        protocol TCP\n\n        real_server 255.255.10.204 8081 {\n                weight 1\n\t\t\t\tHTTP_GET {\n\t\t\t\t\turl {\n\t\t\t\t\t\tpath /beat\n\t\t\t\t\t\tdigest 7bd3d5f5b3cdb13aed632121206e729c\n\t\t\t\t\t}\n\t\t\t\t\tconnect_timeout 3\n            \t\tretry 3\n            \t\tdelay_before_retry 2\n\t\t\t}\n        }\n\t\treal_server 255.255.10.203 8081 {\n                weight 2\n                HTTP_GET {\n                        url {\n                                path /beat\n                                digest 7bd3d5f5b3cdb13aed632121206e729c\n                        }\n                        connect_timeout 3\n                        retry 3\n                        delay_before_retry 2\n                }\n        }\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u200b"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u65e5\u5fd7\u67e5\u770b\uff0c\u505c\u6b62",(0,l.jsx)(n.code,{children:"255.255.10.204 8081"})," \u4e0a\u7684\u670d\u52a1\uff0c\u5c31\u4f1a\u6253\u5370\u5982\u4e0b\u7684\u65e5\u5fd7"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"Mar 30 18:36:01 dev_file Keepalived_healthcheckers[23744]: Error connecting server [255.255.10.204]:8081.\nMar 30 18:36:01 dev_file Keepalived_healthcheckers[23744]: Removing service [255.255.10.204]:8081 from VS [255.255.10.99]:80\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u65e5\u5fd7\u67e5\u770b\uff0c\u542f\u52a8",(0,l.jsx)(n.code,{children:"255.255.10.204 8081"}),"\u670d\u52a1\uff0c\u6253\u5370\u5982\u4e0b\u65e5\u5fd7"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"Mar 30 18:36:49 dev_file Keepalived_healthcheckers[23744]: MD5 digest success to [255.255.10.204]:8081 url(1).\nMar 30 18:36:59 dev_file Keepalived_healthcheckers[23744]: Remote Web server [255.255.10.204]:8081 succeed on service.\nMar 30 18:36:59 dev_file Keepalived_healthcheckers[23744]: Adding service [255.255.10.204]:8081 to VS [255.255.10.99]:80\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u8003\u6587\u6863",children:"\u53c2\u8003\u6587\u6863"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"http://www.linuxvirtualserver.org/zh/lvs1.html",children:"Linux\u670d\u52a1\u5668\u96c6\u7fa4\u7cfb\u7edf"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"http://www.linuxvirtualserver.org/docs/ha/keepalived.html",children:"keepalived+lvs"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"http://www.linuxvirtualserver.org/zh/",children:"\u5b98\u65b9\u4e2d\u6587\u6587\u6863"})}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var l=t(6540);const i={},r=l.createContext(i);function s(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);