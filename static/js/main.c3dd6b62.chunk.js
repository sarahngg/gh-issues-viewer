(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/search.4d4782ae.svg"},29:function(e,t,a){e.exports=a.p+"static/media/close.49c09251.svg"},30:function(e,t,a){e.exports=a(66)},35:function(e,t,a){},40:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(11),l=a.n(n),i=(a(35),a(1)),c=a(2),o=a(4),u=a(3),p=a(5),d=a(6),f=a(28),m=a.n(f),h=(a(40),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleFormChange=function(t){e.setState({repoLink:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.repoLink?e.props.submitRepoLink(e.state.repoLink):alert("Please paste a link to a GitHub repo.")},e.state={repoLink:""},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"repo-search-bar"},r.a.createElement("img",{src:m.a,className:"search-icon",alt:"Search icon"}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",onChange:this.handleFormChange,value:this.state.repoLink,className:"gitHubLink",placeholder:"Paste a link to a GitHub repo!"})))}}]),t}(s.Component)),b=Object(d.b)(function(e){return{repoLink:e.repoLink}},{submitRepoLink:function(e){return{type:"SUBMIT_REPO_LINK",payload:e}}})(h),g=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"repo-search-page-content"},r.a.createElement("h1",null,"GitHub Issue Explorer"),r.a.createElement(b,null))}}]),t}(s.Component),v=a(7),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.labels.map(function(e){return e!=={}?r.a.createElement("div",{key:e.id,className:"issue-label-wrapper"},r.a.createElement("div",{className:"issue-label-hole"}),r.a.createElement("div",{className:"issue-label"},e.name)):r.a.createElement("div",null)});return r.a.createElement("div",{className:"issue-labels-container"},e)}}]),t}(s.Component);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var j=r.a.createElement("path",{d:"M32 14.2L27.2 19l8 8.2L48 14.4l-4.8-4.8-7.9 7.9-3.3-3.3zM22.4 40c-8.8 0-16-7.2-16-16s7.2-16 16-16c4.4 0 8.4 1.8 11.3 4.7l4.5-4.5c-4.1-4.1-9.7-6.6-15.8-6.6C10 1.6 0 11.6 0 24s10 22.4 22.4 22.4 22.4-10 22.4-22.4l-10 10c.4-.5-3.8 6-12.4 6zm3.2-28.8h-6.4v16h6.4v-16zm-6.4 25.6h6.4v-6.4h-6.4v6.4z"}),S=function(e){var t=e.svgRef,a=y(e,["svgRef"]);return r.a.createElement("svg",E({viewBox:"0 0 48 48",ref:t},a),j)},k=r.a.forwardRef(function(e,t){return r.a.createElement(S,E({svgRef:t},e))});a.p;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var L=r.a.createElement("path",{d:"M7.2 3.2C3.7 3.2.8 6.1.8 9.6.8 12 2.1 14 4 15.1v21C2.1 37.2.8 39.2.8 41.6c0 3.5 2.9 6.4 6.4 6.4s6.4-2.9 6.4-6.4c0-2.4-1.3-4.4-3.2-5.5v-21c1.9-1.1 3.2-3.2 3.2-5.5 0-3.5-2.9-6.4-6.4-6.4zm0 41.6c-1.8 0-3.2-1.4-3.2-3.2 0-1.8 1.4-3.2 3.2-3.2 1.8 0 3.2 1.4 3.2 3.2 0 1.8-1.4 3.2-3.2 3.2zm0-32C5.4 12.8 4 11.4 4 9.6s1.4-3.2 3.2-3.2c1.8 0 3.2 1.4 3.2 3.2S9 12.8 7.2 12.8zM36 36.1V16c0-9.6-9.6-9.6-9.6-9.6h-3.2V0l-9.6 9.6 9.6 9.6v-6.4h3.2c2.8 0 3.2 3.2 3.2 3.2v20.1c-1.9 1.1-3.2 3.1-3.2 5.5 0 3.5 2.9 6.4 6.4 6.4s6.4-2.9 6.4-6.4c0-2.4-1.3-4.4-3.2-5.5zm-3.2 8.7c-1.8 0-3.2-1.4-3.2-3.2 0-1.8 1.4-3.2 3.2-3.2 1.8 0 3.2 1.4 3.2 3.2 0 1.8-1.4 3.2-3.2 3.2z"}),C=function(e){var t=e.svgRef,a=w(e,["svgRef"]);return r.a.createElement("svg",N({viewBox:"0 0 40 48",ref:t},a),L)},I=r.a.forwardRef(function(e,t){return r.a.createElement(C,N({svgRef:t},e))}),P=(a.p,function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.title,s=t.body,n=t.labels;e=""===s?r.a.createElement("div",{className:"card-body-text card-body-text-empty"},"No description provided."):r.a.createElement("div",{className:"card-body-text"},s);var l=r.a.createElement("div",null);return"undefined"===typeof this.props.pullRequest&&"closed"===this.props.state&&(l=r.a.createElement(k,{className:"icon"})),("pulls"===this.props.filterSelected||"pulls"!==this.props.filterSelected&&"undefined"!==typeof this.props.pullRequest)&&(l=r.a.createElement(I,{className:"icon"})),r.a.createElement("div",{className:"card-wrapper"},r.a.createElement("div",{className:"card-title"},r.a.createElement("div",{className:"card-title-text"},a),r.a.createElement("div",{className:"svg-wrapper issue-icon"},l)),r.a.createElement("div",{className:"card-details"},e,r.a.createElement(O,{labels:n})))}}]),t}(s.Component)),R=Object(d.b)(function(e){return{filterSelected:e.filterSelected}})(P),x=a(29),_=a.n(x),V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleCloseViewer=function(e){a.props.closeIssueViewer()},a.handleClick=function(e){switch(e.target.getAttribute("id")){case"all":a.props.setFilter("all"),a.setState({filterStyle:{all:"issue-page-filter-selected",open:"issue-page-filter-unselected",closed:"issue-page-filter-unselected",pulls:"issue-page-filter-unselected"}});break;case"open":a.props.setFilter("open"),a.setState({filterStyle:{all:"issue-page-filter-unselected",open:"issue-page-filter-selected",closed:"issue-page-filter-unselected",pulls:"issue-page-filter-unselected"}});break;case"closed":a.props.setFilter("closed"),a.setState({filterStyle:{all:"issue-page-filter-unselected",open:"issue-page-filter-unselected",closed:"issue-page-filter-selected",pulls:"issue-page-filter-unselected"}});break;case"pulls":a.props.setFilter("pulls"),a.setState({filterStyle:{all:"issue-page-filter-unselected",open:"issue-page-filter-unselected",closed:"issue-page-filter-unselected",pulls:"issue-page-filter-selected"}});break;default:a.props.setFilter("all"),a.setState({filterStyle:{all:"issue-page-filter-unselected",open:"issue-page-filter-unselected",closed:"issue-page-filter-unselected",pulls:"issue-page-filter-unselected"}})}},a.state={filterStyle:{all:"issue-page-filter-selected",open:"issue-page-filter-unselected",closed:"issue-page-filter-unselected",pulls:"issue-page-filter-unselected"}},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{onClick:this.handleClick,className:"issue-page-filter-container"},r.a.createElement("button",{id:"all",className:this.state.filterStyle.all},"All Issues"),r.a.createElement("button",{id:"open",className:this.state.filterStyle.open},"Open Issues"),r.a.createElement("button",{id:"closed",className:this.state.filterStyle.closed},"Closed Issues"),r.a.createElement("button",{id:"pulls",className:this.state.filterStyle.pulls},"Pull Requests"),r.a.createElement("button",{id:"exit",onClick:this.handleCloseViewer},r.a.createElement("img",{src:_.a,className:"close-icon",alt:"Close issue viewer"})))}}]),t}(s.Component),A=Object(d.b)(function(e){return{filterSelected:e.filterSelected}},{closeIssueViewer:function(){return{type:"CLOSE_ISSUE_VIEWER"}},setFilter:function(e){return{type:"SET_FILTER",payload:e}}})(V),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){switch(e.target.getAttribute("id")){case"prev":a.props.previousPage();break;case"next":a.props.nextPage()}},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pagination",onClick:this.handleClick},r.a.createElement("button",{id:"prev"},"<"),"Page ",this.props.page,r.a.createElement("button",{id:"next"},">"))}}]),t}(s.Component),z=Object(d.b)(function(e){return{page:e.page}},{nextPage:function(){return{type:"NEXT_PAGE"}},previousPage:function(){return{type:"PREVIOUS_PAGE"}}})(F),T=a(17),U=a.n(T),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoading:!0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.user,a=this.props.repoName;null!==t&&null!=a?U.a.get("https://api.github.com/repos/"+t+"/"+a+"/issues?state=all").then(function(t){e.props.loadIssues(t.data),e.setState(function(e){return Object(v.a)({},e,{isLoading:!1})})}).catch(function(t){t.response&&e.setState(function(e){return Object(v.a)({},e,{error:t.message})})}):this.setState(function(e){return Object(v.a)({},e,{error:"Invalid user and/or repo name."})})}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(this.props.filterSelected!==e.filterSelected||this.props.page!==e.page||this.state.isLoading!==t.isLoading&&this.state.isLoading===t.isLoading){this.setState(function(e){return Object(v.a)({},e,{isLoading:!0})});var s,r=this.props.user,n=this.props.repoName;s="pulls"!==this.props.filterSelected?"https://api.github.com/repos/"+r+"/"+n+"/issues?page="+this.props.page+"&state="+this.props.filterSelected:"https://api.github.com/repos/"+r+"/"+n+"/pulls?page="+this.props.page+"&state=all",U.a.get(s).then(function(e){a.props.loadIssues(e.data),a.setState(function(e){return Object(v.a)({},e,{isLoading:!1})}),window.scrollTo(0,0)}).catch(function(e){e.response&&a.setState(function(t){return Object(v.a)({},t,{error:e.message})})})}}},{key:"render",value:function(){var e=this.props.issues;if(null!==this.state.error)e=r.a.createElement("div",{className:"issue-page-display-message"},"We ran into some issues :(",r.a.createElement("br",null),this.state.error);else if(!0===this.state.isLoading)e=r.a.createElement("div",{className:"loader"});else if(0===e.length)e=r.a.createElement("div",{className:"issue-page-display-message"},"No issues found.");else{var t=this.props.issues.map(function(e){return null!==e?r.a.createElement(R,{key:e.id,state:e.state,pullRequest:e.pull_request,title:e.title,body:e.body,labels:e.labels}):r.a.createElement("div",null)});e=r.a.createElement("div",{className:"issues-container"},t)}return r.a.createElement("div",null,r.a.createElement("div",{className:"sticky-top"},r.a.createElement("div",{className:"issues-page-header"},r.a.createElement("div",{className:"issue-page-header-text"},"GitHub Issue Viewer"),r.a.createElement("div",{className:"issue-page-header-link"},this.props.repoLink)),r.a.createElement(A,null)),r.a.createElement("div",{className:"min-height-set-wrapper"},e),r.a.createElement(z,null))}}]),t}(s.Component),M=Object(d.b)(function(e){return{repoLink:e.repoLink,user:e.user,repoName:e.repoName,issues:e.issues,filterSelected:e.filterSelected,page:e.page}},{loadIssues:function(e){return{type:"LOAD_ISSUES",payload:e}}})(G),B=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return""===this.props.repoLink?r.a.createElement("div",{className:"repo-search-page-container"},r.a.createElement(g,null)):r.a.createElement("div",{className:"issue-display-page-container"},r.a.createElement(M,null))}}]),t}(s.Component),q=Object(d.b)(function(e){return{repoLink:e.repoLink}})(B),D=a(12),H={repoLink:"",user:"",repoName:"",filterSelected:"all",issues:[],page:1},W=a(58),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEXT_PAGE":var a=e.page+1;return Object(v.a)({},e,{page:a});case"PREVIOUS_PAGE":var s=e.page;return e.page>1&&(s=e.page-1),Object(v.a)({},e,{page:s});case"SUBMIT_REPO_LINK":return Object(v.a)({},e,{repoLink:t.payload,user:W(t.payload).owner,repoName:W(t.payload).name});case"SET_FILTER":return Object(v.a)({},e,{filterSelected:t.payload,page:1});case"CLOSE_ISSUE_VIEWER":return Object(v.a)({},e,{repoLink:"",user:"",repoName:"",page:1,issues:[]});case"LOAD_ISSUES":return Object(v.a)({},e,{issues:t.payload});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=Object(D.b)(J);l.a.render(r.a.createElement(d.a,{store:K},r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.c3dd6b62.chunk.js.map