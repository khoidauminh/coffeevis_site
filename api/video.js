const VIDEO_PATHS = [
    "public/cvis-1.mp4",
    "public/cvis-2.mp4",
    "public/cvis-3.mp4",
    "public/cvis-4.mp4",
    "public/cvis-5.mp4",
    "public/cvis-6.mp4",
    "public/cvis-7.mp4",
    "public/cvis-8.mp4",
    "public/cvis-9.mp4",
    "public/cvis-10.mp4",
    "public/cvis-11.mp4",
    "public/cvis-12.mp4",
];

let VIDEO_INDEX = 0;

export function getId(index) {
    return "cvis-video-" + index;
}

export function setStyle(index) {
    return "z-index: " + toString(index) + "; position: absolute";
}

export function Video(index, display) {
    return `<video
            id=${getId(index)}
            autoPlay
            loop
            muted
            style="display: ${display}"
        >
            <source src=${VIDEO_PATHS[index]} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    `;
}

export function AllVideos() {
    let array = [];

    array.push(Video(0, "block"));

    for (let i = 1; i < VIDEO_PATHS.length; i++) {
        array.push(Video(i, "none"));
    }

    return array.join("");
}

export function nextVideo() {
    document.getElementById(getId(VIDEO_INDEX)).style.display = "none";
    VIDEO_INDEX = (VIDEO_INDEX + 1) % VIDEO_PATHS.length;
    document.getElementById(getId(VIDEO_INDEX)).style.display = "block";
}
