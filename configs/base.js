const Servers = {
    root: "https://www.base.com/",
    userroot: "https://www.base.com/",
    user: {
        login: 'login',
        loginOut: 'loginOut'
    },
    traderoot: "https://www.base.com/",
    tarde: {
        home: 'home'
    },
    getUrl(apiStr) {
        let str = apiStr.split('/');
        let root = this[str[0] + 'root'] || this.root;
        let api = this[str[0]][str[1]];
        return root + api;
    }
}

export default Servers