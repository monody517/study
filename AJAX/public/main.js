
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/3.html');
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    };
    request.onerror = () => {
        console.log('shibaile')
    };
    request.send();
}

getCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/style.css');
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }else{
                alert('shibaile')
            }
        }
    };
    request.send();
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/2.js');
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    };
    request.onerror = () => {
        console.log('shibaile')
    };
    request.send();
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml');
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }else{
                alert('shibaile')
            }
        }
    };
    request.send();
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/5.json');
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const object = JSON.parse(request.response)
                myName.textContent = object.name
                console.log(object)
            }else{
                alert('shibaile')
            }
        }
    };
    request.send();
}
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}.json`);
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                });
                n += 1
            }else{
                alert('shibaile')
            }
        }
    };
    request.send();
}


