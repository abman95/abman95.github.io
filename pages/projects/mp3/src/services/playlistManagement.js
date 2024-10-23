import { state } from "./state.js";
import {
    loadAndPlayFile,
    updateFileList,
    updateTrackInfo,
    dialogUpdater,
    updateAutoPlayButton,
    updateRandomPlayButton,
    updatePlayPauseButton,
} from "../components/uiUpdates.js";
import { playNextSong } from "../components/audioControls.js";

export function playNewSong(index, shouldPushToPrevious = true) {
    state.audio.pause();
    shouldPushToPrevious && state.previousIndices.push(state.currentIndex);
    if (!shouldPushToPrevious)
        state.indexBeforePreviousButtonArrayPop = state.currentIndex;
    state.currentIndex = index;
    loadAndPlayFile();
    dialogUpdater(state.playlist[index]);
}

export function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * state.folderTrackCount);
    playNewSong(randomIndex);
}

export function toggleAutoPlay() {
    state.isAutoPlayEnabled = !state.isAutoPlayEnabled;
    updateAutoPlayButton();
    state.audio.paused &&
        state.audio.duration === state.audio.currentTime &&
        handleSongEnd();
}

export function toggleRandomPlay() {
    state.isRandomEnabled = !state.isRandomEnabled;
    updateRandomPlayButton();
}

export function handleFileInputChange(event) {
    if (event.target.files.length < 1) return;

    state.playlist = Array.from(event.target.files);
    state.folderTrackCount = state.playlist.length;
    state.currentIndex = 0;
    state.previousIndices = [];
    loadAndPlayFile(false);
    updateFileList();
    updateTrackInfo();
    dialogUpdater(state.playlist[state.currentIndex]);
}

export function handleSongEnd() {
    if (state.isAutoPlayEnabled) {
        if (state.isRandomEnabled) {
            playRandomSong();
        } else if (state.currentIndex < state.folderTrackCount - 1) {
            playNextSong();
        }
    } else {
        updatePlayPauseButton();
    }
}

const sampleFiles = [
    "Adrián Berenguer - Discipline.mp3",
    "Analaska - A New Beginning.mp3",
    "Ardie Son - Wayfarer.mp3",
    "Aves - Sparks.mp3",
    "BalloonPlanet - Face the Future.mp3",
    "Brianna Tam - Into the Storm.mp3",
    "Carmel Quartet - Air on the G String.mp3",
    "Cosmonkey - Bubbles Drop.mp3",
    "Cosmonkey - Hotkeys.mp3",
    "Evgeny Bardyuzha - Love Drunk.mp3",
    "Flint - Beautiful Chaos.mp3",
    "Jessie Reid - Time Goes By.mp3",
    "Letra - Elevate.mp3",
    "Naama Zafran - Earth.mp3",
    "Richard Farrell - Soul Swingin.mp3",
    "Romeo - Uncharted Lands.mp3",
    "Steven Beddall - Haymaker.mp3",
    "Wheres LuLu - God Damn.mp3",
    "Yehezkel Raz - Ballerino.mp3",
    "ZISO - Rage Money Power.mp3",
];

async function loadSampleFiles() {
    const files = await Promise.all(
        sampleFiles.map(async (filename) => {
            const response = await fetch(`./assets/samplemp3/${filename}`);
            const blob = await response.blob();
            return new File([blob], filename, { type: "audio/mp3" });
        }),
    );

    const event = {
        target: {
            files: files,
        },
    };

    handleFileInputChange(event);
}

document.addEventListener("DOMContentLoaded", () => {
    loadSampleFiles();
});
