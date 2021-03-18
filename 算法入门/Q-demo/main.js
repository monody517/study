const divScreen = document.querySelector('#screen')
const btnCreat = document.querySelector('#creatNumber')
const btnCall = document.querySelector('#callNumber')
const spanNew = document.querySelector('#newNumber')
const spanQ = document.querySelector('#queue')

let n = 0
let queue = []

btnCreat.onclick = () => {
    n+=1
    queue.push.call(queue,n)
    spanNew.innerText = n
    spanQ.innerText = JSON.stringify(queue)
} 
btnCall.onclick = () => {
    if(queue.length === 0){
        return
    }
    const m = queue.shift.call(queue)
    divScreen.innerText = `请${m}号`
    spanQ.innerText = JSON.stringify(queue)
}