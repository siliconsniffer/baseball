class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <style>
        .footer {
            display: flex;
            height: 2.5rem;
            justify-content: space-around;
            align-items: center;
            background-color: #2e302f;
            padding: 2.5px;
            color: whitesmoke;
            border-top: 1.5px solid black;
            
        }
        </style>
        <div class="footer"> <!-- Footer (Unterstes Element), enthält wichtige Infos über die Seite -->
        <p>Felix & Linus © 2023</p>
        <a href="impressum/impressum.html">Impressum</a>
        </div class="footer">
        `
    }
}

customElements.define("footer-component", Footer);