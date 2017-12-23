/**
 * ActionTitle.js
 * 让网站标题动起来
 * Author: weilao
 * IE 9 +
 * TODO 兼容 IE 6 7 8
 */
;
(function ($, _window) {
    var DEFAULT_OPTS = {
        // 每秒的帧数
        fps: 2,
        // 固定的前缀字符串
        prefix: '',
        // 标题文本
        text: ''
    };
    // 原本的 Title， 用于 clear 时恢复旧标题。
    var originTitle = '',
        interval;

    var ActionTitle = {
        /**
         * 显示动态标题
         * @param opts {Object|String} 结构同 DEFAULT_OPTS
         */
        show: function (opts) {
            var frames, step, text, prefix;

            // 如果有 originTitle 说明已经 show 过了，这时，要先把上一次的动画
            // 清除掉，否则 document.title 获取会出错。
            if (originTitle) this.clear();
            originTitle = document.title;

            opts = typeof opts == "string" ? {text: opts} : opts || {};
            opts = defaults(opts, DEFAULT_OPTS);

            text = opts.text;
            prefix = opts.prefix;

            // 获得动画的每一帧
            frames = text.split('').map(function (ch, i) {
                return prefix + text.slice(i);
            });

            step = 0;
            interval = setInterval(function () {
                // 播到最后一帧时，重新返回第一帧
                if (step > frames.length - 1) step = 0;
                document.title = frames[step++];
            }, 1000 / opts.fps);
        },

        /**
         * 清除动态标题
         */
        clear: function () {
            clearInterval(interval);
            if (originTitle) document.title = originTitle;
        }
    };

    /**
     * 填充默认值
     * 这个方法用来避免对 jQuery.extend 方法的依赖，从而做到不依赖 jQuery。
     * @param obj
     * @returns {Object}
     */
    function defaults(obj) {
        [].slice.call(arguments, 1).forEach(function (source) {
            if (source) {
                for (var prop in source) {
                    if (obj[prop] === void 0) obj[prop] = source[prop];
                }
            }
        });
        return obj;
    }

    _window.ActionTitle = ActionTitle;
    $ && ($.ActionTitle = ActionTitle);
})($, window);