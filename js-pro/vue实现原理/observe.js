var Book = {};
var name = '';
Object.defineProperty(Book, 'name', {
    set: function (value) {
        name = value;
    },
    get: function () {
        return name;
    }
})

function observe(data) {
    // 容错
    if (!data || typeof data !== 'object') {
        return
    }

    // 便利属性
    Object.keys(data).forEach(function (key) {
        defineReactive(data, key, data[key]);
    })

}

function defineReactive(data, key, val) {
    // 创建订阅器实例
    var dep = new Dep();
    // 监听子属性
    observe(val);
    Object.defineProperty(data, key, {
        enumerable: true, // 可枚举
        configurable: false, // 不能再define
        get: function () {
            if ('是否需要添加订阅者') {
                dep.addSub(watcher); // 在这里添加一个订阅者
            }
            return val;
        },
        set: function (newVal) {
            if (val === newVal) {
                return
            }
            console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal);
            val = newVal;

            // 通知订阅者
            dep.notify();
        }
    });
}

function Dep() {
    this.subs = [];
}

Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub);
    },
    notify: function (sub) {
        this.subs.forEach(function (sub) {
            sub.update();
        });
    }
}

/**
 * 从代码上看，我们将订阅器Dep添加一个订阅者设计在getter里面，
 * 这是为了让Watcher初始化进行触发，因此需要判断是否要添加订阅者，
 * 至于具体设计方案，下文会详细说明的。在setter函数里面，如果数据变化，
 * 就会去通知所有订阅者，订阅者们就会去执行对应的更新的函数。
 * 到此为止，一个比较完整Observer已经实现了，接下来我们开始设计Watcher。
 */