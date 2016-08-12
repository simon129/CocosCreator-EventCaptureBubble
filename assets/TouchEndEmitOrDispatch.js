cc.Class({
    extends: cc.Component,

    properties: {
        useDispatch: false,
    },

    onLoad: function () {
        cc.log(this.node.name, cc.js.getClassName(this), 'useDispatch:', this.useDispatch);
    },

    start: function () {
        var data = { msg: 'ok' };

        this.node.on(cc.Node.EventType.TOUCH_END, _ => {
            if (this.useDispatch) {
                var event = new cc.Event.EventCustom('test', true);
                event.setUserData(data);
                this.node.dispatchEvent(event);
            } else {
                this.node.emit('test', data);
            }
        });
    },
});