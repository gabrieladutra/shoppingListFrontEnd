import { palette } from "./colorPallete"
import { MainMenu } from "./MainMenu"

 export class WebApp extends HTMLElement {
    constructor() {
        super()
        this.style.width = "100%"
        this.style.height = "100%"
        this.style.backgroundColor = palette.defautBackground
        this.append(new MainMenu)
    }
}
customElements.define('web-app', WebApp)