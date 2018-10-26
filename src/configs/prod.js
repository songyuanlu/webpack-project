import baseServer from "@configs/base.js";
const Servers = Object.assign(baseServer, {
    root: "https://www.prod.com/",
    userroot: "https://www.prod.com/",
});

export default {
    install(Vue) {
        if (!Vue.$servers) {
            Vue.$servers = Servers;
        }
        Vue.mixin({
            created() {
                this.$servers = Vue.$servers;
            }
        })
    }
}