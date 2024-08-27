"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[8444],{2414:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>i});var r=c(4848),d=c(8453);const t={slug:"docker-network-beginner",title:"Docker network \u5165\u95e8",authors:["rongfu"],tags:["Docker"]},s="Networking Basics",o={permalink:"/blog/docker-network-beginner",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2018-11-13-docker-network-beginner.md",source:"@site/blog/2018-11-13-docker-network-beginner.md",title:"Docker network \u5165\u95e8",description:"Docker network \u57fa\u672c\u77e5\u8bc6.",date:"2018-11-13T00:00:00.000Z",tags:[{inline:!1,label:"Docker",permalink:"/blog/tags/docker",description:"Docker interdocte"}],readingTime:5.12,hasTruncateMarker:!0,authors:[{name:"Leng Student",title:"Softwore Developer",url:"https://github.com/lengrongfu",image_hrl:"https://avatars.githubusercontent.com/u/15009201?v=4",socials:{github:"https://github.com/lengrongfu"},key:"rongfu",page:null}],frontMatter:{slug:"docker-network-beginner",title:"Docker network \u5165\u95e8",authors:["rongfu"],tags:["Docker"]},unlisted:!1,prevItem:{title:"docker \u7f51\u7edc\u6982\u5ff5",permalink:"/blog/docker-network-concept"},nextItem:{title:"Linux Firewall \u914d\u7f6e",permalink:"/blog/linux-Firewall"}},a={authorsImageUrls:[void 0]},i=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Docker network"})," \u57fa\u672c\u77e5\u8bc6."]}),"\n",(0,r.jsx)(n.h1,{id:"\u5355\u4e3b\u673a-bridge-driver-\u7f51\u6865\u9a71\u52a8",children:"\u5355\u4e3b\u673a Bridge Driver \u7f51\u6865\u9a71\u52a8"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5f53\u521b\u5efa\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"bridge"}),"\u7684\u7f51\u7edc\u9a71\u52a8\u65f6\u8fd9\u4e2a\u6a21\u578b\u662f\u9ed8\u8ba4\u7684\uff0c\u8fd9\u4e2a\u9a71\u52a8\u521b\u5efa\u4e86\u4e00\u4e2a\u79c1\u6709\u7684\u7f51\u7edc\u73af\u5883\uff0c\u5e76\u5728\u4e3b\u673a\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5916\u90e8\u7aef\u53e3\u4ee5\u4f9b\u5916\u90e8\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"#\u521b\u5efa\u4e00\u4e2a\u6211\u4eec\u7684\u5e94\u7528\u7528\u6237\u5b9a\u4e49\u7684\u7f51\u6865\u7f51\u7edc\n$ docker network create -d bridge catnet\n\n#\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u7f51\u7edc\u521b\u5efa\u4e00\u4e2aredis\u5bb9\u5668\n$ docker run -d --net catnet --name cat-db redis\n\n#Instantiate the web frontend on the catnet network and configure it to connect to a container named `cat-db`\n# \u5b9e\u4f8b\u8fd9\u4e2aweb\u5bb9\u5668\uff0c\u4f7f\u7528catnet\u8fd9\u4e2a\u7f51\u7edc\u5e76\u4e14\u914d\u7f6e\u5b83\u8fde\u63a5\u5230cat-db\u7684\u5bb9\u5668\u5b9e\u4f8b\u3002\n$ docker run -d --net catnet -p 8000:5000 -e 'DB=cat-db' -e 'ROLE=cat' chrch/web \n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5f53\u4e00\u4e2aIP\u5730\u5740\u4e0d\u6307\u5b9a\u65f6\uff0c\u7aef\u53e3\u4f1a\u88ab\u6620\u5c04\u5230\u6240\u6709\u7f51\u5361\u4e0a\uff0c0.0.0.0:8000\uff0c\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u4e00\u4e2aIP\u6765\u53ea\u5f00\u653e\u4e00\u4e2a\u7aef\u53e3\uff0c",(0,r.jsx)(n.code,{children:"-p 127.0.0.1:8000:5000"}),",\u66f4\u591a\u5185\u5bb9\u67e5\u770b ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/run/#/expose-incoming-ports",children:"Docker doc"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"singlehost-bridge",src:c(9576).A+"",width:"350",height:"276"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e24\u4e2a\u5bb9\u5668\u901a\u8fc7\u540c\u4e00\u4e2a\u7f51\u6865\u8fdb\u884c\u7f51\u7edc\u901a\u4fe1\uff0c\u4e0a\u9762\u7684",(0,r.jsx)(n.code,{children:"web"}),"\u8fd9\u4e2a\u5bb9\u5668\u8bbf\u95ee",(0,r.jsx)(n.code,{children:"redis"}),"\u65f6\u901a\u8fc7",(0,r.jsx)(n.code,{children:"cat-db"}),"\u8fd9\u4e2a\u57df\u540d\u8fdb\u884c\u8bbf\u95ee\uff0c",(0,r.jsx)(n.code,{children:"Docker"}),"\u5f15\u64ce\u5185\u90e8\u6709",(0,r.jsx)(n.code,{children:"DNS"}),"\u80fd\u5c06\u5bb9\u5668\u57df\u540d\u89e3\u6790\u4e3a\u53ef\u4ee5\u8bbf\u95ee\u7684\u5bb9\u5668",(0,r.jsx)(n.code,{children:"IP"}),"\uff0c\u56e0\u6b64,\u5728",(0,r.jsx)(n.code,{children:"Bridge"}),"\u6a21\u5f0f\u4e0b\uff0c\u591a\u4e2a\u5bb9\u5668\u90fd\u662f\u53ef\u4ee5\u901a\u8fc7\u5bb9\u5668\u540d\u79f0\u8fdb\u884c\u8bbf\u95ee\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(n.code,{children:"docker network inspect catnet"}),"\u67e5\u770b\u8fd9\u4e2a\u7f51\u7edc\u4e0b\u6240\u4ee5\u5bb9\u5668\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'# \u5982\u4e0b\u53ef\u4ee5\u770b\u51fa\u6709\u4e24\u4e2a\u5bb9\u5668\u662f\u4f7f\u7528\u4e86\u8fd9\u540c\u4e00\u4e2a\u7f51\u7edc\u3002\n$ docker network inspect catnet\n[\n    {\n        "Name": "catnet",\n        "Id": "81e45d3e3bf4f989abe87c42c8db63273f9bf30c1f5a593bae4667d5f0e33145",\n        "Scope": "local",\n        "Driver": "bridge",\n        "EnableIPv6": false,\n        "IPAM": {\n            "Driver": "default",\n            "Options": {},\n            "Config": [\n                {\n                    "Subnet": "172.19.0.0/16",\n                    "Gateway": "172.19.0.1/16"\n                }\n            ]\n        },\n        "Internal": false,\n        "Attachable": false,\n        "Containers": {\n            "2a23faa18fb33b5d07eb4e0affb5da36449a78eeb196c944a5af3aaffe1ada37": {\n                "Name": "backstabbing_pike",\n                "EndpointID": "9039dae3218c47739ae327a30c9d9b219159deb1c0a6274c6d994d37baf2f7e3",\n                "MacAddress": "02:42:ac:13:00:03",\n                "IPv4Address": "172.19.0.3/16",\n                "IPv6Address": ""\n            },\n            "dbf7f59187801e1bcd2b0a7d4731ca5f0a95236dbc4b4157af01697f295d4528": {\n                "Name": "cat-db",\n                "EndpointID": "7f7c51a0468acd849fd575adeadbcb5310c5987195555620d60ee3ffad37c680",\n                "MacAddress": "02:42:ac:13:00:02",\n                "IPv4Address": "172.19.0.2/16",\n                "IPv6Address": ""\n            }\n        },\n        "Options": {},\n        "Labels": {}\n    }\n]\n'})}),"\n",(0,r.jsx)(n.h1,{id:"\u591a\u4e3b\u673a-bridge-driver-\u7f51\u6865\u6a21\u5f0f",children:"\u591a\u4e3b\u673a Bridge Driver \u7f51\u6865\u6a21\u5f0f"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u591a\u53f0\u5bbf\u4e3b\u673a\u4e2d\u4f7f\u7528",(0,r.jsx)(n.code,{children:"Bridge"}),"\u7f51\u7edc\u6a21\u5f0f\uff0c",(0,r.jsx)(n.code,{children:"redis"}),"\u90e8\u7f72\u5728",(0,r.jsx)(n.code,{children:"host-A"}),"\u4e2d\uff0c\u5e76\u4e14\u9700\u8981\u6620\u5c04\u4e00\u4e2a\u5916\u90e8IP\uff0c\u4f9b",(0,r.jsx)(n.code,{children:"web"}),"\u53bb\u8c03\u7528\uff0c",(0,r.jsx)(n.code,{children:"web"}),"\u90e8\u7f72\u5728",(0,r.jsx)(n.code,{children:"host-B"}),"\u4e2d\uff0c\u8981\u8c03\u7528",(0,r.jsx)(n.code,{children:"db"}),"\u65f6\uff0c\u8981\u901a\u8fc7",(0,r.jsx)(n.code,{children:"DB=host-A:6379"}),"\u6307\u5b9a\u4e3b\u673aA\u7684",(0,r.jsx)(n.code,{children:"host"}),"\u548c",(0,r.jsx)(n.code,{children:"redis"}),"\u66b4\u9732\u7684\u7aef\u53e3\u8fdb\u884c\u8fde\u63a5\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u6bcf\u4e2adocker\u4e2d\u90fd\u6709\u4e00\u4e2a\u9ed8\u8ba4\u7684Bridge\u7f51\u7edc\u6a21\u5f0f\nhost-A $ docker run -d -p 6379:6379 redis\nhost-B $ docker run -d -p 8000:5000 -e 'DB=host-A:6379' -e 'ROLE=cat' --name web chrch/web \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"\u591a\u4e3b\u673a\u6a21\u5f0f",src:c(144).A+"",width:"500",height:"275"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3b\u673aB\u901a\u8fc7\u672c\u673a",(0,r.jsx)(n.code,{children:"Host"}),"\u6765\u89e3\u6790\u4e3b\u673aA\u7684IP\u5730\u5740\u5df2\u8fdb\u884c\u8bbf\u95ee\u3002\u901a\u5e38\u4e0d\u5efa\u8bae\u8fd9\u6837\u786c\u7f16\u7801\u7684\u4f7f\u7528\u670d\u52a1\u5730\u5740\u3002"]}),"\n",(0,r.jsx)(n.h1,{id:"overlay-driver",children:"Overlay Driver"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"overlay"})," \u7f51\u7edc\u6a21\u5f0f\u63d0\u4f9b\u4e86\u670d\u52a1\u53d1\u73b0\u548c\u81ea\u52a8\u8d1f\u8f7d\u5747\u8861\u7684\u529f\u80fd\uff0c\u4f46\u662f\u524d\u63d0\u662f\u8981\u628a\u591a\u4e3b\u673a\u90e8\u7f72\u4e3a",(0,r.jsx)(n.code,{children:"swarm"}),"\u96c6\u7fa4\u6a21\u5f0f\u3002\n\u5728",(0,r.jsx)(n.code,{children:"lead"}),"\u4e0a\u9762\u67e5\u770b",(0,r.jsx)(n.code,{children:"swarm"}),"\u7684\u8282\u70b9\u6570\u91cf\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ docker node ls\nID                           HOSTNAME          STATUS  AVAILABILITY  MANAGER STATUS\na8dwuh6gy5898z3yeuvxaetjo    host-B  Ready   Active\nelgt0bfuikjrntv3c33hr0752 *  host-A  Ready   Active        Leader\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684",(0,r.jsx)(n.code,{children:"overlay"}),"\u7f51\u7edc\u3002\u5728\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"overlay"}),"\u7f51\u7edc\u4e2d\u5f00\u653e\u7684",(0,r.jsx)(n.code,{children:"TCP"}),"\u548c",(0,r.jsx)(n.code,{children:"UDP"}),"\u7aef\u53e3\u90fd\u662f\u5f00\u653e\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ docker network create -d overlay --subnet 192.0.0.0/24 --gateway 192.0.0.1 dognet\n$ docker service create --network dognet --name dog-db redis\n$ docker service create --network dognet -p 8000:5000  -e 'DB=dog-db' -e 'ROLE=dog' --name dog-web chrch/web\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"overlay\u7f51\u7edc\u6a21\u5f0f",src:c(4867).A+"",width:"500",height:"261"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u56fe\u8bb2\u89e3\u4e86\u4e0a\u9762\u7684\u547d\u4ee4\u4e2d\u7684\u90e8\u7f72\u56fe\uff0c\u9996\u5148\u521b\u5efa\u4e86\u4e00\u4e2a\u53eb",(0,r.jsx)(n.code,{children:"dognet"}),"\u7684",(0,r.jsx)(n.code,{children:"overlay"}),"\u7f51\u7edc,\u7136\u540e\u521b\u5efa\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"service"}),",\u4f7f\u7528",(0,r.jsx)(n.code,{children:"dognet"}),"\u8fd9\u4e2a\u521b\u5efa\u597d\u7684\u7f51\u7edc\uff0c\u5e76\u4e14\u4e0d\u5f00\u653e\u4efb\u4f55\u53ef\u8bbf\u95ee\u7aef\u53e3\uff0c\u547d\u4ee4\u4e3a",(0,r.jsx)(n.code,{children:"dog-db"}),"\uff1b\u7136\u540e\u521b\u5efa\u53e6\u4e00\u4e2a\u670d\u52a1\uff0c\u4e5f\u662f\u4f7f\u7528\u540c\u4e00\u4e2a\u7f51\u7edc\uff0c\u5e76\u4e14\u76f4\u63a5\u6307\u5b9a",(0,r.jsx)(n.code,{children:"redis"}),"\u7684name\u5373\u53ef."]}),"\n",(0,r.jsxs)(n.p,{children:["\u540c\u65f6\u8bbf\u95ee\u4e24\u4e2a",(0,r.jsx)(n.code,{children:"overlay"}),"\u7684\u7f51\u7edc\u6a21\u5f0f\uff0c\u6bd4\u5982\u6709\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"admin"}),"\u9700\u8981\u540c\u65f6\u8bbf\u95ee",(0,r.jsx)(n.code,{children:"dog-web"}),"\u548c",(0,r.jsx)(n.code,{children:"cat-web"}),"\u4e24\u4e2a\u670d\u52a1\u3002\u6211\u4eec\u53ef\u4ee5\u5982\u4e0b\u64cd\u4f5c\uff0c\u5148\u542f\u52a8\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"catnet"}),"\u7684",(0,r.jsx)(n.code,{children:"overlay"}),"\u7f51\u7edc\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ docker network create -d overlay --subnet 172.0.0.0/24 --gateway 172.0.0.1 catnet\n$ docker service create --network catnet --name cat-db redis\n$ docker service create --network catnet -p 8000:5000  -e 'DB=cat-db' -e 'ROLE=cat' --name cat-web chrch/web\n\n# \u540c\u65f6\u4f7f\u7528\u4e24\u4e2aoverlay\u7684\u7f51\u7edc\u73af\u5883\n$ docker service create --network catnet --network dognet -p 7000:5000 -e 'DB1=dog-db' -e 'DB2=cat-db' --name admin chrch/admin\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"\u591a\u4e3b\u673a\u63a7\u5236",src:c(1859).A+"",width:"720",height:"248"}),"\n",(0,r.jsx)(n.code,{children:"dog-web"}),"\u548c",(0,r.jsx)(n.code,{children:"dog-db"}),"\u4e4b\u95f4\u7f51\u7edc\u53ef\u4ee5\u4e92\u901a\uff0c\u5f53\u65f6\u4e0d\u53ef\u4ee5\u8bbf\u95ee",(0,r.jsx)(n.code,{children:"catnet"}),"\u4e0a\u7684\u670d\u52a1,",(0,r.jsx)(n.code,{children:"cat-web"}),"\u548c",(0,r.jsx)(n.code,{children:"cat-db"}),"\u4e4b\u95f4\u4e5f\u662f\u53ef\u4ee5\u4e92\u76f8\u8bbf\u95ee\u7684\uff0c\u4f46\u662f\u4e0d\u53ef\u4ee5\u8bbf\u95ee",(0,r.jsx)(n.code,{children:"dognet"}),"\u7f51\u7edc\u4e0a\u7684\u670d\u52a1\u3002"]}),"\n",(0,r.jsx)(n.h1,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/docker/labs/blob/master/networking/tutorials.md",children:"https://github.com/docker/labs/blob/master/networking/tutorials.md"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},144:(e,n,c)=>{c.d(n,{A:()=>r});const r=c.p+"assets/images/multihost-bridge-01ae0c18829dcb7ca5f4476d4edf95a9.png"},1859:(e,n,c)=>{c.d(n,{A:()=>r});const r=c.p+"assets/images/multitenant-2b53a24862e5d967c5955449025b210f.png"},4867:(e,n,c)=>{c.d(n,{A:()=>r});const r=c.p+"assets/images/pets-overlay-5fc65a3743c4995fc263cffcfa3c0dde.png"},9576:(e,n,c)=>{c.d(n,{A:()=>r});const r=c.p+"assets/images/singlehost-bridge-6d2065fcf6e8b4c0d57dc942db25702c.png"},8453:(e,n,c)=>{c.d(n,{R:()=>s,x:()=>o});var r=c(6540);const d={},t=r.createContext(d);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);