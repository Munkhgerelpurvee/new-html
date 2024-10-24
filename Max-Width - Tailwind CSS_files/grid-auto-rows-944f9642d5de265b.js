(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3117],{10293:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/grid-auto-rows",function(){return a(26745)}])},26745:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return k}});var t=a(85893),e=a(11151),o=a(72788),p=a(36336),l=a(36203),i=a(80073),c=a(46804);let r=o.L,u=p.X_;function d(n){let s=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr",a:"a"},(0,e.ah)(),n.components),{Heading:a,Editor:o}=s;return o||h("Editor",!0),a||h("Heading",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,t.jsx)(a,{level:3,id:"sizing-implicitly-created-grid-rows",children:"Sizing implicitly-created grid rows"}),"\n",(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.code,{children:"auto-rows-*"})," utilities to control the size of implicitly-created grid rows."]}),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid grid-flow-row <span class="code-highlight bg-code-highlight">auto-rows-max</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>02<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,t.jsx)(c.k,{defaultClass:"grid grid-flow-row auto-rows-max",featuredClass:"auto-rows-min"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,t.jsx)(i.p,{defaultClass:"grid grid-flow-row auto-rows-max",featuredClass:"auto-rows-min"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,t.jsx)(a,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,t.jsxs)(s.p,{children:["By default, Tailwind includes four general purpose ",(0,t.jsx)(s.code,{children:"grid-auto-rows"})," utilities. You can customize these values by editing ",(0,t.jsx)(s.code,{children:"theme.gridAutoRows"})," or ",(0,t.jsx)(s.code,{children:"theme.extend.gridAutoRows"})," in your ",(0,t.jsx)(s.code,{children:"tailwind.config.js"})," file."]}),"\n",(0,t.jsx)(o,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">gridAutoRows</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'2fr\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'minmax(0, 2fr)\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsxs)(s.p,{children:["Learn more about customizing the default theme in the ",(0,t.jsx)(s.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,t.jsx)(a,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,t.jsx)(l.k,{property:"grid-auto-rows",defaultClass:"grid grid-flow-row",featuredClass:"auto-rows-[minmax(0,_2fr)]"})]})}function g(n={}){return(0,t.jsx)(u,Object.assign({},n,{children:(0,t.jsx)(d,n)}))}var k=g;function h(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}g.layoutProps={Layout:r,classes:{utilities:{".auto-rows-auto":{"grid-auto-rows":"auto"},".auto-rows-min":{"grid-auto-rows":"min-content"},".auto-rows-max":{"grid-auto-rows":"max-content"},".auto-rows-fr":{"grid-auto-rows":"minmax(0, 1fr)"}}},meta:{title:"Grid Auto Rows",description:"Utilities for controlling the size of implicitly-created grid rows."},slug:"grid-auto-rows",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Sizing implicitly-created grid rows",slug:"sizing-implicitly-created-grid-rows",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},11151:function(n,s,a){"use strict";a.d(s,{Zo:function(){return l},ah:function(){return o}});var t=a(67294);let e=t.createContext({});function o(n){let s=t.useContext(e);return t.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let p={};function l({components:n,children:s,disableParentContext:a}){let l;return l=a?"function"==typeof n?n({}):n||p:o(n),t.createElement(e.Provider,{value:l},s)}}},function(n){n.O(0,[3430,5850,9495,224,7308,7240,9774,2888,179],function(){return n(n.s=10293)}),_N_E=n.O()}]);