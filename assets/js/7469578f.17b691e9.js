"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[6579],{4467:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=t(4848),r=t(8453);const s={slug:"Go-Bootstrap-Process",title:"Go Bootstrap Process",authors:["rongfu"],tags:["golang"]},c="Go Bootstrap Process",l={permalink:"/blog/Go-Bootstrap-Process",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-06-10-Go-bootstrap-process.md",source:"@site/blog/2019-06-10-Go-bootstrap-process.md",title:"Go Bootstrap Process",description:"Go \u542f\u52a8\u8fc7\u7a0b\u5206\u6790.",date:"2019-06-10T00:00:00.000Z",tags:[{inline:!1,label:"golang",permalink:"/blog/tags/golang",description:"golang"}],readingTime:10.79,hasTruncateMarker:!0,authors:[{name:"Leng Student",title:"Softwore Developer",url:"https://github.com/lengrongfu",image_hrl:"https://avatars.githubusercontent.com/u/15009201?v=4",socials:{github:"https://github.com/lengrongfu"},key:"rongfu",page:null}],frontMatter:{slug:"Go-Bootstrap-Process",title:"Go Bootstrap Process",authors:["rongfu"],tags:["golang"]},unlisted:!1,prevItem:{title:"Go \u5e76\u53d1\u7f16\u7a0b\u6d4b\u8bd5\u5206\u6790",permalink:"/blog/Go \u5e76\u53d1\u7f16\u7a0b\u6d4b\u8bd5\u5206\u6790"},nextItem:{title:"docker \u7f51\u7edc\u6982\u5ff5",permalink:"/blog/docker-network-concept"}},o={authorsImageUrls:[void 0]},a=[{value:"\u4e00\u3001\u73af\u5883\u51c6\u5907",id:"\u4e00\u73af\u5883\u51c6\u5907",level:2},{value:"\u4e8c\u3001\u8fdb\u5165\u8c03\u8bd5",id:"\u4e8c\u8fdb\u5165\u8c03\u8bd5",level:2},{value:"1\u3001\u6253\u65ad\u70b9",id:"1\u6253\u65ad\u70b9",level:3},{value:"2\u3001\u8fd0\u884c\u5230\u65ad\u70b9\u51fa",id:"2\u8fd0\u884c\u5230\u65ad\u70b9\u51fa",level:3},{value:"3\u3001\u6253\u5370\u5806\u6808\u4fe1\u606f",id:"3\u6253\u5370\u5806\u6808\u4fe1\u606f",level:3},{value:"\u4e09\u3001\u5206\u6790\u542f\u52a8\u8fc7\u7a0b",id:"\u4e09\u5206\u6790\u542f\u52a8\u8fc7\u7a0b",level:2},{value:"1\u3001\u5206\u6790asm_amd64.s\u8fd9\u4e2a\u6587\u4ef6",id:"1\u5206\u6790asm_amd64s\u8fd9\u4e2a\u6587\u4ef6",level:3},{value:"2\u3001\u6309\u987a\u5e8f\u6253\u4e0a\u65ad\u70b9",id:"2\u6309\u987a\u5e8f\u6253\u4e0a\u65ad\u70b9",level:3},{value:"3\u3001runtime.args",id:"3runtimeargs",level:3},{value:"4\u3001runtime.osinit",id:"4runtimeosinit",level:3},{value:"5\u3001runtime.schedinit",id:"5runtimeschedinit",level:3},{value:"6\u3001runtime.newproc()",id:"6runtimenewproc",level:3},{value:"7\u3001runtime.mstart()",id:"7runtimemstart",level:3}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Go"})," \u542f\u52a8\u8fc7\u7a0b\u5206\u6790."]}),"\n",(0,i.jsx)(e.h2,{id:"\u4e00\u73af\u5883\u51c6\u5907",children:"\u4e00\u3001\u73af\u5883\u51c6\u5907"}),"\n",(0,i.jsx)(e.p,{children:"1\u3001 Go\u7248\u672c"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"$ go version\ngo version go1.12.4 darwin/amd64\n"})}),"\n",(0,i.jsx)(e.p,{children:"2\u3001\u51c6\u5907\u4ee3\u7801"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\nimport (\n\t"fmt"\n)\nfunc main() {\n\tfmt.Println("hello world")\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"3\u3001\u8c03\u8bd5\u5de5\u5177"}),"\n",(0,i.jsxs)(e.p,{children:["\u8c03\u8bd5\u5de5\u5177\u6211\u4f7f\u7528\u7684\u662f",(0,i.jsx)(e.code,{children:"dlv"}),"\uff0c\u5bf9",(0,i.jsx)(e.code,{children:"golang"}),"\u652f\u6301\u6700\u597d\u7684\u8c03\u8bd5\u5de5\u5177\uff0c\u6bd4",(0,i.jsx)(e.code,{children:"gdb"}),"\u90fd\u597d\uff0c\u5148\u6309\u5b98\u65b9\u6587\u6863\u5b89\u88c5\u4e0a\u3002\u7f16\u8bd1\u4e0a\u8ff0\u4ee3\u7801",(0,i.jsx)(e.code,{children:"go build main.go"}),",\u5f97\u5230\u4e00\u4e2a\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u6267\u884c",(0,i.jsx)(e.code,{children:"dlv exec ./main"}),"\u5c31\u8fdb\u5165\u4e86\u8c03\u8bd5\u7a7a\u95f4\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"$ dlv exec main\nType 'help' for list of commands.\n(dlv) \n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8f93\u5165",(0,i.jsx)(e.code,{children:"help"}),"\u5c31\u53ef\u4ee5\u770b\u5230\u5e2e\u52a9\u6587\u6863\uff0c\u6253\u65ad\u70b9\u4ee5\u53ca\u6267\u884c\u4e0b\u4e00\u6b65\u90fd\u662f\u901a\u8fc7\u547d\u4ee4\u8fdb\u884c\u7684\uff0c\u4e0d\u77e5\u9053\u5c31\u53ef\u4ee5\u968f\u65f6\u8fdb\u884c\u67e5\u770b\u3002\u6267\u884c\u4e0a\u8ff0\u7684\u547d\u4ee4\u4e4b\u540e\uff0c\u7a0b\u5e8f\u8fd8\u6ca1\u6709\u771f\u6b63\u7684\u542f\u52a8\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["4\u3001",(0,i.jsx)(e.code,{children:"dlv"}),"\u5e38\u7528\u7684\u547d\u4ee4\n\u66f4\u5177\u4f53\u7684\u547d\u4ee4\u4f7f\u7528\u53c2\u8003\u5b98\u65b9\u6587\u6863\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"args \uff1a\u51fd\u6570\u7684\u53c2\u6570\nbreak (alias: b) \uff1a\u6253\u4e00\u4e2a\u65ad\u70b9\nbreakpoints (alias: bp) \uff1a\u6253\u5370\u5df2\u7ecf\u6dfb\u52a0\u7684\u65ad\u70b9\u4fe1\u606f\u3002\nclear \uff1a \u901a\u8fc7\u65ad\u70b9\u7f16\u53f7\u5220\u9664\u65ad\u70b9\ncontinue (alias: c) \uff1a\u8fd0\u884c\u5230\u6709\u65ad\u70b9\u7684\u5730\u65b9\nlocals \uff1a\u6253\u5370\u672c\u5730\u53d8\u91cf\nnext (alias: n) \uff1a\u8fd0\u884c\u5230\u4e0b\u4e00\u884c\nprint (alias: p) \uff1a\u53ef\u4ee5\u6307\u5b9a\u53d8\u91cf\u8fdb\u884c\u6253\u5370\u67e5\u770b\uff0c\u7279\u522b\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\u53d8\u91cf\u6700\u6709\u7528\u3002\nregs \uff1a\u6253\u5370\u5f53\u524dcpu\u5bc4\u5b58\u5668\u7684\u503c\u3002\nrestart (alias: r) \uff1a\u91cd\u542f\u8fdb\u7a0b,\u91cd\u65b0\u5f00\u59cb\u8c03\u8bd5.\nstack (alias: bt) \uff1a\u6253\u5370\u5806\u6808\u4fe1\u606f\nstep (alias: s) \uff1a\u5355\u6b65\u6267\u884c\uff0c\u4f1a\u8fdb\u5165\u51fd\u6570\u5185\u90e8\nstep-instruction (alias: si)  : cpu\u7684\u5355\u4e2a\u6307\u4ee4\u6267\u884c\nthread (alias: tr) \uff1a\u53ef\u4ee5\u5207\u6362\u5230\u6307\u5b9a\u7684\u7ebf\u7a0b\nthreads \uff1a\u6253\u5370\u6240\u6709\u7ebf\u7a0b\u7684\u4fe1\u606f\ngoroutine \uff1a\u663e\u793a\u6216\u8005\u5207\u6362\u5f53\u524d\u7684go\ngoroutines : \u5217\u51fa\u7a0b\u5e8f\u7684\u6240\u6709go\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u4e8c\u8fdb\u5165\u8c03\u8bd5",children:"\u4e8c\u3001\u8fdb\u5165\u8c03\u8bd5"}),"\n",(0,i.jsx)(e.h3,{id:"1\u6253\u65ad\u70b9",children:"1\u3001\u6253\u65ad\u70b9"}),"\n",(0,i.jsxs)(e.p,{children:["\u7b2c\u4e00\u6b65\u5148\u6253\u65ad\u70b9\uff0c\u5bf9\u4e8e\u7b2c\u4e00\u6b21\u624d\u5f00\u59cb\u8c03\u8bd5\u7684\u4eba\u6765\u8bf4\uff0c\u6700\u7b80\u5355\u7684\u5c31\u662f\u6253",(0,i.jsx)(e.code,{children:"main"}),"\u51fd\u6570\u7684\u65ad\u70b9\u4e86."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"$ (dlv) b main.main\nBreakpoint 1 set at 0x1093038 for main.main() ./main.go:27\n(dlv) bp\nBreakpoint 1 at 0x1093038 for main.main() ./main.go:27 (0)\n"})}),"\n",(0,i.jsx)(e.h3,{id:"2\u8fd0\u884c\u5230\u65ad\u70b9\u51fa",children:"2\u3001\u8fd0\u884c\u5230\u65ad\u70b9\u51fa"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"b"}),"\u3001",(0,i.jsx)(e.code,{children:"bp"}),"\u662f\u7f29\u5199\uff0c\u5bf9\u5e94\u4e3a\u6253\u65ad\u70b9\u548c\u6253\u5370\u6240\u6709\u7684\u65ad\u70b9\u4fe1\u606f\u3002\u6253\u4e86\u65ad\u70b9\u4e4b\u540e\u5c31\u53ef\u4ee5\u6267\u884c",(0,i.jsx)(e.code,{children:"c"}),"\u8fd9\u4e2a\u547d\u4ee4\u4e86\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"$ (dlv) continue\n> main.main() ./main.go:27 (hits goroutine(1):1 total:1) (PC: 0x1093038)\n=>  27:\tfunc main() {\n}\n"})}),"\n",(0,i.jsx)(e.h3,{id:"3\u6253\u5370\u5806\u6808\u4fe1\u606f",children:"3\u3001\u6253\u5370\u5806\u6808\u4fe1\u606f"}),"\n",(0,i.jsxs)(e.p,{children:["\u6267\u884c\u8fc7\u540e\u5c31\u4f1a\u51fa\u73b0\u6e90\u4ee3\u7801\uff0c\u5e76\u4e14\u65ad\u70b9\u6307\u5411\u4e86",(0,i.jsx)(e.code,{children:"main"}),"\u51fd\u6570\u4e0a,\u6b64\u65f6\u6211\u4eec\u901a\u8fc7",(0,i.jsx)(e.code,{children:"stack"}),"\u547d\u4ee4\u5c31\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a",(0,i.jsx)(e.code,{children:"main"}),"\u51fd\u6570\u6240\u5728\u7684",(0,i.jsx)(e.code,{children:"goroutine"}),"\u6808\u4e86\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"$ (dlv) stack\n0  0x0000000001093038 in main.main\n   at ./main.go:27\n1  0x00000000010297ec in runtime.main\n   at ./golang_work/go/src/runtime/proc.go:200\n2  0x0000000001051011 in runtime.goexit\n   at ./golang_work/go/src/runtime/asm_amd64.s:1337\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u4e0a\u5c31\u662f\u663e\u793a\u4e86\u4e00\u4e2a",(0,i.jsx)(e.code,{children:"goroutine"}),"\u7684\u5806\u6808\uff0c\u5806\u6808\u4e2d\u7684\u4fe1\u606f\u5c31\u4fdd\u8bc1\u4e86\u8c03\u7528\u8fc7\u7a0b\uff0c\u6240\u4ee5\u6211\u4eec\u5c31\u53ef\u4ee5\u53bb\u5206\u6790",(0,i.jsx)(e.code,{children:"go"}),"\u542f\u52a8\u8fc7\u7a0b\u4e86\u3002\n\u6211\u4eec\u8981\u4ece\u6808\u5e95\u5f80\u4e0a\u770b\uff0c\u6240\u4ee5\u6211\u4eec\u9996\u5148\u53bb\u5206\u6790\u4e00\u4e0b",(0,i.jsx)(e.code,{children:"asm_amd64.s"}),"\u8fd9\u4e2a\u6c47\u7f16\u4ee3\u7801\u3002\u73b0\u5728\u662f\u9006\u5411\u5206\u6790\u8c03\u7528\u6808\uff0c\u540e\u7eed\u7684\u5206\u6790\u5c31\u662f\u6b63\u5411\u7684\u8fc7\u7a0b\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4e09\u5206\u6790\u542f\u52a8\u8fc7\u7a0b",children:"\u4e09\u3001\u5206\u6790\u542f\u52a8\u8fc7\u7a0b"}),"\n",(0,i.jsx)(e.h3,{id:"1\u5206\u6790asm_amd64s\u8fd9\u4e2a\u6587\u4ef6",children:"1\u3001\u5206\u6790asm_amd64.s\u8fd9\u4e2a\u6587\u4ef6"}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd9\u91cc\u9762\u7684\u5185\u5bb9\u5f88\u591a\uff0c\u6211\u4eec\u4e0d\u80fd\u5168\u90e8\u770b\u5b8c\uff0c\u53ea\u80fd\u627e\u4e00\u4e0b\u91cd\u70b9\uff0c\u5f00\u59cb\u7684\u4e24\u4e2a\u51fd\u6570\u90fd\u6307\u5411\u4e86",(0,i.jsx)(e.code,{children:"JMP\truntime\xb7rt0_go(SB)"}),"\u8fd9\u6761\u6c47\u7f16\u4ee3\u7801\uff0c\u6211\u4eec\u5c31\u53bb\u67e5\u770b",(0,i.jsx)(e.code,{children:"rt0_go"}),"\u8fd9\u4e2a\u51fd\u6570\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"runtime/asm_amd64.s \nTEXT runtime\xb7rt0_go(SB),NOSPLIT,$0\n\tCALL\truntime\xb7args(SB)\n\tCALL\truntime\xb7osinit(SB)\n\tCALL\truntime\xb7schedinit(SB)\n\tCALL\truntime\xb7newproc(SB)\n\tCALL\truntime\xb7mstart(SB)\n\tCALL\truntime\xb7abort(SB)\t// mstart should \n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u6587\u4ef6\u4e2d\u7684\u5927\u90e8\u5206\u5185\u5bb9\u90fd\u53bb\u6389\u4e86\uff0c\u6211\u53ea\u7559\u4e0b\u4e86",(0,i.jsx)(e.code,{children:"CALL"})," \u6307\u4ee4\u7684\u90e8\u5206\uff0c",(0,i.jsx)(e.code,{children:"call"}),"\u8c03\u7528\u7684\u5c31\u662f",(0,i.jsx)(e.code,{children:"runtime"}),"\u5305\u4e2d\u7684\u6e90\u4ee3\u7801\uff0c\u6240\u4ee5\u6211\u4eec\u901a\u8fc7\u65b9\u6cd5\u540d\u5c31\u53ef\u4ee5\u8fdb\u884c\u641c\u7d22\u4e86\uff0c\u5e76\u4e14\u662f\u5728\u53ef\u4ee5\u8fd0\u884c\u4e4b\u540e\u7684\u90e8\u5206\uff0c\u6240\u4ee5\u4e0a\u9762\u5c31\u662f",(0,i.jsx)(e.code,{children:"go"}),"\u8fdb\u7a0b\u542f\u52a8\u7684\u8fc7\u7a0b\u3002\u4e0b\u9762\u6211\u4eec\u8fb9\u6253\u65ad\u70b9\u8fb9\u67e5\u770b\u6bcf\u4e2a\u51fd\u6570\u90fd\u505a\u4e86\u5199\u4ec0\u4e48\u5185\u5bb9\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u6309\u987a\u5e8f\u603b\u7ed3\u4e0bruntime.rt0_go\u91cc\u51e0\u4ef6\u91cd\u8981\u7684\u4e8b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u68c0\u67e5\u8fd0\u884c\u5e73\u53f0\u7684CPU\uff0c\u8bbe\u7f6e\u597d\u7a0b\u5e8f\u8fd0\u884c\u9700\u8981\u76f8\u5173\u6807\u5fd7\u3002"}),"\n",(0,i.jsx)(e.li,{children:"TLS\u7684\u521d\u59cb\u5316\u3002"}),"\n",(0,i.jsx)(e.li,{children:"runtime.args\u3001runtime.osinit\u3001runtime.schedinit \u4e09\u4e2a\u65b9\u6cd5\u505a\u597d\u7a0b\u5e8f\u8fd0\u884c\u9700\u8981\u7684\u5404\u79cd\u53d8\u91cf\u4e0e\u8c03\u5ea6\u5668\u3002"}),"\n",(0,i.jsx)(e.li,{children:"runtime.newproc\u521b\u5efa\u65b0\u7684goroutine\u7528\u4e8e\u7ed1\u5b9a\u7528\u6237\u5199\u7684main\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(e.li,{children:"runtime.mstart\u5f00\u59cbgoroutine\u7684\u8c03\u5ea6\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"2\u6309\u987a\u5e8f\u6253\u4e0a\u65ad\u70b9",children:"2\u3001\u6309\u987a\u5e8f\u6253\u4e0a\u65ad\u70b9"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"(dlv) b runtime.args\n(dlv) b runtime.osinit\n(dlv) b runtime.schedinit\n(dlv) b runtime.newproc\n(dlv) b runtime.mstart\n(dlv) b runtime.abort\n\nBreakpoint 2 at 0x10360ff for runtime.args() ./go/src/runtime/runtime1.go:60 (0)\nBreakpoint 3 at 0x102604f for runtime.osinit() ./go/src/runtime/os_darwin.go:79 (0)\nBreakpoint 4 at 0x102a843 for runtime.schedinit() ./go/src/runtime/proc.go:526 (0)\nBreakpoint 5 at 0x1030f90 for runtime.newproc() ./go/src/runtime/proc.go:3239 (0)\nBreakpoint 6 at 0x102c410 for runtime.mstart() ./go/src/runtime/proc.go:1153 (0)\nBreakpoint 7 at 0x10509a0 for runtime.abort() ./go/src/runtime/asm_amd64.s:837 (0)\n"})}),"\n",(0,i.jsx)(e.h3,{id:"3runtimeargs",children:"3\u3001runtime.args"}),"\n",(0,i.jsx)(e.p,{children:"\u6253\u597d\u65ad\u70b9\u4e4b\u540e\uff0c\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u627e\u5230\u6e90\u7801\u6240\u5728\u4f4d\u7f6e."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"$ (dlv) s\n> runtime.args() \n./go/src/runtime/runtime1.go:60 (hits total:1) (PC: 0x10360ff)\n=>  60:\tfunc args(c int32, v **byte) {}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u4eec\u627e\u5230\u6e90\u7801\uff0c\u5e76\u4e14\u9a8c\u8bc1\u4e86\u542f\u52a8\u8fc7\u7a0b\u7b2c\u4e00\u6b65\u5c31\u662f\u8fd9\u4e2a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'runtime/runtime1.go +60\nfunc args(c int32, v **byte) {\n\targc = c\n\targv = v\n\tsysargs(c, v)\n}\nruntime/os_darwin.go +341\n//go:linkname executablePath os.executablePath\nvar executablePath string\n\nfunc sysargs(argc int32, argv **byte) {\n\t// skip over argv, envv and the first string will be the path\n\tn := argc + 1\n\tfor argv_index(argv, n) != nil {\n\t\tn++\n\t}\n\texecutablePath = gostringnocopy(argv_index(argv, n+1))\n\n\t// strip "executable_path=" prefix if available, it\'s added after OS X 10.11.\n\tconst prefix = "executable_path="\n\tif len(executablePath) > len(prefix) && executablePath[:len(prefix)] == prefix {\n\t\texecutablePath = executablePath[len(prefix):]\n\t}\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u4e2a\u65b9\u6cd5\u53ea\u505a\u4e86\u4e00\u4ef6\u4e8b\uff0c\u5c31\u662f\u628a\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\u627e\u51fa\u6765\uff0c\u5e76\u5b58\u5728os.executablePath\u91cc\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6309\u7167\u672c\u6587\u7684\u6d4b\u8bd5\u5de5\u7a0b\uff1aos.executablePath=$GOPATH/test/main"}),"\n",(0,i.jsx)(e.h3,{id:"4runtimeosinit",children:"4\u3001runtime.osinit"}),"\n",(0,i.jsxs)(e.p,{children:["\u518d\u63a5\u7740\u8fd0\u884c\u5c31\u4f1a\u5230\u4e0b\u4e00\u4e2a\u65ad\u70b9\uff0c\u4e5f\u5c31\u662f",(0,i.jsx)(e.code,{children:"runtime.osinit()"}),"\u8fd9\u4e2a\u51fd\u6570\u3002\n",(0,i.jsx)(e.code,{children:"osinit"}),"\u8fd9\u4e2a\u51fd\u6570\u662f\u6839\u636e\u64cd\u4f5c\u7cfb\u7edf\u7684\u4e0d\u540c\u6765\u9009\u62e9\u4e0d\u540c\u7684\u6267\u884c\u51fd\u6570\u7684\uff0c\u6211\u7684\u662f",(0,i.jsx)(e.code,{children:"mac"}),",\u6240\u4ee5\u6267\u884c\u7684\u662f",(0,i.jsx)(e.code,{children:"os_darwin.go"}),"\u91cc\u9762\u7684\u51fd\u6570\uff0c\u540c\u65f6\u8fd8\u6709",(0,i.jsx)(e.code,{children:"os_linux.go"}),"\u91cc\u9762\u4e5f\u6709\u540c\u6837\u7684\u51fd\u6570\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"runtime/os_darwin.go +79\nfunc osinit() {\n\tncpu = getncpu()\n\tphysPageSize = getPageSize()\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u4e2a\u51fd\u6570\u4e3b\u8981\u505a\u6765\u4e24\u4ef6\u4e8b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u7b2c\u4e00\u662f\u83b7\u53d6\u5f53\u524d\u7535\u8111\u7684",(0,i.jsx)(e.code,{children:"cpu"}),"\u4e2a\u6570\uff0c\u5e76\u8d4b\u503c\u7ed9",(0,i.jsx)(e.code,{children:"runtime/runtime2.go"}),"\u4e2d\u7684",(0,i.jsx)(e.code,{children:"ncpu"}),"\u53d8\u91cf\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u7b2c\u4e8c\u662f\u8bbe\u7f6e",(0,i.jsx)(e.code,{children:"runtime/malloc.go"}),"\u4e2d\u7684",(0,i.jsx)(e.code,{children:"physPageSize"}),"\u53d8\u91cf\uff0c\u8fd9\u4e2a\u53d8\u91cf\u662f\u7528\u4e8e\u5206\u914d\u5185\u5b58\u7684\uff0c\u64cd\u4f5c\u7cfb\u7edf\u5206\u914d\u5185\u5b58\u6216\u8005\u56de\u6536\u5185\u5b58\u90fd\u662f\u6309\u8fd9\u4e2a\u6570\u5b57\u7684\u6574\u6570\u500d\u6765\u64cd\u4f5c\u7684\u3002\u6211\u83b7\u53d6\u7684\u662f",(0,i.jsx)(e.code,{children:"4096"}),"\u8fd9\u4e2a\u6570\u5b57\uff0c\u6240\u4ee5\u662f",(0,i.jsx)(e.code,{children:"4k"}),"\u5b57\u8282\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"5runtimeschedinit",children:"5\u3001runtime.schedinit"}),"\n",(0,i.jsxs)(e.p,{children:["\u518d\u63a5\u7740\u8fd0\u884c\u5230\u4e0b\u4e00\u4e2a\u65ad\u70b9\uff0c\u5c31\u662f",(0,i.jsx)(e.code,{children:"runtime.schedinit"}),"\u8fd9\u4e2a\u51fd\u6570\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'runtime/proc.go +526\nfunc schedinit(){\n    //\u4eceTLS \u4e2d\u83b7\u53d6g\n\t_g_ := getg()\n\t// \u662f\u5426\u5f00\u542f\u7ade\u4e89\u68c0\u6d4b\uff0c\u542f\u52a8\u65b9\u6cd5go run -race main.go\n\tif raceenabled {\n\t\t_g_.racectx, raceprocctx0 = raceinit()\n\t}\n\t//\u8fd0\u884c\u521b\u5efa\u7684\u6700\u5927\u7ebf\u7a0b\u6570\n\tsched.maxmcount = 10000\n\t// \u521d\u59cb\u5316\u4e00\u7cfb\u5217\u51fd\u6570\u6240\u5728\u7684PC\u8ba1\u6570\u5668\uff0c\u7528\u4e8etraceback\n\ttracebackinit()\n\t//...\n\tmoduledataverify()\n\t//\u6808\u521d\u59cb\u5316,\u521d\u59cb\u5316\u4e86\u4e00\u4e2a\u6808\u6c60\uff0c\u53ef\u4ee5\u76f4\u63a5\u53d6\uff0c\u8fd8\u6709\u4e00\u4e2a\u5927\u6808\u7684\u5168\u5c40\u6c60.\n\t//golang \u4f7f\u7528\u7684\u662f\u52a8\u6001\u6808\uff0c\u521d\u59cb\u662f2k\u5927\u5c0f\uff0c\u540e\u9762\u589e\u957f\uff0c\u4f46\u662fgolang\u4f7f\u7528\u7684\u4e0d\u662f\u5206\u79bb\u6808\uff0c\u662f\u8fde\u7eed\u6808\uff0c\u5c31\u662f\u6808\u7a7a\u95f4\u662f\u8fde\u7eed\u7684\uff0c\u5206\u914d\u7684\u65f6\u5019\u5982\u679c\u4e4b\u524d\u7684\u7a7a\u95f4\u4e0d\u8fde\u7eed\u4e86\uff0c\u5c31\u62f7\u8d1d\u4e00\u4efd\u5230\u65b0\u7684\u7a7a\u95f4\u53bb\u3002\n\tstackinit()\n\tmallocinit()\n\tmcommoninit(_g_.m)\n\tcpuinit()       // must run before alginit\n\talginit()       // maps must not be used before this call\n\tmodulesinit()   // provides activeModules\n\ttypelinksinit() // uses maps, activeModules\n\titabsinit()     // uses activeModules\n\n\tmsigsave(_g_.m)\n\tinitSigmask = _g_.m.sigmask\n    // \u542f\u52a8\u53c2\u6570\u521d\u59cb\u5316\n\tgoargs()\n\t//\n\tgoenvs()\n\t// \u89e3\u6790debug\u53d8\u91cf\uff0cGODEBUG\uff0cGOTRACEBACK\u8fd9\u4e9b\n\tparsedebugvars()\n\t// gc \u521d\u59cb\u5316\n\tgcinit()\n    \n\tsched.lastpoll = uint64(nanotime())\n\tprocs := ncpu\n\tif n, ok := atoi32(gogetenv("GOMAXPROCS")); ok && n > 0 {\n\t\tprocs = n\n\t}\n\tif procresize(procs) != nil {\n\t\tthrow("unknown runnable goroutine during bootstrap")\n\t}\n\n\t// For cgocheck > 1, we turn on the write barrier at all times\n\t// and check all pointer writes. We can\'t do this until after\n\t// procresize because the write barrier needs a P.\n\tif debug.cgocheck > 1 {\n\t\twriteBarrier.cgo = true\n\t\twriteBarrier.enabled = true\n\t\tfor _, p := range allp {\n\t\t\tp.wbBuf.reset()\n\t\t}\n\t}\n\n\tif buildVersion == "" {\n\t\t// Condition should never trigger. This code just serves\n\t\t// to ensure runtime\xb7buildVersion is kept in the resulting binary.\n\t\tbuildVersion = "unknown"\n\t}\n}\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"mallocinit()\uff1a\u8fd9\u4e2a\u51fd\u6570\u662f\u5185\u5b58\u5206\u914d\u5668\u521d\u59cb\u5316\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"mcommoninit(mp *m):\u521d\u59cb\u5316m0\u8fd9\u4e2a\u7ebf\u7a0b"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"cpuinit()\uff1acpu\u521d\u59cb\u5316"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"alginit()\uff1a\u521d\u59cb\u5316AES\uff0cHASH\u7b97\u6cd5"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"6runtimenewproc",children:"6\u3001runtime.newproc()"}),"\n",(0,i.jsxs)(e.p,{children:["\u518d\u63a5\u7740\u8fd0\u884c\u5230\u4e0b\u4e00\u4e2a\u65ad\u70b9\uff0c\u5c31\u662f",(0,i.jsx)(e.code,{children:"runtime.newproc"}),"\u8fd9\u4e2a\u51fd\u6570\u3002"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"http://cbsheng.github.io/posts/%E6%8E%A2%E7%B4%A2goroutine%E7%9A%84%E5%88%9B%E5%BB%BA/",children:"http://cbsheng.github.io/posts/%E6%8E%A2%E7%B4%A2goroutine%E7%9A%84%E5%88%9B%E5%BB%BA/"})}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"runtime/proc.go +3239\nfunc newproc(siz int32, fn *funcval) {\n\targp := add(unsafe.Pointer(&fn), sys.PtrSize)\n\tgp := getg()\n\tpc := getcallerpc()\n\tsystemstack(func() {\n\t\tnewproc1(fn, (*uint8)(argp), siz, gp, pc)\n\t})\n}\n"})}),"\n",(0,i.jsx)(e.h3,{id:"7runtimemstart",children:"7\u3001runtime.mstart()"}),"\n",(0,i.jsxs)(e.p,{children:["\u518d\u63a5\u7740\u8fd0\u884c\u5230\u4e0b\u4e00\u4e2a\u65ad\u70b9\uff0c\u5c31\u662f",(0,i.jsx)(e.code,{children:"runtime.mstart"}),"\u8fd9\u4e2a\u51fd\u6570\u3002\nmstart\u65b9\u6cd5\u4e3b\u8981\u7684\u6267\u884c\u8def\u5f84\u662f\uff1a"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"mstart -> mstart1 -> schedule -> execute"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"mstart\u505a\u4e00\u4e9b\u6808\u76f8\u5173\u7684\u68c0\u67e5\uff0c\u7136\u540e\u5c31\u8c03\u7528mstart1\u3002"}),"\n",(0,i.jsx)(e.li,{children:"mstart1\u5148\u505a\u4e00\u4e9b\u521d\u59cb\u5316\u4e0eM\u76f8\u5173\u7684\u5de5\u4f5c\uff0c\u4f8b\u5982\u662f\u4fe1\u53f7\u6808\u548c\u4fe1\u53f7\u5904\u7406\u51fd\u6570\u7684\u521d\u59cb\u5316\u3002\u6700\u540e\u8c03\u7528schedule\u3002"}),"\n",(0,i.jsx)(e.li,{children:"schedule\u903b\u8f91\u662f\u8fd9\u56db\u4e2a\u65b9\u6cd5\u91cc\u6700\u590d\u6742\u7684\u3002\u7b80\u5355\u6765\u8bf4\uff0c\u5c31\u662f\u8981\u627e\u51fa\u4e00\u4e2a\u53ef\u8fd0\u884c\u7684G\uff0c\u4e0d\u7ba1\u662f\u4eceP\u672c\u5730\u7684G\u961f\u5217\u3001\u5168\u5c40\u8c03\u5ea6\u5668\u7684G\u961f\u5217\u3001GC - worker\u3001\u56e0IO\u963b\u585e\u7684G\u3001\u751a\u81f3\u4ece\u522b\u7684P\u91cc\u5077\u3002\u7136\u540e\u4f20\u7ed9execute\u8fd0\u884c\u3002"}),"\n",(0,i.jsx)(e.li,{children:"execute\u5bf9\u4f20\u8fdb\u6765\u7684G\u8bbe\u7f6e\u597d\u76f8\u5173\u7684\u72b6\u6001\u540e\uff0c\u5c31\u52a0\u8f7dG\u81ea\u8eab\u8bb0\u5f55\u7740\u7684PC\u3001SP\u7b49\u5bc4\u5b58\u5668\u4fe1\u606f\uff0c\u6062\u590d\u73b0\u573a\u7ee7\u7eed\u6267\u884c\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://github.com/go-delve/delve",children:"dlv \u5b98\u7f51"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"http://cbsheng.github.io/posts/%E6%8E%A2%E7%B4%A2golang%E7%A8%8B%E5%BA%8F%E5%90%AF%E5%8A%A8%E8%BF%87%E7%A8%8B/",children:"http://cbsheng.github.io/posts/%E6%8E%A2%E7%B4%A2golang%E7%A8%8B%E5%BA%8F%E5%90%AF%E5%8A%A8%E8%BF%87%E7%A8%8B/"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"http://blog.jobbole.com/93100/",children:"http://blog.jobbole.com/93100/"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function c(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);