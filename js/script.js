
const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
let progress=document.getElementById("progress");
let total_duration=document.getElementById("duration");
let current_time=document.getElementById("current_time");
const progressDiv=document.getElementById("progressDiv");

const songs = [
  {
    name: "prettySavage",
    title: " Pretty Savage",
    artist: "Blackpink",
  },
  {
    name: "believer",
    title: " Believer",
    artist: "Imagine dragons",
  },
  {
    name: "photograph",
    title: " Photograph",
    artist: "Ed sheeran",
  },
  {
    name: "permissionToDance",
    title: " Permission To Dance",
    artist: "BTS",
  },
  {
    name: "borders",
    title: "Borders",
    artist: "M.I.A",
  },
  {
    name: "crooked",
    title: "Crooked",
    artist: "g dragon",
  },
];
let isPlaying = false;
const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};
const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};
play.addEventListener("click", () => {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

// changing songs
const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "audio/" + songs.name + ".mp3";
  img.src = "images/" + songs.name + ".jpg";
};
i = 0;
const nextSong = () => {
  i = (i + 1) % songs.length;
  loadSong(songs[i]);
  playMusic();
};
const previousSong = () => {
  i = (i - 1 + songs.length) % songs.length;
  loadSong(songs[i]);
  playMusic();
};
// progress work
music.addEventListener("timeupdate",(event)=>{
  const {currentTime,duration}=event.target;
  let progressTime=(currentTime/duration)*100;
  progress.style.width= `${progressTime}%`;
// music duration update

let min_duration=Math.floor(duration / 60);
let sec_duration=Math.floor(duration % 60);
let tot_duration=`${min_duration}:${sec_duration}`;
if(duration){
  total_duration.textContent=`${tot_duration}`;
}
//current time duration
let min_currentTime=Math.floor(currentTime / 60);
let sec_currentTime=Math.floor(currentTime % 60);

if(sec_currentTime<10){
  sec_currentTime=`0${sec_currentTime}`;
 

}
let tot_currentTime=`${min_currentTime}:${sec_currentTime}`;
  current_time.textContent=`${tot_currentTime}`;

});

progressDiv.addEventListener('click',(event)=>{
  console.log(event);
  const {duration}=music;
  
  let move_progress=(event.offsetX/event.target.clientWidth)*duration;
  console.log(duration);
  console.log(move_progress);

  music.currentTime=move_progress
});

music.addEventListener('ended',nextSong);
next.addEventListener("click", nextSong);
previous.addEventListener("click", previousSong);


