const Servers = {

}
if(process.env.NODE_ENV  === 'dev'){
    Servers.domain = 'http://127.0.0.1:8080/'
}else{
    Servers.domain = 'http://badiu.com/'
}

export default Servers