import IScroll from 'iscroll';
const vscroll = {
    bind(el, binding, vnode) {
        // 阻止touchmove默认事件
        el.addEventListener('touchmove', event => {
            event.preventDefault();
        })
        vscroll.scroller = new IScroll(el, { probeType: 1, mouseWheel: true, click: true });
        vscroll.scroller.on('scroll', function() {
            let { y, maxScrollY } = this;
            if (!this._loadMore && Math.abs(y) - Math.abs(maxScrollY) > 100) {
                this._loadMore = true;
                this.maxScrollY = -Math.abs(this.maxScrollY) - 34;

            }
        });
        vscroll.scroller.on('scrollEnd', function() {
            if (this._loadMore) {
                let loadFun = vnode.context.onLoadMore;
                this._loadMore = false;
                loadFun();
            }
        });
    },
    unbind(el) {
        vscroll.scroller = null;
        el.removeEventListener('touchmove', event => {
            event.preventDefault();
        });
    },
    componentUpdated() {
        vscroll.scroller.refresh();
    },
    scroller: null,
}

export default vscroll;