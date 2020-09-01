import { palette } from "./colorPallete"

export class TitleBar {
    constructor() {

    }
    render(){
        const divTitle = document.createElement("div")
        const h2 = document.createElement("h2")
        divTitle.append(this.styleText(h2))
        return divTitle

    }
    styleText(h2 : HTMLHeadingElement){
        h2.innerText = "Minhas Listas de Compras"
        h2.style.color = palette.defaultTextColor
        h2.style.fontFamily =  "Montserrat"
        h2.style.fontSize = "22px"
        h2.style.textShadow = "0px 0px 4px rgba(0, 0, 0, 0.25)"
        return h2;
    }
}