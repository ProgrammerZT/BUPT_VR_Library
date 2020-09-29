//toggle Love
const love=$('#love')
const count=$('count')
let Loved=false
const xhr=new XMLHttpRequest()


//getLove @will be replacedBy $.get()
function getLoveCount() {
    xhr.onreadystatechange=function () {
        if(xhr.readyState===4){
            count.innerHTML=xhr.responseText
        }
    }
    xhr.open('GET','url')
    xhr.send()
}


// getLoveCount()

//sendLove  @will be replacedBy $.post()
function sendLoveCount(countNum){
    xhr.onreadystatechange=function () {
        if(xhr.readyState===4){
            count.innerHTML=xhr.responseText
        }
    }
    xhr.open('POST','url')
    xhr.send('count='+countNum)
}


love.click=(() =>{
    if(!Loved){
        count.text(parseInt(count.innerHTML)+1)
        Loved=true
        sendLoveCount(count.text())
    }
    else {
        count.text(parseInt(count.innerHTML)-1)
        Loved=false
        sendLoveCount(count.text())
    }
})