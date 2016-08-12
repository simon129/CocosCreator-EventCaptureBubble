cc.Class({
    extends: cc.Component,

    properties: {
        useCapture: false,
    },

    onLoad: function () {
        cc.log(this.node.name, cc.js.getClassName(this), 'useCapture:', this.useCapture);
        this.node.on('test', this.func, this, this.useCapture);
    },

    start: function () {
    },

    func: function (e) {
        // http://www.cocos.com/docs/creator/scripting/events.html
        // https://developer.mozilla.org/zh-TW/docs/Web/API/Event/eventPhase
        cc.log('bubbles:', e.bubbles,
            ', currentTarget:', e.currentTarget ? e.currentTarget.name : 'null',
            ', target:', e.target ? e.target.name : 'null',
            e);
    },
});