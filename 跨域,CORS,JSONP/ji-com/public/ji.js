function jsonp(url){
    return new Promise((resolve,reject)=>{
        const random = 'jiJSONPCallbackName' + Math.random()
        window[random] = (data) => {
            resolve(data)
        }
        const script = document.createElement('script')
        script.src = `${url}?callback=${random}`
        script.onload = () => {
            script.remove()
        }
        script.onerror = () => {
            reject()
        }
        document.body.append(script)    
    })
}
jsonp('http://127.0.0.1:8888/friends.js')
.then((data) => {
    console.log(data)
})



