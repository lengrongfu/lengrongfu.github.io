"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[1775],{431:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var t=c(4848),o=c(8453);const r={slug:"Go-sync-package",title:"Go sync package",authors:["rongfu"],tags:["golang"]},l="Go sync package",d={permalink:"/blog/Go-sync-package",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-06-18-Go-sync-package.md",source:"@site/blog/2019-06-18-Go-sync-package.md",title:"Go sync package",description:"Go sync \u5305\u4f7f\u7528\u548c\u5206\u6790",date:"2019-06-18T00:00:00.000Z",tags:[{inline:!1,label:"golang",permalink:"/blog/tags/golang",description:"golang"}],readingTime:12.345,hasTruncateMarker:!0,authors:[{name:"Leng Student",title:"Softwore Developer",url:"https://github.com/lengrongfu",image_hrl:"https://avatars.githubusercontent.com/u/15009201?v=4",socials:{github:"https://github.com/lengrongfu"},key:"rongfu",page:null}],frontMatter:{slug:"Go-sync-package",title:"Go sync package",authors:["rongfu"],tags:["golang"]},unlisted:!1,prevItem:{title:"Linux sed",permalink:"/blog/linux-sed"},nextItem:{title:"Go \u5e76\u53d1\u7f16\u7a0b\u6d4b\u8bd5\u5206\u6790",permalink:"/blog/Go \u5e76\u53d1\u7f16\u7a0b\u6d4b\u8bd5\u5206\u6790"}},s={authorsImageUrls:[void 0]},i=[{value:"Cond",id:"cond",level:2},{value:"func (c *Cond) Wait()",id:"func-c-cond-wait",level:3},{value:"func (*Cond) Signal",id:"func-cond-signal",level:3},{value:"func (*Cond) Broadcast",id:"func-cond-broadcast",level:3},{value:"Mutex",id:"mutex",level:2},{value:"func (*Mutex) Lock",id:"func-mutex-lock",level:3},{value:"func (*Mutex) Unlock",id:"func-mutex-unlock",level:3},{value:"Once",id:"once",level:2},{value:"func (*Once) Do",id:"func-once-do",level:3},{value:"Pool",id:"pool",level:2},{value:"RWMutex",id:"rwmutex",level:2},{value:"func (*RWMutex) Lock",id:"func-rwmutex-lock",level:3},{value:"func (*RWMutex) RLock",id:"func-rwmutex-rlock",level:3},{value:"func (*RWMutex) RLocker",id:"func-rwmutex-rlocker",level:3},{value:"func (*RWMutex) RUnlock",id:"func-rwmutex-runlock",level:3},{value:"func (*RWMutex) Unlock",id:"func-rwmutex-unlock",level:3},{value:"Context",id:"context",level:2},{value:"\u6d89\u53ca\u5230\u7684\u7b97\u6cd5",id:"\u6d89\u53ca\u5230\u7684\u7b97\u6cd5",level:2},{value:"CAS \u7b97\u6cd5",id:"cas-\u7b97\u6cd5",level:3},{value:"\u4fe1\u53f7\u91cf\u7b97\u6cd5",id:"\u4fe1\u53f7\u91cf\u7b97\u6cd5",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Go sync"})," \u5305\u4f7f\u7528\u548c\u5206\u6790"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"sync"}),"\u5305\u63d0\u4f9b\u4e86\u57fa\u672c\u7684\u540c\u6b65\u539f\u8bed\uff0c\u6bd4\u5982\u540c\u6b65\u9501\uff0c\u8fd8\u6709\u5176\u4ed6\u7684",(0,t.jsx)(n.code,{children:"Once"}),"\u548c",(0,t.jsx)(n.code,{children:"WaitGroup"}),"\uff0c\u5927\u591a\u6570\u90fd\u7528\u4e8e\u4f4e\u7ea7\u522b\u7684\u5e93\uff0c\u9ad8\u7ea7\u522b\u7684\u540c\u6b65\u63a7\u5236\u6700\u597d\u7528",(0,t.jsx)(n.code,{children:"channels"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"cond",children:"Cond"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Cond"}),"\u5b9e\u73b0\u4e86\u4e00\u4e2a\u6761\u4ef6\u53d8\u91cf,\u7b49\u5f85\u6216\u5ba3\u5e03\u4e8b\u4ef6\u53d1\u751f\u7684",(0,t.jsx)(n.code,{children:"goroutines"}),"\u7684\u96c6\u5408\u70b9\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4efb\u4f55\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"Cond"}),"\u90fd\u6709\u4efb\u610f\u4e00\u4e2a\u76f8\u5173\u7684\u9501\u5bf9\u8c61",(0,t.jsx)(n.code,{children:"L"}),"\uff0c\u53ef\u4ee5\u662f\u540c\u6b65\u9501\u6216\u8005\u8bfb\u5199\u9501\u3002\u4e0d\u8bba\u9009\u62e9\u54ea\u4e00\u4e2a\u5fc5\u987b\u5728\u6761\u4ef6\u6539\u53d8\u548c\u7b49\u5f85\u8c03\u7528\u65b9\u6cd5\u524d\u4e0d\u88ab\u6539\u53d8\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Cond"}),"\u4f7f\u7528\u4e4b\u540e\u4e0d\u80fd\u88ab\u590d\u5236\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Cond"}),"\u4e3b\u8981\u7528\u4e8e",(0,t.jsx)(n.code,{children:"go"}),"\u4e4b\u95f4\u7684\u6d88\u606f\u901a\u77e5\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"func-c-cond-wait",children:"func (c *Cond) Wait()"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (c *Cond) Wait()\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7b49\u5f85",(0,t.jsx)(n.code,{children:"c.L"}),"\u539f\u5b50\u89e3\u9501\u4ee5\u53ca\u6682\u505c\u6267\u884c\u8c03\u7528",(0,t.jsx)(n.code,{children:"goroutine"}),"\uff0c\u4e4b\u540e\u518d\u6062\u590d\u6267\u884c\uff0c\u5728\u8fd4\u56de\u524d\u52a0\u9501",(0,t.jsx)(n.code,{children:"c.L"}),",\u9664\u975e\u88ab\u5e7f\u64ad\u6216\u4fe1\u53f7\u5524\u9192\uff0c\u5426\u5219\u7b49\u5f85\u65e0\u6cd5\u8fd4\u56de\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u4f8b\u5b50:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"c.L.Lock()\nfor !condition() {\n    c.Wait()\n}\n... make use of condition ...\nc.L.Unlock()\n"})}),"\n",(0,t.jsx)(n.h3,{id:"func-cond-signal",children:"func (*Cond) Signal"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (*Cond) Signal\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Signal"}),"\u51fd\u6570\u662f\u53d1\u9001\u4e00\u4e2a\u4fe1\u53f7\uff0c\u7528\u4e8e\u5524\u9192\u4e00\u4e2a\u7b49\u5f85\u7684",(0,t.jsx)(n.code,{children:"go"}),",\u5982\u679c\u6709\u591a\u4e2a",(0,t.jsx)(n.code,{children:"go"}),"\u5904\u4e8e\u7b49\u5f85\u72b6\u6001\uff0c\u5219\u4e0d\u80fd\u63a7\u5236\u5524\u9192\u90a3\u4e2a",(0,t.jsx)(n.code,{children:"go"}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"func-cond-broadcast",children:"func (*Cond) Broadcast"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (*Cond) Broadcast\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Broadcast"}),"\u5e7f\u64ad\u51fd\u6570\u7528\u4e8e\u5524\u9192\u6240\u6709\u7b49\u5f85\u7684",(0,t.jsx)(n.code,{children:"go"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"mutex",children:"Mutex"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Mutex"}),"\u5c31\u662f\u4e00\u4e2a\u4e92\u65a5\u9501\u7684\u3002\u4fdd\u8bc1\u4efb\u4f55\u8d44\u6e90\u53ea\u80fd\u88ab\u4efb\u4f55\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"go"}),"\u4f7f\u7528\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type Mutex struct {\n\tstate int32 # \u72b6\u6001\n\tsema  uint32 # \u4fe1\u53f7\u91cf\u5b57\u6bb5semaphore\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"func-mutex-lock",children:"func (*Mutex) Lock"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (m *Mutex) Lock()\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u9501",(0,t.jsx)(n.code,{children:"m"}),",\u5982\u679c\u9501\u5df2\u88ab\u4f7f\u7528\uff0c\u5219\u8c03\u7528",(0,t.jsx)(n.code,{children:"goroutine"}),"\u5c06\u963b\u585e\uff0c\u76f4\u5230\u4e92\u65a5\u9501\u53ef\u7528\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"# Lock \u51fd\u6570,\u4f7f\u7528CAS\u7b97\u6cd5\uff0c\u5982\u679c\u9501\u72b6\u6001\u662f0\uff0c\u671f\u671b\u503c\u4e5f\u662f0\uff0c\u5c31\u4fee\u6539\u4e3a1\uff0c\u5982\u679c\u518d\u6b21\u52a0\u9501\u65f6\uff0c\u5185\u5b58\u503c\u662f1\uff0c\u671f\u671b\u503c\u662f0\uff0c\u64cd\u4f5c\u5c31\u662f\u5931\u8d25\uff0c\u5f97\u5230\u7684\u5c31\u662ffalse;\u7b2c\u4e00\u6b21\u52a0\u9501\u65f6m.state\u662f0\nif atomic.CompareAndSwapInt32(&m.state, 0, mutexLocked) {\n\t\tif race.Enabled {\n\t\t\trace.Acquire(unsafe.Pointer(m))\n\t\t}\n\t\treturn\n\t}\n\t.....\n# \u5982\u679c\u518d\u6b21\u52a0\u9501\u5c31\u4f1a\u8fdb\u5165go\u7b49\u5f85\u961f\u5217\u4e2d\u3002\u5982\u679clifo\u4e3atrue,\u961f\u5217\u7b49\u5f85\u5728\u7b49\u5f85\u961f\u5217\u7684\u5934\u90e8\u3002\t\n# m.sema \u662f\u4fe1\u53f7\u91cf,\u8fd9\u4e2a\u65b9\u6cd5\u53efSemacquire\u65b9\u6cd5\u4e00\u6837\uff0c\u662f\u4e3a\u4e86Mutexes\u5b9e\u73b0\u7684\uff0c\u5982\u679clifo\u4e3atrue\uff0c\u5219\u5728\u7b49\u5f85\u961f\u5217\u7684\u5934\u90e8\u6392\u961f\u670d\u52a1\u5458\nruntime_SemacquireMutex(&m.sema, queueLifo)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"# Semacquire\u7b49\u5f85\u76f4\u5230* s> 0\u7136\u540e\u4ee5\u539f\u5b50\u65b9\u5f0f\u9012\u51cf\u5b83\u3002\nfunc runtime_Semacquire(s *uint32)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"func-mutex-unlock",children:"func (*Mutex) Unlock"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func (m *Mutex) Unlock()\n# \u89e3\u9501\u7684\u65f6\u5019\u5c31\u8fdb\u884cm.state\u539f\u5b50\u52a0-1\uff0c\u5982\u679c\u591a\u6b21\u89e3\u9501\u5c31\u4f1a\u8fd0\u884c\u65f6\u5f02\u5e38\u3002\nnew := atomic.AddInt32(&m.state, -mutexLocked)\nif (new+mutexLocked)&mutexLocked == 0 {\n\t\tthrow("sync: unlock of unlocked mutex")\n\t}\n....\n# \u8fd9\u4e2a\u65b9\u6cd5\u4e3b\u8981\u662f\u6267\u884c\u539f\u5b50\u7684\u9012\u589em.sema,\u5e76\u901a\u77e5\u4e00\u4e2a\u963b\u585e\u5728Semacquire\u7684\u7b49\u5f85goroutines\nruntime_Semrelease(&m.sema, false)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e92\u65a5\u9501\u4e0e",(0,t.jsx)(n.code,{children:"go"}),"\u4e0d\u7ed1\u5b9a\uff0c\u53ef\u4ee5",(0,t.jsx)(n.code,{children:"go1"}),"\u8fdb\u884c\u52a0\u9501,",(0,t.jsx)(n.code,{children:"go2"}),"\u8fdb\u884c\u89e3\u9501\u3002\u53ea\u8981\u89e3\u9501\u5728\u52a0\u9501\u540e\u64cd\u4f5c\u5c31\u884c\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"go"}),"\u4e2d\u7684\u4e92\u65a5\u9501\u662f\u901a\u8fc7\u4fe1\u53f7\u91cf\u548c"]}),"\n",(0,t.jsx)(n.h2,{id:"once",children:"Once"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Once"}),"\u662f\u4e00\u4e2a\u53ea\u6267\u884c\u4e00\u6b21\u52a8\u4f5c\u7684\u5bf9\u8c61\u3002\u4e00\u822c\u53ef\u4ee5\u7528\u4e8e\u8fde\u63a5\u5173\u95ed\uff0c\u4fdd\u8bc1\u53ea\u6267\u884c\u4e00\u6b21;\u6216\u8005\u7528\u4e8e\u6267\u884c\u521d\u59cb\u5316\uff0c\u4fdd\u8bc1\u53ea\u521d\u59cb\u5316\u4e00\u6b21\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"func-once-do",children:"func (*Once) Do"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (o *Once) Do(f func()) {\n\tif atomic.LoadUint32(&o.done) == 1 {\n\t\treturn\n\t}\n\t// Slow-path.\n\to.m.Lock()\n\tdefer o.m.Unlock()\n\tif o.done == 0 {\n\t\tdefer atomic.StoreUint32(&o.done, 1)\n\t\tf()\n\t}\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c",(0,t.jsx)(n.code,{children:"once.Do(f)"}),"\u88ab\u8c03\u7528\u591a\u6b21\uff0c\u4e5f\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\uff0c\u5373\u65f6\u53c2\u6570",(0,t.jsx)(n.code,{children:"f"}),"\u4e0d\u4e00\u81f4\u4e5f\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\u3002\u6bcf\u4e2a\u9700\u8981\u6267\u884c\u4e00\u6b21\u7684\u51fd\u6570\u90fd\u9700\u8981\u521b\u5efa\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"Once"}),"\u5bf9\u8c61\u3002\u6267\u884c",(0,t.jsx)(n.code,{children:"f"}),"\u51fd\u6570\u65f6\u5982\u679c\u51fa\u73b0",(0,t.jsx)(n.code,{children:"panics"}),"\u4e5f\u4f1a\u8ba4\u4e3a\u6267\u884c\u8fc7\u4e86\uff0c\u4e0d\u4f1a\u518d\u6b21\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u51fa\u73b0\u5faa\u73af\u8c03\u7528\u5c31\u4f1a\u51fa\u73b0\u6b7b\u9501\uff1b\u8fd9\u4e2a\u70b9\u770b\u6e90\u7801\u5c31\u77e5\u9053\u4e86\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'once.Do(func() {\n\t\tonce.Do(func() {\n\t\t\tf("test")\n\t\t})\n\t})\n'})}),"\n",(0,t.jsx)(n.h2,{id:"pool",children:"Pool"}),"\n",(0,t.jsxs)(n.p,{children:["\u6c60\u662f\u4e00\u7ec4\u53ef\u4ee5\u5355\u72ec\u4fdd\u5b58\u548c\u68c0\u7d22\u7684\u4e34\u65f6\u5bf9\u8c61,\u6c60\u4e2d\u7684\u5bf9\u8c61\u53ef\u80fd\u4f1a\u88ab\u81ea\u52a8\u5220\u9664\uff0c\u6c60\u4f7f\u7528\u65f6\u65f6\u5b89\u5168\u7684\uff1b\u6c60\u4e3b\u8981\u65f6\u7f13\u5b58\u5df2\u7ecf\u521b\u5efa\u4f46\u662f\u672a\u4f7f\u7528\u5230\u5bf9\u8c61\uff0c\u8fd9\u6837\u53ef\u4ee5\u51cf\u8f7bGC\u7684\u538b\u529b\uff1b",(0,t.jsx)(n.code,{children:"fmt"}),"\u5305\u4e2d\u4f7f\u7528\u7684\u6c60\u65f6\u6bd4\u8f83\u597d\u7684\uff0c\u5728\u5927\u8d1f\u8f7d\u4e0b\u8fdb\u884c\u6269\u5c55\uff0c\u5728\u8d1f\u8f7d\u964d\u4f4e\u65f6\u8fdb\u884c\u6536\u7f29\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"rwmutex",children:"RWMutex"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type RWMutex struct {\n\tw           Mutex  // \u5199\u4e92\u65a5\u9501\n\twriterSem   uint32 // \u5199\u4fe1\u53f7\u91cf\n\treaderSem   uint32 // \u8bfb\u4fe1\u53f7\u91cf\n\treaderCount int32  // \u8bfb\u963b\u585e\u7684\u6570\u91cf\n\treaderWait  int32  // \u8bfb\u653e\u5f03\u7684\u6570\u91cf\n}\nconst rwmutexMaxReaders = 1 << 30\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u52a0\u8bfb\u9501\u6700\u5927\u6b21\u6570\u662f",(0,t.jsx)(n.code,{children:"2^30"}),"\u6b21\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"RWMutex"}),"\u662f\u4e00\u4e2a\u8bfb\u5199\u4e92\u65a5\u9501\uff0c\u53ef\u4ee5\u62e5\u6709\u591a\u4e2a\u8bfb\u9501\u6216\u8005\u4e00\u4e2a\u5199\u9501\uff0c",(0,t.jsx)(n.code,{children:"RWMutex"}),"\u7684\u96f6\u503c\u72b6\u6001\u65f6\u662f\u4e92\u65a5\u9501,\u5199\u9501\u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e\u8bfb\u5199\u9501\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u89e3\u91ca\u4e00\u4e0b\u5199\u9501\u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e\u8bfb\u9501\uff1a\u6bd4\u5982\u6709",(0,t.jsx)(n.code,{children:"10"}),"\u4e2a",(0,t.jsx)(n.code,{children:"goroutines"}),"\u83b7\u53d6\u4e86\u8bfb\u9501\uff0c\u6b64\u65f6\u518d\u6709\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"go"}),"\u6765\u83b7\u53d6\u5199\u9501\uff0c\u8fd9\u4e2a",(0,t.jsx)(n.code,{children:"go"}),"\u5c31\u4f1a\u8fdb\u5165\u963b\u585e\u72b6\u6001,\u7136\u540e\u53c8\u6709\u4e00\u7ec4",(0,t.jsx)(n.code,{children:"go"}),"\u6765\u83b7\u53d6\u8bfb\u9501\uff0c\u6b64\u65f6\u5c31\u83b7\u53d6\u4e0d\u5230\u8bfb\u9501\u4e86\uff0c\u9700\u8981\u7b49\u524d\u9762\u7684\u8bfb\u9501\u5168\u90e8\u91ca\u653e\u5b8c\uff0c\u5e76\u4e14\u5199\u9501\u91ca\u653e\u8fc7\u540e\u624d\u80fd\u518d\u6b21\u83b7\u53d6\u8bfb\u9501\uff0c\u6240\u4ee5\u5c31\u662f\u8bf4\u5199\u9501\u4f18\u5148\u7ea7\u9ad8\u4e8e\u8bfb\u9501\u3002\u4e0d\u8fd9\u6837\u5904\u7406\u7684\u8bdd\u5199\u9501\u4f1a\u5904\u4e8e\u6c38\u4e45\u9965\u997f\u4e2d\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"func-rwmutex-lock",children:"func (*RWMutex) Lock"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (rw *RWMutex) Lock \n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7528\u4e8e",(0,t.jsx)(n.code,{children:"rw"}),"\u7684\u5199\u9501\uff0c\u5982\u679c\u9501\u662f\u5df2\u7ecf\u88ab\u8bfb\u6216\u5199\u4f7f\u7528\uff0c\u90a3\u9501\u5c06\u963b\u585e\u77e5\u9053\u53ef\u7528\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"func-rwmutex-rlock",children:"func (*RWMutex) RLock"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (rw *RWMutex) RLock \n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7528\u4e8e",(0,t.jsx)(n.code,{children:"rw"}),"\u7684\u8bfb\u9501\uff0c\u6b21\u9501\u4e0d\u80fd\u88ab\u9012\u5f52\u8c03\u7528\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"func-rwmutex-rlocker",children:"func (*RWMutex) RLocker"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (rw *RWMutex) RLocker\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"RLocker"}),"\u8fd4\u56de\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"Locker"}),"\u63a5\u53e3\uff0c\u901a\u8fc7\u8c03\u7528",(0,t.jsx)(n.code,{children:"Lock"}),"\u548c",(0,t.jsx)(n.code,{children:"Unlock"}),"\u6765\u5b9e\u73b0",(0,t.jsx)(n.code,{children:"rw.RLock"}),"\u548c",(0,t.jsx)(n.code,{children:"rw.RUnlock"}),"\u65b9\u6cd5\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"func-rwmutex-runlock",children:"func (*RWMutex) RUnlock"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (rw *RWMutex) RUnlock \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"RUnlock"}),"\u7528\u4e8e\u89e3\u9501\u5176\u4e2d\u4e00\u4e2a\u8bfb\u9501\uff0c\u5982\u679c\u6ca1\u6709\u52a0\u7684\u8bfb\u9501\u5c31\u4f1a\u51fa\u73b0\u5f02\u5e38\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"func-rwmutex-unlock",children:"func (*RWMutex) Unlock"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (rw *RWMutex) Unlock\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u89e3\u9664",(0,t.jsx)(n.code,{children:"rw"}),"\u7684\u5199\u9501\uff0c\u5982\u679c",(0,t.jsx)(n.code,{children:"rw"}),"\u662f\u6ca1\u6709\u52a0\u5199\u9501\u5c31\u4f1a\u51fa\u73b0\u8fd0\u884c\u65f6\u5f02\u5e38\u3002\u548c\u4e92\u65a5\u9501\u4e00\u6837",(0,t.jsx)(n.code,{children:"Mutex"}),",\u9501\u5bf9\u8c61\u548c",(0,t.jsx)(n.code,{children:"goroutines"}),"\u6ca1\u6709\u5173\u8054\uff0c\u53ef\u4ee5\u4efb\u610f",(0,t.jsx)(n.code,{children:"go"}),"\u52a0\u9501\uff0c\u4efb\u610f",(0,t.jsx)(n.code,{children:"go"}),"\u89e3\u9501\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Context"}),"\u4e3b\u8981\u7528\u4e8e\u5728\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"http request"}),"\u4e2d\uff0c\u542f\u52a8\u4e86\u591a\u4e2a",(0,t.jsx)(n.code,{children:"go"}),"\u53bb\u8bbf\u95ee\u5176\u4ed6\u8d44\u6e90\uff0c",(0,t.jsx)(n.code,{children:"context"}),"\u4e3b\u8981\u7528\u4e8e\u53ef\u4ee5\u7edf\u4e00\u63a7\u5236\u5176\u4ed6\u7684",(0,t.jsx)(n.code,{children:"go"}),"\u4e00\u8d77\u9000\u51fa\u3002\n",(0,t.jsx)(n.code,{children:"Context"}),"\u65b9\u6cd5\u53ef\u4ee5\u7531\u591a\u4e2a",(0,t.jsx)(n.code,{children:"go"}),"\u540c\u65f6\u4f7f\u7528\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Context"}),"\u5b9a\u4e49\u7684\u63a5\u53e3\u5982\u4e0b\uff0c\u4e3b\u8981\u5b9e\u73b0\u5982\u4e0b\u7684\u51e0\u4e2a\u529f\u80fd\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type Context interface {\n    //\u5b50go\u7528\u4e8e\u76d1\u542c\u7236go\u662f\u5426\u53d1\u8d77\u7ed3\u675f\u5f53\u524dgo\u7684\u6d88\u606f\n    Done() <-chan struct{}\n    // \u8fd4\u56de\u5173\u95ed\u7684\u539f\u56e0\n    Err() error\n    //\u8fd4\u56de\u5230\u671f\u65f6\u95f4\uff0c\u6bd4\u5982\u8bbe\u7f6e\u4e865s\u53d6\u6d88\uff0c\u90a3\u8fd4\u56de\u7684\u503c\u5c31\u662f5s\u540e\u7684\u65f6\u95f4\uff0cok is true if your setting deadling\n    Deadline() (deadline time.Time, ok bool)\n    //\u4ececontext\u4e2d\u53d6\u51fakey\u7684\u503c\n    Value(key interface{}) interface{}\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u65b9\u6cd5\u4e3b\u8981\u7531\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"# \u8bbe\u7f6e\u8d85\u65f6\u8fd4\u56de\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684context\nfunc WithTimeout(parent Context, timeout time.Duration) (Context, CancelFunc)\n# \u6ca1\u6709\u8d85\u65f6\u65f6\u95f4\uff0c\u53ea\u662f\u7528\u4e8e\u901a\u77e5\u5b50go\u6267\u884c\u5173\u95ed\nfunc WithCancel(parent Context) (ctx Context, cancel CancelFunc)\n# \u8bbe\u7f6e\u4e00\u4e2a\u503c\u5230context\u4e2d\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684ctx\nfunc WithValue(parent Context, key, val interface{}) Context\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3b\u8981\u4f7f\u7528\u7684\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"Http"}),"\u8bf7\u6c42\u4e2d\uff0c\u7528\u6765\u63a7\u5236\u5b50",(0,t.jsx)(n.code,{children:"go"}),"\u3002\u5982\u4e0b\u7684\u4ee3\u7801\u662f\u6a21\u62df\u5728\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"demo"}),"\u7684",(0,t.jsx)(n.code,{children:"controller"}),"\u4e2d\uff0c\u53bb\u5e76\u53d1\u7684\u8bf7\u6c42\u5176\u4ed6\u8d44\u6e90\uff0c\u6bd4\u5982\u6570\u636e\u5e93\u8d44\u6e90\uff0c\u8fd8\u6709",(0,t.jsx)(n.code,{children:"gRpc"}),"\u8c03\u7528\u7b49\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u90fd\u662f\u7528\u5b50",(0,t.jsx)(n.code,{children:"go"}),"\u53bb\u8c03\u7528\u7684\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func main() {\n\n\thttp.HandleFunc("/demo",demo)\n\thttp.ListenAndServe(":8888",nil)\n}\nfunc demo(w http.ResponseWriter,r *http.Request)  {\n\ttimeout, err := time.ParseDuration(r.FormValue("timeout"))\n\tif err != nil {\n\t\thttp.Error(w, err.Error(), http.StatusInternalServerError)\n\t\treturn\n\t}\n\tvar (\n\t\tctx context.Context\n\t\tcancel context.CancelFunc\n\t)\n\tif err != nil {\n\t\tctx, cancel = context.WithTimeout(r.Context(), timeout)\n\t}else {\n\t\tctx,cancel = context.WithCancel(r.Context())\n\t}\n\n\tdefer cancel()\n\tdatabase := getDatabaseData(ctx)\n\tage,ct := gRpcServer(ctx)\n\tif deadline, ok := ctx.Deadline() ; ok {\n\t\tfmt.Println(deadline.String())\n\t\tfmt.Println(time.Now().String())\n\t}\n\tif err := ctx.Err(); err != nil {\n\t\tfmt.Println(err)\n\t}\n\tif value := ct.Value(ageKey); value != nil {\n\t\tfmt.Println("value:",value)\n\t}\n\tfmt.Fprint(w,fmt.Sprintf("Database:%s\\nAge:%d",database,age))\n}\n\n\nfunc getDatabaseData(ctx context.Context) string {\n\tc := make(chan string)\n\tgo func() {\n\t\ttime.Sleep(time.Second*2)\n\t\tc <- "database"\n\t}()\n\tselect {\n\tcase <- ctx.Done():\n\t\treturn ""\n\tcase r := <- c:\n\t\treturn r\n\t}\n}\n\nfunc gRpcServer(ctx context.Context) (int,context.Context) {\n\tc := make(chan int)\n\tgo func() {\n\t\ttime.Sleep(2*time.Second)\n\t\tc <- 24\n\t}()\n\tct := context.WithValue(ctx, ageKey, ageKey)\n\tselect {\n\tcase <- ctx.Done():\n\t\treturn 0,ct\n\tcase v := <- c:\n\t\treturn v,ct\n\t}\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u9762\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u6709\u70b9\u95ee\u9898\uff0c\u4f1a\u51fa\u73b0",(0,t.jsx)(n.code,{children:"go"}),"\u4e0d\u80fd\u4f1a\u56de\u6536\uff0c\u6cc4\u6f0f\u7684\u60c5\u51b5\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4f1a\u51fa\u73b0\uff1a\u51fd\u6570\u4e2d\u542f\u52a8\u7684",(0,t.jsx)(n.code,{children:"go"}),"\u8fd8\u5728\u4f11\u7720\uff0c\u8fd8\u6ca1\u6709\u5199\u5165\u5230",(0,t.jsx)(n.code,{children:"c"}),"\u4e2d\uff0c\u6b64\u65f6\u6536\u5230",(0,t.jsx)(n.code,{children:"ctx.Done()"}),"\u7684\u4fe1\u53f7\uff0c\u5c31\u8fd4\u56de\u4e86\uff0c\u6b64\u65f6\u5c31\u4f1a\u51fa\u73b0\u5199\u5165\u4e0d\u4e86",(0,t.jsx)(n.code,{children:"c"}),"\u8fd9\u4e2a",(0,t.jsx)(n.code,{children:"chan"}),"\u4e2d\uff0c\u4e8e\u662f\u8fd9\u4e2a",(0,t.jsx)(n.code,{children:"go"}),"\u5c31\u6c38\u8fdc\u4e0d\u80fd\u88ab\u91ca\u653e\u4e86\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u89e3\u51b3\u529e\u6cd5\u6709\u4e24\u79cd:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u63a5\u6536\u5230\u5173\u95ed\u4fe1\u53f7\u4e4b\u540e\u7b49\u5f85",(0,t.jsx)(n.code,{children:"c"}),"\u8fd4\u56de"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func getDatabaseData(ctx context.Context) string {\n\tc := make(chan string)\n\tgo func() {\n\t\ttime.Sleep(time.Second*2)\n\t\tc <- "database"\n\t}()\n\tselect {\n\tcase <- ctx.Done():\n\t    <- c //\u5728\u6b64\u7b49\u5f85c\u8fd4\u56de\uff0c\u4f46\u662f\u8fd9\u6837\u5c31\u4f1a\u963b\u585ehttp\u8bf7\u6c42\uff0c\u5c31\u4f1a\u51fa\u73b0\u53d8\u6210\u540c\u6b65\u64cd\u4f5c\u3002\n\t\treturn ""\n\tcase r := <- c:\n\t\treturn r\n\t}\n}\n# \u4e0b\u4e00\u4e2a\u65b9\u6cd5\u540c\u4e0a\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8fd8\u6709\u4e00\u79cd\u5c31\u662f\u5173\u95ed\u8fd9\u4e2a",(0,t.jsx)(n.code,{children:"chan"}),"\uff0c\u8fd9\u79cd\u65e2\u53ef\u4ee5\u5feb\u901f\u8fd4\u56de\uff0c\u4e5f\u4e0d\u4f1a\u51fa\u73b0",(0,t.jsx)(n.code,{children:"go"}),"\u4e0d\u80fd\u91ca\u653e"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func getDatabaseData(ctx context.Context) string {\n\tc := make(chan string)\n\tgo func() {\n\t    // \u5982\u679c\u52a0\u5165\u5173\u95ed\u901a\u9053\u7684\u64cd\u4f5c\uff0c\u90a3\u5c31\u4e00\u5b9a\u8981\u52a0\u6355\u83b7panic\u7684\u64cd\u4f5c\uff0c\u4e0d\u7136\u4f1a\u5bfc\u81f4\u7a0b\u5e8f\u63a8\u51fa\u3002\u56e0\u4e3a\u53d1\u9001\u5230\u4e00\u4e2a\u5173\u95ed\u7684chan\u4e2d\u4f1a\u51fa\u73b0panic\n\t    defer func() {\n\t\t\tif err := recover() ; err != nil {\n\n\t\t\t}\n\t\t}()\n\t\ttime.Sleep(time.Second*2)\n\t\tc <- "database"\n\t}()\n\tselect {\n\tcase <- ctx.Done():\n\t    close(c)\n\t\treturn ""\n\tcase r := <- c:\n\t\treturn r\n\t}\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u6d89\u53ca\u5230\u7684\u7b97\u6cd5",children:"\u6d89\u53ca\u5230\u7684\u7b97\u6cd5"}),"\n",(0,t.jsx)(n.h3,{id:"cas-\u7b97\u6cd5",children:"CAS \u7b97\u6cd5"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"CAS"}),"\u7b97\u6cd5\u53c8\u53eb\u65e0\u9501\u7b97\u6cd5\uff0c\u5168\u79f0\u662f",(0,t.jsx)(n.code,{children:"(Compare-and-swap)"}),"\u6bd4\u8f83\u4ea4\u6362\u7b97\u6cd5\u3002",(0,t.jsx)(n.code,{children:"CAS"}),"\u7b97\u6cd5\u662f\u539f\u5b50\u64cd\u4f5c\uff0c\u662f\u5e76\u53d1\u5b89\u5168\u7684\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"CAS"}),"\u7b97\u6cd5\u6709\u4e09\u4e2a\u64cd\u4f5c\u6570,\u7b2c\u4e00\u4e2a\u662f\u5185\u5b58\u503cV\uff0c\u7b2c\u4e8c\u4e2a\u662f\u65e7\u9884\u671f\u503cA\uff0c\u7b2c\u4e09\u4e2a\u662f\u65b0\u503cB\uff1b\u5f53\u4e14\u4ec5\u5f53\u9884\u671f\u503cA\u548c\u5185\u5b58\u503cV\u76f8\u540c\u65f6\uff0c\u5c06\u5185\u5b58\u503cV\u4fee\u6539\u4e3aB\uff0c\u5426\u5219\u4ec0\u4e48\u90fd\u4e0d\u505a\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4fe1\u53f7\u91cf\u7b97\u6cd5",children:"\u4fe1\u53f7\u91cf\u7b97\u6cd5"}),"\n",(0,t.jsxs)(n.p,{children:["\u4fe1\u53f7\u91cf\u662f",(0,t.jsx)(n.code,{children:"Unix"}),"\u7cfb\u7edf\u63d0\u4f9b\u7684\u4e00\u79cd\u4fdd\u62a4\u5171\u4eab\u8d44\u6e90\u7684\u673a\u5236\uff0c\u7528\u4e8e\u9632\u6b62\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u8bbf\u95ee\u67d0\u4e2a\u8d44\u6e90\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u7b80\u5355\u7406\u89e3\u4e3a\u4fe1\u53f7\u91cf\u4e3a\u4e00\u4e2a\u6570\u503c\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5f53\u4fe1\u53f7\u91cf>0\u65f6\uff0c\u8868\u793a\u8d44\u6e90\u53ef\u7528\uff0c\u83b7\u53d6\u4fe1\u53f7\u91cf\u65f6\u7cfb\u7edf\u81ea\u52a8\u5c06\u4fe1\u53f7\u91cf\u51cf1\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u5f53\u4fe1\u53f7\u91cf==0\u65f6\uff0c\u8868\u793a\u8d44\u6e90\u6682\u4e0d\u53ef\u7528\uff0c\u83b7\u53d6\u4fe1\u53f7\u91cf\u65f6\uff0c\u5f53\u524d\u7ebf\u7a0b\u4f1a\u8fdb\u5165\u7761\u7720\uff0c\u5f53\u4fe1\u53f7\u91cf\u4e3a\u6b63\u65f6\u88ab\u5524\u9192\uff1b"}),"\n",(0,t.jsx)(n.li,{}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://golang.org/pkg/sync/",children:"https://golang.org/pkg/sync/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://colobu.com/2019/04/28/gopher-2019-concurrent-in-action/#Cond",children:"https://colobu.com/2019/04/28/gopher-2019-concurrent-in-action/#Cond"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://blog.golang.org/context",children:"Go Concurrency Patterns: Context"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>l,x:()=>d});var t=c(6540);const o={},r=t.createContext(o);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);