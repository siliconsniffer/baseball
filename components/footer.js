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
            background-color: #e1e1e1;
            padding: 2.5px;
            border-top: 1.5px solid black;
            
        }

        .theme {
            border: none;
            border-radius: 2.5px;
            background-color: #2e302f;
        
            &:hover {
                background-color: #383d39;
            }
        }
        @media (prefers-color-scheme: dark) {
            .footer {
                background-color: #2e302f;
            }
        }
        </style>
        <div class="footer">
            <p>Felix & Linus © 2023</p>
            <a href="impressum/impressum.html">Impressum</a>
            <button class="theme" onclick="toggleMode()">Dark/Light</button>
        </div class="footer">
        `
        // Set the initial mode based on localStorage
        this.setInitialMode();

        this.button = this.querySelector('.theme');
        this.button.addEventListener('click', this.toggleMode.bind(this));
    }
    setInitialMode() {
        const currentMode = localStorage.getItem('mode') || 'dark';

        // Set the initial dark mode class
        document.body.classList.toggle('dark-mode', currentMode === 'dark');
    }

    toggleMode() {
        // Toggle dark mode class on body
        document.body.classList.toggle('dark-mode');

        // Save the mode to localStorage
        localStorage.setItem('mode', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    }
}

customElements.define("footer-component", Footer);