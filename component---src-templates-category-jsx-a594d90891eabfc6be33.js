(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1wty":function(t,e,a){"use strict";var n=a("dI71"),r=a("q1tI"),o=a.n(r),s=a("Wbzz"),i=a("KDyN"),c=function(t){function e(){return t.apply(this,arguments)||this}Object(n.a)(e,t);var a=e.prototype;return a.getPostList=function(){var t=[];return this.props.postEdges.forEach((function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})})),t},a.render=function(){var t=this.getPostList();return o.a.createElement("div",{className:"post-listing-top"},t.map((function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.Link,{className:"post-listing",to:t.path,key:t.title},o.a.createElement("h3",null,t.title)),o.a.createElement(i.a,{tags:t.tags}))})))},e}(o.a.Component);e.a=c},amwm:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return u})),a.d(e,"pageQuery",(function(){return d}));var n=a("q1tI"),r=a.n(n),o=a("qhky"),s=a("hpys"),i=a("1wty"),c=a("IpnI"),l=a.n(c);function u(t){var e=t.pageContext,a=t.data,n=e.category,c=a.allMarkdownRemark.edges;return r.a.createElement(s.a,null,r.a.createElement("div",{className:"category-container"},r.a.createElement(o.a,{title:'Posts in category "'+n+'" | '+l.a.siteTitle}),r.a.createElement(i.a,{postEdges:c})))}var d="3386110835"}}]);
//# sourceMappingURL=component---src-templates-category-jsx-a594d90891eabfc6be33.js.map