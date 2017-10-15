<template>
    <div class="list-wrap" v-iscroll>
        <div class="list-group">
            <div class="list-group-item list-item-success" v-for="(item,index) in items" :key="index">
                item:{{item}}
            </div>
            <div class="load-more">
                <button class="btn btn-block">加载更多</button>
            </div>
        </div>
    </div>
</template>

<script>
import IScroll from 'iscroll';

function createList(len) {
    let list = [];
    while (--len >= 0) {
        list.push(len);
    }
    return list;
}

let loadMore = false, scroller;
export default {
    data() {
        return {
            items: createList(20)
        }
    },
    directives: {
        iscroll: {
            inserted(el, binding, vnode) {
                let items = vnode.context.items;
                // 阻止touchmove默认事件
                el.addEventListener('touchmove', event => {
                    event.preventDefault();
                })
                scroller = new IScroll(el, { probeType: 1 });
                console.log(scroller);
                scroller.on('scroll', function() {
                    let { y, maxScrollY } = this;
                    if (Math.abs(y) - Math.abs(maxScrollY) >= 100&&loadMore===false) {
                        console.log('load-more', this);
                        loadMore = true;
                        this._maxScrollY = this.maxScrollY;
                        this.maxScrollY = -(Math.abs(maxScrollY) +34);
                    }
                });

                scroller.on('scrollEnd', function() {
                    console.log('scrollEnd')
                    if (loadMore) {
                        console.log('loadMore');
                        setTimeout(() => {
                            items.push(...createList(10));
                            loadMore = false;
                        }, 2000)
                        // let maxScrollY = this.maxScrollY;

                        // this.scrollTo(0, -(Math.abs(maxScrollY) + 34));
                        // loadMore = false;
                    }
                });
            },
            componentUpdated() {
                console.log('updated---->');
                scroller.refresh();
                console.log(scroller);
            }

        }
    }
}
</script>

<style scoped>
.list-wrap {
    position: relative;
    left: 0;
    bottom: 0;
    overflow: hidden;
    height: 500px;
    background-color: #ccc;
}

.load-more {
    position: absolute;
    left: 0;
    bottom: -34px;
    width: 100%;
}





/* .scroller-wrap{
    left: 0;
    top: 0;
    position: absolute;
} */
</style>
