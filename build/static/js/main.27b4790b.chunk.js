(this.webpackJsonpapi=this.webpackJsonpapi||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(2),c=n.n(i),l=(n(12),n(3)),s=n(4),o=n(6),u=n(5),p=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={pictures:[]},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.repeat()}),2e3)}},{key:"repeat",value:function(){var e=this;fetch("https://randomuser.me/api/?results=1").then((function(e){return e.json()})).then((function(t){var n=t.results.map((function(e){return a.a.createElement("div",null,a.a.createElement("div",{key:e.results},a.a.createElement("img",{src:e.picture.large,style:{marginTop:"-130px",marginLeft:"85px",height:"200px",width:"200px",borderRadius:"100px",border:"5px solid blue"}}),a.a.createElement("h1",{style:{display:"flex",justifyContent:"center",color:"white"}},"First Name: ",e.name.first),a.a.createElement("h1",{style:{display:"flex",justifyContent:"center",color:"white"}},"Gender: ",e.gender),a.a.createElement("h1",{style:{display:"flex",justifyContent:"center",color:"white"}},"Age: ",e.dob.age),a.a.createElement("h1",{style:{display:"flex",justifyContent:"center",color:"white"}},"Country:",e.location.country)))}));e.setState({pictures:n})}))}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{borderRadius:"20px",height:"520px",width:"450px",marginTop:"150px",backgroundColor:"blue"}},a.a.createElement("div",{className:"container1",style:{margin:"30px"}},a.a.createElement("div",{className:"container2"},this.state.pictures))))}}]),n}(a.a.Component);c.a.render(a.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.27b4790b.chunk.js.map