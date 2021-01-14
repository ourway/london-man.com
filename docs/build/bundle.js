var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function u(){return p(" ")}function l(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function f(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let d;function g(t){d=t}function m(t){(function(){if(!d)throw new Error("Function called outside component initialization");return d})().$$.on_mount.push(t)}const w=[],y=[],v=[],b=[],_=Promise.resolve();let x=!1;function $(t){v.push(t)}let E=!1;const k=new Set;function R(){if(!E){E=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];g(e),C(e.$$)}for(g(null),w.length=0;y.length;)y.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];k.has(e)||(k.add(e),e())}v.length=0}while(w.length);for(;b.length;)b.pop()();x=!1,E=!1,k.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}const U=new Set;let L;function O(t,e){t&&t.i&&(U.delete(t),t.i(e))}function T(t,e,n,o){if(t&&t.o){if(U.has(t))return;U.add(t),L.c.push((()=>{U.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function A(t){t&&t.c()}function j(t,n,i){const{fragment:a,on_mount:s,on_destroy:c,after_update:h}=t.$$;a&&a.m(n,i),$((()=>{const n=s.map(e).filter(r);c?c.push(...n):o(n),t.$$.on_mount=[]})),h.forEach($)}function P(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&(w.push(t),x||(x=!0,_.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(e,r,i,a,s,h,p=[-1]){const u=d;g(e);const l=r.props||{},f=e.$$={fragment:null,ctx:null,props:h,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:p,skip_bound:!1};let m=!1;if(f.ctx=i?i(e,l,((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&s(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&H(e,t)),n})):[],f.update(),m=!0,o(f.before_update),f.fragment=!!a&&a(f.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();r.intro&&O(e.$$.fragment),j(e,r.target,r.anchor),R()}g(u)}class I{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var N,B,q=(function(t,e){t.exports=function(){var t=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},e=y,n=s,o=c,r=h,i=w,a=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function s(t){for(var e,n=[],o=0,r=0,i="";null!=(e=a.exec(t));){var s=e[0],c=e[1],h=e.index;if(i+=t.slice(r,h),r=h+s.length,c)i+=c[1];else{i&&(n.push(i),i="");var p=e[2],l=e[3],f=e[4],d=e[5],g=e[6],m=e[7],w="+"===g||"*"===g,y="?"===g||"*"===g,v=p||"/",b=f||d||(m?".*":"[^"+v+"]+?");n.push({name:l||o++,prefix:p||"",delimiter:v,optional:y,repeat:w,pattern:u(b)})}}return r<t.length&&(i+=t.substr(r)),i&&n.push(i),n}function c(t){return h(s(t))}function h(e){for(var n=new Array(e.length),o=0;o<e.length;o++)"object"==typeof e[o]&&(n[o]=new RegExp("^"+e[o].pattern+"$"));return function(o){for(var r="",i=o||{},a=0;a<e.length;a++){var s=e[a];if("string"!=typeof s){var c,h=i[s.name];if(null==h){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to be defined')}if(t(h)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received "'+h+'"');if(0===h.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var p=0;p<h.length;p++){if(c=encodeURIComponent(h[p]),!n[a].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received "'+c+'"');r+=(0===p?s.prefix:s.delimiter)+c}}else{if(c=encodeURIComponent(h),!n[a].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+c+'"');r+=s.prefix+c}}else r+=s}return r}}function p(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function u(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function l(t,e){return t.keys=e,t}function f(t){return t.sensitive?"":"i"}function d(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var o=0;o<n.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return l(t,e)}function g(t,e,n){for(var o=[],r=0;r<t.length;r++)o.push(y(t[r],e,n).source);return l(new RegExp("(?:"+o.join("|")+")",f(n)),e)}function m(t,e,n){for(var o=s(t),r=w(o,n),i=0;i<o.length;i++)"string"!=typeof o[i]&&e.push(o[i]);return l(r,e)}function w(t,e){for(var n=(e=e||{}).strict,o=!1!==e.end,r="",i=t[t.length-1],a="string"==typeof i&&/\/$/.test(i),s=0;s<t.length;s++){var c=t[s];if("string"==typeof c)r+=p(c);else{var h=p(c.prefix),u=c.pattern;c.repeat&&(u+="(?:"+h+u+")*"),r+=u=c.optional?h?"(?:"+h+"("+u+"))?":"("+u+")?":h+"("+u+")"}}return n||(r=(a?r.slice(0,-2):r)+"(?:\\/(?=$))?"),r+=o?"$":n&&a?"":"(?=\\/|$)",new RegExp("^"+r,f(e))}function y(e,n,o){return t(n=n||[])?o||(o={}):(o=n,n=[]),e instanceof RegExp?d(e,n):t(e)?g(e,n,o):m(e,n,o)}e.parse=n,e.compile=o,e.tokensToFunction=r,e.tokensToRegExp=i;var v,b="undefined"!=typeof document,_="undefined"!=typeof window,x="undefined"!=typeof history,$="undefined"!=typeof process,E=b&&document.ontouchstart?"touchstart":"click",k=_&&!(!window.history.location&&!window.location);function R(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function C(){var t=new R;function e(){return U.apply(t,arguments)}return e.callbacks=t.callbacks,e.exits=t.exits,e.base=t.base.bind(t),e.strict=t.strict.bind(t),e.start=t.start.bind(t),e.stop=t.stop.bind(t),e.show=t.show.bind(t),e.back=t.back.bind(t),e.redirect=t.redirect.bind(t),e.replace=t.replace.bind(t),e.dispatch=t.dispatch.bind(t),e.exit=t.exit.bind(t),e.configure=t.configure.bind(t),e.sameOrigin=t.sameOrigin.bind(t),e.clickHandler=t.clickHandler.bind(t),e.create=C,Object.defineProperty(e,"len",{get:function(){return t.len},set:function(e){t.len=e}}),Object.defineProperty(e,"current",{get:function(){return t.current},set:function(e){t.current=e}}),e.Context=T,e.Route=A,e}function U(t,e){if("function"==typeof t)return U.call(this,"*",t);if("function"==typeof e)for(var n=new A(t,null,this),o=1;o<arguments.length;++o)this.callbacks.push(n.middleware(arguments[o]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function L(t){if(!t.handled){var e=this,n=e._window;(e._hashbang?k&&this._getBase()+n.location.hash.replace("#!",""):k&&n.location.pathname+n.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,k&&(n.location.href=t.canonicalPath))}}function O(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function T(t,e,n){var o=this.page=n||U,r=o._window,i=o._hashbang,a=o._getBase();"/"===t[0]&&0!==t.indexOf(a)&&(t=a+(i?"#!":"")+t);var s=t.indexOf("?");this.canonicalPath=t;var c=new RegExp("^"+O(a));if(this.path=t.replace(c,"")||"/",i&&(this.path=this.path.replace("#!","")||"/"),this.title=b&&r.document.title,this.state=e||{},this.state.path=t,this.querystring=~s?o._decodeURLEncodedURIComponent(t.slice(s+1)):"",this.pathname=o._decodeURLEncodedURIComponent(~s?t.slice(0,s):t),this.params={},this.hash="",!i){if(!~this.path.indexOf("#"))return;var h=this.path.split("#");this.path=this.pathname=h[0],this.hash=o._decodeURLEncodedURIComponent(h[1])||"",this.querystring=this.querystring.split("#")[0]}}function A(t,n,o){var r=this.page=o||j,i=n||{};i.strict=i.strict||r._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=e(this.path,this.keys=[],i)}R.prototype.configure=function(t){var e=t||{};this._window=e.window||_&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&_,this._click=!1!==e.click&&b,this._hashbang=!!e.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):_&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(E,this.clickHandler,!1):b&&n.document.removeEventListener(E,this.clickHandler,!1),this._hashbang&&_&&!x?n.addEventListener("hashchange",this._onpopstate,!1):_&&n.removeEventListener("hashchange",this._onpopstate,!1)},R.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},R.prototype._getBase=function(){var t=this._base;if(t)return t;var e=_&&this._window&&this._window.location;return _&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},R.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},R.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var n;if(this._running=!0,k){var o=this._window.location;n=this._hashbang&&~o.hash.indexOf("#!")?o.hash.substr(2)+o.search:this._hashbang?o.search+o.hash:o.pathname+o.search+o.hash}this.replace(n,null,!0,e.dispatch)}},R.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(E,this.clickHandler,!1),_&&t.removeEventListener("popstate",this._onpopstate,!1),_&&t.removeEventListener("hashchange",this._onpopstate,!1)}},R.prototype.show=function(t,e,n,o){var r=new T(t,e,this),i=this.prevContext;return this.prevContext=r,this.current=r.path,!1!==n&&this.dispatch(r,i),!1!==r.handled&&!1!==o&&r.pushState(),r},R.prototype.back=function(t,e){var n=this;if(this.len>0){var o=this._window;x&&o.history.back(),this.len--}else t?setTimeout((function(){n.show(t,e)})):setTimeout((function(){n.show(n._getBase(),e)}))},R.prototype.redirect=function(t,e){var n=this;"string"==typeof t&&"string"==typeof e&&U.call(this,t,(function(t){setTimeout((function(){n.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){n.replace(t)}),0)},R.prototype.replace=function(t,e,n,o){var r=new T(t,e,this),i=this.prevContext;return this.prevContext=r,this.current=r.path,r.init=n,r.save(),!1!==o&&this.dispatch(r,i),r},R.prototype.dispatch=function(t,e){var n=0,o=0,r=this;function i(){var t=r.exits[o++];if(!t)return a();t(e,i)}function a(){var e=r.callbacks[n++];if(t.path===r.current)return e?void e(t,a):L.call(r,t);t.handled=!1}e?i():a()},R.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var n=new A(t,null,this),o=1;o<arguments.length;++o)this.exits.push(n.middleware(arguments[o]))},R.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,n=t.path||(t.composedPath?t.composedPath():null);if(n)for(var o=0;o<n.length;o++)if(n[o].nodeName&&"A"===n[o].nodeName.toUpperCase()&&n[o].href){e=n[o];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var r="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var i=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==i)&&!(i&&i.indexOf("mailto:")>-1)&&!(r?e.target.baseVal:e.target)&&(r||this.sameOrigin(e.href))){var a=r?e.href.baseVal:e.pathname+e.search+(e.hash||"");a="/"!==a[0]?"/"+a:a,$&&a.match(/^\/[a-zA-Z]:\//)&&(a=a.replace(/^\/[a-zA-Z]:\//,"/"));var s=a,c=this._getBase();0===a.indexOf(c)&&(a=a.substr(c.length)),this._hashbang&&(a=a.replace("#!","")),(!c||s!==a||k&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(s))}}}}},R.prototype._onpopstate=(v=!1,_?(b&&"complete"===document.readyState?v=!0:window.addEventListener("load",(function(){setTimeout((function(){v=!0}),0)})),function(t){if(v){var e=this;if(t.state){var n=t.state.path;e.replace(n,t.state)}else if(k){var o=e._window.location;e.show(o.pathname+o.search+o.hash,void 0,void 0,!1)}}}):function(){}),R.prototype._which=function(t){return null==(t=t||_&&this._window.event).which?t.button:t.which},R.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&k)return new URL(t,e.location.toString());if(b){var n=e.document.createElement("a");return n.href=t,n}},R.prototype.sameOrigin=function(t){if(!t||!k)return!1;var e=this._toURL(t),n=this._window.location;return n.protocol===e.protocol&&n.hostname===e.hostname&&(n.port===e.port||""===n.port&&(80==e.port||443==e.port))},R.prototype._samePath=function(t){if(!k)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},R.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},T.prototype.pushState=function(){var t=this.page,e=t._window,n=t._hashbang;t.len++,x&&e.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},T.prototype.save=function(){var t=this.page;x&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},A.prototype.middleware=function(t){var e=this;return function(n,o){if(e.match(n.path,n.params))return n.routePath=e.path,t(n,o);o()}},A.prototype.match=function(t,e){var n=this.keys,o=t.indexOf("?"),r=~o?t.slice(0,o):t,i=this.regexp.exec(decodeURIComponent(r));if(!i)return!1;delete e[0];for(var a=1,s=i.length;a<s;++a){var c=n[a-1],h=this.page._decodeURLEncodedURIComponent(i[a]);void 0===h&&hasOwnProperty.call(e,c.name)||(e[c.name]=h)}return!0};var j=C(),P=j,H=j;return P.default=H,P}()}(B={path:N,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&B.path)}},B.exports),B.exports);function z(e){let n;return{c(){n=h("h1"),n.textContent="Home Page"},m(t,e){s(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class F extends I{constructor(t){super(),S(this,t,null,z,i,{})}}function K(t,e,n){const o=t.slice();return o[1]=e[n],o}function M(t){let e,n,o,r,i,d,g=t[1].title+"";return{c(){e=h("div"),n=h("h5"),o=h("a"),r=p(g),d=u(),l(o,"href",i="/blog/"+t[1].id)},m(t,i){s(t,e,i),a(e,n),a(n,o),a(o,r),a(e,d)},p(t,e){1&e&&g!==(g=t[1].title+"")&&f(r,g),1&e&&i!==(i="/blog/"+t[1].id)&&l(o,"href",i)},d(t){t&&c(e)}}}function V(e){let n,o,r,i=e[0],a=[];for(let t=0;t<i.length;t+=1)a[t]=M(K(e,i,t));return{c(){n=h("h1"),n.textContent="Blog",o=u();for(let t=0;t<a.length;t+=1)a[t].c();r=p("")},m(t,e){s(t,n,e),s(t,o,e);for(let n=0;n<a.length;n+=1)a[n].m(t,e);s(t,r,e)},p(t,[e]){if(1&e){let n;for(i=t[0],n=0;n<i.length;n+=1){const o=K(t,i,n);a[n]?a[n].p(o,e):(a[n]=M(o),a[n].c(),a[n].m(r.parentNode,r))}for(;n<a.length;n+=1)a[n].d(1);a.length=i.length}},i:t,o:t,d(t){t&&c(n),t&&c(o),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(a,t),t&&c(r)}}}function D(t,e,n){let o=[];return m((async()=>{const t=await fetch("https://jsonplaceholder.typicode.com/posts/");n(0,o=await t.json())})),[o]}class G extends I{constructor(t){super(),S(this,t,D,V,i,{})}}function Z(e){let n,o,r,i,l,d=e[0].title+"",g=e[0].body+"";return{c(){n=h("h1"),o=p(d),r=u(),i=h("p"),l=p(g)},m(t,e){s(t,n,e),a(n,o),s(t,r,e),s(t,i,e),a(i,l)},p(t,[e]){1&e&&d!==(d=t[0].title+"")&&f(o,d),1&e&&g!==(g=t[0].body+"")&&f(l,g)},i:t,o:t,d(t){t&&c(n),t&&c(r),t&&c(i)}}}function J(t,e,n){let{params:o}=e,r=[];return m((async()=>{const t=await fetch("https://jsonplaceholder.typicode.com/posts/"+o.id);n(0,r=await t.json())})),t.$$set=t=>{"params"in t&&n(1,o=t.params)},[r,o]}class Q extends I{constructor(t){super(),S(this,t,J,Z,i,{params:1})}}function W(t){let e,n,r,i,a;var p=t[0];function l(t){return{props:{params:t[1]}}}return p&&(i=new p(l(t))),{c(){e=h("nav"),e.innerHTML='<a href="/">Home</a> \n  <a href="/blog">Blog</a>',n=u(),r=h("main"),i&&A(i.$$.fragment)},m(t,o){s(t,e,o),s(t,n,o),s(t,r,o),i&&j(i,r,null),a=!0},p(t,[e]){const n={};if(2&e&&(n.params=t[1]),p!==(p=t[0])){if(i){L={r:0,c:[],p:L};const t=i;T(t.$$.fragment,1,0,(()=>{P(t,1)})),L.r||o(L.c),L=L.p}p?(i=new p(l(t)),A(i.$$.fragment),O(i.$$.fragment,1),j(i,r,null)):i=null}else p&&i.$set(n)},i(t){a||(i&&O(i.$$.fragment,t),a=!0)},o(t){i&&T(i.$$.fragment,t),a=!1},d(t){t&&c(e),t&&c(n),t&&c(r),i&&P(i)}}}function X(t,e,n){let o,r;return q("/",(()=>n(0,o=F))),q("/blog",(()=>n(0,o=G))),q("/blog/:id",((t,e)=>{n(1,r=t.params),e()}),(()=>n(0,o=Q))),q.start(),[o,r]}return new class extends I{constructor(t){super(),S(this,t,X,W,i,{})}}({target:document.body,props:{name:"My Friends"}})}();
//# sourceMappingURL=bundle.js.map
