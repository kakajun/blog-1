import{g as n,f as s,G as a}from"./common-bec3f312.js";const t='{"title":"立即执行函数","frontmatter":{"date":"2022-02-01","title":"立即执行函数","tags":["js"],"describe":"概念"},"headers":[{"level":3,"title":"1.什么是立即执行函数（IIFE）","slug":"_1-什么是立即执行函数（iife）"},{"level":3,"title":"使用立即执行函数的好处","slug":"使用立即执行函数的好处"}],"relativePath":"docs/iife.md","lastUpdated":1644240150649.7888}';var p={};const o=a('<h3 id="_1-什么是立即执行函数（iife）"><a class="header-anchor" href="#_1-什么是立即执行函数（iife）" aria-hidden="true">#</a> 1.什么是立即执行函数（IIFE）</h3><p>在了解立即执行函数之前先明确一下函数声明、函数表达式及匿名函数的形式，如下图： 函数声明</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>函数表达式</p><div class="language-js"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">test</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>匿名函数</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="使用立即执行函数的好处"><a class="header-anchor" href="#使用立即执行函数的好处" aria-hidden="true">#</a> 使用立即执行函数的好处</h3><p>通过定义一个匿名函数，创建了一个新的函数作用域，相当于创建了一个“私有”的命名空间，该命名空间的变量和方法，不会破坏污染全局的命名空间。此时若是想访问全局对象，将全局对象以参数形式传进去即可，如jQuery代码结构:</p><div class="language-js"><pre><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">window<span class="token punctuation">,</span><span class="token keyword">undefined</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token comment">//jquery code</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>\n</code></pre></div><p>从图中可以看出，除了使用()运算符之外，！，+，-，=等运算符都能起到立即执行的作用。这些运算符的作用就是将匿名函数或函数声明转换为函数表达式，如下图所示，函数体是函数声明的形式，使用运算符将其转换为函数表达式之后就可达到立即执行效果：</p><div class="language-js"><pre><code><span class="token operator">!</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">window<span class="token punctuation">,</span><span class="token keyword">undefined</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token comment">//jquery code</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>\n</code></pre></div>',12);p.render=function(a,t,p,e,c,u){return s(),n("div",null,[o])};export default p;export{t as __pageData};
