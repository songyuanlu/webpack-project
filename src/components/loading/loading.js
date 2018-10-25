import Vue from "vue";
import loading from "./loading.vue";

const vueLoading = Vue.extend(loading);
const ComLoading = new vueLoading({
    el: document.createElement('div')
});
ComLoading.show = false;

const $loading = {
    amount: 0,
    show(options = {}) {
        if (ComLoading.show === 0) {
            ComLoading.msg = options.msg;
            return;
        }
        ComLoading.show = true;
        ComLoading.msg = options.msg;
        document.body.appendChild(ComLoading.$el);
    },
    hide() {
        ComLoading.show = false;
        this.amount = 0;
    },
    add() {
        this.amount++;
    },
    minus() {
        this.amount--;
    }
}

export default {
    install() {
        if (!Vue.$loading) {
            Vue.$loading = $loading;
        }
        Vue.mixin({
            created() {
                this.$loading = Vue.$loading;
            }
        })
    }
}