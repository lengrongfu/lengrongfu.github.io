"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[1393],{1320:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var c=e(4848),l=e(8453);const i={slug:"go-channel\u6e90\u7801",title:"go channel \u5b9e\u73b0",authors:["rongfu"],tags:["golang","channel"]},s="\u4ec0\u4e48\u662fChannel",o={permalink:"/blog/go-channel\u6e90\u7801",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-09-18-go-channel\u6e90\u7801.md",source:"@site/blog/2019-09-18-go-channel\u6e90\u7801.md",title:"go channel \u5b9e\u73b0",description:"Channel\u662fgo\u4e4b\u95f4\u901a\u4fe1\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u4ece\u5b9e\u73b0\u4e0a\u8bf4\uff0cchannel\u662f\u4e00\u4e2a\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784\uff0c\u53ef\u4ee5\u5c06\u6570\u636e\u653e\u5165\u548c\u8bfb\u53d6\u3002",date:"2019-09-18T00:00:00.000Z",tags:[{inline:!1,label:"golang",permalink:"/blog/tags/golang",description:"golang"},{inline:!1,label:"channel",permalink:"/blog/tags/channel",description:"Golang channel"}],readingTime:10.52,hasTruncateMarker:!0,authors:[{name:"Leng Student",title:"Softwore Developer",url:"https://github.com/lengrongfu",image_hrl:"https://avatars.githubusercontent.com/u/15009201?v=4",socials:{github:"https://github.com/lengrongfu"},key:"rongfu",page:null}],frontMatter:{slug:"go-channel\u6e90\u7801",title:"go channel \u5b9e\u73b0",authors:["rongfu"],tags:["golang","channel"]},unlisted:!1,prevItem:{title:"Kubernetes Network",permalink:"/blog/Kubernetes-Network"},nextItem:{title:"Linux sed",permalink:"/blog/linux-sed"}},r={authorsImageUrls:[void 0]},a=[{value:"\u53d1\u9001\u6d88\u606f\u65f6\uff1a",id:"\u53d1\u9001\u6d88\u606f\u65f6",level:2},{value:"\u8bfb\u53d6\u6d88\u606f\u65f6\uff1a",id:"\u8bfb\u53d6\u6d88\u606f\u65f6",level:2},{value:"chan \u7ed3\u6784\u4f53\u89e3\u8bfb",id:"chan-\u7ed3\u6784\u4f53\u89e3\u8bfb",level:2},{value:"chansend \u53d1\u9001\u6e90\u7801\u89e3\u8bfb",id:"chansend-\u53d1\u9001\u6e90\u7801\u89e3\u8bfb",level:2},{value:"chanrecv \u63a5\u6536\u89e3\u8bfb",id:"chanrecv-\u63a5\u6536\u89e3\u8bfb",level:2},{value:"\u5165\u961f\u5217",id:"\u5165\u961f\u5217",level:3},{value:"\u51fa\u961f\u5217",id:"\u51fa\u961f\u5217",level:3},{value:"lock \u52a0\u9501",id:"lock-\u52a0\u9501",level:2},{value:"unlock \u89e3\u9501",id:"unlock-\u89e3\u9501",level:2}];function u(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"Channel"}),"\u662f",(0,c.jsx)(t.code,{children:"go"}),"\u4e4b\u95f4\u901a\u4fe1\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u4ece\u5b9e\u73b0\u4e0a\u8bf4\uff0c",(0,c.jsx)(t.code,{children:"channel"}),"\u662f\u4e00\u4e2a\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784\uff0c\u53ef\u4ee5\u5c06\u6570\u636e\u653e\u5165\u548c\u8bfb\u53d6\u3002"]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"Channel"}),"\u662f",(0,c.jsx)(t.code,{children:"go"}),"\u4e4b\u95f4\u901a\u4fe1\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u4ece\u5b9e\u73b0\u4e0a\u8bf4\uff0c",(0,c.jsx)(t.code,{children:"channel"}),"\u662f\u4e00\u4e2a\u94fe\u8868\u7684\u6570\u636e\u7ed3\u6784\uff0c\u53ef\u4ee5\u5c06\u6570\u636e\u653e\u5165\u548c\u8bfb\u53d6\u3002"]}),"\n",(0,c.jsx)(t.h1,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"channel"}),"\u5206\u4e3a\u6709\u7f13\u51b2\u533a\u7684\u548c\u65e0\u7f13\u51b2\u533a\u7684\u901a\u9053\u3002"]}),"\n",(0,c.jsx)(t.h1,{id:"\u539f\u7406",children:"\u539f\u7406"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"channel"}),"\u5c31\u662f\u901a\u8fc7\u4e00\u4e2a\u5171\u4eab\u961f\u5217\u6765\u505a\u534f\u7a0b\u4e4b\u95f4\u7684\u6570\u636e\u4f20\u9012\u7684\uff0c\u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u4f4e\u5c42\u8fd8\u662f\u901a\u8fc7\u9501\u6765\u63a7\u5236\u6570\u636e\u4e4b\u95f4\u7684\u5b89\u5168\uff1b\u548c\u6211\u4eec\u81ea\u5df1\u5b9e\u73b0\u7684\u5dee\u522b,\u52a0\u5165\u4e86\u534f\u7a0b\u6302\u8d77\u548c\u901a\u77e5\u7684\u529f\u80fd\uff0c\u4f7f\u5f97\u534f\u7a0b\u66f4\u52a0\u7684\u5feb\u901f\u3002"]}),"\n",(0,c.jsx)(t.h2,{id:"\u53d1\u9001\u6d88\u606f\u65f6",children:"\u53d1\u9001\u6d88\u606f\u65f6\uff1a"}),"\n",(0,c.jsx)(t.p,{children:"channel\u5df2\u7ecf\u5173\u95ed\uff0c\u90a3\u5c31\u4e0d\u80fd\u53d1\u3002panic\u6389\u3002\n\u770b\u4e00\u4e0b\u6709\u6ca1\u6709\u963b\u585e\u5728\u8bfb\u64cd\u4f5c\u4e0a\u7684goroutine\uff0c\u6709\u7684\u8bdd\u53d6\u51fa\u4e0a\u4e00\u6b21\u63a5\u6536\u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u628a\u53d1\u9001\u7684\u5143\u7d20\u63d2\u5165\u5230\u7f13\u51b2\u69fd\u5c3e\u90e8\u3002\u6240\u4ee5\u5199\u5165\u6709\u5e8f\uff0c\u8f93\u51fa\u4e5f\u662f\u6709\u5e8f\u7684\u3002\n\u6ca1\u6709\u88ab\u963b\u585e\u7684goroutine\u3002\u5982\u679c\u5e26buffer\uff0cbuffer\u8fd8\u6709\u7a7a\u4f4d\uff0c\u5c31\u653e\u5728buffer\u91cc\u3002\u5426\u5219\u5c31\u963b\u585e\u6302\u8d77\u5f53\u524d\u53d1\u9001\u6d88\u606f\u7684goroutine\u3002"}),"\n",(0,c.jsx)(t.h2,{id:"\u8bfb\u53d6\u6d88\u606f\u65f6",children:"\u8bfb\u53d6\u6d88\u606f\u65f6\uff1a"}),"\n",(0,c.jsx)(t.p,{children:"channel\u5df2\u7ecf\u5173\u95ed\uff0c\u4e5f\u53ef\u4ee5\u8bfb\uff0c\u53ea\u662f\u8bfb\u51fa\u6765\u7684\u6570\u636e\u4e3a\u7a7a\u3002\n\u770b\u4e00\u4e0b\u6709\u6ca1\u6709\u963b\u585e\u7684\u5199\u64cd\u4f5c\u7684goroutine\uff0c\u6709\u7684\u8bdd\u5524\u9192\u5b83\u3002\u8bfb\u53d6\u5b83\u53d1\u9001\u7684\u6570\u636e(A)\u3002\n\u8bfb\u53d6\u540e\u7684\u6570\u636e(A)\u653e\u54ea\uff0c\u89c6\u4e4e\u662f\u5e26buffer\u8fd8\u662f\u65e0buffer\u3002\u65e0buffer\u7684\u8bdd\uff0c\u5c31\u76f4\u63a5\u628a\u5199\u6570\u636e(A)\u7ed9\u8bfb\u53d6\u8005\u3002\u5e26buffer\u7684\u8bdd\uff0c\u5c31\u5148\u770bbuffer\u91cc\u662f\u5426\u6709\u6570\u636e(B)\uff0c\u6709\u5c31\u628a\u6570\u636e(B)\u7ed9\u8bfb\u53d6\u8005\uff0c\u518d\u628a\u6570\u636e(A)\u653e\u5230\u539f\u6765\u6570\u636e(B)\u7a7a\u51fa\u6765\u7684\u4f4d\u7f6e\u4e0a\u3002"}),"\n",(0,c.jsx)(t.h2,{id:"chan-\u7ed3\u6784\u4f53\u89e3\u8bfb",children:"chan \u7ed3\u6784\u4f53\u89e3\u8bfb"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-go",children:"type hchan struct {\n\tqcount   uint           // \u961f\u5217\u4e2d\u7684\u6570\u636e\u91cf\n\tdataqsiz uint           // \u961f\u5217\u7684\u5bb9\u91cf\n\tbuf      unsafe.Pointer // \u5b58\u50a8\u6570\u636e\u7684\u7f13\u51b2\u533a\n\telemsize uint16         //\u5143\u7d20\u7684\u5360\u4f4d\u5927\u5c0f\n\tclosed   uint32         //\u5173\u95ed\u6807\u5fd7\u4f4d\uff0c0 \u672a\u5173\u95ed\uff0c1 \u5173\u95ed\n\telemtype *_type // \u5143\u7d20\u7c7b\u578b\n\tsendx    uint   // \u53d1\u9001index\n\trecvx    uint   // \u63a5\u6536index\n\trecvq    waitq  // \u63a5\u6536\u7b49\u5f85\u961f\u5217\uff0c\u5b58\u50a8\u4e86\u63a5\u6536\u6302\u8d77\u7684g\n\tsendq    waitq  // \u5b58\u50a8\u4e86\u6302\u8d77\u7684\u53d1\u9001\u961f\u5217\n    //\u9501\uff0c\u4fdd\u62a4hchan\u91cc\u9762\u7684\u5b57\u6bb5\n\tlock mutex\n}\n"})}),"\n",(0,c.jsx)(t.h2,{id:"chansend-\u53d1\u9001\u6e90\u7801\u89e3\u8bfb",children:"chansend \u53d1\u9001\u6e90\u7801\u89e3\u8bfb"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-go",children:'func chansend(c *hchan, ep unsafe.Pointer, block bool, callerpc uintptr) bool {\n\t//\u52a0\u9501\n\tlock(&c.lock)\n    //1\u3001\u5982\u679c\u5173\u95ed\u5c31panic\uff0c\u4e0d\u80fd\u53d1\u9001\u5230\u4e00\u4e2a\u5173\u95ed\u7684channel\n\tif c.closed != 0 {\n\t\tunlock(&c.lock)\n\t\tpanic(plainError("send on closed channel"))\n\t}\n    //2\u3001\u63a5\u6536\u961f\u5217\u4e2d\u53d6\u51fa\u4e00\u4e2ag\n\tif sg := c.recvq.dequeue(); sg != nil {\n\t\t//\u627e\u5230\u4e00\u4e2a\u7b49\u5f85\u7684\u63a5\u6536g\uff0c\u628a\u6570\u636e\u76f4\u63a5\u590d\u5236\u5230g\u7684stack\u4e0a\uff0c\u5e76\u628a\u5b83\u5b89\u6392\u5728\u4e0b\u4e00\u6b21\u8c03\u5ea6\u4e0a\n\t\tsend(c, sg, ep, func() { unlock(&c.lock) }, 3)\n\t\treturn true\n\t}\n    //3\u3001\u5982\u679c\u7f13\u51b2\u961f\u5217\u8fd8\u6709\u7a7a\u95f4\n\tif c.qcount < c.dataqsiz {\n\t\t// \u5c06\u8981\u53d1\u9001\u7684\u6d88\u606f\u653e\u5165\u961f\u5217\u4e2d\n\t\tqp := chanbuf(c, c.sendx)\n\t\tif raceenabled {\n\t\t\traceacquire(qp)\n\t\t\tracerelease(qp)\n\t\t}\n\t\ttypedmemmove(c.elemtype, qp, ep)\n\t\tc.sendx++\n\t\t//\u8bb0\u5f97\u5f52\u4f4d\n\t\tif c.sendx == c.dataqsiz {\n\t\t\tc.sendx = 0\n\t\t}\n\t\t//\u653e\u5165\u4e00\u4e2a+1\uff0c\u53d6\u51fa\u4e00\u4e2a-1\n\t\tc.qcount++\n\t\tunlock(&c.lock)\n\t\treturn true\n\t}\n\n\tif !block {\n\t\tunlock(&c.lock)\n\t\treturn false\n\t}\n    //4\u3001\u5982\u679c\u6ca1\u6709\u7f13\u51b2\u533a\u53ef\u7528\uff0c\u628a\u5f53\u524d\u7684g\u6302\u8d77\uff0c\u5e76\u52a0\u5165\u5230\u53d1\u9001\u961f\u5217\u4e2d\n\tgp := getg()\n\tmysg := acquireSudog()\n\tmysg.releasetime = 0\n\tif t0 != 0 {\n\t\tmysg.releasetime = -1\n\t}\n\t// No stack splits between assigning elem and enqueuing mysg\n\t// on gp.waiting where copystack can find it.\n\tmysg.elem = ep\n\tmysg.waitlink = nil\n\tmysg.g = gp\n\tmysg.isSelect = false\n\tmysg.c = c\n\tgp.waiting = mysg\n\tgp.param = nil\n\tc.sendq.enqueue(mysg)\n\tgoparkunlock(&c.lock, waitReasonChanSend, traceEvGoBlockSend, 3)\n\t// Ensure the value being sent is kept alive until the\n\t// receiver copies it out. The sudog has a pointer to the\n\t// stack object, but sudogs aren\'t considered as roots of the\n\t// stack tracer.\n\tKeepAlive(ep)\n\n\t// someone woke us up.\n\tif mysg != gp.waiting {\n\t\tthrow("G waiting list is corrupted")\n\t}\n\tgp.waiting = nil\n\tif gp.param == nil {\n\t\tif c.closed == 0 {\n\t\t\tthrow("chansend: spurious wakeup")\n\t\t}\n\t\tpanic(plainError("send on closed channel"))\n\t}\n\tgp.param = nil\n\tif mysg.releasetime > 0 {\n\t\tblockevent(mysg.releasetime-t0, 2)\n\t}\n\tmysg.c = nil\n\treleaseSudog(mysg)\n\treturn true\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"chanrecv-\u63a5\u6536\u89e3\u8bfb",children:"chanrecv \u63a5\u6536\u89e3\u8bfb"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-go",children:'func chanrecv(c *hchan, ep unsafe.Pointer, block bool) (selected, received bool) {\n\t\n    //\u5148\u68c0\u67e5\u5982\u679c\u961f\u5217\u4e2d\u6ca1\u6709\u5143\u7d20\uff0c\u5e76\u4e14\u53d1\u9001\u7b49\u5f85\u961f\u5217\u4e2d\u4e5f\u6ca1\u6709\u6302\u8d77\u7684g\uff0c\u5e76\u4e14\u672a\u5173\u95ed\u5c31\u76f4\u63a5\u8fd4\u56de\n    if !block && (c.dataqsiz == 0 && c.sendq.first == nil ||\n\t\tc.dataqsiz > 0 && atomic.Loaduint(&c.qcount) == 0) &&\n\t\tatomic.Load(&c.closed) == 0 {\n\t\treturn\n\t}\n    //\u52a0\u9501\n\tlock(&c.lock)\n    //1\u3001\u5982\u679cchannel\u5df2\u7ecf\u5173\u95ed\u5e76\u4e14\u961f\u5217\u5143\u7d20\u4e2a\u6570\u4e3a0\uff0c\u5219\u8fd4\u56de\uff0c\u4e0d\u4f1a\u62a5panic\n\tif c.closed != 0 && c.qcount == 0 {\n\t\tif raceenabled {\n\t\t\traceacquire(c.raceaddr())\n\t\t}\n\t\tunlock(&c.lock)\n\t\tif ep != nil {\n\t\t\ttypedmemclr(c.elemtype, ep)\n\t\t}\n\t\treturn true, false\n\t}\n    //2\u3001\n\tif sg := c.sendq.dequeue(); sg != nil {\n\t\t// Found a waiting sender. If buffer is size 0, receive value\n\t\t// directly from sender. Otherwise, receive from head of queue\n\t\t// and add sender\'s value to the tail of the queue (both map to\n\t\t// the same buffer slot because the queue is full).\n\t\t// \u5982\u679cbuffer\u662f0\uff0c\u4ece\u53d1\u9001\u4e2d\u76f4\u63a5\u83b7\u53d6\u5e76\u63a5\u6536\uff1b\u9664\u6b64\u4e4b\u5916\uff0c\u4ece\u961f\u5217\u5934\u63a5\u6536\u5e76\u4e14\u53d1\u9001\u503c\u5230\u961f\u5c3e\n\t\trecv(c, sg, ep, func() { unlock(&c.lock) }, 3)\n\t\treturn true, true\n\t}\n    //3\u3001\u5982\u679c\u7f13\u5b58\u961f\u5217\u4e2d\u8fd8\u6709\u5143\u7d20\uff0c\u5c31\u53d6\u51fa\u6765\u63a5\u6536\n\tif c.qcount > 0 {\n\t\t// Receive directly from queue\n\t\tqp := chanbuf(c, c.recvx)\n\t\tif raceenabled {\n\t\t\traceacquire(qp)\n\t\t\tracerelease(qp)\n\t\t}\n\t\tif ep != nil {\n\t\t\ttypedmemmove(c.elemtype, ep, qp)\n\t\t}\n\t\ttypedmemclr(c.elemtype, qp)\n\t\tc.recvx++\n\t\tif c.recvx == c.dataqsiz {\n\t\t\tc.recvx = 0\n\t\t}\n\t\tc.qcount--\n\t\tunlock(&c.lock)\n\t\treturn true, true\n\t}\n\n\tif !block {\n\t\tunlock(&c.lock)\n\t\treturn false, false\n\t}\n\n\t// \u6ca1\u6709\u53ef\u7528\u7684\uff0c\u5c31\u6302\u8d77\u5f53\u524d\u7684g\uff0c\u5e76\u653e\u5165\u63a5\u6536\u7b49\u5f85\u961f\u5217\u4e2d\n\tgp := getg()\n\tmysg := acquireSudog()\n\tmysg.releasetime = 0\n\tif t0 != 0 {\n\t\tmysg.releasetime = -1\n\t}\n\t// No stack splits between assigning elem and enqueuing mysg\n\t// on gp.waiting where copystack can find it.\n\tmysg.elem = ep\n\tmysg.waitlink = nil\n\tgp.waiting = mysg\n\tmysg.g = gp\n\tmysg.isSelect = false\n\tmysg.c = c\n\tgp.param = nil\n\tc.recvq.enqueue(mysg)\n\tgoparkunlock(&c.lock, waitReasonChanReceive, traceEvGoBlockRecv, 3)\n\n\t// someone woke us up\n\tif mysg != gp.waiting {\n\t\tthrow("G waiting list is corrupted")\n\t}\n\tgp.waiting = nil\n\tif mysg.releasetime > 0 {\n\t\tblockevent(mysg.releasetime-t0, 2)\n\t}\n\tclosed := gp.param == nil\n\tgp.param = nil\n\tmysg.c = nil\n\treleaseSudog(mysg)\n\treturn true, !closed\n}\n'})}),"\n",(0,c.jsx)(t.h1,{id:"waitq-\u53cc\u5411\u94fe\u8868\u89e3\u8bfb",children:"waitq \u53cc\u5411\u94fe\u8868\u89e3\u8bfb"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-go",children:"// waitq \u53ea\u4fdd\u5b58\u4e86\u4e00\u4e2a\u6267\u884c\u5934\u548c\u4e00\u4e2a\u6267\u884c\u5c3e\u7684\u6307\u9488\uff0c\u4fdd\u5b58\u7684\u5143\u7d20\u90fd\u662fsudog\ntype waitq struct {\n\tfirst *sudog\n\tlast  *sudog\n}\n// sudog \u4ee3\u8868\u4e00\u4e2ago\u5728\u4e00\u4e2a\u7b49\u5f85\u961f\u5217\u4e2d\ntype sudog struct {\n    //\u4e0b\u9762\u7684\u5b57\u6bb5\u53d7hchan.lock\u9501\u7684\u4fdd\u62a4\uff0c\n\tg *g\n\n\t// isSelect \u4e3atrue\u8868\u793ag\u6b63\u5728\u53c2\u4e0eselect\u9009\u62e9\uff0cg.selectDone\u5fc5\u987b\u88abcas\u7b97\u6cd5\u8c03\u7528\u624d\u80fd\u5524\u9192g\n\tisSelect bool\n\tnext     *sudog // \u4e0b\u4e00\u4e2a \u8fd9\u4e2a\u4e24\u4e2a\u5b57\u6bb5\u7ec4\u6210\u4e86\u4e00\u4e2a\u53cc\u5411\u94fe\u8868\n\tprev     *sudog // \u4e0a\u4e00\u4e2a\n    ...\n}\n"})}),"\n",(0,c.jsx)(t.h3,{id:"\u5165\u961f\u5217",children:"\u5165\u961f\u5217"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-go",children:"// \u961f\u5934\u548c\u961f\u5c3e\u5206\u522b\u6307\u5411\u7b2c\u4e00\u4e2a\u5143\u7d20\u548c\u6700\u540e\u4e00\u4e2a\u5143\u7d20\uff0c\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u5143\u7d20\uff0c\u90a3\u4e48\u961f\u5934\u548c\u961f\u5c3e\u90fd\u6307\u5411\u4ed6\nfunc (q *waitq) enqueue(sgp *sudog) {\n\tsgp.next = nil\n\tx := q.last\n\tif x == nil {\n\t\tsgp.prev = nil\n\t\tq.first = sgp\n\t\tq.last = sgp\n\t\treturn\n\t}\n\tsgp.prev = x\n\tx.next = sgp\n\tq.last = sgp\n}\n"})}),"\n",(0,c.jsx)(t.h3,{id:"\u51fa\u961f\u5217",children:"\u51fa\u961f\u5217"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-go",children:"// \u51fa\u961f\u5217\u7684\u65f6\u5019\uff0c\u79fb\u52a8\u961f\u5934\u5f80\u540e\u79fb\u52a8\uff0c\u5e76\u8bbe\u7f6e\u961f\u5934\u7684\u5143\u7d20\u6307\u5411\u4e0b\u4e00\u4e2a\u4e3anil\uff0c\u662f\u4e00\u4e2aFIFO\u961f\u5217\nfunc (q *waitq) dequeue() *sudog {\n\tfor {\n\t\tsgp := q.first\n\t\tif sgp == nil {\n\t\t\treturn nil\n\t\t}\n\t\ty := sgp.next\n\t\tif y == nil {\n\t\t\tq.first = nil\n\t\t\tq.last = nil\n\t\t} else {\n\t\t\ty.prev = nil\n\t\t\tq.first = y\n\t\t\tsgp.next = nil // mark as removed (see dequeueSudog)\n\t\t}\n        //\u5f53g\u662f\u5728select\u963b\u585e\u7684\u65f6\u5019\u9700\u8981\u8bbe\u7f6eselectDone\u4e3a1\u624d\u80fd\u5524\u9192g\n\t\tif sgp.isSelect {\n\t\t\tif !atomic.Cas(&sgp.g.selectDone, 0, 1) {\n\t\t\t\tcontinue\n\t\t\t}\n\t\t}\n\n\t\treturn sgp\n\t}\n}\n"})}),"\n",(0,c.jsx)(t.h1,{id:"lock-\u5b9e\u73b0\u89e3\u8bfb",children:"lock \u5b9e\u73b0\u89e3\u8bfb"}),"\n",(0,c.jsxs)(t.p,{children:["\u52a0\u9501\u548c\u89e3\u9501\u6ca1\u6709\u4f7f\u7528",(0,c.jsx)(t.code,{children:"mutex"}),"\uff0c\u800c\u662f\u4f7f\u7528\u4e86",(0,c.jsx)(t.code,{children:"futex"}),"\u6280\u672f\uff0c\u8fd9\u4e2a\u662f\u5728",(0,c.jsx)(t.code,{children:"linux"}),"\u7cfb\u7edf\u73af\u5883\u4e0b\u7684\uff0c",(0,c.jsx)(t.code,{children:"futex"}),"\u662f\u4e00\u79cd\u9ad8\u6548\u7684\u52a0\u9501\u65b9\u5f0f\u3002"]}),"\n",(0,c.jsx)(t.h2,{id:"lock-\u52a0\u9501",children:"lock \u52a0\u9501"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-go",children:'func lock(l *mutex) {\n\tgp := getg()\n\n\tif gp.m.locks < 0 {\n\t\tthrow("runtime\xb7lock: lock count")\n\t}\n\tgp.m.locks++\n\n\t// Speculative grab for lock.\n\tv := atomic.Xchg(key32(&l.key), mutex_locked)\n\tif v == mutex_unlocked {\n\t\treturn\n\t}\n\n\t// wait is either MUTEX_LOCKED or MUTEX_SLEEPING\n\t// depending on whether there is a thread sleeping\n\t// on this mutex. If we ever change l->key from\n\t// MUTEX_SLEEPING to some other value, we must be\n\t// careful to change it back to MUTEX_SLEEPING before\n\t// returning, to ensure that the sleeping thread gets\n\t// its wakeup call.\n\twait := v\n\n\t// On uniprocessors, no point spinning.\n\t// On multiprocessors, spin for ACTIVE_SPIN attempts.\n\tspin := 0\n\tif ncpu > 1 {\n\t\tspin = active_spin\n\t}\n\tfor {\n\t\t// Try for lock, spinning.\n\t\tfor i := 0; i < spin; i++ {\n\t\t\tfor l.key == mutex_unlocked {\n\t\t\t\tif atomic.Cas(key32(&l.key), mutex_unlocked, wait) {\n\t\t\t\t\treturn\n\t\t\t\t}\n\t\t\t}\n\t\t\tprocyield(active_spin_cnt)\n\t\t}\n\n\t\t// Try for lock, rescheduling.\n\t\tfor i := 0; i < passive_spin; i++ {\n\t\t\tfor l.key == mutex_unlocked {\n\t\t\t\tif atomic.Cas(key32(&l.key), mutex_unlocked, wait) {\n\t\t\t\t\treturn\n\t\t\t\t}\n\t\t\t}\n\t\t\tosyield()\n\t\t}\n\n\t\t// Sleep.\n\t\tv = atomic.Xchg(key32(&l.key), mutex_sleeping)\n\t\tif v == mutex_unlocked {\n\t\t\treturn\n\t\t}\n\t\twait = mutex_sleeping\n\t\tfutexsleep(key32(&l.key), mutex_sleeping, -1)\n\t}\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"unlock-\u89e3\u9501",children:"unlock \u89e3\u9501"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-go",children:'func unlock(l *mutex) {\n\tv := atomic.Xchg(key32(&l.key), mutex_unlocked)\n\tif v == mutex_unlocked {\n\t\tthrow("unlock of unlocked lock")\n\t}\n\tif v == mutex_sleeping {\n\t\tfutexwakeup(key32(&l.key), 1)\n\t}\n\n\tgp := getg()\n\tgp.m.locks--\n\tif gp.m.locks < 0 {\n\t\tthrow("runtime\xb7unlock: lock count")\n\t}\n\tif gp.m.locks == 0 && gp.preempt { // restore the preemption request in case we\'ve cleared it in newstack\n\t\tgp.stackguard0 = stackPreempt\n\t}\n}\n'})}),"\n",(0,c.jsx)(t.h1,{id:"channel-\u7684\u4f18\u70b9",children:"Channel \u7684\u4f18\u70b9"}),"\n",(0,c.jsxs)(t.p,{children:["1\u3001\u548c",(0,c.jsx)(t.code,{children:"goroutine"}),"\u8c03\u5ea6\u7ed3\u5408\u8d77\u6765\uff0c\u4f7f\u5f97\u6570\u636e\u4f20\u8f93\u66f4\u52a0\u7684\u9ad8\u6548\u548c\u5feb\u901f\u3002\n2\u3001\u4f7f\u7528\u7684\u9501\u4e0d\u662f\u64cd\u4f5c\u7cfb\u7edf\u7684",(0,c.jsx)(t.code,{children:"mutex"}),"\u4e92\u65a5\u9501\uff0c\u800c\u662f\u4f7f\u7528\u7684",(0,c.jsx)(t.code,{children:"futex"}),"\u6280\u672f\u3002"]}),"\n",(0,c.jsx)(t.h1,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:"http://cbsheng.github.io/posts/go%E7%9A%84channel%E6%BA%90%E7%A0%81%E5%B1%82%E7%90%86%E8%A7%A3/",children:"http://cbsheng.github.io/posts/go%E7%9A%84channel%E6%BA%90%E7%A0%81%E5%B1%82%E7%90%86%E8%A7%A3/"})}),"\n",(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:"https://zh.wikipedia.org/wiki/Futex",children:"https://zh.wikipedia.org/wiki/Futex"})}),"\n"]})]})}function g(n={}){const{wrapper:t}={...(0,l.R)(),...n.components};return t?(0,c.jsx)(t,{...n,children:(0,c.jsx)(u,{...n})}):u(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>s,x:()=>o});var c=e(6540);const l={},i=c.createContext(l);function s(n){const t=c.useContext(i);return c.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),c.createElement(i.Provider,{value:t},n.children)}}}]);