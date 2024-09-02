"use strict";(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[5993],{2167:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>i,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var o=t(4848),l=t(8453);const r={slug:"kubelet-volumemanager",title:"Kubelet \u6e90\u7801\u5206\u6790 volumeManager",authors:["rongfu"],tags:["Kubernetes","Kubelet"]},a=void 0,u={permalink:"/blog/kubelet-volumemanager",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-01-kubelet-volumemanager.md",source:"@site/blog/2024-09-01-kubelet-volumemanager.md",title:"Kubelet \u6e90\u7801\u5206\u6790 volumeManager",description:"VolumeManager \u8fd0\u884c\u4e00\u7ec4\u5f02\u6b65\u5faa\u73af\uff0c\u6839\u636e\u8be5\u8282\u70b9\u4e0a\u8c03\u5ea6\u7684 pod \u786e\u5b9a\u9700\u8981 attached/mounted/unmounted/detached \u54ea\u4e9b\u5377\uff0c\u5e76\u6267\u884c\u6b64\u64cd\u4f5c\u3002",date:"2024-09-01T00:00:00.000Z",tags:[{inline:!1,label:"Kubernetes",permalink:"/blog/tags/kubernetes",description:"kubernetes"},{inline:!1,label:"Kubelet",permalink:"/blog/tags/Kubelet",description:"Kubelet"}],readingTime:7.76,hasTruncateMarker:!0,authors:[{name:"Leng",title:"Softwore Developer",url:"https://github.com/lengrongfu",image_hrl:"https://avatars.githubusercontent.com/u/15009201?v=4",socials:{github:"https://github.com/lengrongfu"},key:"rongfu",page:null}],frontMatter:{slug:"kubelet-volumemanager",title:"Kubelet \u6e90\u7801\u5206\u6790 volumeManager",authors:["rongfu"],tags:["Kubernetes","Kubelet"]},unlisted:!1,nextItem:{title:"kubelet\u6e90\u7801\u5206\u6790 podManager\u548cpodWorkers\u3001workQueue",permalink:"/blog/kubelet-five-analyze"}},d={authorsImageUrls:[void 0]},s=[];function c(e){const n={code:"code",img:"img",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"VolumeManager"})," \u8fd0\u884c\u4e00\u7ec4\u5f02\u6b65\u5faa\u73af\uff0c\u6839\u636e\u8be5\u8282\u70b9\u4e0a\u8c03\u5ea6\u7684 ",(0,o.jsx)(n.code,{children:"pod"})," \u786e\u5b9a\u9700\u8981 ",(0,o.jsx)(n.code,{children:"attached/mounted/unmounted/detached"})," \u54ea\u4e9b\u5377\uff0c\u5e76\u6267\u884c\u6b64\u64cd\u4f5c\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u4e0b\u9762\u6211\u4eec\u6765\u5206\u6790 ",(0,o.jsx)(n.code,{children:"VolumeManager"})," \u5b9a\u4e49\u7684\u63a5\u53e3\uff0c"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"type VolumeManager interface {\n\t// Starts the volume manager and all the asynchronous loops that it controls\n\t// \u542f\u52a8\u8fd9\u4e2avolume manager\u548c\u5f02\u6b65\u5faa\u73af\u63a7\u5236\u5668\n\tRun(ctx context.Context, sourcesReady config.SourcesReady)\n\n\t// WaitForAttachAndMount \u5904\u7406\u6307\u5b9a pod \u4e2d\u5f15\u7528\u7684\u5377\u5e76\u963b\u585e\uff0c\u76f4\u5230\u5b83\u4eec\u5168\u90e8\u8fde\u63a5\u5e76\u6302\u8f7d\uff08\u53cd\u6620\u5728\u5b9e\u9645\u72b6\u6001\u4e2d\uff09\u3002\n\t// \u5982\u679c\u672a\u5728 podAttachAndMountTimeout \u5b9a\u4e49\u7684\u6301\u7eed\u65f6\u95f4\u5185\u8fde\u63a5\u5e76\u6302\u8f7d\u6240\u6709\u5377\uff0c\u5219\u4f1a\u8fd4\u56de\u9519\u8bef\u3002\n\tWaitForAttachAndMount(ctx context.Context, pod *v1.Pod) error\n\n\t// WaitForUnmount \u5904\u7406\u6307\u5b9a pod \u4e2d\u5f15\u7528\u7684\u5377\u5e76\u963b\u585e\uff0c\u76f4\u5230\u5b83\u4eec\u5168\u90e8\u5378\u8f7d\uff08\u53cd\u6620\u5728\u5b9e\u9645\u72b6\u6001\u4e2d\uff09\u3002\n\t// \u5982\u679c\u672a\u5728 podAttachAndMountTimeout \u5b9a\u4e49\u7684\u6301\u7eed\u65f6\u95f4\u5185\u5378\u8f7d\u6240\u6709\u5377\uff0c\u5219\u4f1a\u8fd4\u56de\u9519\u8bef\u3002\n\tWaitForUnmount(ctx context.Context, pod *v1.Pod) error\n\n\t// GetMountedVolumesForPod \u8fd4\u56de\u4e00\u4e2a VolumeMap\uff0c\u5176\u4e2d\u5305\u542b\u6307\u5b9a pod \u5f15\u7528\u7684\u5df2\u6210\u529f\u9644\u52a0\u548c\u6302\u8f7d\u7684\u5377\u3002\n\t// \u6620\u5c04\u4e2d\u7684\u952e\u662f OuterVolumeSpecName\uff08\u5373 pod.Spec.Volumes[x].Name\uff09\u3002\u5982\u679c pod \u6ca1\u6709\u5377\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a\u7a7a\u7684 VolumeMap\u3002\n\tGetMountedVolumesForPod(podName types.UniquePodName) container.VolumeMap\n\n  // GetPossiblyMountedVolumesForPod \u8fd4\u56de\u4e00\u4e2a VolumeMap\uff0c\u5176\u4e2d\u5305\u542b\u6307\u5b9a pod \u5f15\u7528\u7684\u5377\uff0c\n  // \u8fd9\u4e9b\u5377\u8981\u4e48\u5df2\u6210\u529f\u8fde\u63a5\u5e76\u6302\u8f7d\uff0c\u8981\u4e48\u201c\u4e0d\u786e\u5b9a\u201d\uff0c\u5373\u5377\u63d2\u4ef6\u53ef\u80fd\u6b63\u5728\u6302\u8f7d\u5b83\u4eec\u3002\u6620\u5c04\u4e2d\u7684\u952e\u662f OuterVolumeSpecName\uff08\u5373 pod.Spec.Volumes[x].Name\uff09\u3002\n  // \u5982\u679c pod \u6ca1\u6709\u5377\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a\u7a7a\u7684 VolumeMap\u3002\n\tGetPossiblyMountedVolumesForPod(podName types.UniquePodName) container.VolumeMap\n\n\t// GetExtraSupplementalGroupsForPod \u8fd4\u56de Pod \u7684\u989d\u5916\u8865\u5145\u7ec4\u5217\u8868\u3002\n\t// \u8fd9\u4e9b\u989d\u5916\u7684\u8865\u5145\u7ec4\u6765\u81ea Pod \u6240\u4f9d\u8d56\u7684\u6301\u4e45\u5377\u4e0a\u7684\u6ce8\u91ca\u3002\n\tGetExtraSupplementalGroupsForPod(pod *v1.Pod) []int64\n\n\t// GetVolumesInUse \u8fd4\u56de\u6240\u6709\u5b9e\u73b0 volume.Attacher \u63a5\u53e3\u7684\u5377\u7684\u5217\u8868\uff0c\u8fd9\u4e9b\u5377\u5f53\u524d\u6839\u636e\u7f13\u5b58\u7684\u5b9e\u9645\u72b6\u6001\u548c\u671f\u671b\u72b6\u6001\u5904\u4e8e\u4f7f\u7528\u72b6\u6001\u3002\n\t// \u5377\u4e00\u65e6\u6dfb\u52a0\u5230\u671f\u671b\u7684\u72b6\u6001\uff0c\u5373\u88ab\u89c6\u4e3a\u201c\u6b63\u5728\u4f7f\u7528\u201d\uff0c\u8868\u660e\u5b83*\u5e94\u8be5*\u8fde\u63a5\u5230\u6b64\u8282\u70b9\u5e76\u4fdd\u6301\u201c\u6b63\u5728\u4f7f\u7528\u201d\u72b6\u6001\uff0c\u76f4\u5230\u5b83\u4ece\u671f\u671b\u7684\u72b6\u6001\u548c\u5b9e\u9645\u7684\u72b6\u6001\u4e2d\u79fb\u9664\uff0c\n\t// \u6216\u8005\u5b83\u5df2\u88ab\u5378\u8f7d\uff08\u5982\u5b9e\u9645\u7684\u4e16\u754c\u72b6\u6001\u6240\u793a\uff09\u3002\n\tGetVolumesInUse() []v1.UniqueVolumeName\n\n\t// \u4ec5\u5f53 kubelet \u542f\u52a8\u540e\u534f\u8c03\u5668\u4e2d\u7684\u5b9e\u9645\u72b6\u6001\u81f3\u5c11\u540c\u6b65\u4e00\u6b21\u540e\uff0cReconcilerStatesHasBeenSynced \u624d\u4f1a\u8fd4\u56de true\uff0c\n\t// \u4ee5\u4fbf\u53ef\u4ee5\u5b89\u5168\u5730\u66f4\u65b0\u4ece\u5b9e\u9645\u72b6\u6001\u68c0\u7d22\u5230\u7684\u5df2\u6302\u8f7d\u5377\u5217\u8868\u3002\n\tReconcilerStatesHasBeenSynced() bool\n\n\t// \u5982\u679c\u7ed9\u5b9a\u7684\u5377\u5df2\u9644\u52a0\u5230\u6b64\u8282\u70b9\uff0c\u5219 VolumeIsAttached \u8fd4\u56de true\u3002\n\tVolumeIsAttached(volumeName v1.UniqueVolumeName) bool\n\n\t// \u5c06\u6307\u5b9a\u5377\u6807\u8bb0\u4e3a\u5df2\u5728\u8282\u70b9\u7684\u5377\u72b6\u6001\u4e2d\u6210\u529f\u62a5\u544a\u4e3a\u201c\u6b63\u5728\u4f7f\u7528\u201d\u3002\n\tMarkVolumesAsReportedInUse(volumesReportedAsInUse []v1.UniqueVolumeName)\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u542f\u52a8 ",(0,o.jsx)(n.code,{children:"VolumeManager"})," \u662f\u5728 ",(0,o.jsx)(n.code,{children:"Kubelet.go"})," \u7684 ",(0,o.jsx)(n.code,{children:"Run"})," \u65b9\u6cd5\u4e2d\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"func (kl *Kubelet) Run(updates <-chan kubetypes.PodUpdate) {\n\t...\n\tgo kl.volumeManager.Run(ctx, kl.sourcesReady)\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"WaitForAttachAndMount"})," \u662f\u5728 ",(0,o.jsx)(n.code,{children:"Pod"})," \u540c\u6b65\u7684\u65f6\u5019\u4f1a\u8c03\u7528\uff0c\u5982\u679c\u5f53\u524d\u540c\u6b65\u7684 ",(0,o.jsx)(n.code,{children:"Pod"})," \u6ca1\u6709 ",(0,o.jsx)(n.code,{children:"Attach"})," \u548c ",(0,o.jsx)(n.code,{children:"Mount"})," \u6210\u529f\uff0c\u5219\u4f1a\u8fdb\u884c\u8fd4\u56de\u7ee7\u7eed\u8ba9 ",(0,o.jsx)(n.code,{children:"podWorkerLoop"})," \u8fdb\u884c\u6267\u884c\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'func (kl *Kubelet) SyncPod(ctx context.Context, updateType kubetypes.SyncPodType, pod, mirrorPod *v1.Pod, podStatus *kubecontainer.PodStatus) (isTerminal bool, err error) {\n  ...\n  // Wait for volumes to attach/mount\n\tif err := kl.volumeManager.WaitForAttachAndMount(ctx, pod); err != nil {\n\t\tif !wait.Interrupted(err) {\n\t\t\tkl.recorder.Eventf(pod, v1.EventTypeWarning, events.FailedMountVolume, "Unable to attach or mount volumes: %v", err)\n\t\t\tklog.ErrorS(err, "Unable to attach or mount volumes for pod; skipping pod", "pod", klog.KObj(pod))\n\t\t}\n\t\treturn false, err\n\t}\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"WaitForUnmount"})," \u662f\u5728 ",(0,o.jsx)(n.code,{children:"Pod"})," \u5df2\u7ec8\u6b62\u65f6\u8fdb\u884c\u8c03\u7528\uff0c\u9700\u8981\u7b49\u5f85 ",(0,o.jsx)(n.code,{children:"Unmount"})," . \u8fd9\u91cc\u4f1a\u963b\u585e\u8fdb\u884c\u7b49\u5f85\uff0c\u76f4\u5230\u6210\u529f\u6216\u8005\u9519\u8bef\uff0c\u4f46\u662f\u5728 ",(0,o.jsx)(n.code,{children:"SyncTerminatedPod"})," \u5e76\u6ca1\u6709\u5904\u7406\u8fd4\u56de\u9519\u8bef\u7684\u7c7b\u578b\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u5373\u4f7f ",(0,o.jsx)(n.code,{children:"Unmount"})," \u5931\u8d25\u4e86\u4e5f\u4f1a\u6267\u884c ",(0,o.jsx)(n.code,{children:"Pod"})," \u5220\u9664\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"func (kl *Kubelet) SyncTerminatedPod(ctx context.Context, pod *v1.Pod, podStatus *kubecontainer.PodStatus) error {\n  ...\n  if err := kl.volumeManager.WaitForUnmount(ctx, pod); err != nil {\n\t\treturn err\n\t}\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u4e0b\u9762\u6211\u4eec\u6765\u5206\u6790\u4e0b ",(0,o.jsx)(n.code,{children:"volumeManager"})," \u7ed3\u6784\u4f53\u7684\u5b9a\u4e49\uff0c\u548c\u5177\u4f53\u7684 ",(0,o.jsx)(n.code,{children:"VolumeManager"})," \u7684\u5b9e\u73b0"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"type volumeManager struct {\n\t\n\t// volumePluginMgr \u662f\u7528\u4e8e\u8bbf\u95ee\u5377\u63d2\u4ef6\u7684\u5377\u63d2\u4ef6\u7ba1\u7406\u5668\u3002\u5b83\u5fc5\u987b\u9884\u5148\u521d\u59cb\u5316\u3002\n\tvolumePluginMgr *volume.VolumePluginMgr\n\n\t// desireStateOfWorld \u662f\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\uff0c\u5305\u542b\u7ba1\u7406\u5668\u6240\u5b9a\u4e49\u7684\u671f\u671b\u72b6\u6001\uff1a\n\t// \u5373\u5e94\u9644\u52a0\u54ea\u4e9b\u5377\u4ee5\u53ca\u54ea\u4e9b pod \u6b63\u5728\u5f15\u7528\u8fd9\u4e9b\u5377\u3002\u6570\u636e\u7ed3\u6784\u7531 kubelet pod \u7ba1\u7406\u5668\u4f7f\u7528\u7684\u72b6\u6001\u586b\u5145\u5668\u586b\u5145\u3002\n\tdesiredStateOfWorld cache.DesiredStateOfWorld\n\n\t// actualStateOfWorld \u662f\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\uff0c\u5305\u542b\u7ba1\u7406\u5668\u6240\u5b9a\u4e49\u7684\u5b9e\u9645\u72b6\u6001\uff1a\n\t// \u5373\u54ea\u4e9b\u5377\u8fde\u63a5\u5230\u6b64\u8282\u70b9\u4ee5\u53ca\u8fd9\u4e9b\u5377\u6302\u8f7d\u5230\u54ea\u4e9b pod\u3002\u534f\u8c03\u5668\u89e6\u53d1\u7684\u6302\u8f7d\u3001\u5206\u79bb\u3001\u6302\u8f7d\u548c\u5378\u8f7d\u64cd\u4f5c\u6210\u529f\u5b8c\u6210\u540e\uff0c\u5c06\u586b\u5145\u8be5\u6570\u636e\u7ed3\u6784\u3002\n\tactualStateOfWorld cache.ActualStateOfWorld\n\n\t// operationExecutor \u7528\u4e8e\u542f\u52a8\u5f02\u6b65\u9644\u52a0\u3001\u5206\u79bb\u3001\u6302\u8f7d\u548c\u5378\u8f7d\u64cd\u4f5c\u3002\n\toperationExecutor operationexecutor.OperationExecutor\n\n\t// reconciler runs an asynchronous periodic loop to reconcile the\n\t// desiredStateOfWorld with the actualStateOfWorld by triggering attach,\n\t// detach, mount, and unmount operations using the operationExecutor.\n\treconciler reconciler.Reconciler\n\n\t// desireStateOfWorldPopulator \u8fd0\u884c\u4e00\u4e2a\u5f02\u6b65\u5468\u671f\u5faa\u73af\uff0c\u4f7f\u7528 kubelet PodManager \u586b\u5145 desireStateOfWorld\u3002\n\tdesiredStateOfWorldPopulator populator.DesiredStateOfWorldPopulator\n\n\t// csiMigratedPluginManager \u8ddf\u8e2a\u63d2\u4ef6\u7684 CSI \u8fc1\u79fb\u72b6\u6001\n\tcsiMigratedPluginManager csimigration.PluginManager\n\n\t// intreeToCSITranslator \u5c06\u6811\u5185\u5377\u89c4\u8303\u8f6c\u6362\u4e3a CSI\n\tintreeToCSITranslator csimigration.InTreeToCSITranslator\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u8c03\u7528 ",(0,o.jsx)(n.code,{children:"volumeManager.run"}),"  \u4e4b\u540e\u4f1a\u542f\u52a8\u4e09\u4e2a\u534f\u7a0b\uff0c\u5206\u522b\u662f ",(0,o.jsx)(n.code,{children:"List-Watch"})," \u8d44\u6e90 ",(0,o.jsx)(n.code,{children:"CSIDrivers"})," , \u4e00\u4e2a\u662f\u542f\u52a8\u4e00\u4e2a ",(0,o.jsx)(n.code,{children:"dswp"})," \u7684\u534f\u7a0b\uff0c\u53bb\u66f4\u65b0 ",(0,o.jsx)(n.code,{children:"desiredStateOfWorld"})," \u548c ",(0,o.jsx)(n.code,{children:"actualStateOfWorld"})," , \u4e00\u4e2a\u662f\u534f\u8c03\u534f\u7a0b\uff0c\u5b83\u4f1a\u6839\u636e\u5f53\u524d ",(0,o.jsx)(n.code,{children:"Pod"})," \u671f\u671b\u7684 ",(0,o.jsx)(n.code,{children:"Volume"})," \u72b6\u6001\u548c\u5b9e\u9645\u72b6\u6001\u8fdb\u884c\u5904\u7406\uff0c\u51b3\u5b9a\u662f\u9700\u8981 ",(0,o.jsx)(n.code,{children:"Mount"})," \u8fd8\u662f ",(0,o.jsx)(n.code,{children:"UnMount"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://firebasestorage.googleapis.com/v0/b/notiondiagram.appspot.com/o/diagram%2Fm5smUNzLG7NDZmSPY82qhFvWnsu1%2Fe27e3b5b-dbcb-40eb-b33c-0cefa08335b9.svg?alt=media&token=8aaa9c51-1cce-4905-acff-6644eb79ac32",alt:""})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"volumePluginMgr"})," \u9700\u8981\u901a\u8fc7\u6ce8\u518c\u7684 ",(0,o.jsx)(n.code,{children:"Volume"})," \u63d2\u4ef6\u8fdb\u884c\u521d\u59cb\u5316\uff0c\u9ed8\u8ba4\u6ce8\u518c\u7684\u63d2\u4ef6\u5982\u4e0b\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"func ProbeVolumePlugins(featureGate featuregate.FeatureGate) ([]volume.VolumePlugin, error) {\n\tallPlugins := []volume.VolumePlugin{}\n\tallPlugins = append(allPlugins, emptydir.ProbeVolumePlugins()...)\n\tallPlugins = append(allPlugins, git_repo.ProbeVolumePlugins()...)\n\tallPlugins = append(allPlugins, hostpath.ProbeVolumePlugins(volume.VolumeConfig{})...)\n\tallPlugins = append(allPlugins, nfs.ProbeVolumePlugins(volume.VolumeConfig{})...)\n\tallPlugins = append(allPlugins, secret.ProbeVolumePlugins()...)\n\tallPlugins = append(allPlugins, iscsi.ProbeVolumePlugins()...)\n\tallPlugins = append(allPlugins, downwardapi.ProbeVolumePlugins()...)\n\tallPlugins = append(allPlugins, fc.ProbeVolumePlugins()...)\n\tallPlugins = append(allPlugins, configmap.ProbeVolumePlugins()...)\n\tallPlugins = append(allPlugins, projected.ProbeVolumePlugins()...)\n\tallPlugins = append(allPlugins, local.ProbeVolumePlugins()...)\n\tallPlugins = append(allPlugins, csi.ProbeVolumePlugins()...)\n\tif featureGate.Enabled(features.ImageVolume) {\n\t\tallPlugins = append(allPlugins, image.ProbeVolumePlugins()...)\n\t}\n\treturn allPlugins, nil\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u6bcf\u4e2a\u63d2\u4ef6\u90fd\u9700\u8981\u5b9e\u73b0 ",(0,o.jsx)(n.code,{children:"VolumePlugin"}),"  \u63a5\u53e3\u4e2d\u7684\u65b9\u6cd5\uff0c\u7279\u522b\u662f ",(0,o.jsx)(n.code,{children:"Init"})," \u65b9\u6cd5\u9700\u8981\u5728\u521d\u59cb\u5316 ",(0,o.jsx)(n.code,{children:"VolumePluginMgr"})," \u65f6\u5019\u8c03\u7528 ",(0,o.jsx)(n.code,{children:"InitPlugins"})," \u5faa\u73af\u7684\u628a\u6240\u6709\u6ce8\u518c\u7684\u63d2\u4ef6\u90fd\u521d\u59cb\u5316\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"type VolumePlugin interface {\n\t// Init initializes the plugin.  This will be called exactly once\n\t// before any New* calls are made - implementations of plugins may\n\t// depend on this.\n\tInit(host VolumeHost) error\n  ...\n\t// NewMounter creates a new volume.Mounter from an API specification.\n\t// Ownership of the spec pointer in *not* transferred.\n\t// - spec: The v1.Volume spec\n\t// - pod: The enclosing pod\n\tNewMounter(spec *Spec, podRef *v1.Pod) (Mounter, error)\n\n\t// NewUnmounter creates a new volume.Unmounter from recoverable state.\n\t// - name: The volume name, as per the v1.Volume spec.\n\t// - podUID: The UID of the enclosing pod\n\tNewUnmounter(name string, podUID types.UID) (Unmounter, error)\n  ...\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u603b\u7ed3\uff1a"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"volumeManager"})," \u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"actualStateOfWorld"})," \u548c ",(0,o.jsx)(n.code,{children:"desiredStateOfWorld"})," \u6765\u8868\u660e\u5f53\u524d\u7684 ",(0,o.jsx)(n.code,{children:"volume"})," \u6302\u8f7d\u72b6\u6001\u548c\u671f\u671b\u7684 ",(0,o.jsx)(n.code,{children:"volume"})," \u6302\u8f7d\u72b6\u6001\u3002\u7136\u540e\u7531 ",(0,o.jsx)(n.code,{children:"desiredStateOfWorldPopulator"})," \u7ef4\u62a4 ",(0,o.jsx)(n.code,{children:"desireedStateOfWorld"})," \u548c ",(0,o.jsx)(n.code,{children:"podManager"})," \u7684\u4e00\u81f4\u6027\uff1b"]}),"\n",(0,o.jsxs)(n.p,{children:["\u7531 ",(0,o.jsx)(n.code,{children:"reconcile"})," \u7ef4\u62a4 ",(0,o.jsx)(n.code,{children:"actualStateOfWorld"})," \u548c ",(0,o.jsx)(n.code,{children:"desiredStateOfWorld"})," \u7684\u4e00\u81f4\u6027\u53ca\u78c1\u76d8 ",(0,o.jsx)(n.code,{children:"volume"})," \u6302\u8f7d\u548c ",(0,o.jsx)(n.code,{children:"actualStateOfWorld"})," \u7684\u4e00\u81f4\u6027\u3002\u901a\u8fc7\u8fd9\u4e9b\u673a\u5236\uff0c",(0,o.jsx)(n.code,{children:"volumeManager"})," \u5b8c\u6210\u4e86 ",(0,o.jsx)(n.code,{children:"volume"})," \u6302\u8f7d\u751f\u547d\u5468\u671f\u7684\u7ba1\u7406\u3002"]})]})}function i(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>u});var o=t(6540);const l={},r=o.createContext(l);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);