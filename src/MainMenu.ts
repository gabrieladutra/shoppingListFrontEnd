import { TitleBar } from "./TitleBar"

export class MainMenu extends HTMLElement {
    constructor() {
        super()

        const title  = new TitleBar
        this.append(title.render())
    }
}
customElements.define('main-menu', MainMenu)