(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1wty":function(t,e,a){"use strict";var n=a("dI71"),r=a("q1tI"),o=a.n(r),s=a("Wbzz"),i=a("KDyN"),l=function(t){function e(){return t.apply(this,arguments)||this}Object(n.a)(e,t);var a=e.prototype;return a.getPostList=function(){var t=[];return this.props.postEdges.forEach((function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})})),t},a.render=function(){var t=this.getPostList();return o.a.createElement("div",{className:"post-listing-top"},t.map((function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.Link,{className:"post-listing",to:t.path,key:t.title},o.a.createElement("h3",null,t.title)),o.a.createElement(i.a,{tags:t.tags}))})))},e}(o.a.Component);e.a=l},ZUrO:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return u})),a.d(e,"pageQuery",(function(){return d}));var n=a("q1tI"),r=a.n(n),o=a("qhky"),s=a("hpys"),i=a("1wty"),l=a("IpnI"),c=a.n(l);function u(t){var e=t.pageContext,a=t.data,n=e.tag,l=a.allMarkdownRemark.edges;return r.a.createElement(s.a,null,r.a.createElement("div",{className:"tag-container"},r.a.createElement(o.a,{title:'Posts tagged as "'+n+'" | '+c.a.siteTitle}),r.a.createElement("h1",null,"Category: ",""+n),r.a.createElement(i.a,{postEdges:l})))}var d="83875524"}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-c66981587e116f6746d5.js.map