



```
实现思路

1.通过Object.definePrototype()劫持监听data属性变化
2.通过订阅器(dep)通知到订阅者(wather).
3.订阅者通过自身函数(el.innerHtml = vlue),改变dom.

```