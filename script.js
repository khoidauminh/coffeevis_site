import { homePage } from "./pages/home.js";
import { featuresPage } from "./pages/features.js";

export function render(html) {
    document.getElementById("content").innerHTML = html;
}

document
    .getElementById("homebutton")
    .addEventListener("click", () => render(homePage()), false);

document
    .getElementById("featuresbutton")
    .addEventListener("click", () => render(featuresPage()), false);

render(homePage());
