import { AllVideos, nextVideo } from "../api/video.js";

export function homePage() {
    const handleKeyPress = (e) => {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
            nextVideo();
        }
    };

    window.addEventListener("keydown", handleKeyPress);

    return `<div
        class="page"
    >
        <main class="main">
            <div class="row">
                <div class="column">
                    <div class="column-left">
                        <div class="video-container">
                            ${AllVideos()}
                        </div>
                        <p>Press Space</p>
                    </div>
                </div>
                <div class="column">
                    <div class="column-right">
                        <h1>A Quirky Music Visualizer</h1>
                        <br></br>
                        <br></br>

                        <div class="box">
                            <a
                                class="download-button"
                                href="https://github.com/khoidauminh/coffeevis_rs?tab=readme-ov-file#installation"
                            >
                                <b>Install (version 0.5.1)</b>
                                <img
                                    src="../assets/linux_logo_icon_181333.png"
                                    alt="Linux logo"
                                    width=40
                                    height=40
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer class="footer">
            <p>© 2021 - 2025, Cas Pascal</p>
        </footer>
    </div>`;
}
