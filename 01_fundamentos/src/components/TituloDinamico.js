/**
 * Represents a custom dynamic title element.
 * @extends HTMLElement
 */
class TituloDinamico extends HTMLElement {
    /**
     * Constructor for the TituloDinamico class.
     */
    constructor() {
        super();

        /**
         * Shadow DOM for encapsulation.
         * @type {ShadowRoot}
         */
        const shadow = this.attachShadow({
            mode: "open",
        });

        /**
         * Root element of the dynamic title component.
         * @type {HTMLHeadingElement}
         */
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        /**
         * Style element for the dynamic title component.
         * @type {HTMLStyleElement}
         */
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: red;
            }
        `;

        // Append the component and style to the shadow DOM.
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

// Define the custom element.
customElements.define("titulo-dinamico", TituloDinamico);
