console.log("Welcome to Spotify");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Selfish Love - Selena Gomez", filePath: "songs/1.mp3", coversPath: "covers/1.jpg"},
    {songName: "Beautiful Mistake - Maroon 5", filePath: "songs/2.mp3", coversPath: "covers/2.jpg"},
    {songName: "Lean on me - Cheat Codes", filePath: "songs/3.mp3", coversPath: "covers/3.jpg"},
    {songName: "Baila Conmigo - Selena Gomez and Rauw", filePath: "songs/4.mp3", coversPath: "covers/4.jpg"},
    {songName: " J Balvin and 2 more (😁)", filePath: "songs/5.mp3", coversPath: "covers/5.jpg"},
    {songName: "Leave Before you love me", filePath: "songs/6.mp3", coversPath: "covers/6.jpg"},
    {songName: "Our Song - Anne Marie", filePath: "songs/7.mp3", coversPath: "covers/7.jpg"},
    {songName: "Wrap me in plastic - MOMOLAND", filePath: "songs/8.mp3", coversPath: "covers/8.jpg"},
    {songName: "Spaceman - Nick Jonas", filePath: "songs/9.mp3", coversPath: "covers/9.jpg"},
    {songName: "Na Jaan - Salam-e-Ishq", filePath: "songs/10.mp3", coversPath: "covers/10.jpg"},


]


    songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coversPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
    
    })

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
}

else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
}
})

// Listen to Events this is audio event
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})

}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        console.log(e.target);
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >=9){
        songIndex = 0;
    }

    else{
        songIndex += 1;
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <=0){
        songIndex = 0
    }

    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.add('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})















 