(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,n){e.exports={container:"Container_container__213GF"}},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(8),i=n.n(r),s=(n(15),n(9)),o=n(2),j=n(3),b=n(5),l=n(4),u=n(10),d=n.n(u),h=n(0);var O=function(e){var t=e.children;return Object(h.jsx)("div",{className:d.a.container,children:t})},p=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsx)("section",{children:Object(h.jsxs)(O,{children:[Object(h.jsx)("h2",{children:this.props.title}),this.props.children]})})}}]),n}(c.Component),f=p,x=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(h.jsxs)("ul",{className:"list",children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Good:"})," ",Object(h.jsx)("span",{children:t})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Neutral:"})," ",Object(h.jsx)("span",{children:n})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Bad:"})," ",Object(h.jsx)("span",{children:c})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("spam",{children:"Total:"})," ",Object(h.jsx)("span",{children:a})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Positive feadback:"})," ",Object(h.jsxs)("span",{children:[r,"%"]})]})]})}}]),n}(c.Component),v=x,k=n(7),m=n.n(k),g=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("ul",{className:"list ".concat(m.a.feedbackList),children:t.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:m.a.btn,type:"button",value:e,onClick:function(){return n(e)},children:e})},e)}))})}}]),n}(c.Component),y=g,F=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsx)("p",{children:this.props.message})}}]),n}(c.Component),C=F,_=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return t+e}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e.handleClick=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=Object.keys(this.state);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{hidden:!0,children:"Comments"}),Object(h.jsx)(f,{title:"Please leave feedback",children:Object(h.jsx)(y,{options:a,onLeaveFeedback:this.handleClick})}),Object(h.jsx)(f,{title:"Statistics",children:this.countTotalFeedback()>0?Object(h.jsx)(v,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(C,{message:"No feedback given"})})]})}}]),n}(c.Component),P=_;i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={feedbackList:"FeedbackOptions_feedbackList__3u-pa",btn:"FeedbackOptions_btn__14bcS"}}},[[17,1,2]]]);
//# sourceMappingURL=main.6b0b32d1.chunk.js.map