"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[590],{2936:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var r=t(4848),i=t(8453);const o={slug:"kubelet-three-analyze",title:"kubelet\u6e90\u7801\u5206\u6790 syncLoopIteration\uff08\u4e8c\uff09 plegCH",authors:["rongfu"],tags:["kubernetes","Kubelet"]},c=void 0,s={permalink:"/blog/kubelet-three-analyze",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-08-29-kubelet-three-analyze.md",source:"@site/blog/2024-08-29-kubelet-three-analyze.md",title:"kubelet\u6e90\u7801\u5206\u6790 syncLoopIteration\uff08\u4e8c\uff09 plegCH",description:"PLEG \u5168\u79f0\u662f Pod Lifecycle Event Generator \uff0c\u5b83\u4e3b\u8981\u901a\u8fc7\u8bfb\u53d6 container \u7684 Event \u6765\u66f4\u65b0 Pod \u7684\u72b6\u6001\uff0c\u76ee\u524d\u63d0\u4f9b\u4e86 GenericPLEG \u548c EventedPLEG \u4e24\u79cd\u6a21\u5f0f\uff0c\u4e0d\u540c\u70b9 GenericPLEG \u662f\u5b9a\u65f6\u53bb\u8bfb\u53d6\u4e8b\u4ef6\uff0cEventedPLEG \u65f6\u901a\u8fc7\u4e3b\u52a8\u63a5\u53d7\u4e8b\u4ef6\u7684\u63a8\u9001\u3002",date:"2024-08-29T00:00:00.000Z",tags:[{inline:!0,label:"kubernetes",permalink:"/blog/tags/kubernetes"},{inline:!1,label:"Kubelet",permalink:"/blog/tags/Kubelet",description:"Kubelet"}],readingTime:6.33,hasTruncateMarker:!0,authors:[{name:"Leng",title:"Softwore Developer",url:"https://github.com/lengrongfu",image_hrl:"https://avatars.githubusercontent.com/u/15009201?v=4",socials:{github:"https://github.com/lengrongfu"},key:"rongfu",page:null}],frontMatter:{slug:"kubelet-three-analyze",title:"kubelet\u6e90\u7801\u5206\u6790 syncLoopIteration\uff08\u4e8c\uff09 plegCH",authors:["rongfu"],tags:["kubernetes","Kubelet"]},unlisted:!1,prevItem:{title:"kubelet\u6e90\u7801\u5206\u6790 syncLoopIteration\uff08\u4e09\uff09 probeCH",permalink:"/blog/kubelet-fore-analyze"},nextItem:{title:"kubelet\u6e90\u7801\u5206\u6790 syncLoopIteration\uff08\u4e00\uff09 podUpdateCh",permalink:"/blog/kubelet-two-analyze"}},d={authorsImageUrls:[void 0]},a=[{value:"GenericPLEG",id:"genericpleg",level:2},{value:"EventedPLEG",id:"eventedpleg",level:2},{value:"syncLoopIteration",id:"syncloopiteration",level:2}];function l(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"PLEG"})," \u5168\u79f0\u662f ",(0,r.jsx)(n.code,{children:"Pod Lifecycle Event Generator"})," \uff0c\u5b83\u4e3b\u8981\u901a\u8fc7\u8bfb\u53d6 ",(0,r.jsx)(n.code,{children:"container"})," \u7684 ",(0,r.jsx)(n.code,{children:"Event"})," \u6765\u66f4\u65b0 ",(0,r.jsx)(n.code,{children:"Pod"})," \u7684\u72b6\u6001\uff0c\u76ee\u524d\u63d0\u4f9b\u4e86 ",(0,r.jsx)(n.code,{children:"GenericPLEG"})," \u548c ",(0,r.jsx)(n.code,{children:"EventedPLEG"})," \u4e24\u79cd\u6a21\u5f0f\uff0c\u4e0d\u540c\u70b9 ",(0,r.jsx)(n.code,{children:"GenericPLEG"})," \u662f\u5b9a\u65f6\u53bb\u8bfb\u53d6\u4e8b\u4ef6\uff0c",(0,r.jsx)(n.code,{children:"EventedPLEG"})," \u65f6\u901a\u8fc7\u4e3b\u52a8\u63a5\u53d7\u4e8b\u4ef6\u7684\u63a8\u9001\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"PLEG"})," \u5168\u79f0\u662f ",(0,r.jsx)(n.code,{children:"Pod Lifecycle Event Generator"})," \uff0c\u5b83\u4e3b\u8981\u901a\u8fc7\u8bfb\u53d6 ",(0,r.jsx)(n.code,{children:"container"})," \u7684 ",(0,r.jsx)(n.code,{children:"Event"})," \u6765\u66f4\u65b0 ",(0,r.jsx)(n.code,{children:"Pod"})," \u7684\u72b6\u6001\uff0c\u76ee\u524d\u63d0\u4f9b\u4e86 ",(0,r.jsx)(n.code,{children:"GenericPLEG"})," \u548c ",(0,r.jsx)(n.code,{children:"EventedPLEG"})," \u4e24\u79cd\u6a21\u5f0f\uff0c\u4e0d\u540c\u70b9 ",(0,r.jsx)(n.code,{children:"GenericPLEG"})," \u662f\u5b9a\u65f6\u53bb\u8bfb\u53d6\u4e8b\u4ef6\uff0c",(0,r.jsx)(n.code,{children:"EventedPLEG"})," \u65f6\u901a\u8fc7\u4e3b\u52a8\u63a5\u53d7\u4e8b\u4ef6\u7684\u63a8\u9001\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://firebasestorage.googleapis.com/v0/b/notiondiagram.appspot.com/o/diagram%2Fm5smUNzLG7NDZmSPY82qhFvWnsu1%2F46bd1519-3feb-409c-96b3-98e02692f488.svg?alt=media&token=0f26310c-2165-4755-80c0-d2acc8682ed7",alt:"a"})}),"\n",(0,r.jsx)(n.h2,{id:"genericpleg",children:"GenericPLEG"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u7528 ",(0,r.jsx)(n.code,{children:"PLEG"})," \u914d\u7f6e\u7684\u662f\u6bcf\u79d2\u4e2d\u8bfb\u53d6\u4e00\u6b21\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"genericPlegRelistPeriod    = time.Second * 1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"Start"})," \u65b9\u6cd5\u4e4b\u540e\u5c31\u4f1a\u8fdb\u5165\u95f4\u9694 ",(0,r.jsx)(n.code,{children:"1s"})," \u6267\u884c\u4e00\u6b21 ",(0,r.jsx)(n.code,{children:"g.Relist"})," \u8fd9\u4e2a\u65b9\u6cd5\u4e2d\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (g *GenericPLEG) Start() {\n\tif !g.isRunning {\n\t\tgo wait.Until(g.Relist, g.relistDuration.RelistPeriod, g.stopCh)\n\t}\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"g.Relist"})," \u65b9\u6cd5\u6838\u5fc3\u6267\u884c\u6d41\u7a0b\uff1a"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u83b7\u53d6\u5f53\u524d\u673a\u5668\u4e0a\u7684\u6240\u6709 ",(0,r.jsx)(n.code,{children:"Pod"}),", \u4e3b\u8981\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"CRI-API"})," \u4e2d\u5b9a\u4e49\u7684 ",(0,r.jsx)(n.code,{children:"ListPodSandbox"})," \u548c ",(0,r.jsx)(n.code,{children:"ListContainers"})," \u4e24\u4e2a\u65b9\u6cd5\u83b7\u53d6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// Get all the pods.\npodList, err := g.runtime.GetPods(ctx, true)\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u66f4\u65b0\u5f53\u524d\u7684 ",(0,r.jsx)(n.code,{children:"podRecord"}),"\uff0cpodRecord \u4e2d\u4e24\u4e2a\u5bf9\u8c61\uff0c\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"old"})," ,\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"current"})," ."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"g.podRecords.setCurrent(pods)\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6240\u6709\u7684\u65b0\u8001 ",(0,r.jsx)(n.code,{children:"pod"})," \u7684\u5bb9\u5668\u7ec4\u5230\u4e00\u8d77\u8fdb\u884c\u904d\u5386\u3002\u8fdb\u884c\u65b0\u8001\u7684\u5bf9\u6bd4,\u5982\u679c\u6709 ",(0,r.jsx)(n.code,{children:"event"})," \u53d8\u5316,\u5219\u8bb0\u5f55."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u9996\u5148\u6839\u636e\u5bb9\u5668\u72b6\u6001\u8f6c\u6362\u4e3a ",(0,r.jsx)(n.code,{children:"pleg"})," \u72b6\u6001"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func convertState(state kubecontainer.State) plegContainerState {\n\tswitch state {\n\tcase kubecontainer.ContainerStateCreated:\n\t\t// kubelet doesn\'t use the "created" state yet, hence convert it to "unknown".\n\t\treturn plegContainerUnknown\n\tcase kubecontainer.ContainerStateRunning:\n\t\treturn plegContainerRunning\n\tcase kubecontainer.ContainerStateExited:\n\t\treturn plegContainerExited\n\tcase kubecontainer.ContainerStateUnknown:\n\t\treturn plegContainerUnknown\n\tdefault:\n\t\tpanic(fmt.Sprintf("unrecognized container state: %v", state))\n\t}\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["b. \u4e4b\u540e\u6839\u636e ",(0,r.jsx)(n.code,{children:"old"})," \u548c ",(0,r.jsx)(n.code,{children:"current"})," \u751f\u6210\u7684 ",(0,r.jsx)(n.code,{children:"pleg"})," \u72b6\u6001\u751f\u6210 ",(0,r.jsx)(n.code,{children:"PLEGEvent"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func generateEvents(podID types.UID, cid string, oldState, newState plegContainerState) []*PodLifecycleEvent {\n\tswitch newState {\n\tcase plegContainerRunning:\n\t\treturn []*PodLifecycleEvent{{ID: podID, Type: ContainerStarted, Data: cid}}\n\tcase plegContainerExited:\n\t\treturn []*PodLifecycleEvent{{ID: podID, Type: ContainerDied, Data: cid}}\n\tcase plegContainerUnknown:\n\t\treturn []*PodLifecycleEvent{{ID: podID, Type: ContainerChanged, Data: cid}}\n\tcase plegContainerNonExistent:\n\t\tswitch oldState {\n\t\tcase plegContainerExited:\n\t\t\t// We already reported that the container died before.\n\t\t\treturn []*PodLifecycleEvent{{ID: podID, Type: ContainerRemoved, Data: cid}}\n\t\tdefault:\n\t\t\treturn []*PodLifecycleEvent{{ID: podID, Type: ContainerDied, Data: cid}, {ID: podID, Type: ContainerRemoved, Data: cid}}\n\t\t}\n\tdefault:\n\t\tpanic(fmt.Sprintf("unrecognized container state: %v", newState))\n\t}\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4f1a\u904d\u5386\u6240\u6709 ",(0,r.jsx)(n.code,{children:"Pod"})," \u7684\u4e8b\u4ef6\uff0c\u7136\u540e\u53d1\u5f80 ",(0,r.jsx)(n.code,{children:"eventChannel"})," \u4e2d\uff0c\u4e4b\u540e\u5c31\u4f1a\u88ab ",(0,r.jsx)(n.code,{children:"syncLoopIteration"})," \u63a5\u6536\u5230\u8fdb\u884c\u5904\u7406\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'for pid, events := range eventsByPodID {\n\t\t...\n\t\tfor i := range events {\n\t\t\t// Filter out events that are not reliable and no other components use yet.\n\t\t\tif events[i].Type == ContainerChanged {\n\t\t\t\tcontinue\n\t\t\t}\n\t\t\tselect {\n\t\t\tcase g.eventChannel <- events[i]:\n\t\t\tdefault:\n\t\t\t\tmetrics.PLEGDiscardEvents.Inc()\n\t\t\t\tklog.ErrorS(nil, "Event channel is full, discard this relist() cycle event")\n\t\t\t}\n\t\t}\n\t}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"eventedpleg",children:"EventedPLEG"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e8b\u4ef6 ",(0,r.jsx)(n.code,{children:"PLEG"})," \u4f1a\u521b\u5efa\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"GenericPLEG"})," ,\u5728\u63a5\u53d7\u4e8b\u4ef6\u5931\u8d25\u6b21\u6570\u8fbe\u5230\u4e0a\u9650\u4e4b\u540e\u5c31\u4f1a\u9000\u56de\u5230 ",(0,r.jsx)(n.code,{children:"GenericPLEG"})," \u7c7b\u578b\uff0c\u4f46\u662f\u5b83\u8bfb\u53d6\u4e00\u6b21\u7684\u65f6\u95f4\u95f4\u9694\u662f ",(0,r.jsx)(n.code,{children:"300s"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"Start"})," \u65b9\u6cd5\u4e4b\u540e\u5c31\u4f1a\u521b\u5efa\u4e24\u4e2a\u534f\u7a0b\u4e00\u81f4\u63a5\u6536\u6570\u636e\uff0c\u8fd9\u91cc\u548c",(0,r.jsx)(n.code,{children:"GenericPLEG"})," \u7684\u533a\u522b\u8fd8\u6709\u4e0d\u9700\u8981\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"Watch"})," \u65b9\u6cd5\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (e *EventedPLEG) Start() {\n\t...\n\tgo wait.Until(e.watchEventsChannel, 0, e.stopCh)\n\tgo wait.Until(e.updateGlobalCache, globalCacheUpdatePeriod, e.stopCacheUpdateCh)\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"e.watchEventsChannel"})," \u65b9\u6cd5\u6838\u5fc3\u6267\u884c\u6d41\u7a0b\uff1a"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u9996\u5148\u5224\u65ad\u662f\u5426\u8d85\u8fc7\u6700\u5927\u5c1d\u8bd5\u6b21\u6570\uff0c\u9ed8\u8ba4\u662f ",(0,r.jsx)(n.code,{children:"e.eventedPlegMaxStreamRetries=5"})," \u6b21\u3002\u5982\u679c\u8d85\u8fc7\u4e86\u4f1a\u56de\u9000\u5230",(0,r.jsx)(n.code,{children:"GenericPLEG"})," \u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (e *EventedPLEG) watchEventsChannel() {\n\tgo func() {\n\t\tnumAttempts := 0\n\t\tfor {\n\t\t\tif numAttempts >= e.eventedPlegMaxStreamRetries {\n\t\t\t\t  e.Stop()\n\t\t\t\t\te.genericPleg.Stop()       // Stop the existing Generic PLEG which runs with longer relisting period when Evented PLEG is in use.\n\t\t\t\t\te.Update(e.relistDuration) // Update the relisting period to the default value for the Generic PLEG.\n\t\t\t\t\te.genericPleg.Start()\n\t\t\t\t\tbreak\n\t\t\t}\n\t\t\terr := e.runtimeService.GetContainerEvents(context.Background(), containerEventsResponseCh, func(runtimeapi.RuntimeService_GetContainerEventsClient) {\n\t\t\t\tmetrics.EventedPLEGConn.Inc()\n\t\t\t})\n\t\t\tif err != nil {\n\t\t\t  ...\n\t\t\t\tnumAttempts++\n\t\t\t}\n\t\t}\n\t}()\n}\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"runtimeService.GetContainerEvents"})," \u83b7\u53d6\u5bb9\u5668\u7684 ",(0,r.jsx)(n.code,{children:"Events"})," , \u6211\u4eec\u770b ",(0,r.jsx)(n.code,{children:"proto"})," \u4e2d\u7684\u5b9a\u4e49\u5c31\u660e\u767d\uff0c\u4e3a\u4ec0\u4e48\u8fd9\u91cc\u53ef\u4ee5\u4e3b\u52a8\u76d1\u542c\u8fd9\u4e2a\u4e8b\u4ef6\u7684\u53d8\u5316\uff0c\u56e0\u4e3a\u5b83\u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"steam"})," \u7c7b\u578b"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"steam"})," \u5728 ",(0,r.jsx)(n.code,{children:"gRPC"})," \u4e2d\u662f\u4e00\u4e2a\u53cc\u5411\u6d41\u7684\u8fc7\u7a0b\uff0c\u53ef\u4ee5\u5b9e\u73b0\u6570\u636e\u7684\u53cc\u5411\u4f20\u8f93\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-protobuf",children:"rpc GetContainerEvents(GetEventsRequest) returns (stream ContainerEventResponse) {}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func (r *remoteRuntimeService) GetContainerEvents(ctx context.Context, containerEventsCh chan *runtimeapi.ContainerEventResponse, connectionEstablishedCallback func(runtimeapi.RuntimeService_GetContainerEventsClient)) error {\n\tcontainerEventsStreamingClient, err := r.runtimeClient.GetContainerEvents(ctx, &runtimeapi.GetEventsRequest{})\n\t...\n\tfor {\n\t\tresp, err := containerEventsStreamingClient.Recv()\n\t\tif err == io.EOF {\n\t\t\tr.logErr(err, "container events stream is closed")\n\t\t\treturn err\n\t\t}\n\t\tif err != nil {\n\t\t\tr.logErr(err, "failed to receive streaming container event")\n\t\t\treturn err\n\t\t}\n\t\tif resp != nil {\n\t\t\tcontainerEventsCh <- resp\n\t\t\tr.log(4, "container event received", "resp", resp)\n\t\t}\n\t}\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5904\u7406 ",(0,r.jsx)(n.code,{children:"Event"})," , \u5b83\u63a5\u6536\u5230 ",(0,r.jsx)(n.code,{children:"Event"})," \u4e4b\u540e\u4f1a\u6839\u636e\u7c7b\u578b\u53d1\u9001\u5230 ",(0,r.jsx)(n.code,{children:"GenericPLEG"})," \u7ed3\u6784\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"eventChannel"})," chan \u4e2d\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'func (e *EventedPLEG) processCRIEvents(containerEventsResponseCh chan *runtimeapi.ContainerEventResponse) {\n\tfor event := range containerEventsResponseCh {\n    ...\n\t\tif event.ContainerEventType == runtimeapi.ContainerEventType_CONTAINER_DELETED_EVENT {\n\t\t\tshouldSendPLEGEvent = true\n\t\t} else {\n\t\t\tif e.cache.Set(podID, status, err, time.Unix(event.GetCreatedAt(), 0)) {\n\t\t\t\tshouldSendPLEGEvent = true\n\t\t\t}\n\t\t}\n\n\t\tif shouldSendPLEGEvent {\n\t\t\te.processCRIEvent(event)\n\t\t}\n\t}\n}\n\nfunc (e *EventedPLEG) processCRIEvent(event *runtimeapi.ContainerEventResponse) {\n\tswitch event.ContainerEventType {\n\tcase runtimeapi.ContainerEventType_CONTAINER_STOPPED_EVENT:\n\t\te.sendPodLifecycleEvent(&PodLifecycleEvent{ID: types.UID(event.PodSandboxStatus.Metadata.Uid), Type: ContainerDied, Data: event.ContainerId})\n\t\tklog.V(4).InfoS("Received Container Stopped Event", "event", event.String())\n\tcase runtimeapi.ContainerEventType_CONTAINER_CREATED_EVENT:\n\t\tklog.V(4).InfoS("Received Container Created Event", "event", event.String())\n\tcase runtimeapi.ContainerEventType_CONTAINER_STARTED_EVENT:\n\t\te.sendPodLifecycleEvent(&PodLifecycleEvent{ID: types.UID(event.PodSandboxStatus.Metadata.Uid), Type: ContainerStarted, Data: event.ContainerId})\n\t\tklog.V(4).InfoS("Received Container Started Event", "event", event.String())\n\tcase runtimeapi.ContainerEventType_CONTAINER_DELETED_EVENT:\n\t\te.sendPodLifecycleEvent(&PodLifecycleEvent{ID: types.UID(event.PodSandboxStatus.Metadata.Uid), Type: ContainerDied, Data: event.ContainerId})\n\t\te.sendPodLifecycleEvent(&PodLifecycleEvent{ID: types.UID(event.PodSandboxStatus.Metadata.Uid), Type: ContainerRemoved, Data: event.ContainerId})\n\t\tklog.V(4).InfoS("Received Container Deleted Event", "event", event)\n\t}\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"syncloopiteration",children:"syncLoopIteration"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0b\u9762\u6211\u4eec\u6765\u770b\u5728 ",(0,r.jsx)(n.code,{children:"syncLoopIteration"})," \u4e2d\u662f\u5982\u4f55\u5904\u7406\u8fd9\u4e2a ",(0,r.jsx)(n.code,{children:"Event"})," \u7684\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-protobuf",children:'func (kl *Kubelet) syncLoopIteration(ctx context.Context, configCh <-chan kubetypes.PodUpdate, handler SyncHandler,\n\tsyncCh <-chan time.Time, housekeepingCh <-chan time.Time, plegCh <-chan *pleg.PodLifecycleEvent) bool {\n\tselect {\n\tcase e := <-plegCh:\n\t\tif isSyncPodWorthy(e) {\n\t\t\t// PLEG event for a pod; sync it.\n\t\t\tif pod, ok := kl.podManager.GetPodByUID(e.ID); ok {\n\t\t\t\tklog.V(2).InfoS("SyncLoop (PLEG): event for pod", "pod", klog.KObj(pod), "event", e)\n\t\t\t\thandler.HandlePodSyncs([]*v1.Pod{pod})\n\t\t\t} else {\n\t\t\t\t// If the pod no longer exists, ignore the event.\n\t\t\t\tklog.V(4).InfoS("SyncLoop (PLEG): pod does not exist, ignore irrelevant event", "event", e)\n\t\t\t}\n\t\t}\n\n\t\tif e.Type == pleg.ContainerDied {\n\t\t\tif containerID, ok := e.Data.(string); ok {\n\t\t\t\tkl.cleanUpContainersInPod(e.ID, containerID)\n\t\t\t}\n\t\t}\n\t}\n\treturn true\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6838\u5fc3\u6267\u884c\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u4e0d\u662f ",(0,r.jsx)(n.code,{children:"event.Type != pleg.ContainerRemoved"})," \u79fb\u9664\u4e8b\u4ef6\uff0c\u5219\u8fdb\u5165\u6267\u884c\uff0c\u5982\u679c ",(0,r.jsx)(n.code,{children:"Pod"})," \u8fd8\u5728 ",(0,r.jsx)(n.code,{children:"PodManager"})," \u4e2d\uff0c\u5219\u6267\u884c ",(0,r.jsx)(n.code,{children:"HandlePodSyncs"})," ,\u5426\u5219\u8df3\u8fc7\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"HandlePodSyncs"})," \u4e2d\u4e3b\u8981\u662f\u5f80 ",(0,r.jsx)(n.code,{children:"podWorkers"})," \u4e2d\u53d1\u9001 ",(0,r.jsx)(n.code,{children:"UpdatePod"})," \u7684 ",(0,r.jsx)(n.code,{children:"SyncPodSync"})," \u64cd\u4f5c\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u662f ",(0,r.jsx)(n.code,{children:"e.Type == pleg.ContainerDied"})," \u9000\u51fa\u4e8b\u4ef6\uff0c\u5219\u6e05\u9664\u5bb9\u5668\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var r=t(6540);const i={},o=r.createContext(i);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);