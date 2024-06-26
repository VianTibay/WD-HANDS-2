let vid = document.getElementById("bini-audio");

function PlayVideo(){
    vid.play();

}
function PauseVideo(){
    vid.pause();
}

function enableLoop(){
vid.loop = true;
vid.onload();
} 

function disableLoop(){
  vid.loop = false;
  vid.onload();  
}