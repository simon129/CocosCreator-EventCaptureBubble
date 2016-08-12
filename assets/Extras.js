/*

http://javascript.info/tutorial/bubbling-and-capturing
http://blog.hellojcc.tw/2015/11/05/dom-element-event-flow/

發送事件給parent的方法
        var event = new cc.Event.EventCustom('test', true);
        event.setUserData({ msg: 'ok' });
        this.node.dispatchEvent(event);

capture phase ?

touch end 只會觸發兩層 ?
        touchend 放在按鈕前面會不會被觸發
                會

用emit 會被on (using capture) 攔截到嗎? 



*/

cc.Class({
        extends: cc.Component,

        properties: {
        },

        onLoad: function () {

                // http://cocos.com/docs/creator/api/modules/js.html
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
                // https://github.com/JamesMGreene/Function.name

                var clickEventHandler = new cc.Component.EventHandler();
                clickEventHandler.target = this.node;
                clickEventHandler.component = 'Extras';
                clickEventHandler.handler = 'closeBtn_Clicked';

                addListener(this.closeBtn, this, this.closeBtn_Clicked, this.node);
                addListener(this.closeBtn, this, this.closeBtn_Clicked);
        },

        start: function () {
        },

        addListener: function (btn, classInstance, method, node) {

                var clickEventHandler = new cc.Component.EventHandler();

                clickEventHandler.target = node || classInstance.node;
                clickEventHandler.component = cc.js.getClassName(classInstance);
                clickEventHandler.handler = method.name;

                btn.clickEvents.push(clickEventHandler);
        },
});