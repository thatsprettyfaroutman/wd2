parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({13:[function(require,module,exports) {

},{}],39:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=exports.SET_SPLASH_SHOWING="SET_SPLASH_SHOWING";
},{}],25:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.splashShowing=void 0;var e=require("./types");const r=exports.splashShowing=((r=!0,{type:s,payload:t})=>{switch(s){case e.SET_SPLASH_SHOWING:return t;default:return r}}),s=(e,r,s=["id"])=>!!r.find(r=>s.reduce((s,t)=>s?r[t]===e[t]:s,!0));
},{"./types":39}],15:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dispatch=exports.getState=void 0;var e=require("redux-thunk"),t=i(e),r=require("redux"),o=require("window-or-global"),u=i(o),a=require("./reducers"),d=s(a);function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}const l={},c=u.default.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.compose,n=(0,r.createStore)((0,r.combineReducers)(d),l,c((0,r.applyMiddleware)(t.default)));exports.default=n;const p=exports.getState=n.getState,_=exports.dispatch=n.dispatch;
},{"./reducers":25}],55:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setSplashShowing=void 0;var e=require("./types");const s=exports.setSplashShowing=(s=>({type:e.SET_SPLASH_SHOWING,payload:s}));
},{"./types":39}],31:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=a(e),r=require("react-redux"),s=require("lodash.throttle"),o=a(s),u=require("./actions");function a(e){return e&&e.__esModule?e:{default:e}}const n=e=>({splashShowing:e.splashShowing}),l=e=>({setSplashShowing:(...t)=>e((0,u.setSplashShowing)(...t))});exports.default=(e=>{return(0,r.connect)(n,l)(r=>t.default.createElement(e,r))});
},{"./actions":55}],41:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getCssRootValue=void 0;var e=require("window-or-global"),t=o(e);function o(e){return e&&e.__esModule?e:{default:e}}const r=exports.getCssRootValue=(e=>{if(!t.default.getComputedStyle)return null;let o=t.default.getComputedStyle(document.body).getPropertyValue(e);return"string"==typeof o&&(o=o.trim()),o});
},{}],49:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./index.css"),t=o(e),a=require("react"),l=o(a),s=require("lodash.shuffle"),r=o(s),n=require("classnames"),c=o(n),h=require("inline-style-prefixer/static"),d=o(h);function o(e){return e&&e.__esModule?e:{default:e}}const u="wunderdog";class m extends a.Component{constructor(...e){var t;return t=super(...e),this.letterStyles=u.split("").map(e=>null),t}componentWillMount(){if(!this.props.animate)return;const e=(0,r.default)(u.split("").map((e,t)=>100*t+500));this.letterStyles=e.map(e=>(0,d.default)({animationDelay:`${e}ms`}))}render(){var e=this.props;const t=e.animate,a=e.className,s=e.useDefault;return l.default.createElement("div",{className:(0,c.default)("Logo",t&&"Logo--animate",s&&"Logo--useDefault",a)},l.default.createElement(f,{letterStyles:this.letterStyles}),l.default.createElement(p,{letterStyles:this.letterStyles}))}}const f=({letterStyles:e})=>l.default.createElement("svg",{className:"Logo__default",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 86.6"},l.default.createElement("polygon",{style:e[0],points:"333.4,52 297.2,1.4 277.6,1.4 277.6,85.2 297.2,85.2 297.2,32.7 334.2,84.8 334.5,85.2 352.9,85.2 352.9,1.4 333.4,1.4"}),l.default.createElement("path",{style:e[1],d:"M423.5,1.4h-33.3v83.8h33.3c26.6,0,44.4-16.8,44.4-41.9C467.9,18.3,450,1.4,423.5,1.4z M448,43.4 c0,14.4-10.1,24.4-24.5,24.4h-13.7V18.9h13.7C438.6,18.9,448,28.3,448,43.4z"}),l.default.createElement("polygon",{style:e[2],points:"500.5,85.2 564.1,85.2 564.1,68 520.1,68 520.1,51.2 556.6,51.2 556.6,34.1 520.1,34.1 520.1,18.5 564.1,18.5 564.1,1.4 500.5,1.4"}),l.default.createElement("path",{style:e[3],d:"M735.6,1.4h-33.3v83.8h33.3c26.6,0,44.4-16.8,44.4-41.9C780,18.3,762.2,1.4,735.6,1.4z M760.1,43.4 c0,14.4-10.1,24.4-24.5,24.4h-13.7V18.9h13.7C750.7,18.9,760.1,28.3,760.1,43.4z"}),l.default.createElement("path",{style:e[4],d:"M221,49.5c0,9.9-8,17.9-17.9,17.9h-2.2c-9.9,0-17.9-8-17.9-17.9V1.4h-19.1v48.1c0,20.4,16.6,37.1,37,37.1h2.2 c20.4,0,37-16.6,37-37.1V1.4H221V49.5z"}),l.default.createElement("path",{style:e[5],d:"M849.1,0.1c-23.7,0-42.9,19.4-42.9,43.2s19.3,43.2,42.9,43.2c23.7,0,42.9-19.4,42.9-43.2S872.8,0.1,849.1,0.1z  M872.1,43.3c0,13.2-10.3,23.9-23,23.9c-12.7,0-23-10.7-23-23.9s10.3-23.9,23-23.9C861.8,19.5,872.1,30.2,872.1,43.3z"}),l.default.createElement("polygon",{style:e[6],points:"136.5,1.3 116.7,1.3 99.4,55.9 79.8,1.3 57,1.3 39.7,55.9 20,1.3 0,1.3 30.2,85.2 50.1,85.2 68.8,26.3 90,85.2 109.9,85.2"}),l.default.createElement("path",{style:e[7],d:"M616.4,60h17.4L652,85.4h21.1l-20.6-28.8c9.3-4.9,15.7-14.7,15.7-26c0-16.2-13.2-29.4-29.4-29.4h-39.5v8.6V60v25.4h17.2 V60z M616.4,18.4h22.4c6.7,0,12.2,5.5,12.2,12.2s-5.5,12.2-12.2,12.2h-22.4V18.4z"}),l.default.createElement("path",{style:e[8],d:"M966.1,40.1v2.1v1.6v12h14.4c-1,3.2-2.9,6-5.9,8.6c-4,3.4-8.4,5.1-13.5,5.1c-5.9,0-11.6-2.3-16.7-7c-5.6-5-8.3-11.2-8.3-19 c0-7.6,2.4-13.7,7.4-18.7c5-5.1,11-7.5,18.4-7.5c5.4,0,10.2,1.7,14.5,5c1.2,0.9,2.3,1.9,3.4,3.1l11.1-13.6c-1.8-1.7-3.7-3.2-5.6-4.6 C983.5,6,981.8,4.9,980,4c-5.6-2.7-11.8-4-18.3-4c-12.1,0-22.4,4.3-30.9,12.7c-8.4,8.4-12.7,18.7-12.7,30.8c0,11.8,4.2,22,12.5,30.5 c8.3,8.4,18.4,12.7,30,12.7c12,0,22-4.4,29.7-13.2c3.4-3.9,5.9-8.2,7.4-12.8c1.5-4.8,2.2-10.3,2.2-16.3v-4.1H966.1z"})),p=({letterStyles:e})=>l.default.createElement("svg",{className:"Logo__grid",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 222.603 211.957"},l.default.createElement("path",{style:e[0],d:"M959.844,24.727,943.247,1.5H934.3V39.945h8.947V15.84l16.976,23.906.14.2h8.448V1.5h-8.967Z",transform:"translate(-747.706 -1.2)"}),l.default.createElement("path",{style:e[1],d:"M82.678,433.5H67.4v38.445H82.658c12.183,0,20.371-7.709,20.371-19.193C103.049,441.249,94.861,433.5,82.678,433.5Zm11.244,19.253c0,6.591-4.633,11.184-11.244,11.184H76.367V441.509h6.311C89.608,441.509,93.922,445.822,93.922,452.753Z",transform:"translate(-53.939 -346.924)"}),l.default.createElement("path",{style:e[2],d:"M515.8,471.945h29.118v-7.889H524.747v-7.729H541.8V448.5H524.747v-7.15h20.171V433.5H515.8Z",transform:"translate(-412.787 -346.924)"}),l.default.createElement("path",{style:e[3],d:"M82.758,865.5H67.5v38.445H82.758c12.183,0,20.371-7.709,20.371-19.193C103.129,873.249,94.941,865.5,82.758,865.5ZM94,884.753c0,6.591-4.633,11.184-11.244,11.184H76.467V873.509h6.291C89.688,873.509,94,877.822,94,884.753Z",transform:"translate(-54.019 -692.647)"}),l.default.createElement("path",{style:e[4],d:"M527.463,22.049a8.2,8.2,0,0,1-8.188,8.208h-1.018a8.217,8.217,0,0,1-8.188-8.208V0H501.3V22.049a17,17,0,0,0,16.956,17h1.018a17,17,0,0,0,16.956-17V0h-8.767Z",transform:"translate(-401.183)"}),l.default.createElement("path",{style:e[5],d:"M509.792,862.5a19.812,19.812,0,1,0,19.692,19.812A19.77,19.77,0,0,0,509.792,862.5Zm10.545,19.832a10.552,10.552,0,1,1-10.545-10.944A10.766,10.766,0,0,1,520.337,882.332Z",transform:"translate(-392.22 -690.246)"}),l.default.createElement("path",{style:e[6],d:"M948.669,880.334v7.729h6.591A8.385,8.385,0,0,1,952.543,892a9.215,9.215,0,0,1-6.191,2.337,11.407,11.407,0,0,1-7.669-3.2,11.147,11.147,0,0,1-3.775-8.708,11.512,11.512,0,0,1,3.415-8.568,11.207,11.207,0,0,1,8.428-3.455,10.628,10.628,0,0,1,6.651,2.3,12.827,12.827,0,0,1,1.558,1.418l5.073-6.231a26.764,26.764,0,0,0-2.556-2.1,18.258,18.258,0,0,0-2.437-1.458,20.092,20.092,0,0,0-22.528,3.974,19.987,19.987,0,0,0-.1,28.08,18.715,18.715,0,0,0,13.78,5.812,17.5,17.5,0,0,0,13.641-6.051,16.613,16.613,0,0,0,3.4-5.852,25.954,25.954,0,0,0,1-7.489v-2.437H948.669Z",transform:"translate(-741.624 -690.246)"}),l.default.createElement("path",{style:e[7],d:"M62.571,1.4H53.524L45.595,26.424,36.588,1.4H26.123L18.194,26.424,9.187,1.4H0L13.88,39.905h9.107l8.548-27.021,9.726,27.021h9.127Z",transform:"translate(0 -1.12)"}),l.default.createElement("path",{style:e[8],d:"M943.929,460.222h7.989l8.348,11.623h9.686l-9.467-13.181a13.456,13.456,0,0,0-6.271-25.364H936.1v38.565h7.869V460.222Zm0-19.073h10.265a5.592,5.592,0,1,1,0,11.184H943.929Z",transform:"translate(-749.147 -346.764)"}));exports.default=m;
},{"./index.css":13}],17:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./index.css"),t=f(e),s=require("react"),o=f(s),i=require("classnames"),r=f(i),a=require("window-or-global"),l=f(a),u=require("lodash.noop"),n=f(u),d=require("../../redux/withState"),h=f(d),m=require("../../utils"),p=require("../Logo"),c=f(p);function f(e){return e&&e.__esModule?e:{default:e}}const S=l.default.scrollTo||n.default;class v extends s.Component{constructor(...e){var t;return t=super(...e),this.state={hide:!1,remove:!1},this.mounted=!1,this.hideTimeout=null,this.hide=(()=>{const e=this.props.setSplashShowing,t=parseInt((0,m.getCssRootValue)("--splash-fade-duration")||1e3,10);this.mounted&&this.setState({hide:!0}),setTimeout(()=>{this.mounted&&this.setState({remove:!0}),e(!1)},t+200),document.body.style.overflow="",clearTimeout(this.hideTimeout),S(0,0)}),t}componentDidMount(){const e=parseInt((0,m.getCssRootValue)("--splash-delay")||2e3,10);this.mounted=!0,this.hideTimeout=setTimeout(this.hide,e),document.body.style.overflow="hidden",this.props.setSplashShowing(!0)}componentWillUnmount(){this.mounted=!1,this.props.setSplashShowing(!1)}render(){var e=this.state;const t=e.remove,s=e.hide;return t?null:o.default.createElement("div",{className:(0,r.default)("Splash",s&&"Splash--hide"),onClick:this.hide},o.default.createElement(c.default,{className:"Splash__logo",animate:!0}))}}v.defaultProps={setSplashShowing:n.default},exports.default=(0,h.default)(v);
},{"./index.css":13,"../../redux/withState":31,"../../utils":41,"../Logo":49}],43:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./index.css"),t=i(e),r=require("react"),a=i(r),u=require("react-router-dom"),l=require("classnames"),s=i(l),d=require("../../redux/withState"),c=i(d);function i(e){return e&&e.__esModule?e:{default:e}}const n=({text:e,splashShowing:t})=>a.default.createElement("div",{className:(0,s.default)("Hero",t&&"Hero--hide")},a.default.createElement("div",{className:"Hero__content"},a.default.createElement("h2",null,e)));exports.default=(0,c.default)(n);
},{"./index.css":13,"../../redux/withState":31}],86:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./index.css"),t=o(e),r=require("react"),a=o(r),s=require("react-router-dom"),n=require("../../utils");function o(e){return e&&e.__esModule?e:{default:e}}class l extends r.Component{constructor(...e){var t;return t=super(...e),this.handleClick=(e=>{var t=this.props;const r=t.history,a=t.to;e.preventDefault();const s=parseInt((0,n.getCssRootValue)("--card-effect-duration")||1e3,10),o=document.createElement("div");o.classList.add("CaseCard__effect"),document.body.appendChild(o),setTimeout(()=>{r.push(a)},s/2),setTimeout(()=>{o.remove()},s)}),t}render(){var e=this.props;const t=e.title,r=e.clientName,n=e.image;var o=e.to;const l=void 0===o?"#":o;return a.default.createElement(s.Link,{to:l,className:"CaseCard",onClick:this.handleClick},a.default.createElement("img",{src:n,alt:t}),a.default.createElement("span",null,t),a.default.createElement("span",null,r))}}exports.default=(0,s.withRouter)(l);
},{"./index.css":13,"../../utils":41}],73:[function(require,module,exports) {
module.exports="/dist/case1.0d629584.png";
},{}],74:[function(require,module,exports) {
module.exports="/dist/case2.1094f5fe.png";
},{}],75:[function(require,module,exports) {
module.exports="/dist/case3.a06717d3.png";
},{}],76:[function(require,module,exports) {
module.exports="/dist/case4.72bf4050.png";
},{}],45:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./index.css"),t=x(e),a=require("react"),s=x(a),n=require("inline-style-prefixer/static"),l=x(n),i=require("lodash.noop"),r=x(i),u=require("classnames"),o=x(u),d=require("window-or-global"),c=x(d),m=require("../../utils"),h=require("../../redux/withState"),f=x(h),g=require("../CaseCard"),p=x(g),q=require("../../assets/case1.png"),v=x(q),C=require("../../assets/case2.png"),S=x(C),N=require("../../assets/case3.png"),E=x(N),_=require("../../assets/case4.png"),w=x(_);function x(e){return e&&e.__esModule?e:{default:e}}const T=c.default.addEventListener||r.default,b=c.default.removeEventListener||r.default;class k extends a.Component{constructor(...e){var t;return t=super(...e),this.state={nudge:!1,nudgeInstant:!1},this.cancelAnimation=!1,this.mounted=!1,this.nudgeTimeout=null,this.handleScroll=(e=>{this.cancelAnimation=!0,b("scroll",this.handleScroll)}),this.maybeNudge=(()=>{clearTimeout(this.nudgeTimeout),this.nudgeTimeout=setTimeout(()=>{this.cancelAnimation||this.setState({nudge:!0}),b("scroll",this.handleScroll)},800)}),t}componentDidMount(){this.mounted=!0,T("scroll",this.handleScroll),this.props.splashShowing||this.setState({nudgeInstant:!0,nudge:!0})}componentWillUnmount(){this.mounted=!1,b("scroll",this.handleScroll)}componentWillReceiveProps(e){e.splashShowing||this.maybeNudge()}render(){var e=this.state;const t=e.nudge,a=e.nudgeInstant;return s.default.createElement("div",{className:(0,o.default)("Cases",t&&"Cases--nudge",a&&"Cases--nudgeInstant")},s.default.createElement("div",{className:"Cases__row"},s.default.createElement(p.default,{title:"Online Healthcare Comparison Tool",clientName:"Lääkärinhinta.fi",image:v.default,to:"/case/laakarinhinta"}),s.default.createElement(p.default,{title:"Digital Concept for a Multichannel Drama production",clientName:"Yle",image:S.default,to:"/case/hasbeen"})),s.default.createElement("div",{className:"Cases__row"},s.default.createElement(p.default,{title:"Kisapähkinä - Nettivisa",clientName:"Yle",image:E.default,to:"/case/kisapahkina"}),s.default.createElement(p.default,{title:"Cool life",clientName:"Some random company",image:w.default,to:"/case/cool"})))}}exports.default=(0,f.default)(k);
},{"./index.css":13,"../../utils":41,"../../redux/withState":31,"../CaseCard":86,"../../assets/case1.png":73,"../../assets/case2.png":74,"../../assets/case3.png":75,"../../assets/case4.png":76}],47:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./index.css"),r=s(e),t=require("react"),a=s(t),u=require("../Logo"),l=s(u);function s(e){return e&&e.__esModule?e:{default:e}}const d=()=>a.default.createElement("header",{className:"Header"},a.default.createElement(l.default,{className:"Header__logo",useDefault:!0}));exports.default=d;
},{"./index.css":13,"../Logo":49}],21:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("./index.css");var e=require("react"),r=m(e),t=require("react-helmet"),n=require("react-router-dom"),u=require("window-or-global"),l=m(u),a=require("../../components/Hero"),o=m(a),d=require("../../components/Cases"),c=m(d),s=require("../../components/Header"),i=m(s);function m(e){return e&&e.__esModule?e:{default:e}}class f extends e.Component{componentDidMount(){}render(){return r.default.createElement(e.Fragment,null,r.default.createElement(i.default,null),r.default.createElement(o.default,{text:"We code and design"}),r.default.createElement(c.default,null))}}exports.default=f;
},{"./index.css":13,"../../components/Hero":43,"../../components/Cases":45,"../../components/Header":47}],51:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};require("./index.css");var r=require("react"),t=s(r),a=require("classnames"),n=s(a);function s(e){return e&&e.__esModule?e:{default:e}}function c(e,r){var t={};for(var a in e)r.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}const l=r=>{let a=r.className,s=c(r,["className"]);return t.default.createElement("article",e({},s,{className:(0,n.default)("Article",a)}))};exports.default=l;
},{"./index.css":13}],82:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./index.css"),r=u(e),t=require("react"),s=u(t);function u(e){return e&&e.__esModule?e:{default:e}}const a=({src:e})=>s.default.createElement("div",{className:"HeroImage",style:{backgroundImage:`url(${e})`}});exports.default=a;
},{"./index.css":13}],83:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./index.css"),t=u(e),r=require("react"),s=u(r);function u(e){return e&&e.__esModule?e:{default:e}}const a=({text:e})=>s.default.createElement("h1",{className:"CaseTitle"},e);exports.default=a;
},{"./index.css":13}],84:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./index.css"),r=s(e),t=require("react"),a=s(t);function s(e){return e&&e.__esModule?e:{default:e}}const c=({children:e})=>{const r=Array.isArray(e)?e:[e];return a.default.createElement("div",{className:"ImageSet"},r.map((e,r)=>a.default.createElement("div",{key:r,className:"ImageSet__item",children:e})))};exports.default=c;
},{"./index.css":13}],85:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./index.css"),t=u(e),l=require("react"),r=u(l);function u(e){return e&&e.__esModule?e:{default:e}}const a=({title:e,children:t})=>r.default.createElement("div",{className:"TwoColumns"},r.default.createElement("h2",null,e),r.default.createElement("div",{className:"TwoColumns__body"},t));exports.default=a;
},{"./index.css":13}],57:[function(require,module,exports) {
module.exports="/dist/case3-hero.7df31832.png";
},{}],59:[function(require,module,exports) {
module.exports="/dist/case3-1.7bf40ab5.png";
},{}],61:[function(require,module,exports) {
module.exports="/dist/case3-2.3c0f28c8.png";
},{}],63:[function(require,module,exports) {
module.exports="/dist/case3-3.4302bdee.png";
},{}],65:[function(require,module,exports) {
module.exports="/dist/case3-4.f307e3f1.png";
},{}],67:[function(require,module,exports) {
module.exports="/dist/case3-5.5d100005.png";
},{}],69:[function(require,module,exports) {
module.exports="/dist/case3-6.0bee7fdb.png";
},{}],71:[function(require,module,exports) {
module.exports="/dist/case3-7.580cb9ae.png";
},{}],53:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=L(e),a=require("react-helmet"),l=require("../../../../components/HeroImage"),u=L(l),n=require("../../../../components/CaseTitle"),r=L(n),s=require("../../../../components/ImageSet"),o=L(s),i=require("../../../../components/TwoColumns"),c=L(i),d=require("../../../../assets/case3-hero.png"),f=L(d),m=require("../../../../assets/case3-1.png"),p=L(m),h=require("../../../../assets/case3-2.png"),g=L(h),E=require("../../../../assets/case3-3.png"),x=L(E),y=require("../../../../assets/case3-4.png"),q=L(y),w=require("../../../../assets/case3-5.png"),I=L(w),b=require("../../../../assets/case3-6.png"),v=L(b),k=require("../../../../assets/case3-7.png"),B=L(k);function L(e){return e&&e.__esModule?e:{default:e}}const _=()=>t.default.createElement(e.Fragment,null,t.default.createElement(a.Helmet,null,t.default.createElement("title",null,"Kisapahkina | wunderdog")),t.default.createElement(u.default,{src:f.default}),t.default.createElement(r.default,{text:"Online Healthcare Comparison Tool"}),t.default.createElement("p",null,"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."),t.default.createElement(o.default,null,t.default.createElement("img",{src:p.default,alt:"Laptop"}),t.default.createElement("img",{src:g.default,alt:"Duds"})),t.default.createElement(c.default,{title:"Expound the actual teachings of the great"},t.default.createElement("p",null,"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."),t.default.createElement("p",null,"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.")),t.default.createElement(o.default,null,t.default.createElement("img",{src:x.default,alt:"Bag"}),t.default.createElement("img",{src:q.default,alt:"Phones"})),t.default.createElement(o.default,null,t.default.createElement("img",{src:I.default,alt:"Layout"})),t.default.createElement(c.default,{title:"Expound the actual teachings of the great"},t.default.createElement("p",null,"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.")),t.default.createElement(o.default,{full:!0},t.default.createElement("img",{src:v.default,alt:"Layout"})),t.default.createElement(o.default,{full:!0},t.default.createElement("img",{src:B.default,alt:"Layout"})));exports.default=_;
},{"../../../../components/HeroImage":82,"../../../../components/CaseTitle":83,"../../../../components/ImageSet":84,"../../../../components/TwoColumns":85,"../../../../assets/case3-hero.png":57,"../../../../assets/case3-1.png":59,"../../../../assets/case3-2.png":61,"../../../../assets/case3-3.png":63,"../../../../assets/case3-4.png":65,"../../../../assets/case3-5.png":67,"../../../../assets/case3-6.png":69,"../../../../assets/case3-7.png":71}],23:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./index.css"),t=m(e),r=require("react"),a=m(r),s=require("classnames"),o=m(s),n=require("react-imported-component"),l=m(n),i=require("window-or-global"),u=m(i),c=require("../../components/Article"),d=m(c);function m(e){return e&&e.__esModule?e:{default:e}}const p={kisapahkina:(0,l.default)(()=>Promise.resolve().then(()=>require("./contents/kisapahkina")))};class h extends r.Component{constructor(...e){var t;return t=super(...e),this.state={showError:!1,Content:null},this.loadContent=(()=>{const e=this.props.match,t=e&&e.params&&e.params.contentId&&e.params.contentId.toLowerCase(),r=p[t];if(!r)return this.setState({showError:!0});this.setState({Content:r})}),t}componentDidMount(){this.loadContent(),u.default.scrollTo&&u.default.scrollTo(0,0)}render(){var e=this.state;const t=e.Content;return e.showError?a.default.createElement("div",{className:"Case Case--error"},"error"):t?a.default.createElement(d.default,{className:"Case"},a.default.createElement(t,null)):a.default.createElement("div",{className:"Case Case--loading"},"loading")}}exports.default=h;
},{"./index.css":13,"../../components/Article":51,"./contents/kisapahkina":53}],35:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=L(e),a=require("react-helmet"),l=require("../../components/HeroImage"),u=L(l),n=require("../../components/CaseTitle"),r=L(n),s=require("../../components/ImageSet"),o=L(s),i=require("../../components/TwoColumns"),c=L(i),d=require("../../assets/case3-hero.png"),f=L(d),m=require("../../assets/case3-1.png"),p=L(m),h=require("../../assets/case3-2.png"),g=L(h),E=require("../../assets/case3-3.png"),x=L(E),y=require("../../assets/case3-4.png"),q=L(y),w=require("../../assets/case3-5.png"),I=L(w),b=require("../../assets/case3-6.png"),v=L(b),k=require("../../assets/case3-7.png"),B=L(k);function L(e){return e&&e.__esModule?e:{default:e}}const _=()=>t.default.createElement(e.Fragment,null,t.default.createElement(a.Helmet,null,t.default.createElement("title",null,"Kisapahkina | wunderdog")),t.default.createElement(u.default,{src:f.default}),t.default.createElement(r.default,{text:"Online Healthcare Comparison Tool"}),t.default.createElement("p",null,"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."),t.default.createElement(o.default,null,t.default.createElement("img",{src:p.default,alt:"Laptop"}),t.default.createElement("img",{src:g.default,alt:"Duds"})),t.default.createElement(c.default,{title:"Expound the actual teachings of the great"},t.default.createElement("p",null,"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."),t.default.createElement("p",null,"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.")),t.default.createElement(o.default,null,t.default.createElement("img",{src:x.default,alt:"Bag"}),t.default.createElement("img",{src:q.default,alt:"Phones"})),t.default.createElement(o.default,null,t.default.createElement("img",{src:I.default,alt:"Layout"})),t.default.createElement(c.default,{title:"Expound the actual teachings of the great"},t.default.createElement("p",null,"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.")),t.default.createElement(o.default,{full:!0},t.default.createElement("img",{src:v.default,alt:"Layout"})),t.default.createElement(o.default,{full:!0},t.default.createElement("img",{src:B.default,alt:"Layout"})));exports.default=_;
},{"../../components/HeroImage":82,"../../components/CaseTitle":83,"../../components/ImageSet":84,"../../components/TwoColumns":85,"../../assets/case3-hero.png":57,"../../assets/case3-1.png":59,"../../assets/case3-2.png":61,"../../assets/case3-3.png":63,"../../assets/case3-4.png":65,"../../assets/case3-5.png":67,"../../assets/case3-6.png":69,"../../assets/case3-7.png":71}],19:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./index.css"),r=f(e),t=require("react"),o=f(t),s=require("classnames"),n=f(s),a=require("window-or-global"),l=f(a),u=require("react-imported-component"),d=f(u),i=require("../../utils"),c=require("../../components/Article"),m=f(c);function f(e){return e&&e.__esModule?e:{default:e}}class C extends t.Component{constructor(...e){var r;return r=super(...e),this.state={showError:!1,Content:null},this.loadContent=(()=>{const e=(0,d.default)(()=>Promise.resolve().then(()=>require("./content.js")));if(!e)return this.setState({showError:!0});this.setState({Content:e})}),r}componentDidMount(){this.loadContent(),l.default.scrollTo&&l.default.scrollTo(0,0),document.body.classList.add("Body--Careers")}componentWillUnmount(){document.body.classList.remove("Body--Careers")}render(){var e=this.state;const r=e.Content;return e.showError?o.default.createElement("div",{className:"Careers Careers--error"},"error"):r?o.default.createElement(m.default,{className:"Careers"},o.default.createElement(r,null)):o.default.createElement("div",{className:"Careers Careers--loading"},"loading")}}exports.default=C;
},{"./index.css":13,"../../utils":41,"../../components/Article":51,"./content.js":35}],9:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=j,require("core-js/modules/es6.typed.array-buffer"),require("core-js/modules/es6.typed.int8-array"),require("core-js/modules/es6.typed.uint8-array"),require("core-js/modules/es6.typed.uint8-clamped-array"),require("core-js/modules/es6.typed.int16-array"),require("core-js/modules/es6.typed.uint16-array"),require("core-js/modules/es6.typed.int32-array"),require("core-js/modules/es6.typed.uint32-array"),require("core-js/modules/es6.typed.float32-array"),require("core-js/modules/es6.typed.float64-array"),require("core-js/modules/es6.map"),require("core-js/modules/es6.set"),require("core-js/modules/es6.weak-map"),require("core-js/modules/es6.weak-set"),require("core-js/modules/es6.promise"),require("core-js/modules/es6.symbol"),require("core-js/modules/es6.function.name"),require("core-js/modules/es6.array.from"),require("core-js/modules/es7.object.values"),require("core-js/modules/es7.object.entries"),require("core-js/modules/es7.object.get-own-property-descriptors"),require("core-js/modules/es7.string.pad-start"),require("core-js/modules/es7.string.pad-end"),require("./App.css");var e=require("react"),r=f(e),t=require("react-helmet"),u=require("react-router-dom"),s=require("react-redux"),a=require("./redux/store"),o=f(a),l=require("./components/Splash"),d=f(l),c=require("./views/Home"),i=f(c),m=require("./views/Case"),n=f(m),p=require("./views/Careers"),q=f(p);function f(e){return e&&e.__esModule?e:{default:e}}function j(){return r.default.createElement(e.Fragment,null,r.default.createElement(t.Helmet,{defaultTitle:"Wunderdog"},r.default.createElement("meta",{charSet:"utf-8"}),r.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, user-scalable=1, minimum-scale=1.0, maximum-scale=2.0, shrink-to-fit=no"})),r.default.createElement(s.Provider,{store:o.default},r.default.createElement(e.Fragment,null,r.default.createElement(d.default,null),r.default.createElement(u.Switch,null,r.default.createElement(u.Route,{exact:!0,path:"/case/:contentId",component:n.default}),r.default.createElement(u.Route,{exact:!0,path:"/careers/",component:q.default}),r.default.createElement(u.Route,{exact:!0,path:"/",component:i.default}),r.default.createElement(u.Redirect,{to:"/"})))))}
},{"./App.css":13,"./redux/store":15,"./components/Splash":17,"./views/Home":21,"./views/Case":23,"./views/Careers":19}],11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=c;var e=require("fs"),t=u(e),r=require("path"),i=u(r),n=require("cheerio"),l=u(n),a=require("react-helmet");function u(e){return e&&e.__esModule?e:{default:e}}const o=i.default.join(__dirname,"..","client","index.html"),d=t.default.readFileSync(o).toString();function c(e){const t=a.Helmet.renderStatic(),r=l.default.load(d);return r("head").append(t.title.toString()+t.meta.toString()+t.link.toString()),r("#app").html(e),r.html()}
},{}],7:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react-imported-component"),r=require("react"),t=d(r),u=require("react-dom/server"),a=d(u),l=require("react-router-dom"),n=require("../client/App"),i=d(n),o=require("./generateHtml"),c=d(o);function d(e){return e&&e.__esModule?e:{default:e}}exports.default=((r,u)=>{const n={},o=t.default.createElement(l.StaticRouter,{location:r.originalUrl,context:n},t.default.createElement(i.default,null)),d=a.default.renderToString(o);if(n.url)u.redirect(301,n.url);else{const r=(0,c.default)(d+(0,e.printDrainHydrateMarks)());u.send(r)}});
},{"../client/App":9,"./generateHtml":11}],5:[function(require,module,exports) {
module.exports="/dist/favicon.dc142b8b.ico";
},{}],3:[function(require,module,exports) {
"use strict";var e=require("compression"),i=c(e),t=require("express"),n=c(t),s=require("path"),l=c(s),o=require("./middleware"),r=c(o),u=require("../client/favicon.ico"),a=c(u);function c(e){return e&&e.__esModule?e:{default:e}}const d=(0,n.default)();d.use((0,i.default)());const f=a.default.slice(a.default.lastIndexOf("/")+1);d.use("/favicon.ico",(e,i)=>i.sendFile(l.default.join(__dirname,`../client/${f}`))),d.use("/dist",n.default.static(`${__dirname}/../client`)),d.get("/*",r.default),console.log("PORT",void 0);const _=process.env.PORT || 1234;d.listen(process.env.PORT || 1234,()=>{console.log("Listening on port",process.env.PORT || 1234,"...")});
},{"./middleware":7,"../client/favicon.ico":5}],1:[function(require,module,exports) {
require("babel-register")({}),require("core-js/modules/es6.typed.array-buffer"),require("core-js/modules/es6.typed.int8-array"),require("core-js/modules/es6.typed.uint8-array"),require("core-js/modules/es6.typed.uint8-clamped-array"),require("core-js/modules/es6.typed.int16-array"),require("core-js/modules/es6.typed.uint16-array"),require("core-js/modules/es6.typed.int32-array"),require("core-js/modules/es6.typed.uint32-array"),require("core-js/modules/es6.typed.float32-array"),require("core-js/modules/es6.typed.float64-array"),require("core-js/modules/es6.map"),require("core-js/modules/es6.set"),require("core-js/modules/es6.weak-map"),require("core-js/modules/es6.weak-set"),require("core-js/modules/es6.promise"),require("core-js/modules/es6.symbol"),require("core-js/modules/es6.function.name"),require("core-js/modules/es6.array.from"),require("core-js/modules/es7.object.values"),require("core-js/modules/es7.object.entries"),require("core-js/modules/es7.object.get-own-property-descriptors"),require("core-js/modules/es7.string.pad-start"),require("core-js/modules/es7.string.pad-end"),require("./App");
},{"./App":3}]},{},[1], null)
//# sourceMappingURL=/dist/index.map
