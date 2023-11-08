class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <style>
        footer {
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: #3e3e3e;
            padding: 2.5px;
            color: whitesmoke;
            border-top: 1.5px solid black;
            position: static;
            bottom: 0;
            left: 0;
        }
        </style>
        <footer> <!-- Footer (Unterstes Element), enthält wichtige Infos über die Seite -->
        <p>Felix & Linus © 2023</p>
        <a href="../impressum/impressum.html">Impressum</a>
        </footer>
        `
    }
}

customElements.define("footer-component", Footer);