/**
 * Represents a custom card news element.
 * @extends HTMLElement
 */
class Cardnews extends HTMLElement {
    /**
     * Constructor for the Cardnews class.
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

        // Append the built component and styles to the shadow DOM.
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    /**
     * Builds the card news component.
     * @returns {HTMLDivElement} The root element of the component.
     */
    build() {
        /**
         * Root element of the card news component.
         * @type {HTMLDivElement}
         */
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        // Create left side of the card.
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        // Create author element.
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        // Create link for the title.
        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        // Create news content element.
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        // Create right side of the card.
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        // Create image element for news.
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/default.jpg";
        newsImage.alt = "Foto da Notícia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    /**
     * Adds styles to the component.
     * @returns {HTMLStyleElement} The style element containing the component styles.
     */
    styles() {
        /**
         * Style element containing component styles.
         * @type {HTMLStyleElement}
         */
        const style = document.createElement("style");
        style.textContent = `
        .card {
            width: 80%;
            box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left > span {
            font-weight: 400;
        }
        
        .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card_left > p {
            color: gray
        }
        
        .card_right > img {
            max-height: 250px;
            aspect-ratio: 1;
        }        
        `;

        return style;
    }
}

// Define the custom element.
customElements.define("card-news", Cardnews);
