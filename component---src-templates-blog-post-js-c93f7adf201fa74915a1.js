"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{9535:function(e,t,a){var n=a(7294),l=a(5444),r=a(6125);t.Z=function(){var e,t,a=(0,l.useStaticQuery)("3257411868"),i=null===(e=a.site.siteMetadata)||void 0===e?void 0:e.author;null===(t=a.site.siteMetadata)||void 0===t||t.social;return n.createElement("div",{className:"bio"},n.createElement(r.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__error:'No data found for image "../images/profile-pic.png"\n              undefinedCould not read image data file "/home/runner/work/new-blog/new-blog/.cache/caches/gatsby-plugin-image/1243370623.json". \nThis may mean that the images in "/home/runner/work/new-blog/new-blog/src/components/bio.js" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'}),(null==i?void 0:i.name)&&n.createElement("p",null,n.createElement("strong",null,i.name)," ",(null==i?void 0:i.summary)||null," "))}},7198:function(e,t,a){var n=a(7294),l=a(5444),r=function(e){return n.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},n.createElement(l.Link,{to:e.to},e.children))};t.Z=function(e){var t=e.location,a=e.title,i=e.children,o="/"===t.pathname;return o?n.createElement("h1",{className:"main-heading"},n.createElement(l.Link,{to:"/"},a)):n.createElement(l.Link,{className:"header-link-home",to:"/"},a),n.createElement("div",{className:"global-wrapper","data-is-root-path":o},n.createElement("header",{className:"global-header"},n.createElement(l.Link,{to:"/",style:{textShadow:"none",backgroundImage:"none"}},n.createElement("h3",{style:{display:"inline"}},a)),n.createElement("ul",{style:{listStyle:"none",float:"right"}},n.createElement(r,{to:"/"},"Home"),n.createElement(r,{to:"/about/"},"About"),n.createElement(r,{to:"/tags"},"Tags"),n.createElement(r,{to:"/contact/"},"Contact"),n.createElement(r,{to:"/books"},"Books "))),n.createElement("main",null,i),n.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},6179:function(e,t,a){var n=a(7294),l=a(5414),r=a(5444),i=function(e){var t,a,i,o=e.description,c=e.lang,s=e.meta,m=e.title,u=(0,r.useStaticQuery)("2841359383").site,d=o||u.siteMetadata.description,p=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(l.q,{htmlAttributes:{lang:c},title:m,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:d},{property:"og:title",content:m},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=u.siteMetadata)||void 0===a||null===(i=a.social)||void 0===i?void 0:i.twitter)||""},{name:"twitter:title",content:m},{name:"twitter:description",content:d}].concat(s)})};i.defaultProps={lang:"en",meta:[],description:""},t.Z=i},4870:function(e,t,a){a.r(t);var n=a(7294),l=a(5444),r=a(9535),i=a(7198),o=a(6179);t.default=function(e){var t,a=e.data,c=e.location,s=a.markdownRemark,m=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",u=a.previous,d=a.next;return n.createElement(i.Z,{location:c,title:m},n.createElement(o.Z,{title:s.frontmatter.title,description:s.frontmatter.description||s.excerpt}),n.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h1",{itemProp:"headline"},s.frontmatter.title),n.createElement("p",null,s.frontmatter.date)),n.createElement("section",{dangerouslySetInnerHTML:{__html:s.html},itemProp:"articleBody"}),n.createElement("hr",null),n.createElement("footer",null,n.createElement(r.Z,null))),n.createElement("nav",{className:"blog-post-nav"},n.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.createElement("li",null,u&&n.createElement(l.Link,{to:u.fields.slug,rel:"prev"},"← ",u.frontmatter.title)),n.createElement("li",null,d&&n.createElement(l.Link,{to:d.fields.slug,rel:"next"},d.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-c93f7adf201fa74915a1.js.map