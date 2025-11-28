import{Ab as b,Db as S,H as p,Ha as d,Ib as v,Ka as f,S as u,Sa as h,Ta as n,Ua as r,Va as a,_a as g,f as c,fb as i,gb as x,va as s,y as m}from"./chunk-XI4ZGEO4.js";function y(o,e){if(o&1&&(n(0,"li"),i(1),r()),o&2){let t=e.$implicit;s(),x(t)}}var _=class o{loader=u(v);searchSubject=new c;loading=!1;results=[];constructor(){this.searchSubject.pipe(m(5e3),p(e=>(this.loader.show(),this.fakeApi(e)))).subscribe(e=>{this.results=e,this.loader.hide()})}onSearch(e){let t=e.target.value;this.searchSubject.next(t)}fakeApi(e){return new Promise(t=>{setTimeout(()=>{t([`Result for "${e}" #1`,`Result for "${e}" #2`,`Result for "${e}" #3`])},5e3)})}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=d({type:o,selectors:[["app-home"]],decls:17,vars:1,consts:[[2,"margin-left","10px"],[1,"search-container"],["type","text","placeholder","Search...",3,"input"],[4,"ngFor","ngForOf"]],template:function(t,l){t&1&&(n(0,"div",0)(1,"h2"),i(2," Search Example"),r(),n(3,"p"),i(4,` React Component Design (or equivalent in Vue/Angular)
Question:
`),a(5,"br"),i(6," Build a SearchBar component that: "),a(7,"br"),i(8,`
\u25CF	Accepts user input.
`),a(9,"br"),i(10,`
\u25CF	Debounces API calls (only fires request 500ms after user stops typing).
`),a(11,"br"),i(12,`
\u25CF	Displays a loading indicator while fetching.
`),r(),n(13,"div",1)(14,"input",2),g("input",function(C){return l.onSearch(C)}),r(),n(15,"ul"),f(16,y,2,1,"li",3),r()()()),t&2&&(s(16),h("ngForOf",l.results))},dependencies:[S,b],styles:[".search-container[_ngcontent-%COMP%]{width:300px;margin:20px}input[_ngcontent-%COMP%]{width:100%;padding:10px;border:1px solid #ccc;border-radius:6px}"]})};export{_ as Home};
