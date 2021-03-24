const request = new XMLHttpRequest()
request.open('GET','http://127.0.0.1:8080/friends.json')
request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200){
        console.log(request.response)
    }
}
request.send()