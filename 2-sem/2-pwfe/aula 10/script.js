import data from "./data.json" assert { type: 'json' };

const audio_player = document.querySelector("#audio-player");

const play_button = document.querySelector("#play-button");
const next_button = document.querySelector("#next-button");
const prev_button = document.querySelector("#prev-button");

const songs_container = document.querySelector("#songs-container");
const song_elements = document.querySelectorAll(".song");
