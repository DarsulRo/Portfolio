function smoothScroll(anchor){
    let element = document.getElementById(anchor)
    element.scrollIntoView({behavior: "smooth"})
}

let mepicture = document.getElementById('mepicture')
let random = Math.random()
random = Math.floor(random*100000)%13 + 1
mepicture.setAttribute('src','res/pictures/dorin'+random+'.png')


var Spos = [0,0,0,0,0]
let rowCount = document.querySelectorAll('#work .body .row').length

for(let i=1;i<=rowCount;i++){
    let slides = document.getElementById('slides'+i)
    slides.style.minWidth= `${slides.childElementCount}00%`
    setInterval(function(){
        slideRight(i)
    },15000)
}
function slideLeft(id){
    let slides = document.getElementById('slides'+id)
    if(Spos[id]<=0)Spos[id]=slides.childElementCount-1
    else Spos[id]--;
    slides.style.left = `${-Spos[id]*100}%`
}
function slideRight(id){
    let slides = document.getElementById('slides'+id)
    if(Spos[id]>=slides.childElementCount-1)Spos[id]=0
    else Spos[id]++;
    slides.style.left = `${-Spos[id]*100}%`
}