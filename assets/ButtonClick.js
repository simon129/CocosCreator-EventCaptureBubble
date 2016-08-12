
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function () {
        cc.log(this.node.name, cc.js.getClassName(this));
    },

    click: function (e) {
        cc.log('click');
    },
});