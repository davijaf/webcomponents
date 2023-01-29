class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        // base do component <h1>Davi José</h1>
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = this.getAttribute("titulo");
        //estilizar o component
        const style = document.createElement("style");
        style.textContent = `
            h1{
                margin: 0;
                padding: 10px;
                box-sizing: border-box;
                font-family: 'Segoe UI', sans-serif;
                margin-left: auto;
                margin-right: auto;
                width: 720px;
            }
        `
        // enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinamico);