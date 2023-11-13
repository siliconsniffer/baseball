class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <style>
        footer {
            display: flex;
            position: relative;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2.5rem;
            justify-content: space-around;
            align-items: center;
            background-color: #3e3e3e;
            margin: 0px;
            padding: 2.5px;
            color: whitesmoke;
            border-top: 1.5px solid black;
            
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