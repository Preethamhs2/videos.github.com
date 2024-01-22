const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active')
    })
}

if (close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active')
    })
}


    
var videoplayer = document.getElementById("videoplayer");
var myvideo = document.getElementById("myvideo");

function stopbtn(){
    videoplayer.style.display = "none";
}
function playVideo(file){
myvideo.src = file;
videoplayer.style.display = "block";
}
