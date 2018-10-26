import baseServer from "@configs/base.js";
const Servers = Object.assign(baseServer, {
    root: "https://www.dev.com/",
    userroot: "https://www.dev.com/",
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