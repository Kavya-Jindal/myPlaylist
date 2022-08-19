
const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

const songs = [
  {
    name: "prettySavage",
    title: " Pretty Savage",
    artist: "blackpink",
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
next.addEventListener("click", nextSong);
previous.addEventListener("click", previousSong);
