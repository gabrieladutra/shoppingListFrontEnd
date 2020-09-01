import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter"
import { WebApp } from "./WebApp";

document.addEventListener("DOMContentLoaded", () => {
    // Startup
    document.body.append(new WebApp)
})

