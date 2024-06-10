import data from "./data.json" assert { type: 'json' };

const audio_player = document.querySelector("#audio-player");

const play_button = document.querySelector("#play-button");
const next_button = document.querySelector("#next-button");
const prev_button = document.querySelector("#prev-button");

const songs_container = document.querySelector("#songs-container");
const song_elements = document.querySelectorAll(".song");

const playlists_container = document.querySelector("#albuns");
const playlist_elements = document.querySelectorAll(".card");

const playlists = data;

let current_song = 0;
let current_playlist = 0;


const load_song = () => {
    const song = playlists[current_playlist].musics[current_song];

    const cover_element = document.querySelector("#cover");
    const title_element = document.querySelector("#title");

    audio_player.src = song.src;
    cover_element.src = song.cover;
    title_element.textContent = song.name;
}

const play_music = () => {
    if (audio_player.paused) {
        audio_player.play();
        play_button.firstElementChild.src = "./assets/icons/pause.png";
    } else {
        audio_player.pause();
        play_button.firstElementChild.src = "./assets/icons/play-buttton.png";
    }
}

const next_music = () => {
    current_song = (current_song + 1) % playlists[current_playlist].musics.length;
    load_song();
}

const prev_music = () => {
    current_song = (current_song - 1 + playlists[current_playlist].musics.length) % playlists[current_playlist].musics.length;
    load_song();
}

const render_playlists = () => {
    const playlist_cards = Array.from(playlists_container.children);
    
    playlist_cards.forEach((card, i) => {
        card.querySelector(".title").textContent = playlists[i].name;
        card.querySelector(".author").textContent = playlists[i].author;
        card.querySelector(".cover").src = playlists[i].cover;
    });
}

const render_songs = () => {
    const songs = Array.from(songs_container.children);
    const playlist = playlists[current_playlist];

    songs.forEach((song, i) => {
        song.querySelector(".title").textContent = playlist.musics[i].name;
        song.querySelector(".author").textContent = playlist.musics[i].author;
        song.querySelector(".cover").src = playlist.musics[i].cover;
    })
}

play_button.addEventListener("click", play_music);
next_button.addEventListener("click", next_music);
prev_button.addEventListener("click", prev_music);

song_elements.forEach((song, i) => {
    song.addEventListener("click", () => {
        current_song = i
        load_song();
        render_songs();
    });
});

playlist_elements.forEach((playlist, i) => {
    playlist.addEventListener("click", () => {
        current_playlist = i
        current_song = 0;
        load_song();
        render_songs();
    });
});

window.onload = () => {
    render_playlists();
    render_songs();
    load_song();
};


