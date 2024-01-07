class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <style>
        :root {
            --bg-color: #282828;
            --title: #9c9c9c;
        }
        .light-mode {
            --bg-color: #e1e1e1;
            --title: #5e5e5e;
        }
        .footer {
            display: flex;
            height: 2.5rem;
            justify-content: space-around;
            align-items: center;
            background-color: var(--bg-color);
            padding: 2.5px;
            border-top: 1.5px solid black;

        }

        .theme {
            border: none;
            border-radius: 2.5px;
            color: var(--title);
            background-color: var(--bg-color);

            &:hover {
                background-color: var(--drop-shadow-hover);
            }
        }
        </style>
        <div class="footer">
            <p>Felix & Linus © 2023-2024</p>
            <a href="impressum.html">Impressum</a>
            <button class="theme" onclick="toggleMode()">Dark/Light</button>
        </div class="footer">
        `
        // Set the initial mode based on localStorage
        this.setInitialMode();

        this.button = this.querySelector('.theme');
        this.button.addEventListener('click', this.toggleMode.bind(this));
    }

    setInitialMode() {
        const currentMode = localStorage.getItem('mode') || 'light';

        // Set the initial dark mode class
        document.body.classList.toggle('light-mode', currentMode === 'light');
    }

    toggleMode() {
        // Toggle dark mode class on body
        document.body.classList.toggle('light-mode');

        // Save the mode to localStorage
        localStorage.setItem('mode', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    }
}

customElements.define("footer-component", Footer);
