/**
 * compile实现步骤
 * 1.解析模板指令,并替换模板数据,初始化视图.
 * 2.将模板指令对应的节点,绑定对应的更新函数.初始化相应的订阅器.
 */

/**
 * 为了解析模板,首先要获取dom.
 * 对含有dom
 */


function nodeToFragment(el) {
    var fragment = document.createDocumentFragment();
    var child = el.firstChild;
    while (child) {
        // 将dom元素移入fragment中
        fragment.append(child);
        child = el.firstChild;
    }
    return fragment;
}