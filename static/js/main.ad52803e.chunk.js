(this["webpackJsonpreact-ecommerce"]=this["webpackJsonpreact-ecommerce"]||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},37:function(e,t,a){},38:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),c=a.n(r),s=(a(37),a(8)),l=a(9),i=a(11),u=a(10),m=(a(38),a(30)),p=a(1),g=a(12),h=a.n(g),d=a(14),b=a(15),f=a.n(b),k="https://niravkpatel28.github.io/json-data-server/books",v="".concat(k,"/categories.json"),y="".concat(k,"/books.json"),E=(a(57),function(e){var t=e.category,a=e.onClick,n={backgroundImage:"url(".concat(t.displayImg,")"),backgroundSize:"auto"};return o.a.createElement("div",{className:"categoryDiv",style:n,onClickCapture:function(){a(t.categoryId)}},o.a.createElement("h3",null," ",t.categoryName," "))}),j=(a(58),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).navigateToBooks=function(e){console.log("navaigate to ",e),console.log(n.props.history),n.props.history.push("/category/".concat(e))},n.componentDidMount=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(v);case 2:t=e.sent,n.setState({categories:t.data});case 4:case"end":return e.stop()}}),e)}))),n.state={categories:[]},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props),o.a.createElement("div",null,o.a.createElement("h1",null," Home Component "),o.a.createElement("div",{className:"categoryContainer"},this.state.categories.map((function(t){return o.a.createElement(E,{category:t,key:t.categoryId,onClick:e.navigateToBooks})}))))}}]),a}(o.a.Component)),O=(a(59),function(e){var t=e.book;return console.log("sent book ",t),o.a.createElement("div",{className:"bookCard"},o.a.createElement("h4",null," ",t.title," "),o.a.createElement("img",{className:"bookImage",src:t.thumbnailUrl,alt:"thumbnail"}),o.a.createElement("div",{className:"authors"}," ",t.authors.map((function(e){return o.a.createElement("p",null,e," ")}))," "))}),w=(a(60),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(d.a)(h.a.mark((function e(){var t,a,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params.categoryId,e.next=3,f.a.get(y);case 3:a=e.sent,o=a.data.filter((function(e){return e.categoryId===t})),n.setState({books:o[0].books});case 6:case"end":return e.stop()}}),e)}))),n.state={books:[],categoryId:n.props.match.params.categoryId},n}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"bookContainer"},o.a.createElement("h1",null," Book list for category "),o.a.createElement("div",{className:"allBooks"},this.state.books.map((function(e){return o.a.createElement(O,{book:e,key:e.isbn})}))))}}]),a}(o.a.Component)),C=function(e){return console.log("router props ",e),o.a.createElement(m.a,{basename:"/react-ecommerce-books"},o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",component:j}),o.a.createElement(p.a,{exact:!0,path:"/category/:categoryId",component:w})))},I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null," E-Commerce"),o.a.createElement("hr",null),o.a.createElement(C,null))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.ad52803e.chunk.js.map