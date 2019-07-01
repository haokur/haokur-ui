/**
 * 动态设置 html fontSize 大小, 结合 rem 实现移动端不同屏幕的适配
 * 注意,使用
 */
declare const document: any;
declare const window: any;

interface FlexRemOptions {
    designWidth: number; // UI 设计基于的尺寸大小
    scale: number; // 配合 postcss-px2rem 的 remUnit 使用(两者配置成一样即可)
    needDpr: boolean; // 是否要做高清适配,默认为 true
}

export const FlexRem = {
    init(
        { designWidth, scale, needDpr }: FlexRemOptions = {
            designWidth: 750,
            scale: 100,
            needDpr: true,
        }
    ) {
        // 设置高清 dpr 支持
        if (needDpr) {
            var dpr = window.devicePixelRatio;
            var viewportMetaEl = document.querySelector(
                'meta[name="viewport"]'
            );
            if (!viewportMetaEl) {
                viewportMetaEl = document.createElement('meta');
                viewportMetaEl.setAttribute('name', 'viewport');
            }
            viewportMetaEl.setAttribute(
                'content',
                `width=device-width, initial-scale=${1 /
                    dpr},maximum-scale=${1 / dpr},user-scalable=no`
            );
        }

        // 设置根元素 fontSize
        var docEl = document.documentElement;
        var resizeEvt =
            'orientationchange' in window ? 'orientationchange' : 'resize';
        var recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = scale * (clientWidth / designWidth) + 'px';
        };

        if (!document.addEventListener) return;
        window.addEventListener(resizeEvt, recalc, false);
        document.addEventListener('DOMContentLoaded', recalc, false);
    },
};
