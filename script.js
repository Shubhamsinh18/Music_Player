const audio = document.querySelector('audio');
const songNameDisplay = document.getElementById('songName');

//playlist
const songs = [
    { name: "Summer Vibes", url: "song1.mp3" },
    { name: "Lo-fi Dreams", url: "song2.mp3" },
    { name: "Midnight City", url: "song3.mp3" }
];

let currentIndex = 0;

//Load a song
function loadSong(index) {
    audio.src = songs[index].url;
    songNameDisplay.innerText = songs[index].name;
}

//Play/Pause toggle
function play_pause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

//Next/Prev Logic
function nextsong() {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    audio.play();
}

function prevsong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    audio.play();
}

// Initial load
loadSong(currentIndex);
