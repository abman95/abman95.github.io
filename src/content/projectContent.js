//src\content\projectContent.js
export const PROJECT_HEADERS = {
    mp3: "MP3 Player",
    typing: "Typing Speed App",
    toDo: "To Do App",
    timer: "Timer",
    clock: "Clock",
    keyGen: "Key Generator",
};

export function getProjectHeader(className) {
    switch (className) {
        case "MP3 Player":
            return "mp3";
        case "Typing Speed App":
            return "typing";
        case "To Do App":
            return "toDo";
        case "Timer":
            return "timer";
        case "Clock":
            return "clock";
        case "Key Generator":
            return "keyGen";
        default:
            return "";
    }
}

export const projectPages = {
    "mp3Index.html": "mp3",
    "typingIndex.html": "typing",
    "toDoIndex.html": "toDo",
    "timerIndex.html": "timer",
    "clockIndex.html": "clock",
    "keyGenIndex.html": "keyGen",
};
