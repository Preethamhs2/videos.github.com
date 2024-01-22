var videoplayer = document.getElementById("videoplayer");
var myvideo = document.getElementById("myvideo");

function stopbtn(){
    videoplayer.style.display = "none";

}
function playVideo(file){
myvideo.src = file;
videoplayer.style.display = "block";
}